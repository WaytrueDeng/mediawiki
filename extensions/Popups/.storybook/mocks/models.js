/**
* Various Page Preview models used for different configurations.
* PreviewModel is defined in 'src/preview/model.js`.
*
* In production, thumbnail size is determined by the gateway before fetching
* from the server. Here, thumbnails are defined statically so they
* must be scaled down for low-dpi display, using `helpers/scaleDownThumbnails.js`.
*
* If a thumbnail is defined that is too small, it won't show up
* on a hi-dpi display. This is by design, to avoid blurry images.
*/

/**
* @namespace MODELS
* @property {PreviewModel}  * - All object properties should be.
*/
const MODELS = {};

MODELS.THUMBNAIL_PORTRAIT = {
	title: "South Georgia Island",
	url: "South Georgia Island",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p><b>South Georgia</b> is an island in the southern Atlantic Ocean that is part of the British Overseas territory of South Georgia and the South Sandwich Islands. The main settlement is Grytviken. South Georgia is 167.4 kilometres (104&nbsp;mi) long and 1.4 to 37&nbsp;km wide. It is about 830&nbsp;km (520&nbsp;mi) northeast of Coronation Island and 550&nbsp;km (340&nbsp;mi) northwest from Zavodovski Island, the nearest South Sandwich island.</p>",
	type: "page",
	thumbnail: {
		source: 'img/640px-Thatcher-Peninsula.jpg',
		width: 640,
		height: 480
	},
	pageId: 525307
};

MODELS.THUMBNAIL_LANDSCAPE = {
	title: "Atlantic Ocean",
	url: "Atlantic Ocean",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	'<p>The <b>Atlantic Ocean</b> is the second largest of the world\'s oceans, with an area of about 106,460,000 square kilometers. It covers approximately 20 percent of the Earth\'s surface and about 29 percent of its water surface area. It separates the "Old World" from the "New World".</p>',
	type: "page",
	thumbnail: {
		source:
		"img/640px-Atlantic_Ocean_location_map.svg.png",
		width: 542,
		height: 640
	},
	pageId: 698
};

MODELS.THUMBNAIL_LANDSCAPE_PANORAMA = {
	title: 'Zhongyuan Tower',
	url: 'Zhongyuan Tower',
	languageCode: "en",
	languageDirection: "ltr",
	extract: '<p><b>Zhongyuan Tower,</b> also known as Henan Radio and Television Tower, is located in Zhengzhou, Henan province, China. It is a multi-functional commercial, artistic and cultural center integrating radio and television broadcasting, tourism, cross-border trade, cultural performance, catering and leisure.The tower is 268 meters high and the top antenna is 120 meters high, with a total height of 388 meters. It is the world\'s second tallest steel tower after the Tokyo Skytree.</p>',
	type: "page",
	thumbnail: {
		source:
		"img/211px-HnzyftB.jpg",
		width: 211,
		height: 320
	},
	pageId: 3332543
};

MODELS.THUMBNAIL_PORTRAIT_PANORAMA = {
	title: 'Deutsche Telekom',
	url: 'Deutsche Telekom',
	languageCode: "de",
	languageDirection: "ltr",
	extract: '<p>Die <b>Deutsche Telekom AG</b> ist die Dachgesellschaft von Europas gr????tem Tele??kommunikations??unternehmen mit Hauptsitz in Bonn. In der Liste Forbes Global 2000 der weltgr????ten b??rsennotierten Unternehmen belegt die Deutsche Telekom Platz 69. Das Unternehmen kam im M??rz 2021 auf einen B??rsenwert von ca. 78,2 Mrd. Euro.</p>',
	type: "page",
	thumbnail: {
		source:
		"img/langde-320px-Telekom_Logo_2013.svg.png",
		width: 320,
		height: 157
	},
	pageId: 3332543
};

MODELS.SVG_PORTRAIT = {
	title: "South Georgia and the South Sandwich Islands",
	url:
	"http://en.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<strong>South Georgia and the South Sandwich Islands (SGSSI)</strong> is a British Overseas Territory in the southern Atlantic Ocean. It is a remote and inhospitable collection of islands, consisting of South Georgia and a chain of smaller islands known as the South Sandwich Islands. South Georgia is 165 km (103 mi) long and 1 to 35 km (1 to 22 mi) wide and is by far the largest island in the territory. The South Sandwich Islands lie about 700 km (430 mi) southeast of South Georgia. The territory's total land area is 3,903 km2 (1,507 sq...",
	thumbnail: {
		source:
		"img/640px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png",
		width: 640,
		height: 320
	},
	type: "page",
	pageId: 189
};

