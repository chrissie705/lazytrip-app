<template>
  <div class="SearchTopics">
    <p>J'ai envie de :</p>

    <ul>
      <template v-for="topic in topics">
        <li :key="topic.id">
          <input type="radio" name="topic" :id="topic.value" :value="topic.value" @change="onTopicChange(topic.value)">
          <label :for="topic.value">
            <SearchTopicsItem class="SearchTopicsItem" v-bind="topic"/>
          </label>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import SearchTopicsItem from '@/views/search/SearchTopicsItem';

export default {
  name: 'SearchTopics',

  data() {
    return {
      topics: [
        { title: 'Théatre / Opéra',     value: 'theatre',    icon: 'icon-theater', image: require('@/assets/theater.png') },
        { title: 'Cinéma',              value: 'film',       icon: 'icon-cinema',  image: require('@/assets/cinema.png') },
        { title: 'Musée',               value: 'exposition', icon: 'icon-museum',  image: require('@/assets/museum.png') },
        { title: 'Concert / Spectacle', value: 'musique',    icon: 'icon-concert', image: require('@/assets/concert.png') }
      ]
    }
  },

  methods: {
    onTopicChange(value) {
      this.$store.commit("search/selectedCategory", value);
    }
  },

  components: { SearchTopicsItem }
}
</script>

<style scoped>
.SearchTopics p {
  margin-bottom: 1em;
}
.SearchTopics ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 1em;
}

.SearchTopics li {
  display: flex;
  flex-direction: column;
}
.SearchTopics label,
.SearchTopics .SearchTopicsItem {
  height: 100%;
}

input[type=radio] {
  display: none;
}
input[type=radio]:checked + label .SearchTopicsItem {
  border: 2px solid #eb70a0;
}
</style>
