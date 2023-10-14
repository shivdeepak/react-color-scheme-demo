import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import LogoUrl from './images/logo.svg'
import App from './App'

function getAppContainer() {
    let reactAppDiv = document.getElementById("react-app")

    if (!reactAppDiv) {
        reactAppDiv = document.createElement("div")
        reactAppDiv.id = "react-app"
        document.body.appendChild(reactAppDiv)
    }

    return reactAppDiv
}

function getFaviconElement() {
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement ||
        document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;

    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'shortcut icon';
        document.head.appendChild(favicon);
    }

    return favicon
}

document.addEventListener("DOMContentLoaded", function() {
    getFaviconElement().href = LogoUrl
    const root = createRoot(getAppContainer())
    root.render(<React.StrictMode><App/></React.StrictMode>)
});
