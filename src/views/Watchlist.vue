<template>
  <div class="watchlist">
    <h1 class="title">My Watchlist</h1>
    <div class="wrapper">
      <div v-if="empty">
        <p class="empty-watchlist-msg">Watchlist is empty!</p>
      </div>
      <div v-else>
        <div class="movies">
          <div class="movie" v-for="movie in watchlist" :key="movie.id">
            <div class="poster">
              <img :src="movie.poster" />
              <div class="arrow"></div>
              <div v-if="isInWatchlist(movie)">
                <button class="sub-btn" @click="removeFromWatchlist(movie)">
                  <i class="fas fa-minus-square"></i>
                </button>
                <div class="sub-tooltip">Remove from Watchlist</div>
              </div>
              <div v-else>
                <button class="add-btn" @click="addToWatchList(movie)">
                  <i class="fas fa-plus-square"></i>
                </button>
                <div class="add-tooltip">Add to Watchlist</div>
              </div>
              <div class="overview">
                <p>{{ movie.overview }}</p>
              </div>
            </div>
            <div class="movie-info">
              <h1>{{ movie.title }}</h1>
              <p>{{ movie.rating }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Watchlist",
  computed: {
    watchlist() {
      return this.$root.$data.watchlist;
    },
    empty() {
      if (this.$root.$data.watchlist.length == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    isInWatchlist(movie) {
      for (let i = 0; i < this.$root.$data.watchlist.length; i++) {
        if (this.$root.$data.watchlist[i] === movie) {
            return true;
        }
      }
      return false;
    },
    addToWatchList(movie) {
      this.$root.$data.watchlist.push(movie);
    },
    removeFromWatchlist(movie) {
      const index = this.$root.$data.watchlist.findIndex(
        (item) => item.id === movie.id
      );
      this.$root.$data.watchlist.splice(index, 1);
    }
  }
};
</script>

<style>

.watchlist {
  height: 110vh;
}

.empty-watchlist-msg {
  font-size: 2.5em;
  height: 100vh;
  padding-top: 1em;
  color: #ababab;
  font-style: italic;
}
</style>
