<template>
  <div class="cis-shipping-block">
    <div class="cis-shipping-block__header">
      <h3 class="cis-shipping-block__title">
        <i class="fas fa-ruble-sign"></i>
        {{ $t('ciss.title') }}
      </h3>
    </div>

    <div class="calculator">
      <div class="calculator__row">
        <label class="calculator__label">{{ $t('ciss.country') }}</label>
        <CustomSelect
          v-model="selectedCountry"
          :options="countryOptions"
          :placeholder="$t('calculator.selectCountry')"
        />
      </div>

      <div class="calculator__row calculator__mode">
        <button
          :class="['calculator__mode-btn', { active: mode === 'weight' }]"
          @click="mode = 'weight'"
        >
          {{ $t('calculator.modeWeight') }}
        </button>
      </div>

      <div class="calculator__row">
        <label class="calculator__label">{{ $t('calculator.weight') }}</label>
        <input
          v-model.number="weightInput"
          type="number"
          step="0.1"
          min="0"
          class="calculator__input"
          :placeholder="$t('calculator.weightPlaceholder')"
        />
      </div>

      <div class="calculator__result">
        <div class="calculator__result-value" :class="{ 'calculator__result-value--placeholder': !isValidInput }">
          {{ resultText }}
        </div>
        <div v-if="isValidInput" class="calculator__result-details">
          <div>{{ $t('calculator.finalWeight') }}: {{ finalWeight.toFixed(2) }} {{ $t('calculator.kg') }}</div>
          <div>{{ $t('calculator.rate') }}: {{ rateValue }} $/{{ $t('calculator.kg') }}</div>
          <div v-if="selectedCountryData?.code === 'kyrgyzstan'" class="calculator__min-weight">
            <i class="fas fa-exclamation-triangle"></i>
            <span v-html="$t('ciss.kirgiz_min')" />
          </div>
          <div v-if="selectedCountryData?.code === 'russia_express'" class="calculator__express-badge">
            <i class="fas fa-rocket"></i>
            {{ $t('ciss.expressDelivery') }}
          </div>
        </div>
        <div v-else class="calculator__result-placeholder">
          {{ $t('calculator.enterData') }}
        </div>
      </div>
    </div>

    <div v-if="selectedCountryData" class="delivery-info-wrapper">
      <div class="delivery-info">
        <i class="fas fa-truck"></i>
        <span v-html="selectedCountryData.deliveryInfo" />
      </div>
      <div class="packaging-info">
        <i class="fas fa-box"></i>
        <span v-html="selectedCountryData.packagingInfo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CustomSelect from '@/components/atoms/CustomSelect.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cisCountries = [
  {
    code: 'russia_standard',
    nameKey: 'ciss.russia',
    isExpress: false,
    minWeight: 2,
    rates: {
      '1-3kg': 8,
      '4-6kg': 8,
      '7kg': 8,
      '8kg': 7.5,
      '9kg': 7.5,
      '10kg': 7
    },
    deliveryInfoKey: 'ciss.russia_delivery_info',
    packagingInfoKey: 'ciss.russia_packaging_info'
  },
  {
    code: 'belarus',
    nameKey: 'ciss.belarus',
    isExpress: false,
    minWeight: 2,
    rates: {
      '1-3kg': 8,
      '4-6kg': 8,
      '7kg': 8,
      '8kg': 7.5,
      '9kg': 7.5,
      '10kg': 7
    },
    deliveryInfoKey: 'ciss.russia_delivery_info',
    packagingInfoKey: 'ciss.russia_packaging_info'
  },
  {
    code: 'russia_express',
    nameKey: 'ciss.russiaExpress',
    isExpress: true,
    minWeight: 2,
    rates: {
      '1-3kg': 30,
      '4-6kg': 30,
      '7kg': 29.5,
      '8kg': 29.5,
      '9kg': 28.5,
      '10kg': 28
    },
    deliveryInfoKey: 'ciss.russia_delivery_info',
    packagingInfoKey: 'ciss.russia_packaging_info'
  },
  {
    code: 'kazakhstan',
    nameKey: 'ciss.kz',
    isExpress: false,
    minWeight: 2,
    rates: {
      '1-3kg': 7,
      '4-6kg': 7,
      '7kg': 7,
      '8kg': 6.5,
      '9kg': 6.5,
      '10kg': 6
    },
    deliveryInfoKey: 'ciss.kz_delivery_info',
    packagingInfoKey: 'ciss.kz_packaging_info'
  },
  {
    code: 'kyrgyzstan',
    nameKey: 'ciss.kirgiz',
    isExpress: false,
    minWeight: 5,
    rates: {
      '5-6kg': 8,
      '7kg': 8,
      '8kg': 8,
      '9kg': 7.5,
      '10kg': 7.5
    },
    deliveryInfoKey: 'ciss.kirgiz_delivery_info',
    packagingInfoKey: 'ciss.kirgiz_packaging_info'
  }
]

const countryOptions = computed(() => {
  return cisCountries.map(country => ({
    value: country.code,
    label: t(country.nameKey),
    hasStar: false
  }))
})

const selectedCountry = ref(cisCountries[0].code)
const mode = ref('weight')
const weightInput = ref(null)
const length = ref(null)
const width = ref(null)
const height = ref(null)

const selectedCountryData = computed(() => {
  const country = cisCountries.find(c => c.code === selectedCountry.value)
  if (!country) return null
  
  return {
    ...country,
    name: t(country.nameKey),
    deliveryInfo: t(country.deliveryInfoKey),
    packagingInfo: t(country.packagingInfoKey)
  }
})

