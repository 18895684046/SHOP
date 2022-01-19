import Cookies from 'js-cookie'

// 登出
export const logout = () => {
  Cookies.remove('fullname')
  Cookies.remove('email')
  window.location.href = `${import.meta.env.VITE_LOGOUT_URL}?next=${window.location.href}`
}