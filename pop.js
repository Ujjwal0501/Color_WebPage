var bg, txt, border, lbg, ltxt, lborder, state;

function applyChange(id, val) {
	localStorage.setItem('contrast-chrome-extension-'+id, val);
	chrome.runtime.sendMessage({what:""+id, value:""+val});
}

// set current values in popup.html
function initPreset() {
	bg = document.getElementById('background');
	txt = document.getElementById('text');
	border = document.getElementById('border');
	state = document.getElementById('state');
	lbg = localStorage.getItem('contrast-chrome-extension-background');
	ltxt = localStorage.getItem('contrast-chrome-extension-text');
	lborder = localStorage.getItem('contrast-chrome-extension-border');
	if (lbg != null)
		bg.value = lbg;
	if (ltxt != null)
		txt.value = ltxt;
	if (lborder != null)
		border.value = lborder;
}

// 
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

// add input listeners to color-input elements
function initListeners() {	
	bg.addEventListener('input', function () {
		applyChange('background', bg.value);
	});
	txt.addEventListener('input', function () {
		applyChange('text', txt.value);
	});
	border.addEventListener('input', function () {
		applyChange('border', border.value);
	});
	state.addEventListener('change', function () {
		if (this.checked) {
			localStorage.setItem('contrast-chrome-extension-state', 'enabled');
			changeColorInputState(false);
		} else {
			localStorage.setItem('contrast-chrome-extension-state', 'disabled');
			changeColorInputState(true);
		}
	});
}


window.onload = (function () {
	initPreset();
	initListeners();
	
	var result = localStorage.getItem('contrast-chrome-extension-state');
	if (result == "enabled") {
		changeColorInputState(false);
	}
	else {
		changeColorInputState(true);
	}
});
