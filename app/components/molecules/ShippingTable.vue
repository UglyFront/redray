<template>
  <div class="shipping-table-wrapper">
    <table class="shipping-table">
      <thead>
        <tr>
          <th>Страна</th>
          <th v-for="weight in weightColumns" :key="weight">{{ weight }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.country">
          <td class="shipping-table__country">{{ row.country }}</td>
          <TableCell
            v-for="weight in weightColumns"
            :key="weight"
            :highlight="row[weight] === '20$'"
          >
            {{ row[weight] }}
          </TableCell>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import TableCell from '@/components/atoms/TableCell.vue'

defineProps({
  data: {
    type: Array,
    required: true,
    validator: (value) => value.every(row => row.country)
  },
  weightColumns: {
    type: Array,
    required: true,
    default: () => ['2-3kg', '4-6kg', '7kg', '8kg', '9kg', '10kg']
  }
})
</script>

<style scoped>
.shipping-table-wrapper {
  overflow-x: auto;
}

.shipping-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  min-width: 680px;
}

.shipping-table th {
  text-align: center;
  padding: 12px 6px;
  background: var(--bg);
  color: var(--red);
  font-weight: 700;
  border-bottom: 1px solid rgba(225, 29, 72, 0.3);
}

.shipping-table__country {
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  padding: 10px 6px;
  border-bottom: 1px solid var(--border-dim);
}
</style>