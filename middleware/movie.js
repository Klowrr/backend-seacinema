const Movies = require('../models/movieModel.js')

module.exports = async function getMovie(req,res,next){
  let movie
  try {
      movie = await Movies.findById(req.params.id)
      if(movie == null){
          return res.status(404).json({message: 'Cannot find movie'})
      }
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
  res.movie = movie
  next()
}