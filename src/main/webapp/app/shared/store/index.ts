import { createStore } from 'vuex';
import { RootState } from './types';

export default createStore<RootState>({
  state: {
    city: {
      currentCity: {
        code: 'sz',
        name: '深圳市',
        province: 'G 广东省'
      }
    }
  },
  mutations: {
    SET_CURRENT_CITY(state, city) {
      state.city.currentCity = city;
    }
  },
  actions: {
    setCurrentCity({ commit }, city) {
      commit('SET_CURRENT_CITY', city);
      localStorage.setItem('selectedCity', JSON.stringify(city));
    }
  },
  getters: {
    getCurrentCity: state => state.city.currentCity
  }
}); 