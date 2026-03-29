<template>
  <div class="card">
    <div class="card__header">
      <h3 class="card__title">{{ $rt(title) }}</h3>
      <Badge :variant="badgeVariant">{{ $rt(badgeText) }}</Badge>
    </div>
    
    <div class="card__body">
      <p class="card__description">{{ $rt(description) }}</p>
      
      <div class="card__tags">
        <Tag v-for="tag in tags" :key="$rt(tag.name)" :strong="$rt(tag.strong)">
          {{ $rt(tag.name) }}
        </Tag>
      </div>
    </div>
    
    <div class="card__actions">
      <Button :href="$rt(primaryLink)" variant="primary" target="_blank" :icon="$rt(primaryIcon)" tag="a">
        {{ $rt(primaryText) }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import Badge from '@/components/atoms/Badge.vue'
import Button from '@/components/atoms/Button.vue'
import Tag from '@/components/atoms/Tag.vue'

defineProps({
  title: { type: String, required: true },
  badgeText: { type: String, required: true },
  badgeVariant: { type: String, default: 'default' },
  description: { type: String, required: true },
  storeLink: { type: String, default: null },
  storeLabel: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  primaryLink: { type: String, required: true },
  primaryText: { type: String, required: true },
  primaryIcon: { type: String, default: null },
})
</script>

<style scoped>
.card {
  background: var(--card-bg);
  border: 1px solid var(--border-dim);
  border-radius: var(--border-radius-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  backdrop-filter: blur(2px);
  overflow: hidden;
}

.card:hover {
  border-color: var(--red);
  transform: translateY(-5px);
  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--red-glow);
}

.card__header {
  padding: 1.3rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border-dim);
}

.card__title {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-primary);
}

.card__body {
  padding: 1rem 1.5rem;
}

.card__description {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.45;
  margin-bottom: 1rem;
}

.card__store-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-lg);
  font-size: 0.75rem;
  text-decoration: none;
  color: var(--text-secondary);
  margin: 0.5rem 0;
  transition: var(--transition-fast);
  border: 1px dashed rgba(225, 29, 72, 0.4);
}

.card__store-link i {
  color: var(--red);
}

.card__store-link:hover {
  background: rgba(225, 29, 72, 0.1);
  color: var(--text-primary);
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.card__actions {
  display: flex;
  gap: 12px;
  margin-top: 1rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
}
</style>