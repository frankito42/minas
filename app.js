import express from 'express';
const app = express();

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configura la carpeta publica
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.render('login'); // Renderiza index.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // Renderiza about.ejs
});

// Puerto de escucha
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
