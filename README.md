# API REST - Gestión de Productos

API REST desarrollada con Node.js, Express y Firebase para la gestión de productos. Incluye autenticación JWT y middleware de seguridad.

## 🚀 Características

- **Express** para gestionar rutas y middleware
- **Firebase Firestore** como base de datos
- **Autenticación JWT** para rutas protegidas
- **CORS** habilitado para peticiones cross-origin
- **Variables de entorno** con dotenv
- **Estructura modular** con controladores, servicios y middlewares

## 📋 Requisitos

- Node.js v16 o superior
- npm o yarn
- Cuenta de Firebase

## ⚙️ Instalación

1. **Clona el repositorio**
```bash
git clone <tu-repositorio>
cd api-rest-project
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
cp .env.example .env
```

4. **Edita el archivo .env con tus credenciales de Firebase**
```env
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_proyecto_id
FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
FIREBASE_MEASUREMENT_ID=tu_measurement_id
PORT=5000
```

5. **Inicia el servidor**
```bash
# Desarrollo
npm run dev

# Producción
npm start
```

## 📚 API Endpoints

### 🏠 Endpoint Base
- **URL Base**: `http://localhost:5000`

### 🔐 Autenticación

| Método | Endpoint | Descripción | Requiere Autenticación |
|--------|----------|-------------|---------------|
| POST | `/auth` | Iniciar sesión | ❌ |

**Ejemplo de login:**
```bash
curl -X POST http://localhost:5000/auth \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@admin.com",
    "password": "password123"
  }'
```

**Respuesta exitosa:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
}
```

### 📦 Productos

| Método | Endpoint | Descripción | Requiere Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Obtener todos los productos | ❌ |
| GET | `/api/products/:id` | Obtener un producto por ID | ❌ |
| POST | `/api/products/create` | Crear un nuevo producto | ✅ |
| DELETE | `/api/products/:id` | Eliminar un producto | ✅ |

#### Obtener todos los productos
```bash
curl -X GET http://localhost:5000/api/products
```

#### Obtener un producto específico
```bash
curl -X GET http://localhost:5000/api/products/PRODUCT_ID
```

#### Crear un producto (requiere autenticación)
```bash
curl -X POST http://localhost:5000/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN_JWT" \
  -d '{
    "nombre": "Producto ejemplo",
    "precio": 29.99,
    "disponible": true,
    "stock": 100
  }'
```

#### Eliminar un producto (requiere autenticación)
```bash
curl -X DELETE http://localhost:5000/api/products/PRODUCT_ID \
  -H "Authorization: Bearer TOKEN_JWT"
```

## 🔑 Autenticación

Para acceder a las rutas protegidas, incluye el token JWT en el header:

```
Authorization: Bearer TOKEN_JWT
```

## 📁 Estructura del Proyecto

```
src/
├── config/
│   ├── db.js              # Configuración de Firebase
│   └── envs.js            # Variables de entorno
├── controllers/
│   ├── auth.controller.js # Controlador de autenticación
│   └── product.controller.js # Controlador de productos
├── middlewares/
│   ├── auth.middleware.js # Middleware de autenticación
│   └── notFound.middleware.js # Middleware 404
├── models/
│   └── product.model.js   # Modelo de producto
├── routes/
│   ├── auth.routes.js     # Rutas de autenticación
│   └── product.route.js   # Rutas de productos
├── services/
│   └── product.service.js # Servicios de productos
├── utils/
│   ├── index.js          # Utilidades generales
│   └── jwt.js            # Utilidades JWT
└── index.js              # Punto de entrada
```

## 🔧 Scripts Disponibles

```bash
# Iniciar en modo desarrollo (con nodemon)
npm run dev

# Iniciar en modo producción
npm start

# Ejecutar tests (si están configurados)
npm test
```

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **Firebase** - Base de datos NoSQL
- **JWT** - Autenticación
- **CORS** - Manejo de políticas de origen cruzado
- **dotenv** - Gestión de variables de entorno

## 🚨 Códigos de Error

| Código | Descripción |
|--------|-------------|
| 200 | Éxito |
| 201 | Creado |
| 400 | Solicitud incorrecta |
| 401 | No autorizado |
| 404 | No encontrado |
| 500 | Error interno del servidor |

## 👨‍💻 Autor

**Gianluca Piriz**
- Proyecto final del curso de Node.js en Talento Tech

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
