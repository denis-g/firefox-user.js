# Firefox user.js

<div style="text-align: center;">
  <p><img src="https://github.com/denis-g/firefox-user.js/blob/master/assets/firefox.svg" alt="Mozilla Firefox" style="max-width: 50%;" /></p>
  <p><img src="https://img.shields.io/badge/103-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white&label=Recommended+version" alt="Recommended version" /></p>
</div>

---

- [user.js](#-userjs)
- [chrome](#-chrome)
- [Apply Configuration](#-apply-configuration)
- [Potential Problems](#-potential-problems)
- [Must-have Addons](#-must-have-addons)
- [References](#-references)

---

## 🔹 user.js

The Firefox `user.js` file stores user settings. This a convenient way to save your browser customizations and apply them on different machines.
All settings are based on [arkenfox/user.js](https://github.com/arkenfox/user.js) by default and override settings for sites to **normal work**.

### user.js-overrides/_base-*.js

- Basically settings for security and **usable** in daily use
- Allow cross-logins, basic cookie policy
- Enabled saving session, keep logins and site data
- Disabled unused APIs and preset permissions
- UI/UX settings

### user.js-overrides/_personal.js

- Locale settings
- Newtab page, tabs, bookmarks configured
- Enabled "Dark Mode" for all components
- Disabled Firefox Accounts & Sync

## 🔹 chrome

Firefox supports advanced customization of its UI with user-defined CSS.
A `userChrome.css` file affects the browser's UI, and `userContent.css` file affects the browser's content, which is all Firefox-specific pages (`about:`).

### chrome/userChrome.css

- Auto-hide bookmarks toolbar
- Close tab button shown on hover
- Compact list menu
- Floating findbar on top
- Hide on urlbar 'This time...'
- Iconized main menu
- Minimal UI scrollbars

### chrome/userContent.css

- Theme-based styles for newtab page
- Multi-column for addons page

---

## 🔹 Apply Configuration

Better choice - apply script with an empty profile.
The script generates a new `user.js` configuration file with custom settings and overrides the `user.js` file and `chrome` directory (if they were) into Firefox profile.
The file is loaded each time Firefox starts.

You can also change the values or add new ones on configuration files into the `user.js-overrides` directory or added your configuration js-file.
*Merging files in alphabetical order by default.*

> 🛑 Backup your profile and close Firefox before running the script!

### macOS, Linux

1. Clone repo:

```shell
git clone git@github.com:denis-g/firefox-settings.git
cd firefox-settings
```

2. Set your Firefox profile path on `FIREFOX_PROFILE` variable inside `config.ini` file.

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

3. ...and run main script:

```shell
sh setup.sh
```

### Windows

1. Use GIT as above, download [zip-archive](https://github.com/denis-g/firefox-settings/archive/refs/heads/master.zip), or execute commands on [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.1):

```powershell
# download this repo
Invoke-WebRequest "https://github.com/denis-g/firefox-settings/archive/refs/heads/master.zip" -OutFile "$HOME\Downloads\firefox-settings.zip"
Expand-Archive "$HOME\Downloads\firefox-settings.zip" -DestinationPath "$HOME\Downloads\" -Force
# open directory
explorer "$HOME\Downloads\firefox-settings-master"
```

This will upload repo into your `Downloads\firefox-settings-master` directory.

2. Set your Firefox profile path on `FIREFOX_PROFILE` variable inside `config.ini` file.

<details><summary>Example config:</summary>

> Go to `about:profiles` page and copy `Root Directory` path.

```ini
# Windows
# FIREFOX_PROFILE="C:\Users\denis-g\AppData\Roaming\Mozilla\Firefox\Profiles\XXXXXXXX.profile_name"

FIREFOX_PROFILE="C:\Users\denis-g\AppData\Roaming\Mozilla\Firefox\Profiles\dfk39fj39.default-nightly"
```

</details>

3. ...and run main script `setup.bat`.

---

## 🔹 Potential Problems

- By default `camera`, `mic` is **disabled**.
- By default `WebRTC` is **disabled**. When WebRTC is disabled, some video chat or file sharing applications that depend on WebRTC functionality may not work properly.
- By default `push`, `notifications` is **disabled**. When notify is disabled site can't send desktop notifications for Firefox.

---

## 🔹 Must-have Addons

- [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/) (enable all Privacy settings and lists)
- [Facebook Container](https://addons.mozilla.org/firefox/addon/facebook-container/)
- [Smart Referer](https://addons.mozilla.org/firefox/addon/smart-referer/) (*potential problems*)
- [CSS Exfil Protection](https://addons.mozilla.org/firefox/addon/css-exfil-protection/)

---

## 🔹 References

- [arkenfox/user.js](https://github.com/arkenfox/user.js)
- [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js)
- [pyllyukko/user.js](https://github.com/pyllyukko/user.js)
- [LibreWolf](https://gitlab.com/librewolf-community)
- [firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks)

---

<sub>Mozilla Firefox logo created by [Mozilla Foundation](https://mozilla.design/). All rights reserved.</sub>
