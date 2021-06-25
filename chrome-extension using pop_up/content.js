function getImages() {
	console.log("Extension is running");
	var pagehtml = document.documentElement;
	var imgs = pagehtml.querySelectorAll('img.k4urcfbm')
	var pass_array = [];
	for (i in imgs) {
		pass_array.push(imgs[i]["currentSrc"]);
	}
	var param = { collection: pass_array };
	chrome.runtime.sendMessage(param);
}
getImages();

