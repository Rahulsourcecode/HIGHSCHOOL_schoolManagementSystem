const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.DBURL;

function dbConnect() {
  return mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = dbConnect;
