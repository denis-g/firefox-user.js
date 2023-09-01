/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Web API's
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-api.js -- error");


// enable prioritized Task Scheduling
user_pref("dom.enable_web_task_scheduling", true);

// disable Web Notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// disable Push API
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// disable many API's
user_pref("dom.gamepad.enabled", false);
user_pref("device.sensors.enabled", false);

// disable touch events
user_pref("dom.w3c_touch_events.enabled", 0);

// disable event for device such as a camera, mic, or speaker is connected or removed 
user_pref("media.ondevicechange.enabled", false);


// status for settings apply
user_pref("_user.js.status-log", "_base-api.js -- success");
