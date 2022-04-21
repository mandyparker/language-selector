//translate.js 
// This file is used to rewrite the urls in the language selector to take users to that page on the translated site.

//function setLangSelectorUrls() {
let a = window.location.href.substring(window.location.protocol.length + 2);
//let b = document.getElementById("select-language");
let items = document.querySelectorAll("ul#select-language li a");

items.forEach((item) => {
	let d = item.lang;
	console.log(d);
	if (d === "en") {
		item.href = window.location.href;
	} else {
		//console.log("https://" + d + a)
		item.href = "https://" + d + "." + a;
	}
});


