const EmployeeModel = require('../models/employee.model')

const addEmployee = async (req, res) => {
  let {
    name,
    email,
    profile_picture,
    status
  } = req.body

  const employee = new EmployeeModel({
    name,
    email,
    profile_picture,
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
    profile_picture,
    status
  } = req.body

  employee = await EmployeeModel.findById(id)

  if (employee) {
    employee.name = name
    employee.email = email
    employee.profile_picture = profile_picture
    employee.status = status
    try {
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
  } else {
    res.status(404).send({
      status: 404
    })
  }
}

const deleteEmployee = async (req, res) => {
  let employee

  const {
    id
  } = req.params

  employee = await EmployeeModel.findById(id)

  if (employee) {
    await employee.remove()
    res.status(202).send({
      status: 202
    })
  } else {
    res.status(404).send({
      status: 404
    })
  }
}

const getEmployee = async (req, res) => {
  let employee

  const {
    id
  } = req.params

  employee = await EmployeeModel.findById(id)

  if (employee) {
    res.status(200).send({
      status: 200,
      data: employee
    })
  } else {
    res.status(404).send({
      status: 404
    })
  }
}

const getEmployeeList = async (req, res) => {
  let employees = await EmployeeModel.find()

  if (!Array.isArray(employees) || !employees.length) {
    res.status(404).send({
      status: 404
    })
  } else {
    res.status(200).send({
      status: 200,
      data: employees
    })
  }
}

exports.addEmployee = addEmployee
exports.updateEmployee = updateEmployee
exports.deleteEmployee = deleteEmployee
exports.getEmployee = getEmployee
exports.getEmployeeList = getEmployeeList
