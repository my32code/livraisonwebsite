@echo off
echo ========================================
echo    Ras'Services - Application Complete
echo ========================================
echo.
echo Demarrage de l'application complete...
echo.
echo 1. Demarrage du backend API...
start "Backend API" cmd /k "cd backend && npm install && npm start"
echo.
echo Attente du demarrage du backend...
timeout /t 5 /nobreak > nul
echo.
echo 2. Demarrage du frontend React...
start "Frontend React" cmd /k "npm install && npm start"
echo.
echo Application demarree !
echo - Backend API: http://localhost:5000
echo - Frontend React: http://localhost:3000
echo.
pause
