# Patient Home Manager

## Descripción

**Patient Home Manager** Es una aplicación web diseñada para gestionar la historia clínica de pacientes con internación domiciliaria. La aplicación permite la asignación de kinesiólogos a los pacientes y el control de la fecha de autorización de prestaciones médicas. En su primera fase, permite visualizar la lista de pacientes y asignar un profesional. En la segunda fase, se incorporarán funcionalidades como autenticación, roles de usuario (admin, médico), estadísticas visuales y protección de datos sensibles.

## Funcionalidades

### Fase 1:
- Visualización de la lista de pacientes.
- Asignación de kinesiólogos a los pacientes.
- Control de fecha de autorización de prestaciones.

### Fase 2 (futuro desarrollo):
- Autenticación (login) con JWT.
- Gestión de roles de usuario (admin, médico).
- CRUD completo de pacientes (crear, leer, actualizar, eliminar).
- Visualización de estadísticas gráficas.
- Protección de datos sensibles (HIPAA/GDPR).

## Tecnologías Utilizadas

### Frontend
- **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseño responsivo y moderno.
- **React Router**: Manejo de rutas y navegación dentro de la aplicación.
- **JWT** (a implementar): Token de autenticación para manejo de sesiones de usuario.

### Backend
- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express.js**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar la información de los pacientes.
- **Mongoose**: ODM para MongoDB, permite la modelización de los datos.
- **dotenv**: Manejo de variables de entorno.
- **JWT** (a implementar): Para la autenticación de usuarios.

### Testing
- **Jest**: Framework de pruebas para componentes y funcionalidades.

### Despliegue
- **Frontend**: Vercel.
- **Backend**: Railway/Heroku.


