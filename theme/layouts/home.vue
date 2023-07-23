<script setup>
import { useSiteConfig } from 'valaxy'

const siteConfig = useSiteConfig()
</script>

<template>
  <Layout>
    <template #page-header>
      <HardlightHeader :title="siteConfig.title" :subtitle="siteConfig.subtitle" />
    </template>
    <div>
      <slot>
        <router-view />
      </slot>
    </div>
  </Layout>
</template>
