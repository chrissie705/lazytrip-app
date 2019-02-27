<template>
  <div class="Result">
    <h1>Résultats</h1>
    
    <ul>
      <template v-for="item in activities">
        <router-link tag="li" :to="{ name: 'place', params: { key: item.key }}" :key="item.key">
          <PlaceListItem v-bind="item"/>
        </router-link>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PlaceListItem from '@/views/result/PlaceListItem';

export default {
  name: 'Result',

  computed: mapState({
    activities: state => state.result.activities.map((item, index) => ({
      ...item,
      key: index,
      time: '04:00',
      score: .8
    })),
  }),

  mounted() {
    this.$store.dispatch('search/search');
  },

  components: { PlaceListItem }
}
</script>

<style scoped>
.Result {
  padding: 1em;
}
.Result li + li {
  margin-top: 1.4em;
}
</style>
