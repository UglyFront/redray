<template>
  <div class="header-links">
    <IconLink v-for="link in links" :key="$rt(link.label)" :href="$rt(link.href)" :icon="$rt(link.icon)">
      {{ $rt(link.label) }}
    </IconLink>
  </div>
</template>

<script setup>
import IconLink from '@/components/atoms/IconLink.vue'

defineProps({
  links: {
    type: Array,
    required: true,
    validator: (value) => value.every(link => link.label && link.href && link.icon)
  }
})
</script>

<style scoped>
.header-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}
</style>