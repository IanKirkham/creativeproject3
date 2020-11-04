
<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="poster">
        <img :src="movie.poster">
        <div class="arrow"></div>
        <button class="add-btn"  @click="addToWatchList(movie)"><i class="fas fa-plus-square"></i></button>
        <div class="tooltip">Add to Watchlist</div>
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
    addToWatchList(movie) {
      this.$root.$data.watchlist.push(movie);
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
  max-width: 90%;
}

.movie {
  position: relative;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  width: 14em;
  height: 27em;
  background-color: #373b69;
  margin-bottom: 2em;
  margin-right: 1em;
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
  top: 10%;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
}

body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.overview::-webkit-scrollbar {
  width: 1em;
}
 
.overview::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
.overview::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
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

.tooltip {
  color: #42b983;
  font-weight: bold;
  font-size: 1.2em;
  padding: 1em;
  position: absolute;
  top: -0.5em;
  left: 1.8em;
  opacity: 0;
}

.poster:hover .tooltip {
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