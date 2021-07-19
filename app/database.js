const mongoose = require('mongodb');

const url = 'mongodb://localhost:27017/tasks'; 

mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(db => console.log("Database is connected"))
  .catch(err=> console.log(err));
