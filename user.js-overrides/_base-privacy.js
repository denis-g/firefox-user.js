/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

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

// isolate 3rd-party cookies and site-data
user_pref("network.cookie.cookieBehavior", 5);

// disable FPI for cross-origin logins
user_pref("privacy.firstparty.isolate", false);

// disable RFP
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);

// disable CRLite
user_pref("security.remote_settings.intermediates.enabled", false);
user_pref("security.remote_settings.intermediates.bucket", "");
user_pref("security.remote_settings.intermediates.collection", "");
user_pref("security.remote_settings.intermediates.signer", "");
user_pref("security.remote_settings.crlite_filters.enabled", false);
user_pref("security.remote_settings.crlite_filters.bucket", "");
user_pref("security.remote_settings.crlite_filters.collection", "");
user_pref("security.remote_settings.crlite_filters.signer", "");
user_pref("security.pki.crlite_mode", 0);

// disable non-modern cipher suites
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false);
user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false);
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_aes_256_sha", false);


user_pref("_user.js.status-log", "PRIVACY -- success");
