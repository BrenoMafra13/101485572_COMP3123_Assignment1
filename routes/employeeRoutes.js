const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employees', employeeController.getEmployees);
router.post('/employees', (req, res) => res.send('create employee ok'));
router.get('/employees/:eid', (req, res) => res.send('get employee by id ok'));
router.put('/employees/:eid', (req, res) => res.send('update employee ok'));
router.delete('/employees', (req, res) => res.send('delete employee ok'));

module.exports = router;

