<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const siteConfig = useSiteConfig()
</script>

<template>
  <div class="m-y-4 text-center">
    <h1
      class="
          hg-text
          text-3xl
          leading-9
          font-extrabold
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-6xl md:leading-14
        "
    >
      {{ siteConfig.title }}
    </h1>
    <p class="text-lg leading-7 snd-text">
      {{ siteConfig.subtitle }}
    </p>
  </div>
</template>
