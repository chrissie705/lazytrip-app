<template>
  <div class="TextShadow">
    <slot/>
  </div>
</template>

<style scoped>
.TextShadow {
  padding: 0.2em 1em;
  border-radius: 1em;
}
.TextShadow {
  background: #fff;
  box-shadow: 1px 2px 1em rgba(0, 0, 0, 0.2);
}
</style>
