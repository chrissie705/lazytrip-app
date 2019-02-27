<template>
  <div class="InputTimeSelector">
    <Blockout @click="closeModal"/>
    <TooltipShadow class="TooltipShadow">
      <input type="time" step="600" v-model="value">
    </TooltipShadow>
  </div>
</template>

<script>
import Blockout from '@/components/common/Blockout';
import TooltipShadow from '@/components/common/TooltipShadow';

export default {
  name: 'InputTimeSelector',

  props: {
    value: { type: String, required: true }
  },

  methods: {
    closeModal() {
      this.$emit('select', this.value);
    }
  },

  components: { Blockout, TooltipShadow }
}
</script>

<style scoped>
  .InputTimeSelector {
    position: relative;
  }

  .TooltipShadow {
    z-index: 1;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

