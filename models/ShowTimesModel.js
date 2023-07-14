import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Movies from "./MovieModel.js";
const { DataTypes } = Sequelize;

const ShowTimes = db.define(
  "showtimes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
   },
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    time:{
        type: DataTypes.TIME,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    seats: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Movies.hasMany(ShowTimes,{
    as: "showtimes",
    foreignKey: "movieId",
  });
ShowTimes.belongsTo(Movies, { foreignKey: "movieId" });

export default ShowTimes;
