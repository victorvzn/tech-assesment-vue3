<script setup>
import { onBeforeMount } from "vue";

import PostList from '../components/PostList.vue'

import { usePostsStore } from "../stores/posts"

const { fetchPosts, isLoading } = usePostsStore()

onBeforeMount(async () => {
  await fetchPosts()
})
</script>

<template>
  <h1>Post List</h1>

  <div v-if="isLoading">Cargando...</div>
  
  <PostList v-else />
</template>