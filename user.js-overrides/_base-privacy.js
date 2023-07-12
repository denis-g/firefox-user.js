/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Privacy
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-privacy.js -- error");


// set OCSP fetch failures (non-stapled) to hard-fail
user_pref("security.OCSP.require", false);

// control when to send a cross-origin referer
user_pref("network.http.referer.XOriginPolicy", 0);

// control the amount of cross-origin information to send
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

// don't require safe negotiation
user_pref("security.ssl.require_safe_negotiation", false);

// disable RFP
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);


// status for settings apply
user_pref("_user.js.status-log", "_base-privacy.js -- success");
