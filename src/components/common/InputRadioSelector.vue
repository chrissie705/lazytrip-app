<template>
  <div class="InputRadioSelector">
    <input type="radio" name="fromto" id="train" value="train"/>
    <label for="train"><i class="icon icon-train"/></label>

    <input type="radio" name="fromto" id="bike" value="bike"/>
    <label for="bike"><i class="icon icon-bike"/></label>

    <input type="radio" name="fromto" id="car" value="car"/>
    <label for="car"><i class="icon icon-car"/></label>

    <input type="radio" name="fromto" id="walker" value="walker"/>
    <label for="walker"><i class="icon icon-walker"/></label>

    <input type="radio" name="fromto" id="bus" value="bus"/>
    <label for="bus"><i class="icon icon-bus"/></label>
  </div>
</template>

<script>
export default {
  name: 'InputRadioSelector'
}
</script>

<style scoped>
  .InputRadioSelector {
    display: flex;
  }
  .InputRadioSelector input {
    display: none;
  }
  .InputRadioSelector input + label {
    border-radius: 50%;
    padding: 5px;
    margin-right: 15px;
  }
  .InputRadioSelector input:checked + label {
    background: rgba(255, 255, 255, 0.4);
  }
</style>

