<template>
  <div class="home">
    <div v-if="loading">
      <p class="loading-msg"> Loading... </p>
    </div>
    <div v-else>
      <h1 class="title">Popular Movies</h1>
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

<style>
.title {
  margin-top: 1em;
  font-size: 2.5em;
}

.loading-msg {
  font-size: 2.5em;
  height: 100vh;
  padding-top: 1em;
}
</style>
