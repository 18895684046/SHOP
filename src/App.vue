<script setup lang="ts">
import useNavbar from '@/hooks/useNavbar'
import useProjectId from '@/hooks/useProjectId'
import axios from 'axios';
import { useRoute } from "vue-router";
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const route = useRoute();
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
  buttonPrimaryBackgroundColor: '#07c160',
  actionSheetMaxHeight: '60%'
}
const changeLang = (language: string) => {
  locale.value = language;
}


</script>

<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
  <div class="main">
    <!-- <div class="menu" style="position: absolute;z-index: 9999;">
        <div class="menu-item" @click="changeLang('en')">English</div>
        <div class="menu-item" @click="changeLang('zh')">中文</div>
    </div> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component v-if="route.meta && route.meta.keepAlive" :is="Component" :key="route.path" />
      </keep-alive>
      <component v-if="!(route.meta.keepAlive)" :is="Component" />
    </router-view>
  </div>
  <!-- </van-config-provider> -->
</template>

<style lang="scss">
@import "@/styles/global.scss";

import .main {
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
