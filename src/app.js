const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(cors());                 // Allow requests from other domains
app.use(express.json());         // Parse JSON bodies (for POST/PUT requests)

// Routes
app.use('/api/employees', employeeRoutes);

// Health Check Route (Good for testing if Azure deployment succeeded)
app.get('/', (req, res) => {
    res.send('Employee Management API is running!');
});

module.exports = app;