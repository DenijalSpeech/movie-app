<template>
  <div class="movie-card" data-testid="movie-card">
    <h3>{{ "Title: " + movie.title }}</h3>
    <p>{{ movie.description }}</p>
    <p>Rating: {{ movie.rating }}/10</p>
    <button @click="rateMovie">Rate</button>
    <button @click="rateMovie">Rate</button>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  methods: {
    rateMovie() {
      alert("Rate movie clicked!");
    },
  },
};
</script>
