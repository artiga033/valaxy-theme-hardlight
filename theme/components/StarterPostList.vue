<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
}>(), {
  curPage: 1,
})

const routes = usePostList({ type: props.type || '' })
const posts = computed(() => props.posts || routes.value)
</script>

<template>
  <ul>
    <template v-for="post in posts" :key="post.path">
      <Transition name="fade">
        <li class="m-y-4">
          <StarterArticleCard :post="post" />
        </li>
      </Transition>
    </template>
  </ul>
</template>
