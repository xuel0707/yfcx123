import { Module } from 'vuex';
import { RootState } from './types';

export interface City {
  code: string;
  name: string;
  province: string;
}

export interface CityState {
  currentCity: City;
}

export const cityModule: Module<CityState, RootState> = {
  namespaced: true,
  state: {
    currentCity: {
      code: 'sz',
      name: '深圳市',
      province: 'G 广东省'
    }
  },
  mutations: {
    SET_CURRENT_CITY(state, city: City) {
      state.currentCity = city;
    }
  },
  actions: {
    setCurrentCity({ commit }, city: City) {
      commit('SET_CURRENT_CITY', city);
      localStorage.setItem('selectedCity', JSON.stringify(city));
    }
  },
  getters: {
    getCurrentCity: (state): City => state.currentCity
  }
}; 