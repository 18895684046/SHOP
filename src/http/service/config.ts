export default {
  // navbar的地址 测试环境和生产环境都是同一个服务地址，所以需要用完整地址
  navbar: `https://qagame.bilibili.co/static/web/${import.meta.env.MODE === 'production' ? 'qa' : 'qa-dev'}/navbar.json`,
}