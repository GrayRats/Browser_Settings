lockPref("browser.preferences.experimental", true);
//
// ДатаБаза Index API Violentmonkey (аддон),Twitter, Google Drive,Mega. и др..
user_pref("dom.indexedDB.enabled", true);
//user_pref("general.useragent.override", true); //Неправдоподобно выглядящий useragent ломает maps.yandex.ru и много что еще.
user_pref("svg.disabled", false); //youtube.com (плеер).
//
// 1.4 Что отобразит браузер после запуска
// Значения: 0 -> пустая вкладка, 1 -> домашняя страница, 2 -> последняя посещенная страница 
// 3 -> восстановление вкладок открытых до закрытия окна браузера
user_pref("browser.startup.page", 3);
// 1.6 Минимальная ширина вкладки
user_pref("browser.tabs.tabMinWidth", 35);
// 1.7 Предупреждать при закрытии всех вкладок справа от текущей
user_pref("browser.tabs.warnOnClose", false);
//
// 1.8 Предупреждать при закрытии всех вкладок кроме активной
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
// 1.9 Настройки анимации
user_pref("toolkit.cosmeticAnimations.enabled", true);  //Отключение  части анимац интерфейса
user_pref("ui.prefersReducedMotion", 0);  // Поставить на 1 отключить всю анимацию CSS
// 1.9.2 Анимация открытия окна браузера. Отключение false
user_pref("browser.stopReloadAnimation.enabled", false);
// 1.9.3 Анимация плавного движения верхней рамки за видимую часть экрана при переходе в полноэкранный режим.
user_pref("browser.fullscreen.animate", false);
// 1.9.4 Отключает притормаживающую на окнах с многими вкладками анимацию открытия и закрытия табов.
user_pref("browser.tabs.animate", false);
// 1.9.6 Плавное открытие и сворачивание окошек главного меню и просмотра истории
user_pref("xul.panel-animations.enabled", false);
// 1.9.8 Задержка перед отрисовкой меню
user_pref("ui.submenuDelay", 0);
// 1.10 Не выводить предупреждение при открытии страницы about:config
user_pref("browser.aboutConfig.showWarning", false);
// 1.11 Настройки полноэкранного режима
// 1.11.1 Отключить предупреждение о переходе в полноэкранный режим
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);
// 1.11.2 Задержка с переходом в полноэкранный режим
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
 
// 1.12 Отключить первое знакомство с интерфейсом
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// 1.20 Отключает приветственную страницу при первом запуске браузера с новым профилем.
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("browser.aboutwelcome.enabled", false);
//
/ 1.13 Не показывать страницу с информацией об установленном обновлении
user_pref("browser.startup.homepage_override.mstone", "ignore"); 
// Disable stat collection
user_pref("media.video_stats.enabled", false);
user_pref("media.autoplay.blocking_policy", 2);
// 1.15 выкл URL адрес полностью, включая HTTPS:// 
user_pref("browser.urlbar.trimURLs", true);
// 1.16 Поисковые подсказки
// Установите False, если хотите сократить утечку данных о посещаемых сайтах в поисковик по-умолчанию
// 1.16.1 Поисковые подсказки в адресной строке
user_pref("browser.urlbar.suggest.searches", true);
// 1.16.2 Подсказки в адресной строке на основе истории браузера
user_pref("browser.urlbar.suggest.history",	true);
// 1.16.3 Поисковые подсказки в отдельном поисковом поле, которое обычно находится справа от адресной строки
user_pref("browser.search.suggest.enabled", true);
// 1.17 Проверять орфографию во все полях
user_pref("layout.spellcheckDefault", 2);
// 1.18 При выделении слова не захватывать следующий пробел
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("dom.disable_beforeunload", false);
user_pref("browser.urlbar.openintab", true);
user_pref("browser.urlbar.quicksuggest.sponsoredIndex", 0);
user_pref("browser.urlbar.ctrlCanonizesURLs", false);
user_pref("browser.urlbar.experimental.firefoxSuggestLabels.enabled", true);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.eventTelemetry.enabled", false);
 
///
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
// для мобильной версии, но иногда в ноутбуках тоже есть какие-то сенсорЫ
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
// 1.23 Обновленный режим печати
user_pref("print.tab_modal.enabled", true);

// 1.24 Тёмная тема для инструментов разработчика
user_pref("devtools.theme", "dark");

// 1.25 Удалить предустановленные сайты для быстрого доступа по-умолчанию
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.places", true);

// 1.26 disable hiding mime types (Options>General>Applications) not associated with a plugin */
user_pref("browser.download.hide_plugins_without_extensions", false);

