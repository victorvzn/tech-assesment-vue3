import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL

const headers = { 'Content-Type': 'application/json' }

const instance = axios.create({
  baseURL: `${baseURL}`,
  headers
})

export default instance