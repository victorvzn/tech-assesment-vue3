<template>
  <form class="post-edit-form" @submit.prevent="onSubmit">
    <h3>Edit post</h3>
    <input type="text" v-model="formEditPost.id" />
    <label>
      <span>Title</span>
      <input name="postTitle" required v-model="formEditPost.title" />
    </label>
    <label>
      <span>Body</span>
      <textarea v-model="formEditPost.body" />
    </label>
    <button>Save</button>
    <button type="reset">Clean</button>
  </form>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'

import { usePostsStore } from "../stores/posts"

const postsStore = usePostsStore()

const post = postsStore.getPost()

const DEFAULT_FORM_EDIT_POST = {
  id: null,
  title: '',
  body: '',
}

const formEditPost = reactive(DEFAULT_FORM_EDIT_POST)

const onSubmit = (event) => {
  const updatedForm = {...formEditPost}

  postsStore.savePost(updatedForm)
}

onBeforeMount(async () => {
  formEditPost.id = post.id
  formEditPost.title = post.title
  formEditPost.body = post.body
})
</script>