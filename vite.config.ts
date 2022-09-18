import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle: name => `../es/${name}/style/index`
      }]
    }),
  ],
  resolve: {
    alias: {
      '@': '/src/',
    }
  },
  // 代理
  server: {
    cors: true, // 默认启用并允许任何源
    proxy: {
      '/app-api': {
        target: 'http://mall.werfamily.fun/app-api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app-api/, '')
      }
    }
  }
})
