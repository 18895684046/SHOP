<template>
    <TitleCpm text="搜索列表" leftText='返回' spec="/" />
    <div class="search-wrap">
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel">
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
        </van-search>
    </div>
    <h2>搜索列表</h2>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';

import TitleCpm from '@/components/Title.vue';

const router = useRouter()
const route = useRoute()
const searchValue = ref<any>('');
searchValue.value = route?.query.inpVal

const onSearch = () => {
    console.log(searchValue.value, '11');
    router.push({
        path: '/shoplist',
        query: {
            inpVal: searchValue.value
        }
    })
}
const onCancel = () => Toast('取消');
</script>

<style lang="scss" scoped>
.search-wrap {
    margin-top: 45px;
}
</style>