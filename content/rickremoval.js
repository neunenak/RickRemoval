// ==UserScript==
// @name           RickRemoval
// @namespace      hacku.rickremoval
// @description    Blocks rickrolls using a blacklist and heuristic methods.
// @include        *
// ==/UserScript==



var body;
var html;

var blocklist = ["_0719DxMOUY",
"_FyXC-SsAPE",
"1227.com",
"1V_aE_Xdde8",
"3HrSN7176XI",
"3KANI2dpXLw",
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
"apoke.com",
"AS35zlAdaSQ",
"aSzhxllE0RM",
"atiNprQmjks",
"b1WWpKEPdT4",
"b43GgNbz9fg",
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
"finalclan.net",
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
"lAQIiNTH46I",
"LeSnAn-Sc0g",
"lfao5IToml4",
"lfO4Z5WEUuE",
"liner.org",
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
"4R-7ZO4I1pI",
"Jwj0gLriTnk",
"PPJcB60Yq",
"Jt1GY_vStx4",
"Zc2tpMgz6MI",
"zGm0nGF_y2E",
"z-HWXfRKkJU",
"ZIQZHqNQODo",
"ZOU8GIRUd_g",
"203.24.182.170",
"8chan.henriwatson.com/b",
"adurah.com/img/hp7_spoilers.jpg",
"ali3ns.net",
"almightypickle.deviantart.com/art/a-very-stupid-flash-movie-83440015",
"asongbyagayguy.ytmnd.com",
"bd.vg",
"bit.ly/1628nB",
"bringvictory.com",
"choose.yudia.net",
"cjeogv9VUAE",
"classpc.nl",
"collegehumor.com/video:1809841",
"comicwonder.com/joke/8a46a9b4a",
"crappypc.com",
"ebaumsworld.com/video/watch/411687",
"ecritters.biz/sr",
"epicwinrar.com",
"evanball.com",
"freeppcsecrets.com",
"fuckdreamhost.com",
"furryartpile.com",
"internetisseriousbusiness.com",
"irc.infinitynet.info",
"johncow.com/moo.html",
"just-different.info/secret",
"keiraknightley.ytmnd.com",
"Kmt4wrn1MTk",
"krazykustoms.co.cc/pages",
"krazykustoms.co.cc/phpBB3/index.php",
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
"rr.rezbit.com/blog/021107/rick-astley-speaks-about-rickroll.html",
"rubyurl.com/1H1G",
"rurl.org/2vq",
"sirpnut.info/sorry.jpg",
"smouch.net/lol",
"sprigler.com/steven",
"stucknut.com/locker/files/jessica.gif",
"t1ny.us/7wp5i",
"tazYxtJcwCc",
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
"http://chodecircus.com/area51/",
"bringvictory.com",
"rickroll.html"
];


var adlist = ["googlesyndication.com",
"doubleclick.net",
"stumbleupon.com/badge/embed",
"facebook.com/plugins",
"reddit.com/static/button"
]

var superwhitelist = [
"google.com/reader",
"docs.google.com",
"mail.google.com",
"youtube.com/results"
]

var RICKROLL_THRESHOLD = 20;

var skipflag = 0;
var isRickroll = 0; // 0 -> no rickroll, 1 -> rickroll, 2 -> rickroll & user wants to see
var white = 0;

for (var i in superwhitelist) {
	if (window.location.href.search(superwhitelist[i]) != -1) {
		white = 1;
		break;
	}
}

if (white == 0) {
	blockRickroll();
}
	
function blockRickroll () {

//first thing, put the entirety of the body HTML code into a storage var and wipe the page clean
//maybe we want to not use BODY, but we can figure that out later
	body = document.getElementsByTagName('BODY')[0];
	if (body == undefined) {
		return;
	}
	html = body.innerHTML;
	body.innerHTML = "";
	

	//this loop checks for sites with ad urls, to avoid getting like 5 popups on one page
	for (var ad in adlist) {
		if (window.location.href.search(adlist[ad]) != -1) {
			skipflag = 1;	
			break;
		}
	}

	//barring ad urls, actually tests the page against the blacklist and offers the popup to the user
	if (skipflag == 0) {
		isRickroll = testAgainstBlocklist();
		if (isRickroll == 0 && window.location.href.search("youtube.com/watch") != -1) {
			isRickroll = testAgainstBody();	
		}
	}
	
//if no rickroll or the user wants the rickroll anyway, restore the text
	if (isRickroll == 0 || isRickroll == 2) {
		body.innerHTML = html;
	}
}


function testAgainstBody() {
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
		if (count >=  RICKROLL_THRESHOLD) {
			var answer = confirm ("You may be getting rickrolled! The site \n\n" + window.location.href + "\n\nmentions suspicious phrases " + count + " times. \n\nClick OK to continue anyway; click Cancel if you have good taste in music.");
			if (answer == 0) {
				return 1;
			} else {
				return 2;
			}
		}
		return 0;
}


function testAgainstBlocklist() {
		for ( var i in blocklist ) {
			if (window.location.href.search(blocklist[i]) != -1) {
				var answer = confirm ("You are getting rickrolled! The site \n\n" + window.location.href + "\n\ndoes not seem to wish to give you up.\n\nClick OK to continue anyway; click Cancel if you have good taste in music.");
				if (answer == 0) {
					return 1;
				} else {
					return 2;
				}
			}
		}
		return 0;
}