// 1.27 Встроенная страница новой вкладки Firefox с быстрым доступом к избранному и последним активностям
// Возможно отключить (false), если вы используете альтернативное расширение или просто хотите открывать пустую вкладку для ускорения
user_pref("browser.newtabpage.enabled", true);

// 1.28 Отключить модуль LaterRun, 
// предназначенный для показа новым пользователям различной справочной информации при n-ом запуске браузера
user_pref("browser.laterrun.enabled", false);

// 1.29 Отключает замеры времени запуска браузера и предложение сбросить профиль для его ускорения.
user_pref("browser.slowStartup.notificationDisabled", true);
// 1.63 Ввод поисковых запросов прямо в поисковом поле новой вкладки по умолчанию       
// Без данной настройки ввод будет сразу перескакивать в адрессную строку 
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
//
// 1.30 Отключает предложение сбросить профиль, если он не использовался 60 дней.
user_pref("browser.disableResetPrompt", true);

// 1.31 Отключает список рекомендуемых тем в Customize -> Themes.
user_pref("lightweightThemes.recommendedThemes", "");

// 1.32 Ленивая загрузка ранее открытых вкладок после перезапуска браузера
// true - загружается только активная вкладка, остальные вкладки загружаются по мере их открытия пользователем
// false - все вкладки загружаются одновременно после запуска браузера
user_pref("browser.sessionstore.restore_on_demand", true); 

// 1.33 Возможность пожаловаться на расширение при его удалении
user_pref("extensions.abuseReport.enabled", false);



// 1.34 Настройки плавной прокрутки страниц
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.1");
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 125);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.7");
user_pref("mousewheel.min_line_scroll_amount", 25);

// 1.35 Разрешить скриптам и сайтам изменять контекстное меню  вызываемое по правому клику мыши
user_pref("dom.event.contextmenu.enabled", true);

// 1.36 Запретить скриптам вызывать более 3 всплывающих окон подряд
user_pref("dom.popup_maximum", 3);

// 1.37 Убрать пунктирную рамку у ссылок
user_pref("browser.display.focus_ring_width", 0);


// 1.38 Скрыть панель "Что нового" в меню
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// 1.39 Частота проверки страницы на изменения для перезагрузки кэша и обновления
// Возможные значения 0=один раз за сессию 1=каждый раз при просмотре страницы
// 2=не проверять, использовать кэш браузера 3=проверять, когда страница устарела (определяется автоматически)
user_pref("browser.cache.check_doc_frequency", 1);

// 1.41 Не выгружать вкладки (не усыплять) даже если не хватает свободной памяти
user_pref("browser.tabs.unloadOnLowMemory", false);

// 1.42 Настройки поиска по странице
// 1.42.1 Отображать положение всех найденных элементов на скрулбаре (полосе прокрутки)
user_pref("ui.textHighlightBackground", "Fireprick");
// 1.42.2 Выделять все найденные результаты
user_pref("findbar.highlightAll", true);    
// 1.42.3 Затемнять остальной контент на странице
user_pref("findbar.modalHighlight", true);
// 1.42.4 Отключить звукоковой сигнал, если ничего не найдено
user_pref("accessibility.typeaheadfind.enablesound", false);
// 1.42.5 Поиск текста на странице по мере его набора
user_pref("accessibility.typeaheadfind", true);

// 1.44 Отключить показ меню при нажатии кнопки Alt
// Вызывает ложные переключения для людей у которых переключения языка настроено на 
// Alt+Shift
user_pref("ui.key.menuAccessKey", 0);
user_pref("ui.key.menuAccessKeyFocuses", false);
// 1.45 Поведение клавиши Backspase (удаляющей один символ в текстовых редакторах)
// Значения: 
// 0=при нажатии на клавишу происходит возвращение назад
// 1=при нажатии на клавишу переход вперёд
// 2=при нажатии на клавишу данная клавиша игнорируется браузером
user_pref("browser.backspace_actio", 2);
// 1.47 Вставлять текст нажатием колёсика
// Замените на True, если хотите включить данную функцию
user_pref("middlemouse.paste", false);
////////
////////
////////
user_pref("browser.newtabpage.enhanced", true);
user_pref("browser.contentblocking.introCount", 20);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("services.sync.prefs.sync.browser.uiCustomization.state", true);
user_pref("browser.compactmode.show", true);
/////======
// 1.48 Количество строк подсказок в адресной строке
// Значение -1 полностью отключает подсказки
user_pref("browser.urlbar.maxRichResults", 15);
// 1.52 Хранение настроек масштабирования веб-страниц
// Значения true - для каждого сайта свой масштаб false - для всех сайтов одинаковый масштаб
user_pref("browser.zoom.siteSpecific", true);
user_pref("nglayout.enable_drag_images", true);
user_pref("browser.tabs.tabClipWidth", 36);
user_pref("browser.tabs.closeButtons", false);
user_pref("browser.tabs.closeTabByDblclick", false);
user_pref("browser.tabs.tabmanager.enabled", true);
// 1.53 Включить интеграцию с центром уведомлений Windows 10
user_pref("alerts.useSystemBackend", true);
// 1.54 Не отображать уведомление о блокировке содержимого
user_pref("browser.contentblocking.introCount", 20);

