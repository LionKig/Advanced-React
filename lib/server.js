//import express from 'express' ;
//import config from './config' ;
const express = require('express' ) ;
const config = require('./config') ;
import serverRender from './lib/renderers/server' ;

const app = express() ;

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const initialContent = server();
    res.render('index', { ...initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});