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
		code: 'localStorage.setItem(\'contrast-chrome-extension-background\', \''+message.value+'\'); var list1 = document.getElementsByTagName(\'*\'); for (var i = 0; i < list1.length; i++) list1[i].style.backgroundColor = \''+message.value+'\'; '
	});
} else if (message.what == "text") {
	chrome.tabs.executeScript({
		code: 'localStorage.setItem(\'contrast-chrome-extension-text\', \''+message.value+'\'); var list1 = document.getElementsByTagName(\'*\'); for (var i = 0; i < list1.length; i++) list1[i].style.color = \''+message.value+'\'; '
	});
} else if (message.what == "border") {
	chrome.tabs.executeScript({
		code: 'localStorage.setItem(\'contrast-chrome-extension-border\', \''+message.value+'\'); var list1 = document.getElementsByTagName(\'*\'); for (var i = 0; i < list1.length; i++) list1[i].style.borderColor = \''+message.value+'\'; '
	});
}
});