MODELS.SVG_LANDSCAPE = {
	title: "Foreign relations of Transnistria",
	url: "Foreign relations of Transnistria",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p>The Transnistrian republic is recognized by three states with limited recognition, and is a member of one international organization, the Community for Democracy and Human Rights, that was established by these four states.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/594px-Coat_of_arms_of_Transnistria.svg.png",
		width: 594,
		height: 640
	},
	pageId: 11971493
};

MODELS.THIN_THUMBNAIL = {
	title: "The Barker",
	url: "The Barker",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p><i><b>The Barker</b></i> is a 1928 part-talkie pre-Code romantic drama film produced and released by First National Pictures, a subsidiary of Warner Bros., acquired in September 1928. The film was directed by George Fitzmaurice and stars Milton Sills, Dorothy Mackaill, Betty Compson, and Douglas Fairbanks Jr..</p>",
	type: "page",
	thumbnail: {
		source:
		"img/Barker_poster.jpg/258px-Barker_poster.jpg",
		width: 258,
		height: 640
	},
	pageId: 172025
};
MODELS.THUMBNAIL_DIVIDER = {
	title: "Japan",
	url: "Japan",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p><b>Japan</b> is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.\n\nThe kanji that make up Japan's name mean \"sun origin\", and it is often called the \"Land of the Rising Sun\". Japan is a stratovolcanic archipelago consisting of about 6,852 islands. The four largest are Honshu, Hokkaido, Kyushu, and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands. The country is divided into 47 prefectures in eight regions, with Hokkaido being the northernmost prefecture and Okinawa being the southernmost one. The population of 127&nbsp;million is the world's tenth largest. Japanese make up 98.5% of Japan's total population. About 13.8 million people live in Tokyo, the capital of Japan. The Greater Tokyo Area is the most populous metropolitan area in the world with over 38 million people.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Flag_of_Japan.svg.png",
		width: 640,
		height: 426
	},
	pageId: 15573
};
MODELS.THUMBNAIL_SQUARE = {
	title: "Swing When You're Winning",
	url: "Swing When You're Winning",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
		"<p><i><b>Swing When You're Winning</b></i> is a swing cover album by English singer-songwriter Robbie Williams, and his fourth studio album overall. It was released in the United Kingdom on 19 November 2001 and peaked at number one on the UK Albums Chart.</p>",
	type: "page",
	thumbnail: {
		source: 'img/300px-Swing_When_You%27re_Winning_cover.png',
		width: 300,
		height: 300
	},
	pageId: 2846305
};
MODELS.THUMBNAIL_SMALL_TALL = {
	title: "Ocean",
	url: "Ocean",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
		"<p>The <i><b>ocean</b></i> (also the sea or the world ocean) is the body of salt water which covers approximately 71% of the surface of the Earth and contains 97% of Earth's water.</p>",
	type: "page",
	thumbnail: {
		source: 'img/300px-waves_unsplash.jpg',
		width: 300,
		height: 1000
	},
	pageId: 18842359
};
MODELS.THUMBNAIL_SMALL_SHORT = {
	title: "Full Moon",
	url: "Full Moon",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
		"<p>The <i><b>full moon</b></i> is the lunar phase when the Moon appears fully illuminated from Earth's perspective. This occurs when Earth is located between the Sun and the Moon (more exactly, when the ecliptic longitudes of the Sun and Moon differ by 180??).</p>",
	type: "page",
	thumbnail: {
		source: 'img/300px-full_moon_unsplash.jpg',
		width: 300,
		height: 200
	},
	pageId: 11432
};
MODELS.THUMBNAIL_BLOCKQUOTE = {
	title: "List of photographs of Abraham Lincoln",
	url: "List of photographs of Abraham Lincoln",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
		`<p>There are 130 known photographs of Abraham Lincoln.</p><blockquote class="templatequote "><p>Lincoln's features were the despair of every artist who undertook his portrait. The writer saw nearly a dozen, one after another, soon after the first nomination to the presidency, attempt the task. They put into their pictures the large, rugged features, and strong, prominent lines; they made measurements to obtain exact proportions; they "petrified" some single look, but the picture remained hard and cold. Even before these paintings were finished it was plain to see that they were unsatisfactory to the artists themselves, and much more so to the intimate friends of the man this was not he who smiled, spoke, laughed, charmed. The picture was to the man as the grain of sand to the mountain, as the dead to the living. Graphic art was powerless before a face that moved through a thousand delicate gradations of line and contour, light and shade, sparkle of the eye and curve of the lip, in the long gamut of expression from grave to gay, and back again from the rollicking jollity of laughter to that serious, far away look that with prophetic intuitions beheld the awful panorama of war, and heard the cry of oppression and suffering. There are many pictures of Lincoln; there is no portrait of him.</p></blockquote>`,
	type: "page",
	thumbnail: {
		source: 'img/640px-Abraham_Lincoln_by_Nicholas_Shepherd,_1846-crop.jpg',
		width: 506,
		height: 640
	},
	pageId: 38746858
};
MODELS.LONG_WORD_1 = {
	title: "Pneumonoultramicroscopicsilicovolcanoconiosis",
	url: "Pneumonoultramicroscopicsilicovolcanoconiosis",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	'<p>\n<i><b>Pneumonoultramicroscopicsilicovolcanoconiosis</b></i> is a word invented by the president of the National Puzzlers\' League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the <i>Oxford English Dictionary</i>, which defines it as "an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust."</p>',
	type: "page",
	pageId: 387219
};

