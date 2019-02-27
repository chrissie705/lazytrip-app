<template>
  <div id="app" class="page">
    <Loader v-if="isLoading"/>
    <GradiantBackground :name="gradiantType"/>
    <router-view/>
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'

import Loader from '@/components/common/Loader.vue'
import GradiantBackground from '@/components/common/GradiantBackground.vue'

export default {
  name: 'app',

  data() {
    return {
      gradiantType: 'search-path'
    }
  },

  computed: {
    ...mapGetters(['isLoading'])
  },

  watch:{
    $route (to) {
      switch (to.name) {
        case 'search': this.gradiantType = 'search-path'; break;
        case 'result': this.gradiantType = 'result-path'; break;
        case 'place': this.gradiantType = 'place-path'; break;
      }
    }
  },

  components: { Loader, GradiantBackground }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #707070;
}

.page {
  width: 100%;
  height: 100%;
  overflow: scroll;

  position: relative;
}

body {
  font-size: 16px;
  color: #707070;
}

h1 {
  text-align: center;
  font-size: 1.6em;
  font-weight: 300;
  color: #fff;
}

h3 {
  font-size: 1em;
  font-weight: 300;
  color: #eb70a0;
}

p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

input {
  appearance: none;
  border: 0;
  outline: 0;
  width: 100%;
  font-size: 0.9em;
  color: #848C8C;
}
input::placeholder {
  font-weight: 300;
  color: #afafaf;
}
</style>

<style src="./container.css"/>

<style src="./icons.css"/>
