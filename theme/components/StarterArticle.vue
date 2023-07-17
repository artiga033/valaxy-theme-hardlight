<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useFrontmatter, usePostList } from 'valaxy'

const frontmatter = useFrontmatter()

const route = useRoute()
const posts = usePostList()

function findCurrentIndex() {
  return posts.value.findIndex(p => p.path === route.path)
}

const nextPost = computed(() => posts.value[findCurrentIndex() - 1])
const prevPost = computed(() => posts.value[findCurrentIndex() + 1])
</script>

<template>
  <article class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <header class="pt-6 xl:pb-10 space-y-1 text-center">
      <StarterDate :date="frontmatter.date" />
      <h1
        class="
          st-text
          text-3xl
          leading-9
          font-extrabold
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-5xl md:leading-14
        "
      >
        {{ frontmatter.title }}
      </h1>
    </header>

    <div class="">
      <div class="card">
        <router-view />
      </div>

      <footer class="m-y-2 text-sm font-medium leading-5 flex justify-between">
        <div v-if="prevPost && prevPost.path">
          <h2 class="text-xs tracking-wide uppercase text-[var(--va-c-primary-light)]">
            &lt;Previous Article
          </h2>
          <div class="link">
            <router-link :to="prevPost.path">
              {{ prevPost.title }}
            </router-link>
          </div>
        </div>
        <div v-if="nextPost && nextPost.path">
          <h2 class="text-xs tracking-wide uppercase text-[var(--va-c-primary-light)]">
            Next Article&gt;
          </h2>
          <div class="link">
            <router-link :to="nextPost.path">
              {{ nextPost.title }}
            </router-link>
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>
