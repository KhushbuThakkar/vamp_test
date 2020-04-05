## About APIs

## Heroku setup

push on heroku
heroku git:remote -a vamp-api
git subtree push --prefix test-api heroku master

run bash
heroku run bash -a vamp-test

heroku config:set APP_KEY=\$(php artisan --no-ansi key:generate --show)

# live creds for db -- TODO: remove this

lelecit772@wwrmails.com khushbu_1 rQf8wf63jB@VjL9

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
