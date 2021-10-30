Browser_Settings

## Для Блокировки Рекламы Используйте 
[UBlock→](https://addons.mozilla.org/ru/firefox/addon/ublock-origin/)
// В разделе Приватность рекомендуется активировать все фильтры   
// Для блокировки рекламы на Youtube активируйте фильтр uBlock filters – Annoyances and SponsorBlock для YouTube
// Для блокировки Yandex Direct достаточно добавить фильтр ->
// [Counters→](https://easylist-downloads.adblockplus.org/cntblock.txt)
// Просто вставьте ссылку выше в текстовое поле Импортировать на странице Список фильтров в настройках uBlock 
// И нажмите Применить
**Аддоны**<br>
[Cookie AutoDelete](https://addons.mozilla.org/firefox/addon/cookie-autodelete/) - авто-удаление печенек, с настройками времени, белых списков и т.д.<br>
[Cookie Quick Manager](https://addons.mozilla.org/firefox/addon/cookie-quick-manager/) - менеджер, также возвращает возможность просмотра детального списка печенек.<br>
[Cookie Manager](https://addons.mozilla.org/en-US/firefox/addon/a-cookie-manager/) - ещё один менеджер. Просмотр, редактирование, удаление и поиск печенек.<br>
## Доп.Расширения для защиты вашей приватности
⭐[LocalCDN](https://addons.mozilla.org/ru/firefox/addon/localcdn-fork-of-decentraleyes/) безопасный-js
⭐[ClearURLs](https://addons.mozilla.org/ru/firefox/addon/clearurls/) - Для блокировки url-рекламы используйте.
Где размещены эти *.xpi файлы? <br>
Ваш путь установки Mozilla Firefox\browser\features <br>
Аддоны можно удалить оттуда "физически", <br>
можно выключить через Ccleaner: Tools > Browser Plugins > Firefox <br>
можно выключить через about:config (список будет дополнятся) <br>
можно через ветку реестра: `HKEY_CURRENT_USER\Software\Mozilla\Firefox\Extensions` <br>
___
⭐**Firefox Screenshots** <br>
[screenshots@mozilla.org.xpi](https://support.mozilla.org/ru/kb/skrinshoty-firefox) <br>
Скриншоты Firefox это новая функция, позволяющая делать, скачивать, собирать и передавать скриншоты.  <br>
Чтобы использовать её, щёлкните по меню Действия страницы в адресной строке и выберите screenshots menu icon  <br>
Сделать скриншот в выпадающем меню. <br>
✅ Выключить: <br>
extensions.screenshots.system-disabled = true <br>
extensions.screenshots.disabled = true <br>
___
⭐**Pocket** <br>
[firefox@getpocket.com.xpi](https://support.mozilla.org/ru/kb/sohranit-veb-stranicy-dlya-posleduyushego-prosmotr) <br>
Кнопка Pocket позволяет сохранять веб-страницы и видео в Pocket всего одним щелчком мыши. Pocket удаляет всё ненужное и сохраняет страницу в чистом, строгом виде и позволяет получить доступ к ней через приложение Pocket. Всё, что вам нужно, это бесплатный аккаунт, соединение с интернетом и кнопка Pocket в адресной строке. <br>
✅ Выключить: <br>
extensions.pocket.enabled = false <br>
___
⭐ Web Compat** <br>
[webcompat@mozilla.org.xpi](https://superuser.com/questions/1117062/what-is-the-web-compat-firefox-addon-avast-suggest-removing) <br>
Urgent post-release fixes for web compatibility <br>
Срочные пост-релизные исправления для совместимости в Интернете. <br>
Команда WebCompat в Mozilla гарантирует, что веб-сайт корректно работает в Firefox, в большинстве случаев.
✅ Выключить аддон (думаю не стоит): <br>
///////////////////////////////////////////////////////////////////////////////////////////////////
// Рекомендуемое ПО
// Firemin - (https://www.rizonesoft.com/downloads/firemin/) 
// Сокращает потребление оперативной памяти браузером в несколько раз
// SpeedyFox - https://crystalidea.com/speedyfox
// Оптимизирует, путём сжатия баз данных, профиль для ускорения запуска и повышения производительности
///////////////////////////////////////////////////////////////////////////////////////////////////
([Интерфейс PROTON-fix](https://github.com/black7375/Firefox-UI-Fix)
 
Hide default Context Menu items in Firefox Proton (89+) release versions ([SimpleMenuWizard](https://github.com/stonecrusher/simpleMenuWizard)) 
___

## Как быстро найти нужную вкладку когда их слишком много

Вставьте в адресную строку "% " перед запросом. <br>
Запрос - заголовок вкладки (начало), реГиСтр не важен.
___
## Важные файлы и папки профиля

**key4.db** - сгенерированный ключ к зашифрованному файлу паролей (logins.json). <br>
Старый формат (до FF 58+): key3.db  <br>
**logins.json** - пароли в зашифрованном виде ([алгоритм 3des](https://ru.wikipedia.org/wiki/Triple_DES))<br>
**places.sqlite** - закладки и история <br>
**prefs.js** - настройки FF в т.ч. настройки about:config <br>
**search.json** - настройки поиска, список поиск.систем и поиск.система по умолчанию <br>
**xulstore.json** - настройки интерфейса FF <br>
**favicons.sqlite** - фавиконки сайтов (раньше хранились в **places.sqlite**). <br>
Если есть какие-то ошибки отображения фавиконов - можно удалить. <br>
**webappsstore.sqlite** - [веб-хранилище](https://ru.wikipedia.org/wiki/Web_Storage),
about: config > dom.storage.enabled > отключить = false<br>
**browser-extension-data** - папка с пользовательскими настройками аддонов <br>
**extensions** - папка с аддонами <br>
**extensions.json** - список аддонов, который также определяет какие из них включены/выключены. <br>
Также здесь хранятся ID аддонов и прочая информация об установленных аддонах.<br>

[Почти всё о папке профиля, её файлах, папках](http://kb.mozillazine.org/Profile_folder_-_Firefox) и т.д.: <br>

[Вверх](#_)
___
