const APIKEY = '329a4b56c26b85fa8990bc016748b860';
const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + APIKEY + '&language=en-US&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

let movies = [];

async function getMovies() {
  const resp = await fetch(URL);
  const respData = await resp.json();

  //console.log(respData);

  respData.results.forEach(movie => {

    var moviePosterPath = IMGPATH + movie.poster_path;
    if (movie.poster_path == null) {
      moviePosterPath = null;
    }

    movies.push({id:movie.id, title:movie.title, poster:moviePosterPath, rating:movie.vote_average, overview:movie.overview});
  });

  return respData;
}

getMovies();

export default movies;