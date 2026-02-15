# Firefox user.js ![firefox-icon] [![no-maintenance-icon]][no-maintenance-url]

[firefox-icon]: https://img.shields.io/badge/Firefox-148+-html.svg?style=flat-square&logo=firefoxbrowser&logoColor=FF7139&color=333&longCache=true
[no-maintenance-icon]: https://img.shields.io/badge/No%20Maintenance%20Intended-%E2%9C%95-red.svg?style=flat-square&longCache=true
[no-maintenance-url]: https://unmaintained.tech/

<div align="center">
  <img src="https://github.com/denis-g/firefox-user.js/blob/master/assets/firefox-preview.png" alt="Firefox user.js Preview" style="width: 100%;" />
</div>

---

- [user.js](#-userjs)
- [chrome](#-chrome)
- [Apply Configuration](#-apply-configuration)
- [Update](#-update)
- [Potential Problems](#-potential-problems)
- [Must-have Addons](#-must-have-addons)
- [References](#-references)

---

## 🔹 user.js

The Firefox `user.js` file stores user settings.
This is a convenient way to save your browser customizations and apply them on different machines.
All settings are based on [arkenfox/user.js](https://github.com/arkenfox/user.js) by default and override settings for sites to work normally.

### user-overrides.js

- Disabled Firefox Accounts & Sync, built-in extensions
- Basically settings for security and **usable** in daily use
- Allow cross-logins, basic cookie policy
- Enabled saving session, keep logins and site data
- Disabled unused Web APIs and preset for permissions
- UI/UX settings
- Locale settings
- New Tab page, tabs, findbar, bookmarks configuration

## 🔹 chrome

Firefox supports advanced customization of its UI with user-defined CSS.
A `userChrome.css` file affects the browser's UI, and `userContent.css` file affects the browser's content, which is all Firefox-specific pages (`about:`).

### chrome/userChrome.css

- Added icon for sound-playing tab (animated)
- Hide unused buttons from Tabs and Toolbars
- Hide search engines from the search/url bar
- Reduce space for tabs
- Shown tab close button on hover

### chrome/userContent.css

- Theme-based styles for Newtab page
- Multi-column for Addons page

---

## 🔹 Apply Configuration

Better choice – apply the script with an empty profile.
The script generates a new `user.js` configuration file with custom settings and overrides the `user.js` file and `chrome` directory (if they were) into the Firefox profile.
The file is loaded each time Firefox starts.

You can also change the values or add new ones in configuration files in the `user.js-overrides` directory or add your configuration JS-file.

> 🛑 Backup your profile and close Firefox before running the script!

### macOS, Linux

**1**. Clone repo:

```shell
git clone git@github.com:denis-g/firefox-settings.git
cd firefox-settings
```

**2**. Set your Firefox profile path on the `FIREFOX_PROFILE` variable inside the `config.ini` file.

<details><summary>Example config:</summary>

> Go to `about:profiles` page and copy `Root Directory` path.

```ini
# macOS
# FIREFOX_PROFILE="/Users/denis-g/Library/Application Support/Firefox/Profiles/XXXXXXXX.profile_name"

# Linux
# FIREFOX_PROFILE="/home/denis-g/.mozilla/firefox/XXXXXXXX.profile_name"

FIREFOX_PROFILE="/Users/denis-g/Library/Application Support/Firefox/Profiles/dfk39fj39.default-nightly"
```

</details>

**3**. ...and run main script:

```shell
sh setup.sh
```

### Windows

**1**. Use Git as above, download [zip-archive](https://github.com/denis-g/firefox-user.js/archive/refs/heads/master.zip), or execute commands on [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.1):

```powershell
# download this repo
Invoke-WebRequest "https://github.com/denis-g/firefox-user.js/archive/refs/heads/master.zip" -OutFile "$HOME\Downloads\firefox-settings.zip"
Expand-Archive "$HOME\Downloads\firefox-settings.zip" -DestinationPath "$HOME\Downloads\" -Force
# open directory
explorer "$HOME\Downloads\firefox-settings-master"
```

This will upload the repo into your `Downloads\firefox-settings-master` directory.

**2**. Set your Firefox profile path on the `FIREFOX_PROFILE` variable inside the `config.ini` file.

<details><summary>Example config:</summary>

> Go to `about:profiles` page and copy `Root Directory` path.

```ini
# Windows
# FIREFOX_PROFILE="C:\Users\denis-g\AppData\Roaming\Mozilla\Firefox\Profiles\XXXXXXXX.profile_name"

FIREFOX_PROFILE="C:\Users\denis-g\AppData\Roaming\Mozilla\Firefox\Profiles\dfk39fj39.default-nightly"
```

</details>

**3**. ...and run main script `setup.bat`.

---

## 🔹 Update

- Close Firefox
- Execute `setup.sh` or `setup.bat` script, as above
- Run Firefox
- On `about:config` page execute the [cleanup script](https://raw.githubusercontent.com/arkenfox/user.js/refs/heads/master/scratchpad-scripts/arkenfox-cleanup.js)

---

## 🔹 Potential Problems

- By default, `push` and `web notifications` are **disabled** – the site can't send desktop notifications for Firefox.

---

## 🔹 Must-have Addons

- [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/) (enable all Privacy settings and lists)
- [Facebook Container](https://addons.mozilla.org/firefox/addon/facebook-container/)
- [Google Container](https://addons.mozilla.org/firefox/addon/google-container/)
- [CSS Exfil Protection](https://addons.mozilla.org/firefox/addon/css-exfil-protection/)

---

## 🔹 References

- [arkenfox/user.js](https://github.com/arkenfox/user.js)
- [pyllyukko/user.js](https://github.com/pyllyukko/user.js)
- [Betterfox](https://github.com/yokoffing/Betterfox)
- [Firefox Mod Blur](https://github.com/datguypiko/Firefox-Mod-Blur)
- [firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks)
- [Gecko Dev](https://github.com/mozilla/gecko-dev/)
- [firefox.js](https://searchfox.org/mozilla-central/source/browser/app/profile/firefox.js)
