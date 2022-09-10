<template>
    <TitleCpm text="购物车" leftText='返回' />
    <div class="cart-wrap">
        <div class="cart-des">登录后可同步账户购物车中的商品</div>
        <van-empty image="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" image-size="80"
            description="登录后可同步购物车中商品" />
    </div>
    <TabbarCom />
</template>

<script setup lang="ts">
import TabbarCom from '@/components/Tabbar.vue'
import TitleCpm from '@/components/Title.vue';

</script>
<style scoped lang="scss">
.cart-wrap {
    padding-top: 45px;

    .cart-des {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 2px solid rgb(211, 208, 208);
        background: #fff;
        height: 50px;

    }
}
</style>