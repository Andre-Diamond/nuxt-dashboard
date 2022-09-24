<template>
  <div>
    <div>secret</div>
<!--
    <div v-if="firebaseUser">
    <client-only>
    <pre>
    {{ firebaseUser }}
    </pre>
    </client-only>
  </div>
  <div v-else>User signed out</div> -->
</div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})

const firebaseUser = userFirebaseUser();
</script>

<style>
</style>