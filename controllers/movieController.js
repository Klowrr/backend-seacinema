const Movies = require("../models/movieModel.js");

module.exports = { 
    getMovies: async (req, res) =>{
        try {
            const movies = await Movies.find();
            res.json(movies);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    getMovieById: async(req, res) =>{
        res.json(res.movie);
    },
    createMovie: async(req, res) =>{
        const { title ,description, release_date, rating, age_rating, poster, price} = req.body;
        const movie = new Movies({
            title: title,
            description:description,
            release_date:release_date,
            rating:rating,
            age_rating:age_rating,
            poster:poster,
            price: price,
        });
        try {
            const newMovie = await movie.save();
            res.status(201).json({message: "Movie Created Successfuly"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    updateMovie: async(req, res) =>{
        const { title ,description, release_date, rating, age_rating, poster, price} = req.body;

        res.movie.title = title || res.movie.title;
        res.movie.description = description || res.movie.description;
        res.movie.release_date = release_date || res.movie.release_date;
        res.movie.rating = rating || res.movie.rating;
        res.movie.age_rating = age_rating || res.movie.age_rating;
        res.movie.poster = poster || res.movie.poster;
        res.movie.price = price || res.movie.price;
        try {
            await res.movie.save();
            res.status(200).json({message: "Movie updated successfuly"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    deleteMovie: async(req, res) =>{
        try {
            await res.movie.deleteOne();
            res.status(200).json({message: "Deleted Movie"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