MODELS.LONG_WORD_2 = {
	title:
	"Donaudampfschiffahrtselektrizit??tenhauptbetriebswerkbauunterbeamtengesellschaft",
	url:
	"Donaudampfschiffahrtselektrizit??tenhauptbetriebswerkbauunterbeamtengesellschaft",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	'<p><b><i lang="de" title="German language text">Donau??dampf??schiffahrts??elektrizit??ten??haupt??betriebs??werk??bau??unter??beamten??gesellschaft</i></b> or <b><i lang="de" title="German language text">Donau??dampf??schifffahrts??elektrizit??ten??haupt??betriebs??werk??bau??unter??beamten??gesellschaft</i></b> was an alleged suborganization of the Donaudampfschiffahrtsgesellschaft (DDSG) in pre-war Vienna, Austria, a shipping company for transporting passengers and cargo on the Danube. The DDSG still exists today in the form of the now-private companies DDSG-Blue Danube Schifffahrt GmbH and the DDSG-Cargo GmbH. However, there is no evidence that Donaudampfschiffahrtselektrizit??tenhauptbetriebswerkbauunterbeamtengesellschaft ever existed.</p>',
	type: "page",
	pageId: 2201357
};
MODELS.LONG_WORD_THUMB = {
	title: "Llanfairpwllgwyngyll",
	url: "Llanfairpwllgwyngyll",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p><b>Llanfairpwllgwyngyll</b> or <b>Llanfair Pwllgwyngyll</b> is a large village and local government community on the island of Anglesey in Wales. It is situated on the Menai Strait next to the Britannia Bridge and across the strait from Bangor. Both shortened and lengthened (<b>Llanfair??pwllgwyngyll??gogery??chwyrn??drobwll??llan??tysilio??gogo??goch</b>) forms of the placename are used in various contexts.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/Llanfair_Pwllgwyngyll_roofscape_%281%29_-_geograph.org.uk_-_1058331.jpg",
		width: 640,
		height: 480
	},
	pageId: 23939707
};

MODELS.MATH_1 = {
	title: "System of linear equations",
	url: "System of linear equations",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p>In mathematics, a <b>system of linear equations</b> is a collection of two or more linear equations involving the same set of variables. For example,</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Secretsharing_3-point.svg.png",
		width: 640,
		height: 640
	},
	pageId: 113087
};

MODELS.MATH_2 = {
	title: "History of Lorentz transformations",
	url: "History of Lorentz transformations",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	'<p>The <b>history of Lorentz transformations</b> comprises the development of linear transformations forming the Lorentz group or Poincar?? group preserving the Lorentz interval <span class="mwe-math-element"><img src="img/aeaaf19e649447ee32f924033e4c859955174c81.svg" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align:-1.005ex;width:15.144ex;height:3.176ex;"></span>\n and the Minkowski inner product <span class="mwe-math-element"><img src="img/43fcbe32f1674bd50b4621db988d3de905a8f269.svg" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align:-0.671ex;width:19.695ex;height:2.343ex;"></span>\n.</p>',
	type: "page",
	pageId: 7058047
};

