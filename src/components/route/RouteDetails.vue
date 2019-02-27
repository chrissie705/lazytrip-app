<template>
  <div class="RouteDetails">
    <ul>
      <template v-for="step in steps">
        <li :key="step.id">
          <RouteDetailsItem class="RouteDetailsItem" v-bind="step"/>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import RouteDetailsItem from '@/views/route/RouteDetailsItem';

export default {
  name: 'RouteDetails',

  data() {
    return {
      steps: [
        { startTime: '14h39', endTime: '15h49', travelTime: '27 min', departureTime: '14h55', departurePlace: 'Louis Blanc', travelPrice: '1,90 €', walkingTime: '15 min', travelFrequency: 'Toutes les 3 mins' },
        { startTime: '14h39', endTime: '15h49', travelTime: '27 min', departureTime: '14h55', departurePlace: 'Louis Blanc', travelPrice: '1,90 €', walkingTime: '15 min', travelFrequency: 'Toutes les 3 mins' },
        { startTime: '14h39', endTime: '15h49', travelTime: '27 min', departureTime: '14h55', departurePlace: 'Louis Blanc', travelPrice: '1,90 €', walkingTime: '15 min', travelFrequency: 'Toutes les 3 mins' },
        { startTime: '14h39', endTime: '15h49', travelTime: '27 min', departureTime: '14h55', departurePlace: 'Louis Blanc', travelPrice: '1,90 €', walkingTime: '15 min', travelFrequency: 'Toutes les 3 mins' },
      ]
    }
  },

  components: { RouteDetailsItem }
}
</script>

<style scoped>
.RouteDetails li {
  border-bottom: 1px solid #c3c3c3;
  padding: 15px;
}

.RouteDetails li:last-child {
  border-bottom: none;
}
</style>
