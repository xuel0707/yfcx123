import { Store } from 'vuex';

export interface City {
  code: string;
  name: string;
  province: string;
}

export interface CityState {
  currentCity: City;
}

export interface RootState {
  city: CityState;
}

// 添加 Vuex 的类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
} 