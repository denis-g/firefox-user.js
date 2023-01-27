/* Personal Firefox settings. Based by arkenfox/user.js     */
/* by Denis G. (https://github.com/denis-g/firefox-user.js) */

user_pref("_user.js.status-log", "PRIVACY -- error");


/******************************************************************************
 PRIVACY
******************************************************************************/

// set OCSP fetch failures (non-stapled) to hard-fail
user_pref("security.OCSP.require", false);

// control when to send a cross-origin referer
user_pref("network.http.referer.XOriginPolicy", 0);

// control the amount of cross-origin information to send
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

// dont require safe negotiation
user_pref("security.ssl.require_safe_negotiation", false);

// disable RFP
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);


user_pref("_user.js.status-log", "PRIVACY -- success");
