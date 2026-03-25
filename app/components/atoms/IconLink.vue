<template>
  <a :href="href" target="_blank" class="icon-link" rel="noopener noreferrer">
    <i :class="icon"></i>
    <span><slot /></span>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<style scoped>
.icon-link {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(2px);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-lg);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition-fast);
  border: 1px solid rgba(225, 29, 72, 0.2);
}

.icon-link i {
  color: var(--red);
  font-size: 0.9rem;
}

.icon-link:hover {
  background: var(--red);
  border-color: var(--red);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px var(--red-glow);
}

.icon-link:hover i {
  color: var(--text-primary);
}
</style>
