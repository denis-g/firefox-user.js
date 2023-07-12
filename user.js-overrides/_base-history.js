/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Browser History
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-history.js -- error");


// custom history settings
user_pref("privacy.history.custom", true);

// increase the amount of history that is retained
user_pref("places.history.expiration.max_pages", 10000000);


// status for settings apply
user_pref("_user.js.status-log", "_base-history.js -- success");
