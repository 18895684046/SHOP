<template>
    <div class="good-detail-wrap">
        <div class="good-title" @click="goBack">
            <van-icon name="arrow-left" size="20px" />
        </div>
        <div class="good-desc-wrap">
            <div class="detail-swipw-wrap">
                <van-swipe :autoplay="3000" lazy-render>
                    <van-swipe-item v-for="image in goodsDetail?.imgUrl" :key="image">
                        <img :src="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="good-price">
                <span class="type">¥</span><em>{{handlePrice}}</em><span class="dot">.{{dotPrice}}</span>
            </div>
            <div class="good-text">
                {{goodsDetail?.desc}}
            </div>
            <div class="short-desc">{{goodsDetail?.tip}}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getGoodDetailById } from '../Example/service/index'
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

type Detail = {
    imgUrl: Array<string>,
    price: string,
    desc: string,
    tip?: string,
}

const route = useRoute()
const goodsDetail = ref<Detail>()

const goBack = () => {
    history.back()
}
const handlePrice = computed(()=>{
    if(goodsDetail.value?.price?.includes('.')){
        return goodsDetail.value?.price?.split('.')[0]
    }else{
        return goodsDetail.value?.price
    }
})

const dotPrice = computed(()=>{
    if(goodsDetail.value?.price?.includes('.')){
        return goodsDetail.value?.price?.split('.')[1]?.padEnd(2,'0')
    }else{
        return '00'
    }
})

getGoodDetailById({ id: route.params.id as string }).then((res) => {
    if (res?.success) {
        goodsDetail.value = res?.data?.details
    }
})

</script>

<style lang="scss" scoped>
.good-title {
    position: absolute;
    z-index: 999;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.good-desc-wrap {
    width: 375px;
    height: 542px;
    background: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    .short-desc {
        font-size: 13px;
        padding: 5px 18px;
    }

    .detail-swipw-wrap {
        img {
            width: 375px;
            height: 375px;
        }
    }

    .good-price {
        color: #f2270c;
        display: inline-block;
        font-family: JDZH-Regular;
        font-size: 30px;
        line-height: 30px;
        padding: 6px 18px;

        .type {
            font-size: 20px;
        }

        em {
            font-style: normal;
        }

        .dot {
            font-size: 18px;
        }
    }

    .good-text {
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        padding: 6px 18px;
    }
}
</style>