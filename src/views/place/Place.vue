<template>
  <div class="Place">
    <div class="PlaceHeader">
      <h1 v-if="selectedPlace">{{ selectedPlace.name }}</h1>

      <template v-if="selectedPlace">
        <Carousel class="PlaceCarousel" @slide-change="selectPlaceByIndex" :selected-index="selectedPlace.key">
          <div class="PlaceCarouselItem" v-for="activity in activities" :key="activity.key">
            <TextBackground class="PlaceCarouselItemImage" :background-image="activity.image | url"/>
          </div>
        </Carousel>
      </template>

      <StarProgress class="PlaceHeader-progress" v-if="selectedPlace" :score="selectedPlace.score"/>
    </div>

    <template v-if="selectedPlace">
      <PlaceDetails class="PlaceDetails" v-bind="selectedPlace"/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Carousel from '@/components/common/carousel/Carousel';
import TextBackground from '@/components/common/TextBackground';
import StarProgress from '@/components/common/StarProgress';
import PlaceDetails from '@/views/place/PlaceDetails';

export default {
  name: 'Place',

  computed: mapState({
    activities: state => state.result.activities.map((item, index) => ({
      ...item,
      key: index,
      time: '04:00',
      score: .8,
      image:'./assets/logo.png',
    })),
  }),

  data() {
    return {
      selectedPlace: undefined
    }
  },

  methods: {
    selectPlaceByIndex(index) {
      this.$router.push({ name: 'place', params: { key: index }})
      this.selectedPlace = this.activities[index];
    }
  },

  mounted() {
    this.selectedPlace = this.activities[this.$route.params.key];
  },

  filters: {
    url(value) {
      return `url(${value})`
    }
  },

  components: {
    Carousel,
    TextBackground,
    StarProgress,
    PlaceDetails
  }
}
</script>

<style scoped>
.Place {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Place .PlaceHeader {
  height: 35%;
}
.Place .PlaceDetails {
  flex: 1;
  overflow: scroll;
}


.PlaceHeader {
  display: flex;
  flex-direction: column;
}
.PlaceHeader .PlaceCarousel {
  flex: 1;
}
.PlaceHeader .PlaceHeader-progress {
  align-self: flex-end;
}


.PlaceHeader .PlaceCarousel {
  margin: 0 2em 0 5.5em;
}
.PlaceHeader .PlaceHeader-progress {
  margin: 0 2em;
}
.PlaceCarouselItem {
  padding-right: 2em;
}
.PlaceDetails {
  padding: 0 2em;
}
.PlaceCarouselItem {
  display: flex;
}
.PlaceCarouselItem .PlaceCarouselItemImage {
  flex: 1;
}
</style>
