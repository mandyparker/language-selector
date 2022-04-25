//translatev2.js 
// This file is used to rewrite the urls in the language selector to take users to that page on the translated site.

/**
 * Sanitize a URL.
 *
 * Source @braintree/sanitize-url
 * <https://github.com/braintree/sanitize-url>
 * License: MIT(https://github.com/braintree/sanitize-url/blob/main/LICENSE)
 * @param {string} url
 * @return {string}
 */
function sanitizeUrl(url){if(!url){return"about:blank"}
var invalidProtocolRegex=/^(%20|\s)*(javascript|data|vbscript)/im;var ctrlCharactersRegex=/[^\x20-\x7EÀ-ž]/gim;var urlSchemeRegex=/^([^:]+):/gm;var relativeFirstCharacters=[".","/"];function _isRelativeUrlWithoutProtocol(url){return relativeFirstCharacters.indexOf(url[0])>-1}
var sanitizedUrl=url.replace(ctrlCharactersRegex,"").trim();if(_isRelativeUrlWithoutProtocol(sanitizedUrl)){return sanitizedUrl}
var urlSchemeParseResults=sanitizedUrl.match(urlSchemeRegex);if(!urlSchemeParseResults){return sanitizedUrl}
var urlScheme=urlSchemeParseResults[0];if(invalidProtocolRegex.test(urlScheme)){return"about:blank"}
return sanitizedUrl}

let items = document.querySelectorAll("ul#select-language li a");
let a = window.location.href.replace(window.location.origin, "").substring(1);
items.forEach((item) => {
	let b = item.href;

		item.href = sanitizeUrl(b + a);

});
