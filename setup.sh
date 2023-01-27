#!/bin/bash
export LC_ALL=en_US.UTF-8

# Personal Firefox settings. Based by arkenfox/user.js
# by Denis G. (https://github.com/denis-g/firefox-user.js)

# config
TMP="./temp"
source ./config.ini

if [ -z "$FIREFOX_PROFILE" ]; then
  echo "Error: Variable FIREFOX_PROFILE is empty or wrong"
  echo "Please check FIREFOX_PROFILE variable on config.ini file"
  exit 22
fi
if [ ! -d "$FIREFOX_PROFILE" ]; then
  echo "Error: Firefox profile directory does not exists"
  echo "Please check FIREFOX_PROFILE variable on config.ini file"
  exit 2
fi

# cleaner
rm -rf "${TMP}"
rm -rf "${FIREFOX_PROFILE}/chrome/"

# download actual arkenfox/user.js main files
mkdir "${TMP}"

if curl -s -L "https://raw.githubusercontent.com/arkenfox/user.js/master/updater.sh" -o "${TMP}/updater.sh"; then
  # generate user.js
  cp -R ./user.js-overrides/ "${TMP}/user.js-overrides/"
  sh "${TMP}/updater.sh" -d -s -o "user.js-overrides"

  # copy prefs
  cp "${TMP}/user.js" "${FIREFOX_PROFILE}"

  # copy styles
  cp -R ./chrome/ "${FIREFOX_PROFILE}/chrome/"

  # cleaner
  rm -rf "${TMP}"

  echo "Completed!"
  exit 0
else
  echo "Error! Could not download arkenfox/user.js"
  exit 2
fi
