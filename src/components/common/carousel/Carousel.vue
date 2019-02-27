<template>
  <div class="Carousel">
    <div class="Carousel-content" ref="swipeContainer">
      <slot/>
    </div>
  </div>
</template>

<script>
import SwipeToSelect from './swipeToSelect';

export default {
  name: 'Carousel',

  props: {
    selectedIndex: { type: Number },
  },

  mounted() { this.initCarousel() },

  updated() { this.updtateCarousel() },

  methods: {
    initCarousel() {
      // Initialize touchable event for carousel
      this.swipeToSelect = new SwipeToSelect(
        this.$refs.swipeContainer,
        this.onSelectItem.bind(this),
        this.selectedIndex
      );

      // Update carousel
      this.updtateCarousel();
    },
    updtateCarousel() {
      // If has slides
      if (this.$refs.swipeContainer.children && this.$refs.swipeContainer.children.length) {
        // Update SwipeToSelect
        this.swipeToSelect.update();
      }
    },
    onSelectItem(selectedIndex) {
      // Fire slide change event
      this.$emit('slide-change', selectedIndex);
    }
  }
};
</script>

<style scoped>
  .Carousel {
    height: 100%;
  }
  .Carousel {
    display: flex;
    flex-direction: column;
  }
  .Carousel .Carousel-content {
    flex: 1;
  }
  .Carousel-content {
    display: flex;
  }
  .Carousel-content > * {
    flex: 1;
  }
</style>

<style src="./Carousel-animation.css" scoped></style>
