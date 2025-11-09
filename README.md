# Harding Consulting — Website

Professional consulting website for Harding Consulting, an independent DevOps, Cloud, and Cybersecurity consultant based in Stockholm.

## Overview

This is a static website built with semantic HTML5, modern CSS, and vanilla JavaScript. No build step required — just serve the files.

## Tech Stack

- **HTML5** — Semantic markup with accessibility best practices
- **CSS3** — Modern responsive design with CSS variables
- **Vanilla JavaScript** — Mobile nav toggle and progressive enhancement
- **SVG** — Vector logo and favicon

## Project Structure

```
.
├── index.html           # Home page
├── about.html           # About / consulting profile
├── services.html        # Services overview
├── contact.html         # Contact details
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── js/
│   │   └── main.js      # Mobile nav & year auto-fill
│   ├── img/
│   │   └── logo.svg     # Company logo
│   └── favicon.svg      # Site favicon
├── deploy/
│   └── nginx/
│       └── default.conf # Nginx config for production
└── README.md
```

## Local Development

### Option 1: Python (recommended for quick preview)

```bash
# Serve from project root
python3 -m http.server 8000

# Or specify directory
python3 -m http.server 8000 --directory /path/to/harding-consulting-site
```

Open http://127.0.0.1:8000/ in your browser.

### Option 2: Node.js

```bash
# Install serve globally (once)
npm install -g serve

# Serve from project root
serve -p 8000
```

### Option 3: VS Code Live Server

1. Install the "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## Deployment

### Option 1: Static hosting (Netlify, Vercel, GitHub Pages)

1. Push repository to GitHub
2. Connect to Netlify/Vercel and deploy from `main` branch
3. No build command needed — serve root directory

### Option 2: Docker + Nginx

```bash
# Build image
docker build -t harding-consulting-site .

# Run container
docker run -d -p 80:80 harding-consulting-site
```

**Dockerfile** (create in project root):

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Option 3: Traditional server (Apache, Nginx)

Copy all files to your web server's document root (e.g., `/var/www/html`). Use the provided `deploy/nginx/default.conf` as a reference for Nginx configuration.

## Security Features

- Content Security Policy (CSP) via meta tag
- Referrer policy: strict-origin-when-cross-origin
- External links use `rel="noopener"` for security
- HTTPS recommended for production (configure at hosting/reverse proxy level)

## Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels and landmarks
- Keyboard navigation support (Escape closes mobile nav)
- Screen reader–friendly logo and navigation
- Sufficient color contrast ratios

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not officially supported (CSS variables, grid not polyfilled)

## Customization

### Update content

- Edit HTML files directly (no build step)
- Main pages: `index.html`, `about.html`, `services.html`, `contact.html`

### Change colors/styles

- Edit `assets/css/style.css`
- CSS variables defined in `:root` for easy theming

### Replace logo

- Replace `assets/img/logo.svg` with your logo
- Update `assets/favicon.svg` for browser tab icon

### Update contact info

- Update email, LinkedIn, GitHub links in footer (all pages)
- Update `contact.html` with your details

## Performance

- No external dependencies (CSS/JS)
- Optimized for fast load times
- All assets served from same origin (CSP-friendly)
- Minimal JavaScript (< 2KB)

## License

© 2025 Harding Consulting — All rights reserved.

## Contact

For questions or issues with the website:
- Email: hello@harding.consulting
- GitHub: https://github.com/Hardi5
- LinkedIn: https://www.linkedin.com/in/hardikakalaw/
