
var blocklist;
var whitelist;
var RICKROLL_THRESHOLD = 20;
var url = window.location.href;
var body = document.getElementsByTagName('BODY')[0];
var html = body.innerHTML;

initArrays();



if (getStrictness()) { // Strict check
	if (looseCheck()) {
		disablePage();
		showStrictPopup();
	} else {
		var matches = strictCheck();
		if (matches >= RICKROLL_THRESHOLD) {
			disablePage();
			showLoosePopup(matches);
		}
	}
} else { // Loose check
	if (!inWhiteList() && looseCheck()) {
		disablePage();
	}
}



function getStrictness() {
	// For now, only youtube is treated strictly
	return (url.search("youtube.com/watch") != -1);
}



function strictCheck() {
	// heuristic check, return # of matches
}



function looseCheck() {
	return testAgainstArray(url, blocklist);
}

function inWhiteList() {
	return testAgainstArray(url, whitelist);
}

function testAgainstArray (text, array) {
	// array-match check, return 1 if match found, 0 otherwise
}



function showStrictPopup(matches) {
	// display popup (mention # of matches)
	// if user hits OK, call enablePage()
}

function showLoosePopup() {
	// display popup
	// if user hits OK, call enablePage()
}



function disablePage() {
	body.innerHTML = "";
}

function enablePage() {
	body.innerHTML = html;
}



function initArrays() {

}