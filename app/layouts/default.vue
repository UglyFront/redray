<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/fav.jpg' }
  ]
})

useSeoMeta({
  title: "Red Ray Logistics",
  twitterTitle: "Red Ray Logistics",
  ogTitle: "Red Ray Logistics",
  ogImage: '/fav.jpg',
  twitterImage: '/fav.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="default">
    <slot />
  </div>
</template>

<style lang="scss">

</style>
