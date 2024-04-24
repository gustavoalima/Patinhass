const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o arquivo do banco de dados
const dbPath = path.join(__dirname, '..', 'db', 'patinhas.db');

// Rota para adicionar um agendamento
router.post('/', (req, res) => {
    const db = new sqlite3.Database(dbPath);
    const { cpf_cliente, nome_cliente, nome_animal, tipo_servico, data, horario, valor } = req.body;
    db.run('INSERT INTO agendamentos (cpf_cliente, nome_cliente, nome_animal, tipo_servico, data, horario, valor) VALUES (?, ?, ?, ?, ?, ?, ?)', [cpf_cliente, nome_cliente, nome_animal, tipo_servico, data, horario, valor], (err) => {
        db.close(); // Feche a conexão com o banco de dados após a operação
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).send('Appointment added successfully');
        }
    });
});

// Rota para listar todos os agendamentos
router.get('/', (req, res) => {
    const db = new sqlite3.Database(dbPath);
    db.all('SELECT * FROM agendamentos', (err, rows) => {
        db.close(); // Feche a conexão com o banco de dados após a operação
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

// Rotas para outras operações CRUD aqui...

module.exports = router;
