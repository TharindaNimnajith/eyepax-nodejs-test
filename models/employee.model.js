const mongoose = require('mongoose')

const {EmployeeStatus} = require('../config/enums.config')

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    maxLength: 150
  }
}, {
  timestamps: true,
  collection: 'Employee'
})

module.exports = mongoose.model('Employees', EmployeeSchema)
