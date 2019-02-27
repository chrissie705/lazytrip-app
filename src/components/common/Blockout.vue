<template>
  <div class="Blockout" @click="$emit('click')"/>
</template>

<style scoped>
.Blockout {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
