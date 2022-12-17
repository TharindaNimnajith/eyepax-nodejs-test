# Eyepax Node.js Test

## Instructions

1. Clone the GitHub repository.
2. Run `npm install` in the root directory of the project to install dependencies.
3. Run `npm start` in the root directory of the project ro run the project.

## API Documentation

### Add Employee

POST http://localhost:5000/employees/employees

Request body example:

```
{
    "name": "Tharinda",
    "email": "tharinda@gmail.com",
    "profile_picture": "",
    "status": "Active"
}
```

### Get All Employees

GET http://localhost:5000/employees/employees

### Get Employee by ID

GET http://localhost:5000/employees/employees/:id

Example:

```
http://localhost:5000/employees/employees/639d9b526bdb1a0a42c6cf22
```

### Delete Employee by ID

DELETE http://localhost:5000/employees/employees/:id

Example:

```
http://localhost:5000/employees/employees/639d9b526bdb1a0a42c6cf22
```

### Update Employee by ID

PUT http://localhost:5000/employees/employees/:id

Example:

```
http://localhost:5000/employees/employees/639d9b526bdb1a0a42c6cf22
```

Request body example:

```
{
    "name": "Tharinda Rajapaksha",
    "email": "tharindarajapaksha@gmail.com",
    "profile_picture": "",
    "status": "Deleted"
}
```
