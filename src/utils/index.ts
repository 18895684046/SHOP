import Cookies from 'js-cookie'

// 登出
export const logout = () => {
  Cookies.remove('fullname')
  Cookies.remove('email')
  window.location.href = `${import.meta.env.VITE_LOGOUT_URL}?next=${window.location.href}`
}

// 判断是否是移动端
export const getIsMobile = () => {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  );

  return !!flag;
};