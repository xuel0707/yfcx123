<template>
  <div class="policy-categories">
    <div class="category-grid">
      <div v-for="category in categories" 
           :key="category.id" 
           class="category-card"
           @click="handleClick(category)">
        <div class="category-icon">
          <font-awesome-icon :icon="category.icon" />
        </div>
        <div class="category-info">
          <h3 class="category-name">{{ category.name }}</h3>
          <p class="category-desc">{{ category.description }}</p>
          <div class="category-count">
            <span class="count-number">{{ formatNumber(category.count) }}</span>
            <span class="count-label">条政策</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PolicyCategory } from '@/core/home/home.types';

export default defineComponent({
  name: 'PolicyCategories',
  props: {
    categories: {
      type: Array as PropType<PolicyCategory[]>,
      required: true
    }
  },
  emits: ['category-click'],
  setup(props, { emit }) {
    const handleClick = (category: PolicyCategory) => {
      emit('category-click', category);
    };

    const formatNumber = (num: number): string => {
      return num.toLocaleString();
    };

    return {
      handleClick,
      formatNumber
    };
  }
});
</script>

<style scoped>
.policy-categories {
  padding: 40px 0;
  background: white;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.category-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #f0f0f0;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-color: #1890ff;
}

.category-icon {
  font-size: 32px;
  color: #1890ff;
  margin-bottom: 20px;
}

.category-name {
  font-size: 18px;
  color: #333;
  margin: 0 0 10px;
}

.category-desc {
  font-size: 14px;
  color: #666;
  margin: 0 0 15px;
  line-height: 1.5;
}

.category-count {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.count-number {
  font-size: 24px;
  font-weight: 600;
  color: #1890ff;
}

.count-label {
  font-size: 14px;
  color: #666;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}
</style> 