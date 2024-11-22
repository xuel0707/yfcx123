import { Buffer } from 'buffer';
import { deflate, inflate } from 'pako';
import { ref } from 'vue';

// 添加必要的类型声明
declare global {
  interface Window {
    localStorage: Storage;
    navigator: Navigator;
  }
}

// 定义类型
interface LocationCache {
  city: CityInfo;
  timestamp: number;
  accuracy: number;
  source: string;
}

interface CityInfo {
  code: string;
  name: string;
  province: string;
  district?: string;
}

interface GeocodeResult {
  city: string;
  province: string;
  district?: string;
  accuracy: number;
  source: string;
}

// 类型声明
interface CacheConfig {
  keys: {
    CITY: string;
    LOCATION: string;
    RESULTS: string;
  };
  maxAge: {
    CITY: number;
    LOCATION: number;
    RESULTS: number;
  };
}

interface CachePrewarmConfig {
  enabled: boolean;
  interval: number;
  locations: Array<{
    latitude: number;
    longitude: number;
    priority: number;
  }>;
}

// 添加必要的类型声明
interface PrewarmStrategy {
  type: 'static' | 'dynamic' | 'hybrid';
  priority: number;
  weight: number;
}

interface PrewarmLocation {
  latitude: number;
  longitude: number;
  priority: number;
  weight: number;
  lastAccess?: number;
  accessCount?: number;
}

// 定位服务
export class LocationService {
  // 定位配置
  private static readonly GPS_OPTIONS = {
    enableHighAccuracy: true,  // 启用高精度
    timeout: 10000,            // 超时时间增加到10秒
    maximumAge: 30000          // 缓存时间30秒
  };

