<template>
    <div class="classify-title">
        <TitleCpm text='分类' leftText='返回' />
    </div>
    <div class="sidebar-wrap">
        <div class="left-wrap">
            <van-sidebar @change="onSiderBarChange" v-model="active">
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />

                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
            </van-sidebar>
        </div>
        <div class="right-wrap">
            <div v-if="curIndex === 1">
                <h3>标题</h3>
            </div>
            <div v-else>
                暂无数据
            </div>
        </div>
    </div>
    <TabbarCom />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabbarCom from '@/components/Tabbar.vue'
import TitleCpm from '@/components/Title.vue';

const active = ref<number>(0);
const curIndex = ref<number>(0)

// tabber bar 切换事件
const onSiderBarChange = (index: number) => {
    console.log(index, '索引');
    curIndex.value = index
}

</script>
<style lang="scss" scoped>
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
    }
}
</style>