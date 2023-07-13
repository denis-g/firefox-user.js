/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Speedy Browsing
 * https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-speed.js -- error");


// reduce the 5ms waits to render the page
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);

// notification interval (in ms) to avoid layout thrashing
user_pref("content.notify.interval", 100000);

// disable preSkeletonUI on startup
user_pref("browser.startup.preXulSkeletonUI", false);

// webrender tweaks
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);

// image tweaks
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 131072);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);

// increase media cache
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 2560000);

// decrease video buffering
user_pref("media.cache_readahead_limit", 9000);
user_pref("media.cache_resume_threshold", 6000);

// increase memory cache size
user_pref("browser.cache.memory.max_entry_size", 153600);

// use bigger packets
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);

// increase the absolute number of HTTP connections
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);

// increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 32768);


// status for settings apply
user_pref("_user.js.status-log", "_base-speed.js -- success");
