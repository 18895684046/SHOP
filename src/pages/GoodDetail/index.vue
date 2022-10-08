<template>
    <div class="good-detail-wrap">
        <div class="good-title" @click="goBack">
            <van-icon name="arrow-left" size="20px" />
        </div>
        <div class="good-desc-wrap">
            <div class="detail-swipw-wrap">
                <van-swipe :autoplay="3000" lazy-render>
                    <van-swipe-item v-for="image in images" :key="image">
                        <img :src="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="good-price">
                <span class="type">¥</span> <em>352</em> <span class="dot">.80</span>
            </div>
            <div class="good-text">
                卉亿 卉亿新品俄罗斯CCCP定制加厚316不锈钢五5斤装酒壶随身便携式扁酒瓶复古铁 将进酒诗 赠4杯1漏
                赠4杯1漏
            </div>
            <div class="short-desc">可开发票，限时优惠，新疆西藏发不了货慎拍</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

const images: string[] = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
const goBack = () =>{
    history.back()
}

</script>

<style lang="scss" scoped>
.good-title{
    position: absolute;
    z-index: 999;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:#666 ;
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
    .short-desc{
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