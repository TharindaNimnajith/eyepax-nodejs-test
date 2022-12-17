const EmployeeModel = require('../models/employee.model')

const addEmployee = async (req, res) => {
  let {
    name,
    email,
    status
  } = req.body

  const employee = new EmployeeModel({
    name,
    email,
    status
  })

  try {
    await employee.save()
    res.status(201).send({
      status: 201,
      data: employee
    })
  } catch (error) {
    console.error(error)
    res.status(400).send({
      status: 400,
      error: error
    })
  }
}

const updateEmployee = async (req, res) => {
  let employee

  const {
    id
  } = req.params

  const {
    name,
    email,
    status
  } = req.body

  try {
    employee = await EmployeeModel.findById(id)
    employee.name = name
    employee.email = email
    employee.status = status
    await employee.save()
    res.status(200).send({
      status: 200,
      data: employee
    })
  } catch (error) {
    console.error(error)
    res.status(400).send({
      status: 400,
      error: error
    })
  }
}

const deleteEmployee = async (req, res) => {
  let employee

  const {
    id
  } = req.params

  try {
    employee = await EmployeeModel.findById(id)
    await employee.remove()
    res.status(202).send({
      status: 202,
      data: employee
    })
  } catch (error) {
    console.error(error)
    res.status(404).send({
      status: 404,
      error: error
    })
  }
}

const getEmployee = async (req, res) => {
  let employee

  const {
    id
  } = req.params

  try {
    employee = await EmployeeModel.findById(id)
    res.status(200).send({
      status: 200,
      data: employee
    })
  } catch (error) {
    console.error(error)
    res.status(404).send({
      status: 404,
      error: error
    })
  }
}

const getEmployeeList = async (req, res) => {
  let employees

  try {
    employees = await EmployeeModel.find()
    res.status(200).send({
      status: 200,
      data: employees
    })
  } catch (error) {
    console.error(error)
    res.status(404).send({
      status: 404,
      error: error
    })
  }
}

exports.addEmployee = addEmployee
exports.updateEmployee = updateEmployee
exports.deleteEmployee = deleteEmployee
exports.getEmployee = getEmployee
exports.getEmployeeList = getEmployeeList
