/* Personal Firefox settings. Based by arkenfox/user.js      */
/* by Denis G. (https://github.com/denis-g/firefox-settings) */

user_pref("_user.js.status-log", "API -- error");


/******************************************************************************
 API
******************************************************************************/

// disable Web Notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// disable push notifications
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// disable network/browser connection information (WiFi, cellular, etc.)
user_pref("dom.netinfo.enabled", false);

// disable Web Audio API (required for Unity web player/games)
user_pref("dom.webaudio.enabled", false);

// disable WebRTC getUserMedia, screen sharing, audio capture, video capture
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// disable speech recognition, synthesis
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);

// disable Gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);

// disable Vibrator API
user_pref("dom.vibrator.enabled", false);

// disable Sensor API
user_pref("device.sensors.enabled", false);

// disable touch events
user_pref("dom.w3c_touch_events.enabled", 0);

// disable event for device such as a camera, mic, or speaker is connected or removed 
user_pref("media.ondevicechange.enabled", false);


user_pref("_user.js.status-log", "API -- success");
