const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT


//Handlerbars
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');
// Servir contenido estático
app.use( express.static('public') );


app.get('/', (req, res) =>{
    res.render('home', {
        name: 'Angel',
        tittle: 'Curso de Node'
    });
    //res.sendFile(__dirname + '/public/index.html');
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Angel',
        tittle: 'Curso de Node'
    });
    //res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Angel',
        tittle: 'Curso de Node'
    });
    //res.sendFile(__dirname + '/public/elements.html');
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

app.listen( port, () => {
    console.log(`El puerto está escuchando en http://localhost:${port}`);
})