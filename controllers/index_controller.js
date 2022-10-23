//DEPENDENCIES
const index = require('express').Router();
const Recipe = require('../models/recipe')

//GET ALL
index.get('/all', async (req, res) => {
   try {
      let recipes = await Recipe.find()
      res.status(200).send(recipes)
     
   } catch (error) {
      res.status(500).json({message: 'Error Retreiving Recipes'})
      console.log(error)
   }
})

//GET SPECIFIC 
index.get('/:id', async (req, res) => {
   try {
      let foundRecipe = await Recipe.findById(req.params.id)
      res.status(200).send(foundRecipe)
   }
   catch (error) {
      res.status(500).json({message: 'Error Retreiving Recipe'})
      console.log(error)
   }
})

//ADD NEW
index.post('/', async (req, res) => {
   try {
      const recipe = await new Recipe({
         ...req.body
      }).save()

      res.send(recipe)

   } catch (error) {
      res.status(500).json({message: 'Unable to add Recipe'})
      console.log(error)
   }
})

//EDIT
index.put('/:id', async (req, res) => {
   try {
      await Recipe.findByIdAndUpdate({_id: req.params.id}, req.body)
      res.redirect('/:id')
   }
   catch (error) {
      res.status(500).json({message: 'Unable to edit Recipe'})
      console.log(error)
   }
})

//DELETE
index.delete('/:id', async (req, res) => {
   try {
      await Recipe.findByIdAndDelete(req.params.id)
      res.status(303).json({message: `Recipe has been deleted`})
   }
   catch (error) {
      res.status(500).json({message: 'Unable to delete Recipe'})
      console.log(error)
   }
})


module.exports = index