<template>
  <button class="GradiantButton" @click="dispatchClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'GradiantButton',
  
  methods: {
    dispatchClick(...params) {
      this.$emit('click', ...params);
    }
  }
}
</script>


<style scoped>
.GradiantButton {
  padding: 0.6em 1.4em;
  border: 0;
  outline: 0;
  border-radius: 1em;
}

.GradiantButton {
  background: linear-gradient(to right, #E59C55, #eb70a0);
  box-shadow: 1px 2px 1em rgba(0, 0, 0, 0.2);
  padding: 0.4em 1em;
  color: #FFF;
  font-size: 0.9em;
}

.GradiantButton:active {
  box-shadow: inset 1px 2px 1em rgba(0, 0, 0, 0.2);
}
</style>
