/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "PASSWORDS -- error");


/******************************************************************************
 PASSWORDS
******************************************************************************/

// disable saving passwords
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");


user_pref("_user.js.status-log", "PASSWORDS -- success");