MODELS.CHEM_1 = {
	title: "Carbohydrate",
	url: "Carbohydrate",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	'<p>A <b>carbohydrate</b> is a biomolecule consisting of carbon (C), hydrogen (H) and oxygen (O) atoms, usually with a hydrogen???oxygen atom ratio of 2:1 (as in water) and thus with the empirical formula <span class="nowrap">C<sub><i>m</i></sub>(H<sub>2</sub>O)<sub><i>n</i></sub></span> (where <i>m</i> may be different from <i>n</i>). This formula holds true for monosaccharides. Some exceptions exist; for example, deoxyribose, a sugar component of DNA, has the empirical formula C<sub>5</sub>H<sub>10</sub>O<sub>4</sub>. The carbohydrates are technically hydrates of carbon; structurally it is more accurate to view them as aldoses and ketoses.</p>',
	type: "page",
	thumbnail: {
		source:
		"img/640px-Lactose.svg.png",
		width: 640,
		height: 266
	},
	pageId: 5932
};
MODELS.CHEM_2 = {
	title: "Ethanol",
	url: "Ethanol",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	'<p><b>Ethanol</b>, also called <b>alcohol</b>, <b>ethyl alcohol</b>, <b>grain alcohol</b>, and <b>drinking alcohol</b>, is a chemical compound, a simple alcohol with the chemical formula <span class="chemf nowrap">C<span style="display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left;"><sup></sup><br><sub>2</sub></span>H<span style="display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left;"><sup></sup><br><sub>5</sub></span>OH</span>. Its formula can be also written as <span class="chemf nowrap">CH<span style="display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left;"><sup></sup><br><sub>3</sub></span></span>???<span class="chemf nowrap">CH<span style="display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left;"><sup></sup><br><sub>2</sub></span></span>???<span class="chemf nowrap">OH</span> or <span class="chemf nowrap">C<span style="display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left;"><sup></sup><br><sub>2</sub></span>H<span style="display:inline-block;vertical-align:-0.4em;font-size:80%;text-align:left;"><sup></sup><br><sub>5</sub></span></span>???<span class="chemf nowrap">OH</span>, and is often abbreviated as <b>EtOH</b>. Ethanol is a volatile, flammable, colorless liquid with a slight characteristic odor. It is a psychoactive substance and is the principal type of alcohol found in alcoholic drinks.</p>',
	type: "page",
	pageId: 10048
};

MODELS.CHEM_3 = {
	title: "Polyvinyl acetate",
	url: "Polyvinyl acetate",
	languageCode: "en",
	languageDirection: "ltr",
	extract:
	"<p><b>Poly(vinyl acetate)</b> (<b>PVA</b>, <b>PVAc</b>, <b>poly(ethenyl ethanoate)</b>: best known as <b>wood glue</b>, <b>white glue</b>, <b>carpenter's glue</b>, <b>school glue</b>, <b>Elmer's glue</b> in the US, or <b>PVA glue</b>) is an aliphatic rubbery synthetic polymer with the formula (C<sub>4</sub>H<sub>6</sub>O<sub>2</sub>)<sub>n</sub>. It belongs to the polyvinyl esters family, with the general formula -[RCOOCHCH<sub>2</sub>]-. It is a type of thermoplastic. There is considerable confusion between the glue as purchased, an aqueous emulsion of mostly vinyl acetate monomer, and the subsequent dried and polymerized PVAc that is the true thermoplastic polymer.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/576px-PVA.svg.png",
		width: 576,
		height: 640
	},
	pageId: 233089
};

MODELS.DISAMBIGUATION = {
	title: "Manhattan (disambiguation)",
	url: "Manhattan (disambiguation)",
	languageCode: "en",
	languageDirection: "ltr",
	extract: "<p><b>Manhattan</b> is a borough of New York City.</p>",
	type: "disambiguation",
	pageId: 18835
};

