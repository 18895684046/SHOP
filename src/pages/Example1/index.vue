<script setup lang="ts">
import { NCard } from 'naive-ui'
import useApps from './hooks/useApps'

const apps = useApps()
</script>

<template>
  <div class="container">
    <NCard v-for="app of apps" :title="app?.appName">
      22222222
    </NCard>
  </div>
</template>


<style lang="scss" scoped>
@import "./index.scss";

</style>