/* URL searchbar */
user_pref("keyword.enabled", true);                                  /* 0801: enable location bar using search */

/* Passwords */
user_pref("signon.rememberSignons", false);                          /* 5003: disable saving passwords

/* Pocket */
user_pref("extensions.pocket.enabled", false);                       /* 0900: disable Pocket */

/* Session Restore */
user_pref("browser.startup.page", 3);                                /* 0102: enable session restore */

/* Cross-Origin Referers */
/* Breaks things, installed Smart Referer addon instead. */
user_pref("network.http.referer.XOriginPolicy", 0);                  /* 1601: control when to send a cross-origin referer */

/* DRM content (Netflix) */
user_pref("media.eme.enabled", false);                               /* 2022: disable all DRM content (EME: Encryption Media Extension) */