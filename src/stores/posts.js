import { defineStore } from 'pinia'

import { fetchPosts, getPostById } from '../services/posts'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    isLoading: false,
    posts: [],
    post: {}
  }),
  getters: {
    getPosts: (state) => () => {
      const POST_NOT_FOUND = -1

      const postsFromLocalStorage = JSON.parse(window.localStorage.getItem('posts')) || []

      return state.posts.map(originPost => {
        const postIndexFound = postsFromLocalStorage.findIndex(post => post.id === originPost.id)

        if (postIndexFound === POST_NOT_FOUND) {
          return originPost
        }

        return postsFromLocalStorage[postIndexFound]
      })
    },
    getPost: (state) => () => {
      const POST_NOT_FOUND = -1

      const postsFromLocalStorage = JSON.parse(window.localStorage.getItem('posts')) || []

      const originPost = state.post

      const postIndexFound = postsFromLocalStorage.findIndex(post => post.id === originPost.id)

      if (postIndexFound === POST_NOT_FOUND) {
        return originPost
      }

      console.log('>>>>')
      
      return postsFromLocalStorage[postIndexFound]
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

        console.log(response.data)

        this.post = await response.data
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async savePost ({ id, title, body }) {
      const posts = JSON.parse(window.localStorage.getItem('posts')) || []

      const newPost = { id, title, body }

      const postIndexFound = posts.findIndex(post => post.id === newPost.id)

      if (postIndexFound === -1) {
        posts.push(newPost)
      } else {
        posts[postIndexFound] = newPost
      }

      localStorage.setItem('posts', JSON.stringify(posts))
    }
  }
})