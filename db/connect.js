const mongoose = require("mongoose");

uri = process.env.MONGODB_URL;

const connectDB = () => {
  mongoose.set("strictQuery", true);
  console.log("DB Connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
