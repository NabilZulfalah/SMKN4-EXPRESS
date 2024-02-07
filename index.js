require('dotenv').config();
//Kata kunci const dalam JavaScript digunakan untuk mendeklarasikan variabel yang nilainya tidak dapat diubah setelah pertama kali diinisialisasi

const express = require('express');
const router = require('./routes/router');
const app = express();
const connect = require('./config/db');

connect();
const port = process.env.PORT || 3000;

//metode di Express.js yang digunakan untuk mendaftarkan middleware pada aplikasi Express

app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//     res.send('Halo Dunia!, namaku Nabil');
// })


//app.listen() adalah metode yang digunakan untuk memulai proses mendengarkan (listening) pada port tertentu pada server.

app.listen(port, console.log(`Server na keur jalan di port ${port}`));
