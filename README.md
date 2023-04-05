<h1 align="center">Movies</h1>
<p align="center">
    <img alt="Version" src="https://img.shields.io/github/package-json/v/bezprobeloff/movies-explorer-frontend" />
    <img alt="Quality" src="https://img.shields.io/badge/status-release-orange.svg" >
    <img alt="Made by: Bezprobeloff" src="https://img.shields.io/badge/made%20by-Bezprobeloff-blue" />
</p>


https://user-images.githubusercontent.com/44836223/208670955-e5c2a207-4a1d-4f2e-b132-8b54d08fa85f.mp4

**Обзор**

Ссылка на deploy __Movies__: https://movies.bezprobeloff.ru

Проект приложения для просмотра информации о фильмах, который можно посмотреть в режиме мобильного, планшета и десктопа.
На каждом устройстве сайт адаптивно меняется для удобства и читабельности.


Исходный код бекенда и документация API на GitHub -  **[Movies (Backend)](https://github.com/bezprobeloff/movies-explorer-api)**

Можем обмениваться информацией с сервером по REST API: добавить/прикрепить фильм, который понравился, обновление данных пользователя (имя, email), авторизация/регистрация.


**Технологии**

Использованы следующие технологии:

* ~~__Flexbox__~~ Только __Grid__
* __SASS__
* Методология __БЭМ__
* __Семантическая__ вёрстка
* __Адаптивность__ с использованием "резиновости"
* __React__ технологии
  * хуки: useState, useEffect, useLocation, useHistory
  * кастомный хук: useInput и useForm для валидации форм, useMoviesDisplay - логика отображения количества фильмов на разных экранах
  * функциональные компоненты
  * React Router (v. 5.2.1)
  * Context

* Реализация логики, а также получение данных с сервера по __REST API__:
  * Снятие/Прикреление фильмов
  * Обновление/редактирование данных пользователя (имя, email)
  * Валидация форм
  * Открытие попапов (например, предупреждения)
  * Закрытие попапов (по Esc, по overlay, по кнопке закрытия)
  * Авторизация/регистрация
  * После регистрации автоматически авторизуется

**Установка**

Установить Node.js (v16.5) и запустить в корневом каталоге проекта:

###  `npm install`


**Скрипты**

###  `npm start`
Запуск в режиме разработки, в браузере автоматически откроется по такому адресу [http://localhost:8080/](http://localhost:8080/)

### `npm run build`

Сборка приложения в папку `build`
