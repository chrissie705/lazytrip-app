<template>
  <TextShadow class="PlaceListItem">
    <p class="PlaceListItem-name">{{ name }}</p>

    <p>
      <i class="icon icon-clock"/>
      <time>{{ time | time }}</time>
    </p>

    <StarProgress class="PlaceListItem-progress" :score="score"/>
  </TextShadow>
</template>

<script>
import TextShadow from '@/components/common/TextShadow';
import StarProgress from '@/components/common/StarProgress';

export default {
  name: 'PlaceListItem',

  props: {
    name: { type: String, required: true },
    time: { type: String },
    score: { type: Number }
  },

  filters: {
    time(value) {
      return `${value}`;
    }
  },

  components: { TextShadow, StarProgress }
}
</script>

<style scoped>
.PlaceListItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 1em;
}
.PlaceListItem .PlaceListItem-name {
  flex: 1 0 25%;
}
.PlaceListItem p {
  margin-right: 20px;
}
.PlaceListItem .PlaceListItem-progress {
  flex: 1;
}
</style>

