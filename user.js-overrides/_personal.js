/* Personal Firefox settings. Based by arkenfox/user.js     */
/* by Denis G. (https://github.com/denis-g/firefox-user.js) */

user_pref("_user.js.status-log", "PERSONAL -- error");


// set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en, ru-RU, ru");

// set search region
user_pref("browser.search.region", "EN");

// enforce fallback text encoding to match Cyrillic
user_pref("intl.charset.fallback.override", "windows-1251");

// enable "Dark Mode"
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("devtools.theme", "dark");
user_pref("reader.color_scheme", "dark");

// allow userChrome.css/userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// default newtab page
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", true);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);

// bookmarks settings
user_pref("browser.toolbars.bookmarks.visibility", "always"); // enhanced with userChrome.css

// download settings
//user_pref("browser.download.dir", "");     // set your directory
//user_pref("browser.download.lastDir", ""); // set your directory

// reader settings
user_pref("reader.font_type", "serif");
user_pref("reader.content_width", 7);


user_pref("_user.js.status-log", "PERSONAL -- success");
