import axios from "./axios"

export function UserService() {
  const baseURL = '/users'

  async function Register({ name, lastName, email, password }) {
    return await axios.post(baseURL, { name, lastName, email, password })
  }

  async function Login({ email, password }) {
    return await axios.post(`${baseURL}/login`, { email, password })
  }

  return Object.freeze({
    Register,
    Login
  })
}

