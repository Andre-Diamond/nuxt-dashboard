<template>
  <div>
    <p><NuxtLink to="/secret">Go to secret page</NuxtLink></p>
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

</style>
