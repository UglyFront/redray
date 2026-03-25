<template>
  <span :class="['badge', `badge--${variant}`]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'red', 'outline'].includes(value)
  }
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.8rem;
  border-radius: var(--border-radius-lg);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: transform var(--transition-fast);
}

.badge--default {
  background: rgba(225, 29, 72, 0.12);
  color: var(--red);
  border: 0.5px solid rgba(225, 29, 72, 0.3);
}

.badge--red {
  background: var(--red);
  color: var(--text-primary);
  border: none;
}

.badge--outline {
  background: transparent;
  border: 1px solid var(--red);
  color: var(--red);
}
</style>