<script lang="ts" setup>
import { type Post, formatDate } from 'valaxy'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article class="relative card hover:translate-y--2 max-w-full transition-transform-500">
    <div class="post_header">
      <img v-if="post.cover" :src="post.cover">
      <h1 class="b-l-solid b-l-.5rem pl-2 b-l-[var(--va-c-decor-1)] text-4xl text-[var(--va-c-text-light)]">
        {{ post.title }}
      </h1>
      <div class="b-l-solid b-l-.25rem pl-3 b-l-[var(--va-c-decor-2)] text-5 lh-6" v-html="post.excerpt" />
      <hr class="h-1 b-[var(--va-c-fore-1)] b-t-3 opacity-33 m-y-1 m-0">
      <div class="post_footer flex justify-between text-base text-[var(--va-c-text-lighter)]">
        <div>
          <span v-for="tag in post.tags" :key="tag" class="card px-2">#{{ tag }}</span>
        </div>
        <div class="flex divide-x-2 divide-[var(--va-c-decor-2)]">
          <div px-2>
            <div class="inline-block" i-fluent:document-add-24-regular />
            <span>{{ formatDate(post.date ?? new Date()) }}</span>
          </div>
          <div px-2>
            <div v-if="post.updated" class="inline-block" i-fluent:document-edit-24-regular />
            <span v-if="post.updated">{{ formatDate(post.updated) }}</span>
          </div>
        </div>
        <router-link class="absolute top-0 left-0 w-full h-full" aria-label="Go to article" :to="post.path || ''" />
      </div>
    </div>
  </article>
</template>