// 1.56 Отображать избранные сайты на странице новой вкладки по умолчанию в 4 столбца
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 6);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 5);
user_pref("browser.newtabpage.activity-stream.section.topstories.rows", 0);

//==-=-==-=

// 1.64.1 Позволяет использовать пользовательские таблицы стилей в папке chrome в папке профиля пользователя
// Рекомендую данный твик интерфейса https://github.com/black7375/Firefox-UI-Fix
// (!) Но я не имею отношения к его авторам и не несу никакой ответственности (как обычно)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Параметры ниже нужны для корректной работы многих пользовательских твиков интерфейса
// 1.64.2 Поддержка изменения цвета для svg иконок
user_pref("svg.context-properties.content.enabled", true);
// 1.64.3 Поддержка эффектов размытия
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.urlbar.suggest.calculator", true);
////////3D
////////3D
////////3D
// 2.2.2 Полное отключение WebGL
//user_pref("webgl.disabled", true);
// 2.2.3 Дополнительная обработка изображений с использованием WebGL
user_pref("webgl.angle.force-warp", true);
user_pref("webgl.msaa-force", true);
// 2.2.4 Выполнение отрисовки некоторых отдельных элементов страницы через WebGL в отдельном потоке
user_pref("gfx.offscreencanvas.enabled", true);
// 2.6 Рендер PDF средствами видеокарты
user_pref("pdfjs.enableWebGL", true);
user_pref("javascript.options.warp", true);
///
user_pref( "layout.frame_rate.precise", true);
user_pref( "layers.acceleration.force-enabled", true);
user_pref( "layers.offmainthreadcomposition.enabled", true);
user_pref( "layers.async-video.enabled", true);
user_pref( "layers.offmainthreadcomposition.async-animations", true);
// 3д ускорение Force
user_pref("layers.force-active", true); 
user_pref("layers.accelerate-all", true);
user_pref( "layers.acceleration.disabled;false", true);
//
user_pref( "layers.offmainthreadcomposition.enabled", true);
user_pref( "gfx.webrender.all", true);
user_pref( "gfx.webrender.enable", true);
user_pref( "layers.omtp.enabled", true);
//
user_pref( "gfx.canvas.azure.accelerated", true);
user_pref( "gfx.webrender.compositor.force-enabled", true); //рекомендуется использовать композитор С ВидеоКартой
// Принудительное декодирование видео видеокартой
// user_pref("media.hardware-video-decoding.force-enabled", true);

// 2.8 Аппаратное ускорение для Linux систем
// 2.8.1 Включить Video Acceleration API (VA-API). Для окружений на базе Wayland
user_pref("widget.wayland-dmabuf-vaapi.enabled", true);
// 2.8.2 Включить FFmpegDataDecoder. Для окружений на базе Wayland
// user_pref("widget.wayland-dmabuf-webgl.enabled", true);
user_pref("media.wmf.low-latency.enabled", true);
user_pref("nglayout.initialpaint.delay", 10);
// после которых браузер будет ожидать полную загрузку
user_pref("content.notify.backoffcount", 5);



// 3.3 Время выполнения JS скриптов (10мс по умолчанию) для медленных сетей лучше увеличить
user_pref("dom.max_script_run_time", 30);
user_pref("dom.max_script_run_time_without_important_user_input", 30);
// 3.4 "Ленивая" загрузка изображений
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true);

