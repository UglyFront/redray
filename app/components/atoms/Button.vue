<template>
  <component
    :is="tag"
    :class="['btn', `btn--${variant}`]"
    :href="href"
    v-bind="$attrs"
  >
    <i v-if="icon" :class="icon"></i>
    <span><slot /></span>
  </component>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline'].includes(value)
  },
  href: { type: String, default: null },
  icon: { type: String, default: null },
  tag: { type: String, default: 'button' }
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: none;
  transition: var(--transition-fast);
  cursor: pointer;
  border: none;
}

.btn--primary {
  background: var(--red);
  color: var(--text-primary);
}

.btn--primary:hover {
  background: var(--red-dark);
  transform: scale(0.96);
  box-shadow: 0 0 10px var(--red-glow);
}

.btn--outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-secondary);
}

.btn--outline:hover {
  border-color: var(--red);
  color: var(--red);
}
</style>
