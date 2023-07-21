<script  lang="ts" setup>
import { usePostTitle } from 'valaxy'
import { useFriendsFrontMatter } from '../composables/friends'

const frontmatter = useFriendsFrontMatter()
const title = usePostTitle(frontmatter)
</script>

<template>
  <Layout>
    <h1 class="m-y-8 text-center text-4xl leading-9 font-extrabold tracking-tight">
      {{ title }}
    </h1>
    <ul class="flex flex-wrap justify-evenly m-y-8">
      <li v-for="friend in frontmatter.friends" :key="friend.name" class="friend-card">
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
.friend-card {
  border-radius: 2px;
  -webkit-box-shadow: 1px 1.6px 1px 1.4px rgba(0, 0, 0, .132);
  box-shadow: 1px 1.6px 1px 1.4px rgba(0, 0, 0, .132);
}
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
