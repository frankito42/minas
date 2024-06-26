import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import rutaLogin from './rutas/login.js';
import mongoAtlasDB from './db.js';
// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');
 
// Configura la carpeta publica
app.use(express.static('public'));

await mongoAtlasDB()


// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// Rutas

app.get('/inicio', (req, res) => {
  res.render('cargas'); // Renderiza about.ejs
});

app.use(rutaLogin)

// Puerto de escucha
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});


