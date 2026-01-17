// Simulating a database with an array
// This data resets if the server restarts
let employees = [
    { id: 1, name: "Alice Johnson", role: "Developer", department: "IT" },
    { id: 2, name: "Bob Smith", role: "Manager", department: "HR" },
    { id: 3, name: "Charlie Brown", role: "Designer", department: "Marketing" }
];

module.exports = employees;