const axios = require('axios');

async function queryAIGenerator(query) {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'user',
            content: `Base sur les films suivants ${query.selectedMovies.join(', ')}, et en tenant compte de l'ambiance ${query.mood}, et du temps de visionnage ${query.watchTime}, ainsi que la ou les personnes avec qui vous regardez ${query.watchWith}, suggerez moi un film qui conviendrait le mieux a mes critères, et expliquez moi pourquoi vous avez choisi ce film en particulier.`
          }
        ],
        "max_tokens": 197,

      })
    });

    return await response.json();

  } catch (error) {
    console.error(error);
  }
}

async function queryAIGeneratorForRecipes(query) {
  try {
    
  } catch (error) {
    console.error('OMDb search error:', error.message);
    return [];
  }
}

module.exports = {
    queryAIGenerator,
    queryAIGeneratorForRecipes
}