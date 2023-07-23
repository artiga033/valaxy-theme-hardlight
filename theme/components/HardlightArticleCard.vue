<script lang="ts" setup>
import { type Post, formatDate } from 'valaxy'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article class="relative card hover:translate-y--2 max-w-full transition-transform-500">
    <img v-if="post.cover" :src="post.cover">
    <h1 class="b-l-solid b-l-.5rem pl-2 xl:p-y-2 b-l-[var(--va-c-decor-1)] text-xl md:text-4xl text-[var(--va-c-text-stroken)]">
      {{ post.title }}
    </h1>
    <div class="b-l-solid b-l-.25rem pl-3 b-l-[var(--va-c-decor-2)] text-sm md:text-lg text-[var(--va-c-text-light)] lh-6" v-html="post.excerpt" />

    <div class="m-t-2 p-x-.25rem flex justify-between text-xs md:text-base text-[var(--va-c-text-lighter)]">
      <div class="flex flex-wrap gap-1 justify-start z-1">
        <a v-for="tag in post.tags" :key="tag" :href="`/tags?tag=${tag}`" class="cardf bg-[var(--va-c-bg-stroken)] text-inherit px-2">#{{ tag }}</a>
      </div>
      <div class="flex flex-wrap flex-justify-end" style="text-wrap:nowrap">
        <div px-2>
          <div class="inline-block" i-fluent:document-add-24-regular />
          <span>{{ formatDate(post.date ?? new Date()) }}</span>
        </div>
        <div px-2>
          <div v-if="post.updated" class="inline-block" i-fluent:document-edit-24-regular />
          <span v-if="post.updated">{{ formatDate(post.updated) }}</span>
        </div>
      </div>
    </div>
    <router-link class="absolute top-0 left-0 w-full h-full" aria-label="Go to article" :to="post.path || ''" />
  </article>
</template>
