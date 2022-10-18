//sorry guys I dont think I can make class sunday

//DEPENDENCIES

//setting this to index for now
const index = require('express').Router();
const { response } = require('express');

//HOME
index.get('/', async (req, res) => {
   try {
      res.status(200).send('INDEX')
      console.log('Index Page')
   } catch (error) {
      res.status(500)
      console.log(error)
   }
})

//NOT FOUND
index.get('*', (req, res) => {
   res.status(404)
   res.send('Page Not Found')
})

module.exports = index