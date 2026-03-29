<template>
  <MainTemplate
    :header-links="$tm('header_links')"
    :footer-links="$tm('footer_links')"
  >
    <SuppliersGrid
      icon="fas fa-shoe-prints"
      :title="$t('shoes')"
      :subtitle="$t('shoes_subtitle')"
      :suppliers="$tm('shoe_suppliers')"
    />

    <SuppliersGrid
      icon="fas fa-tshirt"
      :title="$t('brands')"
      :subtitle="$t('brands_subtitle')"
      :suppliers="$tm('brand_suppliers')"
    />

    <CalculatorsShipping />

  </MainTemplate>
</template>

<script setup>
import MainTemplate from "@/components/templates/MainTemplate.vue";
import SuppliersGrid from "@/components/organisms/SuppliersGrid.vue";
import CalculatorsShipping from "@/components/organisms/CalculatorsShipping.vue"
</script>
