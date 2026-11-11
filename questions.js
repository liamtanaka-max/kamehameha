// =========================================================
//  QUESTION BANK
//  Tiers: 1 Common, 2 Uncommon, 3 Rare, 4 Epic, 5 Legendary, 6 Deep Cut
//  Each answer is a string. Use "|" to list alternate names/spellings:
//    "Zoro|Roronoa Zoro"  -> either one counts.
//  Capitals, spaces and punctuation are ignored when matching,
//  and small typos are forgiven.
//  To add a question, copy one block and edit it.
// =========================================================

const QUESTIONS = [
  {
    prompt: "Name an anime character who fights with a sword",
    answers: {
      1: ["Zoro|Roronoa Zoro", "Ichigo|Ichigo Kurosaki", "Tanjiro|Tanjiro Kamado"],
      2: ["Kirito", "Inuyasha", "Kenshin|Himura Kenshin|Kenshin Himura", "Mikasa|Mikasa Ackerman", "Levi|Levi Ackerman", "Trunks|Future Trunks", "Rengoku|Kyojuro Rengoku", "Zenitsu|Zenitsu Agatsuma", "Asta", "Sasuke|Sasuke Uchiha"],
      3: ["Erza|Erza Scarlet", "Kenpachi|Kenpachi Zaraki|Zaraki Kenpachi", "Guts", "Byakuya|Byakuya Kuchiki", "Mihawk|Dracule Mihawk", "Gintoki|Gintoki Sakata", "Zabuza|Zabuza Momochi", "Sesshomaru", "Inosuke|Inosuke Hashibira"],
      4: ["Makoto Shishio|Shishio", "Hajime Saito|Saito", "Muichiro|Muichiro Tokito", "Yoriichi|Yoriichi Tsugikuni"],
      5: ["Mugen", "Jin", "Hyakkimaru"],
      6: ["Jubei|Jubei Kibagami"]
    }
  },
  {
    prompt: "Name a Studio Ghibli film",
    answers: {
      1: ["Spirited Away", "My Neighbor Totoro|Totoro", "Howl's Moving Castle", "Princess Mononoke"],
      2: ["Kiki's Delivery Service", "Ponyo", "Castle in the Sky|Laputa", "Grave of the Fireflies", "The Boy and the Heron"],
      3: ["Nausicaa|Nausicaa of the Valley of the Wind", "The Wind Rises", "Arrietty|The Secret World of Arrietty", "Porco Rosso"],
      4: ["Whisper of the Heart", "The Cat Returns", "When Marnie Was There", "The Tale of the Princess Kaguya|Princess Kaguya"],
      5: ["Tales from Earthsea", "From Up on Poppy Hill", "Pom Poko", "Only Yesterday"],
      6: ["My Neighbors the Yamadas", "Ocean Waves", "Earwig and the Witch"]
    }
  },
  {
    prompt: "Name an anime character with white or silver hair",
    answers: {
      1: ["Gojo|Satoru Gojo|Gojo Satoru", "Killua|Killua Zoldyck", "Kakashi|Kakashi Hatake"],
      2: ["Toshiro|Hitsugaya|Toshiro Hitsugaya", "Kaneki|Ken Kaneki", "Gintoki|Gintoki Sakata", "Sesshomaru", "Inuyasha", "Frieren"],
      3: ["Jiraiya", "Gin Ichimaru|Ichimaru Gin", "Emilia", "Tengen|Tengen Uzui"],
      4: ["Allen Walker", "Accelerator", "Nagito Komaeda|Komaeda", "Sanemi|Sanemi Shinazugawa"],
      5: ["Shiro"],
      6: []
    }
  },
  {
    prompt: "Name a Shonen Jump series that started before 2000",
    answers: {
      1: ["Dragon Ball|Dragon Ball Z|DBZ", "One Piece", "Naruto"],
      2: ["Yu Yu Hakusho", "Hunter x Hunter|HxH", "Slam Dunk", "JoJo's Bizarre Adventure|JoJo", "Yu-Gi-Oh|Yugioh"],
      3: ["Rurouni Kenshin", "Fist of the North Star|Hokuto no Ken", "Saint Seiya", "Shaman King"],
      4: ["Dr. Slump", "City Hunter", "Captain Tsubasa", "Hikaru no Go", "Prince of Tennis|The Prince of Tennis", "Dragon Quest: The Adventure of Dai|Dai no Daibouken"],
      5: ["Kinnikuman", "Video Girl Ai", "Kochikame", "Hell Teacher Nube", "Space Adventure Cobra|Cobra"],
      6: ["Sakigake Otokojuku", "Rokudenashi Blues"]
    }
  },
  {
    prompt: "Name one of Ash Ketchum's Pokémon",
    answers: {
      1: ["Pikachu", "Charizard", "Bulbasaur", "Squirtle"],
      2: ["Greninja", "Lucario", "Pidgeot", "Butterfree", "Infernape"],
      3: ["Sceptile", "Snorlax", "Lapras", "Totodile", "Gible", "Rowlet", "Lycanroc", "Dragonite", "Gengar"],
      4: ["Muk", "Tauros", "Kingler", "Primeape", "Heracross", "Noctowl", "Bayleef", "Quilava", "Buizel", "Staraptor", "Hawlucha", "Noivern", "Goodra", "Talonflame", "Torracat", "Krookodile", "Oshawott"],
      5: ["Torkoal", "Glalie", "Corphish", "Gligar", "Unfezant", "Leavanny", "Pignite", "Meltan", "Melmetal", "Sirfetch'd", "Dracovish"],
      6: ["Palpitoad", "Boldore"]
    }
  },
  {
    prompt: "Name a Naruto character",
    answers: {
      1: ["Naruto|Naruto Uzumaki", "Sasuke|Sasuke Uchiha", "Sakura|Sakura Haruno", "Kakashi|Kakashi Hatake"],
      2: ["Itachi|Itachi Uchiha", "Hinata|Hinata Hyuga", "Gaara", "Jiraiya", "Madara|Madara Uchiha", "Rock Lee|Lee", "Shikamaru|Shikamaru Nara"],
      3: ["Neji|Neji Hyuga", "Orochimaru", "Tsunade", "Pain", "Obito|Obito Uchiha|Tobi", "Minato|Minato Namikaze", "Kiba|Kiba Inuzuka", "Ino|Ino Yamanaka", "Choji|Choji Akimichi", "Might Guy|Guy|Gai", "Iruka", "Kurama|Nine Tails", "Hashirama|Hashirama Senju"],
      4: ["Tenten", "Shino|Shino Aburame", "Temari", "Kankuro", "Kisame", "Deidara", "Sasori", "Hidan", "Kakuzu", "Konan", "Zabuza", "Haku", "Kabuto", "Yamato", "Sai", "Killer B|Killer Bee", "Asuma", "Kurenai", "Tobirama|Tobirama Senju", "Kushina", "Nagato", "Danzo", "Hiruzen|Third Hokage", "Konohamaru", "Suigetsu", "Karin"],
      5: ["Ebisu", "Shisui|Shisui Uchiha", "Tayuya", "Sakon", "Kimimaro", "Jugo", "Anko", "Ibiki", "Mei Terumi|Mei", "Onoki", "Raikage"],
      6: ["Moegi", "Udon", "Fu", "Utakata", "Yugito", "Roshi", "Han", "Kidomaru", "Jirobo", "Genma", "Raido", "Hayate", "Darui"]
    }
  },
  {
    prompt: "Name an anime character who wears glasses",
    answers: {
      1: ["Conan|Conan Edogawa|Detective Conan"],
      2: ["Hange|Hange Zoe|Hanji", "Aizen|Sosuke Aizen", "Iida|Tenya Iida", "Nanami|Kento Nanami"],
      3: ["Uryu Ishida|Ishida|Uryu", "Kabuto|Kabuto Yakushi", "Shino|Shino Aburame", "Tsukishima|Kei Tsukishima", "Gendo|Gendo Ikari"],
      4: ["Shinpachi|Shinpachi Shimura", "Arale|Arale Norimaki"],
      5: ["Kensuke Aida|Kensuke", "Ritsuko Akagi|Ritsuko"],
      6: []
    }
  },
  {
    prompt: "Name a Dragon Ball character",
    answers: {
      1: ["Goku|Son Goku|Kakarot", "Vegeta", "Gohan|Son Gohan", "Piccolo"],
      2: ["Frieza", "Cell", "Majin Buu|Buu", "Trunks", "Krillin", "Bulma", "Goten", "Beerus"],
      3: ["Broly", "Android 18", "Android 17", "Master Roshi|Roshi", "Yamcha", "Tien|Tenshinhan", "Chi-Chi", "Whis", "Jiren", "Hit", "Goku Black", "Zamasu", "Gogeta", "Vegito|Vegetto"],
      4: ["Raditz", "Nappa", "Chiaotzu", "Videl", "Mr. Satan|Hercule", "Dabura", "Babidi", "Bardock", "Cooler", "Zarbon", "Dodoria", "Ginyu|Captain Ginyu", "Recoome", "Burter", "Jeice", "Guldo", "Dende", "Mr. Popo", "Pan", "King Kai", "Supreme Kai", "Oolong", "Puar", "Kami", "Korin", "Yajirobe", "Launch", "Uub"],
      5: ["Ox-King", "Pilaf|Emperor Pilaf", "Mai", "Shu", "Tao Pai Pai", "Janemba", "Baby", "Omega Shenron", "Caulifla", "Kale", "Cabba", "Toppo"],
      6: ["Nam", "Bora", "Upa", "General Blue", "Spopovich", "Yamu", "Pui Pui", "Yakon", "Turles", "Lord Slug|Slug", "Garlic Jr", "Hirudegarn", "Tapion", "Dyspo", "Granolah", "Moro", "Gas"]
    }
  },
  {
    prompt: "Name a Demon Slayer character",
    answers: {
      1: ["Tanjiro|Tanjiro Kamado", "Nezuko|Nezuko Kamado", "Zenitsu|Zenitsu Agatsuma", "Inosuke|Inosuke Hashibira"],
      2: ["Rengoku|Kyojuro Rengoku", "Muzan|Muzan Kibutsuji", "Giyu|Giyu Tomioka", "Shinobu|Shinobu Kocho", "Tengen|Tengen Uzui"],
      3: ["Mitsuri|Mitsuri Kanroji", "Muichiro|Muichiro Tokito", "Akaza", "Douma|Doma", "Kokushibo", "Kanao|Kanao Tsuyuri", "Genya|Genya Shinazugawa", "Gyomei|Gyomei Himejima", "Sanemi|Sanemi Shinazugawa", "Obanai|Obanai Iguro"],
      4: ["Urokodaki|Sakonji Urokodaki", "Sabito", "Makomo", "Rui", "Enmu", "Gyutaro", "Daki", "Hantengu", "Gyokko", "Tamayo", "Yushiro", "Kagaya|Kagaya Ubuyashiki", "Kanae|Kanae Kocho", "Yoriichi|Yoriichi Tsugikuni", "Haganezuka|Hotaru Haganezuka", "Aoi|Aoi Kanzaki", "Kyogai"],
      5: ["Kaigaku", "Tanjuro|Tanjuro Kamado", "Jigoro|Jigoro Kuwajima", "Nakime", "Shinjuro|Shinjuro Rengoku", "Senjuro|Senjuro Rengoku", "Kotetsu"],
      6: ["Susamaru", "Yahaba", "Hand Demon", "Murata", "Goto", "Sumi", "Kiyo", "Naho"]
    }
  },
  {
    prompt: "Name an isekai anime (main character goes to another world)",
    answers: {
      1: ["Sword Art Online|SAO", "Re:Zero|Re Zero", "That Time I Got Reincarnated as a Slime|Tensura|Slime", "KonoSuba"],
      2: ["Overlord", "Mushoku Tensei|Jobless Reincarnation", "The Rising of the Shield Hero|Shield Hero", "No Game No Life"],
      3: ["Log Horizon", "The Devil Is a Part-Timer|Devil Is a Part Timer", "The Saga of Tanya the Evil|Tanya the Evil|Youjo Senki", "Uncle from Another World|Isekai Ojisan"],
      4: ["Inuyasha", "Digimon Adventure|Digimon", "Ascendance of a Bookworm", "Gate", "Restaurant to Another World", "Tsukimichi", "In Another World With My Smartphone", "Spirited Away"],
      5: ["Fushigi Yugi", "The Vision of Escaflowne|Escaflowne", "Grimgar|Grimgar of Fantasy and Ash", "Wise Man's Grandchild", "Magic Knight Rayearth|Rayearth", "Drifters"],
      6: ["El-Hazard", "Aura Battler Dunbine|Dunbine", "Now and Then, Here and There"]
    }
  },
  {
    prompt: "Name a mecha (giant robot) anime",
    answers: {
      1: ["Neon Genesis Evangelion|Evangelion|Eva", "Mobile Suit Gundam|Gundam", "Code Geass", "Gurren Lagann|Tengen Toppa Gurren Lagann"],
      2: ["Darling in the Franxx", "Gundam Wing", "Voltron|GoLion"],
      3: ["Macross|Super Dimension Fortress Macross|Robotech", "Full Metal Panic", "Gundam 00", "Iron-Blooded Orphans|Gundam Iron Blooded Orphans|IBO", "The Witch from Mercury|Gundam Witch from Mercury", "86|Eighty Six"],
      4: ["Escaflowne", "The Big O|Big O", "Eureka Seven", "Aldnoah.Zero|Aldnoah Zero", "Mazinger Z", "Knights of Sidonia", "SSSS.Gridman|Gridman"],
      5: ["Getter Robo", "Patlabor", "RahXephon", "Bokurano", "Armored Trooper Votoms|Votoms", "Gunbuster|Aim for the Top", "Martian Successor Nadesico|Nadesico"],
      6: ["Gasaraki", "Kuromukuro", "Zegapain", "Daitarn 3", "Giant Robo"]
    }
  },
  {
    prompt: "Name a One Piece character",
    answers: {
      1: ["Luffy|Monkey D. Luffy", "Zoro|Roronoa Zoro", "Nami", "Sanji"],
      2: ["Usopp", "Chopper|Tony Tony Chopper", "Robin|Nico Robin", "Franky", "Brook", "Shanks", "Ace|Portgas D. Ace", "Jinbe|Jinbei"],
      3: ["Law|Trafalgar Law", "Blackbeard|Marshall D. Teach|Teach", "Whitebeard|Edward Newgate", "Kaido", "Big Mom|Charlotte Linlin", "Doflamingo|Donquixote Doflamingo", "Mihawk|Dracule Mihawk", "Buggy", "Garp|Monkey D. Garp", "Sabo", "Yamato", "Crocodile", "Boa Hancock|Hancock"],
      4: ["Akainu|Sakazuki", "Aokiji|Kuzan", "Kizaru|Borsalino", "Smoker", "Enel|Eneru", "Rob Lucci|Lucci", "Eustass Kid|Kid", "Vivi|Nefertari Vivi", "Arlong", "Katakuri", "Marco", "Gol D. Roger|Roger", "Rayleigh|Silvers Rayleigh", "Koby|Coby", "Monkey D. Dragon|Dragon", "Kuma|Bartholomew Kuma", "Ivankov|Iva", "Oden|Kozuki Oden", "Vegapunk"],
      5: ["Wapol", "Bon Clay|Mr. 2", "Hatchan|Hachi", "Kaya", "Tashigi", "Moria|Gecko Moria", "Spandam", "Kaku", "Pudding", "Carrot", "Kin'emon", "Caesar Clown|Caesar", "Ben Beckman", "Shirahoshi"],
      6: ["Gaimon", "Duval", "Foxy", "Pell", "Merry", "Hina", "Absalom", "Kalifa", "Who's-Who", "Morgans", "Lucky Roux", "Yasopp", "Hody Jones|Hody"]
    }
  },
  {
    prompt: "Name a sports anime",
    answers: {
      1: ["Haikyuu", "Kuroko's Basketball|Kuroko no Basket", "Blue Lock"],
      2: ["Slam Dunk", "Yuri on Ice", "Captain Tsubasa", "Hajime no Ippo|Ippo|Fighting Spirit"],
      3: ["Free!|Free", "Prince of Tennis|The Prince of Tennis", "Ace of Diamond|Daiya no Ace", "Eyeshield 21", "Initial D"],
      4: ["Major", "Run with the Wind", "Ping Pong the Animation|Ping Pong", "Chihayafuru", "Megalo Box", "Yowamushi Pedal", "Ashita no Joe|Tomorrow's Joe", "Welcome to the Ballroom", "Sk8 the Infinity|SK8"],
      5: ["Baby Steps", "Days", "Touch", "Cross Game", "Giant Killing", "Ahiru no Sora", "Tsurune", "Ao Ashi", "Big Windup|Oofuri"],
      6: ["Hoshiai no Sora", "Harukana Receive", "Attacker You", "Attack No. 1|Attack No 1"]
    }
  },
  {
    prompt: "Name an anime villain",
    answers: {
      1: ["Frieza", "Aizen|Sosuke Aizen", "Dio|Dio Brando", "Sukuna|Ryomen Sukuna"],
      2: ["Madara|Madara Uchiha", "Muzan|Muzan Kibutsuji", "Light Yagami|Light|Kira", "All For One", "Shigaraki|Tomura Shigaraki", "Griffith", "Orochimaru", "Pain", "Cell", "Majin Buu|Buu", "Makima"],
      3: ["Meruem", "Hisoka", "Kaido", "Doflamingo", "Akainu", "Father", "Mahito", "Kenjaku", "Chrollo|Chrollo Lucilfer"],
      4: ["Johan|Johan Liebert", "Yoshikage Kira", "Envy", "Pride", "Shishio|Makoto Shishio", "Esdeath", "Char Aznable|Char", "Naraku", "Toguro|Younger Toguro", "Zeref", "Bondrewd", "Kars", "Diavolo", "Pucci|Enrico Pucci", "Raoh", "Kaguya|Kaguya Otsutsuki"],
      5: ["Gendo|Gendo Ikari", "Hao|Hao Asakura", "Sensui|Shinobu Sensui", "Acnologia", "Funny Valentine"],
      6: ["Baron Ashura", "Dr. Hell"]
    }
  }
];

// Points per tier and labels (used by game.js)
const TIERS = {
  1: { name: "Common",    points: 10,  emoji: "⚪" },
  2: { name: "Uncommon",  points: 25,  emoji: "🔵" },
  3: { name: "Rare",      points: 40,  emoji: "🟢" },
  4: { name: "Epic",      points: 60,  emoji: "🟣" },
  5: { name: "Legendary", points: 80,  emoji: "🟡" },
  6: { name: "Deep Cut",  points: 100, emoji: "🌈" }
};

if (typeof module !== "undefined") module.exports = { QUESTIONS, TIERS };
