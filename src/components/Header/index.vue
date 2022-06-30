<script setup lang="ts">
import { ref } from 'vue'
import Cookies from 'js-cookie'
import { NIcon } from 'naive-ui'
import { PoweroffOutlined, RightOutlined, UserOutlined } from '@vicons/antd'
import { logout } from '@/utils'
import { getNavbar } from "@/http/service/navbar"

// 菜单项数据
interface MenuItem {
  disabled: boolean;
  name: string;

  // 子菜单
  submenu?: any[];
  url: string;
}

// 主站地址
const mainStageUrl = import.meta.env.VITE_HTTP_BASE_URL as string

/**
 * 导航栏逻辑分区
 */
const services = ref<{
  home: any;
  menu: MenuItem[];
}>({
  home: {},
  menu: []
})

// 获取所有服务信息
getNavbar().then(
  res => {
    services.value = res?.data?.menu?.find((i: any) => i.name === '测试服务')?.submenu
  }
)

/**
 * 用户栏逻辑分区
 */
const avatar = Cookies.get('avatar')
const nickname = (Cookies.get('fullname') || '').replace(/\+/g, ' ')

const linkToAdmin = () => {
  window.location.href = mainStageUrl + '/uniauth'
}

</script>

<template>
  <div class="hd-wrp">
    <div class="hd-content">
      <!-- logo -->
      <a class="hd-logo-wrp" :href="mainStageUrl">
        <img class="hd-logo" src="https://qagame.bilibili.co/static/web/logo.svg?token=1" />
      </a>

      <!-- 导航栏 -->
      <ul class="hd-navbar">
        <li class="hd-nav hd-nav-srvs">
          <span>测试服务</span>
          <div class="hd-subnav-wrp">
            <div class="hd-subnav-content">
              <div v-for="subnav of services" :key="subnav.name" class="subnav-itm">
                <div class="subnav-name">{{ subnav.name }}</div>
                <div class="subsrv-wrp">
                  <div v-for="srv of subnav?.subServices" :key="srv?.name"
                    :class="['subsrv', { 'subsrv-active': srv?.disabled === false }]">
                    <a class="srv-name" :href="(!srv?.disabled && srv?.url) || '#'">{{ srv.name }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="hd-nav">
          <router-link class="hd-nav-link" :to="{ name: 'example1' }">用例管理</router-link>
        </li>
        <li class="hd-nav">
          <router-link class="hd-nav-link" :to="{ name: 'example2' }">用例执行</router-link>
        </li>
        <li class="hd-nav">
          <router-link class="hd-nav-link" :to="{ name: 'example3' }">帮助中心</router-link>
        </li>
      </ul>

      <div class="hd-user">
        <div class="avatar">
          <img :src="avatar" />
        </div>

        <div class="hd-detail-wrp">
          <div class="hd-detail-panel">
            <div class="name-wrp">
              <span class="nickname">{{ nickname }}</span>
            </div>

            <div class="hd-detail-item" @click="linkToAdmin">
              <div class="link-title">
                <NIcon class="link-icn">
                  <UserOutlined />
                </NIcon>
                <span>后台管理</span>
              </div>
              <NIcon>
                <RightOutlined />
              </NIcon>
            </div>

            <div class="hd-detail-item" @click="logout">
              <div class="link-title">
                <NIcon class="link-icn">
                  <PoweroffOutlined />
                </NIcon>
                <span>退出登录</span>
              </div>
              <NIcon>
                <RightOutlined />
              </NIcon>
            </div>
          </div>
        </div>
      </div>

      <!-- 用户栏 -->
      <!-- <NDropdown trigger="hover" @select="handleOperSelect" :options="operations">

      </NDropdown> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/constant.scss";
@import "./index.scss";
</style>
