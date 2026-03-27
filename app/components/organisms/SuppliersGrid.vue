<template>
  <div class="suppliers-section">
    <div class="section-header">
      <SectionMarker :icon="icon" />
      <h2 class="section-title">
        {{ title }}
      </h2>
    </div>

    <div class="suppliers-grid">
      <Card
        v-for="supplier in visibleSuppliers"
        :key="supplier.title"
        v-bind="supplier"
      />
    </div>

    <button
      v-if="suppliers.length > 3 && !showAll"
      class="show-all-button"
      @click="toggleShowAll"
    >
      {{ $t('more') }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionMarker from '@/components/atoms/SectionMarker.vue'
import Card from '@/components/molecules/Card.vue'

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  suppliers: {
    type: Array,
    required: true,
    validator: (value) => value.every(supplier => supplier.title)
  }
})

const showAll = ref(false)

const visibleSuppliers = computed(() => {
  if (showAll.value) {
    return props.suppliers
  }
  return props.suppliers.slice(0, 3)
})

const toggleShowAll = () => {
  showAll.value = !showAll.value
}
</script>

<style scoped>
.suppliers-section {
  margin-bottom: 6rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 3rem 0 1.8rem 0;
}

.section-title {
  font-size: 3rem;
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

.show-all-button {
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-primary);
}

.show-all-button:hover {
  background-color: var(--red);
  color: white;
  border-color: var(--red);
}
</style>