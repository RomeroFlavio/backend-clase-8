const express = require('express');
const { json, urlencoded } = express;
const app = express();
const router = require('./src/moduls/rutas');

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/api/productos', router);

const server = app.listen(8080, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});