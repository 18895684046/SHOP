const $bili_blue = '#0CB6F2'

// 自定义naive全局样式
export const themeOverrides = {
  common: {
    primaryColor: $bili_blue
  },
  Button: {
    borderHover: `1px solid ${$bili_blue}`,
    borderPressed: `1px solid ${$bili_blue}`,
    borderFocus: `1px solid ${$bili_blue}`,
    borderHoverPrimary: `1px solid ${$bili_blue}`,
    borderPressedPrimary: `1px solid ${$bili_blue}`,
    borderFocusPrimary: `1px solid ${$bili_blue}`,
    textColorGhostHover: $bili_blue,
    textColorGhostPressed: $bili_blue,
    textColorGhostFocus: $bili_blue,
    textColorGhostPrimary: $bili_blue,
    textColorGhostHoverPrimary: $bili_blue,
    textColorGhostPressedPrimary: $bili_blue,
    textColorGhostFocusPrimary: $bili_blue,
  }
}