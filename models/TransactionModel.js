import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Movies from "./MovieModel.js";
import Users from "./UserModel.js";
import ShowTimes from "./ShowTimesModel.js";

const {DataTypes} = Sequelize;

const Transactions = db.define('transactions',{
  transactionCode:{
    type: DataTypes.STRING,
    defaultValue:DataTypes.UUIDV4,
    allowNull: false,
    validate:{
        notEmpty: true
    }
  },
  userId:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  movieId:{
      type: DataTypes.STRING,
      allowNull: true,
  },
  showTimeId:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  totalCost:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
        notEmpty: true
    }
  },
  bookingSeat:{
    type: DataTypes.JSON,
    allowNull: true,
  },
  type:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        notEmpty: true
    }
  },
  status:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        notEmpty: true
    }
  }
  },{
  freezeTableName: true
});

Users.hasMany(Transactions, {
  as: "transactions",
  foreignKey: "userId",
});
Transactions.belongsTo(Users, {foreignKey: 'userId'});

Movies.hasMany(Transactions, {
  as: "transactions",
  foreignKey: "movieId",
});
Transactions.belongsTo(Movies, {foreignKey: 'movieId'});

ShowTimes.hasMany(Transactions, {
  as: "transactions",
  foreignKey: "showTimeId",
});
Transactions.belongsTo(ShowTimes,{foreignKey:'showTimeId'})

export default Transactions;
