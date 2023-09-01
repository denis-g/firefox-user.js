/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Autofill for Address and Credit Cards
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-autofill.js -- error");


// disable autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);


// status for settings apply
user_pref("_user.js.status-log", "_base-autofill.js -- success");
