const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app

const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://mona:Saintobi13@cluster0.zrs5stx.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));







app.get('/about', (req, res) => {
    res.render('about', { title : 'About'});
   });

   
// blogRoutes
app.use(blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title : '404' });  // 404 status code
}) 