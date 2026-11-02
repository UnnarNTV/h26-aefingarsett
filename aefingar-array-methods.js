// =====================================================
// NTV · Forritun 101 · Æfingasett
// Array methods, objects, JSON og fetch
//
// Keyra:  node aefingar-array-methods.js
//    eða: opna í vafra og skoða í Console (F12)
//
// Hvernig:
//   - Skrifaðu lausnina undir hverja æfingu.
//   - Prentaðu alltaf niðurstöðuna með console.log.
//   - "// Á að gefa:" segir þér hvað á að koma út, svo þú getir athugað sjálf/ur.
//   - Ekki byrja á næstu æfingu fyrr en sú sem þú ert á virkar.
//   - Gerðu eina æfingu í einu og keyrðu skrána eftir hverja.
//
// ⭐ = létt   ⭐⭐ = miðlungs   ⭐⭐⭐ = erfitt
// =====================================================


// =====================================================
// GÖGN — ekki breyta þessu, notaðu það í æfingunum
// =====================================================

const tolur = [4, 8, 15, 16, 23, 42];

const nofn = ["Anna", "Bjarki", "Sigga", "Jón", "Kinga", "Óli"];

const kvikmyndir = [
  { id: 1, titill: "Hrútar", ar: 2015, lengd: 93, einkunn: 7.1, flokkur: "drama" },
  { id: 2, titill: "Djúpið", ar: 2012, lengd: 95, einkunn: 6.8, flokkur: "drama" },
  { id: 3, titill: "Englar alheimsins", ar: 2000, lengd: 100, einkunn: 7.5, flokkur: "drama" },
  { id: 4, titill: "Með allt á hreinu", ar: 1982, lengd: 98, einkunn: 7.9, flokkur: "gaman" },
  { id: 5, titill: "Nói albínói", ar: 2003, lengd: 93, einkunn: 7.3, flokkur: "drama" },
  { id: 6, titill: "Stella í orlofi", ar: 1986, lengd: 85, einkunn: 7.4, flokkur: "gaman" },
  { id: 7, titill: "Kona fer í stríð", ar: 2018, lengd: 101, einkunn: 7.4, flokkur: "gaman" },
  { id: 8, titill: "Lamb", ar: 2021, lengd: 106, einkunn: 6.2, flokkur: "hrollur" },
];

const karfa = [
  { vara: "Mjólk", verd: 239, magn: 2 },
  { vara: "Brauð", verd: 549, magn: 1 },
  { vara: "Skyr", verd: 329, magn: 4 },
  { vara: "Epli", verd: 89, magn: 6 },
  { vara: "Kaffi", verd: 1290, magn: 1 },
];


// =====================================================
// HLUTI 1 — Upphitun: arrays og for...of
// =====================================================

// 1.1 ⭐ Prentaðu fyrsta og síðasta nafnið í `nofn`.
// Á að gefa: Anna  Óli


// 1.2 ⭐ Prentaðu hversu mörg nöfn eru í `nofn` (.length).
// Á að gefa: 6


// 1.3 ⭐ Notaðu for...of til að prenta hvert nafn í `nofn` í sér línu.


// 1.4 ⭐ Notaðu for...of til að leggja saman allar tölurnar í `tolur`.
// Á að gefa: 108


// 1.5 ⭐ Bættu nafninu þínu aftast í `nofn` með push og prentaðu listann.


// 1.6 ⭐⭐ Notaðu includes til að athuga hvort "Kinga" sé í `nofn`. Svo "Gunnar".
// Á að gefa: true  false


// =====================================================
// HLUTI 2 — Objects
// =====================================================

// 2.1 ⭐ Prentaðu titilinn á fyrstu kvikmyndinni (kvikmyndir[0]).
// Á að gefa: Hrútar


// 2.2 ⭐ Prentaðu árið á síðustu kvikmyndinni. Notaðu .length - 1.
// Á að gefa: 2021


// 2.3 ⭐ Búðu til þitt eigið object `eg` með keys: nafn, aldur og uppahaldsMynd.
// Prentaðu svo: "Ég heiti ___ og er ___ ára."


// 2.4 ⭐⭐ Prentaðu titilinn á öllum kvikmyndunum með for...of.


// 2.5 ⭐⭐ Prentaðu hverja kvikmynd svona: "Hrútar (2015) — 93 mín"
// Hint: template literal  `${m.titill} (${m.ar})`


// =====================================================
// HLUTI 3 — forEach og map
// map býr til NÝTT array af sömu lengd, með því sem callback-ið skilar.
// =====================================================

// 3.1 ⭐ Notaðu forEach til að prenta hvert nafn í `nofn` með "Halló " fyrir framan.
// Á að gefa: Halló Anna, Halló Bjarki ...


