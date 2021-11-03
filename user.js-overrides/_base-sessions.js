/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "SESSIONS -- error");


/******************************************************************************
 SESSIONS
******************************************************************************/

// enable session
user_pref("browser.startup.page", 3);

// disable Firefox to clear items on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

// keep cookies and site data on close
user_pref("network.cookie.lifetimePolicy", 0);


user_pref("_user.js.status-log", "SESSIONS -- success");
