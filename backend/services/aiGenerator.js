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
            content: `Base sur les films suivants ${query.selectedMvies.join(', ')}, et en tenant compte de l'ambiance ${query.mood}, et du temps de visionnage ${query.watchTime}, ainsi que la ou les personnes avec qui vous regardez ${query.watchWith}, suggerez moi un film qui conviendrait le mieux a mes critères, et expliquez moi pourquoi vous avez choisi ce film en particulier.`
          }
        ]
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