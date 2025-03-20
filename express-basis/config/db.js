const mongoose = require("mongoose");

async function connectToDb() {
  let connection = await mongoose.connect(
    "mongodb+srv://ridsuteri:admin123@cluster0.jpp3l.mongodb.net/test"
  );
  console.log('connected to db');
  return connection;
}

module.exports = connectToDb