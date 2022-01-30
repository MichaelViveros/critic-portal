<template>
  <div>
    <img
      alt="Critic pic"
      :src="this.critic.imgSrc"
    />
    <h1>{{ critic.name }}</h1>
    <p>{{ critic.bio }}</p>
    <p>Random Fact:</p>
    <p>{{ fact }}</p>
    <button @click="changeFact">New Random Fact</button>
  </div>
</template>

<script>
export default {
  name: 'Critic',
  props: {
    critic: Object,
  },
  computed: {
    fact: function () {
      return this.critic.randomFacts[this.factIndex]
    },
  },
  data: function () {
    return {
      factIndex: 0,
    }
  },
  methods: {
    changeFact: function () {
      const max = this.critic.randomFacts.length
      this.factIndex = Math.floor(Math.random() * max)
    }
  }
}
</script>

<style scoped>
</style>
