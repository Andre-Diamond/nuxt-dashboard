<template>
  <div>
    <button class="button" @click="signIn">Sign In</button>
    <button class="button" @click="signOut">Sign Out</button>
  </div>
</template>

<script setup>
console.log("---APP---");

const signIn = async () => {
  const email = "sam@razorex.com";
  const password = "123456";
  const credentials = await signInUser(email,password);
  console.log("Credentials",credentials);
}

const signOut = async () => {
  const result = await signOutUser();
  console.log("result", result);
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
