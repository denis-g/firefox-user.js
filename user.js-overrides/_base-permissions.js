/* Personal Firefox settings. Based by arkenfox/user.js     */
/* by Denis G. (https://github.com/denis-g/firefox-user.js) */

user_pref("_user.js.status-log", "PERMISSIONS -- error");


/******************************************************************************
 PERMISSIONS
******************************************************************************/

// set default permissions
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2);

// disable websites overriding Firefox's keyboard shortcuts
user_pref("permissions.default.shortcuts", 2);


user_pref("_user.js.status-log", "PERMISSIONS -- success");
