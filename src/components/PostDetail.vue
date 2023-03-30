<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { usePostsStore } from "../stores/posts"

import PostEdit from '../components/PostEdit.vue'

const { getPost } = usePostsStore()

const post = computed(() => getPost());
</script>

<template>
  <nav>
    <router-link :to="{ name: 'post-list' }">Back home</router-link>
  </nav>
  <main class="post-list">
    <article class="post-item">
      <h2 class="post-item__title">{{ post.title }}</h2>
      <p class="post-item__body">{{  post.body }}</p>
    </article>

    <PostEdit />
  </main>
</template>