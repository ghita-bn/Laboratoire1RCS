import axios from 'axios';

export async function generateAIResponse(query) {
  const response = await axios.get('http://localhost:5000/generate', {
    params: {
      selectedMovies: JSON.stringify(query.selectedMovies),
      mood: query.mood,
      watchTime: query.watchTime,
      watchWith: query.watchWith,
    },
  });
  return response.data;
}

export async function searchMovie(title) {
  try {
    const response = await axios.get('http://localhost:5000/search/movie', {
      params: { q: title },
    });
    return response.data;
  } catch (error) {
    console.error('searchMovie error:', error.message);
    return { results: [] };
  }
}
