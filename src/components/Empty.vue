<script setup lang="ts">
import emptyImg from '@/assets/empty.png'

</script>

<template>
  <div class="empty-wrp">
    <img :src="emptyImg" />
  </div>
</template>

<style lang="scss" scoped>
.empty-wrp {
  min-height: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>