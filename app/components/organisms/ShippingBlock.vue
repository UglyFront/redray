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
    
    <div class="table-wrapper">
      <table class="rate-table">
        <thead>
          <tr>
            <th>{{ $t('shipping.countries') }}</th>
            <th>2-3kg</th>
            <th>4-6kg</th>
            <th>7kg</th>
            <th>8kg</th>
            <th>9kg</th>
            <th>10kg+</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableData" :key="row.country">
            <td class="country-cell">{{ row.country }}</td>
            <TableCell
              v-for="weight in weightColumns"
              :key="weight"
            >
              {{ row[weight]?.replace('_', '') || row[weight] }}
            </TableCell>
          </tr>
        </tbody>
      </table>
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
import TableCell from '@/components/atoms/TableCell.vue'

const weightColumns = ['2-3kg', '4-6kg', '7kg', '8kg', '9kg', '10kg']

const tableData = [
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

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.rate-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  min-width: 680px;
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
  transition: var(--transition-fast);
}

.rate-table .country-cell {
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  padding-left: 12px;
}

.rate-table tr:hover td {
  background: rgba(225, 29, 72, 0.05);
  color: var(--text-primary);
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
}
</style>