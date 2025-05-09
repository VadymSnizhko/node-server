const express = require('express');
//import express from 'express';
const app = express();

app.use(express.json()); // щоб читати JSON з тіла POST

let tableData = []; // сюди зберігаємо дані

// POST — приймаємо дані з GAS
app.post('/upload', (req, res) => {
  tableData = req.body;
  console.log('Отримано:', tableData);
  res.json({ status: 'ok' });
});

// GET — відображаємо дані
app.get('/', (req, res) => {
  res.send(`
    <h2>Отримані дані з таблиці:</h2>
    <pre>${JSON.stringify(tableData, null, 2)}</pre>
  `);
});

module.exports = app; // Для Vercel
//export default app;
