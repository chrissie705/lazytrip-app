<template>
  <div class="InputTime">
    <div @click="openSelector">
      <TextShadow><p>{{ value }}</p></TextShadow>
    </div>

    <template v-if="showSelector">
      <InputTimeSelector 
        :value="dirtyValue"
        @select="updateValue"
      />
    </template>
  </div>
</template>

<script>
import InputTimeSelector from '@/components/common/InputTimeSelector';

import TextShadow from '@/components/common/TextShadow';

export default {
  name: 'InputTime',

  props: {
    value: { type: String, required: true }
  },

  data() {
    return {
      dirtyValue: this.value,
      showSelector: false
    }
  },

  methods: {
    openSelector() {
      this.showSelector = true;
    },
    updateValue(value) {
      this.showSelector = false;
      this.$emit('change', value);
    }
  },

  components: { InputTimeSelector, TextShadow }
}
</script>

<style scoped>
  .InputTime {
    color: #848C8C;
  }
</style>

