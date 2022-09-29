<template>
    <TitleCpm text="填写订单" leftText='返回' />
    <div class="order-wrap">
        <div class="order-address">
            <span class="order-address-top" @click="openShipAddress">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import TitleCpm from '@/components/Title.vue';
import router from '@/router';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()


const openShipAddress = () => {
    router.push('/shipaddress')
}
onMounted(()=>{
    console.log(route.params.test,'route');

})

</script>

<style lang="scss" scoped>
.order-wrap {
    padding: 10px;

    .order-address {
        margin-top: 40px;

        .order-address-top {
            font-size: 15px;
            font-weight: 600;
            word-spacing: 2px;
        }
    }
}
</style>