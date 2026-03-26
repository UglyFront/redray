<template>
  <div class="custom-select" :class="{ 'is-open': isOpen }" ref="selectRef">
    <div class="custom-select__trigger" @click="toggleOpen">
      <span class="custom-select__selected">
        {{ selectedOption?.label || placeholder }}
      </span>
      <i class="fas fa-chevron-down custom-select__arrow"></i>
    </div>
    
    <transition name="dropdown-fade">
      <div v-if="isOpen" class="custom-select__dropdown">
        <div class="custom-select__search">
          <i class="fas fa-search"></i>
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="$t('select.search')"
            class="custom-select__search-input"
            @click.stop
          />
        </div>
        
        <div class="custom-select__options">
          <div
            v-for="option in filteredOptions"
            :key="option.value"
            class="custom-select__option"
            :class="{ 
              'is-selected': selectedValue === option.value,
              'has-star': option.hasStar 
            }"
            @click="selectOption(option)"
          >
            <span class="custom-select__option-label">
              {{ option.label }}
            </span>
            <i v-if="selectedValue === option.value" class="fas fa-check custom-select__check"></i>
          </div>
          
          <div v-if="filteredOptions.length === 0" class="custom-select__empty">
            -
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: (value) => value.every(opt => 'value' in opt && 'label' in opt)
  },
  modelValue: {
    type: [String, Number],
    default: null
  },
  placeholder: {
    type: String,
    default: 'Select option'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const searchQuery = ref('')
const selectRef = ref(null)

const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue)
})

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  
  const query = searchQuery.value.toLowerCase()
  return props.options.filter(option => 
    option.label.toLowerCase().includes(query)
  )
})

const toggleOpen = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    searchQuery.value = ''
  }
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
  searchQuery.value = ''
}

// Закрытие при клике вне компонента
const handleClickOutside = (event) => {
  if (selectRef.value && !selectRef.value.contains(event.target)) {
    isOpen.value = false
    searchQuery.value = ''
  }
}

// Закрытие при нажатии Escape
const handleEscape = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false
    searchQuery.value = ''
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  user-select: none;
}

.custom-select__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid var(--border-dim);
  border-radius: var(--border-radius-sm);
  background: var(--card-bg);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s;
}

.custom-select__trigger:hover {
  border-color: var(--red);
}

.custom-select.is-open .custom-select__trigger {
  border-color: var(--red);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.custom-select__selected {
  flex: 1;
  font-size: 0.9rem;
}

.custom-select__arrow {
  color: var(--text-muted);
  transition: transform 0.2s;
  font-size: 0.8rem;
}

.custom-select.is-open .custom-select__arrow {
  transform: rotate(180deg);
}

.custom-select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--card-bg);
  border: 1px solid var(--border-dim);
  border-top: none;
  border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  display: flex;
  flex-direction: column;
}

.custom-select__search {
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-dim);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.custom-select__search i {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.custom-select__search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 0.85rem;
}

.custom-select__search-input::placeholder {
  color: var(--text-muted);
}

.custom-select__options {
  overflow-y: auto;
  max-height: 250px;
}

.custom-select__option {
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.custom-select__option:hover {
  background: rgba(225, 29, 72, 0.05);
  color: var(--text-primary);
}

.custom-select__option.is-selected {
  background: rgba(225, 29, 72, 0.1);
  color: var(--red);
}

.custom-select__option.has-star .custom-select__option-label {
  position: relative;
}

.star-icon {
  color: #ffc107;
  margin-left: 2px;
  font-size: 0.7rem;
}

.custom-select__check {
  color: var(--red);
  font-size: 0.75rem;
}

.custom-select__empty {
  padding: 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* Анимация */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>