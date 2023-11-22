/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "user.js -- error");


/******************************************************************************
 * Firefox Account
 *****************************************************************************/

// disable Firefox Account
user_pref("identity.fxaccounts.enabled", false);
// disable Firefox View
user_pref("browser.tabs.firefox-view", false);


/******************************************************************************
 * Web APIs
 *****************************************************************************/

// enable prioritized Task Scheduling
user_pref("dom.enable_web_task_scheduling", true);
// disable Web Notifications
user_pref("dom.webnotifications.enabled", false);
// disable Push API
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");
// disable many APIs
user_pref("dom.gamepad.enabled", false);
user_pref("device.sensors.enabled", false);
// disable touch events
user_pref("dom.w3c_touch_events.enabled", 0);
// disable event for device such as a camera, mic, or speaker is connected or removed
user_pref("media.ondevicechange.enabled", false);


/******************************************************************************
 * Autofill For Inputs
 *****************************************************************************/

user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);


/******************************************************************************
 * DevTools
 *****************************************************************************/

// disable devtools news
user_pref("devtools.whatsnew.enabled", false);
user_pref("devtools.whatsnew.feature-enabled", false);
// disable cache when devtools open
user_pref("devtools.cache.disabled", true);
// enable user agent style inspection in rule-view
user_pref("devtools.inspector.showUserAgentStyles", true);
// many spaces to use when a Tab character is displayed
user_pref("devtools.editor.tabsize", 2);


/******************************************************************************
 * Built-in Extensions
 *****************************************************************************/

// disable extensions
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);


/******************************************************************************
 * History
 *****************************************************************************/

// custom history settings
user_pref("privacy.history.custom", true);
// increase the amount of history that is retained
user_pref("places.history.expiration.max_pages", 10000000);


/******************************************************************************
 * Media Content
 *****************************************************************************/

// enable DRM (Netflix, Spotify, etc)
user_pref("media.eme.enabled", true);
// enable WebGL (iCloud, etc)
user_pref("webgl.disabled", false);
// disable MathML
user_pref("mathml.disabled", true);


/******************************************************************************
 * Network
 *****************************************************************************/

user_pref("network.dns.disableIPv6", true);


/******************************************************************************
 * Password Manager
 *****************************************************************************/

// disable saving passwords
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
// disable web extension restrictions (Bitwarden, 1Password, etc)
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false);
user_pref("extensions.webextensions.restrictedDomains", "");


/******************************************************************************
 * Permissions
 *****************************************************************************/

// set default permissions
user_pref("permissions.default.geo", 0);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2);
// disable websites overriding Firefox's keyboard shortcuts
user_pref("permissions.default.shortcuts", 2);


/******************************************************************************
 * Privacy
 *****************************************************************************/

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
// disable VPN promotions
user_pref("browser.privatebrowsing.vpnpromourl", "");
// Cookie Banner handling
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);


/******************************************************************************
 * Search
 *****************************************************************************/

// enable location bar using search
user_pref("keyword.enabled", true);
// enable copying unicode symbols
user_pref("browser.urlbar.decodeURLsOnCopy", true);
// enable live search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
// highlight all hits on search
user_pref("findbar.highlightAll", true);


/******************************************************************************
 * Sessions
 *****************************************************************************/

// resume previous session
user_pref("browser.startup.page", 3);
// disable Firefox to clear all history on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", false);


/******************************************************************************
 * Fastfox
 * https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js
 *****************************************************************************/

// notification interval (in microseconds) to avoid layout thrashing
user_pref("content.notify.interval", 100000);
// GPU-accelerated Canvas2D
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);
// compression level for cached JavaScript bytecode
user_pref("browser.cache.jsbc_compression_level", 3);
// media memory cache
//user_pref("media.memory_cache_max_size", 65536); // already on arkenfox.js
// adjust video buffering periods when not using MSE
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
// image cache
user_pref("image.mem.decode_bytes_at_a_time", 32768);
// use bigger packets
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
// increase the absolute number of HTTP connections
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
// pacing requests
user_pref("network.http.pacing.requests.enabled", false);
// adjust DNS expiration time
user_pref("network.dnsCacheExpiration", 3600);
// the number of threads for DNS
user_pref("network.dns.max_high_priority_threads", 8);
// increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 10240);
// DNS prefetching
//user_pref("network.dns.disablePrefetch", true); // already on arkenfox/user.js
// link prefetching
//user_pref("network.prefetch-next", false); // already on arkenfox/user.js
// Network Predictor
//user_pref("network.predictor.enabled", false); // already on arkenfox/user.js


/******************************************************************************
 * UI And UX
 *****************************************************************************/

// disable warnings
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// disable Firefox from asking to set as the default browser
user_pref("browser.shell.checkDefaultBrowser", false);
// disable fullscreen delay and notices
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
// display tab dropdown when there are too many tabs
user_pref("browser.tabs.tabmanager.enabled", false);
// disable autocopy
user_pref("clipboard.autocopy", false);
// enable spellcheck in all text boxes
user_pref("layout.spellcheckDefault", 2);
// disable middle-click auto-scrolling
user_pref("general.autoScroll", false);
// tabs settings
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.insertAfterCurrent", true);
// disable "Firefox View" tab
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-next", false);
// clear default top sites
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);
// download settings
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.download.forbid_open_with", true);
// hide "More from Mozilla" from settings
user_pref("browser.preferences.moreFromMozilla", false);
// showed "Firefox Experiments" on settings
user_pref("browser.preferences.experimental", true);
// disable welcome page
user_pref("browser.aboutwelcome.enabled", false);
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
// disable page promos
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);


/******************************************************************************
 * Personal
 *****************************************************************************/

// set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en, ru-RU, ru");
// force "Dark Mode"
user_pref("layout.css.prefers-color-scheme.content-override", 0);
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("devtools.theme", "dark");
user_pref("reader.color_scheme", "dark");
// fix icons for extensions on Dark Mode
user_pref("svg.context-properties.content.enabled", true);
// default new tab page
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 3);
// download settings
//user_pref("browser.download.dir", "");     // set your directory
//user_pref("browser.download.lastDir", ""); // set your directory
// reader settings
user_pref("reader.font_type", "serif");
user_pref("reader.content_width", 7);
// allow userChrome.css/userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// bookmarks settings
// for correct styles `chrome/ui/auto-hide-bookmarks-toolbar.css`
user_pref("browser.toolbars.bookmarks.visibility", "always");
// findbar settings
// `chrome/ui/floating-findbar-on-top.css`
user_pref("userchrome.floating-findbar-on-right.enabled", true);


// status for settings apply
user_pref("_user.js.status-log", "user.js -- success");
