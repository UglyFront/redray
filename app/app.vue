<template>
  <div>
    <NuxtLayout>
      <Teleport to="body">
        <SplashScreen v-if="showSplash" @closed="showSplash = false" />
      </Teleport>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import SplashScreen from '@/components/organisms/SplashScreen.vue'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
    }
  ]
})

const showSplash = ref(true)

onMounted(() => {
  const splashShown = localStorage.getItem('splashShown')
  if (splashShown === 'true') {
    showSplash.value = false
    document.body.classList.add('init');
  }

  document.body.classList.add('show');
})
</script>