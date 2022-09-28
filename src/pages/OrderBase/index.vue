<template>
    <TitleCpm text="填写订单" leftText='返回' />
    <div class="order-wrap">
        <div class="order-address">
            <span @click="openShipAddress">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import TitleCpm from '@/components/Title.vue';
import router from '@/router';


const openShipAddress = () => {
    router.push('/shipaddress')
}




</script>

<style lang="scss" scoped>
.order-wrap {
    padding: 10px;

    .order-address {
        margin-top: 40px;

    }
}
</style>