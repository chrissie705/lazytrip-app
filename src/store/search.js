export default {
  namespaced: true,
  state: {
    departureLatitude: 0,
    departureLongitude: 0,
    arrivalLatitude: 0,
    arrivalLongitude: 0,
    availabilityDuration: 0,
    availabilityTime: 0,
    selectedCategory: ''
  },
  getters: {
    canSearch(state) {
      return state.selectedCategory && state.departureLatitude && state.departureLongitude;
    }
  },
  mutations: {
    selectedCategory(state, selectedCategory) {
      state.selectedCategory = selectedCategory;
    },
    departureLatitude(state, departureLatitude) {
      state.departureLatitude = departureLatitude;
    },
    departureLongitude(state, departureLongitude) {
      state.departureLongitude = departureLongitude;
    }
  },
  actions: {
    async search({ dispatch, state, commit }) {
      const activities = await dispatch('getActivities', {
        category: state.selectedCategory,
        latitude: state.departureLatitude,
        longitude: state.departureLongitude
      }, { root: true });

      commit('result/activities', activities, { root: true });
    }
  }
}
