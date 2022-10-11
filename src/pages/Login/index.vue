<template>
    <div class="user-wrap">
        <div class="avatar-wrap">
            <van-image round width="4rem" height="4rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <span class="user-name">京东用户</span>
        </div>
        <div class="top-wrap">
            <div class="extr-type">
                <div style="display: flex;">
                    <van-icon name="star-o" size="17px" />
                    <span class="pay-text">商品收藏</span>
                </div>
                <div style="display: flex;">
                    <van-icon name="gift-o" size="17px" />
                    <span class="pay-text">店铺关注</span>
                </div>
                <div style="display: flex;">
                    <van-icon name="clock-o" size="17px" />
                    <span class="pay-text">浏览记录</span>
                </div>
            </div>
            <div class="pay-info">
                <div>
                    <van-icon name="star-o" size="25px" />
                    <div class="pay-text">待付款</div>
                </div>
                <div>
                    <van-icon name="gift-o" size="25px" />
                    <div class="pay-text">待收货</div>
                </div>
                <div>
                    <van-icon name="clock-o" size="25px" badge="6" />
                    <div class="pay-text">待评价</div>
                </div>
                <div>
                    <van-icon name="gold-coin-o" size="25px" />
                    <div class="pay-text">退款/售后</div>
                </div>
                <div>
                    <van-icon name="todo-list-o" size="25px" />
                    <div class="pay-text">我的订单</div>
                </div>
            </div>
        </div>
    </div>
    <TabbarCom />

</template>
<script setup lang="ts">


</script>

<style lang="scss" scoped>
.user-wrap {
    padding: 10px;

    .avatar-wrap {
        display: flex;
        align-items: center;

        .user-name {
            margin-left: 10px;
        }
    }

    .top-wrap {
        background: #fff;
        border-radius: 10px;
        margin-top: 10px;

        .extr-type {
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid gray;
            padding: 10px 0px;
            vertical-align: middle;

            .pay-text {
                font-size: 12px;
            }
        }

        .pay-info {
            display: flex;
            justify-content: space-around;
            text-align: center;
            padding: 10px 0px;

            .pay-text {
                font-size: 12px;
            }
        }
    }
}
</style>