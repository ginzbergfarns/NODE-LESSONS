//Node modules
const http = require('http');
const path = require('path');
//3d party modules
const express = require('express');
const bodyParser = require('body-parser');

//app
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes.routes);
app.use('/', shopRoutes);
app.use((req, res, next) => {
   res.status(404).render('404', {pageTitle: '404'});
});

app.listen(3001);

// Vanilla node.js examples
// const routes = require('./routes');
//
// const server = http.createServer(routes);
// server.listen(3000);