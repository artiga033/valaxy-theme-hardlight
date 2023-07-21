<script lang="ts" setup>
import { capitalize, computed } from 'vue'
import { useSiteConfig, useValaxyConfig } from 'valaxy'
import { useI18n } from 'vue-i18n'

import pkg from 'valaxy/package.json'
import { useThemeConfig } from '../composables'

const { t } = useI18n()

const config = useValaxyConfig()
const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()

const year = new Date().getFullYear()

const isThisYear = computed(() => {
  return year === themeConfig.value.footer.since
})

const poweredHtml = computed(() => t('footer.powered', [`<a href="${pkg.repository}" target="_blank" rel="noopener">Valaxy</a> v${pkg.version}`]))
</script>

<template>
  <footer text="center sm" style="color:var(--va-c-text-light)">
    <div class="card">
      <p v-if="themeConfig.footer.beian?.enable && themeConfig.footer.beian.icp" class="beian" m="y-2">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
          {{ themeConfig.footer.beian.icp }}
        </a>
      </p>
      <p class="copyright flex justify-center items-center p1">
        <span>
          &copy;
          <template v-if="!isThisYear">
            {{ themeConfig.footer.since }} -
          </template>
          {{ year }}
        </span>
        |
        <span>{{ siteConfig.author.name }}</span>
      </p>

      <div v-if="themeConfig.footer.powered" class="powered p1">
        <span v-html="poweredHtml" /> | <span>{{ t('footer.theme') }} - <a
          :href="themeConfig.pkg.homepage"
          :title="`valaxy-theme-${config.theme}`" target="_blank"
        >{{ capitalize(config.theme) }}</a> v{{
          themeConfig.pkg.version }}</span>
      </div>

      <slot />
    </div>
  </footer>
</template>
