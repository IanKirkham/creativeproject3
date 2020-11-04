<template>
  <div class="watchlist">
    <h1 class="title">My Watchlist</h1>
    <div v-if="empty">
      <p class="empty-watchlist-msg">Watchlist is empty!</p>
    </div>
    <div v-else>
      <!--Insert the finalized HTML from MovieList.vue here, adding a remove from watchlist button-->
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
    removeFromWatchlist(movie) {
      const index = this.$root.$data.watchlist.findIndex(
        (item) => item.id === movie.id
      );
      this.$root.$data.watchlist.splice(index, 1);
    },
  },
};
</script>