<template>
  <MainTemplate
    :header-links="$tm('header_links')"
    :footer-links="$tm('footer_links')"
  >
    <CalculatorsShipping />
  </MainTemplate>
</template>

<script setup>
import MainTemplate from '~/components/templates/MainTemplate.vue';
import CalculatorsShipping from '@/components/organisms/CalculatorsShipping.vue';
</script>