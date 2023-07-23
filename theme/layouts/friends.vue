<script  lang="ts" setup>
import { usePostTitle } from 'valaxy'
import { useFriendsFrontMatter } from '../composables/friends'

const frontmatter = useFriendsFrontMatter()
const title = usePostTitle(frontmatter)
</script>

<template>
  <Layout>
    <template #page-header>
      <HardlightHeader :title="title" />
    </template>
    <ul class="flex flex-wrap justify-evenly m-y-8">
      <li v-for="friend in frontmatter.friends" :key="friend.name" class="cardf">
        <a target="_blank" :href="friend.url" :style="{ color: friend.textColor }">
          <div class="container w-300px h-128px">
            <div class="friend-bg" :style="{ backgroundColor: friend.backgroundColor }" />
            <img width="128" height="128" class="avatar" :src="friend.avatar">
            <span class="name">{{ friend.name }}</span>
            <span class="desc">{{ friend.desc }}</span>
          </div>
        </a>
      </li>
    </ul>
  </Layout>
</template>

<style>
.container {
  display: grid;
  grid: 48px 80px / 128px 1fr
}

.friend-bg {
  grid-row: 1/3;
  grid-column: 1/3;
  opacity: 0.6;
  z-index: -1;
}

.avatar {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
}

.name {
  grid-row: 1/2;
  grid-column: 2/3;
  font-size: 20px;
  text-align: center;
}

.desc {
  grid-row: 2/3;
  grid-column: 2/3;
  font-size: 14px;
}
</style>
