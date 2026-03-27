<template>
  <div class="shipping-block">
    <div class="shipping-block__header">
      <h3 class="shipping-block__title">
        <i class="fas fa-dollar-sign"></i>
        {{ $t('shipping.title') }}
      </h3>
      <div class="shipping-block__coefficient">
        <i class="fas fa-cube"></i>
        {{ $t('shipping.coef') }}
      </div>
    </div>

    <div class="calculator">
      <div class="calculator__row">
        <label class="calculator__label">{{ $t('calculator.country') }}</label>
        
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
        <button
          :class="['calculator__mode-btn', { active: mode === 'dimensions' }]"
          @click="mode = 'dimensions'"
        >
          {{ $t('calculator.modeDimensions') }}
        </button>
      </div>

      <div v-if="mode === 'weight'" class="calculator__row">
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

      <div v-else class="calculator__row calculator__dimensions">
        <div class="calculator__dimension">
          <label>{{ $t('calculator.length') }}</label>
          <input v-model.number="length" type="number" step="0.1" min="0" class="calculator__input" :placeholder="$t('calculator.placeholderCm')" />
        </div>
        <div class="calculator__dimension">
          <label>{{ $t('calculator.width') }}</label>
          <input v-model.number="width" type="number" step="0.1" min="0" class="calculator__input" :placeholder="$t('calculator.placeholderCm')" />
        </div>
        <div class="calculator__dimension">
          <label>{{ $t('calculator.height') }}</label>
          <input v-model.number="height" type="number" step="0.1" min="0" class="calculator__input" :placeholder="$t('calculator.placeholderCm')" />
        </div>
      </div>

      <div class="calculator__result">
        <div class="calculator__result-value" :class="{ 'calculator__result-value--placeholder': !isValidInput }">
          {{ resultText }}
        </div>
        <div v-if="isValidInput" class="calculator__result-details">
          <div v-if="mode === 'dimensions' && volumetricWeight">
            {{ $t('calculator.volumetricWeight') }}: {{ volumetricWeight.toFixed(2) }} {{ $t('calculator.kg') }}
          </div>
          <div>{{ $t('calculator.finalWeight') }}: {{ finalWeight.toFixed(2) }} {{ $t('calculator.kg') }}</div>
          <div>{{ $t('calculator.rate') }}: {{ rateValue }} $/{{ $t('calculator.kg') }}</div>
          <div v-if="currentCountry?.hasStar" class="calculator__coefficient-note">
            <i class="fas fa-star"></i> {{ $t('calculator.coefficient5000') }}
          </div>
        </div>
        <div v-else class="calculator__result-placeholder">
          {{ $t('calculator.enterData') }}
        </div>
      </div>
    </div>

    <div class="shipping-block__info">
      <p><i class="fas fa-box"></i> <span v-html="$t('shipping.info1')" /></p>
      <p><i class="fas fa-weight-hanging"></i> <span v-html="$t('shipping.info2')" /></p>
      <p><i class="fas fa-star"></i> <span v-html="$t('shipping.info3')" /></p>
      <p><i class="fas fa-clock"></i> <span v-html="$t('shipping.info4')" /></p>
      <p><i class="fas fa-credit-card"></i> <span v-html="$t('shipping.info5')" /></p>
      <p><i class="fas fa-chart-line"></i> <span v-html="$t('shipping.info6')" /></p>
    </div>

    <div class="shipping-block__footnote">
      <span>
        <i class="fas fa-chart-line"></i>
        {{ $t('shipping.footnote') }}
      </span>
      <span>
        <i class="fab fa-telegram"></i>
        {{ $t('shipping.manager') }}: @RRL_manager
      </span>
    </div>
  </div>
</template>

<script setup>
import CustomSelect from '@/components/atoms/CustomSelect.vue'

