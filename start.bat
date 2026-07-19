@echo off
cd /d "%~dp0"
echo Serving http://localhost:51212
start http://localhost:51212
python -m http.server 51212
pause
