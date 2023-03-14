/* Personal Firefox settings. Based by arkenfox/user.js     */
/* by Denis G. (https://github.com/denis-g/firefox-user.js) */

user_pref("_user.js.status-log", "UI/UX -- error");


/******************************************************************************
 UI/UX
******************************************************************************/

// disable warnings
user_pref("browser.warnOnQuitShortcut", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// disable autocopy
user_pref("clipboard.autocopy", false);

// enable spellcheck in all text boxes
user_pref("layout.spellcheckDefault", 2);

// disable middle-click auto-scrolling
user_pref("general.autoScroll", false);

// tabs settings
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.insertAfterCurrent", true);

// disable "Firefox View" tab
user_pref("browser.tabs.firefox-view", false);

// clear default top sites
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);

// download settings
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.download.forbid_open_with", true);

// removed "More from Mozilla" from settings
user_pref("browser.preferences.moreFromMozilla", false);

// showed "Firefox Experiments" on settings
user_pref("browser.preferences.experimental", true);

// disable welcome page
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

// disable page promos
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);


user_pref("_user.js.status-log", "UI/UX -- success");
