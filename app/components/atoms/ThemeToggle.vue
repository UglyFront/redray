<template>
  <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Светлая тема' : 'Тёмная тема'">
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
</script>

<style scoped>
.theme-toggle {
  background: rgba(225, 29, 72, 0.12);
  border: 1px solid rgba(225, 29, 72, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-fast);
  color: var(--red);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.theme-toggle:hover {
  background: var(--red);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--red-glow);
}

.theme-toggle:hover i {
  color: white;
}

.theme-toggle i {
  transition: var(--transition-fast);
}
</style>