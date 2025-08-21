# Portafolio Personal - Proyecto Colaborativo

## Descripción
Este proyecto es una página web sencilla de portafolio personal creada con **HTML, CSS y JavaScript**.  
El objetivo es que los participantes del taller aprendan a usar **Git y GitHub**, gestionando tareas mediante *issues* y colaborando con ramas y *pull requests*.

## Estructura del Proyecto
- **index.html**: Página principal con la estructura HTML.  
- **styles.css**: Estilos CSS para el diseño y layout.  
- **script.js**: Funciones JavaScript para interactividad.  

## Cómo contribuir

1. Hacer *fork* del repositorio (para proyectos individuales) o clonar el repositorio si se trabaja en equipo.
2. Antes de comenzar, actualizar la rama principal con `git pull origin main` para evitar conflictos futuros.
3. Crear una rama nueva para la tarea asignada con un nombre descriptivo (ejemplo: `feature/navbar-responsive`).
4. Realizar los cambios y hacer commits claros siguiendo la convención establecida.
5. Abrir un *Pull Request* describiendo los cambios realizados.
6. Atender la retroalimentación y realizar correcciones si es necesario.
7. Una vez aprobado, el Pull Request se fusiona y se elimina la rama.


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

# Tareas del Proyecto

Este proyecto está dividido en **20 tareas pequeñas**, pensadas para completarse cada una.  
El objetivo es que todos los participantes puedan trabajar en paralelo sin depender de que otra tarea esté terminada.  

---

## Archivos principales
- `index.html` → estructura del sitio web  
- `styles.css` → estilos generales y diseño  
- `script.js` → interactividad y validaciones  

---

## Lista de Tareas

| #  | Tarea | Archivos a modificar/crear |
|----|-------|-----------------------------|
| 1  | Crear estructura básica del sitio (doctype, head, body, links a CSS y JS) | `index.html` |
| 2  | Definir estilos globales (tipografía, márgenes, colores base) | `styles.css` |
| 3  | Diseñar el header con logo y menú de navegación | `index.html`, `styles.css` |
| 4  | Aplicar estilos responsivos al header | `styles.css` |
| 5  | Desarrollar la sección "Sobre mí" (`About`) con texto | `index.html` |
| 6  | Agregar foto de perfil en About y ajustarla con estilos | `index.html`, `styles.css` |
| 7  | Crear la sección de "Habilidades" (`Skills`) con lista simple | `index.html` |
| 8  | Estilizar Skills con barras de progreso | `styles.css` |
| 9  | Implementar la sección de Proyectos con enlaces a repositorios | `index.html` |
| 10 | Aplicar diseño en cuadrícula a la sección Proyectos | `styles.css` |
| 11 | Crear la sección de Contacto con formulario básico | `index.html` |
| 12 | Dar estilo al formulario de Contacto | `styles.css` |
| 13 | Validar el formulario con JavaScript básico | `script.js` |
| 14 | Añadir animaciones con CSS (ej: sección About) | `styles.css` |
| 15 | Crear el footer con información básica | `index.html`, `styles.css` |
| 16 | Añadir enlaces a redes sociales en el footer | `index.html` |
| 17 | Implementar botón para descargar CV en PDF | `index.html` |
| 18 | Optimizar imágenes (ajustar tamaños y peso) | Carpeta `/img` |
| 19 | Agregar modo oscuro / claro con toggle | `styles.css`, `script.js` |
| 20 | Mejorar accesibilidad (aria-labels, contraste de colores) | `index.html`, `styles.css` |

---

## Flujo de trabajo en GitHub

1. Cada tarea será publicada como una **Issue**.  
2. Cada participante debe:  
   - Asignarse una tarea o recibirla.  
   - Crear una rama con el nombre de la tarea (ej: `feature/about-section`).  
   - Subir sus cambios.  
   - Abrir un Pull Request.  
   - Esperar la revisión y aprobación antes de hacer *merge*.  

---

## Flujo de trabajo en GitHub Projects (Kanban)

Para organizar el avance del proyecto se recomienda usar un **tablero estilo Kanban** en GitHub Projects, con las siguientes columnas:

- **Por hacer (To Do)** → Tareas pendientes (issues recién creadas o asignadas).  
- **En progreso (In Progress)** → Tareas en las que el participante ya está trabajando.  
- **Hecho (Done)** → Tareas completadas, revisadas y fusionadas en la rama principal.  

Ejemplo visual del flujo:  
[ Por hacer ] → [ En progreso ] → [ Hecho ]
