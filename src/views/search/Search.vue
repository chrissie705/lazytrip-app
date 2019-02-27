<template>
  <div class="Search">
    <SearchForm class="SearchForm"/>

    <SearchTopics class="SearchTopics"/>

    <router-link to="result" v-if="canSearch">
      <GradiantButton class="GradiantButton">Rechercher</GradiantButton>
    </router-link>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import GradiantButton from '@/components/common/GradiantButton';

import SearchForm from '@/views/search/SearchForm';
import SearchTopics from '@/views/search/SearchTopics';

const { mapGetters } = createNamespacedHelpers('search')

export default {
  name: 'Search',

  computed: {
    ...mapGetters(['canSearch'])
  },

  components: { GradiantButton, SearchForm, SearchTopics }
}
</script>

<style scoped>
.Search {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.Search .SearchTopics {
  flex: 1;
}
.Search .GradiantButton {
  align-self: center;
}

.Search > * {
  margin-bottom: 1em;
}
.Search .SearchForm {
  margin-top: 2em;
  padding: 0 2em;
}
.Search .SearchTopics {
  padding: 0 2em;
}
</style>
