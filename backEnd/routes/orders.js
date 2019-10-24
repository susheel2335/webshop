'use strict';

const db = require('./../connection'); // This connection uses mysql-promise
const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).send(req.body);
});

module.exports = router;