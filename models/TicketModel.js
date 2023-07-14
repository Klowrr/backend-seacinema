import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Transactions from "./TransactionModel.js";

const {DataTypes} = Sequelize;

const Ticket = db.define('ticket',{
  ticketCode:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        notEmpty: true
    }
  },
  transactionId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
          notEmpty: true,
      }
  },
  seat:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
          notEmpty: true
      }
  }
  },{
  freezeTableName: true
  });

Ticket.hasMany(Transactions);
Transactions.belongsTo(Ticket, {foreignKey: 'transactionId'});

export default Ticket;
