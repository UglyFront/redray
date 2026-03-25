<template>
  <div class="features-section">
    <FeatureItem
      v-for="item in features"
      :key="item.text"
      :icon="item.icon"
      :text="item.text"
    />
  </div>
</template>

<script setup>
import FeatureItem from '@/components/molecules/FeatureItem.vue'

defineProps({
  features: {
    type: Array,
    required: true,
    validator: (value) => value.every(item => item.icon && item.text)
  }
})
</script>

<style scoped>
@use '@/assets/styles/mixins' as m;

.features-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin: 2rem 0;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .features-section {
    justify-content: center;
  }
}
</style>