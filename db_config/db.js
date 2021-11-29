const dotenv = require("dotenv");
dotenv.config;

var Sequelize = require("sequelize");

var db = new Sequelize("poolpack_test", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  /**
   * Pakai socket path karena saya memakai mamp
   **/
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});

module.exports = db;
