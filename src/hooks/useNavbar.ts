import { ref } from 'vue'
import { getNavbar } from "@/http/service/navbar"

// 菜单项数据
interface MenuItem {
  disabled: boolean;
  name: string;

  // 子菜单
  submenu?: any[];
  url: string;
}

const useNavbar = () => {
  const services = ref<any>([])

  // 获取所有服务信息
  getNavbar().then(
    res => {
      services.value = res?.data?.menu?.find((i: any) => i.name === '测试服务')?.submenu
    }
  )

  return services
}

export default useNavbar
