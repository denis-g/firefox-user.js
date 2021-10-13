/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "UI/UX -- error");


/******************************************************************************
 UI/UX
******************************************************************************/

// disable warnings
user_pref("browser.warnOnQuit", false);
user_pref("browser.warnOnQuitShortcut", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// disable autocopy
user_pref("clipboard.autocopy", false);

// enable spellcheck in all text boxes
user_pref("layout.spellcheckDefault", 2);

// disable Backspace key action
user_pref("browser.backspace_action", 2);

// disable middle-click auto-scrolling
user_pref("general.autoScroll", false);

// tabs settings
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.insertAfterCurrent", true);

// disable auto update top sites
user_pref("browser.topsites.useRemoteSetting", false);

// bookmark settings
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.bookmarks.showMobileBookmarks", false);
user_pref("browser.bookmarks.showRecentlyBookmarked", false);

// download settings
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.download.forbid_open_with", true);

// disable Welcome page
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");


user_pref("_user.js.status-log", "UI/UX -- success");
