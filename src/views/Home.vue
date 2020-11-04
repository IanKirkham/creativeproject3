<template>
  <div class="home">
    <div v-if="loading">
      <p> Loading... </p>
    </div>
    <div v-else>
      <MovieList :movies="movies"/>
    </div>
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
export default {
  name: 'Home',
  components: {
    MovieList
  },
  computed: {
    loading() {
      if (this.$root.$data.movies.length == 0) {
        return true;
      }
      else {
        return false;
      }
    },
    movies() {
      return this.$root.$data.movies;
    }
  }
}
</script>
