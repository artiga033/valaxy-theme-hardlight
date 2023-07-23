<script lang="ts" setup>
const props = defineProps<{ title?: string; subtitle?: string }>()
</script>

<template>
  <div class="text-center">
    <h1
      class="
          hg-text
          text-6
          font-extrabold
          tracking-tight
          md:text-7
          xl:text-8
        "
    >
      {{ props.title }}
    </h1>
    <p v-if="props.subtitle" class="text-3 md:text-4 xl:text-5 snd-text">
      {{ props.subtitle }}
    </p>
  </div>
</template>
