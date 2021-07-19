const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/tasks";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .catch(err => console.log(err));

const db = mongoose.connection;

db.once("open", _ => {
  console.log("Database is connected to:", uri);
});

// to test the error stop mongod
db.on("error", err => {
  console.log(err);
});