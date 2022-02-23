'use strict'

require('dotenv').config();

const server =require('./src/server.js');

server.start(process.env.PORT || 3000);//if .env.port dedn't work will take 3000 port