<script setup lang="ts">
import useNavbar from '@/hooks/useNavbar'
import useProjectId from '@/hooks/useProjectId'

</script>

<template>
    <div class="main">
      <router-view></router-view>
    </div>
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
