<script setup lang="ts">
import loadingBgImg from '@/assets/loading_bg.png'
import loadingIconImg from '@/assets/loading_icon.png'

</script>

<template>
  <div class="loading-wrp">
    <div class="loading-bg-wrp">
      <img class="loading-bg" :src="loadingBgImg" />

      <img class="loading-icon" :src="loadingIconImg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrp {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-bg-wrp {
    position: relative;
    display: inline-block;
    width: 200px;

    .loading-bg {
      width: 100%;
    }

    .loading-icon {
      position: absolute;
      top: 45%;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 10%;
      animation: spin 2s infinite linear;

      @keyframes spin {
        from {
          transform: rotate(0);
        }

        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>