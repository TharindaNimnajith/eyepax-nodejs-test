const express = require('express')

const EmployeeController = require('../controllers/employee.controller')

const router = express.Router()

router.post('/employees', EmployeeController.addEmployee)
router.put('/employees', EmployeeController.updateEmployee)
router.delete('/employees', EmployeeController.deleteEmployee)
router.get('/employees/:email', EmployeeController.getEmployee)
router.get('/employees', EmployeeController.getEmployeeList)

module.exports = router
