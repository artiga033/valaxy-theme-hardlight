<script lang="ts" setup>
import { isDark, toggleDark, useSiteConfig } from 'valaxy'
import { ref } from 'vue'

// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

// const route = useRoute()
// const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()
const menuExpanded = ref(false)
function toggleMenu() {
  menuExpanded.value = !menuExpanded.value
  document.body.style.overflow = menuExpanded.value ? 'hidden' : ''
}
</script>

<template>
  <nav w="full" class="flex justify-between items-center font-bold light-stream">
    <router-link class="text-xl pl-2" to="/" :aria-label="siteConfig.title">
      <img class="inline-block mr-2" style="width: 50px; height: 35px" alt="logo" :src="siteConfig.favicon">
      <span class="hidden md:inline">{{ siteConfig.title }}</span>
    </router-link>
    <div class="flex pr-4">
      <button type="button" aria-label="Expand Menu" class="text-8 md:hidden <md:mr-8" @click="toggleMenu">
        <div v-if="menuExpanded" i-fluent:dismiss-24-regular />
        <div v-else i-fluent:navigation-24-regular />
      </button>
      <ul class="inline <md:hidden" :class="{ expanded: menuExpanded }">
        <li v-for="(item, i) in themeConfig.nav" :key="i" class="text-lg inline px-2">
          <AppLink :to="item.link" rel="noopener">
            {{ item.text }}
          </AppLink>
        </li>
      </ul>
      <button class="text-8" type="button" aria-label="Toggle Dark Mode" @click="toggleDark()">
        <div v-if="!isDark" i-fluent:lightbulb-filament-24-regular />
        <div v-else i-fluent:lightbulb-filament-24-filled />
      </button>
    </div>
  </nav>
</template>

<style scoped lang="css">
ul.expanded {
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--va-c-bg-opacity);
  justify-items: start;
  z-index: 999;
  overflow: scroll;
  top: 4rem;
  bottom: 0;
  left: 0;
  right: 0;
}

ul.expanded::before {
  content: '';
}

ul.expanded li {
  margin: 0 auto;
  width: 100%;
  padding: 0.5rem 0;
  font-size: xx-large;
  display: block;
  text-align: center;
}

ul.expanded li:hover {
  background-color: var(--va-c-bg-stroken);
}
</style>
