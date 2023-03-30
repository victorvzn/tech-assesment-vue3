import { defineStore } from 'pinia'

import { fetchPosts, getPostById } from '../services/posts'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    isLoading: false,
    posts: [],
    post: {
      source: {},
      edited: {}
    }
  }),
  getters: {
    getPosts: (state) => () => {
      const POST_NOT_FOUND = -1

      const postsFromLocalStorage = JSON.parse(window.localStorage.getItem('posts')) || []

      return state.posts.map(sourcePost => {
        const postIndexFound = postsFromLocalStorage.findIndex(post => post.id === sourcePost.id)

        if (postIndexFound === POST_NOT_FOUND) {
          return sourcePost
        }

        return postsFromLocalStorage[postIndexFound]
      })
    },
    getPost: (state) => () => {
      const POST_NOT_FOUND = -1

      const postsFromLocalStorage = JSON.parse(window.localStorage.getItem('posts')) || []

      const sourcePost = state.post.source

      const postIndexFound = postsFromLocalStorage.findIndex(post => post.id === sourcePost.id)

      if (postIndexFound === POST_NOT_FOUND) {
        state.post.edited = sourcePost

        return state.post.edited
      }

      state.post.edited = postsFromLocalStorage[postIndexFound]

      return state.post.edited
    },
    isEditedPost: (state) => {
      const edited = state?.post?.edited
      return Object.entries(edited).length !== 0
    }
  },
  actions: {
    async fetchPosts () {
      try {
        this.isLoading = true

        const response = await fetchPosts()

        this.posts = await response.data
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async getPostById ({ id }) {
      try {
        this.isLoading = true

        const response = await getPostById({ id })

        this.post.source = await response.data
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async savePost ({ id, title, body }) {
      const posts = JSON.parse(window.localStorage.getItem('posts')) || []

      const editedPost = { id, title, body }

      const postIndexFound = posts.findIndex(post => post.id === editedPost.id)
      
      if (postIndexFound === -1) {
        posts.push(editedPost)

        this.post.edited = editedPost
      } else {
        posts[postIndexFound] = editedPost

        this.post.edited = editedPost
      }

      localStorage.setItem('posts', JSON.stringify(posts))
    }
  }
})