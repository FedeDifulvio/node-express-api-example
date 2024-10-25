const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

app.get('/clientes', (req, res) => {
 

    var results = [{nombre: "Pedro", apellido: "garcia"}, {nombre: "Maria", apellido: "Perez"} ]

    res.json(results);

});


app.get('/proveedores', (req, res) => {
 

    var results = [{RazonSocial: "Optimus S.R.L", CUIL: "20-9086676-09"}, {RazonSocial: "Megatron", CUIL: "70-9000-80"} ]

    res.json(results);

});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
