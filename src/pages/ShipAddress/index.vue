<template>
    <div class="address-list-wrap">
        <div class="show-address-list" v-if="isShowOrEdit">
            <TitleCpm text="收货地址" leftText='返回' />
            <div class="ship-address">
                <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList"
                    disabled-text="以下地址超出配送范围" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
            </div>
        </div>
        <div v-else class="show-edit-detail">
            <TitleCpm text="编辑收货地址" leftText='返回' />
            <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
                :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
                @delete="onDelete" @change-detail="onChangeDetail" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Toast } from 'vant';
import TitleCpm from '@/components/Title.vue';
import { areaList } from '@vant/area-data';


const chosenAddressId = ref<string>('1');
const list = [
    {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
    },
    {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
];
const disabledList = [
    {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号',
    },
];
const isShowOrEdit = ref<boolean>(true)

const onAdd = () => Toast('新增地址');

const onEdit = (item, index) => {
    isShowOrEdit.value = false
}

const searchResult = ref<any[]>([]);
const onSave = () => Toast('save');
const onDelete = () => Toast('delete');
const onChangeDetail = (val) => {
    if (val) {
        searchResult.value = [
            {
                name: '黄龙万科中心',
                address: '杭州市西湖区',
            },
        ];
    } else {
        searchResult.value = [];
    }
};


</script>

<style lang="scss" scoped>
.address-list-wrap{
    margin-top: 40px;
}
</style>