const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    const formatted = employees.map(e => ({
      employee_id: e._id,
      first_name: e.first_name,
      last_name: e.last_name,
      email: e.email,
      position: e.position,
      salary: e.salary,
      date_of_joining: e.date_of_joining,
      department: e.department
    }));
    res.status(200).json(formatted);
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, message: errors.array()[0].msg });
  }
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({
      message: 'Employee created successfully.',
      employee_id: employee._id
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

