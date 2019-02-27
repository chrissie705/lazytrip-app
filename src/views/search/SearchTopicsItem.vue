<template>
  <TextBackground class="SearchTopicsItem" :background-image="image | url">
    <i class="icon" :class="icon"/>
    <h2>{{ title }}</h2>
  </TextBackground>
</template>

<script>
import TextBackground from '@/components/common/TextBackground';

export default {
  name: 'SearchTopicsItem',

  props: {
    title: { type: String, required: true },
    icon: { type: String },
    image: { type: String }
  },

  filters: {
    url(value) {
      return `url(${value})`
    }
  },

  components: { TextBackground }
}
</script>

<style>
.SearchTopicsItem {
  color: #fff;
}
</style>


