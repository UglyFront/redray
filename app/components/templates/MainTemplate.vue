<template>
  <div class="main-container">
    <header class="main-header">
      <div class="logo">
        <h1>REDRAY<span>LOGISTICS</span></h1>
        <p>{{ tagline }}</p>
      </div>
      <div class="header-right">
        <HeaderLinks :links="headerLinks" />
        <ThemeToggle />
      </div>
    </header>
    
    <RedLine />
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="main-footer">
      <div class="copyright">
        © {{ currentYear }} REDRAY LOGISTICS — {{ footerText }}
      </div>
      <div class="footer-links">
        <a
          v-for="link in footerLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i :class="link.icon"></i>
          {{ link.label }}
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HeaderLinks from '@/components/molecules/HeaderLinks.vue'
import RedLine from '@/components/atoms/RedLine.vue'
import ThemeToggle from '@/components/atoms/ThemeToggle.vue'

defineProps({
  headerLinks: {
    type: Array,
    required: true
  },
  footerLinks: {
    type: Array,
    required: true
  },
  tagline: {
    type: String,
    default: 'CHINA DIRECT'
  },
  footerText: {
    type: String,
    default: 'топ-поставщики'
  }
})

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2rem 1.8rem;
}

.main-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-dim);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 3rem;
  z-index: 99999;
  background: var(--dark-bg);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo h1 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--text-primary), var(--text-muted));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.logo h1 span {
  color: var(--red);
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
}

.logo p {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-muted);
  margin-top: 4px;
}

.main-content {
  min-height: 60vh;
}

.main-footer {
  margin-top: 3rem;
  padding-top: 1.8rem;
  border-top: 1px solid var(--border-dim);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.footer-links a:hover {
  color: var(--red);
}

@media (max-width: 768px) {
  .main-container {
    padding: 1.2rem;
  }
  
  .main-header {
    flex-direction: column;
    align-items: flex-start;
    position: static;
    padding: 0;
    padding-bottom: 1rem;
  }
  
  .header-right {
    width: 100%;
    justify-content: space-between;
  }
  
  .main-footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>