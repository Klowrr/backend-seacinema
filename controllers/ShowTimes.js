import ShowTimes from "../models/ShowTimesModel.js"

export const getShowTimes = async (req, res) =>{
  try {
      let response;
      response = await ShowTimes.findAll({
          attributes:['id','movieId','time','date','seats'],
      });
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const getShowTimesByIdMovie = async (req,res) => {
  try {
    const showTimes = await ShowTimes.findOne({
      where:{
          movieId: req.params.id
      }
    });
    if(!showTimes) return res.status(404).json({msg: "Data tidak ditemukan"});
    let response;
    response = await ShowTimes.findAll({
      attributes:['id','movieId','time','date','seats'],
      where:{
        movieId:showTimes.movieId
      }
    })
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

export const getShowTimesById = async (req,res) => {
  try {
    const showTimes = await ShowTimes.findOne({
      where:{
        movieId: req.params.id,
        id: req.params.shid
    }
    })
    if(!showTimes) return res.status(404).json({msg: "Data tidak ditemukan"});
    let response;
    response = await ShowTimes.findAll({
      attributes:['id','movieId','time','date','seats'],
      where:{
        id:showTimes.id,
        movieId:showTimes.movieId
      }
    })
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}


export const createShowTimes = async(req,res) => {
  const {movieId,time,date} = req.body;
  try {
    await ShowTimes.create({
      movieId:movieId,
      time:time,
      date:date,
      seats:generateSeats()
    })
    res.status(201).json({msg: "ShowTimes Created Successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}
export const generateSeats = () => {
  const seats = {}
  const alphabets = ["A", "B", "C", "D", "E", "F", "G"]
  alphabets.forEach((alphabet) => {
    for (let i = 1; i <= 8; i++) {
      seats[`${alphabet}${i}`] = false;
    }
  });

  return seats;
}

export const updateShowTimes = async(req,res)=>{
  try {
    const showtimes = await ShowTimes.findOne({
      where:{
        movieId: req.params.movieId
      }
    })
    if(!showtimes) return res.status(404).json({msg: "Data tidak ditemukan"});
      const {date, time} = req.body;
      await ShowTimes.update({date, time},{
          where:{
              movieId: showtimes.movieId
          }
      });
    res.status(200).json({msg: "Product updated successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

export const updateSeats = async(req,res)=>{
  try {
    const showtimes = await ShowTimes.findOne({
      where:{
        movieId: req.params.id,
        id: req.params.shid
      }
    })
    if(!showtimes) return res.status(404).json({msg: "Data tidak ditemukan"});
      const {seats} = req.body;
      await ShowTimes.update({seats},{
          where:{
              id: showtimes.id
          }
      });
    res.status(200).json({msg: "updated successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}