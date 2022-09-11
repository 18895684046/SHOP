
<template>
    <div>
        <van-tabbar route>
            <van-tabbar-item to="/example" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/classify" icon="search">分类</van-tabbar-item>
            <van-tabbar-item to="/registe" icon="friends-o">京喜</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="setting-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/login" icon="setting-o">未登录</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const active = ref<number>(0);

const goHome = () => {
    router.push('/')
}
const goClassify = () => {
    router.push('/classify')
}
</script>
    
    
<style lang="scss" scoped>

</style>