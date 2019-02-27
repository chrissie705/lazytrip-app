<template>
  <div class="GradiantBackground">
    <template v-if="name === 'search-path'">
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin meet">
        <defs>
            <linearGradient id="search-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stop-color="#E59C55"/>
              <stop offset="100%" stop-color="#eb70a0"/>
            </linearGradient>
        </defs>

        <path 
          d="M0 0 H100 V60 Q50 88 0 60 Z"
          fill="url(#search-gradient)"
        />
      </svg>
    </template>
    <template v-if="name === 'result-path'">
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin meet">
        <defs>
            <linearGradient id="result-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#E59C55"/>
              <stop offset="100%" stop-color="#eb70a0"/>
            </linearGradient>
        </defs>

        <path 
          d="M0 0 H100 V13 Q50 26 0 13 Z"
          fill="url(#result-gradient)"
        />
      </svg>
    </template>
    <template v-if="name === 'place-path'">
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin meet">
        <defs>
            <linearGradient id="place-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stop-color="#E59C55"/>
              <stop offset="85%" stop-color="#eb70a0"/>
            </linearGradient>
        </defs>

        <path 
          d="M0 0 H100 V40 Q50 60 0 40 Z"
          fill="url(#place-gradient)"
        />
      </svg>
    </template>
    <template v-if="name === 'route-path'">
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin meet">
        <defs>
            <linearGradient id="route-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stop-color="#E59C55"/>
              <stop offset="85%" stop-color="#eb70a0"/>
            </linearGradient>
        </defs>

        <path 
          d="M0 0 H100 V40 Q50 60 0 40 Z"
          fill="url(#route-gradient)"
        />
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GradiantBackground',

  props: {
    name: { type: String, required: true }
  },
}
</script>


<style scoped>
.GradiantBackground {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: flex;
}

.GradiantBackground svg {
  width: 100%;
  height: 100%;
  flex: 1;
}



/* .GradiantBackground {
  background: linear-gradient(to bottom, #E59C55, #eb70a0);
  box-shadow: 1px 2px 1em rgba(0, 0, 0, 0.2);
} */
</style>
