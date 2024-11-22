export interface CacheConfig {
  prefix: string;
  ttl: number; // Time to live in milliseconds
}

export class CacheService {
  private static instance: CacheService;
  private storage: Storage;
  private config: CacheConfig = {
    prefix: 'tc_', // 天策云缓存前缀
    ttl: 24 * 60 * 60 * 1000 // 默认缓存时间：24小时
  };

  private constructor() {
    this.storage = window.localStorage;
  }

  public static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    return CacheService.instance;
  }

  // 设置缓存
  public set<T>(key: string, value: T, ttl?: number): void {
    const cacheKey = this.getCacheKey(key);
    const cacheValue = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl
    };

    try {
      this.storage.setItem(cacheKey, JSON.stringify(cacheValue));
    } catch (error) {
      console.error('Cache write error:', error);
      this.clearExpired(); // 清理过期缓存后重试
      try {
        this.storage.setItem(cacheKey, JSON.stringify(cacheValue));
      } catch (retryError) {
        console.error('Cache write retry failed:', retryError);
      }
    }
  }

  // 获取缓存
  public get<T>(key: string): T | null {
    const cacheKey = this.getCacheKey(key);
    const cached = this.storage.getItem(cacheKey);

    if (!cached) {
      return null;
    }

    try {
      const { value, timestamp, ttl } = JSON.parse(cached);
      
      if (Date.now() - timestamp > ttl) {
        this.remove(key);
        return null;
      }

      return value as T;
    } catch (error) {
      console.error('Cache read error:', error);
      return null;
    }
  }

  // 移除缓存
  public remove(key: string): void {
    const cacheKey = this.getCacheKey(key);
    this.storage.removeItem(cacheKey);
  }

  // 清空所有缓存
  public clear(): void {
    const keys = Object.keys(this.storage);
    keys.forEach(key => {
      if (key.startsWith(this.config.prefix)) {
        this.storage.removeItem(key);
      }
    });
  }

  // 清理过期缓存
  public clearExpired(): void {
    const keys = Object.keys(this.storage);
    const now = Date.now();

    keys.forEach(key => {
      if (key.startsWith(this.config.prefix)) {
        try {
          const cached = this.storage.getItem(key);
          if (cached) {
            const { timestamp, ttl } = JSON.parse(cached);
            if (now - timestamp > ttl) {
              this.storage.removeItem(key);
            }
          }
        } catch (error) {
          console.error('Cache clear error:', error);
          this.storage.removeItem(key);
        }
      }
    });
  }

  // 获取缓存大小
  public getSize(): number {
    let size = 0;
    const keys = Object.keys(this.storage);
    
    keys.forEach(key => {
      if (key.startsWith(this.config.prefix)) {
        const item = this.storage.getItem(key);
        if (item) {
          size += item.length * 2; // UTF-16 编码，每个字符占2字节
        }
      }
    });

    return size;
  }

  // 获取完整的缓存键名
  private getCacheKey(key: string): string {
    return `${this.config.prefix}${key}`;
  }

  // 检查是否支持本地存储
  public isSupported(): boolean {
    try {
      const testKey = '__test__';
      this.storage.setItem(testKey, testKey);
      this.storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export const cacheService = CacheService.getInstance(); 