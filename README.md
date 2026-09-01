# Portfolio — Quentin Plet

Site statique HTML / CSS / JS (aucun build requis).

## Structure

- `index.html` — page d'accueil, en français (langue par défaut du site)
- `en/index.html` — version anglaise (même page, traduite), liée à la
  version française via `hreflang`
- `css/styles.css`, `js/main.js` — partagés entre les deux langues
- `assets/` — images et CV, partagés entre les deux langues
- `robots.txt`, `sitemap.xml` — SEO

Toutes les références vers `css/`, `js/` et `assets/` utilisent des chemins
absolus (`/css/styles.css`, etc.) pour fonctionner depuis `en/index.html`
aussi bien que depuis la racine. Le site doit donc être servi depuis la
racine du domaine (pas depuis un sous-dossier).

## Développement local

Servir le dossier avec n'importe quel serveur statique, par exemple :

```bash
npx serve .
```

## À faire avant mise en ligne

Remplacer `https://your-domain.example/` par le vrai domaine du site dans
`index.html`, `en/index.html` (canonical, hreflang, Open Graph, Twitter,
JSON-LD), `robots.txt` et `sitemap.xml`.
