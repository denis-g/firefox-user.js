@echo off
setlocal disabledelayedexpansion

rem # Firefox user.js by Denis G.
rem # https://github.com/denis-g/firefox-user.js

rem # config
title Personal Firefox settings
set root=%~dp0
set root=%root:~0,-1%
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
rd /s /q "%FIREFOX_PROFILE%\chrome\" >nul 2>&1

powershell -c "Invoke-WebRequest 'https://raw.githubusercontent.com/arkenfox/user.js/master/updater.bat' -OutFile '%FIREFOX_PROFILE%\updater.bat'"

rem # copy prefs
xcopy /i "%root%\user-overrides.js" "%FIREFOX_PROFILE%\user-overrides.js" >nul

rem # generate user.js
cd %FIREFOX_PROFILE% && call updater.bat >nul

rem # copy styles
xcopy /i /e "%root%\chrome\" "%FIREFOX_PROFILE%\chrome\" >nul

powershell -c "Invoke-WebRequest 'https://raw.githubusercontent.com/arkenfox/user.js/master/prefsCleaner.bat' -OutFile '%FIREFOX_PROFILE%\prefsCleaner.bat'"

rem # clean prefs.js
cd %FIREFOX_PROFILE% && call prefsCleaner.bat >nul

rem # remove user-overrides.js
rd /s /q "%FIREFOX_PROFILE%\user-overrides.js" >nul 2>&1

echo Completed!
pause
exit /b
