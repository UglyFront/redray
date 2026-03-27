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

    <div class="shipping-section">
      <div class="tabs">
        <button
          :class="['tab-button', { active: activeTabDefault === 'calculator' }]"
          @click="activeTabDefault = 'calculator'"
        >
           {{ $t('calc') }}
        </button>
        <button
          :class="['tab-button', { active: activeTabDefault === 'block' }]"
          @click="activeTabDefault = 'block'"
        >
           {{ $t('table') }}
        </button>
      </div>
      <ShippingCalculator v-if="activeTabDefault === 'calculator'" />
      <ShippingBlock v-else />
    </div>

    <div class="shipping-section">
      <div class="tabs">
        <button
          :class="['tab-button', { active: activeTabCIS === 'calculator' }]"
          @click="activeTabCIS = 'calculator'"
        >
          {{ $t('calc') }}
        </button>
        <button
          :class="['tab-button', { active: activeTabCIS === 'block' }]"
          @click="activeTabCIS = 'block'"
        >
          {{ $t('table') }}
        </button>
      </div>
      <CISShippingCalculator v-if="activeTabCIS === 'calculator'" />
      <CISShippingBlock v-else />
    </div>

  </MainTemplate>
</template>

<script setup>
import MainTemplate from "@/components/templates/MainTemplate.vue";
import SuppliersGrid from "@/components/organisms/SuppliersGrid.vue";
import ShippingCalculator from "@/components/organisms/ShippingCalculator.vue";
import CISShippingCalculator from "@/components/organisms/CISShippingCalculator.vue";
import ShippingBlock from "~/components/organisms/ShippingBlock.vue";
import CISShippingBlock from "~/components/organisms/CISShippingBlock.vue";

const activeTabDefault = ref('calculator')
const activeTabCIS = ref('calculator')
</script>

<style scoped>
.shipping-section {
  margin-bottom: 6rem;
}
.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.3rem;
}
.tab-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: var(--dark-bg);
  cursor: pointer;
  color: var(--text-primary);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--red);
}
.tab-button.active {
  background: var(--red);
  color: var(--text);
}
</style>