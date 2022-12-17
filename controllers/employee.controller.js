const EmployeeModel = require('../models/employee.model')

const addEmployee = async (req, res) => {
  let {
    name,
    email,
    status
  } = req.body

  const newEmployee = new EmployeeModel({
    name,
    email,
    status
  })

  try {
    await newEmployee.save()
    console.log('New employee added successfully.')
    res.status(201).send({
      status: 201,
      message: 'New employee added successfully.'
    })
  } catch (error) {
    console.error(error)
    res.status(400).send({
      status: 400,
      message: error
    })
  }
}

exports.addEmployee = addEmployee
