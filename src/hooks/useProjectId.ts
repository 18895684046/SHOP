import { ref, computed } from 'vue'
import { useStore, Actions } from '@/store'
import { getProjects } from "@/http/service/uniauth"

// 项目信息
interface Project {
  label: string;
  value: string;
  [propName: string]: any;
}

const useProjectId = () => {
  const { getters, dispatch } = useStore()

  const projects = ref<Project[]>([])
  const projectId = computed<string>(() => getters.projectId)

  const initProjectId = () => {
    (window as any).$loadingBar.start()

    // 设置默认 projectId
    dispatch(Actions.setDefaultProjectId)

    getProjects({ appName: 'default' }).then(
      (res: any) => {
        if (res.success) {
          (window as any).$loadingBar.finish()

          projects.value = res?.data?.map(
            (p: Project) => ({
              label: `${p?.projectId}  ${p?.projectName}`,
              value: p?.projectId
            })
          )
        }
      }
    )
  }

  // 选择项目 回调
  const handleProjectSelected = (projectId: string) => {
    dispatch(Actions.updateDefaultProjectId, projectId)
  }

  return {
    initProjectId,
    projectId,
    projects,
    handleProjectSelected
  }
}

export default useProjectId
