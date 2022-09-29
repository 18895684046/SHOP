<template>
  <div class="container">
    <div class="hearder-wrap">
      <div class="icon-wrap">
        <van-icon name="location-o" />
      </div>
      <van-field class="search-inp" v-model="valueText" label="" left-icon="search" placeholder="搜索" />
      <span class="login-text">登录</span>
    </div>
    <div class="swipe-wrap">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="swipe in  swipeList">
          <img :src="swipe?.imgUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="classify-wrap">
      <div class="singe-classify" v-for="item in goodsTypes">
        <img
          :src="item?.iconUrl"
          alt="类别图片">
        <span>{{item?.text}}</span>
      </div>
    </div>
    <div class="card-wrap">
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
      <van-card class="card-single" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      </van-card>
    </div>
    <TabbarCom />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabbarCom from '@/components/Tabbar.vue'
import { getSwipeList, getGoodsType } from './service/index'

const valueText = ref<string>('')
const swipeList = ref<any[]>([])
const goodsTypes = ref<any[]>([])
getSwipeList().then(res => {
  console.log(res, '11');
  const { data } = res
  swipeList.value = data
})

getGoodsType().then(res => {
  console.log(res, '00');
  goodsTypes.value = res?.data
})


</script>

<style lang="scss" scoped>
.hearder-wrap {
  display: flex;
  background: red;
  position: fixed;
  z-index: 999;
  top: 0px;
  right: 0px;
  left: 0px;

  .icon-wrap {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #fff;
    margin-left: 2px;
  }

  .search-inp {
    border-radius: 20px;
    padding: 5px 16px;
    height: 30px;
    margin: 5px;
  }

  .login-text {
    display: flex;
    align-items: center;
    width: 50px;
    color: #fff;
  }
}

.swipe-wrap {
  margin-top: 40px;

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 414px;
    height: 155px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.classify-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  height: 160px;
  position: relative;
  // background: green;

  .singe-classify {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;

    img {
      height: 44px;
      width: 44px;
      border-radius: 10px;
    }

  }
}

.card-wrap {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;

  .card-single {
    width: 50%;
  }
}

// .card-single .van-card__header {
//   flex-direction: column !important;
// }
</style>