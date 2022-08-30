<script setup lang="ts">
import { nextTick } from 'vue'
import { NConfigProvider, NLoadingBarProvider, NMessageProvider } from 'naive-ui'
import Header from '@/components/Header/index.vue'
import MobileHeader from '@/mobileComponents/mobileHeader/index.vue'
import { themeOverrides } from '@/theme'
import LoadingBarApi from '@/components/LoadingBarApi/index.vue'
import MessageApi from '@/components/MessageApi/index.vue'
import useNavbar from '@/hooks/useNavbar'
import useProjectId from '@/hooks/useProjectId'
import usePermissions from '@/hooks/usePermissions'

const services = useNavbar()
const {
  initProjectId,
  projectId,
  projects,
  handleProjectSelected
} = useProjectId()

const {
  initPermissions,
} = usePermissions()

const init = () => {
  initProjectId()
  initPermissions()
}

nextTick(() => init())
</script>

<template>
  <NConfigProvider class="n-provider" :theme-overrides="themeOverrides">
    <NLoadingBarProvider>
      <LoadingBarApi />
    </NLoadingBarProvider>

    <NMessageProvider>
      <MessageApi />
    </NMessageProvider>

    <div class="hd-mobile">
      <MobileHeader 
        :services="services" 
        :projectId="projectId" 
        :projects="projects" 
        :handleProjectSelected="handleProjectSelected" 
      />
    </div>

    <div class="hd-pc">
      <Header
        :services="services" 
        :projectId="projectId" 
        :projects="projects" 
        :handleProjectSelected="handleProjectSelected"
      />
    </div>
    
    <div class="main">
      <router-view></router-view>
    </div>
  </NConfigProvider>
</template>

<style lang="scss">
@import "@/styles/global.scss";

.main {
  height: calc(100vh - 50px);
  overflow: auto;
  background-size: 100% 100%;
  background-image: url(https://s1.hdslb.com/bfs/static/stone-free/dyn-home/assets/background.png);
  background-position: top;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

@media only screen and (min-width: 1100px) {
  .n-provider {
    height: 100%;
  }

  .hd-mobile {
    display: none;
  }
}

@media only screen and (max-width: 1099px) {
  .n-provider {
    height: 100%;
  }

  .hd-pc {
    display: none;
  }
}
</style>
