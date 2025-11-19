import { defineStore } from "pinia";
import { fetchMovies } from "../api/movieApi";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],
    movies: [],
    loading: false,
  }),
  actions: {
    async loadMovies() {
      this.loading = true;
      try {
        const data = await fetchMovies();
        this.movies = data;
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    },
  },
});
