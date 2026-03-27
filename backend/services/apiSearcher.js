const axios = require('axios');



    
  

async function searchMovies(query) {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: query,  
        apikey: '8c37a790', 
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
    
  } catch (error) {
    console.error('Spoonacular search error:', error.message);
    return [];
  }
}

module.exports = {
    searchMovies,
    searchRecipes
}