//ПАМЯТЬ
// 4.7 Подгрузка страниц из кэша
// Включать (true) имеет смысл только если используете дисковый кэш на SSD !СЕТИ
user_pref("network.http.rcwn.enabled", true);    
// выгрузку Firefox в файл подкачки, пока, собственно, браузер свернут
user_pref("config.trim_on_minimize", "false");
// 4.11 Включить кэш в оперативной памяти
user_pref("browser.cache.memory.enable", true);
//
/////////////////////////////////////////////////////////////
// 5. Настройки DNS /////////////////////////////////////////
/////////////////////////////////////////////////////////////
/ 5.1 Базовая настройка DNS
// Возможные значения:
// 0=Использовать DNS системы
// 2=Использовать DNS over HTTPS (DOH) или DNS ОС по-умолчанию в зависимости от того, что быстрее
// 3=Использовать только безопасный и поддерживающий шифрование DNS over HTTPS (DOH)
// Обратите внимание, что для определения сервера DOH и телеметрии будет продолжать использоваться DNS ОС по-умолчанию
user_pref("network.trr.mode", 3);
// user_pref(" ", false);
// 5.2 URL сервера DNS over HTTPS (DOH), который вы желаете использовать
// Для максимальной безопасности из коробки, а также для фильтрации рекламы
// Рекомендую использовать NextDNS - https://nextdns.io/?from=ujt3ybkq (реферальная ссылка)
// NextDNS предлагает 300 000 запросов в месяц бесплатно (хватает большинству обычных пользователей), 
// А затем переходит в режим классического DNS сервера без фильтрации

// По-умолчанию настроен Comss.one DNS - https://www.comss.ru/page.php?id=7315
user_pref("network.trr.uri", "https://dns.comss.one/dns-query");
user_pref("network.trr.custom_uri", "https://dns.comss.one/dns-query");

// Вариативно - https://controld.com/ от Winscribe (сервера по всему миру, фильтрация вирусов, рекламы и трекинга)
//user_pref("network.trr.uri", "https://freedns.controld.com/p2");
//user_pref("network.trr.custom_uri", "https://freedns.controld.com/p2");
//
// Вариативно - https://ahadns.com/ (сервер в Польше, фильтрация вирусов, рекламы и трекинга)
//user_pref("network.trr.uri", "https://doh.pl.ahadns.net/dns-query");
//user_pref("network.trr.custom_uri", "https://doh.pl.ahadns.net/dns-query");
//
//
// 5.3 Использовать DOH без исключений, в том числе при активном VPN и подключении через Proxy
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
user_pref("network.trr.enable_when_nrpt_detected", true);
user_pref("network.trr.enable_when_proxy_detected", true);
user_pref("network.trr.enable_when_vpn_detected", true);
user_pref("network.proxy.socks_remote_dns", true);
//
// 5.4 Отключить поддержку соединения с DNS через IPv6 
//user_pref("network.dns.disableIPv6", true);
// 5.4.1 Не ждать IPv6
user_pref("network.trr.early-AAAA ", false);
// 5.4.2 Не использовать IPv6 если отсутствует его поддержка
user_pref("network.trr.skip-AAAA-when-not-supported", true);
// 5.4.3 Ждать ответа с записями для доступа к сайту и по IPv4 и по IPv6
user_pref("network.trr.wait-for-A-and-AAAA", false); 
//
// 5.5 Активировать eSNI в режиме соединения через DOH для шифрования DNS запросов, 
// чтобы скрыть их от вашего провайдера 
// В актуальных версиях Firefox поддержка eSNI завершена
user_pref("network.security.esni.enabled", true);
//
// 5.6 Активация ECH (Encrypted Client Hello) - пришло вместо ESNI в FF 85, решает схожие задачи
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.use_https_rr_as_altsvc", true);
//
// 5.7 Вы можете установить IP адрес DNS сервера установленного в (5.2) для того, чтобы браузер не искал его
// у DNS сервера установленного в ОС по-умолчанию
// Обычно в данной настройке нет необходимости
// user_pref("network.trr.bootstrapAddress", "");
//
// 5.8 Частота с которой Firefox повторно обращается к DOH серверу для обновления данных
user_pref("network.trr.blacklist-duration", 60);
//
// 5.9 Не отправить DNS серверу User Agent браузера
user_pref("network.trr.send_user-agent_headers", false); 
//
// 5.10 Отключить предварительный опрос DNS сервера об имеющихся на странице ссылках
// http://kb.mozillazine.org/Network.dns.disablePrefetch
// Установите оба значения true если желаете отключить данную функцию
// В значении false браузер будет заранее опрашивать DNS сервер
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
//
user_pref("dom.disable_window_open_feature.close", true);
//
// 7.27 Запрет скриптам скрывать адресную строку
user_pref("dom.disable_window_open_feature.location", true);
//
// 7.28 Запрет скриптам передвигать и изменять размер окон браузера
user_pref("dom.disable_window_move_resize", true);

