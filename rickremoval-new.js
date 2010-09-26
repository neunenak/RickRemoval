initArrays();

(initialize variables)

var body = document.getElementsByTagName('BODY')[0];

if (getStrictness()) { // Strict check
	if (strictCheck()) {
		disablePage();
	}
} else { // Loose check
	if (!inWhiteList() && looseCheck()) {
		disablePage();
	}
}

function getStrictness() {
	return (window.location.href.search("youtube.com/watch") != -1);
}

function disablePage() {
	body.innerHTML = "";
}