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

```bash
npm install axios

```

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

### 🟠 Commit: Implementando el hook useParams (`b78ff829` y `03d6262c`)
- Uso del hook `useParams` para manejar parámetros dinámicos en las rutas.

### 🟢 Commit: Usando npm install dayjs (`d13b300c`)
- Instalación de `dayjs` para manejar fechas en el proyecto.

```bash
npm install dayjs

```

### 📌 Manejo de Fechas con dayjs en el Proyecto
En el código se utiliza dayjs para validar y formatear fechas en la lista de criptomonedas. A continuación, se explica su funcionamiento:

### 🔍 Iteración sobre el Historial de Precios
El siguiente código recorre el array history y extrae `{ date, priceUsd, time }`:

```bash
history.map(({ date, priceUsd, time }) => {
````
   
history es un array que contiene datos históricos de criptomonedas.

.map(...) permite recorrer cada objeto y extraer las propiedades date, priceUsd y time.

### 🛠 Depuración en Consola
Para verificar que la API proporciona fechas en el formato esperado, se imprime en la consola:

console.log("Fecha recibida:", date);

Esto ayuda a detectar si la fecha está en un formato incorrecto o si viene vacía.

### 🕒 Validación y Formateo con dayjs

El código verifica si la fecha es válida antes de formatearla:
const formattedDate = dayjs(date).isValid()

    ? dayjs(date).format("DD/MM/YYYY") # ✅ Si es válida, la formatea como 'día/mes/año'
    : "Fecha inválida"; # ❌ Si es inválida, muestra un mensaje de error

### 📌 Renderizado de Datos
Finalmente, la información se muestra en la interfaz:
```
return (
    <div key={time}>
        <p>Fecha: {formattedDate}</p>
        <p>Precio (USD): {priceUsd}</p>
    </div>
);
```
### 🔥 Ejemplo de Entrada y Salida

Ejemplo 1: Fecha válida

#### Entrada (date en formato ISO)
```
"2025-02-21T00:00:00Z"
```
####  Salida en la interfaz

```
Fecha: 21/02/2025
Precio (USD): 45000.23
```

Ejemplo 2: Fecha inválida


Entrada (date con formato incorrecto)

```
"InvalidDate"
```
Salida en la interfaz
```
Fecha: Fecha inválida
Precio (USD): 45000.2
```

### 🟡 Commit: Dejando funcionar la tabla (`32b209d9`)
- Implementación y corrección de la tabla para visualizar mejor los datos de las criptomonedas.

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



