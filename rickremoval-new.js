
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
	var count = 0;
	var arr;
	arr = html.match(/(ric?k|barac?k) ?roll/gi);
	if (arr != null) {
		count += arr.length;
	}
	arr = html.match(/never gonna (give you up|let you down)/gi);
	if (arr != null) {
		count += arr.length;
	}
	return count;
}



function looseCheck() {
	return testAgainstArray(url, blocklist);
}

function inWhiteList() {
	return testAgainstArray(url, whitelist);
}

function testAgainstArray (text, array) {
	for (var i in array) {
		if (text.search(array[i]) != -1) {
			return true;	
			break;
		}
	}
	return false;
}



function showStrictPopup(matches) {
	if (confirm ("You may be getting rickrolled! The site \n\n" + url + "\n\nmentions suspicious phrases " + matches + " times. \n\nClick OK to continue anyway; click Cancel if you have good taste in music.")) {
		enablePage();
	}
}

function showLoosePopup() {
	if (confirm ("You are getting rickrolled! The site \n\n" + url + "\n\ndoes not seem to wish to give you up.\n\nClick OK to continue anyway; click Cancel if you have good taste in music.")) {
		enablePage();
	}
}



function disablePage() {
	body.innerHTML = "";
}

function enablePage() {
	body.innerHTML = html;
}



