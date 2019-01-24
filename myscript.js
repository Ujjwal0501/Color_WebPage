function applyContrast() {
	var list1 = document.getElementsByTagName('*'),
	bg = localStorage.getItem('contrast-chrome-extension-background'),
	txt = localStorage.getItem('contrast-chrome-extension-text'),
	border = localStorage.getItem('contrast-chrome-extension-border');
	
	if (bg == null) bg = "#333333";
	if (txt == null) txt = "#ffffff";
	if (border == null) border = "#333333";
//	if (localStorage.getItem('contrast-chrome-extension-state') != 'enabled')
//		return;
	for (var i = 0; i < list1.length; i++) {
		list1[i].style.color = bg;
		list1[i].style.backgroundColor = txt;
		list1[i].style.borderColor = border;
	}
	console.log("done!");
}

window.onload = applyContrast();
