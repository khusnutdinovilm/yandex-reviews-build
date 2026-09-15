# Yandex Reviews (mock-этап)

Laravel 13 (PHP 8.4) + Vue 3 SPA (Composition API, TypeScript, PrimeVue v4) + MySQL. Топология — **один origin**: SPA собирается Vite и отдаётся самим Laravel. Авторизация — Sanctum (cookie-based SPA). Тёмная тема. Docker — через Laravel Sail.

## Требования

- Docker + Docker Compose
- Laravel
- Vue.js

## Запуск для разработки

1. Скопировать окружение:
   ```bash
   cp .env.example .env
   ```
2. Установить PHP-зависимости (первый раз, пока нет vendor/ и самого Sail —
   через одноразовый контейнер):
   ```bash
   docker run --rm -v "$(pwd)":/opt -w /opt laravelsail/php84-composer:latest composer install
   ```
3. Поднять контейнеры (app + Vite + MySQL):
   ```
   ./vendor/bin/sail up --build -d
   ```
   > Удобно завести алиас: alias sail='./vendor/bin/sail'
4. Ключ приложения, зависимости фронта, миграции и сид-данные:
   ```bash
   sail artisan key:generate
   sail npm install
   sail artisan migrate --seed
   ```
5. Открыть http://localhost
   > Открывать именно http://localhost (сайт) — не http://localhost:5173 (там служебная заглушка dev-сервера ассетов).

Vite dev-сервер поднимается автоматически (сервис vite), HMR работает.

## Учётные данные (сид)

admin@example.com / password

## Полезные команды

```bash
sail npm run type-check     # проверка типов (vue-tsc)
sail npm run format         # Prettier — форматирование фронта
sail npm run format:check   # проверка форматирования
./vendor/bin/pint           # стиль PHP (Laravel Pint)
sail down                   # остановить контейнеры
```

## Продакшн / деплой

Прод-сборка — docker-compose.prod.yml (PHP-FPM + nginx + MySQL, один origin).
Автодеплой на сервер при мерже в main — .github/workflows/deploy.yml
(SSH + docker compose up -d --build).
