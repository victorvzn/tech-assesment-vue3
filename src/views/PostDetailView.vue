<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from 'vue-router'

import { usePostsStore } from "../stores/posts"

import PostDetail from '../components/PostDetail.vue'

const postsStore = usePostsStore()

const route = useRoute()

const postId = route.params.id

onBeforeMount(async () => {
  await postsStore.getPostById({ id: postId })
})
</script>

<template>
  <div v-if="postsStore.isLoading">Cargando...</div>
  <PostDetail v-else />
</template>