const isValidInput = computed(() => {
  if (mode.value === 'weight') {
    return weightInput.value && weightInput.value > 0
  } else {
    return length.value && length.value > 0 && 
           width.value && width.value > 0 && 
           height.value && height.value > 0
  }
})

function getRateByWeight(weight, countryRates) {
  if (selectedCountry.value === 'kyrgyzstan') {
    if (weight <= 6) return countryRates['5-6kg']
    if (weight <= 7) return countryRates['7kg']
    if (weight <= 8) return countryRates['8kg']
    if (weight <= 9) return countryRates['9kg']
    return countryRates['10kg']
  } else {
    if (weight <= 3) return countryRates['1-3kg']
    if (weight <= 6) return countryRates['4-6kg']
    if (weight <= 7) return countryRates['7kg']
    if (weight <= 8) return countryRates['8kg']
    if (weight <= 9) return countryRates['9kg']
    return countryRates['10kg']
  }
}

const finalWeight = computed(() => {
  if (!isValidInput.value || !selectedCountryData.value) return 0
  
  let weight = 0
  
  weight = Math.round(weightInput.value * 2) / 2
  
  const minWeight = selectedCountryData.value.minWeight || 2
  
  weight = Math.max(weight, minWeight)
  
  return weight
})

const rateValue = computed(() => {
  if (!isValidInput.value || !selectedCountryData.value) return 0
  return getRateByWeight(finalWeight.value, selectedCountryData.value.rates)
})

const totalPrice = computed(() => {
  if (!isValidInput.value || !selectedCountryData.value) return 0
  return finalWeight.value * rateValue.value
})

const resultText = computed(() => {
  if (!isValidInput.value || !selectedCountryData.value) {
    return '0 $'
  }
  return `${totalPrice.value.toFixed(2)} $`
})
</script>

<style scoped>
.cis-shipping-block {
  margin: 3rem 0 2rem;
  background: var(--card-bg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-dim);
  padding: 1.5rem;
}

.cis-shipping-block__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--red);
}

.cis-shipping-block__title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

.cis-shipping-block__title i {
  color: var(--red);
  margin-right: 8px;
}

.cis-shipping-block__note {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: rgba(225, 29, 72, 0.1);
  padding: 4px 12px;
  border-radius: var(--border-radius-lg);
}

.cis-shipping-block__note i {
  color: var(--red);
  margin-right: 4px;
}

.calculator {
  background: rgba(225, 29, 72, 0.03);
  border-radius: var(--border-radius-sm);
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-dim);
}

.calculator__row {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
}

.calculator__label {
  font-weight: 600;
  width: 120px;
  color: var(--text-primary);
}

.calculator__input {
  flex: 1;
  min-width: 150px;
  padding: 0.5rem;
  border: 1px solid var(--border-dim);
  border-radius: var(--border-radius-sm);
  background: var(--card-bg);
  color: var(--text-primary);
  transition: all 0.2s;
}

.calculator__input:focus {
  outline: none;
  border-color: var(--red);
}

.calculator__mode {
  display: flex;
  gap: 0.5rem;
}

.calculator__mode-btn {
  background: transparent;
  border: 1px solid var(--border-dim);
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-secondary);
}

.calculator__mode-btn.active {
  background: var(--red);
  border-color: var(--red);
  color: white;
}

.calculator__result {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-dim);
}

.calculator__result-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--red);
  margin-bottom: 0.5rem;
  transition: all 0.2s;
}

.calculator__result-value--placeholder {
  color: var(--text-muted);
  opacity: 0.5;
}

.calculator__result-details {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.calculator__result-placeholder {
  font-size: 0.85rem;
  color: var(--text-muted);
  padding: 0.5rem 0;
}

.calculator__min-weight {
  margin-top: 0.25rem;
  color: #ffc107;
  font-size: 0.7rem;
}

.calculator__express-badge {
  margin-top: 0.25rem;
  color: var(--red);
  font-size: 0.7rem;
  font-weight: 600;
}

.calculator__min-weight i,
.calculator__express-badge i {
  margin-right: 4px;
}

.delivery-info-wrapper {
  margin-top: 1rem;
}

.delivery-info {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin: 0.8rem 0 0.5rem;
  padding: 0.8rem;
  background: rgba(225, 29, 72, 0.05);
  border-radius: var(--border-radius-sm);
  line-height: 1.5;
}

.delivery-info i {
  color: var(--red);
  margin-right: 8px;
}

.packaging-info {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin: 0.5rem 0;
  padding: 0.5rem 0.8rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-sm);
  display: inline-block;
}

[data-theme="light"] .packaging-info {
  background: rgba(0, 0, 0, 0.05);
}

.packaging-info i {
  color: var(--red);
  margin-right: 6px;
}

.packaging-info strong {
  color: var(--red);
}

.min-weight-warning {
  font-size: 0.75rem;
  color: var(--red);
  margin-top: 0.8rem;
  padding: 0.5rem 0.8rem;
  background: rgba(225, 29, 72, 0.1);
  border-radius: var(--border-radius-sm);
  display: inline-block;
  border-left: 2px solid var(--red);
}

.min-weight-warning i {
  margin-right: 6px;
}

.min-weight-warning strong {
  font-weight: 700;
}

@media (max-width: 768px) {
  .cis-shipping-block {
    padding: 1rem;
  }
  
  .cis-shipping-block__title {
    font-size: 1.2rem;
  }
  
  .calculator__row {
    flex-direction: column;
    align-items: stretch;
  }

  .calculator__label {
    width: auto;
  }

  .calculator__result-value {
    font-size: 1.5rem;
  }
}
</style>