<template>
  <div class="section-marker">
    <i :class="icon"></i>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true }
})
</script>

<style scoped>
.section-marker {
  width: 40px;
  height: 40px;
  background: rgba(225, 29, 72, 0.12);
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 3px solid var(--red);
}

.section-marker i {
  font-size: 1.4rem;
  color: var(--red);
}
</style>
