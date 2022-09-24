const { db } = require('../db')
const express = require('express');
const { CORS_URL, WEBSITES_PORT } = process.env
const app = express();
const morgan = require('morgan');
const routes = require('./routes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', CORS_URL);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', "GET, OPTIONS, PUT, DELETE");
    next();
})

app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes) 


app.get('/error', (req, res) => {
    res.send('Cannot be found')
})

app.get('*' , ( req, res) => {
    res.redirect('/error')
})
// para que machee con todo y debe ser el último endpoint

db.sync({ alter: true }).then(() => {
  app.listen(WEBSITES_PORT, () => {
    console.log(`%s listening at ${WEBSITES_PORT}`);
  })
}); 

//sync all tables to db
// alter: true ==> agrega nuevos cambios
// force: true ==> dropea todos los datos
// {} (nada) ==> crea la tabla si no existe o no hace nada si ya existe


module.exports = app