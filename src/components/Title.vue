<template>
    <van-nav-bar fixed :title='props?.text' :left-text="props?.leftText" left-arrow @click-left="onClickLeft" />
</template>

<script setup lang="ts">
const props = defineProps<{
    text?: string,
    leftText?: string
}>()

const onClickLeft = () => history.back();
</script>

<style lang="scss" scoped>

</style>