<template>
  <Transition name="splash" @after-leave="$emit('closed')">
    <div v-if="visible" class="splash-screen">
      <div class="splash-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
      
      <div class="splash-content">
        <div class="logo-wrapper">
          <h1 class="splash-logo">
            REDRAY<span>LOGISTICS</span>
          </h1>
          <div class="logo-line"></div>
        </div>
        
        <div class="splash-controls">
          <!-- Выбор темы -->
          <div class="control-group">
            <div class="control-label">
              <i class="fas fa-palette"></i>
              {{ t('theme') }}
            </div>
            <div class="buttons-group">
              <button
                class="option-btn"
                :class="{ active: theme === 'light' }"
                @click="setTheme('light')"
              >
                <i class="fas fa-sun"></i> {{ t('light') }}
              </button>
              <button
                class="option-btn"
                :class="{ active: theme === 'dark' }"
                @click="setTheme('dark')"
              >
                <i class="fas fa-moon"></i> {{ t('dark') }}
              </button>
            </div>
          </div>
          
          <!-- Выбор языка -->
          <div class="control-group">
            <div class="control-label">
              <i class="fas fa-globe"></i>
              {{ t('language') }}
            </div>
            <div class="buttons-group">
              <button
                v-for="locale in ['ru', 'en']"
                :key="locale"
                class="option-btn"
                :class="{ active: $i18n.locale === locale }"
                @click="setLocale(locale)"
              >
                {{ locale === 'ru' ? 'Русский' : 'English' }}
              </button>
            </div>
          </div>
        </div>
        
        <button class="enter-btn" @click="close">
          <span>{{ t('enter') }}</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { t, setLocale } = useI18n()
const theme = ref('light')
const visible = ref(true)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
})

const setTheme = (newTheme) => {
  theme.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

const close = () => {
  visible.value = false
  localStorage.setItem('splashShown', 'true')
  document.body.classList.add('init');
}

const emit = defineEmits(['closed'])
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-bg);
}

.splash-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--red);
  top: -200px;
  left: -200px;
}

.orb-2 {
  width: 600px;
  height: 600px;
  background: #ff6b6b;
  bottom: -250px;
  right: -200px;
  animation-delay: -5s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: #c41e3a;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -10s;
  opacity: 0.2;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.splash-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 450px;
  width: 90%;
  padding: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.splash-logo {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--text-primary), var(--red));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.splash-logo span {
  color: var(--red);
  background: none;
}

.logo-line {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--red), transparent);
  margin: 1rem auto;
}

.splash-controls {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid rgba(225, 29, 72, 0.2);
}

.control-group {
  margin-bottom: 1.5rem;
}

.control-group:last-child {
  margin-bottom: 0;
}

.control-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
}

.control-label i {
  color: var(--red);
  margin-right: 6px;
}

.buttons-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.option-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-dim);
  padding: 0.6rem 1.2rem;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-fast);
}

.option-btn i {
  margin-right: 6px;
}

.option-btn:hover {
  border-color: var(--red);
  color: var(--text-primary);
}

.option-btn.active {
  background: var(--red);
  border-color: var(--red);
  color: white;
}

.enter-btn {
  background: var(--red);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all var(--transition-fast);

  i {
     transition: all var(--transition-fast);
  }
}

.enter-btn:hover {
  background: var(--red-dark);
  box-shadow: 0 0 20px var(--red-glow);
}

.enter-btn:hover i {
  transform: translateX(5px);
}

.splash-enter-active,
.splash-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.splash-leave-to {
  transform: translateY(-100vh);
}

@media (max-width: 768px) {
  .splash-logo {
    font-size: 2rem;
  }
  
  .option-btn {
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }
  
  .enter-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>