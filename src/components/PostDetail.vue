<script setup>
import { RouterLink } from 'vue-router'

import { usePostsStore } from "../stores/posts"

import PostEdit from '../components/PostEdit.vue'

const postsStore = usePostsStore()

const post = postsStore.getPost()
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

    <pre style="color:red;">{{ post }}</pre>

    <PostEdit />
  </main>
</template>