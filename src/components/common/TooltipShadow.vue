<template>
  <div class="TooltipShadow">
    <span class="TooltipShadow-triangle">▲</span>
    <slot/>
  </div>
</template>

<style scoped>
.TooltipShadow {
  padding: 0.2em 1em;
  border-radius: 1em;
}
.TooltipShadow {
  background: #fff;
  box-shadow: 1px 2px 1em rgba(0, 0, 0, 0.2);
}
.TooltipShadow-triangle {
  z-index: -1;
  display: inline-block;
  -webkit-transform: scaleX(2.5);
  transform: scaleX(2) translateX(-25%);
  color: #BADA55;
  text-shadow: 0 2px 2px rgba(255,255,255,0.7), 0 10px 4px rgba(0,0,0,0.5);
  font-size: 32px;
  position: absolute;
  left: 50%;
  top: -90%;
}
</style>
