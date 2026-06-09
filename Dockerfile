# Railway static site deployment
# nginx:alpine is small, fast, and production-ready for static HTML + media

FROM nginx:alpine

# Copy custom nginx config (headers, gzip, caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the entire static site
COPY . /usr/share/nginx/html

# Expose port (Railway routes traffic + terminates TLS)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]