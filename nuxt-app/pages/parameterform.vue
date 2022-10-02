<template>
    <div>
      <div v-if="firebaseUser">
        <div class="container p-6">
        <div class="column is-half is-offset-one-quarter">
          <InputForm
            class="has-background-info-dark box px-5 py-5 mx-4"
            title="Enter Parameter change"
            @submit="addData"
            :form="registerForm"
            :message="registerMessage"
          />
        </div>
        </div>
        <client-only>
          <pre>
            {{ pages }}
            <button class="button" @click="showData" v-if="firebaseUser">Show data</button>
          </pre>
        </client-only>
      </div>
      <div v-else class="has-background-link-dark box p-6 m-6 has-text-grey-lighter">You need to log in</div>
    </div>
  </template>
  
  <script setup> 
  const firebaseUser = useFirebaseUser();
  const showRegisterForm = ref(true);
  const registerMessage = ref();
  const registerForm = ref({ whatChanged: "", initiatedBy: "", date: "" });
  const pages = ref();
  const signOut = async () => {
    await signOutUser();
  };
  const addData = async () => {
    // Add a new document in collection "cities"
     await $fetch("/api/add?col=pages", {
        method: "POST",
        body: {what: registerForm.value.whatChanged,
        who: registerForm.value.initiatedBy,
        date: registerForm.value.date}
      })
      registerForm.value = { whatChanged: "", initiatedBy: "", date: "" };
      registerMessage.value = `Successfully registered`;
      setTimeout(() => {
        registerMessage.value = "";
      }, 3000);
  };
  const showData = async () => {
    const { result } = await $fetch("/api/query?col=pages");
    pages.value = result;
  };
  </script>
  
  <style>
  </style>