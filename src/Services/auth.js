import axios from 'axios'

export async function login (credentials) {
  const { data } = await axios.post(import.meta.env.VITE_API_HOST + '/api/login', credentials)
  return data
}

export async function register (body) {
  const { data } = await axios.post(import.meta.env.VITE_API_HOST + '/api/users/register', body)
  return data
}
