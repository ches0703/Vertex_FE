import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setToken = (token) => {
  return cookies.set("Token", token )
}

export const getToken = () => {
  return cookies.get("Token")
}

export const delToken = () => {
  cookies.remove("Token")
}