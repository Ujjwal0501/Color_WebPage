function applyChange(id) {
	var colorChoice = document.getElementById(id).value;
	chrome.runtime.sendMessage({greeting:"hi"});
}

function changeColorInputState(state) {
	document.getElementById('state').checked = !state;
	var list1 = document.getElementsByClassName('container');
	var val = "";
	if (state) val = "none";
	else val = "block";
	list1[0].style.display = val;
	list1[1].style.display = val;
	list1[2].style.display = val;
}

window.onload = (function () {

	document.getElementById('background').addEventListener('input', function () {
		applyChange('background');
	});
	document.getElementById('text').addEventListener('input', function () {
		applyChange('text')
	});
	document.getElementById('border').addEventListener('input', function () {
		applyChange('border');
	});
	
	document.getElementById('state').addEventListener('change', function () {
		if (this.checked) {
			localStorage.setItem('contrast-chrome-extension-state', 'enabled');
			changeColorInputState(false);
		} else {
			localStorage.setItem('contrast-chrome-extension-state', 'disabled');
			changeColorInputState(true);
		}
	});
	
	var result = localStorage.getItem('contrast-chrome-extension-state');
	if (result == "enabled") {
		changeColorInputState(false);
	}
	else {
		changeColorInputState(true);
	}
});
