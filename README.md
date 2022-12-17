### Instructions

1. Clone the GitHub repository.
2. Run `npm install` in the root directory of the project to install dependencies.
3. Run `npm start` in the root directory of the project ro run the project.

### API Documentation

POST http://localhost:5000/employees/employees

```
Request body

{
    "name": "Tharinda",
    "email": "tharinda@gmail.com",
    "status": "Active"
}
```

GET http://localhost:5000/employees/employees

GET http://localhost:5000/employees/employees/:id

```
Eg: http://localhost:5000/employees/employees/639d9b526bdb1a0a42c6cf22
```

DELETE http://localhost:5000/employees/employees/:id

```
Eg: http://localhost:5000/employees/employees/639d9b526bdb1a0a42c6cf22
```

PUT http://localhost:5000/employees/employees/:id

```
Eg: http://localhost:5000/employees/employees/639d9b526bdb1a0a42c6cf22
```

```
Request body

{
    "name": "Tharinda Rajapaksha",
    "email": "tharindarajapaksha@gmail.com",
    "status": "Deleted"
}
```
