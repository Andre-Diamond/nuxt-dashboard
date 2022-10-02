<template>
  <div>
    <div>
    <div v-if="firebaseUser">
        You are signed in
    </div>
    <div v-else>User is signed out</div>
  </div>
    <div class="has-background-link-dark box p-6 m-6">
      <div class="column is-half">
        <table class="table is-bordered has-background-info-dark has-text-grey-lighter">
  <thead>
    <tr>
      <th class="has-text-grey-lighter">What</th>
      <th class="has-text-grey-lighter">Who</th>
      <th class="has-text-grey-lighter">Date</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th class="has-text-grey-lighter">What</th>
      <th class="has-text-grey-lighter">Who</th>
      <th class="has-text-grey-lighter">Date</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>{{ what }}</td>
      <td>{{ who }}</td>
      <td>{{ date }}</td>
    </tr>
  </tbody>
  </table>
      </div>
    </div> 
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const pages = ref();
const who = ref();
const what = ref();
const date = ref();
const showData = async () => {
  const { result } = await $fetch("/api/query?col=pages");
  who.value = result[1].who;
  what.value = result[1].what;
  date.value = result[1].date;
};
showData();
</script>

<style></style>