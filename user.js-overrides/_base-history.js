/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "HISTORY -- error");


/******************************************************************************
 HISTORY
******************************************************************************/

// custom history settings
user_pref("privacy.history.custom", true);

// increase the amount of history that is retained
user_pref("places.history.expiration.max_pages", 10000000);


user_pref("_user.js.status-log", "HISTORY -- success");
