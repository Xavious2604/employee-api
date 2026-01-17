# 🏢 Employee Management API

![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Azure SQL](https://img.shields.io/badge/Azure_SQL-00BEF2?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)

A robust RESTful API designed to handle employee data management operations including creation, retrieval, updates, and deletion (CRUD). The system was architected for the **Microsoft Azure** cloud ecosystem, utilizing **Azure App Service** for the backend and **Azure SQL Database** for relational data storage.

---

## ⚠️ Deployment Status
**Current Status:** 🔴 *Offline (Cost Optimization)*

> **Note:** This project was successfully deployed and fully operational on Azure. However, the live instance has been paused to avoid incurring ongoing cloud costs for the SQL Database and App Service Plan. 
>
> Please refer to the **Screenshots** section below to see the successful deployment and API functionality, or follow the **Local Setup Guide** to run it on your machine.

---

## 📸 Proof of Deployment (Screenshots)
Since the live server is currently offline, here are snapshots of the working application during deployment:

### 1. Swagger UI (Live on Azure)
*(Add a screenshot here of your Swagger UI running on the azurewebsites.net URL)*
`![Swagger UI Running on Azure](path-to-your-image.png)`

### 2. Postman API Test
*(Add a screenshot here of a successful Postman request)*
`![Postman Request](path-to-your-image.png)`

---

## 🛠️ Tech Stack
* **Framework:** .NET Core Web API (C#)
* **Database:** Azure SQL Database
* **Hosting:** Azure App Service
* **ORM:** Entity Framework Core
* **Tools:** Swagger UI, Postman, Visual Studio

---

## ☁️ How I Hosted This on Azure

This project documents the journey of deploying a backend API to the cloud. Here is the architecture and deployment workflow used:

### 1. Azure SQL Database Setup
* Created an **Azure SQL Server** instance.
* Deployed a new **SQL Database** within the Standard tier.
* Configured firewall rules to allow Azure services to access the data.
* Updated the connection string to point to the remote Azure DB instance.

### 2. Azure App Service (Backend Hosting)
* Created an **App Service Plan** to define the compute resources.
* Deployed the API using **Azure App Service**.
* **Environment Variables:** Configured the SQL Connection String inside the App Service "Configuration" blade to keep credentials secure and separate from the codebase.

### 3. Deployment Pipeline
* The code was deployed directly via Visual Studio Publish / GitHub Actions.
* Ensured the API could communicate effectively with the SQL database in the cloud environment.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/employees` | Retrieve all employees |
| `GET` | `/api/employees/{id}` | Get specific employee details |
| `POST` | `/api/employees` | Create a new employee record |
| `PUT` | `/api/employees/{id}` | Update an existing employee |
| `DELETE` | `/api/employees/{id}` | Remove an employee |

---

## 💻 Local Setup Guide

If you want to run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Xavious2604/employee-api.git](https://github.com/Xavious2604/employee-api.git)
    ```
2.  **Configure Database**
    * Update `appsettings.json` with your local SQL Server connection string.
    * Run migrations (if using EF Core):
    ```bash
    dotnet ef database update
    ```
3.  **Build and Run**
    ```bash
    dotnet build
    dotnet run
    ```
4.  **Test**
    * Open your browser to `https://localhost:5001/swagger` to test the API via Swagger UI.

---

## 📌 Key Learnings
* **Cloud Architecture:** Connecting a cloud-hosted Web API to a managed cloud database.
* **Security:** Managing connection strings securely using Azure Configuration variables rather than hard-coding them.
* **Cloud Cost Management:** Understanding Azure pricing tiers (DTUs vs vCores) and managing resources to balance performance and budget.

---

## 👤 Author
**Xavious2604** * [GitHub Profile](https://github.com/Xavious2604)
