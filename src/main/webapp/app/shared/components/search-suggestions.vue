<template>
  <div class="search-suggestions">
    <!-- 热门搜索 -->
    <div class="suggestion-section">
      <div class="section-title">
        <font-awesome-icon icon="fire" />
        <span>热门搜索</span>
      </div>
      <div class="hot-tags">
        <span 
          v-for="tag in hotSearchTags" 
          :key="tag"
          class="hot-tag"
          @click="handleTagClick(tag)"
        >{{ tag }}</span>
      </div>
    </div>

    <!-- 搜索历史 -->
    <div class="suggestion-section">
      <div class="section-title">
        <font-awesome-icon icon="history" />
        <span>搜索历史</span>
        <button class="clear-history" @click="clearHistory">
          <font-awesome-icon icon="trash" />
          <span>清空历史</span>
        </button>
      </div>
      <div class="history-list">
        <div 
          v-for="item in searchHistory" 
          :key="item"
          class="history-item"
          @click="handleHistoryClick(item)"
        >
          <font-awesome-icon icon="search" />
          <span>{{ item }}</span>
          <button class="delete-item" @click.stop="deleteHistoryItem(item)">
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { searchService } from '@/services/search.service';

export default defineComponent({
  name: 'SearchSuggestions',
  emits: ['select'],
  setup(props, { emit }) {
    const hotSearchTags = ref<string[]>([]);
    const searchHistory = ref<string[]>([]);

    // 获取热门搜索
    const fetchHotSearches = async () => {
      try {
        hotSearchTags.value = await searchService.getHotSearches();
      } catch (error) {
        console.error('Failed to fetch hot searches:', error);
      }
    };

    // 加载搜索历史
    const loadSearchHistory = () => {
      const history = localStorage.getItem('searchHistory');
      if (history) {
        searchHistory.value = JSON.parse(history);
      }
    };

    // 保存搜索历史
    const saveSearchHistory = () => {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
    };

    // 点击标签
    const handleTagClick = (tag: string) => {
      emit('select', tag);
    };

    // 点击历史记录
    const handleHistoryClick = (item: string) => {
      emit('select', item);
    };

    // 删除单个历史记录
    const deleteHistoryItem = (item: string) => {
      searchHistory.value = searchHistory.value.filter(i => i !== item);
      saveSearchHistory();
    };

    // 清空历史记录
    const clearHistory = () => {
      searchHistory.value = [];
      localStorage.removeItem('searchHistory');
    };

    onMounted(() => {
      fetchHotSearches();
      loadSearchHistory();
    });

    return {
      hotSearchTags,
      searchHistory,
      handleTagClick,
      handleHistoryClick,
      deleteHistoryItem,
      clearHistory
    };
  }
});
</script>

<style scoped>
.search-suggestions {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 10px;
}

.suggestion-section {
  margin-bottom: 20px;
}

.suggestion-section:last-child {
  margin-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  margin-bottom: 12px;
}

.section-title .svg-inline--fa {
  font-size: 14px;
}

.hot-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hot-tag {
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.hot-tag:hover {
  background: #e6f7ff;
  color: #1890ff;
}

.clear-history {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #999;
  font-size: 12px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.clear-history:hover {
  color: #ff4d4f;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.history-item:hover {
  background: #f5f5f5;
  border-radius: 4px;
}

.history-item .svg-inline--fa {
  font-size: 12px;
  color: #999;
}

.delete-item {
  margin-left: auto;
  color: #999;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s;
}

.history-item:hover .delete-item {
  opacity: 1;
}

.delete-item:hover {
  color: #ff4d4f;
}
</style> 