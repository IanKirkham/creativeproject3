<template>
  <div class="search">
    <h1 class="title">Search Any Movie</h1>
    <form id="form" class="search-form" v-on:submit.prevent="getMovies()">
      <i class="fas fa-search"></i
      ><input type="text" id="searchTerm" v-model="searchTerm" />
    </form>
    <div v-if="empty">
      <div class="empty-div"></div>
    </div>
    <div v-else>
      <div class="movies">
        <div class="movie" v-for="movie in searched" :key="movie.id">
          <div class="poster">
            <div v-if="posterExists(movie)">
              <img :src="movie.poster" />
            </div>
            <div v-else>
              <i class="fas fa-exclamation-circle"></i>
              <p class="missing">Image not found</p>
            </div>
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
</template>

<script>
const APIKEY = "329a4b56c26b85fa8990bc016748b860";
const SEARCHURL =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  APIKEY +
  "&language=en-US&page=1&include_adult=false&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default {
  name: "Search",
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    empty() {
      if (this.$root.$data.searched.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    searched() {
      return this.$root.$data.searched;
    },
  },
  methods: {
    posterExists(movie) {
      if (movie.poster == null) {
        return false;
      }
      return true;
    },
    async getMovies() {
      this.$root.$data.searched = [];

      if (this.searchTerm == "") {
        return;
      }

      let resp = await fetch(SEARCHURL + this.searchTerm);
      let respData = await resp.json();

      //console.log(respData);

      respData.results.forEach((movie) => {
        var moviePosterPath = IMGPATH + movie.poster_path;
        if (movie.poster_path == null) {
          moviePosterPath = null;
        }

        this.$root.$data.searched.push({
          id: movie.id,
          title: movie.title,
          poster: moviePosterPath,
          rating: movie.vote_average,
          overview: movie.overview,
        });
      });

      this.searchTerm = "";
    },
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
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  width: 50%;
  margin-top: 1em;
}

input {
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  padding-left: 0.5em;
  margin-left: 0.5em;
}
</style>
