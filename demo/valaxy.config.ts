import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hardlight'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'hardlight',

  themeConfig: {
    // colors: {
    //   primary: 'red',
    // },
    background: {
      image: 'https://s.a33.su/e3-2018-halo-infinite-cover-1920x1080.jpg',
    },
    nav: [
      {
        text: 'Tags',
        link: '/tags',
      },
      {
        text: 'Links',
        link: '/links',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/artiga033/valaxy-theme-hardlight',
      },
      {
        text: 'RSS',
        link: '/atom.xml',
      },
      {
        text: 'Valaxy →',
        link: 'https://github.com/YunYouJun/valaxy',
      },
    ],

    footer: {
      since: 2023,
    },
  },
})
