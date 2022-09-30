<template>
    <TitleCpm text="购物车" leftText='返回' />
    <div v-if="!isLogin" class="cart-wrap">
        <div class="cart-des">登录后可同步账户购物车中的商品</div>
        <van-empty
            image="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
            image-size="80" description="登录后可同步购物车中商品" />
    </div>
    <div class="all-carts" v-else>
        <p class="step-tab">
            <span class="all-shop">全部(32)</span>
            <span>跨店满减(0)</span>
        </p>
        <div class="shop-list">
            <!-- {{shopLists}} -->
            <div v-for="item in shopLists" class="section-shop">
                <div class="header-wrap">
                    <div>
                        <van-checkbox>
                            <span class="header-title">爱贝贝珠宝旗舰店</span>
                        </van-checkbox>
                    </div>
                    <div>
                        <van-tag type="danger">标签</van-tag>
                    </div>
                </div>
                <div class="item-single">
                    <div>
                        <!-- <van-checkbox v-model="allCheckedShop"></van-checkbox> -->
                        <van-checkbox v-model="item.curChecked"></van-checkbox>
                    </div>
                    <div class="vetti-wrap">
                        <div class="img-wrap">
                            <img src="https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/98925/37/26081/224466/623200c8E1d13e551/209abaae2997f404.jpg!q70.dpg.webp"
                                alt="">
                        </div>
                        <div class="detail-desc">
                            <div class="shop-name">
                                爱贝贝 宝宝银手镯足银 婴儿出生满月礼物婴儿出生满月礼物婴儿出生满月礼物 小孩新生儿百天周岁银饰 儿童银镯子一对 20克岁岁平安一对 0-6岁+[京物流 礼盒装]
                            </div>
                            <div class="select-shop">
                                <span class="sku">
                                    20克岁岁平安一对 0-6岁+[京物流 礼盒装]
                                </span>
                                <span class="service">选服务</span>
                            </div>
                            <div class="num-price">
                                <div>¥ <em class="int">{{item?.price}}</em></div>
                                <div>
                                    <van-stepper v-model="item.curNum" :name="item?.id" theme="round" class="addNum"
                                        disable-input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit-wrap">
            <van-submit-bar :price="totalPrice" :disabled="!cpmputedSelect" button-text="去结算" @submit="onSubmit">
                <van-checkbox v-model="checkedAll">全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>
    <TabbarCom />
</template>

<script setup lang="ts">
import TabbarCom from '@/components/Tabbar.vue'
import TitleCpm from '@/components/Title.vue';
import { ref, watch, toRaw } from 'vue'
import { nanoid } from 'nanoid'
import { computed } from '@vue/reactivity';
import router from '@/router';
import { useRouter } from 'vue-router';
const isLogin = ref<boolean>(true)
const allCheckedShop = ref<boolean>(false)
const checkedAll = ref<boolean>(false)
const shopLists = ref<any>([
    {
        id: nanoid(),
        name: '手镯',
        price: 28
    },
    {
        id: nanoid(),
        name: '鲜花',
        price: 245
    },
    {
        id: nanoid(),
        name: '零食',
        price: 65
    },
])
shopLists.value = shopLists.value.map((item: any) => {
    return {
        ...item,
        curChecked: false,
        curNum: 1,
    }
})

const cpmputedSelect = computed(() => {
    const isSelected = shopLists.value?.some((item: { curChecked: boolean; }) => item.curChecked)
    return isSelected
})
const onSubmit = () => {
    // 如果什么都不选那么提交按钮应该置灰
    if (!cpmputedSelect) return
    console.log(shopLists.value, '00');
    const selectedList = shopLists.value?.filter((item: { curChecked: boolean; }) => item.curChecked)
    router.push({
        name: 'orderbase',
    })
}

watch(() => shopLists, () => {
    console.log(shopLists, 'shopLists');
    const allNums = shopLists?.value?.filter((it: { hasOwnProperty: (arg0: string) => any; }) => it?.hasOwnProperty('curNum'))
        ?.map((shop: { curNum: any; }) => shop?.curNum)
    console.log(allNums, 'allNums');

}, { deep: true })

const totalPrice = computed(() => {
    const sumPrice = shopLists.value?.filter((shop: { curChecked: any; }) => shop?.curChecked).reduce((res: number, item: { price: number; curNum: number; }) => {
        return res += item.price * item.curNum;
    }, 0)
    // vant 的 price 默认单位是 分，需要 * 100
    return sumPrice * 100
})

</script>
<style scoped lang="scss">
:deep(.van-action-sheet) {
    height: 60% !important;
}

:deep(.van-stepper button) {
    width: 20px;
    height: 20px;
}

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
    padding-bottom: 100px;

    .submit-wrap {
        :deep(.van-submit-bar) {
            bottom: 50px;
            background: hsla(0, 0%, 100%, .95);
            box-shadow: 2px 2px 4px #D9D9D9
        }
    }

    .shop-list {
        .section-shop {
            padding: 15px;
            background: #fff;
            border-radius: 10px;
            margin-top: 20px;

            .header-wrap {
                display: flex;
                justify-content: space-between;

                .header-title {
                    font-size: 13px;
                    font-weight: bold;
                }
            }

            .item-single {
                display: flex;
                align-items: center;
                padding-top: 20px;
                vertical-align: top;

                .vetti-wrap {
                    display: flex;
                }

                .img-wrap {
                    padding: 0px 10px;

                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 8px;
                    }
                }

                .detail-desc {
                    .shop-name {
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 12px;
                        margin-bottom: 10px;
                        position: relative;
                        word-break: break-all;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    .num-price {

                        margin-top: 10px;
                        display: flex;
                        justify-content: space-between;

                        .int {
                            font-size: 18px;
                        }
                    }

                    .select-shop {
                        display: flex;
                        background: rgb(232, 231, 231);
                        border-radius: 3px;
                        padding: 1px;

                        .sku {
                            display: -webkit-box;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 12px;
                            width: calc(100% - 50px);
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                        }

                        .service {
                            width: 50px;
                            font-size: 12px;
                            position: relative;

                            &::after {
                                background: url(https://jstatic.3.cn/static/icon_arrow_12@2x.410c0417.png) no-repeat 50%;
                                background-size: 10px 10px;
                                content: "";
                                height: 10px;
                                margin-top: -3px;
                                position: absolute;
                                right: 0px;
                                top: 50%;
                                width: 10px;
                            }
                        }
                    }
                }
            }
        }
    }

    .step-tab {
        font-size: 13px;
        color: gray;
        background: #fff;
        display: flex;
        align-items: center;
        padding-left: 20px;
        height: 35px;

        .all-shop {
            color: rgb(250, 44, 25, );
            margin-right: 30px;
        }
    }

}
</style>