import { ref, readonly, provide, inject, InjectionKey } from 'vue';
import type { Ref } from 'vue';

export interface City {
  code: string;
  name: string;
  province: string;
}

export const CitySymbol: InjectionKey<{
  currentCity: Ref<City>;
  setCurrentCity: (city: City) => void;
}> = Symbol('city');

export function createCityState() {
  const currentCity = ref<City>({
    code: 'sz',
    name: '深圳市',
    province: 'G 广东省'
  });

  const setCurrentCity = (city: City) => {
    currentCity.value = city;
    localStorage.setItem('selectedCity', JSON.stringify(city));
  };

  provide(CitySymbol, {
    currentCity: readonly(currentCity),
    setCurrentCity
  });

  return { currentCity, setCurrentCity };
}

export function useCity() {
  const city = inject(CitySymbol);
  if (!city) {
    throw new Error('useCity must be used within a component that has called createCityState');
  }
  return city;
} 