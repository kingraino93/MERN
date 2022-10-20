//DEPENDENCIES
const index = require('express').Router();
const Recipe = require('../models/recipe')

//GET ALL
index.get('/', async (req, res) => {
   try {
      let recipes = await Recipe.find()
      res.status(200).send(recipes)
     
   } catch (error) {
      res.status(500).json({message: 'Error Retreiving Recipes'})
      console.log(error)
   }
})

// GET SPECIFIC 
// index.get('/:name', async (req, res) => {
//    try {
//       Recipe.find(req.params.name)
//    }
// })

//ADD NEW
index.post('/', async (req, res) => {
   try {
      const recipe = await new Recipe({
         ...req.body
      }).save()

      res.send(recipe)

   } catch (error) {
      res.status(500).json({message: 'Unable to add Recipe'})
   }
})

module.exports = index