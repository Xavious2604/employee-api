const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route: /api/employees
router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);

// Route: /api/employees/:id  (e.g., /api/employees/1)
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;