// import Movies from "../models/MovieModel.js";
const Movies = require("../models/movies.js");
module.exports = { 
    getMovies: async (req, res) =>{
        try {
            const movies = await Movies.find();
            res.json(movies);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },
    getMovieById: async(req, res) =>{
        try {
            const movies = await Movies.findOne({
                where:{
                    uuid: req.params.id
                }
            });
            if(!movies) return res.status(404).json({msg: "Data tidak ditemukan"});
            let response;
            response = await Movies.findOne({
                attributes:['uuid','title','description','release_date','rating','age_rating','poster','price'],
                where:{
                    uuid: movies.uuid
                },
            });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },
    createMovie: async(req, res) =>{
        const {title,description,release_date,rating,age_rating,poster, price} = req.body;
        try {
            await Movies.create({
                title: title,
                description:description,
                release_date:release_date,
                rating:rating,
                age_rating:age_rating,
                poster:poster,
                price: price,
            });
            res.status(201).json({msg: "Movie Created Successfuly"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },
    updateMovie: async(req, res) =>{
        try {
            const movie = await Movies.findOne({
                where:{
                    uuid: req.params.id
                }
            });
            if(!movie) return res.status(404).json({msg: "Data tidak ditemukan"});
            const {title, price} = req.body;
            await Movies.update({title, price},{
                where:{
                    uuid: movie.uuid
                }
            });
            res.status(200).json({msg: "Movie updated successfuly"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    },
    deleteMovie: async(req, res) =>{
        try {
            const movie = await Movies.findOne({
                where:{
                    uuid: req.params.id
                }
            });
            if(!movie) return res.status(404).json({msg: "Data tidak ditemukan"});
            await Movies.destroy({
                where:{
                    uuid: movie.uuid
                }
            });
            res.status(200).json({msg: "Product deleted successfuly"});
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}
