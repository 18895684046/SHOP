<script setup lang="ts">
import { ref } from 'vue'
import Cookies from 'js-cookie'
import { ConfigProvider, Icon, Popup, Collapse, CollapseItem } from 'vant'
import { NAvatar, NIcon, NSelect } from 'naive-ui'
import { PoweroffOutlined, RightOutlined, UserOutlined } from '@vicons/antd'
import { logout } from '@/utils'

const props = defineProps<{
  services: any,
  projectId: string,
  projects: any[],
  handleProjectSelected: (value: string) => void
}>()

// 主站地址
const mainStageUrl = import.meta.env.VITE_HTTP_BASE_URL as string

const themeVars = {
  collapseItemContentPadding: '0 16px'
};

const show = ref<boolean>(false)
const activeNames = ref<any>([])
const curTabText = ref<string>('') 

const setCurTabText = (value: string) => {
  curTabText.value = value
}

const showPopup = () => {
  show.value = true
}

const hrefTo = (disabled: boolean, url: string) => {
  if (disabled) return

  window.location.href = url
}

const handleSubSrvClick = (disabled: boolean, url: string, name: string) => {
  hrefTo(disabled, url)
  setCurTabText(name)
}

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
  <ConfigProvider :theme-vars="themeVars">
    <div class="hd-wrp">
      <div class="hd-content">
        <!-- logo -->
        <a class="hd-logo-wrp" :href="mainStageUrl">
          <img class="hd-logo" src="https://qagame.bilibili.co/static/web/logo.svg?token=1" />
        </a>

        <Icon style="flex: 1" class="icn-menu" name="bars" size="20" @click="showPopup" />

        <Popup v-model:show="show" position="left" :style="{ height: '100%', width: '80%' }">
          <div class="pop-wrp">
            <div class="pop-header">
              <a class="pop-hd-logo-wrp" :href="mainStageUrl">
                <img class="pop-hd-logo" src="https://qagame.bilibili.co/static/web/logo.svg?token=1" />
              </a>

              <NAvatar round :size="20" :src="avatar" />
            </div>

            <Collapse :border="false" v-model="activeNames">
              <CollapseItem 
                :class="{ 'hd-mobile-active-tab': curTabText === '测试服务' }"
                @click.stop="setCurTabText('测试服务')"
                :border="false" title="测试服务"
                name="100"
              >
                <CollapseItem
                  style="padding: 0;"
                  :border="false" v-for="(service, index) of services"
                  :title="service.name"
                  :name="index"
                  :class="{ 'hd-mobile-active-tab': curTabText === service.name }"
                  @click.stop="setCurTabText(service.name)"
                >
                  <CollapseItem
                    v-for="subSrv of service.subServices"
                    readonly
                    :disabled="subSrv.disabled"
                    :border="false"
                    @click.stop="handleSubSrvClick(subSrv.disabled, subSrv.url, subSrv.name)"
                  >
                    <template #title>
                      <div>{{ subSrv.name }}</div>
                    </template>
                    <template #right-icon>
                    </template>
                  </CollapseItem>
                </CollapseItem>
              </CollapseItem>

              <CollapseItem
                readonly
                :border="false"
                :class="{ 'hd-mobile-active-tab': curTabText === '用例管理' }"
                @click="setCurTabText('用例管理')"
              >
                <template #title>
                  <div class="link-wrp">
                    <router-link :to="{ name: 'example1' }">用例管理</router-link>
                  </div>
                </template>
                <template #right-icon>
                </template>
              </CollapseItem>

              <CollapseItem 
                readonly
                :border="false"
                :class="{ 'hd-mobile-active-tab': curTabText === '用例执行' }"
                @click="setCurTabText('用例执行')"
              >
                <template #title>
                  <div class="link-wrp">
                    <router-link :to="{ name: 'example2' }">用例执行</router-link>
                  </div>
                </template>
                <template #right-icon>
                </template>
              </CollapseItem>

              <CollapseItem
                readonly
                :border="false"
                :class="{ 'hd-mobile-active-tab': curTabText === '帮助中心' }"
                @click="setCurTabText('帮助中心')"
              >
                <template #title>
                  <div class="link-wrp">
                    <router-link :to="{ name: 'example3' }">帮助中心</router-link>
                  </div>
                </template>
                <template #right-icon>
                </template>
              </CollapseItem>
            </Collapse>
          </div>
        </Popup>

        <!-- 项目栏 -->
        <div class="hd-prj">
          <NSelect
            v-if="projectId"
            :default-value="projectId"
            :options="projects"
            @update:value="handleProjectSelected"
          />
        </div>

        <!-- 用户栏 -->
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
      </div>
    </div>
  </ConfigProvider>
</template>

<style lang="scss" scoped>
@import "@/styles/constant.scss";
@import "./index.scss";
</style>
