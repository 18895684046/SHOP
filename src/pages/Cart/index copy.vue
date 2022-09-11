<template>
    <TitleCpm text="购物车" leftText='返回' />
    <div v-if="!isLogin" class="cart-wrap">
        <div class="cart-des">登录后可同步账户购物车中的商品</div>
        <van-empty
            image="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
            image-size="80" description="登录后可同步购物车中商品" />
    </div>
    <div class="all-carts" v-else>
        <div class="change-address">
            <div @click="addresShow = true">ananiu</div>
            <van-action-sheet v-model:show="addresShow" title="选择地址">
                <div class="content">
                    <van-radio-group v-model="checked">
                        <van-radio class="addres-li" name="1">江苏南通市如皋市江安镇江苏省南通市如皋市中山东路与绿阳路交汇处南通六建南门卫室</van-radio>
                        <van-radio class="addres-li" name="2">上海杨浦区新江湾城街道上海市杨浦区淞沪路657号创智国际广场A栋</van-radio>
                        <van-radio class="addres-li" name="3">上海普陀区曹杨新村街道上海市测绘院基础地理信息中心</van-radio>
                        <van-radio class="addres-li" name="4">上海宝山区吴淞街道上海市宝山区吴淞街道同济支路251号梦想之家</van-radio>
                    </van-radio-group>
                    <van-button @click="addresInnerShow = true" class="addres-btn" type="primary" block>选择其他地址
                    </van-button>
                </div>
            </van-action-sheet>
            <van-action-sheet v-model:show="addresInnerShow">
                <div class="content-inner">
                    <div class="diy-title">
                        <div class="diy-backarrow" @click="addresInnerShow = false">
                            <van-icon name="arrow-left" />
                            <span>返回</span>
                        </div>
                        <div style="font-weight: bold;">选择地址</div>
                        <div @click="closeModal">
                            <van-icon color="gray" name="cross" />
                        </div>
                    </div>
                    <div class="diy-tab">
                        <van-tabs line-width="60px" border v-model:active="cityActive">
                            <van-tab title="中国大陆">内容 1</van-tab>
                            <van-tab title="港澳台及海外">内容 2</van-tab>
                        </van-tabs>
                    </div>
                </div>
            </van-action-sheet>
        </div>
    </div>
    <TabbarCom />
</template>

<script setup lang="ts">
import TabbarCom from '@/components/Tabbar.vue'
import TitleCpm from '@/components/Title.vue';
import { ref } from 'vue'

const isLogin = ref<boolean>(true)
const addresShow = ref<boolean>(false)
const addresInnerShow = ref<boolean>(false)
const checked = ref<string>('1');
const cityActive = ref<number>(0);

const closeModal = () => {
    addresShow.value = false
    addresInnerShow.value = false
}

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

.all-carts {
    padding-top: 45px;

    .change-address {
        .content-inner {
            padding: 16px 16px 10px;
            .diy-tab{
                width: 60%;
            }

            .diy-title {
                display: flex;
                justify-content: space-between;

                .diy-backarrow {
                    color: gray;
                    font-size: 14px;
                }
            }
        }

        .content {
            padding: 16px 16px 10px;

            .addres-li {
                font-size: 14px;
                padding: 5px;
            }

            .addres-btn {
                background: rgb(242, 27, 12, );
                border: none;
                border-radius: 20px;
                margin-top: 60px;
                font-size: 15px;
                font-weight: 500;
            }
        }
    }
}
</style>