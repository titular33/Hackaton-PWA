import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let deferredPrompt; // Allows to show the install prompt
let setupButton;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    if (setupButton == undefined) {
        setupButton = document.getElementById("setup_button");
    }
    // Show the setup button
    setupButton.style.display = "inline";
    setupButton.disabled = false;
});


ReactDOM.render(<App />, document.getElementById('root'));
