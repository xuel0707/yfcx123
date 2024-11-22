<template>
  <div class="city-search">
    <!-- 搜索输入框 -->
    <div class="search-input">
      <font-awesome-icon icon="search" class="search-icon" />
      <input 
        type="text" 
        v-model="searchQuery"
        placeholder="请输入城市名称或拼音"
        @input="handleSearch"
      >
      <button 
        v-if="searchQuery" 
        class="clear-btn"
        @click="clearSearch"
      >
        <font-awesome-icon icon="times" />
      </button>
    </div>

    <!-- 搜索结果 -->
    <div v-if="showResults" class="search-results">
      <div v-if="loading" class="loading">
        <font-awesome-icon icon="spinner" spin />
        搜索中...
      </div>
      
      <div v-else-if="results.length > 0" class="result-list">
        <div v-for="city in results" 
             :key="city.code"
             class="result-item"
             @click="handleSelect(city)"
        >
          <div class="city-info">
            <span class="city-name">{{ city.name }}</span>
            <span class="city-pinyin">{{ city.pinyin }}</span>
          </div>
          <span class="province">{{ city.province }}</span>
        </div>
      </div>
      
      <div v-else-if="searchQuery" class="no-results">
        未找到相关城市
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useCityStore } from '@/store/city';
import { useDebounce } from '@/shared/composables/useDebounce';

interface City {
  code: string;
  name: string;
  pinyin: string;
  province: string;
}

export default defineComponent({
  name: 'CitySearch',
  setup() {
    const cityStore = useCityStore();
    const searchQuery = ref('');
    const results = ref<City[]>([]);
    const loading = ref(false);
    const showResults = ref(false);

    // 使用防抖函数优化搜索
    const debouncedSearch = useDebounce((query: string) => {
      if (!query) {
        results.value = [];
        loading.value = false;
        return;
      }

      loading.value = true;
      // 模拟API调用
      setTimeout(() => {
        // 这里应该调用实际的API
        results.value = mockSearchCities(query);
        loading.value = false;
      }, 300);
    }, 300);

    // 监听搜索输入
    watch(searchQuery, (newQuery) => {
      showResults.value = true;
      debouncedSearch(newQuery);
    });

    // 模拟城市搜索
    const mockSearchCities = (query: string): City[] => {
      const allCities: City[] = [
        { code: 'sz', name: '深圳', pinyin: 'shenzhen', province: '广东省' },
        { code: 'bj', name: '北京', pinyin: 'beijing', province: '直辖市' },
        { code: 'sh', name: '上海', pinyin: 'shanghai', province: '直辖市' },
        // ... 更多城市数据
      ];

      return allCities.filter(city => 
        city.name.includes(query) || 
        city.pinyin.includes(query.toLowerCase())
      );
    };

    const handleSearch = () => {
      debouncedSearch(searchQuery.value);
    };

    const handleSelect = (city: City) => {
      cityStore.setCurrentCity(city);
      showResults.value = false;
      searchQuery.value = '';
      // 触发选择事件
      emit('select', city);
    };

    const clearSearch = () => {
      searchQuery.value = '';
      results.value = [];
      showResults.value = false;
    };

    // 点击外部关闭搜索结果
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.city-search')) {
        showResults.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      searchQuery,
      results,
      loading,
      showResults,
      handleSearch,
      handleSelect,
      clearSearch
    };
  }
});
</script>

<style scoped>
.city-search {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: #999;
}

input {
  width: 100%;
  padding: 10px 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s;
}

input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  outline: none;
}

.clear-btn {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
}

.loading {
  padding: 20px;
  text-align: center;
  color: #666;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.result-item:hover {
  background: #f5f7fa;
}

.city-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.city-name {
  font-weight: 500;
}

.city-pinyin {
  color: #999;
  font-size: 12px;
}

.province {
  color: #666;
  font-size: 12px;
}

.no-results {
  padding: 20px;
  text-align: center;
  color: #999;
}

@media (max-width: 768px) {
  .city-search {
    max-width: 100%;
  }
}
</style> 