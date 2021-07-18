const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
// Aquí tenemos las rutas de la api de express
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
// Donde montamos nuestra app de react, en el index.html de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Starting server
app.listen( app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});
