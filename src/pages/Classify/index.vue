<template>
    <div class="classify-title">
        <TitleCpm text='分类' leftText='返回' />
    </div>
    <div class="sidebar-wrap">
        <div class="left-wrap">
            <van-sidebar v-model="active">
                <van-sidebar-item @click="onSiderBarChange(c?.name)"  v-for="c in categoryList" :title="c?.name"></van-sidebar-item>
            </van-sidebar>
        </div>
        <div class="right-wrap">
            <div class="big-title">{{curName}}</div>
        </div>
    </div>
    <TabbarCom />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabbarCom from '@/components/Tabbar.vue'
import TitleCpm from '@/components/Title.vue';
import { getCategoryFunc } from './service/index'
import { Category } from './interface'

const active = ref<number>(0);
const curName = ref<string>('热门推荐')
const categoryList = ref<Category[]>([])

getCategoryFunc().then(res => {
    console.log(res, '分类数据');
    if (res?.success) {
        categoryList.value = res?.data
    }
})

// tabber bar 切换事件
const onSiderBarChange = (name: string) => {
    console.log(name, '索引');
    curName.value = name
}

</script>
<style lang="scss" scoped>
:deep(.van-sidebar-item) {
    padding: 13px 12px;
}

.classify-title {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
}

.sidebar-wrap {
    padding-top: 45px;
    padding-bottom: 45px;
    display: flex;

    .left-wrap {
        width: 80px;
    }

    .right-wrap {
        width: calc(100vw - 80px);
        position: fixed;
        top: 45px;
        left: 80px;
        .big-title{
            font-size: 15px;
            padding-top: 12px;
            padding-left: 5px;
            font-weight: bold;
        }
    }
}
</style>