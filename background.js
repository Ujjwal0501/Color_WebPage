chrome.runtime.onInstalled.addListener(function() {
	localStorage.setItem('contrast-chrome-extension-state', 'enabled');
});

