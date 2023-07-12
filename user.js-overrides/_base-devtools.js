/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * DevTools
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-devtools.js -- error");


// disable devtools news
user_pref("devtools.whatsnew.enabled", false);
user_pref("devtools.whatsnew.feature-enabled", false);

// disable cache when devtools open
user_pref("devtools.cache.disabled", true);

// enable user agent style inspection in rule-view
user_pref("devtools.inspector.showUserAgentStyles", true);

// many spaces to use when a Tab character is displayed
user_pref("devtools.editor.tabsize", 4);


// status for settings apply
user_pref("_user.js.status-log", "_base-devtools.js -- success");
