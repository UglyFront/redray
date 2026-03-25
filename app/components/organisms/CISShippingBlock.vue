<template>
  <div class="cis-shipping-block">
    <div class="cis-shipping-block__header">
      <h3 class="cis-shipping-block__title">
        <i class="fas fa-ruble-sign"></i>
        {{ $t('ciss.title') }}
      </h3>
      <div class="cis-shipping-block__note">
        <i class="fas fa-info-circle"></i>
        {{ $t('ciss.kg') }}
      </div>
    </div>

    <div class="country-group">
      <div class="country-group__header">
        <i class="fas fa-flag-checkered"></i>
        <span>{{ $t('ciss.russia_belarus') }}</span>
      </div>
      <div class="table-wrapper">
        <table class="rate-table">
          <thead>
            <tr>
              <th>{{ $t('ciss.country') }}</th>
              <th>1-3kg</th>
              <th>4-6kg</th>
              <th>7kg</th>
              <th>8kg</th>
              <th>9kg</th>
              <th>10kg</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="country in russiaBelarus" :key="country.name">
              <td class="country-cell">{{ country.name }}</td>
              <td>{{ country['1-3kg'] }}</td>
              <td>{{ country['4-6kg'] }}</td>
              <td>{{ country['7kg'] }}</td>
              <td>{{ country['8kg'] }}</td>
              <td>{{ country['9kg'] }}</td>
              <td>{{ country['10kg'] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="delivery-info">
        <i class="fas fa-warehouse"></i>
        <span v-html="$t('ciss.russia_delivery_info')" />
      </div>
      <div class="packaging-info">
        <i class="fas fa-box"></i>
        <span v-html="$t('ciss.russia_packaging_info')" />
      </div>
    </div>

    <div class="country-group">
      <div class="country-group__header">
        <i class="fas fa-rocket"></i>
        <span>{{ $t('ciss.russiaExpress') }}</span>
      </div>
      <div class="table-wrapper">
        <table class="rate-table">
          <thead>
            <tr>
              <th>{{ $t('ciss.country') }}</th>
              <th>1-3kg</th>
              <th>4-6kg</th>
              <th>7kg</th>
              <th>8kg</th>
              <th>9kg</th>
              <th>10kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="country-cell">{{ $t('ciss.russiaExpress') }}</td>
              <td>30$</td>
              <td>30$</td>
              <td>29.5$</td>
              <td>29.5$</td>
              <td>28.5$</td>
              <td>28$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="delivery-info">
        <i class="fas fa-truck-fast"></i>
        <span v-html="$t('ciss.russia_delivery_info')" />
      </div>
      <div class="packaging-info">
        <i class="fas fa-box"></i>
        <span v-html="$t('ciss.russia_packaging_info')" />
      </div>
    </div>

    <div class="country-group">
      <div class="country-group__header">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ $t('ciss.kz') }}</span>
      </div>
      <div class="table-wrapper">
        <table class="rate-table">
          <thead>
            <tr>
              <th>{{ $t('ciss.country') }}</th>
              <th>1-3kg</th>
              <th>4-6kg</th>
              <th>7kg</th>
              <th>8kg</th>
              <th>9kg</th>
              <th>10kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="country-cell">{{ $t('ciss.kz') }}</td>
              <td>7$</td>
              <td>7$</td>
              <td>7$</td>
              <td>6.5$</td>
              <td>6.5$</td>
              <td>6$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="delivery-info">
        <i class="fas fa-warehouse"></i>
        <span v-html="$t('ciss.kz_delivery_info')" />
      </div>
      <div class="packaging-info">
        <i class="fas fa-box"></i>
        <span v-html="$t('ciss.kz_packaging_info')" />
      </div>
    </div>

    <div class="country-group">
      <div class="country-group__header">
        <i class="fas fa-mountain"></i>
        <span>{{ $t('ciss.kirgiz') }}</span>
      </div>
      <div class="table-wrapper">
        <table class="rate-table">
          <thead>
            <tr>
              <th>{{ $t('ciss.country') }}</th>
              <th>5-6kg</th>
              <th>7kg</th>
              <th>8kg</th>
              <th>9kg</th>
              <th>10kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="country-cell">{{ $t('ciss.kirgiz') }}</td>
              <td>8$</td>
              <td>8$</td>
              <td>8$</td>
              <td>7.5$</td>
              <td>7.5$</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="delivery-info">
        <i class="fas fa-truck"></i>
        <span v-html="$t('ciss.kirgiz_delivery_info')" />
      </div>
      <div class="packaging-info">
        <i class="fas fa-box"></i>
        <span v-html="$t('ciss.kirgiz_packaging_info')" />
      </div>
      <div class="min-weight-warning">
        <i class="fas fa-exclamation-triangle"></i>
        <span v-html="$t('ciss.kirgiz_min')" />
      </div>
    </div>
  </div>
</template>

<script setup>
const russiaBelarus = computed(() => [
  { name: $t('ciss.russia'), '1-3kg': '8$', '4-6kg': '8$', '7kg': '8$', '8kg': '7.5$', '9kg': '7.5$', '10kg': '7$' },
  { name: $t('ciss.belarus'), '1-3kg': '8$', '4-6kg': '8$', '7kg': '8$', '8kg': '7.5$', '9kg': '7.5$', '10kg': '7$' }
])
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

.country-group {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-dim);
}

.country-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.country-group__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.country-group__header i {
  font-size: 1.3rem;
  color: var(--red);
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 1rem;
}

.rate-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  min-width: 550px;
}

.rate-table th {
  text-align: center;
  padding: 12px 8px;
  background: rgba(225, 29, 72, 0.08);
  color: var(--red);
  font-weight: 700;
  border-bottom: 1px solid var(--border-dim);
}

.rate-table td {
  text-align: center;
  padding: 10px 8px;
  border-bottom: 1px solid var(--border-dim);
  color: var(--text-secondary);
}

.rate-table .country-cell {
  font-weight: 600;
  color: var(--text-primary);
}

.rate-table tr:hover td {
  background: rgba(225, 29, 72, 0.05);
  color: var(--text-primary);
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
  
  .country-group__header {
    font-size: 1rem;
  }
}
</style>