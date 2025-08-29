# EVONCE — Portfolio de joyería (Lujo minimalista)

Implementación **tal cual** al PDF de referencia: tipografía serif con tracking, composición minimalista,
secciones y textos en mayúscula con espaciado, acentos dorados, y bloques de catálogo.

## Estructura
- `index.html` — Página única con: Hero, Trabaja conmigo, Portfolio, ¿Quiénes somos?, Catálogo, Contacto.
- `assets/css/evonce.css` — Estilos (tokens, layout, tracking, grillas).
- `assets/js/site.js` — Scroll suave + menú móvil.
- `assets/img/logo-wordmark.svg` — Wordmark EVONCE.
- `assets/img/favicon.png` — Favicon.

## Editar contenidos
- Textos en `index.html`. Imágenes del portfolio son placeholders (`.ph`) con degradado. Sustitúyalas por fotos reales si las tiene (formato JPG/PNG y asignar `background-image` vía CSS o `<img>` dentro de cada `figure`).

## Ejecutar en VS Code
1. Instale **Live Server**.
2. Abra la carpeta y ejecute `index.html` con Live Server.

## Publicar en GitHub
1. Cree un repo público `EVONCE-UI`.
2. Inicialice Git en la carpeta → commit `feat(ui): versión EVONCE`.
3. **Publish Branch** a GitHub.
4. (Opcional) **Settings → Pages** → *Deploy from a branch* (`main` / root) para tener URL pública.

## Personalización rápida
- Colores: `:root` en `evonce.css` (`--gold`, `--ink`, `--bg`).
- Tipografías: Google Fonts en `<head>` de `index.html`.
- Columnas: `.gallery` y `.catalogo` (modifique `grid-template-columns`).

> Nota: Este entregable es estático; integre backend si requiere carrito/contacto dinámico.
