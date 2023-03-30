import request from '../utils/request'

export function fetchPosts() {
  return request({ method: 'GET', url: 'posts' })
}

export function getPostById({ id }) {
  return request({ method: 'GET', url: `posts/${id}` })
}

// export const fetchPosts= async () => {
//   const response = await fetch(baseURL)
//   const data = await response.json()
//   return data
// }

