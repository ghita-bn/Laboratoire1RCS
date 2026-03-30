const axios = require('axios');

async function searchMovies(query) {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: query,  
        apikey: '2839d7fb', 
        type: 'movie'
      
      },
    });
    if (response.data.Response === 'True' && response.data.Search) {
      return response.data.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster !== 'N/A' ? movie.Poster : null,
        imdbID: movie.imdbID
      }));
    }

    return [];
  } catch (error) {
    console.error('OMDb search error:', error.message);
    return [];
  }
}

async function searchRecipes(query) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/autocomplete",
      {
        params: {
          query: query,
          number: 10,
          apiKey: '1d8523018d654b9695c52290fe53f446'
        }
      }
    );
    return response.data.map(r => ({ id: r.id, name: r.title }));
  } catch (error) {
    console.error('Spoonacular search error:', error.message);
    return [];
  }
}

module.exports = {
    searchMovies,
    searchRecipes
}