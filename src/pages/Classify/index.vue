<template>
    <div class="classify-title">
        <TitleCpm text='分类' leftText='返回' />
    </div>
    <div class="sidebar-wrap">
        <div class="left-wrap">
            <van-sidebar v-model="active">
                <van-sidebar-item @click="onSiderBarChange(c?._id,c?.name)" v-for="c in categoryList" :title="c?.name">
                </van-sidebar-item>
            </van-sidebar>
        </div>
        <div class="right-wrap">
            <div class="big-title">{{curName}}</div>
            <div class="level2-wrap">
                <div class="scroll-content">
                    <div v-for="c in curLevel2Info" class="single-classify">
                        <img :src="c?.imageUrl" alt="">
                        <span>{{c?.keyword}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TabbarCom />
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, watchEffect } from 'vue'
import TabbarCom from '@/components/Tabbar.vue'
import TitleCpm from '@/components/Title.vue';
import BScroll from 'better-scroll'
import { getCategoryFunc } from './service/index'
import { Category, Level2 } from './interface'

const active = ref<number>(0);
const curName = ref<string>('热门推荐')
const categoryList = ref<Category[]>([])
const curLevel2Info = ref<Level2[]>([])
let bscroll = reactive<any>({})

onMounted(() => {
    bscroll = new BScroll(document.querySelector('.level2-wrap') as HTMLElement, {
        probeType: 2,
        click: true,
        pullUpLoad: true
    })
    bscroll.on('pullingUp',()=>{
        console.log('11');
        bscroll.refresh()
    })
})
watchEffect(()=>{
    nextTick(()=>{
        console.log('3');
        
        // 重新计算高度
        bscroll && bscroll.refresh()
    })
})

getCategoryFunc().then(res => {
    console.log(res, '分类数据');
    if (res?.success) {
        categoryList.value = res?.data
        curLevel2Info.value = categoryList.value[0]?.level2words
    }
})

// tabber bar 切换事件
const onSiderBarChange = (id: string, name: string) => {
    curName.value = name
    const level2Info = categoryList.value?.filter(cate => cate?._id === id)[0]?.level2words
    curLevel2Info.value = level2Info
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

        .big-title {
            font-size: 15px;
            padding-top: 12px;
            padding-left: 5px;
            font-weight: bold;
        }

        .level2-wrap {
            height: 100vh;
            position: absolute;
            top: 45px;
            bottom: 50px;
            left: 0px;
            right: 0px;
            overflow: hidden;
            .scroll-content{
                padding-bottom: 150px;
                display: flex;
                flex-wrap: wrap;
                background-color: #ffffff;
                .single-classify{
                    display: flex;
                    flex-direction: column;
                    width: 32.8%;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    img{
                        width: 70px;
                        height: 70px;
                    }
                }
            }
        }

    }
}
</style>