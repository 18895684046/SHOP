import { computed, watch } from 'vue'
import Cookies from 'js-cookie'
import { useStore, Mutations } from '@/store'
import { getPermissions } from '@/http/service/uniauth'
import useProjectId from './useProjectId'

// 获取用户权限
const usePermissions = () => {
  const { getters, commit } = useStore()
  const { projectId } = useProjectId()

  const permissions = computed<string>(() => getters.permissions)

  const initPermissions = () => {
    if (!projectId.value) return 

    getPermissions({
      appName: 'default',
      email: Cookies.get('email'),
      projectId: projectId.value
    }).then(
      (res: any) => {
        if (res.success) {
          commit(Mutations.setPermissions, res.data)
          console.log(res)
        }
      }
    )
  }

  watch(projectId, () => initPermissions())

  return {
    permissions,
    initPermissions,
  }
}

export default usePermissions
