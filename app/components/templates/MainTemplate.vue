<template>
  <div class="main-container">
    <header class="main-header">
      <div class="logo">
        <h1>REDRAY<span>LOGISTICS</span></h1>
      </div>
      <div class="header-right">
        <HeaderLinks :links="headerLinks" />
        
        <div class="lang-selector">
          <button
            v-for="locale in ['ru', 'en']"
            :key="locale"
            class="lang-btn"
            :class="{ active: $i18n.locale === locale }"
            @click="setLocale(locale)"
          >
            {{ locale.toUpperCase() }}
          </button>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
    
    <RedLine />
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="main-footer">
      <div class="copyright">
        © {{ currentYear }} REDRAY LOGISTICS
      </div>
      <div class="footer-links">
        <a
          v-for="link in footerLinks"
          :key="$rt(link.label)"
          :href="$rt(link.href)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i :class="$rt(link.icon)"></i>
          {{ $rt(link.label) }}
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HeaderLinks from '@/components/molecules/HeaderLinks.vue'
import RedLine from '@/components/atoms/RedLine.vue'
import ThemeToggle from '@/components/atoms/ThemeToggle.vue'

const { t, setLocale } = useI18n()
const currentYear = new Date().getFullYear()

defineProps({
  headerLinks: Array,
  footerLinks: Array
})
</script>

<style scoped>
.main-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 7rem 2rem 1.8rem;
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
}

.logo p {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-muted);
  margin-top: 4px;
}

.lang-selector {
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  padding: 4px;
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-fast);
}

.lang-btn.active {
  background: var(--red);
  color: white;
}

.lang-btn:hover:not(.active) {
  color: var(--red);
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