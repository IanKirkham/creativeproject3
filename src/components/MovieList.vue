
<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="poster">
        <img :src="movie.poster">
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
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0em 1em;
  margin-top: 2em;
}

.movie {
  border-radius: 0.2em;
  border: 1px solid green;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  width: 14em;
}

.poster {
  width: 14em;
  border: 1px solid blue;
}

.poster img {
  max-width: 100%;
}

.movie-info {
  
}

</style>

<!--<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>-->