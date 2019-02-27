<template>
  <div class="Route">
    <h1>Mon itinéraire</h1>

    <RouteForm class="RouteForm"/>

    <RouteDetails class="RouteDetails"/>
  </div>
</template>

<script>
import RouteForm from '@/views/route/RouteForm';
import RouteDetails from '@/views/route/RouteDetails';

export default {
  name: 'Route',

  components: { RouteForm, RouteDetails }
}
</script>

<style scoped>
.Route {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Route .RouteDetails {
  flex: 1;
}

.Route > * {
  margin-bottom: 1em;
}
</style>
