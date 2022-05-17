/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "MEDIA -- error");


/******************************************************************************
 MEDIA
******************************************************************************/

// enable DRM (Netflix, Spotify, etc)
user_pref("media.eme.enabled", true);

// enable autoplay for media (YouTube, Spotify, etc)
user_pref("media.autoplay.blocking_policy", 0);

// enable WebGL (iCloud, etc)
user_pref("webgl.disabled", false);

// disable MathML
user_pref("mathml.disabled", true);


user_pref("_user.js.status-log", "MEDIA -- success");
