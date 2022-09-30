<template>
    <van-nav-bar fixed :title='props?.text' :left-text="props?.leftText" :spec="props?.spec" left-arrow
        @click-left="onClickLeft" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps<{
    text?: string,
    leftText?: string,
    spec?: string
}>()

const onClickLeft = () => {
    if (props?.spec) {
        router.push(props.spec)
    } else {
        history.back()
    }
}
</script>

<style lang="scss" scoped>

</style>