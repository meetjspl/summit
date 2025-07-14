# meet.js Summit

New and fresh conference template with Vite and Handlebars.

## 💻 Development

```bash
# Install dependencies
bun install

# Start development server with live preview
bun dev

# Build for production
bun run build

# Serve production locally
bunx serve dist
```

## 🚀 Deployment

Before deployment, make sure that the `redirect.html` is set up correctly to the latest year.

This script will rebuild the project for production and deploy it to the `gh-pages` branch:

```
bun run deploy
```

## Roadmap
- Use Handlebars injection for repeating stuff (year, city, address, date, head etc)
- Use Handlebars loops for speakers, sponsors and partners
- Replace old JS accordions with `<details>`
- Remove old JS
- Replace SASS with CSS
- Remove unused CSS

---

<p align="center">Made with ❤️ by Michał Korczak</p>

---