MODELS.HE_WIKI = {
	title: "????????????????????",
	url: "????????????????????",
	languageCode: "he",
	languageDirection: "rtl",
	extract:
	"<p><b>????????????????????</b> ?????????????? pr?? (????????) ???????????????? I???????????? (????????????????), ?????? ???????????? ?????????????? ?????????????? ?????????? ??????????????????, ???????????? ???????????? ?????????????? ??????????????. ???????????? ?????????????????????? ???????????? ???? ?????????? ???????? ?????? ??????????????, ???????? ???????????? ???????? ?????????????? ????????, ???????????????? ???????? ?????? ???????? ???? ???????? ????????, ???????? ?????? ???????????? ????????. ??????????, ???????????? ?????????????????????? ???????? ???? ???????? ???????????? ???? ???????????? ??????????????, ???????? ?????? ???? ?????????? ????????. ???????? ?????????? ?????????? ?????????? ???? ???????????? ?????? ???????????? ??????????????????????, ?????????? ????????, ?????????? ?????????? ?????????? ???????? ???? ????????, ?????? ?????????? ?????? ?????????????? ???? ???????? ????????.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Stonehenge2007_07_30.jpg",
		width: 640,
		height: 480
	},
	pageId: 502723
};

MODELS.HE_WIKI2 = {
	title: "????????????",
	url: "????????????",
	languageCode: "he",
	languageDirection: "rtl",
	extract: "<p><b>????????????</b> ?????? ?????? ?????????? ???? ???????????? ?????? ???????????? ??????????????, ?????????? ?????????????????????? ???????????? ?????????? ????????????. ???????? ?????????? ???? ???????? ?????? ??????????, ?????????????? ???????? ???????????????? ?????????? ???????? ???????? ?????????????? ????????. ?????????????? ?????????????? ???? ??????????????, ?????????? ???????? ??????????????????. ???????????? ???????????????? ???? ???????? ?????? ?????????? ???? ????????????, ?????????? ???? ???????? ???? ???????????????? ???????? ??????????????. ???????????? ???????????????? ???????????? ???????????? ???? ????????, ????????????, ??????????, ???????????? ??????????????, ?????? ???????????? ?????????? ?????????? ?????????? ???????????????????????????? ???? \"???????????? ????????\", ?????????? ?????? ???????????? \"????????????\".</p>",
	type: "page",
	thumbnail: {
		source: "img/424px-London_Montage_L.jpg",
		width: 424,
		height: 640
	},
	"pageId": 2955
}

MODELS.AR_WIKI = {
	title: "?????????? ??????????",
	url: "?????????? ??????????",
	languageCode: "ar",
	languageDirection: "rtl",
	extract:
	"<p><b>????????????</b> ???? ?????????? ?????????????? ???? ???????????????????? ?????????? ?????? ???????????????? ???????? ???????? ???????????????? ?????????? ?????????? ??????????????(?????? 1000 ???????? 2500 ?????? ???? 700 ??????...)?? ?????? ???????????? ???? ???????????? ?????????? ???????????? ???? ???????????? ???? ?????????? ?????????? ???? ?????????? ???????? ?????????????? ???????? ?????????????? ??<b>????????????</b> ?????????? ?????????????? ?????????? ????????????????.\n???????????? ???????????? ???????? ?????????? ?????????????? ??????????&nbsp;:</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Satellitenaufnahme_der_Alpen.jpg",
		width: 640,
		height: 494
	},
	pageId: 32340
};

MODELS.AR_WIKI2 = {
	title: "?????????? ??????????",
	url: "?????????? ??????????",
	languageCode: "ar",
	languageDirection: "rtl",
	extract:
	"<p><b>????????????</b> ???? ?????????? ?????????????? ???? ???????????????????? ?????????? ?????? ???????????????? ???????? ???????? ???????????????? ?????????? ?????????? ??????????????(?????? 1000 ???????? 2500 ?????? ???? 700 ??????...)?? ?????? ???????????? ???? ???????????? ?????????? ???????????? ???? ???????????? ???? ?????????? ?????????? ???? ?????????? ???????? ?????????????? ???????? ?????????????? ??<b>????????????</b> ?????????? ?????????????? ?????????? ????????????????.\n???????????? ???????????? ???????? ?????????? ?????????????? ??????????&nbsp;:</p>",
	type: "page",
	thumbnail: {
		source:
		"img/Barker_poster.jpg/258px-Barker_poster.jpg",
		width: 258,
		height: 640
	},
	pageId: 32340
};

MODELS.JA_WIKI = {
	title: "????????????",
	url: "????????????",
	languageCode: "ja",
	languageDirection: "ltr",
	extract:
	"<p><b>????????????</b>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Kuroishi_Yakisoba01.JPG",
		width: 640,
		height: 480
	},
	pageId: 69478
};