  // 地图服务配置
  private static readonly MAP_SERVICES = {
    // 腾讯地图
    QQ: {
      key: 'YOUR_QQ_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://apis.map.qq.com/ws/geocoder/v1/?location=${lat},${lng}&key=${this.MAP_SERVICES.QQ.key}`,
      ipUrl: `https://apis.map.qq.com/ws/location/v1/ip?key=YOUR_QQ_KEY`,
      handleGeocode: (data: any) => ({
        city: data.result.address_component.city,
        district: data.result.address_component.district,
        province: data.result.address_component.province,
        accuracy: data.result.accuracy
      }),
      handleIp: (data: any) => ({
        city: data.result.ad_info.city,
        province: data.result.ad_info.province
      })
    },

    // 高德地图
    AMAP: {
      key: 'YOUR_AMAP_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://restapi.amap.com/v3/geocode/regeo?location=${lng},${lat}&key=${this.MAP_SERVICES.AMAP.key}`,
      ipUrl: `https://restapi.amap.com/v3/ip?key=YOUR_AMAP_KEY`,
      handleGeocode: (data: any) => ({
        city: data.regeocode.addressComponent.city,
        district: data.regeocode.addressComponent.district,
        province: data.regeocode.addressComponent.province,
        accuracy: data.regeocode.accuracy
      }),
      handleIp: (data: any) => ({
        city: data.city,
        province: data.province
      })
    },

    // 百度地图
    BAIDU: {
      key: 'YOUR_BAIDU_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://api.map.baidu.com/reverse_geocoding/v3/?ak=${this.MAP_SERVICES.BAIDU.key}&location=${lat},${lng}&output=json`,
      ipUrl: `https://api.map.baidu.com/location/ip?ak=YOUR_BAIDU_KEY`,
      handleGeocode: (data: any) => ({
        city: data.result.addressComponent.city,
        district: data.result.addressComponent.district,
        province: data.result.addressComponent.province,
        accuracy: data.result.accuracy
      }),
      handleIp: (data: any) => ({
        city: data.content.address_detail.city,
        province: data.content.address_detail.province
      })
    },

    // OpenStreetMap
    OSM: {
      geocodeUrl: (lat: number, lng: number) => 
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      handleGeocode: (data: any) => ({
        city: data.address.city || data.address.town || data.address.village,
        district: data.address.suburb,
        province: data.address.state,
        accuracy: data.importance
      })
    },

    // Here Maps
    HERE: {
      key: 'YOUR_HERE_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${this.MAP_SERVICES.HERE.key}&prox=${lat},${lng}`,
      handleGeocode: (data: any) => ({
        city: data.Response.View[0].Result[0].Location.Address.City,
        district: data.Response.View[0].Result[0].Location.Address.District,
        province: data.Response.View[0].Result[0].Location.Address.State,
        accuracy: data.Response.View[0].Result[0].MatchLevel
      })
    },

    // MapBox服务
    MAPBOX: {
      key: 'YOUR_MAPBOX_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${this.MAP_SERVICES.MAPBOX.key}&language=zh`,
      handleGeocode: (data: any) => {
        const city = data.features.find((f: any) => f.place_type.includes('place'));
        const province = data.features.find((f: any) => f.place_type.includes('region'));
        return {
          city: city?.text,
          province: province?.text,
          accuracy: city?.relevance || 0
        };
      }
    },

    // Google Maps服务
    GOOGLE: {
      key: 'YOUR_GOOGLE_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.MAP_SERVICES.GOOGLE.key}&language=zh-CN`,
      handleGeocode: (data: any) => {
        const city = data.results.find((r: any) => 
          r.types.includes('locality')
        );
        const province = data.results.find((r: any) => 
          r.types.includes('administrative_area_level_1')
        );
        return {
          city: city?.address_components[0].long_name,
          province: province?.address_components[0].long_name,
          accuracy: city?.geometry.location_type === 'ROOFTOP' ? 1 : 0.8
        };
      }
    },

    // Bing Maps服务
    BING: {
      key: 'YOUR_BING_KEY',
      geocodeUrl: (lat: number, lng: number) => 
        `https://dev.virtualearth.net/REST/v1/Locations/${lat},${lng}?key=${this.MAP_SERVICES.BING.key}&c=zh-CN`,
      handleGeocode: (data: any) => {
        const location = data.resourceSets[0].resources[0];
        return {
          city: location.address.locality,
          province: location.address.adminDistrict,
          accuracy: location.confidence
        };
      }
    },

    // 高德地图IP定位服务（专门的IP定位API）
    AMAP_IP: {
      key: 'YOUR_AMAP_KEY',
      ipUrl: `https://restapi.amap.com/v5/ip?key=YOUR_AMAP_KEY&type=4&ip=`,
      handleIp: (data: any) => ({
        city: data.city,
        province: data.province,
        accuracy: data.accuracy || 0.5
      })
    },

    // 百度地图IP定位服务（专门的IP定位API）
    BAIDU_IP: {
      key: 'YOUR_BAIDU_KEY',
      ipUrl: `https://api.map.baidu.com/location/ip?ak=YOUR_BAIDU_KEY&coor=bd09ll`,
      handleIp: (data: any) => ({
        city: data.content.address_detail.city,
        province: data.content.address_detail.province,
        accuracy: data.content.accuracy || 0.5
      })
    },

    // IP-API服务（免费IP定位）
    IP_API: {
      ipUrl: `http://ip-api.com/json/?lang=zh-CN`,
      handleIp: (data: any) => ({
        city: data.city,
        province: data.regionName,
        accuracy: data.status === 'success' ? 0.6 : 0.3
      })
    },

    // IPAPI.co服务（另一个免费IP定位）
    IPAPI: {
      ipUrl: `https://ipapi.co/json/`,
      handleIp: (data: any) => ({
        city: data.city,
        province: data.region,
        accuracy: 0.4
      })
    }
  };

  // 缓存配置
  private static readonly CACHE_CONFIG: CacheConfig = {
    // 缓存键名
    keys: {
      CITY: 'cached_city',
      LOCATION: 'cached_location',
      RESULTS: 'cached_geocode_results'
    },
    // 缓存有效期（毫秒）
    maxAge: {
      CITY: 3600000, // 1小时
      LOCATION: 300000, // 5分钟
      RESULTS: 1800000 // 30分钟
    }
  };

  // 缓存压缩配置
  private static readonly COMPRESSION_CONFIG = {
    // 超过此大小的数据将被压缩（字节）
    threshold: 1024,
    // 压缩级别 (1-9)
    level: 6
  };

  // 压缩数据
  private static compressData(data: any): string {
    try {
      const jsonString = JSON.stringify(data);
      const buffer = Buffer.from(jsonString, 'utf-8');
      
      // 只压缩大数据
      if (buffer.length < this.COMPRESSION_CONFIG.threshold) {
        return jsonString;
      }

      const compressed = deflate(buffer, {
        level: this.COMPRESSION_CONFIG.level
      });
      
      return Buffer.from(compressed).toString('base64');
    } catch (error) {
      console.warn('数据压缩失败:', error);
      return JSON.stringify(data);
    }
  }

