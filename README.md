# Portafolio Personal - Proyecto Colaborativo

## Descripción
Este proyecto es una página web sencilla de portafolio personal creada con **HTML, CSS y JavaScript**.  
El objetivo es que los participantes del taller aprendan a usar **Git y GitHub**, gestionando tareas mediante *issues* y colaborando con ramas y *pull requests*.

## Estructura del Proyecto
- **index.html**: Página principal con la estructura HTML.  
- **styles.css**: Estilos CSS para el diseño y layout.  
- **script.js**: Funciones JavaScript para interactividad.  

## Cómo contribuir
1. Hacer *fork* del repositorio (si es individual) o clonar el repo.  
2. Crear una rama nueva para la tarea asignada.  
3. Trabajar en la función o sección asignada.  
4. Abrir un *Pull Request* para revisión.  
5. Gestionar *feedback* y hacer *merge* tras aprobación.  

## Gestión de Tareas
Las tareas se organizan como *issues* en GitHub.  
Cada participante debe elegir, o se le asignará, una *issue* que deberá completar.  

## Herramientas y Recomendaciones

### Desarrollo
- [Visual Studio Code](https://code.visualstudio.com/) → Editor recomendado con extensiones como:
  - *Live Server* (para ver cambios en tiempo real).  
  - *Prettier* (para formateo automático de código).  
  - *GitLens* (para entender el historial de cambios).  

### Control de versiones
- **Git** → indispensable para trabajar con ramas y versiones.  
- **GitHub Projects** o **GitHub Projects Beta** → para organizar tareas como tablero estilo Kanban.  
- **Issues + Labels** → para asignar prioridades, estados y responsables.  

### Comunicación
- **GitHub Discussions** → para dudas o debates técnicos.  
- **Slack / Discord / Teams** → canal de comunicación rápida entre los participantes.  

### Buenas prácticas
- Usar **convenciones de commits** (ejemplo: *Conventional Commits*).  
- Seguir una **estructura de ramas** clara (ejemplo: `main`, `develop`, `feature/nombre-tarea`).  
- Revisar y comentar *Pull Requests* antes de hacer *merge*.  
- Documentar el código con comentarios claros.  
- Mantener el *README.md* actualizado.  

---

## Labels recomendados
Para organizar las *issues* y *pull requests* en GitHub se pueden usar las siguientes etiquetas:

| Label              | Descripción                                   | Emoji |
|--------------------|-----------------------------------------------|-------|
| `bug`              | Reporte de errores en el proyecto             | 🐛    |
| `enhancement`      | Nuevas funcionalidades o mejoras              | ✨    |
| `documentation`    | Cambios en la documentación                   | 📖    |
| `help wanted`      | Se necesita apoyo en una tarea                 | 🙋    |
| `good first issue` | Tareas sencillas para principiantes            | 🌱    |
| `question`         | Dudas o preguntas sobre el proyecto            | ❓    |
| `priority: high`   | Tareas urgentes que deben resolverse pronto    | 🔥    |
| `UI/UX`            | Mejoras en diseño o experiencia de usuario     | 🎨    |

---

## Convenciones de commits
Se recomienda usar la convención **Conventional Commits** para mantener un historial claro y consistente.

| Tipo       | Uso                                                   | Ejemplo de commit                                              |
|------------|-------------------------------------------------------|----------------------------------------------------------------|
| `feat`     | Nueva funcionalidad                                   | `feat: agregar sección de proyectos al portafolio ✨`           |
| `fix`      | Corrección de errores                                 | `fix: corregir error en el enlace de contacto 🐛`              |
| `docs`     | Cambios en la documentación                           | `docs: actualizar instrucciones de instalación en README 📖`   |
| `style`    | Cambios de formato sin alterar funcionalidad          | `style: aplicar formato con Prettier al archivo styles.css 🎨` |
| `refactor` | Reestructuración del código sin cambiar funcionalidad | `refactor: simplificar función de validación en script.js 🔄`  |
| `test`     | Agregar o modificar pruebas                           | `test: agregar pruebas unitarias para validar formulario ✅`   |
| `chore`    | Tareas de mantenimiento o configuración               | `chore: actualizar dependencias de npm 🔧`                     |

---
