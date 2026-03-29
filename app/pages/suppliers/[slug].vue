<template>
  <MainTemplate
    :header-links="$tm('header_links')"
    :footer-links="$tm('footer_links')"
  >
    <SuppliersGrid
      :icon="$t(slug + '_icon')"
      :title="$t(slug + '_title')"
      :suppliers="$tm(slug)"
      :suppliers_key="slug"
    />
  </MainTemplate>
</template>

<script setup>
import MainTemplate from "@/components/templates/MainTemplate.vue";
import SuppliersGrid from "@/components/organisms/SuppliersGrid.vue";

const { slug } = useRoute().params;
</script>
