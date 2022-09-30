<template>
    <TitleCpm text="商品列表" leftText='返回' />
    <div class="shop-list-wrap">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @focus="shopSearchFocus">
        </van-search>
    </div>
    <van-sticky :offset-top="90">
        <div>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value" :options="options" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item title="筛选" ref="item">
                    <van-cell center title="包邮">
                        <template #right-icon>
                            <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
                        </template>
                    </van-cell>
                    <van-cell center title="团购">
                        <template #right-icon>
                            <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
                        </template>
                    </van-cell>
                    <div style="padding: 5px 16px;">
                        <van-button type="danger" block round @click="onConfirm">
                            确认
                        </van-button>
                    </div>
                </van-dropdown-item>
            </van-dropdown-menu>
        </div>
    </van-sticky>

    <div class="shop-detail-wrap">
        <div class="shop-single" v-for="item in arr">
            <div>
                <img src="https://img2.baidu.com/it/u=3847675294,3443876867&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664643600&t=a14018178ce6dda5a5d8ce89e840ffbb"
                    alt="">
            </div>
            <div class="search_prolist_info">
                <div class="pro_info_above">
                    <div class="search_prolist_title">
                        <van-tag type="danger" class="mod_tag">京东国际</van-tag>
                        <van-tag type="danger" class="mod_tag">京东超市</van-tag>
                        芙丽芳丝洗面奶氨基酸系洁面freeplus男士女士100g
                    </div>
                    <div class="search_prolist_attr">
                        <span class="word">深层清洁</span>
                        <span class="word">任何肤质</span>
                        <span class="word">日本</span>
                    </div>
                </div>
                <!-- 下方区域 -->
                <div class="pro_info_below">
                    <div class="search_prolist_price">
                        <strong rd="0-4-1">
                            <em>¥ <span class="int">119</span></em>
                        </strong>
                    </div>
                    <div class="search_prolist_line">
                        <van-tag type="danger" class="mod_tag">秒杀</van-tag>
                    </div>
                    <div class="search_prolist_other">
                        <van-tag type="danger" class="mod_tag">秒杀</van-tag>
                        <van-tag type="danger" class="mod_tag">秒杀</van-tag>
                        <span class="search_prolist_comment"><span>200万+</span>条评价</span>
                        <span class="search_prolist_rate">好评率<span>98</span>%</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import TitleCpm from '@/components/Title.vue';
import { ref } from 'vue';
import type { DropdownItemInstance } from 'vant';

const router = useRouter()
const route = useRoute()
const searchValue = ref<any>('')

const item = ref<DropdownItemInstance>();
const value = ref<number>(0);
const value2 = ref<string>('a');
const switch1 = ref<boolean>(false);
const switch2 = ref<boolean>(false);
const arr = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9])

searchValue.value = route?.query?.inpVal

const options = [
    { text: '综合', value: 0 },
    { text: '信用', value: 1 },
    { text: '价格降序', value: 2 },
    { text: '价格升序', value: 3 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '销量降序', value: 'b' },
];

const shopSearchFocus = () => {
    router.push({
        path: "/searchtags",
        query: {
            inpVal: searchValue.value
        }
    })
}

const onConfirm = () => {
    item.value?.toggle();
};

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>