<template>
  <span class="tag">
    <strong v-if="strong">{{ strong }}</strong>
    <slot />
  </span>
</template>

<script setup>
defineProps({
  strong: { type: String, default: null }
})
</script>

<style scoped>
.tag {
  font-size: 0.7rem;
  background: var(--border-dim);
  padding: 4px 12px;
  border-radius: var(--border-radius-xl);
  color: var(--text-secondary);
  letter-spacing: 0.3px;
  border: 0.5px solid var(--border-dim);
  transition: var(--transition-fast);
}

.tag strong {
  color: var(--red);
  font-weight: 600;
}

.tag:hover {
  border-color: var(--red);
  color: var(--text-primary);
}
</style>