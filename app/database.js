const mongoose = require('mongodb');

// Conexión URL (estas corriendo en local :D)
const url = 'mongodb://localhost/tasks'; 

const db = mongoose.connect( url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log("Database is connected"))
  .catch(err=> console.log(err));
