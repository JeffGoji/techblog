const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "jeffG",
    email: "appOwner@email.com",
    password: "password123",
  },
  {
    username: "jamesTK01",
    email: "capn101@enter.sf",
    password: "password123",
  },
  {
    username: "johnnyNm321",
    email: "jmrulez@thewebz.com",
    password: "password123",
  },
  {
    username: "loveNotwar512",
    email: "dbcooper77@twenty.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
