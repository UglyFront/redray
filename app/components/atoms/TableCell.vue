<template>
  <td>
    <slot />
  </td>
</template>

<script setup>
</script>

<style scoped>
td {
  text-align: center;
  padding: 10px 6px;
  border-bottom: 1px solid var(--border-dim);
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

tr:hover td {
  background: rgba(225, 29, 72, 0.07);
  color: var(--text-primary);
}
</style>