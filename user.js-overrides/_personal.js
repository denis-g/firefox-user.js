/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "PERSONAL -- error");


/*** LOCALE ***/

// set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en");

// set search region
user_pref("browser.search.region", "EN");
user_pref("browser.search.countryCode", "EN");

// enforce fallback text encoding to match Cyrillic
user_pref("intl.charset.fallback.override", "windows-1251");


/*** UI/UX ***/

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

// tabs settings
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.insertAfterCurrent", true);

// bookmarks settings
user_pref("browser.toolbars.bookmarks.visibility", "always"); // enhanced with userChrome.css
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.bookmarks.showMobileBookmarks", false);
user_pref("browser.bookmarks.showRecentlyBookmarked", false);

// download settings
//user_pref("browser.download.dir", "");     // set your directory
//user_pref("browser.download.lastDir", ""); // set your directory

// reader settings
user_pref("reader.font_type", "serif");
user_pref("reader.content_width", 7);


/*** FIREFOX ACCOUNT ***/

// disable Firefox Accounts & Sync
user_pref("identity.fxaccounts.enabled", false);


user_pref("_user.js.status-log", "PERSONAL -- success");
