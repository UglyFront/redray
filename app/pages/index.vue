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

     <ShippingCalculator />
     <CISShippingCalculator />

  </MainTemplate>
</template>

<script setup>
import MainTemplate from "@/components/templates/MainTemplate.vue";
import SuppliersGrid from "@/components/organisms/SuppliersGrid.vue";
import ShippingCalculator from "@/components/organisms/ShippingCalculator.vue";
import CISShippingCalculator from "@/components/organisms/CISShippingCalculator.vue";
</script>
