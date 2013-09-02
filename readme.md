# VLDC
Это исходники сайта для Vladivostok Developer Conference

Думаю документацию стоит писать на русском, хотя сам не поддерживаю этот подход в своих разработках :)

## Installation guide


Для начала нужно установить node.js > 0.10 и npm (менеджер модулей для ноды, - чаще всего идет вместе с нодой, поэтому дополнительно устанавливать его не нужно).
Рекомендуем использовать [https://github.com/creationix/nvm](nvm) (node versions manager).

Проверить, установлена ли нода и npm можно проверив версию. Вы получите что-то вроде:

    $ node --version
    v0.10.8
    $ npm --version
    1.2.23

Далее, клонируем этот репозиторий на github'е и переходим в созданную директорию:

    git clone git@github.com:fliptheweb/vldc.ru.git
    cd vldc.ru

Ставим все необходимые пакеты через `npm`:

`npm install`

Если всё хорошо, можно запускать приложение: 

`node app [PORT]`

По умолчанию PORT=3000

## Links

- [http://expressjs.com/](Официальный сайт ExpressJs) ([github](https://github.com/visionmedia/express))
- [http://express-js.ru/](Документация по ExpressJs на русском)
- [http://jade-lang.com/](Шаблонизатор Jade) (используется для рендеринга страниц, [github](https://github.com/visionmedia/jade))
- [https://github.com/fliptheweb/html5-boilerplate](html5-boilerplate (for basic layout))
- [https://github.com/joyent/node](nodejs)


## Contribution
Участие в разработке сайта поощряетя! Форкайте, делайте пулл реквесты, пишите в трекер предложения. Давайте вместе сделаем крутой сайт для нашей конференции ^^

Если появились сложности с установкой, запуском, или вообще вопросы про ноду, спрашивайте кого-нибудь из нашей команды - с радостью поможем:

* @fliptheweb - http://twitter.com/fliptheweb
* @AntonLyapunov - http://twitter.com/antonlyapunov
