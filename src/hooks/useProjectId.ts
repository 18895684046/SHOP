import { ref, computed } from 'vue'
import { useStore, Mutations, Actions } from '@/store'
import { getProjects } from "@/http/service/uniauth"

// 项目信息
interface Project {
  label: string;
  value: string;
  [propName: string]: any;
}

const useProjectId = () => {
  const { getters, commit, dispatch } = useStore()

  const projects = ref<Project[]>([])
  const projectId = computed<string>(() => getters.projectId)

  // 设置默认 projectId
  dispatch(Actions.setDefaultProjectId)

  // 选择项目 回调
  const handleProjectSelected = (projectId: string) => {
    dispatch(Actions.updateDefaultProjectId, projectId)
  }

  getProjects().then(
    (res: any) => {
      if (res.success) {
        projects.value = res?.data?.map(
          (p: Project) => ({
            label: `${p?.projectId}  ${p?.projectName}`,
            value: p?.projectId
          })
        )
      }
    }
  )
  
  return {
    projectId,
    projects,
    handleProjectSelected
  }
}

export default useProjectId
