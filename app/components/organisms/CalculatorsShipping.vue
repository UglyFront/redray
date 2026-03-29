<template>
  <h2>{{ $t("region") }}</h2>
  <div class="tabs tabs-full">
    <button
      :class="['tab-button', { active: activeBlock === 'other' }]"
      @click="activeBlock = 'other'"
    >
      {{ $t("otherCountry") }}
    </button>
    <button
      :class="['tab-button', { active: activeBlock === 'cis' }]"
      @click="activeBlock = 'cis'"
    >
      {{ $t("cisCountry") }}
    </button>
  </div>

  <div v-show="activeBlock === 'other'" class="shipping-section">
    <div class="tabs">
      <button
        :class="['tab-button', { active: activeTabDefault === 'calculator' }]"
        @click="activeTabDefault = 'calculator'"
      >
        {{ $t("calc") }}
      </button>
      <button
        :class="['tab-button', { active: activeTabDefault === 'block' }]"
        @click="activeTabDefault = 'block'"
      >
        {{ $t("table") }}
      </button>
    </div>
    <ShippingCalculator v-show="activeTabDefault === 'calculator'" />
    <ShippingBlock v-show="activeTabDefault !== 'calculator'" />
  </div>

  <div v-show="activeBlock === 'cis'" class="shipping-section">
    <div class="tabs">
      <button
        :class="['tab-button', { active: activeTabCIS === 'calculator' }]"
        @click="activeTabCIS = 'calculator'"
      >
        {{ $t("calc") }}
      </button>
      <button
        :class="['tab-button', { active: activeTabCIS === 'block' }]"
        @click="activeTabCIS = 'block'"
      >
        {{ $t("table") }}
      </button>
    </div>
    <CISShippingCalculator v-show="activeTabCIS === 'calculator'" />
    <CISShippingBlock v-show="activeTabCIS !== 'calculator'" />
  </div>
</template>

<script setup>
import ShippingCalculator from "@/components/organisms/ShippingCalculator.vue";
import CISShippingCalculator from "@/components/organisms/CISShippingCalculator.vue";
import ShippingBlock from "~/components/organisms/ShippingBlock.vue";
import CISShippingBlock from "~/components/organisms/CISShippingBlock.vue";

const activeBlock = ref("other"); // other | cis
const activeTabDefault = ref("calculator");
const activeTabCIS = ref("calculator");
</script>

<style scoped>
.shipping-section {
  margin-bottom: 6rem;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.3rem;
}

.tabs-full {
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 1rem;
}

.tabs-full button {
  width: 100%;
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
