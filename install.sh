composer install ## php dependencies
npm install  && npm run build      ## javascript dependencies | building startpoint

cp .env.example .env   ## copy the example

php artisan key:generate ## generate app api key

php artisan migrate      ## database migration

npm run dev
php artisan serve

