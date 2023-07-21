<script lang="ts" setup>
import { isClient, useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()
const showBackToTop = computed(() => y.value > 50)

function backToTop() {
  if (!isClient)
    return
  window.scrollTo({ top: 0 })
}
</script>

<template>
  <div class="fixed right-8 bottom-8 hidden flex-col gap-3 flex">
    <Transition>
      <button
        v-if="showBackToTop" aria-label="Back to Top"
        class="card p-2 transition-all hover:bg-gray-300 dark:hover:bg-gray-600" @click="backToTop"
      >
        <div i-fluent:arrow-up-24-regular />
      </button>
    </Transition>
  </div>
</template>
