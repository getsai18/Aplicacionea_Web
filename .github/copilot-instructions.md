# Copilot Instructions for Aplicacionea_Web

## Project Overview
This codebase is a collection of web development exercises and mini-projects, organized by class and topic. Each subfolder (e.g., `clase1`, `clase2`, `clase3`, `clase Elementos`, `positionFixed`) contains its own HTML, CSS, and sometimes JavaScript files. There is no global build system or dependency manager; each folder is self-contained.

## Directory Structure & Conventions
- Each `clase*` folder represents a separate exercise or lesson. Treat each as an independent web app.
- HTML entry points are always named `index.html`.
- CSS is typically in a `css/style.css` subfolder.
- JavaScript, when present, is in a `js/app.js` or directly as `app.js` in the folder.
- The `clase3/correo` folder is a subproject focused on email-related UI/logic.

## Patterns & Practices
- No frameworks are used; all code is vanilla HTML, CSS, and JS.
- There is no build, test, or deployment automation. Manual browser refresh is the main workflow.
- Cross-component communication is rare; most logic is local to each folder.
- Naming is in Spanish, reflecting the educational context.
- No external dependencies are referenced in code.

## How to Contribute as an AI Agent
- When adding new features, keep them scoped to the relevant `clase*` folder.
- Follow the existing file structure: place HTML in the root, CSS in `css/`, JS in `js/` or root as appropriate.
- Use simple, readable vanilla JS and CSS. Avoid introducing frameworks or build tools.
- If updating UI, ensure changes are reflected in the corresponding `index.html` and `style.css`.
- For new exercises, create a new folder following the `claseN` pattern.

## Examples
- To add a button to `clase2`, edit `clase2/index.html` and update styles in `clase2/css/style.css`.
- To add JS logic to `clase3/correo`, use `clase3/correo/app.js` and reference it in `clase3/correo/index.html`.

## Key Files
- `claseN/index.html`: Main HTML for each exercise
- `claseN/css/style.css`: Styles for each exercise
- `claseN/js/app.js` or `claseN/app.js`: JavaScript logic

## Limitations
- No automated tests or CI/CD.
- No package.json or dependency management.
- No backend/server code; all logic is client-side.

---
For questions or unclear conventions, ask the user for clarification before making structural changes.