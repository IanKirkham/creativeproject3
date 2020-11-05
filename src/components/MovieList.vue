<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="poster">
        <img :src="movie.poster">
        <div class="arrow"></div>
        <div v-if="isInWatchlist(movie)">
          <button class="sub-btn" @click="removeFromWatchlist(movie)"><i class="fas fa-minus-square"></i></button>
          <div class="sub-tooltip">Remove from Watchlist</div>
        </div>
        <div v-else>
          <button class="add-btn"  @click="addToWatchList(movie)"><i class="fas fa-plus-square"></i></button>
          <div class="add-tooltip">Add to Watchlist</div>
        </div>
        <div class="overview">
          <p>{{movie.overview}}</p>
        </div>
      </div>
      <div class="movie-info">
        <h1>{{movie.title}}</h1>
         <p>{{movie.rating}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
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
}
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
}

.movie {
  position: relative;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  width: 14em;
  height: 27em;
  background-color: #373b69;
  margin: 0em 1em 2em 1em;
}

.poster {
  position: relative;
  width: 14em;
  height: 21em;
  background-color: black;
}

.poster img {
  width: 100%;
}

.arrow {
  position:absolute;
  top:0;
  left:0;
  width:0; 
  height:0; 
  border-bottom:5em solid transparent;
  border-right:5em solid transparent;   
  border-top:5em solid rgba(0, 0, 0, 0.7);
}

.overview {
  color: white;
  padding: 1em;
  position: absolute;
  max-height: 100%;
  overflow: auto;
  top: 12%;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
}

.poster:hover img {
  opacity: 0.1;
  transition: 0.5s ease;
  backface-visibility: hidden;  
}

.poster:hover .overview {
  opacity: 1;
}

.add-btn {
  position: absolute;
  top: 6%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: #42b983;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
}

.sub-btn {
  position: absolute;
  top: 6%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: #f54242;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
}

.add-tooltip {
  color: #42b983;
  font-weight: bold;
  font-size: 1em;
  padding: 1em;
  position: absolute;
  top: -0.2em;
  left: 2.1em;
  opacity: 0;
}

.sub-tooltip {
  color: #f54242;
  font-weight: bold;
  font-size: 0.95em;
  position: absolute;
  top: 0.8em;
  left: 3em;
  opacity: 0;
}

.poster:hover .add-tooltip {
  opacity: 1;
}

.poster:hover .sub-tooltip {
  opacity: 1;
}

.add-btn:hover{
  color: #2c7d58;
}

.add-btn:active {
  color: #1b543a;
}
.add-btn:focus {
  outline: none;
}

.sub-btn:hover{
  color: #c73636;
}

.sub-btn:active {
  color: #912a2a;
}
.sub-btn:focus {
  outline: none;
}

.movie-info {
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  font-size: 0.6em;
  height: 10em;
}

.movie-info h1 {
  margin-left: 0.5em;
}

.movie-info p {
  background-color: #42b983;
  border-radius: 0.3em;
  font-size: 2em;
  margin-right: 0.5em;
  padding: 0.2em;
}
</style>