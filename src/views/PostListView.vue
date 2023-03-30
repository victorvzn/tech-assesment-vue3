<script setup>
import { onBeforeMount } from "vue";

import PostList from '../components/PostList.vue'

import { usePostsStore } from "../stores/posts"

const postsStore = usePostsStore()

onBeforeMount(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <h1>Post List</h1>

  <PostList />
</template>