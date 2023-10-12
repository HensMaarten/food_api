const express = require('express');
const router = express.Router();
const gerechten = require('./models/gerecht');

/********************************/
/*           Routes             */
/********************************/

/**
 * Homepage where all routes are shown
 */
router.get('/', (req, res) => {
  console.log('/ route called');
  res.send(
    '<h1>Welcome to my API, these are the available routes:</h1>'

    +'<h2>/</h2>'
    +'Where you are right now'

    +'<hr/>' 

    +'<h2>/gerechten</h2>'
    +'List of all dishes.'

    +'<hr/>'  );
});

/**
 * Return all Gerechten
 */
 router.get('/gerechten', async (req, res) => {
    console.log('/gerechten route called');
    try {
      res.json(await gerechten.find().populate('Ingrediënten').populate('Allergieën'));
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  router.get('/gerechten/:id', async (req, res) => {
    console.log('/gerechten/:id route called');
    try {
      res.json(await gerechten.findById(req.params.id).populate('Ingrediënten'));
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
module.exports = router;