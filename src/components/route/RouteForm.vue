<template>
  <div class="RouteForm">
    <div>
      <i class="icon icon-invert"/>

      <div class="RouteForm-input">
        <InputRadioSelector  class="InputRadioSelector"/>
        <InputFromToSelector  class="InputFromToSelector"/>
      </div>
    </div>

    <InputTime class="RouteFormTime" :value="startTime" @change="changeStartTime"/>
  </div>
</template>

<script>
import InputRadioSelector from '@/components/common/InputRadioSelector';
import InputFromToSelector from '@/components/common/InputFromToSelector';
import InputTime from '@/components/common/InputTime';

export default {
  name: 'RouteForm',

  data() {
    return {
      startTime: '14h00'
    }
  },

  methods: {
    changeStartTime(startTime) {
      this.startTime = startTime;
    }
  },

  components: { InputRadioSelector, InputFromToSelector, InputTime }
}
</script>

<style scoped>
.RouteForm {
  display: flex;
  flex-direction: column;

  color: #fff;
}
.RouteFormTime {
  align-self: center;
}

.RouteForm-input {
  text-align: center;
}
.RouteForm-input > * {
  margin-bottom: 1em;
}
</style>

