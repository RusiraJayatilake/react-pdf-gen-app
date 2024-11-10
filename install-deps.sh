#!/bin/sh

dependencies=(
    "@react-pdf/renderer"
    "@testing-library/jest-dom"
    "@testing-library/react"
    "@testing-library/user-event"
    "bootstrap"
    "file-saver"
    "react-hook-form"
    "react-hook-form-persist"
    "react-icons"
    "react-router-dom"
)

echo "Installing dependencies..."
for package in "${dependencies[@]}"; do
    npm install $package
done


echo "Package Installed Successfully..."

