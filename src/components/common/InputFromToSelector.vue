<template>
  <div class="InputFromToSelector">
    <div class="InputFromToSelector-field">
      <TextShadow><input type="text" name="from" placeholder="2 quai François"></TextShadow>
      <TextShadow><input type="text" name="to" placeholder="2 quai François Mitterand"></TextShadow>
    </div>
    <i class="icon icon-invert"/>
  </div>
</template>

<script>
import TextShadow from '@/components/common/TextShadow';

export default {
  name: 'InputFromToSelector',

  components: { TextShadow }
}
</script>

<style scoped>
.InputFromToSelector {
  display: flex;
  align-items: center;
}
.InputFromToSelector-field {
  flex: 1;
}
input {
  width: 100%;
}
</style>

