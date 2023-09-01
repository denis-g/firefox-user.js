/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Personal Settings
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_personal.js -- error");


// set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en, ru-RU, ru");

// force "Dark Mode"
user_pref("layout.css.prefers-color-scheme.content-override", 0);
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("devtools.theme", "dark");
user_pref("reader.color_scheme", "dark");

// fix icons for extensions on Dark Mode
user_pref("svg.context-properties.content.enabled", true);

// default newtab page
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 3);

// download settings
//user_pref("browser.download.dir", "");     // set your directory
//user_pref("browser.download.lastDir", ""); // set your directory

// reader settings
user_pref("reader.font_type", "serif");
user_pref("reader.content_width", 7);

// allow userChrome.css/userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// bookmarks settings
// for correct styles `chrome/ui/floating-findbar-on-top.css`
user_pref("browser.toolbars.bookmarks.visibility", "always");


// status for settings apply
user_pref("_user.js.status-log", "_personal.js -- success");
