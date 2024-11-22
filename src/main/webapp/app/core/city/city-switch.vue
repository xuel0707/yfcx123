<template>
  <div class="city-switch">
    <!-- 添加定位按钮 -->
    <div class="location-section">
      <button 
        class="location-btn" 
        @click="handleLocation"
        :disabled="locating"
      >
        <font-awesome-icon 
          :icon="locating ? 'spinner' : 'location-arrow'" 
          :spin="locating"
        />
        {{ locating ? '定位中...' : '定位当前城市' }}
        <span v-if="locationSource" class="location-source">
          ({{ locationSource }})
        </span>
      </button>
      <span v-if="locationError" class="error-msg">
        {{ locationError }}
      </span>
    </div>

    <!-- 添加城市搜索组件 -->
    <city-search @select="handleCitySelect" />
    
    <!-- 当前城市显示 -->
    <div class="current-city">
      <font-awesome-icon icon="map-marker-alt" class="location-icon" />
      <span class="city-name">{{ currentCity }}</span>
      <router-link to="/chosecity" class="change-link">
        [切换城市]
      </router-link>
    </div>

    <!-- 热门城市 -->
    <div class="hot-cities">
      <h3>热门城市</h3>
      <div class="city-grid">
        <div v-for="city in hotCities" 
             :key="city.code"
             class="city-item"
             @click="handleCitySelect(city)"
        >
          {{ city.name }}
        </div>
      </div>
    </div>

    <!-- 最近访问 -->
    <div v-if="recentCities.length > 0" class="recent-cities">
      <h3>最近访问</h3>
      <div class="city-grid">
        <div v-for="city in recentCities" 
             :key="city.code"
             class="city-item"
             @click="handleCitySelect(city)"
        >
          {{ city.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useCityStore } from '@/store/city';
import { useRouter } from 'vue-router';
import CitySearch from './city-search.vue';
import { LocationService } from '@/shared/services/location.service';

interface City {
  code: string;
  name: string;
}

export default defineComponent({
  name: 'CitySwitch',
  components: {
    CitySearch
  },
  setup() {
    const cityStore = useCityStore();
    const router = useRouter();
    const currentCity = ref<string>('深圳');
    
    const hotCities = ref<City[]>([
      { code: 'sz', name: '深圳' },
      { code: 'bj', name: '北京' },
      { code: 'sh', name: '上海' },
      { code: 'gz', name: '广州' },
      { code: 'hz', name: '杭州' },
      { code: 'cd', name: '成都' },
      { code: 'nj', name: '南京' },
      { code: 'wh', name: '武汉' }
    ]);

    const recentCities = ref<City[]>([]);

    const locating = ref(false);
    const locationError = ref('');
    const locationSource = ref('');

    // 从本地存储加载最近访问的城市
    const loadRecentCities = () => {
      const stored = localStorage.getItem('recentCities');
      if (stored) {
        try {
          recentCities.value = JSON.parse(stored);
        } catch (error) {
          console.error('Failed to parse recent cities:', error);
        }
      }
    };

    // 保存最近访问的城市
    const saveRecentCity = (city: City) => {
      const maxRecent = 4; // 最多保存4个最近访问的城市
      const current = recentCities.value;
      
      // 移除已存在的相同城市
      const filtered = current.filter(c => c.code !== city.code);
      
      // 添加到开头
      filtered.unshift(city);
      
      // 保持最大数量
      recentCities.value = filtered.slice(0, maxRecent);
      
      // 保存到本地存储
      localStorage.setItem('recentCities', JSON.stringify(recentCities.value));
    };

    const handleCitySelect = (city: City) => {
      currentCity.value = city.name;
      cityStore.setCurrentCity(city);
      saveRecentCity(city);
      
      // 触发城市变更事件
      window.dispatchEvent(new CustomEvent('cityChanged', { 
        detail: city 
      }));
      
      // 返回首页
      router.push('/');
    };

    const handleLocation = async () => {
      locating.value = true;
      locationError.value = '';
      locationSource.value = '';

      try {
        // 检查缓存
        const cachedCity = LocationService.getCachedCity();
        if (cachedCity) {
          handleCitySelect(cachedCity);
          locationSource.value = '缓存';
          return;
        }

        // 获取城市信息
        const { city, source } = await LocationService.getCity();
        
        // 更新当前城市
        const cityData = {
          code: city.toLowerCase().replace(/市$/, ''),
          name: city
        };
        
        handleCitySelect(cityData);
        LocationService.cacheCity(cityData);
        locationSource.value = source;
        
      } catch (error) {
        console.error('定位失败:', error);
        locationError.value = '定位失败，请手动选择城市';
      } finally {
        locating.value = false;
      }
    };

    onMounted(() => {
      loadRecentCities();
      
      // 获取当前城市
      const storedCity = localStorage.getItem('currentCity');
      if (storedCity) {
        try {
          const city = JSON.parse(storedCity);
          currentCity.value = city.name;
        } catch (error) {
          console.error('Failed to parse current city:', error);
        }
      }
    });

    return {
      currentCity,
      hotCities,
      recentCities,
      handleCitySelect,
      locating,
      locationError,
      locationSource,
      handleLocation
    };
  }
});
</script>

<style scoped>
.city-switch {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.current-city {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.location-icon {
  color: #1890ff;
}

.city-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.change-link {
  color: #1890ff;
  text-decoration: none;
  font-size: 14px;
}

.hot-cities,
.recent-cities {
  margin-bottom: 30px;
}

h3 {
  margin-bottom: 15px;
  color: #666;
  font-size: 14px;
}

.city-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

.city-item {
  text-align: center;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.city-item:hover {
  background: #e6f7ff;
  color: #1890ff;
}

@media (max-width: 768px) {
  .city-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 添加定位相关样式 */
.location-section {
  margin-bottom: 20px;
}

.location-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f5f7fa;
  border: none;
  border-radius: 4px;
  color: #1890ff;
  cursor: pointer;
  transition: all 0.3s;
}

.location-btn:hover:not(:disabled) {
  background: #e6f7ff;
}

.location-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.error-msg {
  display: block;
  margin-top: 8px;
  color: #ff4d4f;
  font-size: 12px;
}

/* 添加定位来源样式 */
.location-source {
  font-size: 12px;
  color: #666;
  margin-left: 4px;
}
</style> 