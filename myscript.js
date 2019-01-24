function applyContrast() {
	var list1 = document.getElementsByTagName('*'),
	bg = localStorage.getItem('contrast-chrome-extension-background'),
	txt = localStorage.getItem('contrast-chrome-extension-text'),
	border = localStorage.getItem('contrast-chrome-extension-border');
	
	if (bg == null) bg = "#333333";
	if (txt == null) txt = "#ffffff";
	if (border == null) border = "#222222";

	for (var i = 0; i < list1.length; i++) {
		list1[i].style.color = txt;
		list1[i].style.backgroundColor = bg;
		list1[i].style.borderColor = border;
	}
	console.log("done!");
}

window.onload = applyContrast();
