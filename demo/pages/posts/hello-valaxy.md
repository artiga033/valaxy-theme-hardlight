---
title: Hello, Valaxy!
date: 2022-03-22
updated: 2022-03-23
categories: Valaxy Notes
tags:
  - valaxy
  - 笔记
---

## Hello, Valaxy!

```ts
import type { ThemeConfig } from 'valaxy-theme-hardlight'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  // your theme name
  // valaxy-theme-yun name is 'yun'
  theme: 'hardlight',

  themeConfig: {
    banner: {
      enable: true,
      title: '云游君的小站',
    },
  },
})
```
