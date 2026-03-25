<template>
  <td :class="{ 'table-cell--highlight': highlight }">
    <slot />
  </td>
</template>

<script setup>
defineProps({
  highlight: { type: Boolean, default: false }
})
</script>

<style scoped>
td {
  text-align: center;
  padding: 10px 6px;
  border-bottom: 1px solid var(--border-dim);
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.table-cell--highlight {
  background: rgba(225, 29, 72, 0.07);
  color: var(--text-primary);
}

tr:hover td {
  background: rgba(225, 29, 72, 0.07);
  color: var(--text-primary);
}
</style>