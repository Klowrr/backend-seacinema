import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import { v1 } from "uuid";

const {DataTypes} = Sequelize;

const Movies = db.define('movies',{
    uuid:{
        type: DataTypes.STRING,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    release_date:{
        type:DataTypes.STRING,
        allowNull:false,
        validateL:{
            notEmpty:true
        }
    },
    rating:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    age_rating:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    poster:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

export default Movies;