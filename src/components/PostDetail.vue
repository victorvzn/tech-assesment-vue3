<script setup>
import { RouterLink } from 'vue-router'

import PostEditView from './PostEditView.vue'
import PostEditForm from './PostEditForm.vue'
</script>

<template>
  <nav>
    <router-link :to="{ name: 'post-list' }">Back home</router-link>
  </nav>
  <main class="post-list">
    <PostEditView />

    <PostEditForm />
  </main>
</template>