export default {
  namespaced: true,
  state: {
    activities: []
  },
  mutations: {
    activities(state, activities) {
      state.activities = activities;
    }
  }
}
