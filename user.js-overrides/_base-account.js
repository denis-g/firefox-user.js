/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Firefox Account
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-account.js -- error");


// disable Firefox Account
user_pref("identity.fxaccounts.enabled", false);
// disable Firefox View
user_pref("browser.tabs.firefox-view", false);


// status for settings apply
user_pref("_user.js.status-log", "_base-account.js -- success");
