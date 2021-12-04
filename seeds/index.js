const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-------Begin Seeding--------");
  await seedUsers();
  console.log("\n----------USER SEEDS--------\n");
  await seedPosts();
  console.log("\n----------POST SEEDS--------\n");
  await seedComments();
  console.log("\n----------COMMENT SEEDS--------\n");
  process.exit(0);
};

seedAll();
