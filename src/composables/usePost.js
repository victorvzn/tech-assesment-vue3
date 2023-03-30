import { usePostsStore } from "../stores/posts"

export function usePost() {

  const postsStore = usePostsStore()

  const originPost = postsStore.getPost()

  const posts = JSON.parse(window.localStorage.getItem('posts')) || []

  const postIndexFound = posts.findIndex(post => post.id === originPost.id)

  if (postIndexFound === -1) {
    return { post: originPost }
  }

  return { post: posts[postIndexFound], originPost } 
}