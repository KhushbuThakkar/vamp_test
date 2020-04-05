## About Structure

Rest apis to get information about teams and campaigns

as I have used free mySql database(db4free) to host it, the app is a bit slow as getting data from database takes time.

-   [Laravel API](https://vamp-test.herokuapp.com/)

## stack used

Laravel
MySql

## Prerequisites

-   PHP
-   MySql
-   web server (Xampp or Wamp)
-   composer

## getting started

first time

```
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
```

After setup

```
php artisan serve
```

## technical

-   Structurised application in a way to ensure the project can scale.
-   Used Eloquent to build queries and relationships
-   Used migrations to make sure whenever app is build it has all required table and data.

### Deployment

push on heroku
`heroku git:remote -a vamp-test`
`git subtree push --prefix test-api heroku master`

### run bash on heroku

`heroku run bash -a vamp-test`
`heroku config:set APP_KEY=\$(php artisan --no-ansi key:generate --show)`
