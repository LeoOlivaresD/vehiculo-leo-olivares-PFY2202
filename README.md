# 🚗 Sistema de Gestión de Vehículos

Proyecto desarrollado para el curso **Desarrollo Frontend II (PFY2202)** - Semana 3

## 📝 Descripción

Aplicación web para la gestión de un inventario de vehículos con las siguientes funcionalidades:

- ✅ Registro de nuevos vehículos
- ✅ Listado completo del inventario
- ✅ Sistema de filtros dinámicos (marca, modelo, precio, año)
- ✅ Vista detallada de cada vehículo
- ✅ Marcado de vehículos como "posible compra"
- ✅ Gestión de vehículos de interés
- ✅ Persistencia de datos con localStorage

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida
- **React Router DOM** - Enrutamiento de páginas
- **Bootstrap 5** - Framework CSS para estilos
- **Bootstrap Icons** - Iconografía
- **Context API** - Gestión de estado global

## 🚀 Características Implementadas

### 1. Registro de Vehículos
- Formulario completo con validaciones
- Campos: Marca, Modelo, Precio, Año, Descripción
- Validación de datos en tiempo real
- Mensaje de confirmación al registrar

### 2. Listado de Vehículos
- Tabla responsive con todos los vehículos
- Sistema de filtros por categoría
- Búsqueda dinámica sin perder datos originales
- Vista previa de descripción truncada
- Formato de precio con separador de miles

### 3. Detalle de Vehículo
- Vista completa de información del vehículo
- Opción para marcar como "posible compra"
- Navegación intuitiva

### 4. Posibles Compras
- Lista de vehículos marcados por el usuario
- Vista en tarjetas (cards)
- Opción para desmarcar y devolver al inventario
- Contador de vehículos marcados en el menú

### 5. Persistencia de Datos
- Datos guardados automáticamente en localStorage
- Información persistente al recargar la página

## 📂 Estructura del Proyecto
```
src/
├── components/
│   ├── Header.jsx
│   └── MenuInferior.jsx
├── context/
│   └── VehiculosContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── QuienesSomos.jsx
│   ├── Contacto.jsx
│   ├── RegistroVehiculo.jsx
│   ├── ListarVehiculos.jsx
│   ├── DetalleVehiculo.jsx
│   └── PosiblesCompras.jsx
├── App.jsx
├── AppRoutes.jsx
└── main.jsx
```

## 🔧 Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/LeoOlivaresD/vehiculo-leo-olivares-PFY2202.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

## 👨‍💻 Autor

**Leonardo Olivares D.**
- Curso: Desarrollo Frontend II (PFY2202)
- Institución: Duoc UC

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos para Duoc UC.

---

**Desarrollado usando React + Vite + Bootstrap**
