<template>
  <meter class="StarProgress" min="0" max="1" :value="score"/>
</template>

<script>
export default {
  name: 'StarProgress',

  props: {
    score: { type: Number, required: true }
  }
}
</script>

<style scoped>
.StarProgress::-webkit-meter-bar {
  background: url('data:image/svg+xml;utf8,\
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
      <text x="0" y="100" fill="red" font-size="100" opacity="0.2">✮</text>\
    </svg>');
}
.StarProgress::-webkit-meter-optimum-value {
  background: url('data:image/svg+xml;utf8,\
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\
      <text x="0" y="100" fill="red" font-size="100">✮</text>\
    </svg>');
}
</style>