function initArrays() {
	blocklist = [
	"_0719DxMOUY",
	"_FyXC-SsAPE",
	"1V_aE_Xdde8",
	"3HrSN7176XI",
	"3KANI2dpXLw",
	"4R-7ZO4I1pI",
	"4TJB9FQo45E",
	"4ynGOr9vmyc",
	"5F5nc1bAaKw",
	"5kQKh2tdisQ",
	"5uZr3JWYdy8",
	"65I0HNvTDH4",
	"67KOFEEOhkI",
	"6SYVdI7Llrg",
	"8aJjMOy-Ops",
	"8Set3JpJJ4w",
	"A1sgzEDUG-o",
	"ABUhOJxZQmg",
	"AP12uZvfvag",
	"AS35zlAdaSQ",
	"aSzhxllE0RM",
	"atiNprQmjks",
	"b1WWpKEPdT4",
	"b43GgNbz9fg",
	"cjeogv9VUAE",
	"cxwxBheZniM",
	"CZoJt0Sbqrs",
	"DpPhnECPe2I",
	"dS9DO6kx-Ek",
	"EEbzptEFsKk",
	"eKDcl0V6o6k",
	"eLiXPfl8EPY",
	"f2b1D5w82yU",
	"f8FHqEIzSlE",
	"FGEUClII8x0",
	"fmxGLQd3J0U",
	"fMzkMpMraFY",
	"G_vas-7a7is",
	"gdpijMRhoT8",
	"gLVtavM962w",
	"gvUiLtwlEl8",
	"HiaBjpzLgQI",
	"hq05IRf0dBQ",
	"HRRGn6tNd4",
	"hyX_krrTBZ0",
	"I6_0tpqg3ZE",
	"i65games.tk",
	"IHKAgwIxUAY",
	"iJbwc4wm5Y0",
	"IpjGmx2v6bM",
	"IVvl_R2jYMo",
	"J3VnZMoh7sk",
	"Kmt4wrn1MTk",
	"lAQIiNTH46I",
	"LeSnAn-Sc0g",
	"lfao5IToml4",
	"lfO4Z5WEUuE",
	"lp6nr-rD_g8",
	"LqXTU8YAGzo",
	"lzSjyzqfegI",
	"MJCH_wT9TaU",
	"MoUPdJrjkCM",
	"NZ-AAD7Ci_c",
	"oHg5SJYRHA0",
	"piLTpv1eKdU",
	"PIMrL4qXtJ0",
	"PXrHCBoEj7g",
	"q6NwqFlctZY",
	"QumbExFAj-U",
	"R5P1_U7LZX8",
	"r8tXjJL3xcM",
	"RSsJ19sy3JI",
	"RzoZGNsJ71w",
	"SGi7qi_y0Jw",
	"tazYxtJcwCc",
	"thNTPin2RBY",
	"ub_VBGajh-s",
	"UDTGvgE5eJw",
	"-umtVthRGJI",
	"uwnuL5Fy5g8",
	"uxIsiTo4VJo",
	"uYMIMPVK1vU",
	"v7cyQ-dVaAM",
	"VBY4TV5qK-4",
	"veFrQTKQy7A",
	"vf79MCuQ8jM",
	"vp8fkB0uwd0",
	"VVjUWKSZSsc",
	"vvs7cXmVwN8",
	"WpEVccrkYQ0",
	"xAp3HqpE7V8",
	"XfTUDW93z6E",
	"X-j828DqqnY",
	"xm_EMOdpDhc",
	"xpupxRzumYs",
	"Xsvi9uNrDSI",
	"y5Ja-E529sU",
	"Yu_moia-oVI",
	"YWn54TjfBkk",
	"ywoqy9PBN-0",
	"yXGqsnkLg0A",
	"yxnWl63Avo4",
	"z2kThcO6ig8",
	"Jwj0gLriTnk",
	"PPJcB60Yq",
	"Jt1GY_vStx4",
	"Zc2tpMgz6MI",
	"zGm0nGF_y2E",
	"z-HWXfRKkJU",
	"ZIQZHqNQODo",
	"ZOU8GIRUd_g",
	"1227.com",
	"203.24.182.170",
	"8chan.henriwatson.com/b",
	"adurah.com/img/hp7_spoilers.jpg",
	"ali3ns.net",
	"almightypickle.deviantart.com/art/a-very-stupid-flash-movie-83440015",
	"apoke.com",
	"asongbyagayguy.ytmnd.com",
	"bd.vg",
	"bit.ly/1628nB",
	"bringvictory.com",
	"chodecircus.com/area51",
	"choose.yudia.net",
	"classpc.nl",
	"collegehumor.com/video:1809841",
	"comicwonder.com/joke/8a46a9b4a",
	"crappypc.com",
	"ebaumsworld.com/video/watch/411687",
	"ecritters.biz/sr",
	"epicwinrar.com",
	"evanball.com",
	"finalclan.net",
	"freeppcsecrets.com",
	"fuckdreamhost.com",
	"furryartpile.com",
	"internetisseriousbusiness.com",
	"irc.infinitynet.info",
	"johncow.com/moo.html",
	"just-different.info/secret",
	"keiraknightley.ytmnd.com",
	"krazykustoms.co.cc/pages",
	"krazykustoms.co.cc/phpBB3/index.php",
	"liner.org",
	"members.tele2.nl/class-pc",
	"moourl.com/09773",
	"mxweas.com/docs/jailbreakservhack",
	"newroupdates.tk",
	"niya.cc/flash/rick",
	"noelurl.easyasweb.eu/u0Rx744fi",
	"palmsout.net/music/remixsunday/104/Never%20Gonna%20Give%20You%20Up%20%28Solly%20Remix%29.mp3",
	"paulsmom.prohosts.org",
	"pottermisleading.ytmnd.com",
	"prankdialer.com/rickroll.php",
	"pspemporium.webs.com/rickdance.html",
	"punahou.com",
	"rasher.dk/r",
	"rasher.dk/r/linode-dns",
	"ravenstorm.byethost15.com",
	"raygoldmodels.com",
	"reichroll.com",
	"reichrolled.com",
	"rfp7FbsnsbU",
	"RgIDuaxiT0w",
	"rickroll.net",
	"rick-rolld.com",
	"rickrolled.fr",
	"rickrolling.com/lol",
	"rr.rezbit.com",
	"rubyurl.com/1H1G",
	"rurl.org/2vq",
	"sirpnut.info/sorry.jpg",
	"smouch.net/lol",
	"sprigler.com/steven",
	"stucknut.com/locker/files/jessica.gif",
	"t1ny.us/7wp5i",
	"technocolbert.co.nr",
	"techsmartly.net",
	"thekickback.com/rickroll/rickroll.php",
	"tinyurl.com/244u3n",
	"tinyurl.com/2nmscj",
	"tinyurl.com/2tcnbl",
	"tinyurl.com/2w4apm",
	"tinyurl.com/37ws8e",
	"tinyurl.com/4xur8r",
	"tinyurl.com/5a3jqf",
	"tinyurl.com/5sb29l",
	"tinyurl.com/britneyspearsXXX",
	"tinyurl.com/CELEBRITY-XXX-VIDS",
	"tinyurl.com/KIM-KARDASHIAN-SEX-TAPE",
	"tinyurl.com/rickrolll",
	"tinyurl.com/ynupj4",
	"tinyurl.com/yowxeq",
	"tobi-x.com/kate_moss_nude",
	"todaysbigthing.com/2008/04/07",
	"todo.is",
	"url.uppix.net/NFWGJ",
	"video.hexxeh.net",
	"video.yahoo.com/watch/1313289/4562193",
	"video.yahoo.com/watch/2013707/v2138974",
	"video.yahoo.com/watch/804885/3375801",
	"vids.myspace.com/index.cfm?fuseaction=vids.individual&videoid=25992858",
	"warlocksnerfed.ytmnd.com",
	"ww.rickroll.net",
	"zeroboard.com/16979949",
	"yougotrickrolled.com",
	"you-host.info",
	"zideo.nl/index.php?option=com_podfeed&zideo=6c4971596d513d3d&playzideo=6c344f596d31593d&Itemid=",
	"rickroll.htm",
	"rickroll.php"
	];
	
	whitelist = [
	"googlesyndication.com",
	"doubleclick.net",
	"stumbleupon.com/badge/embed",
	"facebook.com/plugins",
	"reddit.com/static/button"
	];
}