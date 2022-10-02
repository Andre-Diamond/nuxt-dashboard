<template>
  <div>
    <div>
        <button class="button m-3"><NuxtLink to="/">Home</NuxtLink></button>
        <button class="button m-3">
          <NuxtLink to="/parameterform">Enter Parameter Changes</NuxtLink>
        </button>
        <button class="button is-pulled-right m-3" v-if="!firebaseUser">
          <NuxtLink to="/signin">Log In / Register</NuxtLink>
        </button>
        <p class="is-pulled-right m-4 has-text-grey" v-if="!firebaseUser">user is signed out</p>
        <button class="button is-pulled-right m-3" @click="signOut" v-if="firebaseUser">Sign out</button>
        <p class="is-pulled-right m-4 has-text-light" v-if="firebaseUser"> {{ firebaseUser.email }}</p>
    </div>
    
    <NuxtPage />
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const signOut = async () => {
  await signOutUser();
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
body {
  background-color: rgb(35, 20, 104);
  height: 100vh;
}
</style>