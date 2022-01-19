<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NButton } from 'naive-ui'
import notFoundImg from '@/assets/not_found.png'
import sorry from '@/assets/sorry.png'

const router = useRouter()

// 返回上一页 
const handleRollback = () => {
  router.back()
}
</script>

<template>
  <div class="error-container">
    <div class="error-panel error-404">
      <img :src="notFoundImg" />
      <div class="rollback-btn-wrp">
        <NButton class="rollback-btn" color="#00a1d6" @click="handleRollback">返回上一页</NButton>
      </div>
      <img :src="sorry" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-container {
  width: 980px;
  margin: 30px auto 30px;
  background: #fff;
  border-radius: 10px;

  .error-panel {
    text-align: center;

    .rollback-btn-wrp {
      text-align: center;
      padding: 0 0 40px 0;

      .rollback-btn {
        padding: 0 20px;
      }
    }
  }
}
</style>