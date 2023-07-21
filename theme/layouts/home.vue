<template>
  <Layout>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <HardlightHeader />

      <slot>
        <router-view />
      </slot>
    </div>
  </Layout>
</template>
