function applyContrast() {
	var list1 = document.getElementsByTagName('*');
//	if (localStorage.getItem('contrast-chrome-extension-state') != 'enabled')
//		return;
	for (var i = 0; i < list1.length; i++) {
		list1[i].style.color = "#ffffff";
		list1[i].style.backgroundColor = "#23272a";
		list1[i].style.borderColor = "#222222";
	}
	console.log("done!");
}

window.onload = applyContrast();
