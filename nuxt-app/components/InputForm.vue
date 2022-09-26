<template>
    <div>
      <h2 class="mb-5 title is-4 has-text-light">{{ title }}</h2>
      <div class="field">
        <label class="label has-text-grey-lighter">What changed</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="form.whatChanged"
            class="input"
            type="text"
            placeholder="What changed"
            autocomplete="false"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-cog"></i>
          </span>
        </div>
      </div>
      <div class="field">
          <label class="label has-text-grey-lighter">Who initiated</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="form.initiatedBy"
              class="input"
              type="text"
              placeholder="IOG"
              autocomplete="false"
            />
            <span class="icon is-small is-left">
            <i class="fas fa-users"></i>
            </span>
          </div>
      </div>
      <div class="field">
          <label class="label has-text-grey-lighter">Date</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="form.date"
              class="input"
              type="text"
              placeholder="March 2022"
              autocomplete="false"
            />
            <span class="icon is-small is-left">
            <i class="fas fa-calendar"></i>
            </span>
          </div>
      </div>
      
  
      <div v-if="message" class="has-text-success p-3">
        {{ message }}
      </div>
  
      <button class="button is-success" @click="$emit('submit')">Submit</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    form: Object,
    title: String,
    message: String
  });
  </script>
  
  <style scoped></style>