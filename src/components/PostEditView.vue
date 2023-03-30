<script setup>
import { computed } from 'vue'

import { usePostsStore } from "../stores/posts"

const { getPost } = usePostsStore()

const post = computed(() => getPost());
</script>

<template>
  <article class="post-item">
    <h2 class="post-item__title">{{ post.title }}</h2>
    <p class="post-item__body">{{  post.body }}</p>

    <strong>History</strong>
  </article>
</template>