@echo off
setlocal disabledelayedexpansion

rem # Personal Firefox settings. Based by arkenfox/user.js
rem # by Denis G. (https://github.com/denis-g/firefox-user.js)

rem # config
title Personal Firefox settings
set root=%~dp0
set root=%root:~0,-1%
set TMP=%root%\temp
set config=%root%\config.ini

setlocal enabledelayedexpansion
for /f "tokens=*" %%A in (%config%) do set %%A

if %FIREFOX_PROFILE% == "" (
    echo Error: Variable FIREFOX_PROFILE is empty or wrong
    echo Please check FIREFOX_PROFILE variable on config.ini file
    pause
    exit /b
)
if not exist %FIREFOX_PROFILE% (
    echo Error: Firefox profile directory does not exists
    echo Please check FIREFOX_PROFILE variable on config.ini file
    pause
    exit /b
)

rem # cleaner
rd /s /q "%TMP%\" >nul 2>&1
rd /s /q "%FIREFOX_PROFILE%\chrome\" >nul 2>&1

rem # download actual arkenfox/user.js main files
mkdir "%TMP%"

powershell -c "Invoke-WebRequest 'https://raw.githubusercontent.com/arkenfox/user.js/master/updater.bat' -OutFile '%TMP%\updater.bat'"

rem # copy prefs
xcopy /i "%root%\user.js-overrides\" "%TMP%\user.js-overrides\" >nul

rem # generate user.js
cd %TMP% && call updater.bat -multiOverrides -unattended

rem # copy prefs
copy /y "%TMP%\user.js" "%FIREFOX_PROFILE%\user.js" >nul

rem # copy styles
xcopy /i /e "%root%\chrome\" "%FIREFOX_PROFILE%\chrome\" >nul

rem # cleaner
rd /s /q "%TMP%" >nul 2>&1

echo Completed!
pause
exit /b
