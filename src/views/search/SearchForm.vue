<template>
  <div class="SearchForm">
    <p>Je pars de :</p>
    <TextShadow class="SearchFormFromTo">
      <input type="text" :value="leaveFrom" placeholder="2 quai François">
      <input type="text" :value="arriveAt" placeholder="2 quai François Mitterand">
    </TextShadow>

    <div>
      <p>Je suis disponible pendant :</p>
      <InputTime class="InputTime" :value="availableDuring" @change="changeAvailableDuring"/>
    </div>

    <div>
      <p>Je suis disponible à partir de :</p>
      <InputTime class="InputTime" :value="availableFrom" @change="changeAvailableFrom"/>
    </div>
  </div>
</template>

<script>
import { getCurrentPosition } from '@/utils/geolocation';

import TextShadow from '@/components/common/TextShadow';
import InputTime from '@/components/common/InputTime';

export default {
  name: 'SearchForm',

  data() {
    return {
      leaveFrom: '',
      arriveAt: '',
      availableDuring: '14:00',
      availableFrom: '14:00'
    }
  },

  methods: {
    changeLeaveFrom(leaveFrom) {
      this.leaveFrom = leaveFrom;
    },
    changeArriveAt(arriveAt) {
      this.arriveAt = arriveAt;
    },
    changeAvailableDuring(availableDuring) {
      this.availableDuring = availableDuring;
    },
    changeAvailableFrom(availableFrom) {
      this.availableFrom = availableFrom;
    }
  },

  async mounted() {
    this.$store.state.isLoading = true;
    const location  = await getCurrentPosition();
    this.$store.state.isLoading = false;

    if (location.coords) {
      this.$store.commit("search/departureLatitude", location.coords.latitude);
      this.$store.commit("search/departureLongitude", location.coords.longitude);
    }
  },

  components: { TextShadow, InputTime }
}
</script>

<style scoped>
.SearchForm > * {
  margin-bottom: 1.2em;
}
.SearchForm p {
  margin-bottom: 0.6em;
}

input + input {
  border-top: 1px solid #707070;
  padding-top: 0.2em;
  margin-top: 0.2em;
}

.SearchForm .InputTime {
  display: inline-block;
}
</style>

<style scoped>
.SearchForm {
  color: #fff;
}
</style>

