/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Media Content
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-media.js -- error");


// enable DRM (Netflix, Spotify, etc)
user_pref("media.eme.enabled", true);

// enable WebGL (iCloud, etc)
user_pref("webgl.disabled", false);

// disable MathML
user_pref("mathml.disabled", true);


// status for settings apply
user_pref("_user.js.status-log", "_base-media.js -- success");
