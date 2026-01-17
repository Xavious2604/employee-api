# 🏢 Employee Management API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Azure SQL](https://img.shields.io/badge/Azure_SQL-0089D6?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![Azure App Service](https://img.shields.io/badge/Azure_App_Service-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)

A robust RESTful API for managing employee data with full CRUD operations. Built with **Node.js**, **Express.js**, and **Azure SQL Database**, and deployed on **Azure App Service**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Deployment Status](#-deployment-status)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Azure Deployment](#-azure-deployment-workflow)
- [Local Setup](#-local-setup-guide)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

## ✨ Features

- **CRUD Operations**: Create, Read, Update, and Delete employee records
- **RESTful Architecture**: Clean and intuitive API design
- **Cloud-Native**: Fully deployed on Microsoft Azure
- **Secure**: Environment-based configuration for sensitive credentials
- **Scalable**: Hosted on Azure App Service with Azure SQL Database backend
- **MVC Pattern**: Organized code structure following best practices

---

## ⚠️ Deployment Status

**Current Status:** 🔴 **Offline (Cost Optimization)**

> **Note:** This project was successfully deployed and tested on Azure Cloud. The live deployment has been paused to avoid ongoing costs associated with Azure SQL Database and App Service. 
>
> **You can:**
> - View the [Screenshots](#-screenshots) section to see the working application
> - Follow the [Local Setup Guide](#-local-setup-guide) to run it on your machine
> - Check the [Azure Deployment](#-azure-deployment-workflow) section to understand the cloud architecture

---

## 🛠️ Tech Stack

**Backend:**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **mssql** - Microsoft SQL Server client for Node.js

**Database:**
- **Azure SQL Database** - Managed relational database service

**Cloud Infrastructure:**
- **Azure App Service** - PaaS for hosting web applications
- **Azure SQL Server** - Database server management

**Development Tools:**
- **Postman** - API testing
- **Visual Studio Code** - Code editor
- **Git & GitHub** - Version control

---

## 📂 Project Structure
```
EMPLOYEE-API/
│
├── src/
│   ├── controllers/
│   │   └── employeeController.js    # Business logic for employee operations
│   │
│   ├── models/
│   │   └── employeeModel.js         # Database queries and schema
│   │
│   ├── routes/
│   │   └── employeeRoutes.js        # API route definitions
│   │
│   └── app.js                       # Express app configuration
│
├── index.js                         # Application entry point
├── package.json                     # Dependencies and scripts
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

**Architecture Pattern:** MVC (Model-View-Controller)

---

## 🔌 API Endpoints

| HTTP Method | Endpoint | Description | Request Body |
|------------|----------|-------------|--------------|
| `GET` | `/api/employees` | Retrieve all employees | None |
| `GET` | `/api/employees/:id` | Get employee by ID | None |
| `POST` | `/api/employees` | Create new employee | JSON (name, position, salary, etc.) |
| `PUT` | `/api/employees/:id` | Update employee details | JSON (fields to update) |
| `DELETE` | `/api/employees/:id` | Delete employee | None |

### Example Request (POST):
```json
{
  "name": "John Doe",
  "position": "Software Engineer",
  "department": "IT",
  "salary": 75000,
  "email": "john.doe@company.com"
}
```

### Example Response (GET):
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "position": "Software Engineer",
      "department": "IT",
      "salary": 75000,
      "email": "john.doe@company.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

## ☁️ Azure Deployment Workflow

### 1. **Azure SQL Database Setup**

1. Created **Azure SQL Server** and **Database** instance via Azure Portal
2. Configured firewall rules:
   - Added Azure App Service IP addresses
   - Whitelisted local development IP
3. Created `Employees` table with appropriate schema
4. Secured connection strings in Azure Key Vault (or App Service Configuration)

### 2. **Azure App Service Deployment**

1. Created **Linux-based App Service Plan** (B1 tier)
2. Deployed Node.js application using:
   - **GitHub Actions** for CI/CD
   - Direct deployment from Visual Studio Code
3. Configured **Application Settings** (Environment Variables):
   - `DB_USER`, `DB_PASSWORD`, `DB_SERVER`, `DB_NAME`
4. Enabled **Application Insights** for monitoring and logging

### 3. **Security Best Practices**

- No hardcoded credentials in source code
- Environment variables stored in Azure App Service Configuration
- SQL Server firewall configured with minimal required access
- HTTPS enforced for all API requests

---

## 💻 Local Setup Guide

Follow these steps to run the project on your local machine:

### Prerequisites

- **Node.js** (v14 or higher) installed
- **Azure SQL Database** or local SQL Server instance
- **Git** installed

### Installation Steps

**1. Clone the Repository**
```bash
git clone https://github.com/Xavious2604/employee-api.git
cd employee-api
```

**2. Install Dependencies**
```bash
npm install
```

**3. Configure Environment Variables**

Create a `.env` file in the root directory:
```env
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_SERVER=your_server.database.windows.net
DB_NAME=your_database_name
DB_PORT=1433

PORT=3000
NODE_ENV=development
```

**4. Set Up Database**

Run this SQL script to create the employees table:
```sql
CREATE TABLE Employees (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    position NVARCHAR(100),
    department NVARCHAR(100),
    salary DECIMAL(10, 2),
    email NVARCHAR(100),
    created_at DATETIME DEFAULT GETDATE()
);
```

**5. Start the Server**
```bash
# Using Node
node index.js

# OR using Nodemon (if installed)
npm run dev
```

**6. Test the API**

The server will run at `http://localhost:3000`

Test with Postman or cURL:
```bash
# Get all employees
curl http://localhost:3000/api/employees

# Create new employee
curl -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","position":"Manager","salary":85000}'
```

---

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DB_USER` | Database username | `admin` |
| `DB_PASSWORD` | Database password | `SecurePass123!` |
| `DB_SERVER` | SQL Server hostname | `myserver.database.windows.net` |
| `DB_NAME` | Database name | `EmployeeDB` |
| `DB_PORT` | SQL Server port | `1433` |
| `PORT` | Application port | `3000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

---

## 📸 Screenshots

> **Since the live deployment is currently offline, here are screenshots demonstrating functionality:**

### API Testing in Postman

**GET Request - Retrieve All Employees:**

![Postman GET Request](https://github.com/Xavious2604/employee-api/blob/main/uploads/Get.PNG)

**POST Request - Create New Employee:**

![Postman POST Request](https://github.com/Xavious2604/employee-api/blob/main/uploads/Post.PNG)

**Delete Request - Delete Exsisting Employee:**

![Postman DELETE Request](https://github.com/Xavious2604/employee-api/blob/main/uploads/Delete.PNG)

---

## 🚀 Future Enhancements

- [ ] Add authentication and authorization (JWT)
- [ ] Implement pagination for large datasets
- [ ] Add data validation and error handling middleware
- [ ] Create comprehensive unit and integration tests
- [ ] Add API documentation with Swagger/OpenAPI
- [ ] Implement caching with Redis
- [ ] Add logging with Winston or Morgan

---

## 👤 Author

**Xavious2604**

- GitHub: [@Xavious2604](https://github.com/Xavious2604)
- Project Link: [https://github.com/Xavious2604/employee-api](https://github.com/Xavious2604/employee-api)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Microsoft Azure for cloud infrastructure
- Node.js and Express.js communities
- All contributors and supporters of this project

---

**⭐ If you find this project helpful, please consider giving it a star!**
