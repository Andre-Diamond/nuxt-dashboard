<template>
  <div>
    <div>
      <button class="button m-3" v-if="firebaseUser">
        <NuxtLink to="/secret">View Changes</NuxtLink>
      </button>
      <button class="button is-pulled-right m-3" @click="signOut" v-if="firebaseUser">Sign out</button>
      <p class="is-pulled-right m-4 has-text-light">user: {{ firebaseUser.email }}</p>
    </div>
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
    <div v-else>User is signed out</div>
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
};
const showData = async () => {
  const { result } = await $fetch("/api/query?col=pages");
  pages.value = result;
};
</script>

<style>
</style>