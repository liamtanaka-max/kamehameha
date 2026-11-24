// =========================================================
//  DAILY QUESTIONS — written by the daily question agent
//  (instructions: tools/DAILY_AGENT.md)
//
//  Every day gets 7 brand-new prompts, one per theme, with a `debut`
//  date. On its debut day a prompt is part of that day's Daily, and from
//  then on it joins the pool for Infinite and Party. Prompts can't be
//  played before their debut day.
//
//  Same format as QUESTIONS in questions.js, plus `debut`. A shows or
//  settings prompt can use `where` (catalog filter) instead of `answers`.
//  Newest days go at the bottom. Run: node tools/check_questions.js
// =========================================================

const DAILY_QUESTIONS = [
  {
    id: "name-a-character-who-wears-a-cape-or-cloak",
    theme: "characters",
    debut: "2026-11-25",
    prompt: "Name a character who wears a cape or cloak",
    answers: {
      1: ["All Might","Saitama","Tuxedo Mask|Mamoru","Levi|Levi Ackerman","Kamina","Itachi|Itachi Uchiha"],
      2: ["Erwin|Erwin Smith","Eren|Eren Yeager","Mikasa|Mikasa Ackerman","Armin|Armin Arlert","Hange|Hange Zoe","Lelouch|Zero|Lelouch Lamperouge","Shanks","Whitebeard|Edward Newgate","Garp|Monkey D. Garp","Akainu|Sakazuki","Kizaru|Borsalino","Aokiji|Kuzan","Smoker","Doflamingo|Donquixote Doflamingo","Mihawk|Dracule Mihawk","Piccolo","Guts","Griffith","Frieren","Himmel","Hiei","Pain|Nagato","Konan","Kisame|Kisame Hoshigaki","Deidara","Sasori","Hidan","Kakuzu","Naruto|Naruto Uzumaki","Minato|Minato Namikaze","Mirio|Mirio Togata","Simon"],
      3: ["Monkey D. Dragon|Dragon","Coby|Koby","Sengoku","Fujitora|Issho","Gilgamesh","Ainz|Ainz Ooal Gown","Kakashi|Kakashi Hatake","Hiruzen|Third Hokage","Tsunade","Obito|Obito Uchiha|Tobi","Zetsu","Jean|Jean Kirstein","Sasha|Sasha Blouse","Connie|Connie Springer","Alucard","Escanor","All For One","Fern","Heiter","Stark","Garou"],
      4: ["Zeref","Lordgenome","Gendo|Gendo Ikari","Char Aznable|Char"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-sand-earth-or-metal-powers",
    theme: "powers",
    debut: "2026-11-25",
    prompt: "Name a character with sand, earth or metal powers",
    answers: {
      1: ["Gaara","Crocodile","Edward Elric|Edward|Ed","Kirishima|Eijiro Kirishima"],
      2: ["Onoki","Shukaku|One-Tail","Gajeel|Gajeel Redfox","Tetsutetsu|Tetsutetsu Tetsutetsu","Cementoss","Kakuzu","Alphonse Elric|Alphonse|Al","Izumi Curtis|Izumi","Armstrong|Alex Louis Armstrong","Diane","Jirobo","Daz Bonez|Mr. 1"],
      3: ["Rasa|Fourth Kazekage","Sasori","Kurotsuchi","Kakashi|Kakashi Hatake","Yamato","Hashirama|Hashirama Senju","Deidara","Jura|Jura Neekis","Hohenheim|Van Hohenheim"],
      4: ["Third Kazekage","Gildarts?","Fat Gum"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-a-running-gag",
    theme: "tropes",
    debut: "2026-11-25",
    prompt: "Name a character with a running gag",
    answers: {
      1: ["Zoro|Roronoa Zoro","Krillin","Yamcha","Usopp","Sanji","Kakashi|Kakashi Hatake"],
      2: ["Brook","Zenitsu|Zenitsu Agatsuma","Mineta|Minoru Mineta","Jiraiya","Might Guy|Guy|Gai","Naruto|Naruto Uzumaki","Gintoki|Gintoki Sakata","Shinpachi|Shinpachi Shimura","Saitama","King","Genos","Aqua","Megumin","Darkness","Luffy|Monkey D. Luffy","Vegeta","Mr. Satan|Hercule","Master Roshi|Roshi","Shikamaru|Shikamaru Nara","Choji|Choji Akimichi","Ryuk","L|L Lawliet","Kenpachi|Kenpachi Zaraki","Kon","Rukia|Rukia Kuchiki","Hughes|Maes Hughes","Armstrong|Alex Louis Armstrong","Edward Elric|Edward|Ed","Sasha|Sasha Blouse","Levi|Levi Ackerman","Tanjiro|Tanjiro Kamado","Deku|Izuku Midoriya","Iida|Tenya Iida","Power","Anya|Anya Forger","Bocchi|Hitori Gotoh","Natsu|Natsu Dragneel","Happy","Gray|Gray Fullbuster","Juvia|Juvia Lockser","Erza|Erza Scarlet","Franky","Buggy"],
      3: ["Ryo Yamada|Ryo","Leorio","Killua|Killua Zoldyck","Alphonse Elric|Alphonse|Al","Mumen Rider","Kagura","Yachiru|Yachiru Kusajishi","Konohamaru","Oolong","Rock Lee|Lee"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-s-someone-s-biggest-fan",
    theme: "relationships",
    debut: "2026-11-25",
    prompt: "Name a character who's someone's biggest fan",
    answers: {
      1: ["Deku|Izuku Midoriya","Genos","Bartolomeo","Konohamaru","Rock Lee|Lee"],
      2: ["Coby|Koby","Toga|Himiko Toga","Spinner","Hinata Shoyo|Shoyo Hinata","Sanji","Kita|Ikuyo Kita","Ruby Hoshino|Ruby","Aqua Hoshino|Aqua","Kirishima|Eijiro Kirishima","Ritsu|Ritsu Kageyama","Eren|Eren Yeager","Gon|Gon Freecss","Gohan|Son Gohan","Magna|Magna Swing","Gauche|Gauche Adlai","Natsu|Natsu Dragneel","Mumen Rider","Zenitsu|Zenitsu Agatsuma","Juvia|Juvia Lockser","Mineta|Minoru Mineta","Senjuro|Senjuro Rengoku","Kota|Kota Izumi","Eri"],
      3: ["Marin|Marin Kitagawa","Gabi|Gabi Braun","Falco|Falco Grice","Pan","Uub","Wendy|Wendy Marvell","Teru|Teruki Hanazawa","Haikyu Kageyama?","Ochaco|Ochaco Uraraka","Mirio|Mirio Togata","Shinso|Hitoshi Shinso","Videl","Yamcha"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-famous-anime-dragon",
    theme: "objects",
    debut: "2026-11-25",
    prompt: "Name a famous anime dragon",
    answers: {
      1: ["Shenron|Shenlong","Igneel","Haku","Tohru"],
      2: ["Porunga","Super Shenron","Veldora","Acnologia","Kanna|Kanna Kamui","Elma","Lucoa|Quetzalcoatl","Kaido","Momonosuke","Blue-Eyes White Dragon|Blue Eyes","Red-Eyes Black Dragon|Red Eyes","Slifer the Sky Dragon|Slifer","Charizard","Rayquaza","Dragonite","Omega Shenron"],
      3: ["Grandeeney|Grandine","Metalicana","Weisslogia","Skiadrum","Zirconis","Atlas Flame","Ilulu","Fafnir","Bahamut","Tiamat","Veldanava","Gyarados"],
      4: ["Velzard","Velgrynd","Volcanica","Ragnarok"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-set-at-a-school-for-heroes-wizards-or-fighters",
    theme: "settings",
    debut: "2026-11-25",
    prompt: "Name an anime set at a school for heroes, wizards or fighters",
    answers: {
      1: ["My Hero Academia|MHA|Boku no Hero Academia","Jujutsu Kaisen|JJK","Naruto","Little Witch Academia","Mashle|Mashle: Magic and Muscles"],
      2: ["Assassination Classroom","Kill la Kill","Soul Eater","The Irregular at Magic High School|Mahouka","Food Wars|Shokugeki no Soma","Blue Exorcist","Welcome to Demon School! Iruma-kun|Iruma-kun","Witch Hat Atelier","A Certain Magical Index|Index","Blue Lock","Kakegurui","Highschool DxD"],
      3: ["Infinite Stratos","Chivalry of a Failed Knight|Rakudai Kishi no Cavalry","The Asterisk War","Akashic Records of Bastard Magic Instructor|Rokudenashi","Wise Man's Grandchild","Tokyo Ravens","Undefeated Bahamut Chronicle","Seraph of the End","Twin Star Exorcists","Classroom of the Elite","The Misfit of Demon King Academy","The Ancient Magus' Bride"],
      4: ["Trinity Seven","Strike the Blood","Hundred","Qualidea Code"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-shonen-anime",
    theme: "shows",
    debut: "2026-11-25",
    prompt: "Name a shonen anime",
    where: { genre: 27 }
  }
];

if (typeof module !== "undefined") module.exports = { DAILY_QUESTIONS };
