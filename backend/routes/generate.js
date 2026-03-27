const express = require('express');
const router = express.Router();
const { queryAIGenerator } = require('../services/aiGenerator');

router.get('/', async (req, res) => {
  try {
    const { selectedMovies, mood, watchTime, watchWith } = req.query;
    const result = await queryAIGenerator({
      selectedMovies: JSON.parse(selectedMovies),
      mood,
      watchTime,
      watchWith,
    });
    res.json({ response: result });
  } catch (error) {
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

router.get('/recipes', async (req, res) => {
  try {
    

  } catch (error) {
    console.error('AI Generation error:', error);
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

module.exports = router;