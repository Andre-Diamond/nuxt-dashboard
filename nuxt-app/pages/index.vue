<template>
  <div>
    <p><NuxtLink to="/secret">Go to Secret Page</NuxtLink></p>
    <button class="button" @click="signOut" v-if="firebaseUser">Sign out</button>
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
          user: {{ firebaseUser.email }}
          {{ pages }}
          <button class="button" @click="showData" v-if="firebaseUser">Show data</button>
        </pre>
      </client-only>
    </div>
    <div v-else>User is signed out</div>
  </div>
</template>

<script setup> 
const firebaseUser = useFirebaseUser();
const showRegisterForm = ref(true);
const registerMessage = ref();
const registerForm = ref({ whatChanged: "", initiatedBy: "" });
const pages = ref();
const signOut = async () => {
  await signOutUser();
};
const addData = async () => {
  // Add a new document in collection "cities"
   await $fetch("/api/add?col=pages", {
      method: "POST",
      body: {name: registerForm.value.whatChanged,
      title: registerForm.value.initiatedBy,
      description: "This is a test"}
    })
};
const showData = async () => {
  const { result } = await $fetch("/api/query?col=pages");
  pages.value = result;
};
</script>

<style>
</style>