import { PageFrontMatter } from "valaxy/types"

export namespace HardlightTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
}

/**
 * Theme Config
 */
export interface ThemeConfig {
  colors: {
    /**
     * primary color
     * @default '#0078E7'
     */
    primary: string
  }
  background: {
    image: string | null
  }
  /**
   * footer
   */
  footer: Partial<{
    /**
     * 建站于
     */
    since: number

    /**
     * Icon between year and copyright info.
     */
    icon: {
      /**
       * icon name, i-xxx
       */
      name: string
      animated: boolean
      color: string
      url: string
      title: string
    }

    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    powered: boolean

    /**
     * Chinese Users | 中国用户
     * 备案 ICP
     * 国内用户需要在网站页脚展示备案 ICP 号
     * https://beian.miit.gov.cn/
     */
    beian: {
      enable: boolean
      /**
       * 苏ICP备xxxxxxxx号
       */
      icp: string
    }
  }>

  /**
   * navbar
   */
  nav: NavItem[]
}

export interface NavItem {
  text: string
  link: string
  icon?: string
}

export type ThemeUserConfig = Partial<ThemeConfig>

export interface FriendsPageFrontMatter extends PageFrontMatter {
  friends: Partial<Friend>[]
}
export interface Friend {
  name: string
  desc: string
  url: string
  avatar: string
  backgroundColor: string
  textColor: string
}