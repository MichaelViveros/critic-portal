<template>
  <div id="app">
    <Critic :critic="critic"/>
  </div>
</template>

<script>
import Critic from './components/Critic.vue'

export default {
  name: 'App',
  components: {
    Critic
  },
  data: function () {
    return {
      critic: {
        name: "Justin Chang",
        bio: "Chief film critic for the LA Times.",
        imgSrc: require("./assets/justin-chang.jpeg"),
        randomFacts: [
          "Had a line in Minari",
          "Has met Michael Viveros",
          "His fans include Ryan Coogler",
          "Favourite movie is Chunking Express",
        ],
      },
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
