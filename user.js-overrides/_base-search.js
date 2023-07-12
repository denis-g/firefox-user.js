/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Search
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-search.js -- error");


// enable location bar using search
user_pref("keyword.enabled", true);

// enable copying unicode symbols
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// enable live search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// highlight all hits on search
user_pref("findbar.highlightAll", true);


// status for settings apply
user_pref("_user.js.status-log", "_base-search.js -- success");