// 3.2 ⭐ Notaðu map til að tvöfalda allar tölurnar í `tolur`.
// Á að gefa: [8, 16, 30, 32, 46, 84]


// 3.3 ⭐ Notaðu map til að búa til array af nöfnum í hástöfum (toUpperCase).
// Á að gefa: ["ANNA", "BJARKI", ...]


// 3.4 ⭐ Notaðu map til að búa til array af titlum allra kvikmyndanna.
// Á að gefa: ["Hrútar", "Djúpið", ...]


// 3.5 ⭐⭐ Notaðu map til að búa til array af strings: "Hrútar (2015)"


// 3.6 ⭐⭐ Notaðu map á `karfa` til að fá heildarverð hverrar línu (verd * magn).
// Á að gefa: [478, 549, 1316, 534, 1290]


// 3.7 ⭐⭐ Notaðu map til að búa til array af lengdum nafnanna í `nofn`.
// Á að gefa: [4, 6, 5, 3, 5, 3]


// =====================================================
// HLUTI 4 — filter
// filter heldur bara þeim elementum þar sem callback-ið skilar true.
// =====================================================

// 4.1 ⭐ Finndu allar tölur í `tolur` sem eru stærri en 15.
// Á að gefa: [16, 23, 42]


// 4.2 ⭐ Finndu allar sléttar tölur í `tolur`. Hint: % 2 === 0
// Á að gefa: [4, 8, 16, 42]


// 4.3 ⭐ Finndu allar kvikmyndir í flokknum "gaman".
// Á að gefa: 3 kvikmyndir


// 4.4 ⭐ Finndu allar kvikmyndir sem komu út eftir árið 2010.
// Á að gefa: Hrútar, Djúpið, Kona fer í stríð, Lamb


// 4.5 ⭐⭐ Finndu öll nöfn sem eru styttri en 5 stafir.
// Á að gefa: ["Anna", "Jón", "Óli"]


// 4.6 ⭐⭐ Finndu kvikmyndir með einkunn 7.4 eða hærri.
// Prentaðu bara titlana (filter, svo map).
// Á að gefa: ["Englar alheimsins", "Með allt á hreinu", "Stella í orlofi", "Kona fer í stríð"]


// 4.7 ⭐⭐ Finndu vörur í `karfa` sem kosta meira en 300 kr. stykkið.
// Á að gefa: Brauð, Skyr, Kaffi


// =====================================================
// HLUTI 5 — find
// find skilar FYRSTA elementinu sem passar (ekki array!), eða undefined.
// =====================================================

// 5.1 ⭐ Finndu kvikmyndina með id 4.
// Á að gefa: { id: 4, titill: "Með allt á hreinu", ... }


// 5.2 ⭐ Finndu fyrstu töluna í `tolur` sem er stærri en 10.
// Á að gefa: 15


// 5.3 ⭐ Finndu fyrsta nafnið sem byrjar á "K". Hint: nafn.startsWith("K")
// Á að gefa: Kinga


// 5.4 ⭐⭐ Finndu kvikmynd sem heitir "Lamb" og prentaðu árið hennar.
// Á að gefa: 2021


// 5.5 ⭐⭐ Reyndu að finna kvikmynd sem heitir "Titanic". Hvað kemur?
// Hvað gerist ef þú reynir svo .titill á því? Lestu villuna.


// =====================================================
// HLUTI 6 — reduce
// reduce tekur allt array-ið og skilar EINU value.
//   listi.reduce((summa, stak) => summa + stak, 0)
//                 ^ það sem er komið   ^ næsta    ^ byrjunargildi
// =====================================================

// 6.1 ⭐ Leggðu saman allar tölurnar í `tolur` með reduce.
// Á að gefa: 108


// 6.2 ⭐⭐ Leggðu saman lengd allra kvikmyndanna (í mínútum).
// Á að gefa: 771


// 6.3 ⭐⭐ Reiknaðu heildarverð körfunnar (verd * magn fyrir hverja línu).
// Á að gefa: 4167


// 6.4 ⭐⭐ Teldu hversu margar vörur eru samtals í körfunni (summa af magn).
// Á að gefa: 14


// 6.5 ⭐⭐⭐ Reiknaðu meðaleinkunn kvikmyndanna. Prentaðu með einum aukastaf.
// Hint: reduce fyrir summuna, deila með .length, svo .toFixed(1)
// Á að gefa: 7.2


// 6.6 ⭐⭐⭐ Finndu lengstu kvikmyndina með reduce.
// Hint: berðu saman og skilaðu þeirri sem er lengri
// Á að gefa: Lamb (106 mín)


// =====================================================
// HLUTI 7 — some, every og sort
// =====================================================

// 7.1 ⭐ some: Er einhver kvikmynd í flokknum "hrollur"?
// Á að gefa: true


