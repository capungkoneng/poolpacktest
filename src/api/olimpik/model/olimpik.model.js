const Sequelize = require("sequelize");
const db = require("../../../../db_config/db");

const olympic = db.define(
  "olympic_winners",
  {
    id: {
      type: "integer",
      primaryKey: true,
      autoIncrement: true,
    },
    athlete: Sequelize.STRING,
    age: Sequelize.INTEGER,
    countryId: Sequelize.INTEGER,
    country_group: Sequelize.STRING,
    year: Sequelize.INTEGER,
    date: Sequelize.DATE,
    sportId: Sequelize.INTEGER,
    gold: Sequelize.INTEGER,
    silver: Sequelize.INTEGER,
    bronze: Sequelize.INTEGER,
    total: Sequelize.INTEGER,
  },{
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = {olympic}