const rawTableData = [
  { country: 'Europe', '2-3kg': '18$', '4-6kg': '17$', '7kg': '16$', '8kg': '15$', '9kg': '14.5$', '10kg': '13.5$' },
  { country: 'U.A.E', '2-3kg': '17$', '4-6kg': '16$', '7kg': '15$', '8kg': '14.5$', '9kg': '14$', '10kg': '13.5$' },
  { country: 'U.K', '2-3kg': '19$', '4-6kg': '18$', '7kg': '17$', '8kg': '16.5$', '9kg': '17$', '10kg': '15.5$' },
  { country: 'Ukraine', '2-3kg': '20$', '4-6kg': '20$', '7kg': '20$', '8kg': '20$', '9kg': '20$_', '10kg': '20$_' },
  { country: 'Malta', '2-3kg': '23$', '4-6kg': '20$', '7kg': '19$', '8kg': '17.5$', '9kg': '16$_', '10kg': '15$_' },
  { country: 'Cyprus*', '2-3kg': '19$', '4-6kg': '18$_', '7kg': '17$_', '8kg': '16.5$_', '9kg': '17$_', '10kg': '15.5$_' },
  { country: 'Moldova*', '2-3kg': '25$_', '4-6kg': '25$_', '7kg': '23$_', '8kg': '22$_', '9kg': '21$_', '10kg': '20$_' },
  { country: 'Israel*', '2-3kg': '25$_', '4-6kg': '24$_', '7kg': '23$_', '8kg': '22$_', '9kg': '21$_', '10kg': '20$_' },
  { country: 'Norway*', '2-3kg': '22$_', '4-6kg': '19$_', '7kg': '18$_', '8kg': '17$_', '9kg': '16$_', '10kg': '15$_' },
  { country: 'Switzerland*', '2-3kg': '23$_', '4-6kg': '21$_', '7kg': '19$_', '8kg': '18$_', '9kg': '17$_', '10kg': '16$_' },
  { country: 'U.S*', '2-3kg': '22$_', '4-6kg': '19$_', '7kg': '18$_', '8kg': '17$_', '9kg': '16$_', '10kg': '15$_' },
  { country: 'Indonesia*', '2-3kg': '25$_', '4-6kg': '23$_', '7kg': '22$_', '8kg': '21$_', '9kg': '21$_', '10kg': '20$_' },
  { country: 'Thailand*', '2-3kg': '25$_', '4-6kg': '23$_', '7kg': '22$_', '8kg': '21$_', '9kg': '21$_', '10kg': '20$_' },
  { country: 'Armenia', '2-3kg': '24$_', '4-6kg': '24$_', '7kg': '24$_', '8kg': '24$_', '9kg': '24$_', '10kg': '24$_' }
]

const countriesData = rawTableData.map(item => {
  const name = item.country
  const hasStar = name.includes('*')
  const cleanName = name.replace('*', '')
  const rates = {
    '2-3kg': parseFloat(item['2-3kg'].replace(/_/g, '').replace('$', '')),
    '4-6kg': parseFloat(item['4-6kg'].replace(/_/g, '').replace('$', '')),
    '7kg': parseFloat(item['7kg'].replace(/_/g, '').replace('$', '')),
    '8kg': parseFloat(item['8kg'].replace(/_/g, '').replace('$', '')),
    '9kg': parseFloat(item['9kg'].replace(/_/g, '').replace('$', '')),
    '10kg': parseFloat(item['10kg'].replace(/_/g, '').replace('$', ''))
  }
  return {
    code: cleanName,
    name: cleanName + (hasStar ? '*' : ''),
    hasStar,
    rates
  }
})

const countryOptions = computed(() => {
  return countriesData.map(country => ({
    value: country.code,
    label: country.name,
    hasStar: country.hasStar
  }))
})

const selectedCountry = ref(countriesData[0].code)
const mode = ref('weight')
const weightInput = ref(null)
const length = ref(null)
const width = ref(null)
const height = ref(null)