// 7.2 ⭐ every: Eru allar tölurnar í `tolur` jákvæðar (> 0)?
// Á að gefa: true


// 7.3 ⭐⭐ every: Eru allar kvikmyndirnar lengri en 90 mínútur?
// Á að gefa: false


// 7.4 ⭐⭐ sort: Raðaðu `nofn` í stafrófsröð.
// ATH: sort breytir upprunalega array-inu. Notaðu [...nofn].sort() til að afrita fyrst.
// Taktu eftir hvar "Óli" lendir. sort raðar eftir stafakóða, svo íslenskir stafir lenda aftast.


// 7.5 ⭐⭐ sort: Raðaðu kvikmyndunum eftir ári, elsta fyrst.
// Hint: [...kvikmyndir].sort((a, b) => a.ar - b.ar)
// Prentaðu titlana. Á að gefa: Með allt á hreinu, Stella í orlofi, Englar alheimsins, ...


// 7.6 ⭐⭐⭐ sort: Raðaðu kvikmyndunum eftir einkunn, hæsta fyrst, og
// prentaðu bara topp 3 (slice(0, 3)).
// Á að gefa: Með allt á hreinu, Englar alheimsins, Stella í orlofi


// =====================================================
// HLUTI 8 — Allt saman: keðjur
// Hægt er að setja methods í röð: listi.filter(...).map(...)
// =====================================================

// 8.1 ⭐⭐ Titlar allra drama-mynda, í hástöfum.
// Á að gefa: ["HRÚTAR", "DJÚPIÐ", "ENGLAR ALHEIMSINS", "NÓI ALBÍNÓI"]


// 8.2 ⭐⭐ Samanlögð lengd allra gamanmynda (filter + reduce).
// Á að gefa: 284


// 8.3 ⭐⭐ Hversu margar kvikmyndir komu út fyrir árið 2000?
// Á að gefa: 2


// 8.4 ⭐⭐⭐ Búðu til strengi fyrir körfuna: "Skyr x4 = 1316 kr."
// og prentaðu bara þær línur sem kosta meira en 500 kr. samtals.
// Á að gefa: Brauð x1 = 549 kr., Skyr x4 = 1316 kr., Epli x6 = 534 kr., Kaffi x1 = 1290 kr.


// 8.5 ⭐⭐⭐ Skrifaðu function `finnaMynd(titill)` sem tekur inn titil sem parameter
// og skilar kvikmyndinni, eða textanum "Fannst ekki".
// Prófaðu: finnaMynd("Djúpið") og finnaMynd("Batman")


// 8.6 ⭐⭐⭐ Skrifaðu function `myndirIFlokki(flokkur)` sem skilar array af titlum
// í þeim flokki. Prófaðu með "drama", "gaman" og "hrollur".


// =====================================================
// HLUTI 9 — JSON
// JSON er TEXTI. stringify: object → texti. parse: texti → object.
// =====================================================

// 9.1 ⭐ Breyttu `karfa` í JSON með JSON.stringify og prentaðu.
// Prentaðu líka typeof á niðurstöðunni. Á að gefa: string


// 9.2 ⭐ Breyttu þessum texta í object og prentaðu nafnið:
const nemandiJSON = '{"nafn":"Sigga","aldur":24,"aefingar":[1,2,3]}';
// Á að gefa: Sigga


// 9.3 ⭐⭐ Hvað gerist ef þú reynir nemandiJSON.nafn án þess að parse-a? Af hverju?


// 9.4 ⭐⭐ Þessi texti er ekki gilt JSON. Lagaðu hann svo JSON.parse virki.
const biladJSON = "{ nafn: 'Óli', aldur: 31, }";
// Hint: athugaðu gæsalappirnar og kommuna aftast


// =====================================================
// HLUTI 10 — fetch (keyrir í vafra, eða node 18+)
// Mynstrið:
//   const response = await fetch(url);
//   const gogn = await response.json();
// Takið kommentin af function-inni neðst þegar þið komið hingað.
// =====================================================

// 10.1 ⭐ Sæktu https://dummyjson.com/recipes/1 og prentaðu nafnið.
// Á að gefa: Classic Margherita Pizza


// 10.2 ⭐⭐ Sæktu https://dummyjson.com/products?limit=10 og prentaðu
// titla allra varanna með map. Muna: listinn er í gogn.products.


// 10.3 ⭐⭐ Sæktu https://dummyjson.com/users?limit=30 og finndu
// alla notendur sem eru yngri en 30 ára (filter). Hversu margir eru þeir?


// 10.4 ⭐⭐⭐ Sæktu https://dummyjson.com/products?limit=30 og reiknaðu
// meðalverð varanna með reduce.


// async function fetchAefingar() {
//   // skrifaðu 10.1–10.4 hér
//
// }
//
// fetchAefingar();
