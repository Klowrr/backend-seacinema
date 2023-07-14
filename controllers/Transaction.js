import Transactions from "../models/TransactionModel.js";

export const createTransaction = async(req,res) => {
  const {userId,totalCost,type,bookingSeat,status} = req.body;
  try {
    await Transactions.create({
      userId:userId,
      movieId:req.params.id,
      showTimeId:req.params.shid,
      totalCost:totalCost,
      type:type,
      bookingSeat:bookingSeat,
      status:status
    })
    res.status(201).json({msg: "Transaction Created Successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}
export const createTransactionTopUp = async(req,res) => {
  const {totalCost,type,status} = req.body;
  try {
    await Transactions.create({
      userId:req.params.id,
      totalCost:totalCost,
      type:type,
      status:status
    })
    res.status(201).json({msg: "Transaction Created Successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

export const getTransaction = async (req, res) =>{
  try {
      let response;
      response = await Transactions.findAll({
          attributes:['transactionCode','userId','movieId','showTimeId','totalCost','bookingSeat','status'],
      });
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const getTransactionByUserId = async (req,res) => {
  try {
    const transaction = await Transactions.findOne({
      where:{
          userId: req.params.id,
      }
    });
    if(!transaction) return res.status(404).json({msg: "Data tidak ditemukan"});
    let response;
    response = await Transactions.findAll({
      attributes:['id','transactionCode','userId','movieId','type','showTimeId','totalCost','bookingSeat','status','createdAt'],
      where:{
        userId:transaction.userId,

      },
      order: [['id','DESC']],
    })
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

export const updateTransaction = async(req,res) => {
  try {
    const transaction = await Transactions.findOne({
      where:{
        id:req.params.id
      }
    })
    if(!transaction) return res.status(404).json({msg:"Data tidak ditemukan"});
    const {status} = req.body
    await Transactions.update({status},{
      where:{
        id:transaction.id
      } 
    })
    res.status(200).json({msg: "Transaction updated successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message});
    
  }
}