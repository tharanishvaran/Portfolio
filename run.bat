@echo off
title Tharanish Portfolio - Local Dev Server
cls

echo ===================================================
echo   Starting Tharanish Portfolio Development Server
echo ===================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Check if node_modules exists, install if missing
if not exist "node_modules\" (
    echo [INFO] Dependencies not found. Installing packages with npm install...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed.
        pause
        exit /b 1
    )
)

echo [INFO] Launching Vite development server at http://localhost:3000...
echo [INFO] Press Ctrl+C in this window to stop the server.
echo.

call npm run dev

pause
