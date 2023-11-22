#!/bin/bash
export LC_ALL=en_US.UTF-8

# Firefox user.js by Denis G.
# https://github.com/denis-g/firefox-user.js

# config
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
rm -rf "${FIREFOX_PROFILE}/chrome/"

if curl -s -L "https://raw.githubusercontent.com/arkenfox/user.js/master/updater.sh" -o "${FIREFOX_PROFILE}/updater.sh"; then
  # generate user.js
  cp ./user-overrides.js "${FIREFOX_PROFILE}/user-overrides.js"
  sh "${FIREFOX_PROFILE}/updater.sh" -d -s

  # copy styles
  cp -R ./chrome/ "${FIREFOX_PROFILE}/chrome/"

  if curl -s -L "https://raw.githubusercontent.com/arkenfox/user.js/master/prefsCleaner.sh" -o "${FIREFOX_PROFILE}/prefsCleaner.sh"; then
    # clean prefs.js
    sh "${FIREFOX_PROFILE}/prefsCleaner.sh" -d -s
  else
    echo "Error! Could not download arkenfox/user.js"
    exit 2
  fi

  # remove user-overrides.js
  rm -rf "${FIREFOX_PROFILE}/user-overrides.js"

  echo "Completed!"
  exit 0
else
  echo "Error! Could not download arkenfox/user.js"
  exit 2
fi
