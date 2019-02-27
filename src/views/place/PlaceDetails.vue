<template>
  <div class="PlaceDetails">
    <section><h3><i class="icon icon-description"/>Description</h3>
      <p>{{ description }}</p>
    </section>

    <section><h3><i class="icon icon-place"/>Coordonnées</h3>
      <address>
        {{ lieu }}<br/>
        <template v-for="address in addresses">
          <span :key="address.key">
            {{ address.streetAddress }}<br/>
            {{ address.addressLocality }}
          </span>
        </template>
      </address>
    </section>

    <!-- <section><h3><i class="icon icon-schedule"/>Horaires</h3>
      <p>
        Visite libre<br>
        Billet unique : 15€ sur place - 17€ valable le jour même, pour le musée du Louvre (collections permanentes et expositions temporaires) et le musée Eugène-Delacroix.
      </p>
    </section>

    <section><h3><i class="icon icon-travel"/>Trajet <GradiantButton class="GradiantButton">Mon itinéraire</GradiantButton></h3>
      <ul>
        <li><i class="icon icon-metro"/> Metro - Palais - Musée du Louvre</li>
        <li><i class="icon icon-train"/> RER - Châtelet - Les Halles</li>
        <li><i class="icon icon-bus"/> Bus - 21, 24, 27, 39, 48, 68, 69, 72, 76, 81, 95</li>
      </ul>
    </section> -->
  </div>
</template>

<script>
import GradiantButton from '@/components/common/GradiantButton';

export default {
  name: 'PlaceDetails',

  props: {
    description: { type: String, required: true },
    lieu: { type: String },
    addresses: { type: Array }
  },

  components: { GradiantButton }
}
</script>

<style scoped>
.PlaceDetails section {
  margin-bottom: 2em;
}
.PlaceDetails .GradiantButton {
  float: right;
}
</style>
