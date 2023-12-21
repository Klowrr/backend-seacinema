const Movies = require("../models/movieModel.js");
const cloudinary = require("../utils/cloudinary.js");
const streamifier = require('streamifier');
const sharp = require('sharp');
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
        try {
            const movie = await Movies.findById(req.params.id);
            if(!movie) return res.status(404).json({message: "Movie not found"});
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    createMovie: async(req, res) =>{
        const { title ,description, release_date, rating, age_rating, price} = req.body;
        const stream = await cloudinary.uploader.upload_stream({ folder: "seacinema" }, async (err, result) => {
                if (err) return res.status(500).json({message: err.message});
                const movie = new Movies({
                    title: title,
                    description:description,
                    release_date:release_date,
                    rating:rating,
                    age_rating:age_rating,
                    poster:result.secure_url,
                    price: price,
                });
                try {
                    await movie.save();
                    res.status(201).json({message: "Movie Created Successfuly"});
                } catch (error) {
                    res.status(400).json({message: error.message});
                }
            }
        )
        if(req.file.size > 1000000){ // if 1mb compress to 40% quality
            const resizefile = await sharp(req.file.buffer).jpeg({quality: 40}).toBuffer();
            streamifier.createReadStream(resizefile).pipe(stream);
        }else{
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        }
    },
    updateMovie: async(req, res) =>{
        const { title ,description, release_date, rating, age_rating, poster, price} = req.body;
        const movie = await Movies.findById(req.params.id);
        if (!movie) return res.status(404).json({message: "Movie not found"});
        movie.title = title || movie.title;
        movie.description = description || movie.description;
        movie.release_date = release_date || movie.release_date;
        movie.rating = rating || movie.rating;
        movie.age_rating = age_rating || movie.age_rating;
        movie.poster = poster || movie.poster;
        movie.price = price || movie.price;
        try {
            const updateMovie = await movie.save();
            res.status(200).json({message: "Movie updated successfuly"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    deleteMovie: async(req, res) =>{
        try {
            const movie = Movies.findById(req.body.movie_id);
            await movie.deleteOne();
            res.status(200).json({message: "Deleted Movie"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

