<script setup lang="ts">
import { ref } from 'vue'
import { getNavbar } from "@/http/service/navbar"
import logoImg from '@/assets/logo.png'

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
</script>

<template>
  <div class="hd-wrp">
    <div class="hd-content">
      <!-- logo -->
      <a class="hd-logo-wrp" :href="mainStageUrl">
        <img class="hd-logo" :src="logoImg" />
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
                  <div
                    v-for="srv of subnav?.subServices"
                    :key="srv?.name"
                    :class="['subsrv', { 'subsrv-active': srv?.disabled === false }]"
                  >
                    <a class="srv-name" :href="(!srv?.disabled && srv?.url) || '#'">{{ srv.name }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/constant.scss";
.hd-wrp {
  position: relative;
  height: 50px;
  box-shadow: 0 1px 1px 0 $bili-blue;
  background: #fff;

  .hd-content {
    height: 50px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .hd-logo-wrp {
      text-align: center;

      .hd-logo {
        height: 24px;
        margin-right: 100px;
      }
    }

    .hd-navbar {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      flex: 1;
      color: $font-gray;

      .hd-nav {
        height: 100%;
        padding: 0 24px;
        display: flex;
        align-items: center;
        list-style: none;
        font-size: 14px;
        cursor: pointer;
      }

      .hd-nav-srvs {
        &:hover {
          .hd-subnav-wrp {
            height: 350px;
          }
        }

        .hd-subnav-wrp {
          position: fixed;
          top: 51px;
          left: 0;
          width: 100vw;
          min-width: 1200px;
          height: 0;
          display: flex;
          justify-content: center;
          overflow: hidden;
          color: #a5a5a5;
          background: rgba(32, 42, 54, 0.9);
          transition: height .25s ease;

          .hd-subnav-content {
            width: 1200px;
            height: 310px;
            padding: 20px 0;
            display: flex;

            .subnav-itm {
              flex: 1;

              .subnav-name {
                padding: 10px;
                line-height: 24px;
                font-size: 14px;
                text-align: left;
                color: #D7DDE4;
              }

              &:hover {
                .subnav-name {
                  color: #fff;
                  text-shadow: 0 5px 10px #65aeff;
                }
              }

              .subsrv-wrp {
                padding: 8px 16px;
                height: 240px;
                border-top: 1px solid transparent;
                border-left: 1px solid transparent;
                border-image: linear-gradient(to top, rgba(32, 42, 54, 0.01), #545c6e) 1 10;

                .subsrv {
                  padding-bottom: 2px;
                  line-height: 24px;
                  font-size: 12px;
                  text-align: left;
                  color: #80848F;
                  transition: all 0.2s;

                  .srv-name {
                    text-decoration: none;
                    color: #80848f;
                  }
                }

                &:hover {
                  padding-top: 10px;

                  .subsrv {
                    padding-bottom: 8px;
                  }

                  .subsrv-active {
                    .srv-name {
                      color: #f5f7f9;
                    }
                  }
                }

                .subsrv-active {
                  .srv-name {
                    color: #B7BDC4;
                  }

                  &:hover {
                    cursor: pointer;
                    color: #f5f7f9;
                    text-shadow: 0 6px 10px #4ca0ff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