////////////////////////////////////////////////////////////
// 7. Безопасность //////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 7.7 Режим семейной безопасности в Windows 8.1
// Возможные значения 0=Режим не проверяется, сертификат не импортируется
// 1=Браузер видит данный режим, но сертификат не импортируется
// 2=При обнаружении режима семейной безопасности импортируется сертификат, дающий Windows возможность управлять трафиком браузера
user_pref("security.family_safety.mode", 0);
//
// 7.8 Проверка сертификатов на надёжности подписавшего их удостоверяющего центра
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// Возможные значения 0=Отключено 1=Разрешение для локально установленных (например антивирусом), 2=Строгая проверка
user_pref("security.cert_pinning.enforcement_level", 2);
// 7.18 Отображать иконку и текст об потенциальной опасности незащищенных шифрованием сайтов
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
//
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
//
// 7.1 Блокировка подключения к хостам использующим устаревшие и потенциально уязвимые протоколы шифрования SSL/TLS
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.require_safe_negotiation
user_pref("security.ssl.require_safe_negotiation", true);  Instagram, Mega.nz, многие другие.

// 7.2 Запрет на использование устаревших и уязвимых TLS 1.0 и 1.1
user_pref("security.tls.version.enable-deprecated", false);
user_pref("security.tls.version.max", 4;
user_pref("security.tls.version.min", 3);
user_pref("tcp.tcp_fastopen_enable", true);
user_pref("network.ftp.enabled", true);
// 7.3 OCSP (Online Certificate Status Protocol) для подтверждения, что SSL сертификат сайта действителен и безопасен
user_pref("security.ssl.enable_ocsp_stapling", true);

// 7.4 Проверка валидности OCSP через обращение к удостоверяющему центру
// Значения: 0=Отключено, 1=Включено (по-умолчанию), 2=Только для сайтов с EV сертификатом
// (!)Данная настройка снижает вашу анонимность, но необходима для безопасности
user_pref("security.OCSP.enabled", 2);

// 7.5 Сайты не будут загружаться без получения подтверждения через OCSP
// (!!!) Настройка очень полезна для повышения уровня безопасности, но 
// часто ломает DNS over HTTPS в портативных и стабильных версиях Firefox
// Включайте самостоятельно, смотрите, как будет работать лично у вас
//user_pref("security.OCSP.require", true);

// 7.6 Блокировка алгоритма SHA1
// Возможные значения 0=Все SHA1 сертификаты разрешены 1=Все SHA1 заблокированы
// 3=Разрешены только локальные сертификаты, например, установленные антивирусами
// 4=Разрешены локальные + подписанные в 2015 году или ранее
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.tls.enable_delegated_credentials", true);


// 7.9 Использовать CRLite для более быстрой проверки надежности удостоверяющих центров
// https://blog.mozilla.org/security/2020/01/09/crlite-part-2-end-to-end-design/
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
// Безопасность.
// ВКЛЮЧИТЬ TrackingProtection
user_pref("privacy.trackingprotection.enabled", true);
//
// 7.10 Заблокировать выполнение скриптов, загружающихся по открытому соединению, на https страницах
user_pref("security.mixed_content.block_active_content", true); 
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enable", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// 
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.debugSlowSql ", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
// Позволяет сайту следить за действиями пользователя, когда он копирует выделенный текст.копирование текста из редактора).
user_pref("dom.event.clipboardevents.enabled", true); // НеРекомендуется
// dom performance Отключаем передачу браузером информации о времени начала и окончания загрузки страницы pornhub.com (авторизация).
user_pref("dom.enable_performance", "true");
/// Отключить трекинг trackingprotection
lockPref("browser.trackingprotection.gethashURL", "");
lockPref("browser.trackingprotection.updateURL", "");
lockPref("browser.contentblocking.report.cookie.url", "");
lockPref("browser.contentblocking.report.cryptominer.url", "");
lockPref("browser.contentblocking.report.endpoint_url", "");
lockPref("browser.contentblocking.report.fingerprinter.url", "");
lockPref("browser.contentblocking.report.manage_devices.url", "");
lockPref("browser.contentblocking.report.mobile-android.url", "");
lockPref("browser.contentblocking.report.mobile-ios.url", "");
lockPref("browser.contentblocking.report.proxy_extension.url", "");
lockPref("browser.contentblocking.report.social.url", "");
lockPref("browser.contentblocking.report.tracker.url", "");
lockPref("browser.contentblocking.reportBreakage.url", "");
///
lockPref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.enabled", false);
lockPref("services.sync.prefs.sync.privacy.trackingprotection.enabled", false);
lockPref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.enabled", false);
lockPref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", false);
////
user_pref("privacy.userContext.ui.enabled", true);
////
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("pdfjs.enableScripting", false);
user_pref("dom.battery.enabled", false);
// Отключает запоминание уровня зума для сайта 
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);
user_pref("privacy.spoof_english", 2);
// 7.11 Запретить Flash плагину на https страницах обращаться к не зашифрованным ресурсам
user_pref("security.mixed_content.block_object_subrequest", true);
//
user_pref("network.cookie.cookieBehavior", 4);
//  0 = принимать все файлы Cookie по умолчанию.
//  1 = принимать файлы Cookie только от определенного сайта (блокировать сторонние файлы Cookie)
//  2 = блокировать все файлы Cookie по умолчанию
//  3 = блокировать файлы Cookie от ранее не знакомых сайтов
//  4 = новая политика хранения файлов Cookie (предотвращение доступа к хранилищу для трекеров)


