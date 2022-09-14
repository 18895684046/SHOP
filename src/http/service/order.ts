import request from '../index'
import config from '../config'

const {
    order: {
        submitOrder,
        cancelOrder,
        preCreateOrder,
        orderDetail,
        orderList,
    }
} = config

// 提交订单
export const submitOrderFunc = (data: any) => {
    return request({
        url: submitOrder,
        method: 'post',
        data
    })
}

// 取消订单
export const cancelOrderFunc = (data: any) => {
    return request({
        url: cancelOrder,
        method: 'post',
        data
    })
}

// 预创建订单
export const preCrelOrderFunc = (data: any) => {
    return request({
        url: preCreateOrder,
        method: 'post',
        data
    })
}

// 获取订单详情
export const getOrderDetail = (data: any) => {
    return request({
        url: orderDetail,
        method: 'post',
        data
    })
}

// 获取订单列表
export const getOrderList = (data: any) => {
    return request({
        url: orderList,
        method: 'post',
        data
    })
}