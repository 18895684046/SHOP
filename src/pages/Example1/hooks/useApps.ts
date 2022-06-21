import { ref } from 'vue'
import { getApps } from '../service'

// 单个App数据结构
interface App {
  id: number;
  appName: string;
  appNickname: string;
  createTime?: string | null;
  createUser?: string | null;
  [propName: string]: any;
}

const useApps = () => {
  // 应用数据
  const apps = ref<App | null>(null)

  // 初始化数据
  const init = () => {
    getApps().then(
      res => {
        apps.value = res?.data
      }
    )
  }

  // 此处执行 相当于在created中执行
  init()

  return apps
}

export default useApps