  // 解压数据
  private static decompressData(data: string): any {
    try {
      // 检查是否为压缩数据
      if (!data.startsWith('data:')) {
        return JSON.parse(data);
      }

      const compressed = Buffer.from(data, 'base64');
      const decompressed = inflate(compressed);
      return JSON.parse(Buffer.from(decompressed).toString('utf-8'));
    } catch (error) {
      console.warn('数据解压失败:', error);
      return null;
    }
  }

  // 优化的缓存设置方法
  private static async setCache(key: string, value: any): Promise<void> {
    try {
      const cacheData: StorageItem = {
        value,
        timestamp: Date.now()
      };

      // 压缩数据
      const compressedData = this.compressData(cacheData);
      const isCompressed = compressedData.startsWith('data:');

      const storageData = {
        data: compressedData,
        compressed: isCompressed,
        size: compressedData.length
      };

      sessionStorage.setItem(key, JSON.stringify(storageData));

      // 统计缓存使用情况
      this.updateCacheStats(key, storageData.size);
    } catch (error) {
      console.warn('写入缓存失败:', error);
    }
  }

  // 优化的缓存获取方法
  private static async getCache<T>(key: string): Promise<T | null> {
    try {
      const cached = sessionStorage.getItem(key);
      if (!cached) return null;

      const storageData = JSON.parse(cached);
      const cacheAge = Date.now() - storageData.timestamp;

      // 检查缓存是否过期
      if (cacheAge > this.CACHE_CONFIG.maxAge[key as keyof typeof this.CACHE_CONFIG.maxAge]) {
        sessionStorage.removeItem(key);
        return null;
      }

      // 解压数据
      const decompressedData = storageData.compressed 
        ? this.decompressData(storageData.data)
        : JSON.parse(storageData.data);

      return decompressedData.value;
    } catch (error) {
      console.warn('读取缓存失败:', error);
      return null;
    }
  }

  // 存统计
  private static cacheStats = new Map<string, {
    size: number;
    hits: number;
    misses: number;
    lastAccess: number;
  }>();

  // 更新缓存统计
  private static updateCacheStats(key: string, size: number): void {
    const stats = this.cacheStats.get(key) || {
      size: 0,
      hits: 0,
      misses: 0,
      lastAccess: 0
    };

    stats.size = size;
    stats.lastAccess = Date.now();
    this.cacheStats.set(key, stats);
  }

  // 获取缓存统计信息
  static getCacheStats(): any {
    const stats: any = {};
    this.cacheStats.forEach((value, key) => {
      stats[key] = {
        ...value,
        hitRate: value.hits / (value.hits + value.misses),
        lastAccessTime: new Date(value.lastAccess).toISOString()
      };
    });
    return stats;
  }

  // 缓存清理（基于LRU策略）
  private static cleanCache(): void {
    try {
      const maxCacheSize = 5 * 1024 * 1024; // 5MB
      let totalSize = 0;
      
      // 计算总缓存大小
      this.cacheStats.forEach(stats => {
        totalSize += stats.size;
      });

      if (totalSize > maxCacheSize) {
        // 按最后访问时间排序
        const sortedStats = Array.from(this.cacheStats.entries())
          .sort(([, a], [, b]) => a.lastAccess - b.lastAccess);

        // 删除最旧的缓存直到总大小小于限制
        for (const [key] of sortedStats) {
          const stats = this.cacheStats.get(key)!;
          sessionStorage.removeItem(key);
          this.cacheStats.delete(key);
          totalSize -= stats.size;

          if (totalSize <= maxCacheSize) break;
        }
      }
    } catch (error) {
      console.warn('缓存清理失败:', error);
    }
  }

  // 定期清理缓存
  static startCacheCleanup(interval = 300000): void { // 默认5分钟
    setInterval(() => {
      this.cleanCache();
    }, interval);
  }

  // 获取城市信息（带缓存）
  static async getCityByLocation(latitude: number, longitude: number): Promise<GeocodeResult> {
    // 生成位置缓存键
    const locationKey = `${latitude.toFixed(4)},${longitude.toFixed(4)}`;
    
    // 检查位置缓存
    const cachedResult = await this.getCache<GeocodeResult>(
      `${this.CACHE_CONFIG.keys.RESULTS}_${locationKey}`
    );
    
    if (cachedResult) {
      return cachedResult;
    }

    // 获取新结果
    const result = await this.fetchCityInfo(latitude, longitude);
    
    // 缓存结果
    this.setCache(
      `${this.CACHE_CONFIG.keys.RESULTS}_${locationKey}`,
      result
    );

    return result;
  }

