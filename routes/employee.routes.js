const express = require('express')

const EmployeeController = require('../controllers/employee.controller')

const router = express.Router()

router.post('/employees', EmployeeController.addEmployee)

module.exports = router
