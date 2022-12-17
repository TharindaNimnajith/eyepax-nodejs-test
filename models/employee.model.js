const mongoose = require('mongoose')

const {employeeStatus} = require('../utils/enums.utils')
const {validateEmail} = require('../utils/validations.utils')

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required.',
    trim: true,
    maxLength: 150
  },
  email: {
    type: String,
    required: 'Email is required.',
    unique: true,
    trim: true,
    maxLength: 75,
    lowercase: true,
    validate: [
      validateEmail,
      'Email is invalid.'
    ]
  },
  profile_picture: {
    type: String
  },
  status: {
    type: String,
    enum: employeeStatus,
    required: 'Status is required.',
    trim: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'modified_at'
  },
  collection: 'Employee'
})

module.exports = mongoose.model('Employees', EmployeeSchema)