  // 获取当前位置（带缓存）
  static async getCurrentPosition(): Promise<GeolocationPosition> {
    // 检查位置缓存
    const cachedPosition = await this.getCache<GeolocationPosition>(
      this.CACHE_CONFIG.keys.LOCATION
    );
    
    if (cachedPosition) {
      return cachedPosition;
    }

    // 获取新位置
    return new Promise((resolve, reject) => {
      if (!window.navigator.geolocation) {
        reject(new Error('浏览器不支持地理定位'));
        return;
      }

      const watchId = window.navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          if (position.coords.accuracy <= 100) {
            window.navigator.geolocation.clearWatch(watchId);
            // 缓存位置信息
            this.setCache(this.CACHE_CONFIG.keys.LOCATION, position);
            resolve(position);
          }
        },
        (error: GeolocationPositionError) => {
          window.navigator.geolocation.clearWatch(watchId);
          reject(error);
        },
        this.GPS_OPTIONS
      );

      setTimeout(() => {
        window.navigator.geolocation.clearWatch(watchId);
        reject(new Error('定位超时'));
      }, this.GPS_OPTIONS.timeout);
    });
  }

  // 缓存清理
  static clearCache(): void {
    try {
      Object.values(this.CACHE_CONFIG.keys).forEach(key => {
        const pattern = new RegExp(`^${key}`);
        for (let i = 0; i < window.localStorage.length; i++) {
          const k = window.localStorage.key(i);
          if (k && pattern.test(k)) {
            window.localStorage.removeItem(k);
          }
        }
      });
    } catch (error) {
      console.warn('清理缓存失败:', error);
    }
  }

  // 缓存验证
  static validateCache(): void {
    try {
      const now = Date.now();
      Object.entries(this.CACHE_CONFIG.maxAge).forEach(([key, maxAge]) => {
        const pattern = new RegExp(`^${key}`);
        for (let i = 0; i < window.localStorage.length; i++) {
          const k = window.localStorage.key(i);
          if (k && pattern.test(k)) {
            const cached = window.localStorage.getItem(k);
            if (cached) {
              const data = JSON.parse(cached);
              if (now - data.timestamp > maxAge) {
                window.localStorage.removeItem(k);
              }
            }
          }
        }
      });
    } catch (error) {
      console.warn('验证缓存失败:', error);
    }
  }

  // 请求单个地图服务
  private static async requestGeocode(serviceName: string, lat: number, lng: number): Promise<any> {
    const service = this.MAP_SERVICES[serviceName as keyof typeof this.MAP_SERVICES];
    if (!service || !service.geocodeUrl) return null;

    try {
      const response = await fetch(service.geocodeUrl(lat, lng), {
        headers: {
          'Accept-Language': 'zh-CN,zh;q=0.9'
        }
      });
      const data = await response.json();
      return {
        ...service.handleGeocode(data),
        source: serviceName
      };
    } catch (error) {
      console.warn(`${serviceName} 服务请求失败:`, error);
      return null;
    }
  }

  // 处理结果
  private static processResults(results: any[]): any {
    if (results.length === 0) {
      throw new Error('无法获取位置信息');
    }

    // 结果投票系统
    const cityVotes = new Map<string, number>();
    const cityDetails = new Map<string, any>();

    results.forEach(result => {
      const cityKey = `${result.province}-${result.city}`;
      // 根据准确度加权投票
      const weight = result.accuracy || 1;
      cityVotes.set(cityKey, (cityVotes.get(cityKey) || 0) + weight);
      cityDetails.set(cityKey, result);
    });

    // 找出得票最多的城市
    let maxVotes = 0;
    let mostLikelyCity = null;

    cityVotes.forEach((votes, cityKey) => {
      if (votes > maxVotes) {
        maxVotes = votes;
        mostLikelyCity = cityDetails.get(cityKey);
      }
    });

    return {
      ...mostLikelyCity,
      confidence: maxVotes / results.length,
      sources: results.map(r => r.source)
    };
  }

  // 通过IP定位获取城市信息（优化精度）
  static async getCityByIp(): Promise<any> {
    try {
      // 使用多个IP定位服务并比较结果
      const services = [
        {
          url: 'https://restapi.amap.com/v3/ip?key=YOUR_AMAP_KEY',
          handler: (data: any) => ({ city: data.city, province: data.province })
        },
        {
          url: 'https://api.map.baidu.com/location/ip?ak=YOUR_BAIDU_KEY',
          handler: (data: any) => ({
            city: data.content.address_detail.city,
            province: data.content.address_detail.province
          })
        },
        {
          url: 'https://apis.map.qq.com/ws/location/v1/ip?key=YOUR_QQ_KEY',
          handler: (data: any) => ({
            city: data.result.ad_info.city,
            province: data.result.ad_info.province
          })
        }
      ];

      // 并发请求
      const results = await Promise.allSettled(
        services.map(async service => {
          const response = await fetch(service.url);
          const data = await response.json();
          return service.handler(data);
        })
      );

      // 获取成功的结果
      const successResults = results
        .filter((result): result is PromiseFulfilledResult<{city: string, province: string}> => 
          result.status === 'fulfilled'
        )
        .map(result => result.value);

      // 比较结果，返回最可信的城市
      if (successResults.length > 0) {
        const locationCount = new Map<string, number>();
        successResults.forEach(result => {
          const key = `${result.province}-${result.city}`;
          locationCount.set(key, (locationCount.get(key) || 0) + 1);
        });

        let maxCount = 0;
        let mostLikelyLocation = successResults[0];
        locationCount.forEach((count, key) => {
          if (count > maxCount) {
            maxCount = count;
            const [province, city] = key.split('-');
            mostLikelyLocation = { province, city };
          }
        });

        return mostLikelyLocation.city;
      }

      throw new Error('无法确定IP位置');
    } catch (error) {
      console.error('IP定位失败:', error);
      throw error;
    }
  }

  // 缓存城市信息（添加更多信息）
  static cacheCity(cityData: any): void {
    try {
      localStorage.setItem('cached_city', JSON.stringify({
        city: cityData,
        timestamp: Date.now(),
        accuracy: cityData.accuracy || 'unknown',
        source: cityData.source || 'unknown'
      }));
    } catch (error) {
      console.error('缓存城市信息失败:', error);
    }
  }

  // 获取缓存的城市信息（添加验证）
  static getCachedCity(): any {
    try {
      const cached = localStorage.getItem('cached_city');
      if (!cached) return null;

      const data = JSON.parse(cached);
      const cacheAge = Date.now() - data.timestamp;
      
      // 根据定位来源和精度调整缓存时间
      const maxAge = data.source === 'GPS' ? 3600000 : 1800000; // GPS 1小时，IP 30分钟
      
      if (cacheAge > maxAge) {
        localStorage.removeItem('cached_city');
        return null;
      }

      return data.city;
    } catch (error) {
      console.error('获取缓存城市信息失败:', error);
      return null;
    }
  }

  // 缓存预热配置
  private static readonly PREWARM_CONFIG: CachePrewarmConfig = {
    enabled: true,
    interval: 1800000, // 30分钟
    locations: [
      // 热门城市坐标
      { latitude: 22.5431, longitude: 114.0579, priority: 1 }, // 深圳
      { latitude: 39.9042, longitude: 116.4074, priority: 1 }, // 北京
      { latitude: 31.2304, longitude: 121.4737, priority: 1 }, // 上海
      { latitude: 23.1291, longitude: 113.2644, priority: 1 }, // 广州
      { latitude: 30.5728, longitude: 104.0668, priority: 2 }, // 成都
      { latitude: 32.0584, longitude: 118.7965, priority: 2 }, // 南京
      { latitude: 30.2741, longitude: 120.1551, priority: 2 }  // 杭州
    ]
  };

  // 缓存预热状态
  private static prewarmStatus = {
    isRunning: false,
    lastRun: 0,
    completedTasks: 0,
    failedTasks: 0
  };

  // 启动缓存预热
  static async startPrewarm(): Promise<void> {
    if (!this.PREWARM_CONFIG.enabled || this.prewarmStatus.isRunning) {
      return;
    }

    this.prewarmStatus.isRunning = true;
    console.log('开始缓存预热...');

    try {
      // 按优先级排序
      const sortedLocations = [...this.PREWARM_CONFIG.locations]
        .sort((a, b) => a.priority - b.priority);

      // 并发预热，但限制并发数
      const batchSize = 3;
      for (let i = 0; i < sortedLocations.length; i += batchSize) {
        const batch = sortedLocations.slice(i, i + batchSize);
        
        await Promise.allSettled(
          batch.map(async location => {
            try {
              const result = await this.getCityByLocation(
                location.latitude,
                location.longitude
              );
              
              if (result) {
                const cacheKey = `${this.CACHE_CONFIG.keys.RESULTS}_${location.latitude},${location.longitude}`;
                await this.setCache(cacheKey, result);
                this.prewarmStatus.completedTasks++;
              }
            } catch (error) {
              console.warn('预热任务失败:', error);
              this.prewarmStatus.failedTasks++;
            }
          })
        );

        // 添加延迟避免请求过于频繁
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

    } catch (error) {
      console.error('缓存预热失败:', error);
    } finally {
      this.prewarmStatus.isRunning = false;
      this.prewarmStatus.lastRun = Date.now();
    }
  }

  // 获取预热状态
  static getPrewarmStatus(): any {
    return {
      ...this.prewarmStatus,
      nextRun: this.prewarmStatus.lastRun + this.PREWARM_CONFIG.interval,
      progress: this.prewarmStatus.completedTasks / this.PREWARM_CONFIG.locations.length * 100
    };
  }

  // 自动预热调度
  static schedulePrewarm(): void {
    if (!this.PREWARM_CONFIG.enabled) {
      return;
    }

    // 初始预热
    this.startPrewarm();

    // 定期预热
    setInterval(() => {
      if (!this.prewarmStatus.isRunning) {
        this.startPrewarm();
      }
    }, this.PREWARM_CONFIG.interval);
  }

  // 手动触发特定位置的预热
  static async prewarmLocation(latitude: number, longitude: number): Promise<void> {
    try {
      const result = await this.getCityByLocation(latitude, longitude);
      if (result) {
        const cacheKey = `${this.CACHE_CONFIG.keys.RESULTS}_${latitude},${longitude}`;
        await this.setCache(cacheKey, result);
      }
    } catch (error) {
      console.error('位置预热失败:', error);
      throw error;
    }
  }

  // 预热进度监听
  static onPrewarmProgress(callback: (progress: number) => void): void {
    if (this.prewarmStatus.isRunning) {
      const checkProgress = setInterval(() => {
        const progress = this.prewarmStatus.completedTasks / 
          this.PREWARM_CONFIG.locations.length * 100;
        
        callback(progress);

        if (!this.prewarmStatus.isRunning) {
          clearInterval(checkProgress);
        }
      }, 1000);
    }
  }

  // 预热优先级动态调整
  static updateLocationPriority(latitude: number, longitude: number, priority: number): void {
    const location = this.PREWARM_CONFIG.locations.find(
      loc => loc.latitude === latitude && loc.longitude === longitude
    );

    if (location) {
      location.priority = priority;
    } else {
      this.PREWARM_CONFIG.locations.push({ latitude, longitude, priority });
    }
  }

  // 预热策略配置
  private static readonly PREWARM_STRATEGIES: Record<string, PrewarmStrategy> = {
    STATIC: {
      type: 'static',
      priority: 1,
      weight: 0.4
    },
    DYNAMIC: {
      type: 'dynamic',
      priority: 2,
      weight: 0.6
    },
    HYBRID: {
      type: 'hybrid',
      priority: 1,
      weight: 1.0
    }
  };

  // 动态预热位置记录
  private static dynamicLocations = new Map<string, PrewarmLocation>();

  // 更新预热策略
  private static updatePrewarmStrategy(): void {
    // 分析访问模式
    const accessPatterns = this.analyzeDynamicLocations();
    
    // 根据访问模式调整策略权重
    if (accessPatterns.hasTimePattern) {
      this.PREWARM_STRATEGIES.DYNAMIC.weight += 0.1;
    } else {
      this.PREWARM_STRATEGIES.STATIC.weight += 0.1;
    }

    // 标准化权重
    const totalWeight = Object.values(this.PREWARM_STRATEGIES)
      .reduce((sum, strategy) => sum + strategy.weight, 0);
    
    Object.values(this.PREWARM_STRATEGIES).forEach(strategy => {
      strategy.weight /= totalWeight;
    });
  }

  // 分析动态位置访问模式
  private static analyzeDynamicLocations() {
    const patterns = {
      hasTimePattern: false,
      hasDensityPattern: false,
      hasFrequencyPattern: false
    };

    // 时间模式分析
    const timeDistribution = new Map<number, number>();
    this.dynamicLocations.forEach(location => {
      if (location.lastAccess) {
        const hour = new Date(location.lastAccess).getHours();
        timeDistribution.set(hour, (timeDistribution.get(hour) || 0) + 1);
      }
    });

    // 检查是否存在明显的时间模式
    const maxAccess = Math.max(...timeDistribution.values());
    const avgAccess = Array.from(timeDistribution.values())
      .reduce((sum, count) => sum + count, 0) / timeDistribution.size;
    
    patterns.hasTimePattern = maxAccess > avgAccess * 2;

    return patterns;
  }

  // 智能预热调度
  private static async scheduleSmartPrewarm(): Promise<void> {
    // 更新策略
    this.updatePrewarmStrategy();

    // 获取预热候选位置
    const candidates = this.getPrewarmCandidates();

    // 按优先级和权重排序
    const sortedCandidates = candidates.sort((a, b) => {
      const scoreA = this.calculatePrewarmScore(a);
      const scoreB = this.calculatePrewarmScore(b);
      return scoreB - scoreA;
    });

    // 执行预热
    const batchSize = 3;
    for (let i = 0; i < sortedCandidates.length; i += batchSize) {
      const batch = sortedCandidates.slice(i, i + batchSize);
      await Promise.allSettled(
        batch.map(location => this.prewarmLocation(location))
      );
      // 添加延迟避免请求过于频繁
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // 计算预热分数
  private static calculatePrewarmScore(location: PrewarmLocation): number {
    const now = Date.now();
    const timeFactor = location.lastAccess 
      ? Math.exp(-(now - location.lastAccess) / (24 * 60 * 60 * 1000))
      : 0;

    const accessFactor = location.accessCount 
      ? Math.log(location.accessCount + 1) 
      : 0;

    const priorityFactor = 1 / location.priority;

    return (
      timeFactor * 0.4 +
      accessFactor * 0.4 +
      priorityFactor * 0.2
    );
  }

  // 获取预热候选位置
  private static getPrewarmCandidates(): PrewarmLocation[] {
    const candidates: PrewarmLocation[] = [];

    // 添加静态位置
    if (this.PREWARM_STRATEGIES.STATIC.weight > 0.3) {
      candidates.push(...this.PREWARM_CONFIG.locations);
    }

    // 添加动态位置
    if (this.PREWARM_STRATEGIES.DYNAMIC.weight > 0.3) {
      candidates.push(
        ...Array.from(this.dynamicLocations.values())
          .filter(location => location.accessCount && location.accessCount > 1)
      );
    }

    return candidates;
  }

  // 记录位置访问
  private static recordLocationAccess(latitude: number, longitude: number): void {
    const key = `${latitude},${longitude}`;
    const location = this.dynamicLocations.get(key) || {
      latitude,
      longitude,
      priority: 3,
      weight: 1,
      accessCount: 0
    };

    location.lastAccess = Date.now();
    location.accessCount = (location.accessCount || 0) + 1;

    // 动态调整优先级
    if (location.accessCount > 10) {
      location.priority = Math.max(1, location.priority - 1);
    }

    this.dynamicLocations.set(key, location);
  }

  // 预热单个位置
  private static async prewarmLocation(location: PrewarmLocation): Promise<void> {
    try {
      const cacheKey = `${this.CACHE_CONFIG.keys.RESULTS}_${location.latitude},${location.longitude}`;
      
      // 检查是否需要预热
      const cached = await this.getCache(cacheKey);
      if (cached) {
        const cacheAge = Date.now() - cached.timestamp;
        if (cacheAge < this.CACHE_CONFIG.maxAge.RESULTS / 2) {
          return;
        }
      }

      // 执行预热
      const result = await this.getCityByLocation(
        location.latitude,
        location.longitude
      );

      if (result) {
        await this.setCache(cacheKey, {
          ...result,
          timestamp: Date.now(),
          prewarm: true
        });
      }

    } catch (error) {
      console.warn(`预热位置失败: ${location.latitude},${location.longitude}`, error);
    }
  }

  // 启动智能预热
  static startSmartPrewarm(interval = 1800000): void {
    this.scheduleSmartPrewarm();
    setInterval(() => {
      this.scheduleSmartPrewarm();
    }, interval);
  }
} 