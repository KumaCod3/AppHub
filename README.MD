# AppHub

A simple and effective centralized dashboard and reverse proxy built with **Node.js** and **Express**. It allows you to access and manage all your local web services from a single web page.

---

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

---

## ✨ Features
- 🔀 **Centralized Access**: Map all your local services (ports, names, and icons) in one file.
- 🐳 **Docker Ready**: Includes a Dockerfile to easily containerize the application.
- 📄 **Static Page Serving**: Serves the main interface directly from the public folder.

## ⚙️ Prerequisites
Before running this project, ensure you have installed:
* **Node.js** (v14.x or higher recommended)
* **npm** (comes bundled with Node.js)
* **Docker** (Optional, if you want to run it as a container)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/KumaCod3/AppHub.git
cd AppHub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
1. Locate the file named `Example.env` in the root directory.
2. Rename it to `.env`:
```bash
mv Example.env .env
```
3. Open the new `.env` file and set the main port for this Hub:
```env
PORT=3000
```

---

## ⚙️ Configuration

To add or modify the services listed on your dashboard:
1. Open the file **`index.js`** (the engine of the app).
2. Locate the specific array used to store the services.
3. Edit or add objects containing the **ports**, **names**, and **icons** of the external apps you want to map.

---

## 🛠️ Running the Application

### Using Node.js
To start the server, simply run:
```bash
node index.js
```

Once the server is active, you can access the dashboard by navigating to:
**`http://localhost:PORT/pag.html`** *(where `PORT` is the value you specified in your `.env` file)*.

### Using Docker
If you prefer running it via Docker:
```bash
docker build -t apphub .
docker run -p PORT:PORT apphub *(where `PORT` is the value you specified in your `.env` file)*.
```

---

## 📂 Project Structure
```text
├── public/              # (Implicit) Folder containing static files
    ├── css/             # where you can find the style.css
	├──images/          # the app logos and icons
│   └── pag.html         # Main dashboard page
├── .gitignore           # Git ignore file
├── Dockerfile           # Docker configuration for containerization
├── Example.env          # Example environment variables
├── docker.com           # Docker-related notes or files
├── index.js             # Main server entry point and service config
├── package-lock.json    # Locked dependency tree
└── package.json         # Project metadata and dependencies
```

## 💻 Technologies Used
* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework to serve pages and manage routes.
* **Docker**: For easy deployment and containerization.

---
*Maintained by [KumaCod3](https://github.com/KumaCod3)*