# Paseando por Venezuela - Docker Setup

## Quick Start with Docker

### Development Environment

Start the development server with hot reload:

```bash
# Build and start the development container
docker-compose --profile dev up --build

# Or run in detached mode
docker-compose --profile dev up -d --build
```

Access the app at: **http://localhost:5173**

Features:
- ✅ Hot module replacement (HMR)
- ✅ Automatic browser refresh
- ✅ Source maps for debugging
- ✅ File watching for changes

### Production Environment (for testing)

Test the production build locally:

```bash
# Build and start the production container
docker-compose --profile prod up --build

# Or run in detached mode
docker-compose --profile prod up -d --build
```

Access the app at: **http://localhost:8080**

Features:
- ✅ Optimized production build
- ✅ Nginx server
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Security headers

## Useful Commands

```bash
# Stop all containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose --profile dev up --build --force-recreate

# Run development in background
docker-compose --profile dev up -d

# Stop background containers
docker-compose --profile dev down
```

## Without Docker (Traditional)

If you prefer to run without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Testing URLs

Once running, you can test:

- **Homepage (Spanish)**: http://localhost:5173/es
- **Homepage (English)**: http://localhost:5173/en
- **Blog (Spanish)**: http://localhost:5173/es/blog
- **Blog (English)**: http://localhost:5173/en/blog
- **Individual Blog Post**: http://localhost:5173/es/blog/mejores-playas-isla-margarita
- **Hotel Detail**: http://localhost:5173/es/hoteles/hotel-caribe

## Blog Features

The blog includes:
- 🌍 Multilingual support (Spanish/English) with automatic browser detection
- 🔍 SEO optimized with meta tags, Open Graph, Twitter Cards
- 📱 Mobile responsive design
- 🏷️ Category filtering (Playas, Gastronomía, Actividades, Cultura, Consejos)
- 📊 Structured data (JSON-LD) for search engines
- 🗺️ Sitemap.xml and robots.txt for better crawling
- 🔄 Language switcher in navigation
- 💬 Related posts section
- 📤 Social sharing functionality