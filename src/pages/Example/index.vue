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
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="classify-wrap">
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
      </div>
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
      </div>
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
      </div>
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
      </div>
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
      </div>
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
      </div>
      <div class="singe-classify">
        <img
          src="https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg"
          alt="类别图片">
        <span>文字描述</span>
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

const valueText = ref<string>('')


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
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}

.classify-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  height: 160px;
  position: relative;
  background: green;

  .singe-classify {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;

    img {
      height: 44px;
      width: 44px;
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