MODELS.KO_WIKI = {
	title: "????????? DS",
	url: "????????? DS",
	languageCode: "ko",
	languageDirection: "ltr",
	extract:
	"<p><b>????????? DS</b>(<span>??????: </span>Nintendo DS, <span>?????????: </span>??????????????????DS)??? ???????????? ??????, ???????????? ????????? ???????????????. 2?????? ???????????? ?????? ??????, ???????????? ?????? ?????? ?????? ?????? ????????? ????????? ????????????. 2004??? 11??? 21??? ???????????? ??????????????????, ??????????????? ?????? ??? 12??? 2?????? ???????????????. ???????????????????????? ??????????????? 2005??? 2??? 24?????? 2005??? 3??? 11?????? ?????? ?????????????????? ??????????????? iQue DS?????? ???????????? 2005??? 7??? 23?????? ???????????????.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Nintendo_DS_Trans.png",
		width: 640,
		height: 584
	},
	pageId: 13295
};

MODELS.HZ_WIKI = {
	title: "????????????????????????",
	url: "????????????????????????",
	languageCode: "zh",
	languageDirection: "ltr",
	extract:
	"<p>?????????????????????154???????????????????????????188,336,179?????????762,169.48??????????????????????????????????????????????????????????????????????????????????????????</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-USA_National_Forests_Map.jpg",
		width: 640,
		height: 416
	},
	pageId: 6097460
};

MODELS.EL_WIKI = {
	title: "????????????",
	url: "????????????",
	languageCode: "el",
	languageDirection: "ltr",
	extract:
	"<p>???? ?????????????? ???????????????? ?????????? ?? ???????????? ?????????????????????? ?????????? ?????? <b>????????????</b>, ???????????????????? ?????????? ???????? ?????? ????????????????????, ???? ???????????? ?????? ?????? ???? ?????????????????? ???????????? ?????? ?????? 5?? ????. ?????????? ???????????????? ?????? ???????? ?????? ??????????????, ???? ???????????? ???????????????? ?????? ?????????????? ???????? ?????? ?????? ?????????????????? ?????? ????????????. ???????? ?????? ????????????????, ???????????? ?? ???????? ?????? ?????????? ?????????????? ??????????. ?????????????????????????? ??????????, ?????? ???????????????????? ???? ???? ?????????????????? ?????? ?????? ???????????????? ???? ?????? ??????????, ???????????????????? ???? ???? ???????????????? ?????? ??????????????.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Knossos_-_North_Portico_02.jpg",
		width: 640,
		height: 480
	},
	pageId: 6070
};

MODELS.HI_WIKI = {
	title: "??????????????????",
	url: "??????????????????",
	languageCode: "hi",
	languageDirection: "ltr",
	extract:
	"<p><b>??????????????????</b> ??????????????? ?????? ?????? ?????????????????? ????????? ????????? ???????????? ?????? ????????????????????? ????????? ???????????? ????????? ????????? ????????? ?????? ??????????????? ?????? ???????????? ????????????????????? ?????? ???????????? ????????? ?????? ????????? 4,000 ???????????? ???????????? ????????????????????? ??????????????? ?????? ??????????????? ??????????????? ?????? ??????????????? ?????? ?????????, ????????????????????? ??????????????? ?????? ???????????????????????? ?????? ???????????? ?????????????????? ??????????????? ?????? ???????????????????????? ?????????????????? ?????? ????????? ????????? ?????? ?????????????????? ???????????? ?????????????????? ??????????????????????????? ??????????????? ???????????? ????????? ???????????????????????????????????? ?????? ??????????????? ????????? ????????? ??????????????? ??????????????? ?????????????????? ????????? ??????????????? ?????? ????????????????????? ?????? ?????????????????? ????????? 9????????? ????????????????????? ?????? ??????????????????????????? ?????????????????? ????????? ?????? ???????????? ?????????????????????????????? ?????? ????????? ?????? ????????? ???????????? ???????????????????????? ??????????????? ?????? ???????????????????????? ????????? ????????? ???????????????????????? ????????? ????????????????????? ????????? ?????????-??????????????? ??????????????? ?????????????????? ????????? ??????????????? ??????????????? ?????? ??????????????? ?????? ????????? ???????????????????????? ??????????????? ?????????????????? ???????????? ?????? ?????????????????? ????????? ????????? ???????????? ?????? ????????? ????????? ???????????? 23 ?????????????????? ?????????. ????????? ????????????????????? ??????????????? ????????? ????????? ?????????, ??????: ???????????? ???????????? ????????? ???????????????????????? ?????? ???????????? ???????????? ??????????????? ????????????</p>",
	type: "page",
	thumbnail: {
		source:
		"img/554px-Baghdad_collage.png",
		width: 554,
		height: 640
	},
	pageId: 8441
};

