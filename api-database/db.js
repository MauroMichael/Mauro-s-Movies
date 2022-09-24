require('dotenv').config();
const sequelize = require("sequelize");
const { Sequelize, Model, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  // const db = new Sequelize(`postgres://postgres:Busc0Labur0@db.hohikphqqbsqcsafsyzh.supabase.co:6543/postgres`, {
    logging: false  //no mostrar comandos sql en terminal
});

db.authenticate() //para checkear conección.
  .then(() => console.log("ORMapping connect correctly"))
  .catch((e) => console.log("ups.. problems"));

class Favs extends Model {}

Favs.init(
  {
    favId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    }
  },
  { 
    sequelize: db, 
    modelName: "favs",
    timestamps: false
  }
);

module.exports = {
  Favs,
  db
}

                            
                                  
                             
                                 
                                  