// 7.12 Блокировка небезопасных алгоритмов шифрования, уязвимых для хакерских атак
// 7.12.1 Отключение 3DES с размером ключа < 128 и отсутствием поддержки Perfect forward secrecy (PFS)
// по состоянию на 10.06.2021 данный шифр используется популярный хостинг изображений radikal.ru
// но для максимальной безопасности я рекомендую его отключить (установить значение false)
user_pref("security.ssl3.rsa_des_ede3_sha", true);
// 7.12.2 Отключение некоторых устаревших алгоритмов
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
// Шифр ниже до сих пор активно используется в рунете, например, сайтом nnmclub
// но для максимальной безопасности я рекомендую его отключить (установить значение false)
user_pref("security.ssl3.rsa_aes_256_sha", true); // no PFS
// без алгоритма ниже не будет работать популярный rutracker
// тем не менее вы всегда сможете открыть сайт нажав кнопку "восстановить настройки по-умолчанию"
// чтобы открыть сайт, а после перезагрузки user.js вернет блокировку слабого алгоритма
// таким образом рекомендую данный алгоритм отключить, но оставлю его включенным для основной массы пользователей
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
// 7.12.3 Отключение алгоритма 3DES с размером ключа < 128
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
// 7.12.4 Отключение поддержки шифрования с пустым ключом
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
// 1.62 Отключает текстовое сообщения о проигрываемом медиа во второй строке ниже названия вкладки
//
user_pref("browser.tabs.secondaryTextUnsupportedLocales", "ar,bn,bo,ckb,fa,gu,he,hi,ja,km,kn,ko,lo,mr,my,ne,pa,si,ta,te,th,ur,zh,ru")
// 7.13 Отключение технологии 0-RTT (round-trip time)
// 0-RTT позволяет отправить часть данных серверу до согласования с ним шифрования,
// что может быть небезопасно в исключительных ситуациях
// (!) Данная настройка незначительно увеличивает время соединения с https сайтами
// https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/
user_pref("security.tls.enable_0rtt_data", false);
/ 7.13.1  Отключение технологии, ускоряющей на 30% установку SSL соединения за счет
// объединения ряда запросов при согласовании зашифрованного канала
// Функция отключена, так как ранее Firefox имел уязвимость связанную с данной настройки,
// которая потенциально может быть до сих пор актуальна
// https://bugzilla.mozilla.org/show_bug.cgi?id=919877
user_pref("security.ssl.enable_false_start", false);

// 7.14 Уведомление о том, что сервер использует устаревший алгоритм шифрования
// (!) Данная настройка является страховкой на случай отключения (7.1)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// 7.35 Задержка для некоторых диалогов подтверждения, например, установки расширений
// (!) Не устанавливайте значение 0, чтобы избежать случайных действий
user_pref("security.dialog_enable_delay", 700);

// 7.36 Отключить автоматическую установку некоторых инструментов разработки, например, ADB-helper
user_pref("devtools.webide.autoinstallFxdtAdapters", false);

// 7.37 Отключить возможность загружать напрямую файлы из некоторых архивов через протокол jar
// Функция несёт потенциальную опасность для атак типа межсайтовый скриптинг
// 7.47 Запрет сайтам устанавливать соединения на критически важные порты, занятые I2P и Tor, 
// а также блокировка некоторых портов, используемых ранее в хакерских атаках
user_pref("network.security.ports.banned", "4444,9050,9051,69,137,161,1719,1720,1723,6566,5060,5061,10080");

user_pref("privacy.window.name.update.enabled", true);

