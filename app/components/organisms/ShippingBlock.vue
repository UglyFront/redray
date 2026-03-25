<template>
  <div class="shipping-block">
    <div class="shipping-block__header">
      <h3 class="shipping-block__title">
        <i class="fas fa-dollar-sign"></i>
        {{ title }}
      </h3>
      <div class="shipping-block__coefficient">
        <i class="fas fa-cube"></i>
        {{ coefficientText }}
      </div>
    </div>
    
    <ShippingTable :data="tableData" :weightColumns="weightColumns" />
    
    <div class="shipping-block__info" v-html="infoHtml"></div>
    
    <div class="shipping-block__footnote">
      <span>
        <i class="fas fa-chart-line"></i>
        {{ footnoteLeft }}
      </span>
      <span>
        <i class="fab fa-telegram"></i>
        {{ footnoteRight }}
      </span>
    </div>
  </div>
</template>

<script setup>
import ShippingTable from '@/components/molecules/ShippingTable.vue'

defineProps({
  title: { type: String, required: true },
  coefficientText: { type: String, required: true },
  tableData: { type: Array, required: true },
  weightColumns: { type: Array, default: () => ['2-3kg', '4-6kg', '7kg', '8kg', '9kg', '10kg'] },
  infoHtml: { type: String, required: true },
  footnoteLeft: { type: String, required: true },
  footnoteRight: { type: String, required: true }
})
</script>

<style scoped>
.shipping-block {
  margin: 3rem 0 2rem;
  background: var(--card-bg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-dim);
  padding: 1.5rem 1rem;
}

.shipping-block__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
  padding: 0 0.5rem;
}

.shipping-block__title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

.shipping-block__title i {
  color: var(--red);
  margin-right: 8px;
}

.shipping-block__coefficient {
  font-size: 0.7rem;
  background: var(--bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xl);
  color: var(--text-muted);
}

.shipping-block__info {
  margin-top: 1.5rem;
  background: rgba(0, 0, 0, 0.03);
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  color: var(--text-secondary);
  border-left: 3px solid var(--red);
  line-height: 1.6;
}

/* [data-theme="dark"] .shipping-block__info {
  background: #0c0c0e;
} */

.shipping-block__info i {
  color: var(--red);
  width: 20px;
  margin-right: 4px;
}

.shipping-block__footnote {
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 0.5rem;
  color: var(--text-muted);
}

.shipping-block__footnote i {
  color: var(--red);
  margin-right: 4px;
}
</style>