chrome.runtime.onInstalled.addListener(function() {
	localStorage.setItem('contrast-chrome-extension-state', 'enabled');
});

chrome.runtime.onMessage.addListener(
function(message, sender, response) {
  if (message.greeting == "hi"){
    chrome.tabs.executeScript({
      code: 'console.log(\''+message.greeting+'\')'
    });
  }
});