MODELS.RU_WIKI = {
	title: "????????",
	url: "????????",
	languageCode: "ru",
	languageDirection: "ltr",
	extract:
	"<p><b>????????</b>&nbsp;??? ?????????? ????????, ??????????????, ?????????????????????? ??????????????????, ?????????????????? ???????????????????? ?? ????????????????, ???????????????????????? ?????????????????????? ?????????????????? ??????????????????, ?????????????? ?????????????? ????????????&nbsp;??? ????????????????????.</p>",
	type: "page",
	thumbnail: {
		source:
		"img/640px-Bristol.zoo.greater.flamingo.arp.jpg",
		width: 640,
		height: 444
	},
	pageId: 158104
};

MODELS.TH_WIKI = {
	title: "????????????????????????????????????",
	url: "????????????????????????????????????",
	languageCode: "th",
	languageDirection: "ltr",
	extract:
	"<p><b>????????????????????????????????????</b> ???????????? <b>?????????????????????????????????????????????</b> ??????????????????????????? <b>?????????????????????????????????????????????</b> ????????? <b>?????????????????????????????????</b> ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>",
	type: "page",
	thumbnail: {
		source:
		"img/426px-NASA-CarolineAtoll.jpg",
		width: 426,
		height: 640
	},
	pageId: 901909
};

const REFERENCE_EXTRACT = 'Link to <a href="#">website</a>, <a href="https://wikipedia.org">external</a> and <a href="https://wikipedia.org/w/index.pdf">pdf</a>';

const REFERENCE_EXTRACT_LONG = `This reference has really long text. When you have really long text, and I mean really really long text, not just quite long text, it should introduce a scrollbar.
The scrollbar is beautiful, one of the most beautiful things you have ever seen but it will only kick in when you have enough text and the text that has been
written so far is not enough so we will continue writing more and more text until it shows. More and more and more and more. More and more and more.
Sometimes it feels like it is never ending. The reference preview gets larger and larger. Larger and larger that you start to doubt yourself and wonder:
perhaps I need some kind of special flag in the reference model to make the scrolling appear. However, luckily as you have that thought the storybook refreshes and a scrollbar
appears. The reference preview no longer grows and you sigh a sigh of relief. You scroll down in the storybook and click one of the reference links
and finally find <a href="#">the reference</a> you were looking for.`;

MODELS.TYPE_REFERENCE_BOOK = {
	type: 'reference',
	referenceType: 'book',
	extract: REFERENCE_EXTRACT
};

MODELS.TYPE_REFERENCE_JOURNAL = {
	type: 'reference',
	referenceType: 'journal',
	extract: REFERENCE_EXTRACT
};

MODELS.TYPE_REFERENCE_NEWS = {
	type: 'reference',
	referenceType: 'news',
	extract: REFERENCE_EXTRACT
};

MODELS.TYPE_REFERENCE_WEB = {
	type: 'reference',
	referenceType: 'web',
	extract: REFERENCE_EXTRACT
};

MODELS.TYPE_REFERENCE_GENERIC = {
	type: 'reference',
	referenceType: 'generic',
	extract: REFERENCE_EXTRACT
};

MODELS.TYPE_REFERENCE_GENERIC_LONG = {
	type: 'reference',
	referenceType: 'generic',
	extract: REFERENCE_EXTRACT_LONG
};

MODELS.TYPE_REFERENCE_NOTE = {
	type: 'reference',
	referenceType: 'note',
	extract: `<p>This is a note.</p>`
};

MODELS.TYPE_REFERENCE_GENERIC_COLLAPSIBLE = {
	type: 'reference',
	referenceType: 'generic',
	extract: `<p>This is a reference.</p><div class="mw-collapsible"></div>`
};

MODELS.ERROR = {
	title: "Error Preview",
	url: "Error Preview",
	languageCode: "en",
	languageDirection: "ltr",
	type: 'generic',
};

export default MODELS;
