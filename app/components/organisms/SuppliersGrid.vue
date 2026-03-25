<template>
  <div class="suppliers-section">
    <div class="section-header">
      <SectionMarker :icon="icon" />
      <h2 class="section-title">
        {{ title }}
        <!-- <small v-if="subtitle">{{ subtitle }}</small> -->
      </h2>
    </div>
    
    <div class="suppliers-grid">
      <Card
        v-for="supplier in suppliers"
        :key="supplier.title"
        v-bind="supplier"
      />
    </div>
  </div>
</template>

<script setup>
import SectionMarker from '@/components/atoms/SectionMarker.vue'
import Card from '@/components/molecules/Card.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  suppliers: {
    type: Array,
    required: true,
    validator: (value) => value.every(supplier => supplier.title)
  }
})
</script>

<style scoped>
.suppliers-section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 3rem 0 1.8rem 0;
}

.section-title {
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: var(--text-primary);
}

.section-title small {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--text-muted);
  text-transform: none;
  margin-left: 8px;
}

.suppliers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.8rem;
}
</style>