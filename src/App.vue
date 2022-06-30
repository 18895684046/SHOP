<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import Header from '@/components/Header/index.vue'
import MobileHeader from '@/mobileComponents/mobileHeader/index.vue'
import { themeOverrides } from '@/theme'
</script>

<template>
  <NConfigProvider class="n-provider" :theme-overrides="themeOverrides">
    <div class="hd-mobile">
      <MobileHeader />
    </div>

    <div class="hd-pc">
      <Header />
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </NConfigProvider>
</template>

<style lang="scss">


@import "@/styles/global.scss";

@media only screen and (min-width: 1100px) {
  .n-provider {
    height: 100%;
  }

  .hd-mobile {
    display: none;
  }

  .main {
    height: calc(100vh - 76px);
  }
}

@media only screen and (max-width: 1099px) {
  .n-provider {
    height: 100%;
  }

  .hd-pc {
    display: none;
  }

  .main {
    height: calc(100vh - 76px);
  }
}
</style>
