<template>
  <div>
    <div class="container p-6" v-if="!firebaseUser">
      <div class="column is-half is-offset-one-quarter">
        <AuthFirebase
          class="has-background-info-dark box px-5 py-5 mx-4"
          title="Register"
          @submit="register"
          :form="registerForm"
          :message="registerMessage"
          v-if="showRegisterForm"
        />
        <AuthFirebase
          class="has-background-link-dark box px-5 py-5 mx-4"
          title="Sign in"
          @submit="signin"
          :form="signinForm"
          v-if="!firebaseUser && !showRegisterForm"
        />
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          <button class="button" @click="showRegisterForm = !showRegisterForm">
            Sign In / Register
          </button>
        </div>
      </div>
    </div>
    <NuxtPage v-if="firebaseUser" />
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const showRegisterForm = ref(false);
const registerMessage = ref();
const registerForm = ref({ email: "", password: "" });
const signinForm = ref({ email: "", password: "" });

const signin = () => {
  signInUser(signinForm.value.email, signinForm.value.password);
  signinForm.value = { email: "", password: "" };
};
const register = async () => {
  console.log(registerForm.value);
  const credentials = await createUser(
    registerForm.value.email,
    registerForm.value.password
  );
  registerForm.value = { email: "", password: "" };
  if (credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`;
    setTimeout(() => {
      registerMessage.value = "";
    }, 3000);
  }
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