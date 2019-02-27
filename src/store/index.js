import Vue from 'vue'
import Vuex from 'vuex'

import apolloClient from './apolloClient';
import activitiesQuery from './queries/Activities.gql';

import result from './result';
import search from './search';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    }
  },
  actions: {
    init () {
      // Implement this root action in module
    },

    getActivities({ state }, variables) {
      state.isLoading = true;
      return apolloClient.query({
        query: activitiesQuery, variables
      }).then(result => {
        state.isLoading = false;
        return result.data.activities;
      })
    }
  },

  modules: {
    result,
    search
  }
})
