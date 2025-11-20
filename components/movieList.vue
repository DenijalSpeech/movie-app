<template>
  <div>
    <MovieCard
      v-for="movie in movies"
      :key="movie.name"
      :movie="movie"
      data-testid="movie-card"
    />
  </div>
</template>

<script>
import MovieCard from "./movieCard.vue";
import { useMovieStore } from "../store/movieStore";
import { onMounted } from "vue";

export default {
  components: { MovieCard },
  setup() {
    const store = useMovieStore();
    onMounted(() => store.loadMovies());
    return { movies: store.movies };
  },
};
</script>
