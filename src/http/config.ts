export default {
  // 管理后台
  uniauth: {
    // 获取默认项目信息
    defaultProject: '/user/defaultProject',

    // 获取项目列表
    projects: '/user/:appName/projects',
  },
  // 商品模块
  goods: {
    // 商品列表
    goodsList: '/app-api/api/goods/list',
    // 商品spu详情
    spuDetail: '/app-api/api/goods/spu/detail'
  },

  // 订单模块
  order: {
    // 提交订单
    submitOrder: '/app-api/api/order/submit',
    // 提交订单
    cancelOrder: '/app-api/api/order/cancel',
    // 预创建订单
    preCreateOrder: '/app-api/api/order/confirm',
    // 订单详情
    orderDetail: '/app-api/api/order/info',
    // 订单列表
    orderList: '/app-api/api/order/list'
  },

  // 用户模块
  user: {
    // 登录接口
    authLogin: "/app-api/user/auth",
    // 验证码校验
    codeVerify: "/app-api/user/checkVerifyCode",
    // 注册
    registerUesr: '/app-api/user/register',
    // 密码重置
    resetPwd: "/app-api/user/reset",
    // 发送验证码
    sendVerifyCode: '/app-api/user/sendVerifyCode'
  },

  // 用户收货地址模块
  address: {
    // 设置默认地址
    setDefaultAddress: '/app-api/api/user/address/defaultAddr',
    // 删除收货地址
    delAddress: '/app-api/api/user/address/delete',
    // 收货地址详情
    addressDetail: '/app-api/api/user/address/detail',
    // 默认收货地址
    defaultAddress: '/app-api/api/user/address/getDefaultAddr',
    // 收货地址列表
    addressList: '/app-api/api/user/address/list',
    // 新增收货地址
    addAddress: '/app-api/api/user/address/save',
    // 更新收货地址
    updateAddress: '/app-api/api/user/address/update'
  },

  // 省市区地址模块
  cityAddress: {
    // 根据地址编码获取下一级所有地址信息
    addressByCode: '/app-api/api/geo/address/listByGeoCode'
  }
}