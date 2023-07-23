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
    <template #page-header>
      <HardlightHeader :title="title" />
    </template>
    <div class="b-solid gap-1 p-4 b-2px b-[var(--va-c-bg-transparent)] shadow-lg flex flex-wrap items-end">
      <span
        v-for="[tag, meta] in [...tags.entries()].sort((a, b) => a[1].count - b[1].count).reverse()"
        :key="tag"
        class="card m-y-1 cursor-pointer transition-ease duration-.5s hover:bg-[var(--va-c-bg-stroken)]"
        :style="getTagStyle(meta.count)"
        @click="() => router.push({ query: { tag } })"
      >
        #{{ tag }}(<u> {{ meta.count }}</u>)
      </span>
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
