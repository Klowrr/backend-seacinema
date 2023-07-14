import Movies from "../models/MovieModel.js";

export const getMovies = async (req, res) =>{
    try {
        let response;
        response = await Movies.findAll({
            attributes:['uuid','title','description','release_date','rating','age_rating','poster','price']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getMovieById = async(req, res) =>{
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
}

export const createMovie = async(req, res) =>{
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
}

export const updateMovie = async(req, res) =>{
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
}

export const deleteMovie = async(req, res) =>{
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