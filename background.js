chrome.runtime.onInstalled.addListener(function() {
	localStorage.setItem('contrast-chrome-extension-state', 'enabled');
});

chrome.runtime.onMessage.addListener(
function(message, sender, response) {
  if (message.greeting == "hi"){
    chrome.tabs.executeScript({
      code: 'console.log(\''+message.greeting+'\')'
    });
} else if (message.what == "background"){
	chrome.tabs.executeScript({
		code: 'console.log(\'background: '+message.what+'\')'
	});
} else if (message.what == "text") {
	chrome.tabs.executeScript({
		code: 'console.log(\'text: '+message.what+'\')'
	});
} else if (message.what == "border") {
	chrome.tabs.executeScript({
		code: 'console.log(\'border: '+message.what+'\')'
	});
}
});