// Отключение может незначительно повысить производительность браузера, но только на ваш страх и риск
user_pref("javascript.options.spectre.index_masking", false);
user_pref("javascript.options.spectre.jit_to_C++_calls", false);
user_pref("javascript.options.spectre.object_mitigations.barriers", false);
user_pref("javascript.options.spectre.object_mitigations.misc", false);
user_pref("javascript.options.spectre.string_mitigations", false);
user_pref("javascript.options.spectre.value_masking", false);
//
user_pref("breakpad.reportURL", "false");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("dom.push.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "blank");
//
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", blank);
user_pref("browser.safebrowsing.provider.google4.updateURL", blank);
user_pref("browser.safebrowsing.provider.google4.reportURL", blank);
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", blank);
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", blank);
user_pref("browser.safebrowsing.provider.google4.lists", blank);
user_pref("browser.safebrowsing.provider.google4.gethashURL", blank);
//
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", blank);
user_pref("browser.safebrowsing.provider.google4.advisoryURL", blank);
user_pref("browser.safebrowsing.provider.google4.advisoryName ", blank);
user_pref("browser.safebrowsing.provider.google.updateURL", blank);
user_pref("browser.safebrowsing.provider.google.reportURL", blank);
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", blank);
user_pref("browser.safebrowsing.provider.google.pver", blank);
user_pref("browser.safebrowsing.provider.google.lists", blank);
user_pref( "browser.safebrowsing.provider.google.gethashURL", blank);
user_pref( "browser.safebrowsing.provider.google.advisoryURL ", blank);
user_pref( "browser.safebrowsing.downloads.remote.url", blank);
user_pref( "safebrowsing.malware.enabled", false);
user_pref( "safebrowsing.phishing.enabled", true);
// Отсоединить вкладку, перетащив ее из окна 
// Дизайна//
// Дизайна//
user_pref("layout.css.devPixelsPerPx", "1.00"); // Масштабирование ИнтерфейсА
user_pref( "browser.tabs.allowTabDetach", true);
// главный переключатель нового дизайна. 
user_pref("browser.proton.doorhangers.enabled", true);
user_pref("browser.proton.infobars.enabled", true);
user_pref("browser.proton.places-tooltip.enabled", true);
user_pref("browser.proton.urlbar.enabled", true);
user_pref("browser.startup.blankWindow", false);
user_pref("browser.startup.homepage.abouthome_cache.enabled", true);
user_pref("browser.startup.preXulSkeletonUI", true);
// удобный режим чтения страницы, при котором все, кроме текста удаляется.
user_pref("reader.color_scheme", "sepia");
user_pref("reader.content_width", 7);
user_pref("reader.line_height", 2);
user_pref("reader.font_size", 6);
user_pref("reader.toolbar.vertical", true);
user_pref("reader.errors.includeURLs", false);
//
//
//
user_pref("browser.link.open_newwindow", "3"); // Открытие ссылок из внешних окон 
user_pref("browser.link.open_newwindow.override.external", "3"); // Открытие приложнение из внешних окон 
/// Функция позволяет выбрать высоту вкладок и адресной строки
///predictor.enabled"disablePrefetch отвечают за предварительное посещение ссылок
///fastopen_enable" включает TCP Fast Open
user_pref("network.tcp.tcp_fastopen_enable", true);
user_pref("browser.uidensity", 1);
user_pref("network.allow-experiments", false); //телеметрия
user_pref("network.cookie.prefsMigrated", true); //позволяет сохранять кукисы при смене версий Лисы
user_pref("network.predictor.enabled", false);
user_pref("network.warnOnAboutNetworking", false)
// увидеть ваши закладки с мобильной версии, если у вас подключена синхронизация.
user_pref("browser.bookmarks.showMobileBookmarks", true);
// При переключении вкладок отображаются превью страниц
user_pref("browser.ctrlTab.previews", true);
///
///////////ШРИФТ/FONTs
user_pref("findbar.highlightAll", true);
user_pref("font.internaluseonly.changed", true);
user_pref("font.minimum-size.x-western", 10);
user_pref("font.name.monospace.x-western", "Cascadia Mono");
user_pref("font.name.sans-serif.x-cyrillic", "PT Astra Sans");
user_pref("font.name.sans.x-cyrillic", "PT Astra Sans");
user_pref("font.name.monospace.x-cyrillic", "Verdana");
user_pref("font.default.el"                     , "sans-serif");
user_pref("font.default.x-baltic"               , "sans-serif");
user_pref("font.default.x-central-euro"         , "sans-serif");
user_pref("font.default.x-cyrillic"             , "sans-serif");
user_pref("font.default.x-unicode"              , "sans-serif");
user_pref("font.default.x-user-def"             , "sans-serif");
user_pref("font.default.x-western"              , "sans-serif");
user_pref("font.name.monospace.el"              , "PT Mono");
user_pref("font.name.monospace.x-baltic"        , "PT Mono");
user_pref("font.name.monospace.x-central-euro"  , "PT Mono");
user_pref("font.name.monospace.x-unicode"       , "PT Mono");
user_pref("font.name.monospace.x-user-def"      , "PT Mono");
user_pref("font.name.sans-serif.el"             , "Liberation Sans");
user_pref("font.name.sans-serif.x-central-euro" , "PT Sans");
user_pref("font.name.sans-serif.x-unicode"      , "DejaVu Sans");
user_pref("font.name.sans-serif.x-user-def"     , "PT Sans");
user_pref("font.name.sans-serif.x-western"      , "PT Sans");
user_pref("font.name.serif.el"                  , "Liberation Serif");
user_pref("font.name.serif.x-central-euro"      , "PT Serif");
user_pref("font.name.serif.x-unicode"           , "DejaVu Serif");
user_pref("font.name.serif.x-user-def"          , "PT Serif");
user_pref("font.name.serif.x-western"           , "PT Serif");
//
//
//
user_pref("gfx.text.disable-aa", "true"); // отключает сглаживание firefox
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", "5");
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", "100");
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", "1000");
user_pref("gfx.font_rendering.cleartype_params.gamma", "2200");
user_pref("gfx.use_text_smoothing_setting", true);
user_pref("gfx.canvas.azure.backends", "direct2d1.1,skia,cairo");
//
//
user_pref("media.autoplay.enabled", false);
user_pref("media.av1.enabled", true);
// GTK
user_pref("widget.chrome.allow-gtk-dark-theme", true);
user_pref("widget.content.allow-gtk-dark-theme", true);
// user_pref("widget.content.gtk-theme-override", "Adwaita:light");
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.panel.shown", true);
//
user_pref("dom.ipc.processCount", "8"); /// Измените количество Процессов контента ВКЛАДОК 8
/// изменить окно просмотра 
user_pref("gfx.webrender.picture-tile-height", "254");
user_pref("gfx.webrender.picture-tile-width", " 510");
////////////////
user_pref("security.csp.enable", true); // [DEFAULT: true]
/* 6004: enforce a security delay on some confirmation dialogs such as install, open/save
/* [1] https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/ 
/***/
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("dom.storage.next_gen", true); // [DEFAULT: true FF92+] API
user_pref("accessibility.force_disabled", 1); // службы доступности для улучшения производительности
user_pref("beacon.enabled", false); /* https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon ***/
user_pref("dom.serviceWorkers.enabled", true); // API запросов серверса dom
//
//
// Для воспроизведения video html5 с помощью ffmpeg.БЕЗОПАСНО
//user_pref("media.fragmented-mp4.exposed", true);
//user_pref("media.fragmented-mp4.ffmpeg.enabled", true);
//user_pref("media.mediasource.mp4.enabled", true);
//user_pref("media.mediasource.youtubeonly", false);
//
//
// Кеш в tmpfs для уменьшения износа дисков
user_pref("browser.cache.disk.parent_directory", "/tmp/username-cache-firefox");
// Отключаем WebRTC ?
user_pref("privacy.webrtc.globalMuteToggles", true);  // WebRTC Global Mute Toggles
//user_pref("media.peerconnection.enabled", false);
//ser_pref("media.peerconnection.ice.default_address_only", true);
//user_pref("media.peerconnection.ice.no_host", true);
//user_pref("media.peerconnection.ice.relay_only", true);
//user_pref("media.peerconnection.ice.tcp", false);
//user_pref("media.peerconnection.identity.enabled", false);
//user_pref("media.peerconnection.turn.disable", true);
//user_pref("media.peerconnection.use_document_iceservers", false);
//user_pref("media.peerconnection.video.enabled", false);
//user_pref("media.peerconnection.default_iceservers", "[]");
// Включает механизм отправки нескольких HTTP запросов не дожидаясь ответов. Немного ускоряет.
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.proxy.pipelining", true);


user_pref("layout.css.osx-font-smoothing.enabled", true);
user_pref("layout.word_select.stop_at_punctuation", true);


// experimentis подстройки
user_pref("dom.indexedDB.experimental", false);
user_pref("media.mediasource.experimental.enabled", false);
user_pref("dom.media.autoplay.autoplay-policy-api", true);
user_pref("media.wmf.low-latency.enabled", false);
