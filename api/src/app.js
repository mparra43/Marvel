const express= require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const server= express();

require('./db.js');

server.use(morgan('dev'));


server.use(cors())


server.use(express.json() );

// rutas

server.use('/marvel/auth', require('./routes/auth') );
server.use('/marvel', require('./routes/marvel') );




module.exports = server;