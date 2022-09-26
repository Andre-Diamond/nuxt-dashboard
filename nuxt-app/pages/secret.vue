<template>
  <div>
    <div>
      <button class="button m-3"><NuxtLink to="/">Back</NuxtLink></button>
    </div>
    <div class="container p-6">
      <div class="column is-half is-offset-one-quarter has-text-light">
        <table class="table is-bordered has-background-info-dark has-text-light">
  <thead>
    <tr>
      <th>What</th>
      <th>Who</th>
      <th>Date</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>What</th>
      <th>Who</th>
      <th>Date</th>
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