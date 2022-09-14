import request from '../index'
import config from '../config'

const {
    user: {
        authLogin,
        codeVerify,
        registerUesr,
        resetPwd,
        sendVerifyCode,
    }
} = config

// 登录
export const submitLogin = (data: any) => {
    return request({
        url: authLogin,
        method: 'post',
        data
    })
}

// 验证码校验
export const codeVerifyFunc = (data: any) => {
    return request({
        url: codeVerify,
        method: 'post',
        data
    })
}