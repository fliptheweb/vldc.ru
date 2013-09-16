### Установка окружения програмиста

Прежде всего, необходимо убедиться, что у вас стоит Postgres 9+. Открываем терминал и жмякаем psql
Тишина - ставим! Ставим любым удобным методом. Гугл полон всякой всячины.


После установки надо создать юзера, базу, дать все права.
Для всего этого следуем инструкциям ниже и, если все прошло гладно, то в конце нас ждет готовое окружение

```Shell
sudo su - postgres
psql

create database vldc;
create user vldc with password 'LgX0965VS4R857H';
GRANT ALL PRIVILEGES ON DATABASE vldc to vldc
\q

```

Создали юзера. Выходим из под postgres юзера и проверяем:

```
PGPASSWORD=LgX0965VS4R857H psql -d vldc -U vldc -h localhost
```

Должно получится что-то вроде:

```
psql (9.1.9)
SSL connection (cipher: DHE-RSA-AES256-SHA, bits: 256)
Type "help" for help.

vldc=>
```

Дальше создаем таблицы или просто выполняем скриптец

```
PGPASSWORD=LgX0965VS4R857H psql -d vldc -U vldc -h localhost  < docs/schema.db
````

Поздравляю. Можем залогиниться и еще раз проверить, что все таблицы есть на месте

`
PGPASSWORD=LgX0965VS4R857H psql -d vldc -U vldc -h localhost
\d
`
