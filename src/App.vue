<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import Header from '@/components/Header/index.vue'
import MobileHeader from '@/mobileComponents/mobileHeader/index.vue'
import { themeOverrides } from '@/theme'
import { getIsMobile } from '@/utils'

const isMobile = getIsMobile()
</script>

<template>
  <NConfigProvider class="n-provider" :theme-overrides="themeOverrides">
    <MobileHeader v-if="isMobile" />
    <Header v-else />

    <div class="main">
      <router-view></router-view>
    </div>
  </NConfigProvider>
</template>

<style lang="scss">
@import "@/styles/global.scss";

@media only screen and (min-width: 768px) {
  .n-provider {
    min-width: 800px;
    height: 100%;
  }

  .main {
    min-width: 800px;
    height: calc(100vh - 76px);
  }
}

@media only screen and (max-width: 767px) {
  .n-provider {
    height: 100%;
  }

  .main {
    height: calc(100vh - 76px);
  }
}
</style>
