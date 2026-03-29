<template>
  <MainTemplate
    :header-links="$tm('header_links')"
    :footer-links="$tm('footer_links')"
  >
    <SuppliersGrid
      :icon="$t('shoe_suppliers_icon')"
      :title="$t('shoe_suppliers_title')"
      :suppliers="$tm('shoe_suppliers')"
      suppliers_key="shoe_suppliers"
      short
    />

    <SuppliersGrid
      :icon="$t('brand_suppliers_icon')"
      :title="$t('brand_suppliers_title')"
      :suppliers="$tm('brand_suppliers')"
      suppliers_key="brand_suppliers"
      short
    />

    <CalculatorsShipping />

  </MainTemplate>
</template>

<script setup>
import MainTemplate from "@/components/templates/MainTemplate.vue";
import SuppliersGrid from "@/components/organisms/SuppliersGrid.vue";
import CalculatorsShipping from "@/components/organisms/CalculatorsShipping.vue"
</script>
