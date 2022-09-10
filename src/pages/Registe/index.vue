<template>
    <div class="regi-wrap">
        <TitleCpm text="京东登录注册" />
        <div v-if="isLoginType">
            <van-cell-group inset>
                <van-field v-model="phone" clearable required label="手机号" placeholder="请输入手机号" />
                <van-field v-model="sms" center required clearable label="短信验证码" placeholder="请输入短信验证码">
                    <template #button>
                        <van-button size="small" type="primary">发送验证码</van-button>
                    </template>
                </van-field>
            </van-cell-group>
        </div>
        <div v-else>
            <van-field v-model="codePhone" clearable required label="手机号" placeholder="请输入手机号" />
            <van-field v-model="password" required clearable :right-icon="isEyeShow ? 'eye-o': 'closed-eye'"
                @click-right-icon="showPassword" :type="isEyeShow ? 'text' : 'password'" placeholder="请输入密码"
                label="密码" />
            <span class="forget-pwd">忘记密码</span>
        </div>
        <van-button class="login-btn" color="rgb(252, 182, 179)" type="primary" block>登录</van-button>
        <div class="login-type">
            <span @click="changeLoginType" v-if="isLoginType">账号密码登录</span>
            <span @click="changeLoginType" v-else>短信验证码登录</span>
            <span>手机快速注册</span>
        </div>
    </div>
</template>
<script setup lang="ts" >
import { ref } from 'vue'
import TitleCpm from '@/components/Title.vue';

const phone = ref<string>('')
const codePhone = ref<string>('')
const password = ref<string>('')
const isEyeShow = ref<boolean>(false)
const sms = ref<string>('')
const isLoginType = ref<boolean>(true)
const changeLoginType = () => {
    isLoginType.value = !isLoginType.value
}
const showPassword = (event: MouseEvent) => {
    isEyeShow.value = !isEyeShow.value


}

</script>
<style scoped lang="scss">
.regi-wrap {
    width: 100%;
    // height: calc(100vh - 45px);
    height: 100vh;
    background: #fff;
    padding: 60px 15px 0px;
    box-sizing: border-box;
    .forget-pwd{
        float: right;
        font-size: 13px;
        color: gray;
        margin-right: 15px;
    }

    .login-btn {
        width: 90%;
        margin: auto;
        border-radius: 20px;
        font-size: 16px;
        margin-top: 30px;
    }

    .login-type {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        margin-top: 10px;
        color: gray;
    }
}
</style>