# VLDC
Это исходники сайта для Vladivostok Developer Conference

Думаю документацию стоит писать на русском, хотя сам не поддерживаю этот подход в своих разработках :)

# Установка

## [node.js](http://nodejs.org/)

Для начала нужно установить сам `node.js` и `npm` к нему – менеджер модулей

На странице [nodejs.org/download](http://nodejs.org/download/) можно скачать установщик для OS X, Виндос и Linux

[Вроде бы вменяемое руководство для новичков](http://joyeur.com/2010/12/10/installing-node-and-npm/)

## [express.js](http://expressjs.com/)

Затем качаем `npm`'ом express framework: `npm install express`

Учтите, что `express` работает пока только на `node >= 0.4.1 < 0.5.0`. Я, например, по этому случаю, поставил себе ветку `0.4.11`, описание установки полностью можно взять вот тут: [github.com/joyent/node/wiki/Installation](https://github.com/joyent/node/wiki/Installation).

[Документация по `express.js` на русском языке](http://express-js.ru/)

Всё установили? Запускаем: `node app.js`, смотрим в браузере по адресу `http://localhost:3000`. Уииииии!

# Standarts and components

* [node.js](https://github.com/joyent/node)
* [express.js](https://github.com/visionmedia/express)
* [html5-boilerplate](https://github.com/fliptheweb/html5-boilerplate) (for basic layout)

# Участие

Участие в разработке сайта поощряется! Форкайте, делайте пулл-реквесты, пишите в трекер предложения с тегом `feature`. Давайте вместе сделаем крутой сайт для нашей конференции ^^

Если появились сложности с установкой, запуском, или вообще вопросы про `node`, спрашивайте кого-нибудь из нашей команды – с радостью поможем. Например:

* [@fliptheweb](http://twitter.com/fliptheweb)
* [@AntonLyapunov](http://twitter.com/antonlyapunov)
