const mongoose = require("mongoose");

async function connectToDb() {
  let connection = await mongoose.connect(process.env.MONGO_URI);
  console.log('connected to db');
  return connection;
}

module.exports = connectToDb