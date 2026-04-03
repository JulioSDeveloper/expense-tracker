# 💸 Expense Tracker App

Aplicación **fullstack** para la gestión de gastos personales, desarrollada con **Node.js, Express, MySQL y React**.

Permite a los usuarios **registrarse, autenticarse y gestionar sus gastos** de forma segura utilizando **JWT**.

---

# 🚀 Features

### 🔐 Autenticación

* Registro de usuarios
* Login con JWT
* Password hashing con bcrypt
* Rutas protegidas

### 💸 Gestión de gastos

* Crear gastos
* Obtener gastos del usuario autenticado
* Obtener un gasto específico
* Actualizar gastos
* Eliminar gastos
* Categorización de gastos

### 🧠 Backend

* Arquitectura en capas (Routes → Controllers → Services → Models)
* Middleware global de manejo de errores
* Validación de requests con Zod
* Autorización: cada usuario solo accede a sus datos

### 🎨 Frontend

* Login con persistencia de token (localStorage)
* Listado dinámico de gastos
* Creación de gastos en tiempo real
* Edición de gastos sin recargar la página
* Eliminación sin recargar la página
* Manejo de estado con React Hooks (`useState`, `useEffect`)

---

# 🧰 Tech Stack

### Backend

* Node.js
* Express
* MySQL
* JWT (jsonwebtoken)
* bcrypt
* Zod

### Frontend

* React
* Fetch API
* CSS

---

# 📁 Project Structure

```
expense-tracker
├── backend
│   └── src
│       ├── config
│       ├── controller
│       ├── middleware
│       ├── model
│       ├── routes
│       ├── schemas
│       ├── services
│       └── app.js
│
├── frontend
│   ├── components
│   ├── App.jsx
│   └── main.jsx
```

---

# ⚙️ Installation

## 1. Clonar repositorio

```bash
git clone https://github.com/JulioSDeveloper/expense-tracker.git
cd expense-tracker
```

---

## 🖥️ Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔑 Environment Variables

Crear un archivo `.env` en la carpeta **backend**:

```env
PORT=1234
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=expense_tracker
JWT_SECRET=your_secret_key
```

---

# ▶️ Running the App

Backend:

```
http://localhost:1234
```

Frontend (Vite por defecto):

```
http://localhost:5173
```

---

# 🔐 Authentication

La API utiliza **JWT tokens**.

Después del login, el token debe enviarse en los headers:

```
Authorization: Bearer YOUR_TOKEN
```

El frontend gestiona automáticamente el token usando **localStorage**.

---

# 📡 API Endpoints

## 🔐 Auth

### Login

```
POST /auth/login
```

Body:

```
{
  "username": "julio",
  "password": "password123"
}
```

---

## 👤 Users

### Register

```
POST /users
```

### Get users

```
GET /users
```

---

## 💸 Expenses (Protected Routes)

### Get all expenses (user)

```
GET /expenses
```

### Get one expense

```
GET /expenses/:id
```

### Create expense

```
POST /expenses
```

Body:

```
{
  "title": "Pizza",
  "amount": 20,
  "category": "food"
}
```

---

### Update expense

```
PATCH /expenses/:id
```

Body:

```
{
  "amount": 30
}
```

---

### Delete expense

```
DELETE /expenses/:id
```

---

# 🔒 Security

* Password hashing con **bcrypt**
* Autenticación con **JWT**
* Middleware de protección de rutas
* Validación de usuario en cada operación
* Acceso restringido a recursos propios

---

# 📸 Screenshots (pendiente)


---

# 📌 Project Status

🚧 En desarrollo

### Próximas mejoras:

* 🔄 Estados de carga (loading)
* ❗ Manejo de errores visual
* 📊 Estadísticas de gastos
* 🌐 Deploy (Frontend + Backend)
* 🐳 Docker
* 📄 Documentación con Swagger

---

# 🧠 Learnings

* Integración completa frontend-backend
* Manejo de autenticación con JWT
* CRUD completo con React
* Arquitectura backend escalable
* Manejo de estado en aplicaciones reales

---

# 👨‍💻 Author

**Julio Sosa**
Junior Fullstack Developer

---

# ⭐ Notes

Este proyecto fue desarrollado como práctica para consolidar conocimientos en desarrollo web fullstack, integrando backend robusto con un frontend interactivo y autenticado.

