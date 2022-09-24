<template>
  <div>
    <button class="button" @click="signIn" v-if="!firebaseUser">Sign In</button>
    <button class="button" @click="signOut" v-if="firebaseUser">Sign Out</button>
    <div v-if="firebaseUser">
    <client-only>
    <pre>
    {{ firebaseUser }}
    </pre>
    </client-only>
  </div>
  <div v-else>User signed out</div>
  </div>
</template>

<script setup>
console.log("---APP---");
const firebaseUser = userFirebaseUser();

const credentials = ref();

const signIn = async () => {
  const email = "sam@razorex.com";
  const password = "123456";
  credentials.value = await signInUser(email,password);
}

const signOut = async () => {
  credentials.value = await signOutUser();
}

onMounted(async () => {
  //const email = "sam@razorex.com";
  //const password = "123456";
  //const credentials = await createUser(email,password);
  //console.log("Credentials",credentials);

});

</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
