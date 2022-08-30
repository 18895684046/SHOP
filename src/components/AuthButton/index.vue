<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { NButton } from 'naive-ui'

const props = defineProps<{
  // 权限按钮所关联的权限
  btnAuth: string,
}>()

const { getters } = useStore()

// 用户拥有的所有权限
const userPermissions = computed<string[]>(() => getters.permissions)

const isBtnHasPermission = computed<boolean>(
  () => userPermissions.value.includes(props.btnAuth)
)
</script>

<template>
  <NButton
    :disabled="!isBtnHasPermission"
  >
    <slot name="icon"></slot>
    <slot name="default"></slot>
  </NButton>
</template>

<style lang="scss" scoped>
@import "@/styles/constant.scss";
@import "./index.scss";
</style>
