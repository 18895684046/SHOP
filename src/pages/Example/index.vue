<template>
  <div class="container">
    <div class="hearder-wrap">
      <div class="header-search-wrap">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @focus="searchFocus" @search="onSearch" @cancel="onCancel" />
      </div>
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
        <img :src="item?.iconUrl" alt="类别图片">
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
import { useRouter } from 'vue-router';
import { Toast, ToastOptions } from 'vant';

import TabbarCom from '@/components/Tabbar.vue'
import { getSwipeList, getGoodsType } from './service/index'

const router = useRouter()
const valueText = ref<string>('')
const swipeList = ref<any[]>([])
const goodsTypes = ref<any[]>([])
const value = ref<string>('');
const onSearch = (val: string | ToastOptions | undefined) => Toast(val);
const onCancel = () => Toast('取消');

getSwipeList().then(res => {
  console.log(res, '11');
  const { data } = res
  swipeList.value = data
})

getGoodsType().then(res => {
  console.log(res, '00');
  goodsTypes.value = res?.data
})
const searchFocus = () =>{
  console.log('11');
  router.push('/searchtags')
}


</script>

<style lang="scss" scoped>
.hearder-wrap {
  display: flex;
  position: fixed;
  background: rgb(247, 248, 250, );
  z-index: 999;
  top: 0px;
  right: 0px;
  left: 0px;

  .header-search-wrap {
    width: 100%;
    padding: 4px 0px;

    .van-search {
      padding: 0px;
    }

    :deep(.van-search__content) {
      height: 100%;
      border-radius: var(--van-radius);
    }
  }

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
  margin-top: 34px;

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