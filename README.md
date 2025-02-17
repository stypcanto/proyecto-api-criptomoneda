# Proyecto: Lista de Criptomonedas con React, Axios y React Router
Este proyecto muestra una lista de criptomonedas obtenida mediante una API, con rutas dinámicas y un menú de navegación. Se utilizan tecnologías como React, Axios y React Router.

## 📂 Estructura de Commits:
### 🟡 Commit: Haciendo peticiones en React de las criptomonedas (`0ac56ba`)
- Primera integración para obtener criptomonedas mediante peticiones en React.
- Creación del archivo `README.md`.

### 🟢 Commit: Usando variables de entorno y Keys (`d7120e3`)
- Añadidas variables de entorno para almacenar la URL de la API.
- Configuración del archivo `.env` para proteger claves sensibles.

### 🟠 Commit: Creando la lista de criptomonedas y añadiendo Axios (`7cd710c`)
- Implementación de `Axios` para gestionar peticiones HTTP.
- Creación del archivo de estilos `Cripto.css`.
- Añadido componente para mostrar la lista de criptomonedas.

### 🟢 Commit: Añadiendo estilos dinámicos para variaciones (`127d641`)
- Agregados estilos dinámicos en `Cripto.css` para diferenciar variaciones positivas y negativas.
- Mejora de la interfaz.

### 🟠 Commit: Creando un React Router DOM (`68fceb3`)
- Integración de `React Router DOM`.
- Configuración de rutas para la navegación.

### 🟡 Commit: Creando un menú con NavLink y Link (`d8b392d`)
- Creación de un menú de navegación.
- Práctica con `NavLink` y `Link` para gestionar rutas activas.

### 🟢 Commit: Implementando Outlet y estructurando el menú (`835afab`)
- Implementación del componente `Outlet` para definir plantillas comunes.
- Mejora en la estructura del menú.

---
## 🚀 Tecnologías Utilizadas:
- **React**: Framework para construir la interfaz.
- **React Router DOM**: Gestión de rutas y navegación.
- **Axios**: Librería para peticiones HTTP.
- **CSS**: Estilización de componentes.
- **Variables de entorno**: Protección de claves sensibles.

## 📜 Cómo Ejecutar el Proyecto:
1. **Clonar el repositorio**:  
   ```bash
   git clone https://github.com/tuusuario/cripto-app.git
   cd cripto-app
   ```
2. **Crear un archivo `.env`** con la URL de la API:
   ```bash
   VITE_API_URL=https://api.example.com/
   ```
3. **Instalar dependencias:**  
   ```bash
   npm install
   ```
4. **Ejecutar el proyecto:**  
   ```bash
   npm run dev
   ```

## 💡 Notas:
- Las criptomonedas se muestran en tiempo real.
- Variaciones de precio: **Verde** para positivas y **Rojo** para negativas.
- Navegación integrada con React Router.
- Menú dinámico con rutas activas destacadas.

Desarrollado por: **Styp Canto (styp611@outlook.com)** 🚀

