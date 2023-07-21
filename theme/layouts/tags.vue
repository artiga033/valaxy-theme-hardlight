<script lang="ts" setup>
import { useFrontmatter, usePostTitle, useSiteStore } from 'valaxy'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defineWebPage, useSchemaOrg } from '@vueuse/schema-org'
import { useHardlightTags } from '../composables/tags'

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const route = useRoute()
const router = useRouter()

const frontmatter = useFrontmatter()
const { tags, getTagStyle } = useHardlightTags()
const curTag = computed(() => route.query.tag as string || '')
const site = useSiteStore()

const posts = computed(() => {
  const list = site.postList.filter((post) => {
    if (post.tags) {
      if (typeof post.tags === 'string')
        return post.tags === curTag.value
      else
        return post.tags.includes(curTag.value)
    }
    return false
  })
  return list
})

const title = usePostTitle(frontmatter)
</script>

<template>
  <Layout>
    <h1 class="m-y-8 text-center text-4xl leading-9 font-extrabold tracking-tight">
      {{ title }}
    </h1>
    <div class="b-solid p-4 b-2px b-[var(--va-c-bg-transparent)] shadow-lg flex items-end">
      <div
        v-for="[tag, meta] in [...tags.entries()].sort((a, b) => a[1].count - b[1].count).reverse()" :key="tag"
        @click="() => router.push({ query: { tag } })"
      >
        <span class="card cursor-pointer transition-ease duration-.5s hover:bg-[var(--va-c-bg-stroken)]" :style="getTagStyle(meta.count)">
          #{{ tag }}(<u> {{ meta.count }}</u>)
        </span>
      </div>
    </div>
    <div class="card">
      <ul>
        <li v-for="post in posts" :key="post.path" class="pl-2 b-l-.25rem b-[var(--va-c-decor-1)] b-solid m-y-1">
          <a :href="post.path">{{ post.title }}</a>
        </li>
      </ul>
    </div>
    <router-view />
  </Layout>
</template>
