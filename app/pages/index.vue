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

    <ShippingBlock />

    <CISShippingBlock />

    <!-- <FeaturesSection :features="features" /> -->
  </MainTemplate>
</template>

<script setup>
import MainTemplate from "@/components/templates/MainTemplate.vue";
import SuppliersGrid from "@/components/organisms/SuppliersGrid.vue";
import ShippingBlock from "@/components/organisms/ShippingBlock.vue";
import CISShippingBlock from "@/components/organisms/CISShippingBlock.vue";
// import FeaturesSection from '@/components/organisms/FeaturesSection.vue'
</script>
