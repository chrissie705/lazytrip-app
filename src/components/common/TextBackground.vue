<template>
  <div class="TextBackground" :style="{ backgroundImage }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'TextBackground',

  props: {
    backgroundImage: { type: String }
  }
}
</script>

<style scoped>
.TextBackground {
  display: flex;
  align-items: center;
  justify-items: center;
}

.TextBackground {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.TextBackground {
  border-radius: 1em;
}

.TextBackground {
  box-shadow: 1px 2px 1em rgba(0, 0, 0, 0.2);
}
</style>
