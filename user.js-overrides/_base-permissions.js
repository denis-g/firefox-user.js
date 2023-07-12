/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Permissions
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-permissions.js -- error");


// set default permissions
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2);

// disable websites overriding Firefox's keyboard shortcuts
user_pref("permissions.default.shortcuts", 2);


// status for settings apply
user_pref("_user.js.status-log", "_base-permissions.js -- success");
