<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import Header from '@/components/common/Header.vue'

const $bili_blue = '#0CB6F2'

// 自定义naive全局样式
const themeOverrides = {
  common: {
    primaryColor: $bili_blue
  },
  Button: {
    borderHover: `1px solid ${$bili_blue}`,
    borderPressed: `1px solid ${$bili_blue}`,
    borderFocus: `1px solid ${$bili_blue}`,
    borderHoverPrimary: `1px solid ${$bili_blue}`,
    borderPressedPrimary: `1px solid ${$bili_blue}`,
    borderFocusPrimary: `1px solid ${$bili_blue}`,
    textColorGhostHover: $bili_blue,
    textColorGhostPressed: $bili_blue,
    textColorGhostFocus: $bili_blue,
    textColorGhostPrimary: $bili_blue,
    textColorGhostHoverPrimary: $bili_blue,
    textColorGhostPressedPrimary: $bili_blue,
    textColorGhostFocusPrimary: $bili_blue,
  }
}
</script>

<template>
  <NConfigProvider class="n-provider" :theme-overrides="themeOverrides">
    <Header />

    <div class="main">
      <router-view></router-view>
    </div>
  </NConfigProvider>
</template>

<style lang="scss">
@import "@/styles/global.scss";

.n-provider {
  min-width: 800px;
  height: 100%;
}

.main {
  min-width: 800px;
  height: calc(100% - 56px);
}
</style>
