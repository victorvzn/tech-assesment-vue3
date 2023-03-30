<script setup>
import { RouterLink } from 'vue-router'

import { usePostsStore } from "../stores/posts"

const { getPosts } = usePostsStore()
</script>

<template>
  <main class="post-list">
    <article
      class="post-item"
      v-for="post in getPosts()"
      :key="post.id"
    >
      <router-link :to="{ name: 'post-detail', params: { id: post.id} }">
        <h2 class="post-item__title">{{ post.title }}</h2>
      </router-link>
      <p class="post-item__body">{{  post.body }}</p>
    </article>
  </main>
</template>