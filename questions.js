// =========================================================
//  QUESTION BANK — 154 prompts, 22 in each of 7 themes:
//    characters · powers · tropes · relationships · objects · settings · shows
//  The Daily uses one prompt from each theme, so a round never has two
//  prompts on the same theme. Keep every theme the same size so the whole
//  pool gets used before anything repeats (tools/check_questions.js checks).
//
//  The test for a prompt: someone who has only watched the big shows can
//  name 3 answers, and a hardcore fan can still find a rare one.
//  No single-show prompts, no one-fact trivia.
//
//  Tiers: 1 Common, 2 Uncommon, 3 Rare, 4 Epic, 5 Legendary, 6 Deep Cut
//  Each answer is a string. Use "|" to list alternate names/spellings:
//    "Zoro|Roronoa Zoro"  -> either one counts.
//  Capitals, spaces and punctuation are ignored when matching.
//  Close typos get a  prompt.
//  To add a question, copy one block and edit it, then run
//    node tools/check_questions.js
// =========================================================

const THEMES = ["characters", "powers", "tropes", "relationships", "objects", "settings", "shows"];

// Hand-written prompts. (Prompts answered with anime titles from the
// catalog — "an anime from the 1990s" — are in CATALOG_PROMPTS below.)
const QUESTIONS = [

  // ---------- CHARACTERS ----------
  {
    id: "name-an-anime-villain",
    theme: "characters",
    prompt: "Name an anime villain you love to hate",
    answers: {
      1: ["Frieza|Freeza","Aizen|Sosuke Aizen","Dio|Dio Brando","Sukuna|Ryomen Sukuna","Muzan|Muzan Kibutsuji"],
      2: ["Madara|Madara Uchiha","Light Yagami|Light|Kira","All For One","Shigaraki|Tomura Shigaraki","Griffith|Femto","Orochimaru","Pain|Nagato","Cell","Majin Buu|Buu|Kid Buu","Makima","Itachi|Itachi Uchiha","Geto|Suguru Geto","Akaza","Team Rocket|Jessie|James","Blackbeard|Marshall D. Teach","Naraku"],
      3: ["Meruem","Hisoka","Chrollo|Chrollo Lucilfer","Kaido","Doflamingo|Donquixote Doflamingo","Akainu|Sakazuki","Crocodile","Enel|Eneru","Rob Lucci|Lucci","Arlong","Buggy","Big Mom|Charlotte Linlin","Father","Envy","King Bradley|Wrath","Mahito","Kenjaku","Toji|Toji Fushiguro","Douma|Doma","Kokushibo","Yhwach","Ulquiorra|Ulquiorra Cifer","Grimmjow","Gin Ichimaru","Yoshikage Kira","Diavolo","Pucci|Enrico Pucci","Boros|Lord Boros","Garou","Zeke|Zeke Yeager","Giovanni","Overhaul|Kai Chisaki","Stain|Hero Killer Stain","Dabi","Toga|Himiko Toga","Broly","Goku Black","Zamasu","Raditz","Aura|Aura the Guillotine","Isabella|Mama Isabella","Obito|Obito Uchiha|Tobi"],
      4: ["Johan|Johan Liebert","Pride","Lust","Greed","Kimblee|Solf J. Kimblee","Shou Tucker|Tucker","Shishio|Makoto Shishio","Esdeath","Char Aznable|Char","Toguro|Younger Toguro","Zeref","Bondrewd","Kars","Wamuu","Funny Valentine","Raoh","Kaguya|Kaguya Otsutsuki","Kabuto|Kabuto Yakushi","Gendo|Gendo Ikari","Vicious","Knives|Millions Knives","Marik|Yami Marik","Yami Bakura|Bakura","Pegasus|Maximillion Pegasus","Petelgeuse|Betelgeuse","Ragyo|Ragyo Kiryuin","Reze","Jogo","Rui","Gyutaro","Daki","Enmu","Kenny|Kenny Ackerman","Illumi|Illumi Zoldyck","Neferpitou|Pitou","Uvogin","Feitan","Twice","Janemba","Cooler","Baby","Dr. Gero|Gero","Babidi","Dabura","King Piccolo","Nappa","Imu","Moria|Gecko Moria","Queen Beryl","Captain Kuro|Kuro"],
      5: ["Hao|Hao Asakura","Sensui|Shinobu Sensui","Acnologia","Enishi|Yukishiro Enishi","Muska","Gotou|Goto","Zodd|Nosferatu Zodd","The Major|Major","Sailor Galaxia|Galaxia","Myotismon|Vamdemon","Devimon","Lordgenome","Nui Harime|Nui","Esidisi","Vanilla Ice","Peter Ratri","Honest|Prime Minister Honest","Rod Reiss","Willy Tybur","Satan","Hanami","Uraume","Dagon","Hantengu","Gyokko","Nakime","Kaigaku","Gigantomachia","Re-Destro","Muscular","Barragan|Baraggan","Szayelaporro","Starrk|Coyote Starrk","Ginjo|Kugo Ginjo","Momoshiki|Momoshiki Otsutsuki","Hody Jones|Hody","Caesar Clown","Don Krieg|Krieg","Moro","Omega Shenron","Orochi","Toichiro Suzuki","Charles zi Britannia|Charles","Macht","Qual","Lugner","Linie","Kaiju No. 9","Santa Claus","Katana Man","Gun Devil","Acrobatic Silky|Acro Silky","Hikaru Kamiki","Antares","Nobunaga","Yamori|Jason"],
      6: ["Baron Ashura","Dr. Hell","Souther","Gasu|Gas","Bojack","Garlic Jr","Turles","Lord Slug","Hirudegarn","Legato|Legato Bluesummers","Anti-Spiral","Cioccolata","Tooru|Toru","Draht","Solitar","Gihren Zabi|Gihren","Paptimus Scirocco|Scirocco","Full Frontal","Askin Nakk Le Vaar|Askin","Nine","Kaname Tosen|Tosen","Shin","Wonderweiss"]
    }
  },
  {
    id: "name-an-anime-character-who-fights-with-a-sword",
    theme: "characters",
    prompt: "Name a character whose main weapon is a sword",
    answers: {
      1: ["Zoro|Roronoa Zoro","Ichigo|Ichigo Kurosaki","Tanjiro|Tanjiro Kamado"],
      2: ["Kirito","Inuyasha","Kenshin|Himura Kenshin|Kenshin Himura","Mikasa|Mikasa Ackerman","Levi|Levi Ackerman","Trunks|Future Trunks","Rengoku|Kyojuro Rengoku","Zenitsu|Zenitsu Agatsuma","Asta","Sasuke|Sasuke Uchiha","Giyu|Giyu Tomioka","Shinobu|Shinobu Kocho","Meliodas","Toshiro|Hitsugaya|Toshiro Hitsugaya","Rukia|Rukia Kuchiki","Asuna","Shanks"],
      3: ["Erza|Erza Scarlet","Kenpachi|Kenpachi Zaraki|Zaraki Kenpachi","Guts","Byakuya|Byakuya Kuchiki","Mihawk|Dracule Mihawk","Gintoki|Gintoki Sakata","Zabuza|Zabuza Momochi","Sesshomaru","Inosuke|Inosuke Hashibira","Kisame|Kisame Hoshigaki","Brook","Law|Trafalgar Law","Renji|Renji Abarai","Gin Ichimaru","Akame","Saber","Ryuko|Ryuko Matoi","Yuta|Yuta Okkotsu","Maki|Maki Zenin","Aki|Aki Hayakawa","Himmel","Yami|Yami Sukehiro","Kazuma|Kazuma Sato","Rimuru|Rimuru Tempest","Mitsuri|Mitsuri Kanroji","Tengen|Tengen Uzui","Sanemi|Sanemi Shinazugawa","Griffith"],
      4: ["Makoto Shishio|Shishio","Hajime Saito|Saito","Muichiro|Muichiro Tokito","Yoriichi|Yoriichi Tsugikuni","Obanai|Obanai Iguro","Kanao|Kanao Tsuyuri","Shunsui|Shunsui Kyoraku","Ukitake|Jushiro Ukitake","Hijikata|Toshiro Hijikata","Okita|Sogo Okita","Goemon|Goemon Ishikawa","Oden|Kozuki Oden","Tashigi","Suigetsu|Suigetsu Hozuki","Jean|Jean Kirstein","Reinhard|Reinhard van Astrea","Eris|Eris Greyrat","Sagiri|Yamada Asaemon Sagiri","Aoshi|Aoshi Shinomori","Katana Man"],
      5: ["Mugen","Jin","Hyakkimaru","Afro|Afro Samurai","Kin'emon|Kinemon","Killer B|Killer Bee","Clare","Casca","Wilhelm|Wilhelm van Astrea","Katsura|Kotaro Katsura"],
      6: ["Jubei|Jubei Kibagami","Nanashi","Ryuma","Koshiro","Vista","Tapion"]
    }
  },
  {
    id: "name-an-anime-character-with-white-or-silver-hair",
    theme: "characters",
    prompt: "Name an anime character with white or silver hair",
    answers: {
      1: ["Gojo|Satoru Gojo|Gojo Satoru","Killua|Killua Zoldyck","Kakashi|Kakashi Hatake"],
      2: ["Toshiro|Hitsugaya|Toshiro Hitsugaya","Kaneki|Ken Kaneki","Gintoki|Gintoki Sakata","Sesshomaru","Inuyasha","Frieren","Jiraiya","Emilia","Todoroki|Shoto Todoroki"],
      3: ["Gin Ichimaru|Ichimaru Gin","Tengen|Tengen Uzui","Ukitake|Jushiro Ukitake","Smoker","Nagi|Seishiro Nagi","Bokuto|Koutarou Bokuto","Polnareff|Jean Pierre Polnareff","Archer|Emiya","Kaworu|Kaworu Nagisa","Whis","Toge Inumaki|Inumaki|Toge"],
      4: ["Allen Walker","Accelerator","Nagito Komaeda|Komaeda","Sanemi|Sanemi Shinazugawa","Rui","Netero|Isaac Netero","Kimimaro","Tobirama|Tobirama Senju","Suigetsu|Suigetsu Hozuki","Rayleigh|Silvers Rayleigh","Yamato","Mirajane|Mirajane Strauss","Noelle|Noelle Silva","Bakura|Ryou Bakura","Illya|Illyasviel","Lev Haiba|Lev"],
      5: ["Shiro","Kaguya|Kaguya Otsutsuki","Silva|Silva Zoldyck","Zeno|Zeno Zoldyck","Yuki Sohma","Lisanna","Supreme Kai","Uraume","Izana|Izana Kurokawa","Mitsuya|Takashi Mitsuya"],
      6: ["Sakumo|Sakumo Hatake","Toneri|Toneri Otsutsuki","Nico Olvia|Olvia","Gowasu","Fuyumi|Fuyumi Todoroki"]
    }
  },
  {
    id: "name-an-anime-character-who-wears-glasses-or-shades",
    theme: "characters",
    prompt: "Name a character who wears glasses",
    answers: {
      1: ["Conan|Conan Edogawa|Detective Conan","Master Roshi|Roshi"],
      2: ["Hange|Hange Zoe|Hanji","Aizen|Sosuke Aizen","Iida|Tenya Iida","Nanami|Kento Nanami","Gojo|Satoru Gojo","Kamina","Leorio"],
      3: ["Uryu Ishida|Ishida|Uryu","Kabuto|Kabuto Yakushi","Shino|Shino Aburame","Tsukishima|Kei Tsukishima","Gendo|Gendo Ikari","Karin","Sarada|Sarada Uchiha","Coby|Koby","Franky","Okarun|Ken Takakura","Maki|Maki Zenin","Zeke|Zeke Yeager","Midorima|Shintaro Midorima","Hughes|Maes Hughes","Gohan"],
      4: ["Shinpachi|Shinpachi Shimura","Arale|Arale Norimaki","Yuki Nagato|Nagato","Kyoya|Kyoya Ootori","Mari|Mari Makinami","Nanao|Nanao Ise","Kisaki|Tetta Kisaki","Captain Kuro|Kuro","Ebisu","Grisha|Grisha Yeager","Clemont","Joe Kido|Joe","Shizuku","Kunikida|Doppo Kunikida"],
      5: ["Kensuke Aida|Kensuke","Ritsuko Akagi|Ritsuko","Takeda|Ittetsu Takeda","Ijichi|Kiyotaka Ijichi","Ryuken Ishida|Ryuken","Szayelaporro","Lloyd|Lloyd Asplund","Nina Einstein","Sheska","Senbei Norimaki|Senbei","Umino|Gurio Umino|Melvin","Nodoka|Nodoka Manabe","Miyuki Takara","Sarutobi Ayame|Sa-chan"],
      6: ["Lisa Yadomaru|Lisa"]
    }
  },
  {
    id: "name-an-anime-character-who-wears-a-mask",
    theme: "characters",
    prompt: "Name a character who wears a mask or helmet",
    answers: {
      1: ["Kakashi|Kakashi Hatake","Tobi|Obito","Inosuke|Inosuke Hashibira","Zero|Lelouch"],
      2: ["Tuxedo Mask|Mamoru","Char Aznable|Char","No-Face|Kaonashi","Overhaul|Kai Chisaki","Twice","Gojo|Satoru Gojo","Kaneki|Ken Kaneki","Sogeking","Alphonse Elric|Alphonse|Al","Mumen Rider"],
      3: ["Sabito","Makomo","Haganezuka|Hotaru Haganezuka","Urokodaki|Sakonji Urokodaki","Haku","Mr. Compress","All For One","Dio|Dio Brando","Killer","Kakuzu","Zabuza","Toge Inumaki|Inumaki","Great Saiyaman","Guts"],
      4: ["Yamato","Full Frontal","Rau Le Creuset","Kotetsu","Tiger Mask","Racer X","Griffith|Femto","Pegasus Seiya|Seiya"],
      5: ["Mr. Bushido","Captain Falcon"],
      6: []
    }
  },
  {
    id: "name-an-anime-ninja",
    theme: "characters",
    prompt: "Name a ninja",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Sasuke|Sasuke Uchiha","Kakashi|Kakashi Hatake","Itachi|Itachi Uchiha"],
      2: ["Jiraiya","Sakura|Sakura Haruno","Hinata|Hinata Hyuga","Gaara","Rock Lee","Might Guy","Minato|Minato Namikaze","Madara|Madara Uchiha","Gabimaru","Speed-o'-Sound Sonic|Sonic","Shikamaru|Shikamaru Nara","Orochimaru","Tsunade"],
      3: ["Hanzo","Obito","Pain","Hashirama","Tobirama","Neji","Kiba","Shino","Kabuto","Konan","Boruto","Asuma","Raizo","Yuzuriha"],
      4: ["Jubei|Jubei Kibagami","Yamato","Sai","Tenten","Shisui","Danzo","Flashy Flash","Soi Fon","Sarada","Kurenai","Yoruichi"],
      5: ["Kagero","Gennosuke","Oboro","Hattori Kanzo|Hattori","Rantaro","Sasuke Sarutobi","Zenzo Hattori|Zenzo","Anko","Joe Higan","Ninja Slayer"],
      6: ["Kunoichi Tsubaki|Tsubaki"]
    }
  },
  {
    id: "name-an-anime-robot-android-or-cyborg",
    theme: "characters",
    prompt: "Name a character who's more machine than human",
    answers: {
      1: ["Android 18","Genos","Doraemon","Astro Boy|Atom","Android 17"],
      2: ["Franky","Motoko Kusanagi|Motoko|Major","Android 16","Arale|Arale Norimaki","Cell","Mechamaru","David Martinez|David","2B"],
      3: ["Chi","Tachikoma","Haro","Laputa Robot|Robot Soldier","Vivy","Cyborg 009|Joe Shimamura","Dr. Gero|Android 20","Mecha Frieza","Kuma|Bartholomew Kuma","Adam Smasher","Rebecca","Mazinger Z","Alita|Gally"],
      4: ["Isla","Metabee","Aigis","Mega Man|Rockman","Casshern","Pacifista","Big O","Maine","Batou"],
      5: ["Kikaider","Giant Robo","Cyborg Kuro-chan|Kuro-chan","Seraphim"],
      6: ["Android 19"]
    }
  },
  {
    id: "name-an-anime-pirate",
    theme: "characters",
    prompt: "Name an anime pirate",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Zoro|Roronoa Zoro","Nami","Sanji","Shanks"],
      2: ["Ace","Whitebeard","Blackbeard","Buggy","Usopp","Chopper","Robin","Franky","Brook","Jinbe","Captain Harlock|Harlock","Law|Trafalgar Law"],
      3: ["Kid|Eustass Kid","Big Mom","Kaido","Boa Hancock|Hancock","Gol D. Roger|Roger","Rayleigh","Marco","Arlong","Crocodile","Doflamingo","Revy"],
      4: ["Bonney|Jewelry Bonney","Killer","Bartolomeo","Cavendish","Captain Kuro|Kuro","Don Krieg|Krieg","Alvida","Moria|Gecko Moria","Dutch","Marika Kato|Marika","Cobra"],
      5: ["Scratchmen Apoo|Apoo","Basil Hawkins|Hawkins","X Drake|Drake","Urouge","Capone Bege|Bege","Foxy","Queen Emeraldas|Emeraldas"],
      6: ["Gin (One Piece)|Gin"]
    }
  },
  {
    id: "name-an-anime-character-with-a-famous-scar",
    theme: "characters",
    prompt: "Name a character with a scar that tells a story",
    answers: {
      1: ["Zoro|Roronoa Zoro","Kenshin|Himura Kenshin","Scar","Tanjiro|Tanjiro Kamado","Luffy"],
      2: ["Shanks","Kenpachi|Kenpachi Zaraki","Iruka","Kakashi","Sanemi|Sanemi Shinazugawa","Toji|Toji Fushiguro","Guts","Dabi","Todoroki|Shoto Todoroki","Kenshiro","Crocodile","Yamcha","Kenjaku"],
      3: ["Hisagi|Shuhei Hisagi","Mikasa|Mikasa Ackerman","Yuji Itadori|Yuji","Endeavor","Whitebeard","Smoker","Bardock","Thorfinn","Genya|Genya Shinazugawa","Aizawa|Shota Aizawa"],
      4: ["Garp","Kaido","Ibiki","Danzo","Stain"],
      5: ["Sabo"],
      6: ["Fujitora|Issho"]
    }
  },
  {
    id: "name-an-anime-character-who-is-royalty",
    theme: "characters",
    prompt: "Name a prince, princess or royal",
    answers: {
      1: ["Vegeta|Prince Vegeta","Lelouch|Lelouch vi Britannia"],
      2: ["Vivi|Nefertari Vivi","Bojji","Yona","Historia|Historia Reiss","Saber|Artoria","Gilgamesh","Meruem","Nausicaa","Princess Serenity|Serenity","San|Princess Mononoke"],
      3: ["Shirahoshi","Ling|Ling Yao","Euphemia|Euphemia li Britannia","Nunnally","Elizabeth Liones|Elizabeth","Meliodas","King|Harlequin","Iskandar","Boa Hancock|Hancock","Malty|Malty Melromarc","Momonosuke"],
      4: ["Mei Chang","Cornelia","Schneizel","Rebecca","Cobra|Nefertari Cobra","Neptune|King Neptune","Wapol","Melty|Melty Melromarc","Daida","Soo-won","King Vegeta","Trunks","Ainz|Ainz Ooal Gown","Charles zi Britannia|Charles"],
      5: ["Fukaboshi","Viola","Rod Reiss","Crusch|Crusch Karsten","Priscilla|Priscilla Barielle"],
      6: ["Tarble"]
    }
  },
  {
    id: "name-an-anime-character-with-pink-hair",
    theme: "characters",
    prompt: "Name an anime character with pink hair",
    answers: {
      1: ["Sakura|Sakura Haruno","Natsu|Natsu Dragneel","Zero Two","Anya|Anya Forger","Mitsuri|Mitsuri Kanroji"],
      2: ["Madoka|Madoka Kaname","Yuji Itadori|Yuji","Sukuna","Ram","Bocchi|Hitori Gotoh","Chibiusa","Yuno Gasai|Yuno","Chika Fujiwara|Chika"],
      3: ["Lacus Clyne|Lacus","Euphemia","Mina Ashido|Mina","Ichigo Momomiya","Lucy|Nyu|Kaede (Elfen Lied)","Yachiru|Yachiru Kusajishi","Ichika Nakano|Ichika","Nino Nakano|Nino"],
      4: ["Lala|Lala Satalin Deviluke","Momo Belia Deviluke"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-idol-singer-or-band-member",
    theme: "characters",
    prompt: "Name a character who sings or plays in a band",
    answers: {
      1: ["Ai Hoshino|Ai","Bocchi|Hitori Gotoh","Yui Hirasawa|Yui"],
      2: ["Ruby Hoshino|Ruby","Kana Arima|Kana","Nijika Ijichi|Nijika","Ikuyo Kita|Kita","Ryo Yamada|Ryo","Mio Akiyama|Mio","Ritsu Tainaka|Ritsu","Mugi|Tsumugi Kotobuki","Azusa Nakano|Azusa","Nana Osaki|Nana","Uta","Brook","Kaori Miyazono|Kaori","Kousei Arima|Kousei","Honoka Kosaka|Honoka"],
      3: ["MEM-cho|Memcho","Lacus Clyne|Lacus","Ranka Lee|Ranka","Sheryl Nome|Sheryl","Kumiko Oumae|Kumiko","Reina Kousaka|Reina","Kyoka Jiro|Jiro","Sakura Minamoto","Chika Takami|Chika"],
      4: ["Lynn Minmay|Minmay","Lily Hoshikawa|Lily"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-scientist-or-inventor",
    theme: "characters",
    prompt: "Name a genius scientist or inventor",
    answers: {
      1: ["Senku|Senku Ishigami","Bulma","Okabe|Rintaro Okabe","Kurisu|Kurisu Makise"],
      2: ["Dr. Gero","Vegapunk","Mayuri|Mayuri Kurotsuchi","Professor Oak|Oak","Urahara|Kisuke Urahara","Franky","Mei Hatsume|Hatsume","Orochimaru","Chrome","Hange|Hange Zoe","Edward Elric|Edward"],
      3: ["Senbei Norimaki|Senbei","Usopp","Caesar Clown|Caesar","Kabuto","Shou Tucker","Ritsuko Akagi|Ritsuko","Xeno","Byakuya Ishigami","Kaseki","Daru|Itaru Hashida","Stein|Franken Stein","Lloyd Asplund|Lloyd","Marcoh|Tim Marcoh"],
      4: ["Power Loader","Naoko Akagi","Nina Einstein","Rakshata"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-delinquent-or-gang-member",
    theme: "characters",
    prompt: "Name a delinquent or gang member",
    answers: {
      1: ["Mikey|Manjiro Sano","Yusuke|Yusuke Urameshi","Jotaro|Jotaro Kujo"],
      2: ["Draken|Ken Ryuguji","Takemichi|Takemichi Hanagaki","Baji|Keisuke Baji","Onizuka|Eikichi Onizuka","Kuwabara|Kazuma Kuwabara","Josuke|Josuke Higashikata","Hanamichi Sakuragi|Sakuragi","Kaneda|Shotaro Kaneda","Tatsu|Immortal Dragon","Haruka Sakura|Sakura"],
      3: ["Chifuyu|Chifuyu Matsuno","Kazutora|Kazutora Hanemiya","Mitsuya|Takashi Mitsuya","Izana|Izana Kurokawa","Kakucho","Hanma|Shuji Hanma","Kisaki|Tetta Kisaki","Okuyasu|Okuyasu Nijimura","Mitsui|Hisashi Mitsui","Tetsuo|Tetsuo Shima","Gokudera|Hayato Gokudera","Umemiya|Hajime Umemiya","Suo|Hayato Suo"],
      4: ["Hakkai|Hakkai Shiba","Smiley|Nahoya Kawata","Angry|Souya Kawata","Ryota Miyagi|Miyagi","Kenji Harima|Harima"],
      5: ["Taison Maeda|Maeda"],
      6: []
    }
  },
  {
    id: "name-an-anime-ghost-spirit-or-god",
    theme: "characters",
    prompt: "Name an anime ghost, spirit, or god",
    answers: {
      1: ["Menma|Meiko Honma","Hanako-kun|Hanako","Dimple|Ekubo","Yato","Ryuk"],
      2: ["Yusuke|Yusuke Urameshi","Rem (Death Note)|Rem","Ichigo|Ichigo Kurosaki","Rukia|Rukia Kuchiki","Sai|Fujiwara no Sai","Brook","No-Face|Kaonashi","Haku","Totoro","Nyanko-sensei|Madara","Tomoe","Yukine","Hestia","Aqua"],
      3: ["Botan","Koenma","Mayoi Hachikuji|Hachikuji","Sidoh","Yuko Kanoe|Yuko","Perona","Tsukasa (Hanako)|Tsukasa","Calcifer","Kodama","Forest Spirit|Deer God","Kikyo","Hiyori Iki|Hiyori","Bishamon","Beerus","Whis"],
      4: ["Sayo Aisaka|Sayo","Nora","Ebisu","Kazuma (Noragami)|Kazuma"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-wears-an-iconic-hat",
    theme: "characters",
    prompt: "Name a character who wears an iconic hat",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Ash|Ash Ketchum","Jotaro|Jotaro Kujo"],
      2: ["Law|Trafalgar Law","Ace|Portgas D. Ace","Chopper|Tony Tony Chopper","Urahara|Kisuke Urahara","Shunsui|Shunsui Kyoraku|Kyoraku","Brook","Sabo","Mihawk|Dracule Mihawk","Megumin","Kaito Kid|Kid","Gol D. Roger|Roger","Hiruzen|Third Hokage","Jigen|Daisuke Jigen"],
      3: ["Lucci|Rob Lucci","Chuuya|Chuuya Nakahara","Gyro|Gyro Zeppeli","Speedwagon","Hol Horse","Atsuko Kagari|Akko","Zenigata"],
      4: ["Bartholomew Kuma|Kuma"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-character-with-red-or-orange-hair",
    theme: "characters",
    prompt: "Name an anime character with red or orange hair",
    answers: {
      1: ["Shanks","Erza|Erza Scarlet","Gaara","Ichigo|Ichigo Kurosaki","Hinata Shoyo|Shoyo Hinata"],
      2: ["Kenshin|Himura Kenshin","Kushina|Kushina Uzumaki","Asuka|Asuka Langley","Kirishima|Eijiro Kirishima","Renji|Renji Abarai","Nami","Todoroki|Shoto Todoroki","Rengoku|Kyojuro Rengoku","Makima","Orihime|Orihime Inoue","Hisoka","Nagato","Karin","Kyo Sohma|Kyo","Eustass Kid|Kid","Kagami|Taiga Kagami","Akashi|Seijuro Akashi","Ranma|Ranma Saotome","Lina Inverse|Lina","Eris|Eris Greyrat","Rias Gremory|Rias","Kallen|Kallen Stadtfeld","Kurama (Yu Yu Hakusho)|Kurama","Kita|Ikuyo Kita","Itsuki Nakano|Itsuki","Yotsuba Nakano|Yotsuba","Chigiri|Hyoma Chigiri"],
      3: ["Reinhard|Reinhard van Astrea","Yoko|Yoko Littner","Haruhi Suzumiya|Haruhi","Sakura Kyoko|Kyoko Sakura","Momo Ayase|Momo","Arima Kana|Kana Arima","Shirou Emiya|Shirou"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-female-character-who-can-really-fight",
    theme: "characters",
    prompt: "Name a female character who can really fight",
    answers: {
      1: ["Mikasa|Mikasa Ackerman","Erza|Erza Scarlet","Sakura Haruno|Sakura","Yoruichi","Android 18","Nobara|Nobara Kugisaki","Maki Zenin|Maki"],
      2: ["Tsunade","Rukia|Rukia Kuchiki","Robin|Nico Robin","Boa Hancock|Hancock","Annie|Annie Leonhart","Shinobu|Shinobu Kocho","Mitsuri|Mitsuri Kanroji","Kanao|Kanao Tsuyuri","Nezuko|Nezuko Kamado","Power","Yor|Yor Forger","Revy","Motoko Kusanagi|Motoko","Ryuko|Ryuko Matoi","Satsuki|Satsuki Kiryuin","Asuna","Hinata Hyuga|Hinata","Temari","Tatsumaki","Ochaco|Ochaco Uraraka","Mirko","Esdeath","Akame","Saber","Kagura","Videl","Chi-Chi","Yamato","Riza Hawkeye|Riza","Olivier Armstrong|Olivier","Izumi Curtis|Izumi","Rem","Fern","Noelle|Noelle Silva","Mirajane","Sango","Makima","Toga|Himiko Toga"],
      3: ["Biscuit|Bisky","Kurenai","Tenten","Konan","Hange|Hange Zoe","Sasha|Sasha Blouse","Pieck","Unohana|Retsu Unohana","Soi Fon|Suifeng","Rangiku|Rangiku Matsumoto","Nelliel","Harribel|Tier Harribel","Zero Two","Casca","Kaoru Kamiya|Kaoru","Shampoo","Akane Tendo|Akane","Kallen|Kallen Stadtfeld","Milim|Milim Nava","Shion","Albedo","Mai Zenin|Mai","Fubuki","Momo Yaoyorozu|Momo","Lady Nagant","Balalaika","Juvia|Juvia Lockser","Sailor Jupiter|Makoto Kino","Sailor Mars|Rei Hino","Kagome|Kagome Higurashi"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-spiky-hair",
    theme: "characters",
    prompt: "Name a character with spiky hair",
    answers: {
      1: ["Goku|Son Goku","Naruto|Naruto Uzumaki","Vegeta","Ichigo|Ichigo Kurosaki","Bakugo|Katsuki Bakugo"],
      2: ["Gohan|Son Gohan","Trunks","Kakashi|Kakashi Hatake","Natsu|Natsu Dragneel","Gon|Gon Freecss","Killua|Killua Zoldyck","Yugi|Yugi Muto","Bardock","Broly","Kirishima|Eijiro Kirishima","Sasuke|Sasuke Uchiha","Kamina","Deku|Izuku Midoriya","Kenpachi|Kenpachi Zaraki","Grimmjow","Gray|Gray Fullbuster","Hiei","Asta","Minato|Minato Namikaze","Jiraiya","Raditz","Hinata Shoyo|Shoyo Hinata","Bokuto|Kotaro Bokuto","Kuroo|Tetsuro Kuroo","Boruto|Boruto Uzumaki","Tsuna|Tsunayoshi Sawada","Jaden Yuki|Jaden","Yusei|Yusei Fudo"],
      3: ["Goten|Son Goten","Turles","Dabi","Endeavor","Hisoka","Renji|Renji Abarai","Toshiro|Hitsugaya","Shinra|Shinra Kusakabe","Sanemi|Sanemi Shinazugawa","Rengoku|Kyojuro Rengoku","Kaminari|Denki Kaminari","Gaara","Simon","Inosuke|Inosuke Hashibira","Gotenks","Vegito","Gogeta"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-blonde-hair",
    theme: "characters",
    prompt: "Name a character with blonde hair",
    answers: {
      1: ["Naruto|Naruto Uzumaki","All Might","Edward Elric|Edward|Ed","Sanji","Zenitsu|Zenitsu Agatsuma","Armin|Armin Arlert"],
      2: ["Minato|Minato Namikaze","Ino|Ino Yamanaka","Tsunade","Temari","Deidara","Rengoku|Kyojuro Rengoku","Bakugo|Katsuki Bakugo","Toga|Himiko Toga","Hawks","Erwin|Erwin Smith","Historia|Historia Reiss","Annie|Annie Leonhart","Reiner|Reiner Braun","Zeke|Zeke Yeager","Giorno|Giorno Giovanna","Dio|Dio Brando","Winry|Winry Rockbell","Lucy|Lucy Heartfilia","Laxus|Laxus Dreyar","Saber","Vash|Vash the Stampede","Aqua Hoshino|Aqua","Ruby Hoshino|Ruby","Loid|Loid Forger","Nanami|Kento Nanami","Kaminari|Denki Kaminari","Mirio|Mirio Togata","Usagi|Sailor Moon|Usagi Tsukino","Sailor Venus|Minako","Android 18","Meliodas","Genos","Takemichi|Takemichi Hanagaki","Mikey|Manjiro Sano","Kise|Ryota Kise","Kenma|Kenma Kozume","Tsukishima|Kei Tsukishima","Nijika|Nijika Ijichi","Marco|Marco the Phoenix","Sabo"],
      3: ["Kurapika","Felt","Darkness|Lalatina","Violet Evergarden|Violet","Gilgamesh","Shinobu Oshino|Shinobu","Naoya|Naoya Zenin","Yuki Tsukumo|Yuki","Tamaki Suoh|Tamaki","Urahara|Kisuke Urahara","Shinji Hirako|Hirako","Hiyori|Hiyori Sarugaki","Nui Harime|Nui","Escanor","Gilthunder","Yami Bakura"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-s-famously-short",
    theme: "characters",
    prompt: "Name a character who's famously short",
    answers: {
      1: ["Levi|Levi Ackerman","Edward Elric|Edward|Ed","Krillin","Hinata Shoyo|Shoyo Hinata"],
      2: ["Mineta|Minoru Mineta","Toshiro|Hitsugaya|Toshiro Hitsugaya","Nishinoya|Yu Nishinoya","Yugi|Yugi Muto","Hiei","Biscuit|Bisky","Taiga|Taiga Aisaka","Soi Fon|Suifeng","Tatsumaki","Shinobu|Shinobu Kocho","Asta","Wendy|Wendy Marvell","Chopper|Tony Tony Chopper","Yachiru|Yachiru Kusajishi","Hunny|Honey|Mitsukuni Haninozuka","Master Roshi|Roshi","Netero|Isaac Netero"],
      3: ["Yaku|Morisuke Yaku","Konata|Konata Izumi","Nagisa|Nagisa Shiota","Megumin","Frieren","Kenma|Kenma Kozume","Mob|Shigeo Kageyama","Nezuko|Nezuko Kamado","Ritsu Tainaka|Ritsu","Chiyo|Chiyo Mihama","Hachikuji|Mayoi Hachikuji"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-kid-a-character-under-13",
    theme: "characters",
    prompt: "Name an anime kid (a character under 13)",
    answers: {
      1: ["Anya|Anya Forger","Gon|Gon Freecss","Killua|Killua Zoldyck","Conan|Conan Edogawa","Goten|Son Goten","Gohan|Kid Gohan"],
      2: ["Ash Ketchum|Ash","Chibiusa","Shin-chan|Shinnosuke Nohara","Nobita|Nobita Nobi","Pan","Trunks","Konohamaru","Boruto|Boruto Uzumaki","Himawari|Himawari Uzumaki","Sarada|Sarada Uchiha","Emma","Norman","Ray","Eri","Kota|Kota Izumi","Mei (Totoro)|Mei","Satsuki (Totoro)|Satsuki","Chihiro","Ponyo","Sosuke","Kanna|Kanna Kamui","Hina (Hinamatsuri)|Hina","Yotsuba|Yotsuba Koiwai","Maruko|Chibi Maruko","Sakura Kinomoto","Momonosuke","Nina Tucker|Nina","Selim Bradley|Selim","Shippo","Rin (Inuyasha)"],
      3: ["Tsumugi|Tsumugi Inuzuka","Rin Kaga|Rin (Bunny Drop)","Naru (Barakamon)|Naru","Pinoko","Inari","Kohaku (Inuyasha)","Hachikuji|Mayoi Hachikuji","Kotaro","Gaara"],
      4: [],
      5: [],
      6: []
    }
  },

  // ---------- POWERS ----------
  {
    id: "name-a-character-fast-enough-to-race-the-flash",
    theme: "powers",
    prompt: "Name a character with super speed",
    answers: {
      1: ["Goku|Son Goku","Minato|Minato Namikaze|Yellow Flash","Killua|Killua Zoldyck","Zenitsu|Zenitsu Agatsuma","Saitama","Koro-sensei|Korosensei"],
      2: ["Speed-o'-Sound Sonic|Sonic","Yoruichi|Yoruichi Shihoin","Tenya Iida|Iida","Speed Racer|Go Mifune","Takumi Fujiwara|Takumi","Asuna","Vegeta","Levi|Levi Ackerman","Hiei","Whis"],
      3: ["Flashy Flash","Tobirama|Tobirama Senju","Raikage|A","Hawks","Sena Kobayakawa|Eyeshield 21|Sena","Chigiri|Hyoma Chigiri","Naoya Zenin|Naoya","Toji|Toji Fushiguro","Sanji","Saiki|Saiki Kusuo","Gojo|Satoru Gojo","Sung Jinwoo|Jinwoo"],
      4: ["Byakuya|Byakuya Kuchiki","Rob Lucci|Lucci","Gran Torino","Accelerator","Jellal|Jellal Fernandes","Laxus|Laxus Dreyar","Hit","Might Guy|Guy"],
      5: ["Kaigaku","Kuroko Shirai|Shirai","Aiolia|Leo Aiolia"],
      6: ["Ryosuke Takahashi"]
    }
  },
  {
    id: "name-an-anime-character-who-can-fly",
    theme: "powers",
    prompt: "Name a character who can fly or teleport",
    answers: {
      1: ["Goku|Son Goku","Vegeta","Kiki","Frieza","Minato|Minato Namikaze"],
      2: ["Gohan","Piccolo","Tatsumaki","Hawks","Sailor Moon","Tobirama|Tobirama Senju","Obito|Obito Uchiha","Kurogiri","Madara|Madara Uchiha","Howl"],
      3: ["Krillin","Trunks","Android 18","Marco|Marco the Phoenix","Enel","Mob|Shigeo Kageyama","Kirito","Natsu|Natsu Dragneel","Happy","Gojo|Satoru Gojo","Nausicaa","Laputa Robot","Kuroko Shirai|Kuroko","Ochaco|Ochaco Uraraka|Uraraka","Frieren","Tohru (Dragon Maid)|Tohru"],
      4: ["Yoruichi","Kaido","King|Alber","Sanji"],
      5: ["Calcifer","Haku","Ponyo"],
      6: ["Boota"]
    }
  },
  {
    id: "name-a-character-who-can-stop-rewind-or-travel-through-time",
    theme: "powers",
    prompt: "Name a character who messes with time",
    answers: {
      1: ["Dio|Dio Brando","Jotaro|Jotaro Kujo","Okabe|Rintaro Okabe|Okarin","Subaru|Natsuki Subaru"],
      2: ["Homura|Homura Akemi","Hit","Takemichi|Takemichi Hanagaki","Satoru Fujinuma","Makoto Konno","Kurumi|Kurumi Tokisaki","Trunks|Future Trunks","Whis","Doraemon"],
      3: ["Pucci|Enrico Pucci","Diavolo","Kira|Yoshikage Kira","Guldo","Kurisu|Kurisu Makise","Eri","Kiritsugu|Kiritsugu Emiya","Nobita|Nobita Nobi","Mikuru Asahina|Mikuru"],
      4: ["Mayuri Shiina|Mayuri","Suzuha|Suzuha Amane","Cell","Bulma"],
      5: ["Ringo Roadagain|Ringo"],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-fights-with-fire",
    theme: "powers",
    prompt: "Name a character with fire powers",
    answers: {
      1: ["Ace|Portgas D. Ace","Natsu|Natsu Dragneel","Roy Mustang|Mustang","Todoroki|Shoto Todoroki","Rengoku|Kyojuro Rengoku"],
      2: ["Endeavor","Shinra|Shinra Kusakabe","Benimaru|Benimaru Shinmon","Sabo","Dabi","Jogo","Charizard","Calcifer","Itachi|Amaterasu"],
      3: ["Akainu|Sakazuki","Hiei","Shana","Megumin","Yamamoto|Genryusai Yamamoto","Sukuna","Avdol|Muhammad Avdol","Tanjiro|Hinokami Kagura","Arthur Boyle|Arthur"],
      4: ["Kyo Kusanagi","Joker (Fire Force)|Joker","Kaido","King|Alber","Marco"],
      5: ["Tamaki Kotatsu|Tamaki","Burns|Leonard Burns"],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-uses-ice",
    theme: "powers",
    prompt: "Name a character with ice powers",
    answers: {
      1: ["Todoroki|Shoto Todoroki","Esdeath","Toshiro|Hitsugaya|Toshiro Hitsugaya","Gray|Gray Fullbuster"],
      2: ["Aokiji|Kuzan","Rukia|Rukia Kuchiki","Haku","Douma|Doma","Miyuki Shiba|Miyuki","Emilia"],
      3: ["Lyon|Lyon Vastia","Hyoga|Cygnus Hyoga","Sailor Mercury|Ami Mizuno","Ur","Rem","Puck","Uraume","Articuno"],
      4: ["Camus|Aquarius Camus","Monet","Glaceon"],
      5: ["Tsurara Oikawa"],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-uses-lightning-or-electricity",
    theme: "powers",
    prompt: "Name a character with lightning powers",
    answers: {
      1: ["Killua|Killua Zoldyck","Pikachu","Zenitsu|Zenitsu Agatsuma","Kakashi|Kakashi Hatake","Sasuke|Sasuke Uchiha"],
      2: ["Enel|Eneru","Laxus|Laxus Dreyar","Mikoto Misaka|Misaka|Railgun","Denki Kaminari|Kaminari","Raikage|A","Sailor Jupiter|Makoto Kino","Lum|Lum Invader"],
      3: ["Kashimo|Hajime Kashimo","Gilthunder","Kaigaku","Darui","Jolteon","Zeraora","Zapdos","Raichu"],
      4: ["Natsu|Natsu Dragneel","Jigoro Kuwajima|Jigoro"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-can-heal-others",
    theme: "powers",
    prompt: "Name a character who can heal others",
    answers: {
      1: ["Orihime|Orihime Inoue","Josuke|Josuke Higashikata","Chopper|Tony Tony Chopper","Tsunade","Dende"],
      2: ["Sakura|Sakura Haruno","Recovery Girl","Aqua","Wendy|Wendy Marvell","Law|Trafalgar Law","Black Jack","Giorno|Giorno Giovanna"],
      3: ["Shoko Ieiri|Shoko","Unohana|Retsu Unohana","Karin","Eri","Shizune","Marco","Neferpitou|Pitou","Tonio|Tonio Trussardi","Yuta|Yuta Okkotsu","Dr. Tenma|Kenzo Tenma","Leorio","Sailor Moon"],
      4: ["Hanataro|Hanataro Yamada","Kabuto","Emilia","Felix|Ferris","Heiter","Isane|Isane Kotetsu","Dr. Kureha|Kureha","Hiluluk","Rin Nohara|Rin","Korin","Shiemi"],
      5: ["Megumi Takani|Megumi","Chelia","Porlyusica","Kibito"],
      6: []
    }
  },
  {
    id: "name-an-anime-character-known-for-super-strength",
    theme: "powers",
    prompt: "Name a character with super strength",
    answers: {
      1: ["Saitama","Goku|Son Goku","All Might"],
      2: ["Yujiro Hanma|Yujiro","Baki|Baki Hanma","Escanor","Gyomei|Gyomei Himejima","Tsunade","Whitebeard","Garp","Kenpachi|Kenpachi Zaraki","Broly","Might Guy","Kenshiro","Luffy","Yuji Itadori|Yuji","Mash|Mash Burnedead","Yor|Yor Forger"],
      3: ["Toji|Toji Fushiguro","Todo|Aoi Todo","Maki|Maki Zenin","Sakura|Sakura Haruno","Raoh","Jotaro|Jotaro Kujo","Garou","Kaido","Big Mom","Asta","Meliodas","Power","Bisky|Biscuit Krueger","Netero","Uvogin","Ohma Tokita|Ohma","Ippo|Ippo Makunouchi","Chad|Sado","Raikage","Jiren","Meruem","Vegeta"],
      4: ["Jinbe","Yammy","Komamura","Tengen Uzui|Tengen","Hanma Jack|Jack","Mob|Shigeo Kageyama"],
      5: ["Retsu Kaioh"],
      6: ["Biscuit Oliva|Oliva"]
    }
  },
  {
    id: "name-an-anime-character-who-can-turn-into-an-animal",
    theme: "powers",
    prompt: "Name a character who can turn into an animal",
    answers: {
      1: ["Yoruichi|Yoruichi Shihoin","Chopper|Tony Tony Chopper","Kyo Sohma|Kyo"],
      2: ["Marco|Marco the Phoenix","Kaido","Holo","Shippo","Haku","Rob Lucci|Lucci","Yuki Sohma|Yuki","Shigure Sohma|Shigure","Momiji Sohma|Momiji","Genma Saotome|Genma","Ryoga|Ryoga Hibiki|P-chan"],
      3: ["Kaku","Pell","X Drake|Drake","Yamato","Kurama","Shampoo","Momonosuke"],
      4: ["Elfman|Elfman Strauss","Chaka","King|Alber","Queen","Jabra","Mousse"],
      5: ["Page One","Ulti","Who's-Who"],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-uses-water",
    theme: "powers",
    prompt: "Name a character with water powers",
    answers: {
      1: ["Tanjiro|Tanjiro Kamado","Giyu|Giyu Tomioka","Squirtle"],
      2: ["Juvia|Juvia Lockser","Aqua","Urokodaki|Sakonji Urokodaki","Blastoise","Kisame|Kisame Hoshigaki"],
      3: ["Tobirama|Tobirama Senju","Sabito","Makomo","Sailor Mercury|Ami Mizuno","Dagon","Zabuza","Jinbe","Suigetsu|Suigetsu Hozuki","Harribel|Tier Harribel","Gyarados"],
      4: ["Kaien Shiba|Kaien"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-a-special-eye-power",
    theme: "powers",
    prompt: "Name a character with a special eye power",
    answers: {
      1: ["Sasuke|Sasuke Uchiha","Itachi|Itachi Uchiha","Kakashi|Kakashi Hatake","Gojo|Satoru Gojo"],
      2: ["Madara|Madara Uchiha","Obito|Obito Uchiha","Hinata|Hinata Hyuga","Neji|Neji Hyuga","Pain|Nagato","Lelouch|Lelouch Lamperouge","Kurapika","Shisui|Shisui Uchiha","Boruto"],
      3: ["Hiei","Ciel Phantomhive|Ciel","Sarada|Sarada Uchiha","Kaguya|Kaguya Otsutsuki","Ryuk","Misa|Misa Amane","Mei Misaki|Mei"],
      4: ["Hanabi|Hanabi Hyuga","Hiashi|Hiashi Hyuga","Danzo","Shiki Ryougi|Shiki","Rikka Takanashi|Rikka"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-can-control-minds",
    theme: "powers",
    prompt: "Name a character who can control minds",
    answers: {
      1: ["Lelouch|Lelouch Lamperouge|Zero","Makima","Itachi|Itachi Uchiha"],
      2: ["Shinso|Hitoshi Shinso","Ino|Ino Yamanaka","Toge Inumaki|Inumaki|Toge","Aizen|Sosuke Aizen","Dio|Dio Brando","Muzan|Muzan Kibutsuji"],
      3: ["Shisui|Shisui Uchiha","Shokuhou Misaki|Misaki Shokuhou","Illumi|Illumi Zoldyck","Yami Marik|Marik","Mukuro Rokudo|Mukuro","Danzo","Geto|Suguru Geto"],
      4: ["Enmu","Sugar","Mao (Code Geass)|Mao","Charles zi Britannia|Charles"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-summons-creatures-to-fight",
    theme: "powers",
    prompt: "Name a character who summons creatures to fight",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Jiraiya","Sung Jinwoo|Jinwoo","Megumi|Megumi Fushiguro"],
      2: ["Tsunade","Orochimaru","Kakashi|Kakashi Hatake","Yugi|Yugi Muto","Kaiba|Seto Kaiba","Geto|Suguru Geto","Lucy|Lucy Heartfilia","Ainz|Ainz Ooal Gown|Momonga"],
      3: ["Sasuke|Sasuke Uchiha","Pain|Nagato","Yoh|Yoh Asakura","Ash|Ash Ketchum","Sakura Kinomoto|Sakura (Cardcaptor)"],
      4: ["Shino|Shino Aburame","Sai","Natsume|Takashi Natsume","Kankuro","Chiyo"],
      5: ["Shiroe"],
      6: []
    }
  },
  {
    id: "name-a-character-who-can-heal-from-almost-any-wound",
    theme: "powers",
    prompt: "Name a character who can heal from almost any wound",
    answers: {
      1: ["Piccolo","Cell","Majin Buu|Buu","Naruto|Naruto Uzumaki","Hashirama|Hashirama Senju","Eren|Eren Yeager"],
      2: ["Tsunade","Muzan|Muzan Kibutsuji","Kaneki|Ken Kaneki","Alucard","Denji","Rimuru|Rimuru Tempest","Gojo|Satoru Gojo","Sukuna","Akaza","Douma|Doma"],
      3: ["Kei Nagai|Kei","Seras Victoria|Seras","Ulquiorra","Reiner|Reiner Braun","Annie|Annie Leonhart","Marco|Marco the Phoenix","Shinobu Oshino|Kiss-shot","Greed","Dio|Dio Brando","Kars","Gyutaro","Mahito"],
      4: ["Rin Okumura|Rin","Lust","Kakuzu"],
      5: ["Utsuro","Hyakkimaru"],
      6: []
    }
  },
  {
    id: "name-a-power-system-from-an-anime-like-chakra",
    theme: "powers",
    prompt: "Name a power system from an anime (like chakra)",
    answers: {
      1: ["Nen","Ki","Haki","Cursed Energy|Jujutsu","Quirk|Quirks"],
      2: ["Breathing|Breathing Styles|Total Concentration Breathing","Alchemy","Stand|Stands","Reiatsu|Spiritual Pressure|Reiryoku","Magic","Devil Fruit|Devil Fruits","Hamon|Ripple","Spirit Energy|Reiki","Cosmo"],
      3: ["Kido","Geass","Mana","Spin","Shikigami","Fullbring","Ether","Furyoku","Magoi","Rukh"],
      4: ["Shinsu","Ignition","Psionics"],
      5: ["Ether Gear","Orgone"],
      6: []
    }
  },
  {
    id: "name-a-character-with-wind-powers",
    theme: "powers",
    prompt: "Name a character with wind powers",
    answers: {
      1: ["Temari","Naruto|Naruto Uzumaki","Yuno","Sanemi|Sanemi Shinazugawa"],
      2: ["Asuma|Asuma Sarutobi","Danzo","Wendy|Wendy Marvell","Inuyasha","Kagura (Inuyasha)|Kagura","Inasa|Inasa Yoarashi","Nami","Sailor Uranus|Haruka Tenoh"],
      3: ["Erigor","Jin (Yu Yu Hakusho)|Jin","Fuu (Rayearth)|Fuu Hououji","Kazuma Yagami","Konohamaru"],
      4: ["Shu (Black Clover)","Genya"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-can-grow-giant",
    theme: "powers",
    prompt: "Name a character who can grow giant",
    answers: {
      1: ["Eren|Eren Yeager","Choji|Choji Akimichi","Mt. Lady","Goku|Great Ape|Oozaru"],
      2: ["Reiner|Reiner Braun","Bertholdt","Zeke|Zeke Yeager","Ultraman","Kaido","Luffy|Monkey D. Luffy","Kurama|Nine-Tails","Momonosuke"],
      3: ["Gigantomachia","Kafka Hibino|Kaiju No. 8","Elfman|Elfman Strauss","Ymir","Annie|Annie Leonhart","Pieck","Porco|Porco Galliard"],
      4: ["Choza|Choza Akimichi","Oars","Little Oars Jr."],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-fires-energy-blasts",
    theme: "powers",
    prompt: "Name a character who fires energy blasts",
    answers: {
      1: ["Goku|Son Goku","Vegeta","Gohan|Son Gohan","Frieza","Piccolo","Cell"],
      2: ["Yusuke|Yusuke Urameshi","Krillin","Majin Buu|Buu","Broly","Trunks","Tien|Tenshinhan","Ulquiorra","Grimmjow","Ichigo|Ichigo Kurosaki","Aoyama|Yuga Aoyama","Gojo|Satoru Gojo","Sailor Moon|Usagi","Mewtwo","Pikachu","Boros|Lord Boros","Genos","Naruto|Naruto Uzumaki","Killer B|Killer Bee","Enel|Eneru","Kizaru|Borsalino","Jiren","Beerus","Android 17","Android 18","Nappa","Raditz","Goku Black","Yamcha"],
      3: ["Sensui|Shinobu Sensui","Starrk|Coyote Starrk","Uryu|Uryu Ishida","Sting|Sting Eucliffe","Gajeel|Gajeel Redfox","Garou","Pegasus Seiya|Seiya","Ultraman","Gotenks","Vegito","Gogeta","Bardock","Cooler"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-fights-with-their-fists",
    theme: "powers",
    prompt: "Name a character who fights with their fists",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Saitama","Yuji|Yuji Itadori","Deku|Izuku Midoriya","Rock Lee|Lee","Jotaro|Jotaro Kujo"],
      2: ["Baki|Baki Hanma","Ippo|Ippo Makunouchi","Goku|Son Goku","Might Guy|Guy|Gai","Tsunade","Sakura Haruno|Sakura","All Might","Yusuke|Yusuke Urameshi","Kirishima|Eijiro Kirishima","Garou","Bang|Silver Fang","Mikey|Manjiro Sano","Draken","Akaza","Todo|Aoi Todo","Kenshiro","Raoh","Jinbe|Jinbei","Garp|Monkey D. Garp","Vegeta","Krillin","Gon|Gon Freecss","Uvogin","Netero|Isaac Netero","Biscuit|Bisky","Yamcha","Mirio|Mirio Togata","Fat Gum","Mirko","Takemichi|Takemichi Hanagaki","Baji|Keisuke Baji"],
      3: ["Takamura|Mamoru Takamura","Miyata|Ichiro Miyata","Sendo|Takeshi Sendo","Ohma Tokita|Ohma","Yujiro Hanma|Yujiro","Kenichi|Kenichi Shirahama","Apachai","Ranma|Ranma Saotome","Ryoga|Ryoga Hibiki","Joseph|Joseph Joestar","Jonathan|Jonathan Joestar","Josuke|Josuke Higashikata","Hakari|Kinji Hakari","Kafka Hibino|Kafka","Joe Yabuki|Joe","Rikiishi|Toru Rikiishi"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-uses-magic",
    theme: "powers",
    prompt: "Name a character who uses magic",
    answers: {
      1: ["Frieren","Megumin","Natsu|Natsu Dragneel","Lucy|Lucy Heartfilia","Yuno","Sailor Moon|Usagi"],
      2: ["Fern","Noelle|Noelle Silva","Yami|Yami Sukehiro","Gray|Gray Fullbuster","Erza|Erza Scarlet","Juvia|Juvia Lockser","Wendy|Wendy Marvell","Makarov","Zeref","Rimuru|Rimuru Tempest","Ainz|Ainz Ooal Gown","Emilia","Roxy|Roxy Migurdia","Rudeus|Rudeus Greyrat","Madoka|Madoka Kaname","Homura|Homura Akemi","Sakura Kinomoto|Sakura","Kiki","Howl","Akko|Atsuko Kagari","Chise|Chise Hatori","Elias|Elias Ainsworth","Aqua","Kazuma|Kazuma Sato","Rin Tohsaka|Rin","Index","Coco (Witch Hat Atelier)|Coco","Flamme","Serie","Ubel","Merlin","Marcille","Nanoha|Nanoha Takamachi","Fate Testarossa|Fate","Laxus|Laxus Dreyar","Mirajane","Jellal|Jellal Fernandes","Julius|Julius Novachrono","Mereoleona","Vanessa|Vanessa Enoteca","Finral","Luck|Luck Voltia","Magna|Magna Swing","Mimosa|Mimosa Vermillion"],
      3: ["Wiz","Yunyun","Tanya|Tanya Degurechaff","Tatsuya Shiba|Tatsuya","Miyuki Shiba|Miyuki","Rem","Ram","Beatrice","Roswaal","Echidna","Puck","Sylphy|Sylphiette","Shuna","Yubaba","Zeniba","Sophie","Calcifer","Witch of the Waste","Caster|Medea","Illya|Illyasviel","Mami|Mami Tomoe","Yue","Syaoran|Syaoran Li","Eriol|Eriol Hiiragizawa"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-the-strongest-character-in-their-anime",
    theme: "powers",
    prompt: "Name the strongest character in their anime",
    answers: {
      1: ["Saitama","Goku|Son Goku","Gojo|Satoru Gojo","Sukuna","Whis","Zeno"],
      2: ["Meruem","Yhwach","Aizen|Sosuke Aizen","Kaido","Whitebeard|Edward Newgate","Gol D. Roger|Roger","Kaguya|Kaguya Otsutsuki","Madara|Madara Uchiha","Naruto|Naruto Uzumaki","Muzan|Muzan Kibutsuji","Yoriichi|Yoriichi Tsugikuni","Beerus","Grand Priest","Anos|Anos Voldigoad","Rimuru|Rimuru Tempest","Ainz|Ainz Ooal Gown","Mob|Shigeo Kageyama","Blast","Boros|Lord Boros","Garou","All For One","All Might","Shigaraki|Tomura Shigaraki","Levi|Levi Ackerman","Eren|Eren Yeager","Sung Jinwoo|Jinwoo","Zeref","Acnologia","Meliodas","Escanor","Asta","Pucci|Enrico Pucci","Giorno|Giorno Giovanna","Kars","Father","Van Hohenheim|Hohenheim","Gilgamesh","Alucard","Vash|Vash the Stampede","Knives|Millions Knives","Kenshiro","Raoh","Yujiro Hanma|Yujiro","Netero|Isaac Netero","Ichigo|Ichigo Kurosaki","Yamamoto|Genryusai Yamamoto"],
      3: ["Saiki|Saiki Kusuo","Hashirama|Hashirama Senju","Shanks","Imu","Kirito","Thomas Andre","Reinhard|Reinhard van Astrea","Satella","Milim|Milim Nava","Guy Crimson","Veldora","Frieren","Unohana|Retsu Unohana"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-fights-with-a-gun-or-bow",
    theme: "powers",
    prompt: "Name a character who fights with a gun or bow",
    answers: {
      1: ["Spike|Spike Spiegel","Vash|Vash the Stampede","Revy","Usopp","Uryu|Uryu Ishida"],
      2: ["Jigen|Daisuke Jigen","Lupin|Lupin III","Sasha|Sasha Blouse","Riza Hawkeye|Riza","Akane Tsunemori|Akane","Kogami|Shinya Kogami","Wolfwood|Nicholas D. Wolfwood","Alucard","Seras Victoria|Seras","Kagome|Kagome Higurashi","Kikyo","Archer|Emiya","Sinon","Mikoto Misaka|Misaka","Kurumi|Kurumi Tokisaki","Loid|Loid Forger","Lady Nagant","Snipe","Kino","Hiruma|Yoichi Hiruma","Balalaika","Roberta","Dutch","Golgo 13|Duke Togo","Zenigata","Jet|Jet Black","Faye|Faye Valentine","Genya|Genya Shinazugawa","Kazuma|Kazuma Sato","Ryo Saeba|Ryo"],
      3: ["Rally Vincent|Rally","Rip Van Winkle","Van Augur","Yasopp","Quanxi","Kenny Ackerman|Kenny","Gabi|Gabi Braun","Eda"],
      4: [],
      5: [],
      6: []
    }
  },

  // ---------- TROPES ----------
  {
    id: "name-an-anime-character-who-died-and-came-back",
    theme: "tropes",
    prompt: "Name a character who refused to stay dead",
    answers: {
      1: ["Goku|Son Goku","Krillin","Yusuke|Yusuke Urameshi","Brook","Subaru|Natsuki Subaru"],
      2: ["Vegeta","Piccolo","Kakashi|Kakashi Hatake","Rimuru|Rimuru Tempest","Kazuma|Kazuma Sato","Frieza","Itachi|Itachi Uchiha","Madara|Madara Uchiha","Rudeus|Rudeus Greyrat"],
      3: ["Yamcha","Tien|Tenshinhan","Minato|Minato Namikaze","Hashirama|Hashirama Senju","Jotaro|Jotaro Kujo"],
      4: ["Chiaotzu","Joseph|Joseph Joestar","Sung Jinwoo|Jinwoo","Lelouch|Lelouch Lamperouge","Tobirama|Tobirama Senju"],
      5: ["Nagato|Pain","Asuma"],
      6: ["Zabuza","Haku"]
    }
  },
  {
    id: "name-a-fighter-who-refuses-to-kill",
    theme: "tropes",
    prompt: "Name a fighter who refuses to kill",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Deku|Izuku Midoriya","Kenshin|Himura Kenshin","Vash|Vash the Stampede"],
      2: ["Mob|Shigeo Kageyama","Naruto|Naruto Uzumaki","Sailor Moon|Usagi Tsukino","Asta","Ichigo|Ichigo Kurosaki","Goku|Son Goku"],
      3: ["Natsu|Natsu Dragneel","Yugi|Yugi Muto","Ash Ketchum|Ash","Mumen Rider","Tsuna|Tsunayoshi Sawada","Kenichi|Kenichi Shirahama"],
      4: ["Kaoru Kamiya|Kaoru"],
      5: ["Yahiko|Yahiko Myojin"],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-s-always-hungry",
    theme: "tropes",
    prompt: "Name a character who eats way too much",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Goku|Son Goku","Sasha|Sasha Blouse"],
      2: ["Saber","Choji|Choji Akimichi","Naruto|Naruto Uzumaki","Mitsuri|Mitsuri Kanroji","Rengoku|Kyojuro Rengoku","Majin Buu|Buu","Toriko","L|L Lawliet"],
      3: ["Gluttony","Snorlax","Kagura","Index","Natsu|Natsu Dragneel","Beerus","Anya|Anya Forger","Laios","Gojo|Satoru Gojo","Gohan","Yotsuba Nakano|Yotsuba","Inosuke|Inosuke Hashibira"],
      4: ["Milim|Milim Nava"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-character-with-a-famous-catchphrase",
    theme: "tropes",
    prompt: "Name a character with a catchphrase everyone quotes",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Jotaro|Jotaro Kujo","Dio|Dio Brando","Luffy|Monkey D. Luffy","All Might"],
      2: ["Rengoku|Kyojuro Rengoku","Sailor Moon|Usagi","Okabe|Rintaro Okabe","Kenshin|Himura Kenshin","Shikamaru|Shikamaru Nara","Anya|Anya Forger","Eren|Eren Yeager","Megumin","Joseph|Joseph Joestar","Kamina","Vegeta","Ash Ketchum|Ash","Pikachu","Team Rocket","Yugi|Yugi Muto","Gojo|Satoru Gojo","Aizen|Sosuke Aizen","Natsu|Natsu Dragneel","Happy","Franky"],
      3: ["Rock Lee","Might Guy|Guy","Kakyoin|Noriaki Kakyoin","Giorno|Giorno Giovanna","Saitama","Lelouch","Light Yagami|Light","Kaguya|Kaguya Shinomiya","Bokuto|Kotaro Bokuto","Sukuna","Deku|Izuku Midoriya","Bakugo|Katsuki Bakugo","Asta","Escanor","Kira|Yoshikage Kira","Josuke|Josuke Higashikata","Rohan|Rohan Kishibe","Whitebeard","Kaiba|Seto Kaiba"],
      4: ["Nanami|Kento Nanami","Speedwagon","Polnareff","Usopp","Itachi|Itachi Uchiha","Zoro|Roronoa Zoro","Hinata|Shoyo Hinata"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-character-with-an-alter-ego-or-second-personality",
    theme: "tropes",
    prompt: "Name a character with a secret second identity",
    answers: {
      1: ["Yugi|Yugi Muto|Pharaoh|Yami Yugi","Lelouch|Zero","Loid Forger|Loid|Twilight","Light Yagami|Light|Kira"],
      2: ["Diavolo","Doppio|Vinegar Doppio","Hollow Ichigo|Ichigo","Yami Bakura|Bakura","Marik|Yami Marik","Sailor Moon|Usagi","Conan|Shinichi Kudo","Great Saiyaman|Gohan","Yor Forger|Yor|Thorn Princess","Reiner|Reiner Braun","Annie|Annie Leonhart","Bertholdt","Hawks"],
      3: ["Mob|Shigeo Kageyama","Sogeking|Usopp","Haise Sasaki|Kaneki","Black Hanekawa","Kaito Kid|Kaito Kuroba","Tuxedo Mask|Mamoru","Cid Kagenou|Cid|Shadow","Ainz|Momon","Aoyama|Yuga Aoyama"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-character-who-sacrificed-themselves-for-others",
    theme: "tropes",
    prompt: "Name a character who sacrificed themselves for others",
    answers: {
      1: ["Rengoku|Kyojuro Rengoku","Jiraiya","Ace|Portgas D. Ace","Kamina","Goku|Son Goku","Vegeta"],
      2: ["Itachi|Itachi Uchiha","Maes Hughes|Hughes","Neji|Neji Hyuga","Minato|Minato Namikaze","Kushina","Erwin|Erwin Smith","Hange|Hange Zoe","Piccolo","Nanami|Kento Nanami","Power","Himeno","Netero|Isaac Netero","Lelouch","Pain|Nagato","Whitebeard","Bellemere","Oden|Kozuki Oden","Shinobu|Shinobu Kocho"],
      3: ["Haku","Android 16","Obito|Obito Uchiha","Gaara","Chiyo","Hinata Hyuga|Hinata","Gyomei|Gyomei Himejima","Muichiro|Muichiro Tokito","Genya|Genya Shinazugawa","Kagaya Ubuyashiki|Kagaya","Rem","Ur","Hiluluk","Going Merry|Merry","Greed|Ling","Alphonse|Al","Hohenheim","Kaworu","Misato","Kaji|Ryoji Kaji","Wolfwood|Nicholas D. Wolfwood","Armin|Armin Arlert","Genos"],
      4: ["Tamayo","Mechamaru","Ultear","Igneel","Pell"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-famously-lazy-anime-character",
    theme: "tropes",
    prompt: "Name a character who'd rather nap than do anything",
    answers: {
      1: ["Shikamaru|Shikamaru Nara","Gintoki|Gintoki Sakata","Nagi|Seishiro Nagi","Umaru|Umaru Doma"],
      2: ["Saitama","Houtarou Oreki|Oreki","Tanaka (Tanaka-kun Is Always Listless)|Tanaka","Aizawa|Shota Aizawa","Aokiji|Kuzan","Snorlax"],
      3: ["Kakashi|Kakashi Hatake","Hachiman|Hachiman Hikigaya","Aqua","Kazuma|Kazuma Sato","Shiro","Ryo Yamada|Ryo","Konata|Konata Izumi","Kenma|Kenma Kozume","Shunsui|Shunsui Kyoraku","Starrk|Coyote Starrk","Zoro|Roronoa Zoro","Yui Hirasawa|Yui"],
      4: ["Saiki|Saiki Kusuo"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-s-always-smiling-even-when-it-s-creepy",
    theme: "tropes",
    prompt: "Name a character who's always smiling (even when it's creepy)",
    answers: {
      1: ["Gin Ichimaru|Gin","Hisoka","Koro-sensei","Luffy|Monkey D. Luffy"],
      2: ["Douma|Doma","Sai","Kyubey","Izaya Orihara|Izaya","Doflamingo","Rengoku|Kyojuro Rengoku","Gojo|Satoru Gojo","Toga|Himiko Toga","Shinobu|Shinobu Kocho"],
      3: ["Joker (Fire Force)|Joker","Mahito","Nagito Komaeda|Komaeda","Mirio|Mirio Togata","Ai Hoshino|Ai"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-tsundere-it-s-not-like-i-like-you-or-anything",
    theme: "tropes",
    prompt: "Name a tsundere (\"it's not like I like you or anything!\")",
    answers: {
      1: ["Taiga|Taiga Aisaka","Asuka|Asuka Langley"],
      2: ["Kurisu|Kurisu Makise","Rin Tohsaka|Rin","Louise","Chitoge|Chitoge Kirisaki","Nino Nakano|Nino","Senjougahara|Hitagi Senjougahara","Kaguya|Kaguya Shinomiya","Vegeta","Bakugo|Katsuki Bakugo","Mikoto Misaka|Misaka","Inuyasha","Akane Tendo|Akane"],
      3: ["Shana","Kyo Sohma|Kyo","Kirino|Kirino Kosaka","Kagami Hiiragi|Kagami","Eriri|Eriri Spencer Sawamura","Naru Narusegawa|Naru","Haruhi Suzumiya|Haruhi"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-total-crybaby",
    theme: "tropes",
    prompt: "Name a crybaby or total scaredy-cat",
    answers: {
      1: ["Zenitsu|Zenitsu Agatsuma","Deku|Izuku Midoriya"],
      2: ["Usopp","Aqua","Usagi|Usagi Tsukino|Sailor Moon","Shinji|Shinji Ikari","Mr. Satan|Hercule","Mineta|Minoru Mineta","Bocchi|Hitori Gotoh","Nami","Mio Akiyama|Mio","Coby|Koby"],
      3: ["Chopper|Tony Tony Chopper","Tamaki Amajiki|Tamaki","Okarun|Ken Takakura","Kazuya Kinoshita|Kazuya","Tsuna|Tsunayoshi Sawada","Oolong","Buggy","Armin|Armin Arlert"],
      4: ["Puar"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-powers-up-when-they-get-angry",
    theme: "tropes",
    prompt: "Name a character who powers up when they get angry",
    answers: {
      1: ["Goku|Son Goku","Gohan|Son Gohan","Naruto|Naruto Uzumaki","Eren|Eren Yeager","Vegeta"],
      2: ["Broly","Ichigo|Ichigo Kurosaki","Natsu|Natsu Dragneel","Inuyasha","Bakugo|Katsuki Bakugo","Gon|Gon Freecss","Tanjiro|Tanjiro Kamado","Sasuke|Sasuke Uchiha","Kenpachi|Kenpachi Zaraki","Escanor","Meliodas","Yuji|Yuji Itadori","Denji","Kaneki|Ken Kaneki","Erza|Erza Scarlet","Simon","Kamina","Ryuko|Ryuko Matoi","Shinji|Shinji Ikari","Goten|Son Goten","Trunks"],
      3: ["Yusuke|Yusuke Urameshi","Kuwabara|Kazuma Kuwabara","Hiei","Gaara","Killer B|Killer Bee","Kurama|Nine-Tails","Endeavor","Shoto Todoroki|Todoroki","Rin Okumura|Rin","Garou","Grimmjow","Uryu|Uryu Ishida","Akaza","Inosuke|Inosuke Hashibira","Zenitsu|Zenitsu Agatsuma","Ippo|Ippo Makunouchi","Baki|Baki Hanma"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-started-out-weak",
    theme: "tropes",
    prompt: "Name a character who started out weak",
    answers: {
      1: ["Deku|Izuku Midoriya","Naruto|Naruto Uzumaki","Rock Lee|Lee","Asta","Sung Jinwoo|Jinwoo"],
      2: ["Hinata Shoyo|Shoyo Hinata|Hinata (Haikyu)","Usopp","Subaru|Natsuki Subaru","Naofumi|Naofumi Iwatani","Ippo|Ippo Makunouchi","Kenichi|Kenichi Shirahama","Sakura|Sakura Haruno","Isagi|Yoichi Isagi","Takemichi|Takemichi Hanagaki","Mumen Rider","Hinata Hyuga"],
      3: ["Kuroko|Tetsuya Kuroko","Sena|Sena Kobayakawa","Noelle|Noelle Silva","Hikaru Shindo|Hikaru","Simon","Zenitsu|Zenitsu Agatsuma","Krillin","Tanjiro|Tanjiro Kamado"],
      4: ["Tsuna|Tsunayoshi Sawada","Ikki Kurogane|Ikki","Hiro (Darling in the Franxx)"],
      5: ["Ichiban","Kazuya Kinoshita"],
      6: []
    }
  },
  {
    id: "name-a-lovable-airhead",
    theme: "tropes",
    prompt: "Name a lovable airhead",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Goku|Son Goku","Naruto|Naruto Uzumaki","Yui Hirasawa|Yui","Chika Fujiwara|Chika"],
      2: ["Aqua","Usagi|Usagi Tsukino|Sailor Moon","Osaka|Ayumu Kasuga","Sasha|Sasha Blouse","Hinata Shoyo|Shoyo Hinata","Asta","Denji","Natsu|Natsu Dragneel","Anya|Anya Forger","Bokuto|Kotaro Bokuto","Kaminari|Denki Kaminari","Mitsuri|Mitsuri Kanroji","Tohru Honda|Tohru","Inosuke|Inosuke Hashibira","Gon|Gon Freecss","Yotsuba"],
      3: ["Ritsu Tainaka|Ritsu","Konata|Konata Izumi","Mayuri Shiina|Mayuri","Honoka Kosaka|Honoka","Emilia","Uzaki|Hana Uzaki","Gintoki|Gintoki Sakata"],
      4: ["Tamako Kitashirakawa|Tamako","Haruhi Suzumiya"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-hothead-who-s-always-yelling",
    theme: "tropes",
    prompt: "Name a hothead who's always yelling",
    answers: {
      1: ["Bakugo|Katsuki Bakugo","Inosuke|Inosuke Hashibira","Vegeta","Natsu|Natsu Dragneel","Eren|Eren Yeager"],
      2: ["Naruto|Naruto Uzumaki","Sanemi|Sanemi Shinazugawa","Zenitsu|Zenitsu Agatsuma","Tsunade","Taiga|Taiga Aisaka","Asuka|Asuka Langley","Kamina","Kageyama|Tobio Kageyama","Kuwabara|Kazuma Kuwabara","Yusuke|Yusuke Urameshi","Inuyasha","Kyo Sohma|Kyo","Ryuko|Ryuko Matoi","Edward Elric|Edward|Ed","Grimmjow","Asta","Endeavor"],
      3: ["Gajeel|Gajeel Redfox","Renji|Renji Abarai","Ikkaku|Ikkaku Madarame","Akainu|Sakazuki","Eustass Kid|Kid","Iida|Tenya Iida","Nobara|Nobara Kugisaki","Hijikata|Toshiro Hijikata","Kiba|Kiba Inuzuka"],
      4: ["Genya|Genya Shinazugawa"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-stoic-character-who-barely-shows-emotion",
    theme: "tropes",
    prompt: "Name a stoic character who barely shows emotion",
    answers: {
      1: ["Levi|Levi Ackerman","Mikasa|Mikasa Ackerman","Giyu|Giyu Tomioka","Itachi|Itachi Uchiha","Ulquiorra","Mob|Shigeo Kageyama"],
      2: ["Rei Ayanami|Rei","Violet Evergarden|Violet","Kanao|Kanao Tsuyuri","Muichiro|Muichiro Tokito","Jotaro|Jotaro Kujo","Frieren","Fern","Byakuya|Byakuya Kuchiki","Saitama","Annie|Annie Leonhart","Nanami|Kento Nanami","Megumi|Megumi Fushiguro","Yuki Nagato|Nagato","Oreki|Houtarou Oreki","Kuroko|Tetsuya Kuroko","Akame","Sasuke|Sasuke Uchiha"],
      3: ["Mei Misaki|Mei","Ayanokoji|Kiyotaka Ayanokoji","Toshiro|Hitsugaya|Toshiro Hitsugaya","Tsukishima|Kei Tsukishima","Ushijima|Wakatoshi Ushijima","Kanade Tachibana|Kanade","Kino","Shino|Shino Aburame","Gaara"],
      4: ["Saber","Ruri Hoshino"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-obsessed-with-getting-stronger",
    theme: "tropes",
    prompt: "Name a character obsessed with getting stronger",
    answers: {
      1: ["Goku|Son Goku","Vegeta","Rock Lee|Lee","Zoro|Roronoa Zoro","Bakugo|Katsuki Bakugo"],
      2: ["Inosuke|Inosuke Hashibira","Asta","Gon|Gon Freecss","Kenpachi|Kenpachi Zaraki","Might Guy|Guy|Gai","Baki|Baki Hanma","Ippo|Ippo Makunouchi","Sasuke|Sasuke Uchiha","Deku|Izuku Midoriya","Garou","Yuno","Natsu|Natsu Dragneel","Hinata Shoyo|Shoyo Hinata","Saitama","Sung Jinwoo|Jinwoo","Todo|Aoi Todo","Jiren","Akaza","Toguro|Younger Toguro"],
      3: ["Yujiro Hanma|Yujiro","Jack Hanma","Renji|Renji Abarai","Ikkaku|Ikkaku Madarame","Grimmjow","Kokushibo","Kirishima|Eijiro Kirishima","Rin Itoshi|Rin"],
      4: ["Netero|Isaac Netero","Uvogin"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-lone-wolf-who-d-rather-work-alone",
    theme: "tropes",
    prompt: "Name a lone wolf who'd rather work alone",
    answers: {
      1: ["Sasuke|Sasuke Uchiha","Hiei","Vegeta","Guts","Kirito"],
      2: ["Kurapika","Spike|Spike Spiegel","Gaara","Mugen","Jin (Samurai Champloo)|Jin","Sung Jinwoo|Jinwoo","Hachiman|Hachiman Hikigaya","Ayanokoji|Kiyotaka Ayanokoji","Sesshomaru","Kenpachi|Kenpachi Zaraki","Hisoka","Garou","Hyakkimaru","Black Jack"],
      3: ["Kaiba|Seto Kaiba","Toji|Toji Fushiguro","Ging|Ging Freecss","Kenshiro","Golgo 13|Duke Togo","Jubei|Jubei Kibagami","Afro|Afro Samurai","Stain|Hero Killer Stain","Rin Itoshi|Rin"],
      4: ["Kino","Mushishi|Ginko"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-total-show-off",
    theme: "tropes",
    prompt: "Name a total show-off",
    answers: {
      1: ["Mr. Satan|Hercule","Kaiba|Seto Kaiba","Gilgamesh","Oikawa|Tooru Oikawa","Tamaki Suoh|Tamaki"],
      2: ["Kise|Ryota Kise","Gary Oak|Gary","Vegeta","Captain Ginyu|Ginyu","Aqua","Megumin","Tuxedo Mask|Mamoru","Usopp","Tengen|Tengen Uzui","Aoyama|Yuga Aoyama","Jiraiya","Dio|Dio Brando","Gojo|Satoru Gojo","Escanor","Todo|Aoi Todo","Bon Clay|Mr. 2","Buggy"],
      3: ["Monoma|Neito Monoma","Enel|Eneru","Barou|Shoei Barou","Atsumu|Atsumu Miya","Bokuto|Kotaro Bokuto","Inosuke|Inosuke Hashibira"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-comic-relief-character",
    theme: "tropes",
    prompt: "Name a comic-relief character",
    answers: {
      1: ["Usopp","Zenitsu|Zenitsu Agatsuma","Mr. Satan|Hercule","Happy","Brook","Mineta|Minoru Mineta"],
      2: ["Buggy","Chopper|Tony Tony Chopper","Kaminari|Denki Kaminari","Inosuke|Inosuke Hashibira","Sasha|Sasha Blouse","Connie|Connie Springer","Yamcha","Oolong","Master Roshi|Roshi","Kuwabara|Kazuma Kuwabara","Power","Reigen|Arataka Reigen","King","Aqua","Kazuma|Kazuma Sato","Darkness","Chika Fujiwara|Chika","Armstrong|Alex Louis Armstrong","Kon","Bon Clay|Mr. 2","Team Rocket|Jessie|James","Meowth","Kero|Kero-chan","Shippo","Jaken","Leorio","Okuyasu|Okuyasu Nijimura","Polnareff|Jean Pierre Polnareff","Speedwagon","Mista|Guido Mista","Tanaka (Haikyu)|Ryunosuke Tanaka","Nishinoya|Yu Nishinoya","Bokuto|Kotaro Bokuto","Might Guy|Guy|Gai","Tobi","Jiraiya","Krillin","Shinpachi|Shinpachi Shimura","Kagura"],
      3: ["Puar","Chiaotzu","Yajirobe","King Kai","Bubbles","Pilaf|Emperor Pilaf","Shu","Mai (Dragon Ball)","Ginyu|Captain Ginyu","Foxy","Mr. 3","Wapol","Duval","Franky","Iggy","Hol Horse","Boingo","Monoma|Neito Monoma","Present Mic","Myoga"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-genius-strategist",
    theme: "tropes",
    prompt: "Name a genius strategist",
    answers: {
      1: ["Shikamaru|Shikamaru Nara","Lelouch|Lelouch Lamperouge","Light Yagami|Light","L|L Lawliet","Armin|Armin Arlert","Erwin|Erwin Smith"],
      2: ["Aizen|Sosuke Aizen","Ayanokoji|Kiyotaka Ayanokoji","Senku|Senku Ishigami","Law|Trafalgar Law","Kurapika","Sora (No Game No Life)|Sora","Shiro (No Game No Life)|Shiro","Ray","Norman","Kaguya|Kaguya Shinomiya","Miyuki Shirogane|Shirogane","Gen|Gen Asagiri","Kongming|Zhuge Liang","Yang Wen-li|Yang","Reinhard|Reinhard von Lohengramm","Kisaki|Tetta Kisaki","Isagi|Yoichi Isagi","Ego|Jinpachi Ego","Kenma|Kenma Kozume","Oikawa|Tooru Oikawa","Akashi|Seijuro Akashi","Hiruma|Yoichi Hiruma","Johan|Johan Liebert","Near","Mello","Shiroe","Ainz|Ainz Ooal Gown","Demiurge","Albedo","Schneizel","Tanya|Tanya Degurechaff","Kaiji","Akagi","Yumeko|Yumeko Jabami","Kenjaku","Tobirama|Tobirama Senju","Itachi|Itachi Uchiha","Kakashi|Kakashi Hatake","Doflamingo","Nami","Robin|Nico Robin","Zeke|Zeke Yeager","Hange|Hange Zoe"],
      3: ["Komugi","Meruem","Chrollo|Chrollo Lucilfer","Emma","Isabella|Mama Isabella","Danzo","Kabuto|Kabuto Yakushi","Diablo","Benimaru"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-a-big-dream-they-never-stop-chasing",
    theme: "tropes",
    prompt: "Name a character with a big dream they never stop chasing",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Naruto|Naruto Uzumaki","Deku|Izuku Midoriya","Asta","Ash Ketchum|Ash"],
      2: ["Goku|Son Goku","Gon|Gon Freecss","Yuno","Hinata Shoyo|Shoyo Hinata","Isagi|Yoichi Isagi","Zoro|Roronoa Zoro","Sanji","Nami","Usopp","Chopper|Tony Tony Chopper","Robin|Nico Robin","Franky","Brook","Senku|Senku Ishigami","Eren|Eren Yeager","Edward Elric|Edward|Ed","Ruby Hoshino|Ruby","Tanjiro|Tanjiro Kamado","Kamina","Simon","Bakugo|Katsuki Bakugo","Ochaco|Ochaco Uraraka","Iida|Tenya Iida","Rock Lee|Lee","Gaara","Sasuke|Sasuke Uchiha","Kuroko|Tetsuya Kuroko","Kagami|Taiga Kagami","Rin Matsuoka|Rin","Soma|Soma Yukihira","Shirou Emiya|Shirou","Lelouch|Lelouch Lamperouge","Kageyama|Tobio Kageyama","Sakuragi|Hanamichi Sakuragi","Ippo|Ippo Makunouchi","Bocchi|Hitori Gotoh"],
      3: ["Leorio","Kurapika","Roy Mustang|Mustang","Mashiro Moritaka|Moritaka","Akito Takagi|Takagi","Midori Asakusa|Midori","Shizuku Tsukishima|Shizuku","Hikaru Shindo|Hikaru","Akira Toya|Akira","Bartolomeo","Whitebeard|Edward Newgate"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-a-tragic-backstory",
    theme: "tropes",
    prompt: "Name a character with a tragic backstory",
    answers: {
      1: ["Itachi|Itachi Uchiha","Sasuke|Sasuke Uchiha","Naruto|Naruto Uzumaki","Gaara","Eren|Eren Yeager","Tanjiro|Tanjiro Kamado"],
      2: ["Obito|Obito Uchiha","Nagato|Pain","Kakashi|Kakashi Hatake","Haku","Zabuza","Robin|Nico Robin","Ace|Portgas D. Ace","Sabo","Law|Trafalgar Law","Nami","Brook","Chopper|Tony Tony Chopper","Kurapika","Akaza","Gyutaro","Daki","Rui","Muichiro|Muichiro Tokito","Sanemi|Sanemi Shinazugawa","Kokushibo","Gyomei|Gyomei Himejima","Kanao|Kanao Tsuyuri","Shinobu|Shinobu Kocho","Genya|Genya Shinazugawa","Kaneki|Ken Kaneki","Edward Elric|Edward|Ed","Alphonse Elric|Alphonse|Al","Scar","Levi|Levi Ackerman","Reiner|Reiner Braun","Zeke|Zeke Yeager","Historia|Historia Reiss","Mikasa|Mikasa Ackerman","Shoto Todoroki|Shoto|Todoroki","Dabi","Shigaraki|Tomura Shigaraki","Toga|Himiko Toga","Eri","Twice","Toji|Toji Fushiguro","Geto|Suguru Geto","Junpei|Junpei Yoshino","Guts","Casca","Lelouch|Lelouch Lamperouge","Suzaku|Suzaku Kururugi","Shinji|Shinji Ikari","Asuka|Asuka Langley","Violet Evergarden|Violet","Thorfinn","Vash|Vash the Stampede","Wolfwood|Nicholas D. Wolfwood","Faye|Faye Valentine","Ray","Denji","Aki|Aki Hayakawa","Makima","Shinra|Shinra Kusakabe","Kosei|Kosei Arima"],
      3: ["Hyakkimaru","Askeladd","Kaiji","Johan|Johan Liebert","Mello","Tamayo","Rengoku|Kyojuro Rengoku","Nezuko|Nezuko Kamado","Yuta|Yuta Okkotsu","Inosuke|Inosuke Hashibira","Sasori","Konan","Kisame|Kisame Hoshigaki"],
      4: [],
      5: [],
      6: []
    }
  },

  // ---------- RELATIONSHIPS ----------
  {
    id: "name-an-anime-pet-mascot-or-animal-sidekick",
    theme: "relationships",
    prompt: "Name an anime pet, mascot or animal sidekick",
    answers: {
      1: ["Pikachu","Happy","Chopper|Tony Tony Chopper","Pochita","Bond|Bond Forger"],
      2: ["Luna","Artemis","Kyubey","Ein","Akamaru","Pakkun","Jiji","Kero|Kero-chan|Keroberos","Meowth","Puar","Doraemon","Totoro","Catbus"],
      3: ["Boota","Mokona","Kirara","Shippo","Nyanko-sensei|Madara","Black Hayate","Iggy","Panda","Nanachi","Haro","Puck","Carla","Plue","Hamtaro","Gamabunta"],
      4: ["Kurama|Nine-Tails","Gamakichi","Katsuyu","Pantherlily|Lily","Bonta-kun","Yakul","Moro","Diana"],
      5: ["Teto","Frosch","Lector","Kon"],
      6: []
    }
  },
  {
    id: "name-an-anime-teacher-or-mentor",
    theme: "relationships",
    prompt: "Name a mentor who trains the hero",
    answers: {
      1: ["Kakashi|Kakashi Hatake","Jiraiya","Master Roshi|Roshi","Koro-sensei","Gojo|Satoru Gojo","All Might"],
      2: ["Aizawa|Shota Aizawa","Iruka","Might Guy|Guy","Urokodaki|Sakonji Urokodaki","Bisky|Biscuit Krueger","Genkai","Izumi Curtis|Izumi","Rayleigh|Silvers Rayleigh","Onizuka|Eikichi Onizuka","Reigen|Arataka Reigen","Piccolo","King Kai","Whis","Professor Oak|Oak","Saitama","Yami|Yami Sukehiro","Frieren"],
      3: ["Rengoku|Kyojuro Rengoku","Wing","Urahara|Kisuke Urahara","Zeff","Nanami|Kento Nanami","Netero|Isaac Netero","Tsunade","Jigoro|Jigoro Kuwajima","Makarov","Bang|Silver Fang","Kamogawa","Ukai|Keishin Ukai","Ego|Jinpachi Ego","Askeladd","Karasuma","Kami","Korin"],
      4: ["Hiko Seijuro|Hiko","Heiter","Flamme","Thors","Julius|Julius Novachrono","Kishibe","Irina|Irina Jelavic","Igneel","Mr. Popo","Takeda|Ittetsu Takeda","Yaga|Masamichi Yaga"],
      5: ["Danpei|Danpei Tange","Totosai","Old Kai"],
      6: ["Gakuganji"]
    }
  },
  {
    id: "name-a-famous-anime-rival",
    theme: "relationships",
    prompt: "Name a rival who never lets it go",
    answers: {
      1: ["Vegeta","Sasuke|Sasuke Uchiha","Bakugo|Katsuki Bakugo","Kaiba|Seto Kaiba","Gary Oak|Gary"],
      2: ["L|Ryuzaki","Suzaku|Suzaku Kururugi","Char Aznable|Char","Rukawa|Kaede Rukawa","Oikawa|Toru Oikawa","Rin Itoshi|Rin","Yuno","Gray|Gray Fullbuster","Todoroki|Shoto Todoroki"],
      3: ["Aomine|Daiki Aomine","Akashi|Seijuro Akashi","Paul","Neji|Neji Hyuga","Grimmjow","Uryu|Uryu Ishida","Hisoka","Smoker","Kid|Eustass Kid","Ushijima|Wakatoshi Ushijima","Kenma|Kenma Kozume","Kaiser|Michael Kaiser","Near","Gajeel","Miyuki Shirogane|Shirogane","Athrun|Athrun Zala","Toguro"],
      4: ["Atobe|Keigo Atobe","Miyata|Ichiro Miyata","Sendoh|Akira Sendoh","Ryosuke Takahashi","Yuri (Megalobox)|Yuri","Ryoga|Ryoga Hibiki","Kai|Kai Hiwatari","Monoma|Neito Monoma","Zechs|Zechs Merquise"],
      5: ["Matt|Yamato Ishida","Shin|Seijuro Shin","Kuwabara"],
      6: ["Rikiishi|Toru Rikiishi"]
    }
  },
  {
    id: "name-an-anime-character-who-s-an-orphan",
    theme: "relationships",
    prompt: "Name an orphan",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Eren|Eren Yeager","Tanjiro|Tanjiro Kamado","Sasuke|Sasuke Uchiha","Denji"],
      2: ["Mikasa|Mikasa Ackerman","Armin|Armin Arlert","Ace|Portgas D. Ace","L|L Lawliet","Kurapika","Emma","Norman","Ray","Asta","Yuno","Ciel|Ciel Phantomhive"],
      3: ["Near","Mello","Kenshin|Himura Kenshin","Nami","Nico Robin|Robin","Natsu|Natsu Dragneel","Gray|Gray Fullbuster","Erza|Erza Scarlet","Tohru Honda|Tohru","Violet Evergarden|Violet","Kaneki|Ken Kaneki","Megumi Fushiguro|Megumi","Aki|Aki Hayakawa","Genos","Obito|Obito Uchiha","Nagato","Rukia|Rukia Kuchiki","Renji|Renji Abarai","Levi|Levi Ackerman"],
      4: ["Allen Walker","Vash","Konan","Yahiko","Haku","Kirito"],
      5: ["Nojiko"],
      6: []
    }
  },
  {
    id: "name-an-anime-dad",
    theme: "relationships",
    prompt: "Name an anime dad (great or terrible)",
    answers: {
      1: ["Goku|Son Goku","Vegeta","Loid Forger|Loid|Twilight","Endeavor"],
      2: ["Minato|Minato Namikaze","Hohenheim|Van Hohenheim","Isshin Kurosaki|Isshin","Ging|Ging Freecss","Whitebeard","Monkey D. Dragon|Dragon","Maes Hughes|Hughes","Bardock","Grisha Yeager|Grisha","Toji Fushiguro|Toji","Joseph Joestar|Joseph","Jotaro|Jotaro Kujo","Kohei Inuzuka|Kohei","Gendo Ikari|Gendo","Naruto|Naruto Uzumaki"],
      3: ["Kiritsugu|Kiritsugu Emiya","Shou Tucker","Silva Zoldyck|Silva","Gol D. Roger|Roger","Soichiro Yagami|Soichiro","Joichiro Yukihira|Joichiro","Shinjuro Rengoku|Shinjuro","Fugaku Uchiha|Fugaku","Sasuke|Sasuke Uchiha","Mr. Satan|Hercule","Gohan","Dio|Dio Brando","Kogoro Mouri|Kogoro","Daikichi"],
      4: ["Tanjuro|Tanjuro Kamado","Hiashi Hyuga|Hiashi","Shikaku Nara|Shikaku","Sakumo Hatake|Sakumo","Ox-King","Ryuken Ishida|Ryuken","King Vegeta","Paragus"],
      5: ["Inoichi|Inoichi Yamanaka"],
      6: []
    }
  },
  {
    id: "name-an-anime-mom",
    theme: "relationships",
    prompt: "Name an anime mom (great or terrifying)",
    answers: {
      1: ["Chi-Chi","Yor Forger|Yor","Inko Midoriya|Inko"],
      2: ["Bulma","Kushina|Kushina Uzumaki","Trisha Elric|Trisha","Carla Yeager|Carla","Hinata|Hinata Hyuga","Isabella|Mama Isabella","Bellemere","Big Mom|Charlotte Linlin","Mitsuki Bakugo|Mitsuki"],
      3: ["Sakura|Sakura Haruno","Holly Kujo|Holly","Lisa Lisa","Yui Ikari|Yui","Izumi Curtis|Izumi","Kyoko Honda|Kyoko","Portgas D. Rouge|Rouge","Videl","Kikyo Zoldyck|Kikyo","Mito Freecss|Mito","Rei Todoroki","Ragyo|Ragyo Kiryuin"],
      4: ["Kurenai","Erina Pendleton|Erina","Junko Kaname|Junko","Gracia Hughes|Gracia","Nico Olvia|Olvia","Ikuko Tsukino|Ikuko","Kie Kamado|Kie","Ruka Rengoku|Ruka"],
      5: ["Kokiri"],
      6: []
    }
  },
  {
    id: "name-a-character-who-s-someone-s-older-brother-or-sister",
    theme: "relationships",
    prompt: "Name a character who's someone's older brother or sister",
    answers: {
      1: ["Itachi|Itachi Uchiha","Ace|Portgas D. Ace","Tanjiro|Tanjiro Kamado","Edward Elric|Edward|Ed","Raditz"],
      2: ["Sabo","Zeke|Zeke Yeager","Yor|Yor Forger","Nojiko","Temari","Kankuro","Gohan|Son Gohan","Trunks","Illumi|Illumi Zoldyck","Killua|Killua Zoldyck","Choso","Sanemi|Sanemi Shinazugawa","Rengoku|Kyojuro Rengoku","Gyutaro","Dabi|Toya Todoroki","Ichigo|Ichigo Kurosaki","Hinata|Hinata Hyuga","Sora (No Game No Life)|Sora","Kirito"],
      3: ["Sae Itoshi|Sae","Kanae Kocho|Kanae","Shinobu|Shinobu Kocho","Milluki","Tensei Iida|Tensei","Fuyumi Todoroki|Fuyumi","Kaien Shiba|Kaien","Kukaku Shiba|Kukaku","Mitsuba Okita|Mitsuba","Kyosuke Kosaka|Kyosuke","Ram","Mai Zenin|Mai","Shinpachi|Shinpachi Shimura","Tae Shimura|Tae"],
      4: ["Reiju|Vinsmoke Reiju","Ichiji","Perospero","Hisana","Yuichiro Tokito"],
      5: ["Seika Ijichi","Kotaro Bokuto"],
      6: []
    }
  },
  {
    id: "name-a-character-who-s-part-of-a-famous-duo",
    theme: "relationships",
    prompt: "Name a character who's part of a famous duo",
    answers: {
      1: ["Edward Elric|Edward|Ed","Alphonse Elric|Alphonse|Al","Gon|Gon Freecss","Killua|Killua Zoldyck","Jessie","James","Naruto|Naruto Uzumaki","Sasuke|Sasuke Uchiha"],
      2: ["Goku|Son Goku","Vegeta","Mob|Shigeo Kageyama","Reigen|Arataka Reigen","Denji","Power","Luffy|Monkey D. Luffy","Zoro|Roronoa Zoro","Roy Mustang|Mustang","Riza Hawkeye|Riza","Lupin|Lupin III","Jigen|Daisuke Jigen","Spike|Spike Spiegel","Jet|Jet Black","Saitama","Genos","Natsu|Natsu Dragneel","Happy","Gintoki|Gintoki Sakata","Shinpachi|Shinpachi Shimura","Hinata Shoyo|Shoyo Hinata","Kageyama|Tobio Kageyama","Isagi|Yoichi Isagi","Bachira|Meguru Bachira","Nagi|Seishiro Nagi","Reo|Reo Mikage","Mikey|Manjiro Sano","Draken","Tanjiro|Tanjiro Kamado","Nezuko|Nezuko Kamado","Yuji|Yuji Itadori","Todo|Aoi Todo","Inuyasha","Kagome|Kagome Higurashi","Ash Ketchum|Ash","Pikachu","Rem","Ram","Light Yagami|Light","Ryuk","Okarun|Ken Takakura","Momo Ayase|Momo","Frieren","Fern","Asta","Yuno","Deku|Izuku Midoriya","Bakugo|Katsuki Bakugo","Kirito","Asuna","Shikamaru|Shikamaru Nara","Choji|Choji Akimichi","Senku|Senku Ishigami","Chrome","Loid|Loid Forger","Anya|Anya Forger","Atsumu|Atsumu Miya","Osamu|Osamu Miya","Maki Zenin|Maki","Mai Zenin|Mai"],
      3: ["Gojo|Satoru Gojo","Geto|Suguru Geto","Kuroko|Tetsuya Kuroko","Kagami|Taiga Kagami","Sora (No Game No Life)|Sora","Shiro (No Game No Life)|Shiro","Hikaru Hitachiin|Hikaru","Kaoru Hitachiin|Kaoru","Kenma|Kenma Kozume","Kuroo|Tetsuro Kuroo","Mugen","Jin (Samurai Champloo)|Jin","Vash|Vash the Stampede","Wolfwood|Nicholas D. Wolfwood","Haruhi Suzumiya|Haruhi","Kyon","Kazuma|Kazuma Sato","Aqua","Gyutaro","Daki","Ginyu|Captain Ginyu","Jeice","Recoome","Burter","Rin Itoshi|Rin","Sae Itoshi|Sae"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-the-main-character-s-best-friend",
    theme: "relationships",
    prompt: "Name the main character's best friend",
    answers: {
      1: ["Krillin","Killua|Killua Zoldyck","Gon|Gon Freecss","Armin|Armin Arlert","Sasuke|Sasuke Uchiha"],
      2: ["Kuwabara|Kazuma Kuwabara","Iida|Tenya Iida","Kirishima|Eijiro Kirishima","Shinpachi|Shinpachi Shimura","Kagura","Happy","Tatsuki|Tatsuki Arisawa","Chad|Sado","Renji|Renji Abarai","Klein","Joey Wheeler|Joey|Jonouchi","Brock","Misty","Kurapika","Leorio","Dimple","Shikamaru|Shikamaru Nara","Choji|Choji Akimichi","Hughes|Maes Hughes","Winry|Winry Rockbell","Nijika|Nijika Ijichi","Kageyama|Tobio Kageyama","Bachira|Meguru Bachira","Draken","Heiji|Heiji Hattori","Ran|Ran Mori","Power","Genos","Yuno","Chrome","Taiju","Jigen|Daisuke Jigen","Jet|Jet Black","Wolfwood|Nicholas D. Wolfwood","Sanosuke|Sanosuke Sagara"],
      3: ["Tristan|Honda Hiroto","Kenma|Kenma Kozume","Baji|Keisuke Baji","Eugeo","Junpei|Junpei Yoshino","Gen|Gen Asagiri","King","Kita|Ikuyo Kita","Jiji|Jin Enjoji","Toji Suzuhara|Toji","Kensuke Aida|Kensuke"],
      4: ["Ryuji Suguro|Suguro","Akkun|Atsushi Sendo"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-who-raised-a-kid-that-isn-t-theirs",
    theme: "relationships",
    prompt: "Name a character who raised a kid that isn't theirs",
    answers: {
      1: ["Loid|Loid Forger","Yor|Yor Forger","Bellemere","Isabella|Mama Isabella","Dadan|Curly Dadan","Garp|Monkey D. Garp"],
      2: ["Urokodaki|Sakonji Urokodaki","Kiritsugu|Kiritsugu Emiya","Hiluluk|Dr. Hiluluk","Dr. Kureha|Kureha","Grandpa Gohan|Gohan (grandpa)","Whitebeard|Edward Newgate","Shanks","Father Orsi|Orsi","Mito|Mito Freecss","Black Jack","Pinako|Pinako Rockbell","Sesshomaru","Jiraiya","Carla Yeager|Carla","Grisha|Grisha Yeager"],
      3: ["Kenny Ackerman|Kenny","Shoyo Yoshida|Shoyo","Gintoki|Gintoki Sakata","Daikichi|Daikichi Kawachi","Nitta|Yoshifumi Nitta","Kazuki Kurusu|Kazuki","Rei Suwa|Rei","Kenshin|Himura Kenshin","Sister Lily|Lily","Kobayashi"],
      4: ["Satoru Gojo|Gojo"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-with-a-crush-on-the-main-character",
    theme: "relationships",
    prompt: "Name a character with a crush on the main character",
    answers: {
      1: ["Hinata|Hinata Hyuga","Ochaco|Ochaco Uraraka|Uraraka","Orihime|Orihime Inoue","Misty","Mikasa|Mikasa Ackerman"],
      2: ["Asuna","Kagome|Kagome Higurashi","Boa Hancock|Hancock","Uta","Kanao|Kanao Tsuyuri","Reze","Lucy|Lucy Heartfilia","Lisanna","Noelle|Noelle Silva","Mimosa|Mimosa Vermillion","Rem","Megumin","Chitoge|Chitoge Kirisaki","Kosaki Onodera|Onodera","Miku Nakano|Miku","Taiga|Taiga Aisaka","Mai Sakurajima|Mai","Momo Ayase|Momo","Yui Yuigahama|Yui","Komi|Shoko Komi","Marin|Marin Kitagawa","Kaoru|Kaoru Kamiya","Keiko|Keiko Yukimura","Akane|Akane Tendo","Toga|Himiko Toga","Zero Two","Kaguya|Kaguya Shinomiya","Kurisu|Kurisu Makise","Senjougahara|Hitagi Senjougahara"],
      3: ["Shampoo","Ukyo|Ukyo Kuonji","Megumi Takani|Megumi","Hanekawa|Tsubasa Hanekawa","Yukino|Yukino Yukinoshita","Mitsuha|Mitsuha Miyamizu","Yuno Gasai|Yuno","Sylphy|Sylphiette","Roxy|Roxy Migurdia","Eris|Eris Greyrat","Ichigo (Franxx)|Ichigo","Lala|Lala Satalin Deviluke","Tohka|Tohka Yatogami","Kanade (Angel Beats)"],
      4: ["Shirahoshi","Kyoko Hori"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-whose-parent-is-a-legend-or-a-villain",
    theme: "relationships",
    prompt: "Name a character whose parent is a legend (or a villain)",
    answers: {
      1: ["Boruto|Boruto Uzumaki","Gohan|Son Gohan","Trunks","Shoto Todoroki|Todoroki|Shoto","Gon|Gon Freecss","Luffy|Monkey D. Luffy"],
      2: ["Ace|Portgas D. Ace","Sarada|Sarada Uchiha","Goten|Son Goten","Giorno|Giorno Giovanna","Josuke|Josuke Higashikata","Kakashi|Kakashi Hatake","Naruto|Naruto Uzumaki","Ichigo|Ichigo Kurosaki","Eren|Eren Yeager","Zeke|Zeke Yeager","Shinji|Shinji Ikari","Killua|Killua Zoldyck","Yamato","Uta","Sanji","Momonosuke","Edward Elric|Edward|Ed","Alphonse Elric|Alphonse|Al","Megumi|Megumi Fushiguro","Aqua Hoshino|Aqua","Ruby Hoshino|Ruby","Lelouch|Lelouch Lamperouge","Inuyasha","Sesshomaru"],
      3: ["Satsuki|Satsuki Kiryuin","Ryuko|Ryuko Matoi","Yusuke|Yusuke Urameshi","Rin Okumura|Rin","Yukio Okumura|Yukio","Shikadai|Shikadai Nara","Mitsuki","Rudeus|Rudeus Greyrat","Videl","Nunnally|Nunnally Lamperouge","Dabi|Toya Todoroki","Himawari|Himawari Uzumaki"],
      4: ["Chi-Chi","Bulma","Broly","Fuyumi Todoroki|Fuyumi"],
      5: ["Jonathan|Jonathan Joestar"],
      6: []
    }
  },
  {
    id: "name-a-captain-or-leader-of-a-team-crew-or-squad",
    theme: "relationships",
    prompt: "Name a captain or leader of a team, crew or squad",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Levi|Levi Ackerman","Erwin|Erwin Smith","Kakashi|Kakashi Hatake","Yami|Yami Sukehiro"],
      2: ["Byakuya|Byakuya Kuchiki","Toshiro|Hitsugaya|Toshiro Hitsugaya","Kenpachi|Kenpachi Zaraki","Yamamoto|Genryusai Yamamoto","Shanks","Whitebeard|Edward Newgate","Daichi|Daichi Sawamura","Akashi|Seijuro Akashi","Mikey|Manjiro Sano","Makarov","Chrollo|Chrollo Lucilfer","Pain|Nagato","Roy Mustang|Mustang","Kamina","Simon","Lelouch|Lelouch Lamperouge|Zero","Ainz|Ainz Ooal Gown","Rimuru|Rimuru Tempest","Netero|Isaac Netero","Gintoki|Gintoki Sakata","Kondo|Isao Kondo","Kagaya Ubuyashiki|Ubuyashiki","Shigaraki|Tomura Shigaraki","Hange|Hange Zoe","Law|Trafalgar Law","Blackbeard|Marshall D. Teach","Kaido","Big Mom|Charlotte Linlin","Buggy"],
      3: ["Kuroo|Tetsuro Kuroo","Oikawa|Tooru Oikawa","Bokuto|Kotaro Bokuto","Ushijima|Wakatoshi Ushijima","Akagi|Takenori Akagi","Smoker","Eustass Kid|Kid","Arlong","Tsuna|Tsunayoshi Sawada","Keith Shadis|Shadis","Pixis|Dot Pixis","Tsukasa|Tsukasa Shishio","Senku|Senku Ishigami","Hijikata|Toshiro Hijikata","Hiruma|Yoichi Hiruma"],
      4: ["Gol D. Roger|Roger","Hyuga|Junpei Hyuga"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-villain-who-used-to-be-a-hero-or-an-ally",
    theme: "relationships",
    prompt: "Name a villain who used to be a hero or an ally",
    answers: {
      1: ["Griffith|Femto","Obito|Obito Uchiha|Tobi","Eren|Eren Yeager","Aizen|Sosuke Aizen","Geto|Suguru Geto"],
      2: ["Sasuke|Sasuke Uchiha","Orochimaru","Itachi|Itachi Uchiha","Madara|Madara Uchiha","Kokushibo","Kaigaku","Gin Ichimaru|Gin","Kaname Tosen|Tosen","Reiner|Reiner Braun","Bertholdt","Annie|Annie Leonhart","Blackbeard|Marshall D. Teach","Dabi|Toya Todoroki","Kurogiri","Nagato|Pain","Jellal|Jellal Fernandes","Vicious","Knives|Millions Knives","Mikey|Manjiro Sano","Ginjo|Kugo Ginjo"],
      3: ["Kazutora|Kazutora Hanemiya","Sho Kusakabe|Sho","Kabuto|Kabuto Yakushi","Danzo","Kenjaku","Aoyama|Yuga Aoyama","Zeref","Hendrickson","Gilthunder","Patolli|Licht"],
      4: ["Juzo Suzuya","Kisame|Kisame Hoshigaki","Furuta|Nimura Furuta"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-stuck-in-a-love-triangle",
    theme: "relationships",
    prompt: "Name a character stuck in a love triangle",
    answers: {
      1: ["Sakura|Sakura Haruno","Naruto|Naruto Uzumaki","Sasuke|Sasuke Uchiha","Inuyasha","Kagome|Kagome Higurashi","Kikyo"],
      2: ["Orihime|Orihime Inoue","Rukia|Rukia Kuchiki","Ichigo|Ichigo Kurosaki","Raku|Raku Ichijo","Chitoge|Chitoge Kirisaki","Kosaki Onodera|Onodera","Ryuji|Ryuji Takasu","Taiga|Taiga Aisaka","Minori|Minori Kushieda","Tohru Honda|Tohru","Kyo Sohma|Kyo","Yuki Sohma|Yuki","Kosei|Kosei Arima","Kaori|Kaori Miyazono","Tsubaki|Tsubaki Sawabe","Lelouch|Lelouch Lamperouge","Shirley|Shirley Fenette","Kallen|Kallen Stadtfeld","Subaru|Natsuki Subaru","Rem","Emilia","Ranma|Ranma Saotome","Akane|Akane Tendo","Shampoo","Futaro|Futaro Uesugi","Miku Nakano|Miku","Nino Nakano|Nino","Ichika Nakano|Ichika","Yotsuba Nakano|Yotsuba","Itsuki Nakano|Itsuki","Hachiman|Hachiman Hikigaya","Yukino|Yukino Yukinoshita","Yui Yuigahama|Yui"],
      3: ["Kotonoha|Kotonoha Katsura","Sekai|Sekai Saionji","Makoto Itou|Makoto","Setsuna|Setsuna Ogiso","Kazusa|Kazusa Touma","Haruki|Haruki Kitahara","Godai|Yusaku Godai","Kyoko Otonashi|Kyoko","Mitaka|Shun Mitaka","Ami Kawashima|Ami","Okudera|Miki Okudera"],
      4: ["Ukyo|Ukyo Kuonji"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-loyal-right-hand-man-or-woman",
    theme: "relationships",
    prompt: "Name a loyal right-hand man (or woman)",
    answers: {
      1: ["Zoro|Roronoa Zoro","Marco|Marco the Phoenix","Riza Hawkeye|Riza|Hawkeye","Sebastian|Sebastian Michaelis","Ben Beckman|Beckman"],
      2: ["Benimaru","Diablo","Albedo","Demiurge","Draken|Ken Ryuguji","Kakucho|Hitto Kakucho","Hijikata|Toshiro Hijikata","Jinbe|Jinbei","King (One Piece)|King","Katakuri|Charlotte Katakuri","Kurogiri","Ulquiorra","Konan","Igris","Beru","Haku","Zarbon","Dodoria","Nappa","Uraume","Genos","Jigen|Daisuke Jigen","Kallen|Kallen Stadtfeld","Watari","Mikami|Teru Mikami","Levi|Levi Ackerman","Mista|Guido Mista","Vanilla Ice","Queen (One Piece)|Queen","Jack (One Piece)|Jack","Rayleigh|Silvers Rayleigh","Kabuto|Kabuto Yakushi","Shizune","Alpha (Shadow Garden)|Alpha"],
      3: ["Trebol","Vergo","Kimimaro","Jeremiah|Jeremiah Gottwald","Ram","Nico Robin|Robin|Miss All Sunday","Zetsu","Shiryu","Doppio|Vinegar Doppio"],
      4: ["Daz Bonez|Mr. 1","Pinocchio"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-enemy-who-became-an-ally",
    theme: "relationships",
    prompt: "Name an enemy who became an ally",
    answers: {
      1: ["Vegeta","Piccolo","Gaara","Hiei","Kurama (Yu Yu Hakusho)|Kurama|Yoko Kurama"],
      2: ["Android 18","Android 17","Majin Buu|Buu","Frieza","Nine-Tails|Kurama (Naruto)","Kabuto|Kabuto Yakushi","Obito|Obito Uchiha","Itachi|Itachi Uchiha","Orochimaru","Robin|Nico Robin","Franky","Buggy","Crocodile","Bon Clay|Mr. 2","Grimmjow","Nelliel","Renji|Renji Abarai","Byakuya|Byakuya Kuchiki","Kenpachi|Kenpachi Zaraki","Uryu|Uryu Ishida","Reiner|Reiner Braun","Annie|Annie Leonhart","Gabi|Gabi Braun","Pieck","Polnareff|Jean Pierre Polnareff","Kakyoin|Noriaki Kakyoin","Okuyasu|Okuyasu Nijimura","Jellal|Jellal Fernandes","Gajeel|Gajeel Redfox","Juvia|Juvia Lockser","Lyon|Lyon Vastia","Laxus|Laxus Dreyar","Choso","Todo|Aoi Todo","Power","Teru|Teruki Hanazawa","Dimple","Tsukasa|Tsukasa Shishio","Gen|Gen Asagiri","Nezuko|Nezuko Kamado","Tamayo","Yushiro","Kaiba|Seto Kaiba","Zabuza","Haku"],
      3: ["Ultear","Meredy","Gilthunder","Licht","Zora|Zora Ideale","Angel Devil|Angel","Beam","Sho Suzuki|Sho","Ukyo Saionji|Ukyo","Magma","Lady Nagant|Nagant","Mr. Compress","Tien|Tenshinhan","Yamcha","Zeke|Zeke Yeager"],
      4: ["Iggy","Gentle Criminal|Gentle"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-character-s-childhood-friend",
    theme: "relationships",
    prompt: "Name a character's childhood friend",
    answers: {
      1: ["Armin|Armin Arlert","Mikasa|Mikasa Ackerman","Winry|Winry Rockbell","Bakugo|Katsuki Bakugo","Ran|Ran Mori"],
      2: ["Tatsuki|Tatsuki Arisawa","Kaya","Choji|Choji Akimichi","Shikamaru|Shikamaru Nara","Ino|Ino Yamanaka","Sakura|Sakura Haruno","Obito|Obito Uchiha","Rin Nohara|Rin","Kakashi|Kakashi Hatake","Ukyo|Ukyo Kuonji","Yuno","Asta","Tsubaki|Tsubaki Sawabe","Mayuri Shiina|Mayuri","Kuroo|Tetsuro Kuroo","Kenma|Kenma Kozume","Oikawa|Tooru Oikawa","Iwaizumi|Hajime Iwaizumi","Makoto Tachibana|Makoto","Haru|Haruka Nanase","Draken|Ken Ryuguji","Baji|Keisuke Baji","Mikey|Manjiro Sano","Hinata Tachibana|Hinata (Tokyo Revengers)","Rika|Rika Orimoto","Yuta|Yuta Okkotsu","Taiju|Taiju Oki","Yuzuriha|Yuzuriha Ogawa","Sylphy|Sylphiette","Hashirama|Hashirama Senju","Madara|Madara Uchiha","Minato|Minato Namikaze","Kushina|Kushina Uzumaki","Itachi|Itachi Uchiha","Shisui|Shisui Uchiha","Rukia|Rukia Kuchiki","Renji|Renji Abarai","Gin Ichimaru|Gin","Rangiku|Rangiku Matsumoto","Toshiro|Hitsugaya","Momo Hinamori|Hinamori","Reiner|Reiner Braun","Bertholdt","Serena (Pokemon)|Serena","Gary Oak|Gary","Lelouch|Lelouch Lamperouge","Suzaku|Suzaku Kururugi","Tea Gardner|Tea|Anzu"],
      3: ["Shunsui|Shunsui Kyoraku","Ukitake|Jushiro Ukitake","Kurapika","Pairo","Riza Hawkeye|Riza","Gojo|Satoru Gojo","Geto|Suguru Geto","Shoko Ieiri|Shoko","Nanami|Kento Nanami","Haibara|Yu Haibara","Tsubomi","Kazutora|Kazutora Hanemiya","Kotomi Ichinose|Kotomi","Akari Fujisaki|Akari","Ami Kawashima|Ami","Konan","Yahiko","Isabel Magnolia|Isabel","Farlan Church|Farlan"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-member-of-a-famous-anime-family-or-clan",
    theme: "relationships",
    prompt: "Name a member of a famous anime family or clan",
    answers: {
      1: ["Uchiha|Uchiha clan","Zoldyck|Zoldyck family","Joestar|Joestar family","Forger|Forger family","Sasuke|Sasuke Uchiha","Itachi|Itachi Uchiha","Killua|Killua Zoldyck","Jotaro|Jotaro Kujo","Anya|Anya Forger","Loid|Loid Forger","Yor|Yor Forger"],
      2: ["Hyuga|Hyuga clan","Ackerman|Ackerman clan","Yeager|Yeager family","Zenin|Zenin clan","Gojo clan","Uzumaki|Uzumaki clan","Senju|Senju clan","Vinsmoke|Vinsmoke family","Charlotte family|Charlotte","Donquixote family|Donquixote","Elric|Elric brothers","Todoroki|Todoroki family","Kamado|Kamado family","Kuchiki|Kuchiki clan","Kurosaki|Kurosaki family","Sohma|Sohma family","Otsutsuki|Otsutsuki clan","Madara|Madara Uchiha","Obito|Obito Uchiha","Hinata|Hinata Hyuga","Neji|Neji Hyuga","Illumi|Illumi Zoldyck","Silva|Silva Zoldyck","Joseph|Joseph Joestar","Jonathan|Jonathan Joestar","Josuke|Josuke Higashikata","Jolyne|Jolyne Cujoh","Mikasa|Mikasa Ackerman","Levi|Levi Ackerman","Eren|Eren Yeager","Zeke|Zeke Yeager","Maki Zenin|Maki","Mai Zenin|Mai","Naoya|Naoya Zenin","Sanji","Tanjiro|Tanjiro Kamado","Nezuko|Nezuko Kamado","Byakuya|Byakuya Kuchiki","Shoto|Shoto Todoroki","Endeavor","Monkey D.|Monkey D. family","Son family|Son Goku","Briefs family|Briefs"],
      3: ["Nara|Nara clan","Akimichi|Akimichi clan","Yamanaka|Yamanaka clan","Aburame|Aburame clan","Inuzuka|Inuzuka clan","Sarutobi|Sarutobi clan","Hatake|Hatake clan","Rengoku|Rengoku family","Kocho|Kocho sisters","Tokito","Ubuyashiki|Ubuyashiki family","Shiba|Shiba clan","Kozuki|Kozuki family","Nefertari|Nefertari family","Boa sisters","Hitachiin|Hitachiin twins","Nakano|Nakano sisters|Quintuplets","Shinomiya|Shinomiya family","Reiss|Reiss family","Tybur|Tybur family","Fritz","Zeppeli|Zeppeli family","Brando","Higashikata|Higashikata family","Kurta|Kurta clan","Freecss","Britannia|vi Britannia","Ikari","Asakura|Asakura family","Kiryuin|Kiryuin family","Armstrong|Armstrong family","Tohsaka|Tohsaka family","Matou|Matou family","Einzbern","Emiya","Greyrat|Greyrat family","Hanma|Hanma family","Itoshi|Itoshi brothers","Miya|Miya twins","Hoshino|Hoshino family"],
      4: ["Shimura|Shimura family","Okumura|Okumura twins","Kosaka","Kirigaya","Tendo|Tendo family","Saotome","Furude","Sonozaki|Sonozaki family","Shiba (Mahouka)","Ijichi","Yagami"],
      5: ["Boreas","Kirishima (Tokyo Ghoul)"],
      6: []
    }
  },
  {
    id: "name-a-character-who-shares-their-body-with-another-being",
    theme: "relationships",
    prompt: "Name a character who shares their body with another being",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Yuji|Yuji Itadori","Yugi|Yugi Muto|Atem|Pharaoh","Ichigo|Ichigo Kurosaki","Gaara"],
      2: ["Denji","Killer B|Killer Bee","Asta","Hikaru Shindo|Hikaru","Kaneki|Ken Kaneki","Shinichi Izumi|Shinichi","Bakura|Ryou Bakura|Yami Bakura","Marik|Marik Ishtar","Kurama (Yu Yu Hakusho)|Shuichi Minamino","Okarun|Ken Takakura","Yoh|Yoh Asakura","Rimuru|Rimuru Tempest","Yuta|Yuta Okkotsu","Deku|Izuku Midoriya","Shigaraki|Tomura Shigaraki","Kenjaku","Zetsu","Diavolo","Megumi|Megumi Fushiguro"],
      3: ["Akira Fudo|Akira (Devilman)","Allen Walker|Allen","Sensui|Shinobu Sensui","Yuno","Lucy|Nyu (Elfen Lied)","Inner Sakura|Sakura Haruno","Emilia","Liebe"],
      4: ["Doppio|Vinegar Doppio"],
      5: [],
      6: []
    }
  },
  {
    id: "name-one-half-of-a-famous-anime-couple",
    theme: "relationships",
    prompt: "Name one half of a famous anime couple",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Hinata|Hinata Hyuga","Goku|Son Goku","Chi-Chi","Vegeta","Bulma","Sasuke|Sasuke Uchiha","Sakura|Sakura Haruno"],
      2: ["Ichigo|Ichigo Kurosaki","Orihime|Orihime Inoue","Inuyasha","Kagome|Kagome Higurashi","Loid|Loid Forger","Yor|Yor Forger","Kirito","Asuna","Edward Elric|Edward|Ed","Winry|Winry Rockbell","Kaguya|Kaguya Shinomiya","Miyuki Shirogane|Shirogane","Taiga|Taiga Aisaka","Ryuji|Ryuji Takasu","Kenshin|Himura Kenshin","Kaoru|Kaoru Kamiya","Krillin","Android 18","Gohan|Son Gohan","Videl","Minato|Minato Namikaze","Kushina|Kushina Uzumaki","Shikamaru|Shikamaru Nara","Temari","Usagi|Sailor Moon|Usagi Tsukino","Mamoru|Tuxedo Mask","Hori|Kyoko Hori","Miyamura|Izumi Miyamura","Marin|Marin Kitagawa","Wakana Gojo|Gojo (Dress-Up Darling)","Komi|Shoko Komi","Tadano|Hitohito Tadano","Tohru Honda|Tohru","Kyo Sohma|Kyo","Okabe|Rintaro Okabe","Kurisu|Kurisu Makise","Taki|Taki Tachibana","Mitsuha|Mitsuha Miyamizu","Shoko Nishimiya|Shoko","Shoya Ishida|Shoya","Mai Sakurajima|Mai","Sakuta|Sakuta Azusagawa","Zero Two","Hiro","Jellal|Jellal Fernandes","Erza|Erza Scarlet","Natsu|Natsu Dragneel","Lucy|Lucy Heartfilia","Gray|Gray Fullbuster","Juvia|Juvia Lockser","Momo Ayase|Momo","Okarun|Ken Takakura","Mitsuri|Mitsuri Kanroji","Obanai|Obanai Iguro","Tanjiro|Tanjiro Kamado","Kanao|Kanao Tsuyuri","Tsukasa Tsukuyomi|Tsukasa","Nasa Yuzaki|Nasa","Naofumi|Naofumi Iwatani","Raphtalia","Rudeus|Rudeus Greyrat","Subaru|Natsuki Subaru","Emilia","Rem","Takemichi|Takemichi Hanagaki","Hinata Tachibana"],
      3: ["Gajeel|Gajeel Redfox","Levy|Levy McGarden","Kazuya|Kazuya Kinoshita","Chizuru|Chizuru Mizuhara","Hachiman|Hachiman Hikigaya","Yukino|Yukino Yukinoshita","Roxy|Roxy Migurdia","Sylphy|Sylphiette","Fujiko|Fujiko Mine","Lupin|Lupin III","Spike|Spike Spiegel","Julia","Renji|Renji Abarai","Rukia|Rukia Kuchiki","Miroku","Sango","Holo","Lawrence|Kraft Lawrence","Tamaki Suoh|Tamaki","Haruhi Fujioka|Haruhi"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-member-of-a-famous-anime-crew-or-group",
    theme: "relationships",
    prompt: "Name a member of a famous anime crew or group",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Zoro|Roronoa Zoro","Nami","Sanji","Usopp","Naruto|Naruto Uzumaki","Sasuke|Sasuke Uchiha","Sakura|Sakura Haruno","Kakashi|Kakashi Hatake","Levi|Levi Ackerman","Mikasa|Mikasa Ackerman","Armin|Armin Arlert"],
      2: ["Chopper|Tony Tony Chopper","Robin|Nico Robin","Franky","Brook","Jinbe|Jinbei","Pain|Nagato","Konan","Deidara","Sasori","Hidan","Kakuzu","Kisame|Kisame Hoshigaki","Itachi|Itachi Uchiha","Tobi|Obito","Shikamaru|Shikamaru Nara","Ino|Ino Yamanaka","Choji|Choji Akimichi","Kiba|Kiba Inuzuka","Hinata|Hinata Hyuga","Shino|Shino Aburame","Rock Lee|Lee","Neji|Neji Hyuga","Tenten","Hange|Hange Zoe","Erwin|Erwin Smith","Jean|Jean Kirstein","Connie|Connie Springer","Sasha|Sasha Blouse","Eren|Eren Yeager","Rengoku|Kyojuro Rengoku","Giyu|Giyu Tomioka","Shinobu|Shinobu Kocho","Mitsuri|Mitsuri Kanroji","Tengen|Tengen Uzui","Sanemi|Sanemi Shinazugawa","Obanai|Obanai Iguro","Muichiro|Muichiro Tokito","Gyomei|Gyomei Himejima","Yami|Yami Sukehiro","Asta","Noelle|Noelle Silva","Magna|Magna Swing","Luck|Luck Voltia","Finral","Vanessa|Vanessa Enoteca","Erza|Erza Scarlet","Natsu|Natsu Dragneel","Gray|Gray Fullbuster","Lucy|Lucy Heartfilia","Happy","Wendy|Wendy Marvell","Chrollo|Chrollo Lucilfer","Hisoka","Feitan","Machi","Nobunaga","Uvogin","Ginyu|Captain Ginyu","Recoome","Burter","Jeice","Guldo","Jessie","James","Meowth","Spike|Spike Spiegel","Jet|Jet Black","Faye|Faye Valentine","Lupin|Lupin III","Jigen|Daisuke Jigen","Goemon","Kamina","Simon","Yoko","Hinata Shoyo|Shoyo Hinata","Kageyama|Tobio Kageyama","Daichi|Daichi Sawamura","Tanaka (Haikyu)|Ryunosuke Tanaka","Nishinoya|Yu Nishinoya","Tsukishima|Kei Tsukishima","Isagi|Yoichi Isagi","Bachira|Meguru Bachira","Chigiri|Hyoma Chigiri","Nagi|Seishiro Nagi","Mikey|Manjiro Sano","Draken","Baji|Keisuke Baji","Mitsuya|Takashi Mitsuya","Takemichi|Takemichi Hanagaki","Denji","Power","Aki|Aki Hayakawa","Himeno","Frieren","Fern","Stark","Himmel","Heiter","Eisen","Deku|Izuku Midoriya","Bakugo|Katsuki Bakugo","Todoroki|Shoto Todoroki","Ochaco|Ochaco Uraraka","Iida|Tenya Iida"],
      3: ["Kobeni","Sugawara|Koshi Sugawara","Asahi|Asahi Azumane","Yamaguchi|Tadashi Yamaguchi","Kunigami|Rensuke Kunigami","Reo|Reo Mikage","Chifuyu|Chifuyu Matsuno","Gauche","Charmy","Zora","Secre","Gordon","Shizuku (Phantom Troupe)|Shizuku","Phinks","Edward (Cowboy Bebop)|Radical Edward","Ein","Fujiko|Fujiko Mine","Tokoyami|Fumikage Tokoyami","Tsuyu|Tsuyu Asui","Momo Yaoyorozu|Momo"],
      4: [],
      5: [],
      6: []
    }
  },

  // ---------- OBJECTS ----------
  {
    id: "name-a-giant-monster-or-kaiju-from-anime",
    theme: "objects",
    prompt: "Name a monster big enough to step on a city",
    answers: {
      1: ["Kaiju No. 8|Kaiju No 8","Colossal Titan","Nine-Tails|Kurama"],
      2: ["Godzilla","Attack Titan","Armored Titan","Female Titan","Beast Titan","Ten-Tails","Shukaku|One-Tail"],
      3: ["War Hammer Titan","Jaw Titan","Cart Titan","Founding Titan","Sachiel","Ramiel","Gyuki|Eight-Tails","Ohmu","Forest Spirit|Deer God","Gigantomachia","Sea King|Deep Sea King","Kaiju No. 9","Laboon","Mahoraga"],
      4: ["Zeruel","Lilith","Adam","Matatabi|Two-Tails","Isobu|Three-Tails","Son Goku (Four-Tails)|Four-Tails","Chomei|Seven-Tails","God Warrior","Kraken|Surume","Zunesha","Kaiju No. 10"],
      5: ["Leliel","Israfel","Kokuo|Five-Tails","Saiken|Six-Tails","Daidarabotchi"],
      6: ["Gaghiel","Matarael"]
    }
  },
  {
    id: "name-a-weapon-anime-characters-fight-with-not-a-sword",
    theme: "objects",
    prompt: "Name a weapon anime characters fight with (not a sword)",
    answers: {
      1: ["Gun|Guns|Pistol","Bow|Bow and arrow|Arrow|Arrows","Scythe","Spear|Lance"],
      2: ["Chain|Chains","Fan|Giant fan|War fan","Staff|Bo staff|Power Pole","Hammer","Axe","Whip","Kunai","Shuriken","Yo-yo|Yoyo","Playing cards|Cards","Chainsaw","Slingshot","Umbrella","Knife|Dagger","Gauntlets"],
      3: ["Trident","Nunchucks|Nunchaku","Boomerang","Kusarigama|Sickle and chain","Sickle","Claws","Tonfa","Club|Kanabo","Crossbow","Shield","Naginata","Wire|Threads|Strings","Senbon|Needles","Bombs|Grenade","Cannon","Rocket launcher|Bazooka","Rifle|Sniper rifle","Wand|Magic wand","Baseball bat|Bat","Mace","Puppets","Shotgun","Revolver"],
      4: ["Sai","Flail","Harpoon","Halberd","Guitar|Bass guitar","Gunblade","Brass knuckles","Frying pan","Glaive","Chakram"],
      5: ["Meteor hammer","Rope dart","Tessen"],
      6: []
    }
  },
  {
    id: "name-a-legendary-weapon-that-has-its-own-name",
    theme: "objects",
    prompt: "Name a legendary weapon that has its own name",
    answers: {
      1: ["Tessaiga|Tetsusaiga","Zangetsu","Excalibur","Dragon Slayer|Dragonslayer"],
      2: ["Wado Ichimonji|Wado","Enma","Shusui","Samehada","Kubikiribocho|Executioner's Blade","Senbonzakura","Hyorinmaru","Elucidator","Dark Repulser","Tenseiga","Sakabato|Reverse-blade sword","Power Pole|Nyoibo","Kusanagi","Murasame","Lance of Longinus|Spear of Longinus","Nichirin Blade|Nichirin sword","Gae Bolg","Ea|Sword of Rupture","Thunder Spear"],
      3: ["Sandai Kitetsu|Kitetsu","Yoru","Inverted Spear of Heaven","Playful Cloud","Rule Breaker","Lost Vayne","Rhitta","Chastiefol","Demon-Slayer Sword","Demon-Dweller Sword","Benihime","Kyoka Suigetsu","Ryujin Jakka","Sode no Shirayuki","Zabimaru","Tensa Zangetsu","Masamune","Muramasa","Totsuka Blade","Gram","Durandal","Ame no Habakiri"],
      4: ["Gunbai","Hiramekarei","Kabutowari","Shibuki","Nuibari","Kiba (twin swords)","Katen Kyokotsu","Nozarashi"],
      5: ["Ame no Murakumo","Kogarasumaru"],
      6: []
    }
  },
  {
    id: "name-a-giant-robot-or-mech",
    theme: "objects",
    prompt: "Name a giant robot or mech",
    answers: {
      1: ["Gundam|RX-78-2|RX-78","Evangelion Unit-01|Eva Unit-01|Unit-01|EVA-01","Gurren Lagann","Mazinger Z","Voltron"],
      2: ["Zaku","Wing Zero|Wing Gundam Zero","Freedom Gundam|Freedom","Strike Freedom","Unit-02|Eva Unit-02","Unit-00|Eva Unit-00","Getter Robo","Valkyrie|VF-1 Valkyrie","Lancelot","Guren|Guren Mk-II","Strelizia","Barbatos|Gundam Barbatos","Exia|Gundam Exia","Unicorn Gundam|Unicorn","Nu Gundam","Sazabi","Zeta Gundam|Zeta","Voltes V","Tetsujin 28|Gigantor","Big O","Aerial|Gundam Aerial","Patlabor|Ingram"],
      3: ["Gunbuster","Combattler V","Daitarn 3","Grendizer","Raideen","Dancougar","Ideon","Aquarion","RahXephon","Escaflowne","Nirvash","GaoGaiGar","Arbalest","Laevatein","Mazinkaiser","Shin Getter","Scopedog","Zambot 3","Dragonar","Valvrave","Laputa robot"],
      4: ["Dunbine","L-Gaim","Layzner","Dougram","Calibarn","Gargantia Chamber|Chamber"],
      5: ["Daimos","Trider G7"],
      6: []
    }
  },
  {
    id: "name-an-anime-food-you-d-want-to-try",
    theme: "objects",
    prompt: "Name an anime food you'd want to try",
    answers: {
      1: ["Ramen|Ichiraku ramen","Onigiri|Rice ball","Dango","Meat on the bone|Meat","Katsudon"],
      2: ["Takoyaki","Taiyaki","Senzu bean","Curry|Curry rice","Omurice","Pocky","Bento|Bento box","Mochi","Gyoza|Dumplings","Okonomiyaki","Yakisoba","Sushi","Tempura","Melon bread|Melonpan","Strawberry shortcake|Shortcake","Pudding|Purin","Udon","Dorayaki","Karaage","Tonkatsu","Gyudon","Nikuman|Steamed buns|Pork buns","Bacon and eggs","Ham ramen"],
      3: ["Mapo tofu","Herring pie","Sukiyaki","Yakitori","Yakiniku","Katsu curry","Oden","Hanami dango|Three-color dango","Mitarashi dango","Tamagoyaki","Curry bread|Kare pan","Anpan","Kakigori|Shaved ice","Ramune","Cup noodles|Instant ramen","Cotton candy","Tangerines","Inari sushi","Ochazuke","Crepe","Miso soup","Hot pot|Nabe","Egg sandwich","Soba","Hamburg steak"],
      4: ["Bell peppers and beef","Transforming Furikake Gohan","Century Soup","Umeboshi","Monjayaki","Piroshky","Walking mushroom"],
      5: ["Yakisoba bread","Imagawayaki"],
      6: []
    }
  },
  {
    id: "name-a-magical-item-or-artifact-from-an-anime",
    theme: "objects",
    prompt: "Name a magical item or artifact from an anime",
    answers: {
      1: ["Death Note","Dragon Balls|Dragon Ball","Shikon Jewel|Sacred Jewel","Millennium Puzzle","Philosopher's Stone"],
      2: ["Sukuna's fingers|Sukuna finger","Silver Crystal","Clow Cards","Sakura Cards","Grimoire","Hogyoku","Devil Fruit","Holy Grail","Millennium Eye","Millennium Ring","Millennium Rod","Soul Gem","Grief Seed","Stand Arrow|Arrow","Stone Mask","Red Stone of Aja","Potara earrings|Potara","Moon Stick","Behelit","Celestial Spirit Keys|Gate keys","Lacrima","Super Dragon Balls"],
      3: ["Crimson Behelit","Levitation stone|Aetherium|Volucite","Book of Darkness","World Item","Fairy Heart","Prison Realm","Cutie Moon Rod","Black Star Dragon Balls","Command Seals","Crystal ball","Ten Commandments","Magic broom"],
      4: ["Code (Code Geass)"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-vehicle-car-ship-bike",
    theme: "objects",
    prompt: "Name an anime vehicle (car, ship, bike...)",
    answers: {
      1: ["Going Merry|Merry","Thousand Sunny|Sunny","Catbus","Flying Nimbus|Nimbus","Kaneda's bike"],
      2: ["Bebop","Swordfish II|Swordfish","AE86|Trueno","Mach 5","Kiki's broom|Broom","Saiyan pod|Attack ball","Moby Dick","Red Force","Oro Jackson","Polar Tang","Arcadia","Space Battleship Yamato|Yamato","Galaxy Express 999","Howl's Moving Castle","Tachikoma","Mehve|Nausicaa's glider","Fiat 500|Lupin's Fiat","White Base","Archangel","Macross|SDF-1","Mugen Train","Puffing Tom|Sea Train","Capsule Corp ship"],
      3: ["Waver","Mini Merry","Shark Submerge","Nadesico","Shooter (Celty's bike)|Celty's bike","Hermes (Kino's motorrad)|Hermes","Black Lagoon boat|Lagoon boat","Outlaw Star","Hammerhead","Red Tail","Nautilus","Savoia|Porco's plane"],
      4: ["Gratan","Sand steamer","Flaptor","Goliath","Tiger Moth"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-iconic-anime-outfit-or-uniform",
    theme: "objects",
    prompt: "Name an iconic anime outfit or uniform",
    answers: {
      1: ["Akatsuki cloak","Survey Corps uniform|Scout uniform","Sailor uniform|Sailor suit|Sailor fuku","Orange jumpsuit|Naruto's jumpsuit","Gi|Goku's gi|Turtle School gi"],
      2: ["Demon Slayer uniform|Demon Slayer Corps uniform","Checkered haori|Tanjiro's haori","Giyu's haori","Shinigami robes|Shihakusho","U.A. uniform|UA uniform","Gakuran|Jotaro's uniform","Forehead protector|Headband","Saiyan armor","Kamina's cape","Senketsu","Plugsuit","Spike's suit","Zero costume|Zero mask","Ouran uniform","Maid outfit","Kimono","Yukata","Jujutsu High uniform","Black Bulls robe","Luffy's red vest","Team Rocket uniform","Ed's red coat|Red coat","Marine coat|Justice coat","Saitama's hero suit"],
      3: ["Junketsu","Ashford uniform","Cardcaptor costume","Flak jacket","Hisoka's outfit","Toman uniform|Tokkofuku","Alucard's coat","Vash's coat","Kenshin's gi","Yusuke's uniform","Magical girl outfit","Lupin's jacket","Zenigata's trench coat","L's white shirt","Misa's gothic lolita","Kirito's black coat","Asuna's uniform","Tracksuit","Eden Academy uniform","Thorn Princess dress","State Military uniform|Military uniform","Gon's outfit"],
      4: ["Tatsumaki's dress","Kurapika's tabard"],
      5: [],
      6: []
    }
  },
  {
    id: "name-an-anime-gadget-or-piece-of-tech",
    theme: "objects",
    prompt: "Name an anime gadget or piece of tech",
    answers: {
      1: ["Scouter","Dragon Radar","Poke Ball|Pokeball|Pokemon ball","Capsule|Hoi-Poi capsule","ODM gear|3D Maneuver Gear|Omni-directional mobility gear"],
      2: ["Voice-changing bowtie|Bowtie|Voice changer","Pokedex","Duel Disk","NerveGear","Dominator","Phone Microwave","Time machine","Anywhere Door","Bamboo-copter|Take-copter","Gravity chamber","Den Den Mushi","Log Pose","Vivre card","Hunter License","Digivice","Beyblade","Thunder Spear","Automail","Entry plug","Kick-power shoes|Power-enhancing shoes","Stun-gun wristwatch|Wristwatch","Medical pod|Regeneration tank"],
      3: ["Amusphere","Sibyl System","Cyberbrain","Optical camouflage|Thermoptic camo","Clima-Tact","Raid Suit","Rotom Dex","Yo-kai Watch","Divergence Meter","Time Leap Machine","Seastone|Sea Prism Stone","Detective Boys badge","Tracking glasses","Skateboard","Eternal Pose","Titan serum|Titan injection"],
      4: ["IBN 5100","D-Mail","Pop Greens","Grenade gauntlets","PokeNav","D-Wheel","Gunpla"],
      5: ["Accelerator's choker|Choker"],
      6: []
    }
  },
  {
    id: "name-an-anime-organization-or-faction",
    theme: "objects",
    prompt: "Name an anime organization or faction",
    answers: {
      1: ["Akatsuki","Straw Hat Pirates|Straw Hats","Survey Corps|Scout Regiment","Team Rocket","Phantom Troupe|Spiders"],
      2: ["Hashira","Demon Slayer Corps","Gotei 13","Espada","Twelve Kizuki|Upper Moons|Lower Moons","Black Bulls","Fairy Tail","Hero Association","Toman|Tokyo Manji Gang","League of Villains","Homunculi|Homunculus","Marines|Navy","Yonko|Four Emperors","Seven Warlords|Shichibukai|Warlords","Ginyu Force","Frieza Force","Red Ribbon Army|Red Ribbon","Z Fighters","Team 7","Sannin|Legendary Sannin","Shinsengumi","Yorozuya","Black Knights","NERV","Section 9","Public Safety|Public Safety Devil Hunters","Jujutsu High","Hunter Association","Seven Deadly Sins","Golden Dawn","Host Club|Ouran Host Club","SOS Brigade","Shadow Garden","CCG","Aogiri Tree","Anteiku","Elite Four","Revolutionary Army|Revolutionaries","Whitebeard Pirates","Red Hair Pirates","Beast Pirates","Big Mom Pirates","Heart Pirates","Blackbeard Pirates","Arrancar","Visored|Vizards","Sternritter|Wandenreich","Capsule Corp|Capsule Corporation"],
      3: ["Sound Four","Taka|Hawk","Seven Ninja Swordsmen","Kara","Baroque Works","CP9|CP0|Cipher Pol","Worst Generation","Gorosei|Five Elders","Celestial Dragons","Germa 66","Arlong Pirates","Ten Commandments","Zodiacs","Warriors (Marley)|Warrior Unit","Yeagerists","Garrison","Military Police","Xcution","Zero Squad","Red Dragon Syndicate","Team Dai-Gurren|Gurren Brigade","Team Aqua","Team Magma","Team Galactic","Team Plasma","Team Skull","Floor Guardians|Nazarick","Hellsing Organization|Hellsing","Millennium","Iscariot","Special Fire Force|Company 8","White Clad","Defense Force","S-Class heroes","Monster Association","Claw","Spirits and Such","Kiheitai","Harusame","Bebop crew","SEELE"],
      4: ["Wings of Freedom","Joui faction","Dark Triad","Midnight Sun"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-ninja-weapon-or-tool",
    theme: "objects",
    prompt: "Name a ninja weapon or tool",
    answers: {
      1: ["Kunai","Shuriken","Smoke bomb","Explosive tag|Paper bomb"],
      2: ["Fuma shuriken|Windmill shuriken","Senbon|Needles","Kusarigama","Grappling hook","Scroll|Summoning scroll","Ninja wire|Wire","Kama|Sickle","Caltrops|Makibishi","Blowgun|Fukiya","Ninjato|Ninja sword","Katana","Forehead protector|Headband","Soldier pill|Food pill","Flash bomb"],
      3: ["Tanto","Shuko|Climbing claws","Tekko-kagi","Chakra blades|Chakra knives","Puppets","Poison","Flying Thunder God kunai|Three-pronged kunai","Kusari-fundo","Bo staff"],
      4: ["Kodachi","Shinobi gatana","Ninja stars"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-musical-instrument-someone-plays-in-an-anime",
    theme: "objects",
    prompt: "Name a musical instrument someone plays in an anime",
    answers: {
      1: ["Guitar|Electric guitar","Piano","Violin","Drums"],
      2: ["Bass|Bass guitar","Keyboard","Saxophone","Trumpet","Flute","Euphonium","Cello","Shamisen","Clarinet","Trombone","Tuba","Koto","Taiko"],
      3: ["Oboe","Harp","Double bass|Contrabass","Ukulele","Viola","French horn|Horn","Synthesizer","Recorder","Shakuhachi","Organ|Pipe organ","Harmonica","Ocarina","Tambourine","Turntables|DJ decks"],
      4: ["Marimba","Bassoon","Glockenspiel","Timpani","Cymbals","Xylophone","Accordion"],
      5: ["Biwa","Erhu"],
      6: []
    }
  },
  {
    id: "name-a-fantasy-creature-that-shows-up-in-anime",
    theme: "objects",
    prompt: "Name a fantasy creature that shows up in anime",
    answers: {
      1: ["Dragon","Slime","Goblin","Elf","Kitsune|Nine-tailed fox|Fox spirit"],
      2: ["Orc","Phoenix","Unicorn","Mermaid","Werewolf","Fairy","Dwarf","Oni","Kappa","Tengu","Tanuki","Yuki-onna","Griffin|Gryphon","Golem","Minotaur","Kraken","Hydra","Chimera","Wyvern","Centaur","Undead|Skeleton","Zombie","Ghoul","Cerberus","Pegasus","Vampire","Demon","Angel","Shinigami"],
      3: ["Basilisk","Harpy","Lamia","Succubus","Lich","Sea serpent","Leviathan","Behemoth","Sphinx","Cyclops","Giant","Troll","Ogre","Nekomata","Bakeneko","Jorogumo","Rokurokubi","Nue","Baku","Kirin|Qilin","Raiju","Yamata no Orochi|Orochi","Kodama","Ifrit","Djinn|Genie","Mandrake","Living armor","Gargoyle","Dullahan","Valkyrie","Salamander","Sylph","Undine","Gnome"],
      4: ["Tsuchinoko","Arachne","Kobold","Banshee","Manticore","Thunderbird"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-famous-anime-symbol-crest-or-emblem",
    theme: "objects",
    prompt: "Name a famous anime symbol, crest or emblem",
    answers: {
      1: ["Jolly Roger|Straw Hat Jolly Roger|Skull and crossbones","Leaf symbol|Hidden Leaf symbol|Konoha symbol","Wings of Freedom|Survey Corps emblem","Uchiha crest|Uchiha fan","Red cloud|Akatsuki cloud"],
      2: ["Fairy Tail emblem|Fairy Tail mark|Fairy Tail guild mark","Capsule Corp logo","Red Ribbon logo","Turtle School symbol|Kame symbol","Uzumaki spiral","Sand symbol|Hidden Sand symbol","Whitebeard Jolly Roger","Marines emblem|Marine symbol","Ouroboros","Flamel cross|Flamel","NERV logo","Geass sigil|Geass symbol","Spider tattoo|Phantom Troupe spider","Black Bulls emblem","Rose emblem|Garrison emblem","Unicorn emblem|Military Police emblem","Team Rocket R","Crescent moon|Sailor Moon crescent","L logo|Gothic L","Majin mark|Majin M","Four-leaf clover|Five-leaf clover","Senju crest","U.A. logo"],
      3: ["Team Dai-Gurren symbol","Zeon emblem","Black Knights emblem","CCG logo","Destroy kanji|Metsu kanji","Pokeball symbol","Joestar birthmark|Star birthmark","Toman emblem"],
      4: ["Kaneda's pill logo","Sound symbol|Hidden Sound symbol"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-non-human-race-or-species-from-an-anime",
    theme: "objects",
    prompt: "Name a non-human race or species from an anime",
    answers: {
      1: ["Saiyan|Saiyans","Titan|Titans","Demon|Demons","Shinigami|Soul Reaper|Soul Reapers","Hollow|Hollows","Ghoul|Ghouls"],
      2: ["Namekian|Namekians","Fishman|Fish-Men|Fishmen","Mink|Minks","Giant|Giants","Curse|Cursed spirit|Cursed spirits","Chimera Ant|Chimera Ants","Homunculus|Homunculi","Devil|Devils","Kaiju","Angel|Angels","Arrancar","Quincy","Elf|Elves","Pokemon","Digimon","Yokai|Youkai","Vampire|Vampires","Tailed Beast|Bijuu","Otsutsuki","Beastmen|Beastfolk","Merfolk|Mermaid|Mermaids","Androids","Half-demon|Hanyou","Oni"],
      3: ["Majin","Skypiean|Skypieans","Lunarian","Ajin","Eldian|Subjects of Ymir","Witches (Madoka)|Witch","Zentradi","Newtype","Coordinator","Monster girl","Dwarves","Lizardmen","Exceed","Etherious","Celestial Spirit","Dragonewt","Kijin|Ogre","Mod Soul","Menos Grande","Undead","Long-arm tribe","Ayakashi","Shandian","Arcosian|Frieza race"],
      4: ["Tuffle|Tuffles","Bount","Innovator"],
      5: ["Tsufurujin|Tsufuru"],
      6: []
    }
  },
  {
    id: "name-a-famous-title-or-nickname-a-character-goes-by",
    theme: "objects",
    prompt: "Name a famous title or nickname a character goes by",
    answers: {
      1: ["Pirate Hunter","Copy Ninja","Fullmetal Alchemist|Fullmetal","Humanity's Strongest|Humanity's Strongest Soldier","Kira","Straw Hat","Symbol of Peace"],
      2: ["Hokage","Yellow Flash","Flame Alchemist","Hero Killer","Strongest Sorcerer|The Strongest","King of Curses","Black Swordsman","Hitokiri Battosai|Battosai","Humanoid Typhoon|Vash the Stampede","Caped Baldy","Prince of All Saiyans","Legendary Super Saiyan","Fire Fist","Red Hair|Red-Haired","Hawk-Eye|Hawk Eyes","Black Leg","Cat Burglar","Sniper King|Sogeking","Demon Child","Soul King","Surgeon of Death","Sage of Six Paths","God of Shinobi|The Professor","Toad Sage","White Fang","Demon of the Hidden Mist","Green Beast|Blue Beast","Kazekage","Raikage","Yonko|Emperor","Admiral","Warlord","Sun God Nika|Nika","Terrible Tornado","Demon Cyborg","Silver Fang","Number One Hero|No. 1 Hero","Ground Zero","Deku","Uravity","Froppy","Ingenium","Red Riot","Eraser Head","Present Mic","Hawks","Twilight","Thorn Princess","King of Heroes","King of Knights","JoJo","Titania|Queen of the Fairies","Salamander","Wizard King","King of Games","Little Giant","King of the Court","Great King","Generation of Miracles","Pharaoh","Eyepatch","One-Eyed King","Shadow"],
      3: ["Speed-o'-Sound Sonic","Puri-Puri Prisoner","Child Emperor","Atomic Samurai","Tank-top Master","Flashy Flash","Hero Hunter","Blizzard of Hell","Best Jeanist","Mirko","Lemillion","Suneater","Creati","Chargebolt","Golden Lion","Thunder God|God Enel","Head Captain","Fleet Admiral","Sorcerer King","Demon Lord","White Reaper","Black Reaper","Centipede","Rabbit","Mizukage","Tsuchikage","Kenpachi","Phantom Sixth Man","Emperor (Kuroko)"],
      4: ["Slug Princess|Legendary Sucker","Knight of the Sea","Cotton Candy Lover"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-real-world-animal-that-gets-a-starring-role-in-an-anime",
    theme: "objects",
    prompt: "Name a real-world animal that gets a starring role in an anime",
    answers: {
      1: ["Cat","Dog","Wolf","Fox"],
      2: ["Rabbit|Bunny","Tanuki|Raccoon dog","Bear","Penguin","Panda","Pig","Hamster","Horse","Crow","Turtle","Frog","Monkey","Lion","Tiger","Deer","Owl","Fish|Goldfish"],
      3: ["Polar bear","Red panda","Raccoon","Otter","Snake","Bat","Shark","Whale","Dolphin","Mouse","Squirrel","Boar","Hawk|Eagle","Gorilla","Sheep","Chicken","Duck","Crab","Octopus","Bee","Spider","Hedgehog","Lizard","Elephant"],
      4: ["Walrus","Sea otter","Alpaca","Capybara","Axolotl","Ferret","Seal","Giraffe","Zebra","Koala","Sloth","Goat","Cow","Hippo","Pigeon","Parrot"],
      5: ["Platypus","Okapi","Pangolin","Mole","Armadillo"],
      6: []
    }
  },
  {
    id: "name-a-famous-anime-transformation-or-power-up-form",
    theme: "objects",
    prompt: "Name a famous anime transformation or power-up form",
    answers: {
      1: ["Super Saiyan","Bankai","Gear 5|Gear Fifth","Sage Mode","Ultra Instinct"],
      2: ["Super Saiyan Blue|SSJ Blue|Super Saiyan God","Super Saiyan 2","Super Saiyan 3","Super Saiyan 4","Kaio-ken|Kaioken","Great Ape|Oozaru","Golden Frieza","Ultra Ego","Beast Gohan|Gohan Beast","Gear 2|Gear Second","Gear 3|Gear Third","Gear 4|Gear Fourth|Boundman","Nine-Tails Chakra Mode|Kurama Mode|Kyubi Mode","Baryon Mode","Six Paths Sage Mode","Curse Mark","Susanoo","Eight Gates|Eight Inner Gates","Hollow mask|Hollowfication","Resurreccion","Shikai","Titan form|Titan shifting","Godspeed","Adult Gon","Mangekyo Sharingan","Domain Expansion","Majin Vegeta","Mystic Gohan|Ultimate Gohan","Devil Union|Black Asta","Dragon Force","Satan Soul|Take Over","The One|Escanor's The One"],
      3: ["Vollstandig","Fullbring","Demon Slayer Mark","Kakuja","Berserker Armor","Gold Experience Requiem|Requiem","Made in Heaven|Over Heaven","Trans-Am","SEED Mode","???%|100%","Serious Mode|Serious Series","Cosmic Garou|Awakened Garou","Super Saiyan Rage","Super Saiyan Rose","Legendary Super Saiyan","Moon Prism Power","Senketsu Kisaragi"],
      4: ["Hyper Mode","Assault Mode","Free Mind"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-famous-mark-or-tattoo-on-a-character-s-body",
    theme: "objects",
    prompt: "Name a famous mark or tattoo on a character's body",
    answers: {
      1: ["Sukuna's marks|Sukuna markings","Curse Mark","Brand of Sacrifice","Whisker marks|Naruto's whiskers","Fairy Tail guild mark|Guild mark"],
      2: ["Ace's tattoo|ASCE tattoo","Spider tattoo","Gaara's love kanji|Love tattoo","Kiba's fang marks","Command Seals","Demon Slayer Mark","Hisoka's star and teardrop","Byakugo seal|Tsunade's diamond","Caged Bird Seal","Joestar birthmark|Star birthmark","Ouroboros tattoo","Eight Trigrams Seal|Nine-Tails seal","Law's tattoos|DEATH tattoo","Majin mark|Majin M","Krillin's forehead dots","Sesshomaru's crescent moon","Ulquiorra's tear lines","Renji's tattoos","Hisagi's 69 tattoo|69 tattoo","Jellal's face tattoo","Espada tattoo|Espada number","Kenjaku's stitches|Stitches"],
      3: ["Jinbe's sun tattoo|Sun Pirates mark","Celestial Dragon brand|Hoof of the Soaring Dragon","Marik's back tattoo","Meliodas' demon mark","Alucard's glove seal","Sailor Moon crescent","Tanjiro's forehead mark"],
      4: ["Choso's nose mark"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-signature-attack-someone-shouts",
    theme: "objects",
    prompt: "Name a signature attack someone shouts",
    answers: {
      1: ["Kamehameha","Spirit Bomb|Genki Dama","Final Flash","Death Ball|Supernova","Rasengan","Chidori","Getsuga Tensho","Gum-Gum Pistol|Gomu Gomu no Pistol","Detroit Smash"],
      2: ["Galick Gun","Big Bang Attack","Hakai|Destruction","Chibaku Tensei","Hollow Purple|Purple","Serious Punch|Serious Series","Explosion","Giga Drill Break","Black Flash","Special Beam Cannon","Destructo Disc|Kienzan","Solar Flare|Taiyoken","Masenko","Rasenshuriken","Amaterasu","Shinra Tensei","Fireball Jutsu|Great Fireball","Water Surface Slash","Hinokami Kagura","Thunderclap and Flash","Spirit Gun|Rei Gun","Ora Ora|ORA ORA ORA","Muda Muda|MUDA MUDA","Za Warudo|The World","Unlimited Blade Works","Gate of Babylon","Pegasus Meteor Fist","Hundred Crack Fist|Hokuto Hyakuretsu Ken","Thunderbolt","Fire Dragon's Roar","Fairy Law","Rocket Punch","Cero","Jajanken","Fire Fist|Hiken","Diable Jambe","Oni Giri|Onigiri (Zoro)","Red Hawk","King Kong Gun","United States of Smash","Howitzer Impact","Shadow Possession","Eight Trigrams 64 Palms","Leaf Hurricane","Kamui","Tsukuyomi","Infinite Tsukuyomi","Reversal Red|Red","Lapse Blue|Blue","Unlimited Void","Malevolent Shrine","Dismantle","Cleave","Divergent Fist","Boogie Woogie","Dragon Fist","Tri-Beam","Hellzone Grenade","Death Beam","Hyper Beam"],
      3: ["Final Kamehameha","Father-Son Kamehameha","Super Kamehameha","Fuga","World Cutting Slash","Tailed Beast Bomb|Bijuu Dama","Truth-Seeking Ball","Third Impact","Enuma Elish|Ea","Collapsing Star Roaring Cannon","Made in Heaven","Gura Gura no Mi|Quake","Gran Rey Cero","Senbonzakura Kageyoshi","Sunlight Yellow Overdrive","Emerald Splash","Diamond Dust","Galaxian Explosion","Lightning Plasma","Asura","Bajrang Gun","Delaware Smash","AP Shot","Prominence Burn","Primary Lotus","Night Guy","Kirin","Sexy Jutsu","Resonance","Ratio Technique","Black Coffin|Kurohitsugi","Final Getsuga Tensho|Mugetsu","Shunko","Byakurai","Dodon Ray","Burning Attack","Zanka no Tachi"],
      4: ["Final Shine Attack","Big Bang Kamehameha","Planet Burst","Vanishing Ball","Eraser Cannon","Gigantic Meteor","Solar Kamehameha","FLEIJA","Miniature Rose","Infinite Big Bang Storm","Raigo"],
      5: ["Supernova Cooler","Fallen Down","Colony Drop|Axis Drop","Colony Laser"],
      6: ["Kill Driver"]
    }
  },
  {
    id: "name-a-sport-or-game-anime-characters-compete-in",
    theme: "objects",
    prompt: "Name a sport or game anime characters compete in",
    answers: {
      1: ["Volleyball","Basketball","Soccer|Football","Baseball","Tennis","Boxing"],
      2: ["Swimming","Shogi","Go","Chess","Card games|Duel Monsters|Yu-Gi-Oh","Pokemon battles|Pokemon","Beyblade","Karuta","Rugby","American football","Figure skating|Ice skating","Cycling|Bike racing","Racing|Street racing|Car racing","Table tennis|Ping pong","Badminton","Kendo","Judo","Karate","Wrestling|Pro wrestling","Sumo","Martial arts","Golf","Mahjong","Poker","Archery|Kyudo","Track|Running|Track and field","Skateboarding","Esports|Video games","Cooking battles|Cooking","Dance|Dancing","Ballroom dancing","Handball","Rock paper scissors|Janken","Gambling","Billiards|Pool","Gymnastics"],
      3: ["Bowling","Darts","Skiing","Surfing","Snowboarding","Ice hockey|Hockey","Water polo","Kabaddi","Fencing","Horse racing","Dodgeball","Arm wrestling","Bodybuilding","Fishing","Rowing","Climbing|Bouldering","Cheerleading","Hanafuda","Othello|Reversi"],
      4: [],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-famous-anime-house-castle-or-building",
    theme: "objects",
    prompt: "Name a famous anime house, castle or building",
    answers: {
      1: ["Kame House","Capsule Corp|Capsule Corporation","Howl's Moving Castle","U.A. High|UA"],
      2: ["The bathhouse|Aburaya|Spirited Away bathhouse","Las Noches","Fairy Tail guild hall|Fairy Tail guild","Nazarick|Great Tomb of Nazarick","Marineford","Impel Down","Enies Lobby","Whole Cake Chateau","Baratie","Laputa","Grace Field House|Grace Field","Hokage Mansion|Hokage building","Hokage Rock|Hokage Monument","Kami's Lookout|Lookout","Hyperbolic Time Chamber|Room of Spirit and Time","Jujutsu High","Anteiku","Infinity Castle","Butterfly Mansion","Heaven's Arena","Zoldyck mansion|Testing Gate","Castle Utgard","Black Bulls hideout","NERV HQ|NERV","Tokyo Tower","Honnouji Academy","Roswaal Mansion","Totoro house|Kusakabe house","Satsuki and Mei's house","Ouran Academy|Ouran","Ichiraku Ramen|Ichiraku","Thriller Bark","Kiki's bakery|Gutiokipanja"],
      3: ["Shibuya Station","Seireitei","Muken","Gravity room","Cafe Leblanc|Leblanc","Rabbit House","Wall Maria","Survey Corps HQ","Orange Star High","Babidi's ship","Akatsuki hideout","Valley of the End"],
      4: [],
      5: [],
      6: []
    }
  },

  // ---------- SETTINGS ----------
  {
    id: "name-a-fictional-village-city-or-kingdom-from-an-anime",
    theme: "settings",
    prompt: "Name a fictional village, city or kingdom from an anime",
    answers: {
      1: ["Hidden Leaf Village|Konoha|Konohagakure|Leaf Village","Soul Society","Paradis Island|Paradis","Wano|Wano Country","Amestris","Namek|Planet Namek"],
      2: ["Hidden Sand Village|Sunagakure|Suna","Hidden Mist Village|Kirigakure","Hidden Cloud Village|Kumogakure","Hidden Stone Village|Iwagakure","Marineford","Alabasta|Arabasta","Skypiea","Water 7","Dressrosa","Fishman Island","Enies Lobby","Impel Down","Mary Geoise","Shiganshina","Trost","Marley","Liberio","Hueco Mundo","Seireitei","Karakura Town","Magnolia","Fiore","Clover Kingdom","Britannia","Neo-Tokyo|Neo Tokyo","Musutafu","Yorknew City|Yorknew","Whale Island","Greed Island","Central City","Resembool","Xing","Ishval","Laputa","Valley of the Wind","Tokyo-3","Morioh|Morioh-cho","Pallet Town","Kanto (Pokemon)|Kanto","Johto","Hoenn","Sinnoh","Alola","Digital World","Planet Vegeta","West City","Satan City","Kami's Lookout|Lookout","Mount Paozu|Mt. Paozu","Tempest|Jura Tempest Federation","Nazarick|Great Tomb of Nazarick","Aincrad","Grace Field House|Grace Field","Liones","Fuyuki|Fuyuki City","Academy City","Hinamizawa"],
      3: ["Las Noches","Hosu","Meteor City","East Gorteau","Xerxes","Liore|Lior","Dublith","Iron Town|Irontown","Koriko","GeoFront","Neo Venezia","Green Dolphin Street Prison","Cerulean City","Snake Way","King Kai's planet","E-Rantel","Lugunica","Axel","Town of Beginnings","Alfheim","Midland","Falconia","Eldia","Camelot","Mitakihara","Wall Maria","Wall Rose","Wall Sina","Otogakure|Hidden Sound Village"],
      4: ["Alubarna","Loguetown","Syrup Village","Cocoyasi Village","Foosha Village|Windmill Village","Sabaody Archipelago|Sabaody","Thriller Bark","Punk Hazard","Zou","Whole Cake Island","Egghead"],
      5: ["Tequila Wolf","Drum Island","Jaya","Little Garden"],
      6: []
    }
  },
  {
    id: "name-a-school-or-academy-from-an-anime",
    theme: "settings",
    prompt: "Name a school or academy from an anime",
    answers: {
      1: ["U.A. High|UA|U.A. High School","Jujutsu High|Tokyo Jujutsu High","Ouran Academy|Ouran|Ouran High School","Hope's Peak Academy|Hope's Peak","Shuchiin Academy|Shuchiin"],
      2: ["Eden Academy","Karasuno|Karasuno High","Aoba Johsai|Seijoh","Nekoma","Shiratorizawa","Teiko","Seirin","Shohoku","Kunugigaoka|Class 3-E","Ashford Academy|Ashford","Totsuki|Totsuki Academy","Hyakkaou|Hyakkaou Academy","Kyoto Jujutsu High|Kyoto school","Ninja Academy|Konoha Academy","Shin'o Academy|Spirit Arts Academy","DWMA|Death Weapon Meister Academy","Honnouji Academy|Honnouji","Advanced Nurturing High School|Kodo Ikusei","Shujin Academy"],
      3: ["Sakuragaoka|Sakuragaoka High","Kitakou|North High","Otonokizaka","Seigaku|Seishun Gakuen","Iwatobi","Rakuzan","Shutoku","Kaijo","Too Academy|Touou","Inarizaki","Fukurodani","Yasogami High","Gekkoukan","Ohtori Academy|Ohtori","Babyls","Raimon","Seido"],
      4: ["Kamiyama High|Kamiyama","Sobu High|Sobu","Nanamori","Shiketsu","Rikkai","Hyotei","Samezuka","Uranohoshi"],
      5: ["Lillian Girls' Academy|Lillian","Ketsubutsu","Nijigasaki"],
      6: []
    }
  },
  {
    id: "name-a-school-club-from-an-anime",
    theme: "settings",
    prompt: "Name a school club from an anime",
    answers: {
      1: ["Volleyball club","Host Club","Light Music Club","Basketball club"],
      2: ["SOS Brigade","Classics Club|Classic Literature Club","Service Club|Volunteer Service Club","Occult Club|Occult Research Club","Go-Home Club","Kendo club","Swim club|Swimming club","Tennis club","Baseball club","Soccer club|Football club","Concert band|Brass band","Drama club|Theater club","Art club","Cooking club","Karuta club","Archery club|Kyudo club","Track club|Track and field club","Literature club","Go club","Student council"],
      3: ["Photography club","Manga club","Anime club","Tea ceremony club","Judo club","Karate club","Boxing club","American football club","Cycling club","Badminton club","Table tennis club|Ping pong club","Camping club|Outdoor activities club","Astronomy club","Science club","Mahjong club","Shogi club","Choir|Chorus club","School idol club|Idol club","Film club|Movie club","Newspaper club","Broadcasting club","Gardening club","Disciplinary committee","Home economics club","Cheerleading club|Cheer club","Dance club"],
      4: ["Neighbors Club","Amusement Club","Sumo club","Mountain climbing club|Climbing club","Robotics club"],
      5: [],
      6: []
    }
  },
  {
    id: "name-a-classic-anime-episode-setting",
    theme: "settings",
    prompt: "Name a classic anime episode setting",
    answers: {
      1: ["Beach|Beach episode","Hot springs|Onsen|Hot spring","Summer festival|Festival|Matsuri","School festival|Culture festival|Cultural festival"],
      2: ["Sports festival|Sports day","School trip|Field trip","Christmas|Christmas party","New Year's shrine visit|Shrine visit|Shrine|New Year's","Fireworks|Fireworks festival","Pool|Swimming pool","Training camp","Karaoke","Amusement park|Theme park","Test of courage|Haunted house","Valentine's Day","Rooftop|School rooftop","Maid cafe"],
      3: ["Halloween","Cherry blossom viewing|Hanami","Tanabata","Ski trip|Snow","Camping|Camping trip","Sleepover","Arcade","Birthday party|Birthday","Aquarium","Zoo","Graduation","Deserted island|Island","Wedding","Hospital","Countryside|Grandma's house","Shopping mall|Mall","Cafeteria","Movie theater","Bathhouse|Sento"],
      4: ["White Day","Entrance ceremony","Bowling alley|Bowling","Library","Train ride|Train"],
      5: ["Moon-viewing|Tsukimi","Obon"],
      6: []
    }
  },
  {
    id: "name-a-real-place-in-japan-that-shows-up-in-anime",
    theme: "settings",
    prompt: "Name a real place in Japan that shows up in anime",
    answers: {
      1: ["Tokyo","Kyoto","Shibuya","Akihabara","Osaka","Shinjuku"],
      2: ["Ikebukuro","Harajuku","Roppongi","Odaiba","Tokyo Tower","Tokyo Skytree|Skytree","Mount Fuji|Mt. Fuji|Fuji","Hokkaido","Okinawa","Hiroshima","Nagasaki","Kamakura","Yokohama","Kobe","Nara","Enoshima","Hakone","Nagoya","Sapporo","Fukuoka","Sendai","Miyagi","Kabukicho","Asakusa","Ueno","Shimokitazawa|Shimokita","Chiba","Saitama","Ginza","Shibuya Crossing","Rainbow Bridge","Fushimi Inari"],
      3: ["Nagano","Hida|Takayama","Gifu","Shirakawa-go","Chichibu","Shizuoka","Yamanashi","Kyushu","Shikoku","Tsukiji","Kichijoji","Koenji","Nakano|Nakano Broadway","Suginami","Mitaka","Izu","Nikko","Dotonbori","Kansai","Himeji","Uji","Kiyomizu-dera","Kinkaku-ji|Golden Pavilion","Arashiyama","Tokyo Bay","Kanagawa","Aomori","Kanazawa"],
      4: ["Onomichi","Oarai","Numazu","Lake Motosu","Tama|Tama New Town","Kumamoto","Kure","Gunkanjima|Hashima","Yakushima","Iwate","Atami"],
      5: ["Washinomiya","Takehara","Seiseki-Sakuragaoka","Hitoyoshi","Iwami"],
      6: []
    }
  },
  {
    id: "name-a-post-apocalyptic-anime",
    theme: "settings",
    prompt: "Name a post-apocalyptic anime",
    answers: {
      1: ["Attack on Titan","Akira","Fist of the North Star|Hokuto no Ken","Dr. Stone"],
      2: ["Nausicaa of the Valley of the Wind|Nausicaa","Trigun","Girls' Last Tour|Shoujo Shuumatsu Ryokou","The Promised Neverland|Promised Neverland","Seraph of the End|Owari no Seraph","Neon Genesis Evangelion|Evangelion|Eva","Gurren Lagann|Tengen Toppa Gurren Lagann","Highschool of the Dead","Kabaneri of the Iron Fortress|Kabaneri","From the New World|Shinsekai Yori","Darling in the Franxx","Fire Force","Deadman Wonderland","Black Bullet"],
      3: ["Deca-Dence","Coppelion","Blame!","No. 6","Ergo Proxy","Wolf's Rain","Future Boy Conan","Casshern Sins","Knights of Sidonia","Desert Punk|Sunabozu","Now and Then, Here and There","Shangri-La","Sora no Woto","Battle Angel Alita|Gunnm","Terra Formars","School-Live|Gakkou Gurashi","Kemono Friends"],
      4: ["After War Gundam X|Gundam X","Turn A Gundam","Sakugan","Arknights"],
      5: ["Yokohama Kaidashi Kikou"],
      6: []
    }
  },
  {
    id: "name-an-anime-set-in-tokyo",
    theme: "settings",
    prompt: "Name an anime set in Tokyo",
    answers: {
      1: ["Jujutsu Kaisen|JJK","Tokyo Ghoul","Tokyo Revengers","Chainsaw Man","Your Name|Kimi no Na wa","Death Note"],
      2: ["Akira","Steins","Gate|Steins Gate","Durarara|Durarara!!","Bocchi the Rock|Bocchi the Rock!","Kaiju No. 8","Dandadan|Dan Da Dan","Sailor Moon","Weathering With You","Tokyo Godfathers","Fire Force","Oshi no Ko|[Oshi No Ko]","Tokyo Mew Mew","March Comes in Like a Lion","Perfect Blue","Paprika","Psycho-Pass","Persona 5","Kaguya-sama|Kaguya-sama: Love Is War","Zom 100","Detective Conan|Case Closed","Whisper of the Heart","Bakuman","Wotakoi","Shirobako","Neon Genesis Evangelion|Evangelion"],
      3: ["Tokyo Ravens","Ikebukuro West Gate Park","Tokyo Babylon","Tokyo Magnitude 8.0","Tokyo 24th Ward","Toilet-bound Hanako-kun|Hanako-kun","Mieruko-chan","Sword Art Online|SAO","Horimiya"],
      4: [],
      5: [],
      6: []
    }
  },

  // ---------- SHOWS ----------
  {
    id: "name-an-anime-with-a-tournament-arc",
    theme: "shows",
    prompt: "Name an anime with a tournament arc",
    answers: {
      1: ["Dragon Ball|Dragon Ball Z|DBZ","Naruto","Yu Yu Hakusho","My Hero Academia|MHA|Boku no Hero Academia","Hunter x Hunter|HxH"],
      2: ["One Piece","Fairy Tail","Jujutsu Kaisen|JJK","Pokemon","Yu-Gi-Oh|Yugioh","Kengan Ashura","Baki","Shaman King","Dragon Ball Super|DBS","The Seven Deadly Sins|Seven Deadly Sins","Black Clover","Record of Ragnarok","Beyblade","History's Strongest Disciple Kenichi|Kenichi","One-Punch Man|One Punch Man","Saint Seiya","Inazuma Eleven","Ranma 1/2|Ranma"],
      3: ["Sword Art Online|SAO","Kinnikuman|Ultimate Muscle","Katekyo Hitman Reborn|Reborn","Bakugan","Cardfight Vanguard|Vanguard","World Trigger","Food Wars|Shokugeki no Soma","Zatch Bell","Hinomaru Sumo","Medaka Box","Air Gear","Tenjho Tenge"],
      4: ["Juni Taisen","Battle Game in 5 Seconds","Tougen Anki"],
      5: ["Queen's Blade"],
      6: []
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

// =========================================================
//  CATALOG PROMPTS — answered from catalog.js (~7,000 anime)
//  Every anime that fits counts. Rarity comes from real popularity:
//  the most-watched fits are Common, the least-watched are Deep Cuts.
//
//  where: { years:[from,to], genre:id|[ids], studio:id|[ids],
//           notStudio:id, type:0 TV|1 movie|2 OVA|3 web, minEps:n }
//  nameTest: only titles passing this test count (for word prompts)
//  Genre and studio ids come from catalog.js (CATALOG.genres / .studios).
//  hard: true shows the HARD badge and puts the prompt last in the Daily.
// =========================================================

const words = (n) => n.split(/[^A-Za-z0-9']+/).filter(Boolean);
const titleHas = (re) => (n) => re.test(n);

const CATALOG_PROMPTS = [
  // ---------- SETTINGS ----------
  { theme: "settings", prompt: "Name an anime set mostly at a high school", where: { genre: 23 } },
  { theme: "settings", prompt: "Name an anime set in space", where: { genre: 29 } },
  { theme: "settings", prompt: "Name an anime set at a workplace", where: { genre: 48 } },
  { theme: "settings", prompt: "Name an anime set in the past", where: { genre: 13 } },
  { theme: "settings", prompt: "Name an anime where someone ends up in another world", where: { genre: 62 } },
  { theme: "settings", prompt: "Name an anime set during a war", where: { genre: 38 } },
  { theme: "settings", prompt: "Name an anime with monsters or magic hiding in a modern city", where: { genre: 82 } },
  { theme: "settings", prompt: "Name an anime set in the age of samurai", where: { genre: 21 } },
  { theme: "settings", prompt: "Name an anime set inside a video game", where: { genre: 79 } },
  { theme: "settings", prompt: "Name an anime where characters fight to survive", where: { genre: 76 } },
  { theme: "settings", prompt: "Name an anime set in a fantasy world", where: { genre: 10 } },
  { theme: "settings", prompt: "Name an anime set around cooking and food", where: { genre: 47 } },
  { theme: "settings", prompt: "Name an anime set among street gangs or delinquents", where: { genre: 55 } },
  { theme: "settings", prompt: "Name an anime full of ghosts, spirits or the supernatural", where: { genre: 37 } },
  { theme: "settings", prompt: "Name an anime about a big journey or adventure", where: { genre: 2 } },

  // ---------- SHOWS ----------
  { theme: "shows", prompt: "Name an action anime", where: { genre: 1 } },
  { theme: "shows", prompt: "Name an anime from the 1990s", where: { years: [1990, 1999] } },
  { theme: "shows", prompt: "Name an anime from the 2000s", where: { years: [2000, 2009] } },
  { theme: "shows", prompt: "Name an anime from the 2010s", where: { years: [2010, 2019] } },
  { theme: "shows", prompt: "Name an anime that first aired in 2020 or later", where: { years: [2020, 2100] } },
  { theme: "shows", prompt: "Name a sports anime", where: { genre: 30 } },
  { theme: "shows", prompt: "Name a romance anime", where: { genre: 22 } },
  { theme: "shows", prompt: "Name a horror anime", where: { genre: 14 } },
  { theme: "shows", prompt: "Name a mecha (giant robot) anime", where: { genre: 18 } },
  { theme: "shows", prompt: "Name an anime that'll make you cry", where: { genre: 8 } },
  { theme: "shows", prompt: "Name a music or band anime", where: { genre: 19 } },
  { theme: "shows", prompt: "Name a mystery anime", where: { genre: [7, 39] } },
  { theme: "shows", prompt: "Name a sci-fi anime", where: { genre: 24 } },
  { theme: "shows", prompt: "Name a comedy anime", where: { genre: 4 } },
  { theme: "shows", prompt: "Name a slice-of-life anime", where: { genre: 36 } },
  { theme: "shows", prompt: "Name a psychological thriller anime", where: { genre: 40 } },
  { theme: "shows", prompt: "Name an anime with superpowers", where: { genre: 31 } },
  { theme: "shows", prompt: "Name an anime movie", where: { type: 1 } },
  { theme: "shows", prompt: "Name an anime with 100 or more episodes", where: { minEps: 100 } },
  { theme: "shows", prompt: "Name an anime with a one-word title", nameTest: (n) => words(n).length === 1 && n.length > 2 },
  { theme: "shows", prompt: "Name an anime with a number in its title", nameTest: titleHas(/\d/) }
];

if (typeof module !== "undefined") module.exports = { THEMES, QUESTIONS, TIERS, CATALOG_PROMPTS };
