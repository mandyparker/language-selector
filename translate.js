//translate.js 
// This file is used to rewrite the urls in the language selector to take users to that page on the translated site.
let siteLang = document.documentElement.lang;
if (siteLang === "en") {
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
} else {
	let a = window.location.href.substring(window.location.protocol.length + 5);
	let items = document.querySelectorAll("ul#select-language li a");

items.forEach((item) => {
	let d = item.lang;
	if (d === "en") {
		item.href = "https://" + a;
	} else {
		item.href = "https://" + d + "." + a;
	}
});
}

