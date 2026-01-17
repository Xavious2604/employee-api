const employees = require('../models/employeeModel');

// 1. Get All Employees
exports.getAllEmployees = (req, res) => {
    res.status(200).json({
        success: true,
        count: employees.length,
        data: employees
    });
};

// 2. Get Single Employee by ID
exports.getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    res.status(200).json({
        success: true,
        data: employee
    });
};

// 3. Create New Employee
exports.createEmployee = (req, res) => {
    const { name, role, department } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            success: false,
            message: "Please provide name and role"
        });
    }

    const newEmployee = {
        id: employees.length + 1, // Simple auto-increment
        name,
        role,
        department: department || 'General'
    };

    employees.push(newEmployee);

    res.status(201).json({
        success: true,
        message: "Employee created successfully",
        data: newEmployee
    });
};

// 4. Update Employee
exports.updateEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    const { name, role, department } = req.body;

    if (name) employee.name = name;
    if (role) employee.role = role;
    if (department) employee.department = department;

    res.status(200).json({
        success: true,
        message: "Employee updated",
        data: employee
    });
};

// 5. Delete Employee
exports.deleteEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    // Remove from array
    employees.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Employee deleted"
    });
};