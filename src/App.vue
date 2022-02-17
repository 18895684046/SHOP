<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from '@/theme'

</script>

<template>
  <NConfigProvider class="n-provider" :theme-overrides="themeOverrides">
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
