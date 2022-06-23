<script setup lang="ts">
import { ref } from 'vue'
import Cookies from 'js-cookie'
import { ConfigProvider, Icon, Popup, Collapse, CollapseItem } from 'vant'
import { NAvatar, NDropdown } from 'naive-ui'
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

const themeVars = {
  collapseItemContentPadding: '0 16px'
};

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
const show = ref<boolean>(false)
const activeNames = ref<any>([])

// 获取所有服务信息
getNavbar().then(
  res => {
    services.value = res?.data?.menu?.find((i: any) => i.name === '测试服务')?.submenu
  }
)

const showPopup = () => {
  show.value = true
}

const hrefTo = (disabled: boolean, url: string) => {
  if (disabled) return

  window.location.href = url
}

/**
 * 用户栏逻辑分区
 */
const avatar = Cookies.get('avatar')

const operations = [
  {
    label: '后台管理',
    key: 'admin'
  },
  {
    label: '退出登录',
    key: 'logout'
  }
]

// 点击相关操作
const handleOperSelect = (key: string) => {
  switch (key) {
    case 'admin':
      window.location.href = mainStageUrl + '/uniauth/project/'
      break

    case 'logout':
      logout()
      break

    default:
      return
  }
}
</script>

<template>
  <ConfigProvider :theme-vars="themeVars">
    <div class="hd-wrp">
      <div class="hd-content">
        <!-- logo -->
        <a class="hd-logo-wrp" :href="mainStageUrl">
          <img class="hd-logo" src="https://qagame.bilibili.co/static/web/logo.svg?token=1" />
        </a>

        <Icon class="icn-menu" name="bars" size="20" @click="showPopup" />

        <Popup v-model:show="show" position="left" :style="{ height: '100%', width: '80%' }">
          <div class="pop-wrp">
            <div class="pop-header">
              <a class="pop-hd-logo-wrp" :href="mainStageUrl">
                <img class="pop-hd-logo" src="https://qagame.bilibili.co/static/web/logo.svg?token=1" />
              </a>

              <NAvatar round :size="20" :src="avatar" />
            </div>

            <Collapse :border="false" v-model="activeNames">
              <CollapseItem :border="false" title="测试服务" name="100">
                <CollapseItem style="padding: 0;" :border="false" v-for="(service, index) of services"
                  :title="service.name" :name="index">
                  <CollapseItem v-for="subSrv of service.subServices" readonly :disabled="subSrv.disabled"
                    :border="false" @click="hrefTo(subSrv.disabled, subSrv.url)">
                    <template #title>
                      <div>{{ subSrv.name }}</div>
                    </template>
                    <template #right-icon>
                    </template>
                  </CollapseItem>
                </CollapseItem>
              </CollapseItem>

              <CollapseItem readonly :border="false">
                <template #title>
                  <div>
                    <router-link :to="{ name: 'example1' }">用例管理</router-link>
                  </div>
                </template>
                <template #right-icon>
                </template>
              </CollapseItem>

              <CollapseItem readonly :border="false">
                <template #title>
                  <div>
                    <router-link :to="{ name: 'example2' }">用例执行</router-link>
                  </div>
                </template>
                <template #right-icon>
                </template>
              </CollapseItem>

              <CollapseItem readonly :border="false">
                <template #title>
                  <div>
                    <router-link :to="{ name: 'example3' }">帮助中心</router-link>
                  </div>
                </template>
                <template #right-icon>
                </template>
              </CollapseItem>
            </Collapse>
          </div>
        </Popup>

        <!-- 用户栏 -->
        <NDropdown trigger="hover" @select="handleOperSelect" :options="operations">
          <div class="hd-user">
            <NAvatar round :size="20" :src="avatar" />
            <!-- <NIcon class="hd-user-arw" size="8">
            <CaretDownFilled />
          </NIcon> -->
          </div>
        </NDropdown>
      </div>
    </div>
  </ConfigProvider>
</template>

<style lang="scss" scoped>
@import "@/styles/constant.scss";
@import "./index.scss";
</style>
