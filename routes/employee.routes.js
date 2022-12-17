const express = require('express')

const EmployeeController = require('../controllers/employee.controller')

const router = express.Router()

router.post('/employees', EmployeeController.addEmployee)
router.put('/employees/:id', EmployeeController.updateEmployee)
router.delete('/employees/:id', EmployeeController.deleteEmployee)
router.get('/employees/:id', EmployeeController.getEmployee)
router.get('/employees', EmployeeController.getEmployeeList)

module.exports = router
