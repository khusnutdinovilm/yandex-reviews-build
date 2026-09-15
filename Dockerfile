FROM node:20-alpine AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --no-progress --no-scripts --no-autoloader --ignore-platform-reqs
COPY . .
RUN composer dump-autoload --optimize --no-dev --ignore-platform-reqs

FROM php:8.4-fpm-alpine AS app
RUN apk add --no-cache oniguruma-dev \
    && docker-php-ext-install pdo_mysql mbstring bcmath opcache
RUN { echo 'opcache.enable=1'; echo 'opcache.validate_timestamps=0'; \
    echo 'opcache.memory_consumption=128'; echo 'opcache.max_accelerated_files=10000'; \
    echo 'expose_php=0'; } > /usr/local/etc/php/conf.d/zz-app.ini
WORKDIR /var/www/html
COPY --from=vendor /app/vendor ./vendor
COPY --from=frontend /app/public/build ./public/build
COPY . .
RUN chown -R www-data:www-data storage bootstrap/cache
EXPOSE 9000
CMD ["php-fpm"]

FROM nginx:1.27-alpine AS nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend /app/public /var/www/html/public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]