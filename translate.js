//translate.js 
// This file is used to rewrite the urls in the language selector to take users to that page on the translated site.

let a = window.location.href.substring(window.location.protocol.length + 2);
let items = document.querySelectorAll("ul#select-language li a");

items.forEach((item) => {
	let d = item.lang;
	if (d === "en") {
		item.href = window.location.href;
	} else {
		item.href = "https://" + d + "." + a;
	}
});