const currentCountry = computed(() => {
  return countriesData.find(c => c.code === selectedCountry.value)
})

const volumeDivider = computed(() => {
  return currentCountry.value?.hasStar ? 5000 : 7000
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
  if (weight <= 3) return countryRates['2-3kg']
  if (weight <= 6) return countryRates['4-6kg']
  if (weight <= 7) return countryRates['7kg']
  if (weight <= 8) return countryRates['8kg']
  if (weight <= 9) return countryRates['9kg']
  return countryRates['10kg']
}

const finalWeight = computed(() => {
  if (!isValidInput.value || !currentCountry.value) return 0
  
  let weight = 0
  
  if (mode.value === 'weight') {
    weight = Math.ceil(weightInput.value * 2) / 2
  } else {
    const volWeight = (length.value * width.value * height.value) / volumeDivider.value
    weight = Math.round(volWeight * 2) / 2
  }
  
  if (weight < 2) weight = 2
  
  return weight
})

const rateValue = computed(() => {
  if (!isValidInput.value || !currentCountry.value) return 0
  return getRateByWeight(finalWeight.value, currentCountry.value.rates)
})

const totalPrice = computed(() => {
  if (!isValidInput.value || !currentCountry.value) return 0
  return finalWeight.value * rateValue.value
})

const volumetricWeight = computed(() => {
  if (mode.value !== 'dimensions' || !isValidInput.value) return null
  return (length.value * width.value * height.value) / volumeDivider.value
})

const resultText = computed(() => {
  if (!isValidInput.value || !currentCountry.value) {
    return '0 $'
  }
  return `${totalPrice.value.toFixed(2)} $`
})

watch([selectedCountry, mode, weightInput, length, width, height], () => {
  // Расчёт происходит автоматически через computed свойства
  // Ничего дополнительно делать не нужно
}, { deep: true })
</script>

<style scoped>
.shipping-block {
  margin: 3rem 0 2rem;
  background: var(--card-bg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-dim);
  padding: 1.5rem;
}

.shipping-block__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--red);
}

.shipping-block__title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

.shipping-block__title i {
  color: var(--red);
  margin-right: 8px;
}

.shipping-block__coefficient {
  font-size: 0.75rem;
  background: rgba(225, 29, 72, 0.1);
  padding: 4px 12px;
  border-radius: var(--border-radius-lg);
  color: var(--text-muted);
}

.shipping-block__coefficient i {
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

.calculator__dimensions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.calculator__dimension {
  flex: 1;
  min-width: 100px;
}

.calculator__dimension label {
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  color: var(--text-muted);
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

.calculator__coefficient-note {
  margin-top: 0.25rem;
  color: #ffc107;
  font-size: 0.7rem;
}

.calculator__coefficient-note i {
  margin-right: 4px;
}

.shipping-block__info {
  background: rgba(225, 29, 72, 0.05);
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.2rem;
  margin: 1rem 0;
}

.shipping-block__info p {
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.shipping-block__info p:last-child {
  margin-bottom: 0;
}

.shipping-block__info i {
  color: var(--red);
  width: 20px;
  margin-right: 6px;
}

.shipping-block__info strong {
  color: var(--text-primary);
}

.shipping-block__footnote {
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-dim);
  color: var(--text-muted);
}

.shipping-block__footnote i {
  color: var(--red);
  margin-right: 4px;
}

@media (max-width: 768px) {
  .shipping-block {
    padding: 1rem;
  }
  
  .shipping-block__title {
    font-size: 1.2rem;
  }
  
  .shipping-block__header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .shipping-block__footnote {
    flex-direction: column;
    gap: 0.5rem;
  }

  .calculator__row {
    flex-direction: column;
    align-items: stretch;
  }

  .calculator__label {
    width: auto;
  }

  .calculator__dimensions {
    flex-direction: column;
  }
  
  .calculator__result-value {
    font-size: 1.5rem;
  }
}
</style>