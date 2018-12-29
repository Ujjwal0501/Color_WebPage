function applyChange(id) {
	var colorChoice = document.getElementById(id).value;
	alert("hi!");
}

window.onload = (function () {
	document.getElementById('background').onchange = "applyChange('background')";
	document.getElementById('text').onchange = "applyChange('text')";
	document.getElementById('border').onchange = "applyChange('border')";
	var result = localStorage.getItem('contrast-chrome-extension-state');
	if (result == "enabled")
		document.getElementById('state').checked = true;
	else
		document.getElementById('state').checked = false;
});
