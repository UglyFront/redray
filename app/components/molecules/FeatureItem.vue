<template>
  <div class="feature-item">
    <i :class="icon"></i>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  text: { type: String, required: true }
})
</script>

<style scoped>
.feature-item {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(225, 29, 72, 0.2);
  border-radius: var(--border-radius-xl);
  padding: 0.6rem 1.3rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.feature-item i {
  color: var(--red);
  margin-right: 8px;
}

.feature-item:hover {
  border-color: var(--red);
  color: var(--text-primary);
  transform: translateY(-2px);
}
</style>