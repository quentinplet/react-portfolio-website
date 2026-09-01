# Portfolio — Quentin Plet

Site statique HTML / CSS / JS (aucun build requis).

## Structure

- `index.html` — page unique
- `css/styles.css` — styles
- `js/main.js` — menu mobile, filtre portfolio, formulaire de contact (EmailJS)
- `assets/` — images et CV
- `robots.txt`, `sitemap.xml` — SEO

## Développement local

Servir le dossier avec n'importe quel serveur statique, par exemple :

```bash
npx serve .
```

## À faire avant mise en ligne

Remplacer `https://your-domain.example/` par le vrai domaine du site dans
`index.html` (canonical, Open Graph, Twitter, JSON-LD), `robots.txt` et
`sitemap.xml`.
