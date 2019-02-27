<template>
  <div class="RouteDetailsItem">
    <i class="icon icon-train"/>
    <div class="RouteDetailsItem-content">
      <p>
        <span>{{ startTime }} - {{ endTime }}</span>
        <span class="RouteDetailsItem-content-travelTime">{{ travelTime }}</span>
      </p>
      <div></div>
      <p>À {{ departureTime }} de {{ departurePlace }}</p>
      <ul>
        <li>{{ travelPrice }}</li>
        <li><i class="icon icon-walker"/> {{ walkingTime }}</li>
        <li>{{ travelFrequency }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteDetailsItem',

  props: {
    startTime: { type: String },
    endTime: { type: String },
    travelTime: { type: String },
    departureTime: { type: String },
    departurePlace: { type: String },
    travelPrice: { type: String },
    walkingTime: { type: String },
    travelFrequency: { type: String },
  }
}
</script>

<style scoped>
.RouteDetailsItem {
  display: flex;
}
.RouteDetailsItem-content {
  flex: 1;
}
.RouteDetailsItem-content-travelTime {
  float: right;
}
.RouteDetailsItem-content li {
  float: left;
  margin-right: 15px;
}
</style>


