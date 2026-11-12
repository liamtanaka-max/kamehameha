// =========================================================
//  QUESTION BANK
//  Tiers: 1 Common, 2 Uncommon, 3 Rare, 4 Epic, 5 Legendary, 6 Deep Cut
//  Each answer is a string. Use "|" to list alternate names/spellings:
//    "Zoro|Roronoa Zoro"  -> either one counts.
//  Capitals, spaces and punctuation are ignored when matching.
//  Close typos get a "Did you mean...?" prompt.
//  To add a question, copy one block and edit it.
// =========================================================

// Hand-written prompts: characters, attacks, powers and other things the
// anime catalog can't answer. (Title prompts like "a 2010s anime" are
// generated from catalog.js — see CATALOG_PROMPTS below.)
const QUESTIONS = [
  {
    prompt: "Name an anime villain",
    answers: {
      1: ["Frieza|Freeza","Aizen|Sosuke Aizen","Dio|Dio Brando","Sukuna|Ryomen Sukuna","Muzan|Muzan Kibutsuji"],
      2: ["Madara|Madara Uchiha","Light Yagami|Light|Kira","All For One","Shigaraki|Tomura Shigaraki","Griffith|Femto","Orochimaru","Pain|Nagato","Cell","Majin Buu|Buu|Kid Buu","Makima","Itachi|Itachi Uchiha","Geto|Suguru Geto","Akaza","Team Rocket|Jessie|James","Blackbeard|Marshall D. Teach","Naraku"],
      3: ["Meruem","Hisoka","Chrollo|Chrollo Lucilfer","Kaido","Doflamingo|Donquixote Doflamingo","Akainu|Sakazuki","Crocodile","Enel|Eneru","Rob Lucci|Lucci","Arlong","Buggy","Big Mom|Charlotte Linlin","Father","Envy","King Bradley|Wrath","Mahito","Kenjaku","Toji|Toji Fushiguro","Douma|Doma","Kokushibo","Yhwach","Ulquiorra|Ulquiorra Cifer","Grimmjow","Gin Ichimaru","Yoshikage Kira","Diavolo","Pucci|Enrico Pucci","Boros|Lord Boros","Garou","Zeke|Zeke Yeager","Giovanni","Overhaul|Kai Chisaki","Stain|Hero Killer Stain","Dabi","Toga|Himiko Toga","Broly","Goku Black","Zamasu","Raditz","Aura|Aura the Guillotine","Isabella|Mama Isabella","Obito|Obito Uchiha|Tobi"],
      4: ["Johan|Johan Liebert","Pride","Lust","Greed","Kimblee|Solf J. Kimblee","Shou Tucker|Tucker","Shishio|Makoto Shishio","Esdeath","Char Aznable|Char","Toguro|Younger Toguro","Zeref","Bondrewd","Kars","Wamuu","Funny Valentine","Raoh","Kaguya|Kaguya Otsutsuki","Kabuto|Kabuto Yakushi","Gendo|Gendo Ikari","Vicious","Knives|Millions Knives","Marik|Yami Marik","Yami Bakura|Bakura","Pegasus|Maximillion Pegasus","Petelgeuse|Betelgeuse","Ragyo|Ragyo Kiryuin","Reze","Jogo","Rui","Gyutaro","Daki","Enmu","Kenny|Kenny Ackerman","Illumi|Illumi Zoldyck","Neferpitou|Pitou","Uvogin","Feitan","Twice","Janemba","Cooler","Baby","Dr. Gero|Gero","Babidi","Dabura","King Piccolo","Nappa","Imu","Moria|Gecko Moria","Queen Beryl","Captain Kuro|Kuro"],
      5: ["Hao|Hao Asakura","Sensui|Shinobu Sensui","Acnologia","Enishi|Yukishiro Enishi","Muska","Gotou|Goto","Zodd|Nosferatu Zodd","The Major|Major","Sailor Galaxia|Galaxia","Myotismon|Vamdemon","Devimon","Lordgenome","Nui Harime|Nui","Esidisi","Vanilla Ice","Peter Ratri","Honest|Prime Minister Honest","Rod Reiss","Willy Tybur","Satan","Hanami","Uraume","Dagon","Hantengu","Gyokko","Nakime","Kaigaku","Gigantomachia","Re-Destro","Muscular","Barragan|Baraggan","Szayelaporro","Starrk|Coyote Starrk","Ginjo|Kugo Ginjo","Momoshiki|Momoshiki Otsutsuki","Hody Jones|Hody","Caesar Clown","Don Krieg|Krieg","Moro","Omega Shenron","Orochi","Psykos","Toichiro Suzuki","Charles zi Britannia|Charles","Macht","Qual","Lugner","Linie","Kaiju No. 9","Santa Claus","Katana Man","Gun Devil","Acrobatic Silky|Acro Silky","Hikaru Kamiki","Antares","Nobunaga","Yamori|Jason"],
      6: ["Baron Ashura","Dr. Hell","Souther","Gasu|Gas","Bojack","Garlic Jr","Turles","Lord Slug","Hirudegarn","Legato|Legato Bluesummers","Anti-Spiral","Cioccolata","Tooru|Toru","Draht","Solitar","Gihren Zabi|Gihren","Paptimus Scirocco|Scirocco","Full Frontal","Askin Nakk Le Vaar|Askin","Nine","Kaname Tosen|Tosen","Shin","Wonderweiss"]
    }
  },
  {
    prompt: "Name an anime character who fights with a sword",
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
    prompt: "Name an anime character who wears glasses (or shades)",
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
    prompt: "Name a Shonen Jump series that started before 2000",
    answers: {
      1: ["Dragon Ball|Dragon Ball Z|DBZ","One Piece","Naruto"],
      2: ["Yu Yu Hakusho","Hunter x Hunter|HxH","Slam Dunk","JoJo's Bizarre Adventure|JoJo","Yu-Gi-Oh|Yugioh"],
      3: ["Rurouni Kenshin","Fist of the North Star|Hokuto no Ken","Saint Seiya","Shaman King"],
      4: ["Dr. Slump","City Hunter","Captain Tsubasa","Hikaru no Go","Prince of Tennis|The Prince of Tennis","Dragon Quest: The Adventure of Dai|Dai no Daibouken"],
      5: ["Kinnikuman","Video Girl Ai","Kochikame","Hell Teacher Nube","Space Adventure Cobra|Cobra"],
      6: ["Sakigake Otokojuku","Rokudenashi Blues"]
    }
  },
  {
    prompt: "Name an anime studio",
    answers: {
      1: ["Studio Ghibli|Ghibli","MAPPA","Ufotable","Toei Animation|Toei","Kyoto Animation|KyoAni"],
      2: ["Madhouse","Bones","Wit Studio|Wit","Sunrise","Studio Trigger|Trigger","Production I.G|Production IG","CloverWorks","A-1 Pictures|A1 Pictures","Pierrot|Studio Pierrot","Shaft"],
      3: ["Gainax","TMS Entertainment|TMS|Tokyo Movie Shinsha","Science SARU","David Production","J.C.Staff|JC Staff","Studio Deen|Deen","Lerche","P.A. Works|PA Works","Doga Kobo","White Fox","Kinema Citrus","Gonzo","Silver Link","Studio Bind","Brain's Base","CoMix Wave Films|CoMix Wave","Orange|Studio Orange","Bandai Namco Pictures","Polygon Pictures","Studio 4C|Studio 4°C","Xebec","Bee Train","Manglobe","OLM","Satelight","8bit","Studio Ponoc|Ponoc","Shin-Ei Animation|Shin-Ei"],
      4: ["Shuka","CygamesPictures","Studio Chizu|Chizu","Tatsunoko Production|Tatsunoko","Nippon Animation","Liden Films","Feel","Tezuka Productions","Seven Arcs","Studio Kai","Lay-duce","Passione","Diomedea","Geno Studio","Studio Voln","Studio Colorido|Colorido","Mushi Production","Telecom Animation Film|Telecom"],
      5: ["Arms","Hal Film Maker","Artland","Studio Hibari","Studio Gokumi","Project No.9","Encourage Films","Asahi Production","E&H Production","Bibury Animation Studios|Bibury","Studio Gallop|Gallop","Studio Comet","Zexcs","Group TAC","Ashi Productions|Production Reed","AIC|Anime International Company","Triangle Staff"],
      6: ["Kokusai Eigasha","Magic Bus","Studio Junio","Knack Productions|Knack","Eiken","Studio Fantasia","Radix","Studio Matrix"]
    }
  },
  {
    prompt: "Name a Dragon Ball character",
    answers: {
      1: ["Goku|Son Goku|Kakarot","Vegeta","Gohan|Son Gohan","Piccolo"],
      2: ["Frieza","Cell","Majin Buu|Buu","Trunks","Krillin","Bulma","Goten","Beerus"],
      3: ["Broly","Android 18","Android 17","Master Roshi|Roshi","Yamcha","Tien|Tenshinhan","Chi-Chi","Whis","Jiren","Hit","Goku Black","Zamasu","Gogeta","Vegito|Vegetto"],
      4: ["Raditz","Nappa","Chiaotzu","Videl","Mr. Satan|Hercule","Dabura","Babidi","Bardock","Cooler","Zarbon","Dodoria","Ginyu|Captain Ginyu","Recoome","Burter","Jeice","Guldo","Dende","Mr. Popo","Pan","King Kai","Supreme Kai","Oolong","Puar","Kami","Korin","Yajirobe","Launch","Uub","Android 16","Dr. Gero"],
      5: ["Ox-King","Pilaf|Emperor Pilaf","Mai","Shu","Tao Pai Pai","Janemba","Baby","Omega Shenron","Caulifla","Kale","Cabba","Toppo","Android 21","Gine","King Vegeta","Shenron"],
      6: ["Nam","Bora","Upa","General Blue","Spopovich","Yamu","Pui Pui","Yakon","Turles","Lord Slug|Slug","Garlic Jr","Hirudegarn","Tapion","Dyspo","Granolah","Moro","Gas","Bojack","Android 13","Paragus"]
    }
  },
  {
    prompt: "Name a Naruto character",
    answers: {
      1: ["Naruto|Naruto Uzumaki","Sasuke|Sasuke Uchiha","Sakura|Sakura Haruno","Kakashi|Kakashi Hatake"],
      2: ["Itachi|Itachi Uchiha","Hinata|Hinata Hyuga","Gaara","Jiraiya","Madara|Madara Uchiha","Rock Lee|Lee","Shikamaru|Shikamaru Nara"],
      3: ["Neji|Neji Hyuga","Orochimaru","Tsunade","Pain","Obito|Obito Uchiha|Tobi","Minato|Minato Namikaze","Kiba|Kiba Inuzuka","Ino|Ino Yamanaka","Choji|Choji Akimichi","Might Guy|Guy|Gai","Iruka","Kurama|Nine Tails","Hashirama|Hashirama Senju"],
      4: ["Tenten","Shino|Shino Aburame","Temari","Kankuro","Kisame","Deidara","Sasori","Hidan","Kakuzu","Konan","Zabuza","Haku","Kabuto","Yamato","Sai","Killer B|Killer Bee","Asuma","Kurenai","Tobirama|Tobirama Senju","Kushina","Nagato","Danzo","Hiruzen|Third Hokage","Konohamaru","Suigetsu","Karin","Boruto|Boruto Uzumaki","Sarada|Sarada Uchiha"],
      5: ["Ebisu","Shisui|Shisui Uchiha","Tayuya","Sakon","Kimimaro","Jugo","Anko","Ibiki","Mei Terumi|Mei","Onoki","Raikage","Shizune","Kaguya|Kaguya Otsutsuki","Mitsuki","Kawaki"],
      6: ["Moegi","Udon","Fu","Utakata","Yugito","Roshi","Han","Kidomaru","Jirobo","Genma","Raido","Hayate","Darui","Kurotsuchi","Hanzo"]
    }
  },
  {
    prompt: "Name a One Piece character",
    answers: {
      1: ["Luffy|Monkey D. Luffy","Zoro|Roronoa Zoro","Nami","Sanji"],
      2: ["Usopp","Chopper|Tony Tony Chopper","Robin|Nico Robin","Franky","Brook","Shanks","Ace|Portgas D. Ace","Jinbe|Jinbei"],
      3: ["Law|Trafalgar Law","Blackbeard|Marshall D. Teach|Teach","Whitebeard|Edward Newgate","Kaido","Big Mom|Charlotte Linlin","Doflamingo|Donquixote Doflamingo","Mihawk|Dracule Mihawk","Buggy","Garp|Monkey D. Garp","Sabo","Yamato","Crocodile","Boa Hancock|Hancock"],
      4: ["Akainu|Sakazuki","Aokiji|Kuzan","Kizaru|Borsalino","Smoker","Enel|Eneru","Rob Lucci|Lucci","Eustass Kid|Kid","Vivi|Nefertari Vivi","Arlong","Katakuri","Marco","Gol D. Roger|Roger","Rayleigh|Silvers Rayleigh","Koby|Coby","Monkey D. Dragon|Dragon","Kuma|Bartholomew Kuma","Ivankov|Iva","Oden|Kozuki Oden","Vegapunk","Imu","Bonney|Jewelry Bonney"],
      5: ["Wapol","Bon Clay|Mr. 2","Hatchan|Hachi","Kaya","Tashigi","Moria|Gecko Moria","Spandam","Kaku","Pudding","Carrot","Kin'emon","Caesar Clown|Caesar","Ben Beckman","Shirahoshi","Momonosuke","Kuro|Captain Kuro"],
      6: ["Gaimon","Duval","Foxy","Pell","Merry","Hina","Absalom","Kalifa","Who's-Who","Morgans","Lucky Roux","Yasopp","Hody Jones|Hody","Laboon"]
    }
  },
  {
    prompt: "Name a Demon Slayer character",
    answers: {
      1: ["Tanjiro|Tanjiro Kamado","Nezuko|Nezuko Kamado","Zenitsu|Zenitsu Agatsuma","Inosuke|Inosuke Hashibira"],
      2: ["Rengoku|Kyojuro Rengoku","Muzan|Muzan Kibutsuji","Giyu|Giyu Tomioka","Shinobu|Shinobu Kocho","Tengen|Tengen Uzui"],
      3: ["Mitsuri|Mitsuri Kanroji","Muichiro|Muichiro Tokito","Akaza","Douma|Doma","Kokushibo","Kanao|Kanao Tsuyuri","Genya|Genya Shinazugawa","Gyomei|Gyomei Himejima","Sanemi|Sanemi Shinazugawa","Obanai|Obanai Iguro"],
      4: ["Urokodaki|Sakonji Urokodaki","Sabito","Makomo","Rui","Enmu","Gyutaro","Daki","Hantengu","Gyokko","Tamayo","Yushiro","Kagaya|Kagaya Ubuyashiki","Kanae|Kanae Kocho","Yoriichi|Yoriichi Tsugikuni","Haganezuka|Hotaru Haganezuka","Aoi|Aoi Kanzaki","Kyogai"],
      5: ["Kaigaku","Tanjuro|Tanjuro Kamado","Jigoro|Jigoro Kuwajima","Nakime","Shinjuro|Shinjuro Rengoku","Senjuro|Senjuro Rengoku","Kotetsu"],
      6: ["Susamaru","Yahaba","Hand Demon","Murata","Goto","Sumi","Kiyo","Naho"]
    }
  },
  {
    prompt: "Name a Jujutsu Kaisen character",
    answers: {
      1: ["Yuji|Yuji Itadori|Itadori","Gojo|Satoru Gojo","Megumi|Megumi Fushiguro","Nobara|Nobara Kugisaki","Sukuna|Ryomen Sukuna"],
      2: ["Nanami|Kento Nanami","Maki|Maki Zenin","Toge|Toge Inumaki|Inumaki","Panda","Todo|Aoi Todo","Geto|Suguru Geto","Toji|Toji Fushiguro","Yuta|Yuta Okkotsu","Mahito"],
      3: ["Choso","Jogo","Hanami","Kenjaku","Mei Mei","Yuki Tsukumo","Shoko|Shoko Ieiri","Naoya|Naoya Zenin","Hakari|Kinji Hakari","Higuruma|Hiromi Higuruma","Yaga|Masamichi Yaga","Mahoraga","Rika|Rika Orimoto"],
      4: ["Junpei|Junpei Yoshino","Mechamaru|Kokichi Muta","Momo|Momo Nishimiya","Kasumi|Kasumi Miwa","Noritoshi Kamo|Kamo","Uraume","Dagon","Yorozu","Kashimo|Hajime Kashimo","Ryu|Ryu Ishigori","Takaba|Fumihiko Takaba","Ui Ui","Riko|Riko Amanai","Utahime|Utahime Iori","Kusakabe|Atsuya Kusakabe","Tengen"],
      5: ["Ijichi|Kiyotaka Ijichi","Gakuganji|Yoshinobu Gakuganji","Haruta|Shigemo Haruta","Naobito|Naobito Zenin","Ogi Zenin|Ogi","Mai|Mai Zenin","Arata Nitta","Hana Kurusu|Angel","Kirara|Kirara Hoshi","Charles Bernard","Reggie Star|Reggie","Takuma Ino|Ino","Kurourushi"],
      6: ["Eso","Kechizu","Juzo Kumiya","Granny Ogami|Ogami","Smallpox Deity","Jinichi Zenin"]
    }
  },
  {
    prompt: "Name a My Hero Academia character",
    answers: {
      1: ["Deku|Izuku Midoriya|Midoriya","All Might","Bakugo|Katsuki Bakugo|Bakugou","Todoroki|Shoto Todoroki"],
      2: ["Uraraka|Ochaco Uraraka","Iida|Tenya Iida","Kirishima|Eijiro Kirishima","Endeavor","Shigaraki|Tomura Shigaraki","Aizawa|Shota Aizawa|Eraser Head","Dabi|Toya Todoroki","Toga|Himiko Toga","Hawks","All For One"],
      3: ["Tsuyu|Froppy|Tsuyu Asui","Momo|Momo Yaoyorozu|Yaoyorozu","Denki|Denki Kaminari|Kaminari","Mineta|Minoru Mineta","Tokoyami|Fumikage Tokoyami","Jiro|Kyoka Jiro","Mirio|Lemillion|Mirio Togata","Stain|Hero Killer Stain","Overhaul|Kai Chisaki","Present Mic","Twice","Eri","Shinso|Hitoshi Shinso","Monoma|Neito Monoma","Best Jeanist","Gran Torino","Mirko"],
      4: ["Aoyama|Yuga Aoyama","Ojiro|Mashirao Ojiro","Sero|Hanta Sero","Shoji|Mezo Shoji","Sato|Rikido Sato","Koda|Koji Koda","Hagakure|Toru Hagakure","Mina|Mina Ashido","Tamaki|Suneater|Tamaki Amajiki","Nejire|Nejire Hado","Midnight","Sir Nighteye|Nighteye","Fat Gum","Mt. Lady","Gigantomachia","Spinner","Mr. Compress","Kurogiri","Muscular","Star and Stripe","Mei Hatsume|Hatsume","Nana Shimura","Lady Nagant","Re-Destro","Itsuka Kendo|Kendo","Inko Midoriya","Recovery Girl"],
      5: ["Ectoplasm","Cementoss","Power Loader","Vlad King","Snipe","Thirteen","Nezu|Principal Nezu","Moonfish","Mustard","Magne","Nine","Rappa","Gentle Criminal|Gentle","La Brava","Fuyumi Todoroki|Fuyumi","Natsuo Todoroki|Natsuo","Kota","Edgeshot","Crust","Ryukyu","Gang Orca","Hound Dog","Kamui Woods","Camie","Inasa|Inasa Yoarashi","Seiji Shishikura","Tetsutetsu|Tetsutetsu Tetsutetsu"],
      6: ["Tentacole","Manual","Ingenium","Tiger","Mandalay","Pixie-Bob","Ragdoll","Hiryu Rin","Kosei Tsuburaba","Ibara Shiozaki","Juzo Honenuki","Selkie","Yo Shindo"]
    }
  },
  {
    prompt: "Name a Hunter x Hunter character",
    answers: {
      1: ["Gon|Gon Freecss","Killua|Killua Zoldyck","Kurapika","Leorio|Leorio Paradinight","Hisoka"],
      2: ["Meruem","Chrollo|Chrollo Lucilfer","Netero|Isaac Netero","Ging|Ging Freecss","Illumi|Illumi Zoldyck","Biscuit|Bisky|Biscuit Krueger","Neferpitou|Pitou","Alluka|Alluka Zoldyck"],
      3: ["Kite","Knuckle|Knuckle Bine","Shoot|Shoot McMahon","Komugi","Feitan","Uvogin","Nobunaga","Machi","Shizuku","Phinks","Pakunoda","Franklin","Morel","Shaiapouf|Pouf","Youpi|Menthuthuyoupi","Zeno|Zeno Zoldyck","Silva|Silva Zoldyck","Wing","Zushi","Kalluto"],
      4: ["Shalnark","Genthru","Razor","Mito|Mito Freecss","Ikalgo","Palm|Palm Siberia","Welfin","Cheadle|Cheadle Yorkshire","Pariston|Pariston Hill","Senritsu|Melody","Neon|Neon Nostrade","Tonpa","Kikyo|Kikyo Zoldyck","Milluki|Milluki Zoldyck","Kastro","Colt","Gotoh","Tserriednich"],
      5: ["Kortopi","Bonolenov","Tsezguerra","Beyond Netero|Beyond","Pokkle","Ponzu","Canary","Satotz","Menchi","Buhara","Leol","Cheetu","Zazan","Halkenburg"],
      6: ["Gido","Riehlvelt","Sadaso","Bodoro","Rammot","Momoze","Oito"]
    }
  },
  {
    prompt: "Name a Bleach character",
    answers: {
      1: ["Ichigo|Ichigo Kurosaki","Rukia|Rukia Kuchiki","Aizen|Sosuke Aizen","Byakuya|Byakuya Kuchiki","Kenpachi|Kenpachi Zaraki"],
      2: ["Renji|Renji Abarai","Orihime|Orihime Inoue","Uryu|Uryu Ishida|Ishida","Chad|Sado|Yasutora Sado","Toshiro|Hitsugaya|Toshiro Hitsugaya","Urahara|Kisuke Urahara","Yoruichi|Yoruichi Shihoin","Grimmjow|Grimmjow Jaegerjaquez","Ulquiorra|Ulquiorra Cifer","Gin|Gin Ichimaru","Yhwach","Zangetsu"],
      3: ["Shunsui|Shunsui Kyoraku|Kyoraku","Ukitake|Jushiro Ukitake","Yamamoto|Genryusai Yamamoto","Mayuri|Mayuri Kurotsuchi","Soi Fon|Sui-Feng|Soifon","Unohana|Retsu Unohana","Shinji|Shinji Hirako","Ikkaku|Ikkaku Madarame","Yumichika","Rangiku|Rangiku Matsumoto","Yachiru|Yachiru Kusajishi","Tosen|Kaname Tosen","Kon","Isshin|Isshin Kurosaki","Nel|Nelliel","Starrk|Coyote Starrk","Nnoitra"],
      4: ["Hiyori|Hiyori Sarugaki","Kensei|Kensei Muguruma","Lisa|Lisa Yadomaru","Love|Love Aikawa","Rose|Rojuro Otoribashi","Mashiro","Hachi|Hachigen Ushoda","Nanao|Nanao Ise","Momo|Momo Hinamori","Izuru|Izuru Kira","Shuhei|Shuhei Hisagi","Komamura|Sajin Komamura","Hanataro|Hanataro Yamada","Isane|Isane Kotetsu","Nemu|Nemu Kurotsuchi","Kukaku|Kukaku Shiba","Ganju|Ganju Shiba","Kaien|Kaien Shiba","Barragan|Baraggan","Harribel|Tier Harribel|Halibel","Szayelaporro","Yammy","Ginjo|Kugo Ginjo","Tsukishima|Shukuro Tsukishima","Ryuken|Ryuken Ishida","Karin|Karin Kurosaki","Yuzu|Yuzu Kurosaki","Tatsuki|Tatsuki Arisawa","Keigo|Keigo Asano","Don Kanonji","Haschwalth|Jugram Haschwalth","Bambietta","Bazz-B","Askin|Askin Nakk Le Vaar","As Nodt","Gerard Valkyrie","Lille Barro"],
      5: ["Zommari","Aaroniero","Wonderweiss","Riruka","Mizuiro","Ichibe|Ichibe Hyosube","Pernida","Quilge Opie","Candice","Liltotto","Meninas","Giselle","Iba|Tetsuzaemon Iba","Omaeda|Marechiyo Omaeda","Sasakibe|Chojiro Sasakibe","Grand Fisher","Luppi","Oetsu Nimaiya|Nimaiya"],
      6: ["Shrieker","Acidwire","Metastacia","Dordoni","Cirucci","Gantenbainne","Charlotte Chuhlhourne","Ggio Vega","Ayon","Patros","Tesra","Tenjiro Kirinji|Kirinji","Senjumaru","Kirio Hikifune"]
    }
  },
  {
    prompt: "Name an Attack on Titan character",
    answers: {
      1: ["Eren|Eren Yeager|Eren Jaeger","Mikasa|Mikasa Ackerman","Armin|Armin Arlert","Levi|Levi Ackerman"],
      2: ["Erwin|Erwin Smith","Hange|Hange Zoe|Hanji","Reiner|Reiner Braun","Annie|Annie Leonhart","Bertholdt|Bertholdt Hoover|Bertolt","Jean|Jean Kirstein","Sasha|Sasha Blouse","Connie|Connie Springer","Historia|Historia Reiss|Krista|Christa","Zeke|Zeke Yeager|Beast Titan"],
      3: ["Ymir","Marco|Marco Bott","Kenny|Kenny Ackerman","Gabi|Gabi Braun","Falco|Falco Grice","Pieck|Pieck Finger","Porco|Porco Galliard","Grisha|Grisha Yeager","Floch|Floch Forster","Yelena","Onyankopon","Hannes","Carla|Carla Yeager","Ymir Fritz","Petra|Petra Ral","Mike|Mike Zacharias","Moblit|Moblit Berner"],
      4: ["Rod Reiss","Uri Reiss","Frieda Reiss","Willy Tybur","Lara Tybur","Magath|Theo Magath","Colt|Colt Grice","Marcel|Marcel Galliard","Udo","Zofia","Kiyomi|Kiyomi Azumabito","Dina|Dina Fritz","Keith Shadis|Shadis","Pixis|Dot Pixis","Zackly|Darius Zackly","Nile Dok|Nile Dawk","Hitch|Hitch Dreyse","Marlowe|Marlo Freudenberg","Oluo|Oluo Bozado","Gunther|Gunther Schultz","Eld|Eld Jinn","Rico|Rico Brzenska","Eren Kruger|Kruger|The Owl","Tom Ksaver|Ksaver"],
      5: ["Mina Carolina|Mina","Thomas Wagner|Thomas","Nifa","Louise","Nicolo","Nanaba","Pastor Nick|Nick","Kaya","Dimo Reeves|Reeves"],
      6: ["Ilse Langnar|Ilse","Franz Kefka|Franz","Hannah Diamant|Hannah","Daz","Samuel Linke-Jackson|Samuel","Gelgar","Flegel|Flegel Reeves","Ian Dietrich|Ian","Anka","Lynne"]
    }
  },
  {
    prompt: "Name a JoJo's Bizarre Adventure character",
    answers: {
      1: ["Jotaro|Jotaro Kujo","Dio|Dio Brando","Giorno|Giorno Giovanna","Josuke|Josuke Higashikata","Joseph|Joseph Joestar"],
      2: ["Jonathan|Jonathan Joestar","Polnareff|Jean Pierre Polnareff","Kakyoin|Noriaki Kakyoin","Kira|Yoshikage Kira","Bruno|Bruno Bucciarati|Bucciarati","Jolyne|Jolyne Cujoh","Rohan|Rohan Kishibe","Speedwagon|Robert E. O. Speedwagon","Avdol|Muhammad Avdol","Iggy","Diavolo"],
      3: ["Caesar|Caesar Zeppeli","Will Zeppeli|Zeppeli","Okuyasu|Okuyasu Nijimura","Koichi|Koichi Hirose","Mista|Guido Mista","Narancia|Narancia Ghirga","Abbacchio|Leone Abbacchio","Fugo|Pannacotta Fugo","Trish|Trish Una","Kars","Wamuu","Esidisi","Lisa Lisa","Pucci|Enrico Pucci","Johnny|Johnny Joestar","Gyro|Gyro Zeppeli","Funny Valentine","Hol Horse","Stroheim|Rudol von Stroheim","Doppio|Vinegar Doppio","Risotto|Risotto Nero","Prosciutto","Pesci","Ghiaccio","Ermes|Ermes Costello","Anasui|Narciso Anasui","Weather Report","Foo Fighters|F.F.","Emporio|Emporio Alnino","Holly|Holly Kujo","Erina|Erina Pendleton"],
      4: ["Vanilla Ice","Enya|Enya the Hag","J. Geil","N'Doul","Oingo","Boingo","Mariah","D'Arby|Daniel J. D'Arby","Pet Shop","Shigechi|Shigekiyo Yangu","Yukako|Yukako Yamagishi","Tonio|Tonio Trussardi","Otoishi|Akira Otoishi","Kosaku Kawajiri","Hayato|Hayato Kawajiri","Mikitaka|Mikitaka Hazekura","Reimi|Reimi Sugimoto","Diego|Diego Brando","Hot Pants","Lucy|Lucy Steel","Sandman","Ringo|Ringo Roadagain","Wekapipo","Squalo","Tiziano","Cioccolata","Secco","Formaggio","Illuso","Melone","Pericolo","Rikiel","Versus"],
      5: ["Alessi","Telence T. D'Arby|Terence","Steely Dan","Rubber Soul","Gray Fly","Devo","Midler","Forever","Hazamada|Toshikazu Hazamada","Tamami Kobayashi|Tamami","Keicho|Keicho Nijimura","Aya Tsuji","Yuya Fungami|Yuya","Terunosuke Miyamoto|Terunosuke","Sale","Zucchero","Carne","Polpo","Mountain Tim","Blackmore","Pocoloco","Axl Ro","Thunder McQueen","Miuccia Miuller","Gwess","Johngalli A","Sports Maxx","Yasuho|Yasuho Hirose","Santana"],
      6: ["Scolippi","Tooru|Toru","Jobin|Jobin Higashikata","Norisuke|Norisuke Higashikata","Kenzou","Arabia Fats","Kenny G","Chaka","Straizo","Dire","Tonpetty","Poco","Dario Brando","Wang Chan","Smokey|Smokey Brown","Messina","Loggins"]
    }
  },
  {
    prompt: "Name a Fullmetal Alchemist character",
    answers: {
      1: ["Edward|Edward Elric|Ed","Alphonse|Alphonse Elric|Al","Roy Mustang|Mustang","Winry|Winry Rockbell"],
      2: ["Riza Hawkeye|Hawkeye","Scar","Envy","Hughes|Maes Hughes","Greed","Lust","Gluttony","Father","King Bradley|Wrath","Armstrong|Alex Louis Armstrong","Izumi|Izumi Curtis","Hohenheim|Van Hohenheim","Ling|Ling Yao"],
      3: ["Pride|Selim Bradley","Sloth","May Chang|May","Lan Fan","Olivier|Olivier Armstrong","Kimblee|Solf J. Kimblee","Shou Tucker|Tucker","Nina|Nina Tucker","Havoc|Jean Havoc","Breda|Heymans Breda","Falman|Vato Falman","Fuery|Kain Fuery","Pinako|Pinako Rockbell","Black Hayate","Dante","Rose|Rose Thomas","Truth","Grumman","Fu","Barry the Chopper|Barry","Sig|Sig Curtis"],
      4: ["Darius","Heinkel","Zampano","Jerso","Buccaneer","Miles","Maria Ross|Ross","Denny Brosh|Brosh","Gracia|Gracia Hughes","Elicia|Elicia Hughes","Trisha|Trisha Elric","Marcoh|Tim Marcoh","Cornello|Father Cornello","Madame Christmas|Chris Mustang","Yoki","Martel"],
      5: ["Hakuro","Raven","Basque Grand","Isaac McDougal|Isaac","Rebecca Catalina|Rebecca","Sheska","Paninya","Dominic","Psiren","Lyra","Frank Archer|Archer","Russell Tringham|Russell","Dolcetto","Roa"],
      6: ["Lujon","Gold-Tooth Doctor","Fletcher Tringham|Fletcher","Belsio","Bido"]
    }
  },
  {
    prompt: "Name a Death Note character",
    answers: {
      1: ["Light|Light Yagami|Kira","L|Ryuzaki|L Lawliet","Ryuk","Misa|Misa Amane"],
      2: ["Near","Mello","Rem","Soichiro|Soichiro Yagami","Matsuda|Touta Matsuda","Watari","Mikami|Teru Mikami","Takada|Kiyomi Takada"],
      3: ["Sayu|Sayu Yagami","Aizawa|Shuichi Aizawa","Mogi|Kanzo Mogi","Ide|Hideki Ide","Ukita|Hirokazu Ukita","Naomi Misora|Naomi","Raye Penber|Raye","Higuchi|Kyosuke Higuchi","Matt","Gelus","Sidoh","Lind L. Tailor"],
      4: ["Halle Lidner|Halle","Stephen Gevanni|Gevanni","Anthony Rester|Rester","Rod Ross","Demegawa|Hitoshi Demegawa","Namikawa|Reiji Namikawa","Shingo Mido|Mido","Sachiko Yagami|Sachiko","Wedy","Aiber"],
      5: ["Kida|Masahiko Kida","Takeshi Ooi|Ooi","Arayoshi Hatori|Hatori","Eiichi Takahashi|Takahashi","Suguru Shimura|Shimura","Kurou Otoharada|Otoharada","Roger|Roger Ruvie"],
      6: ["Justin|Armonia Justin Beyondormason","Calikarcha","Gook","Zellogi","Midora","Deridovely","Jealous","Beyond Birthday"]
    }
  },
  {
    prompt: "Name a Sailor Moon character",
    answers: {
      1: ["Sailor Moon|Usagi|Usagi Tsukino|Serena","Tuxedo Mask|Mamoru|Mamoru Chiba|Darien","Sailor Mars|Rei|Rei Hino|Raye","Sailor Mercury|Ami|Ami Mizuno|Amy","Sailor Jupiter|Makoto|Makoto Kino|Lita","Sailor Venus|Minako|Minako Aino|Mina"],
      2: ["Luna","Artemis","Chibiusa|Sailor Chibi Moon|Rini","Sailor Pluto|Setsuna|Trista","Sailor Uranus|Haruka|Amara","Sailor Neptune|Michiru|Michelle","Sailor Saturn|Hotaru","Queen Beryl"],
      3: ["Diana","Queen Serenity","Neo Queen Serenity","King Endymion|Endymion","Sailor Galaxia|Galaxia","Sailor Starlights|Starlights","Seiya|Sailor Star Fighter|Seiya Kou","Taiki|Sailor Star Maker","Yaten|Sailor Star Healer","Helios|Pegasus","Kunzite|Malachite","Jadeite","Nephrite","Zoisite","Ail|Alan","Ann","Prince Diamond|Diamond","Wiseman|Death Phantom","Rubeus","Esmeraude|Emerald","Nehelenia|Queen Nehelenia","Mistress 9","Kaolinite","Professor Tomoe|Souichi Tomoe","Princess Kakyuu|Kakyuu"],
      4: ["Naru|Naru Osaka|Molly","Umino|Gurio Umino|Melvin","Motoki|Motoki Furuhata|Andrew","Shingo|Shingo Tsukino|Sammy","Queen Metalia|Metalia","Pharaoh 90","Sapphire","Black Lady","Fish Eye","Tiger's Eye","Hawk's Eye","Eudial","Mimete","Iron Mouse|Sailor Iron Mouse","Koan","Petz","Calaveras","Berthier","Chibi Chibi|Sailor Chibi Chibi","Amazoness Quartet"],
      5: ["Tellu","Viluy","Cyprine","Ptilol","Zirconia","Aluminum Seiren|Sailor Aluminum Seiren","Lead Crow|Sailor Lead Crow","Tin Nyanko|Sailor Tin Nyanko","Ikuko|Ikuko Tsukino","Kenji|Kenji Tsukino","Unazuki","Chaos","Yuichiro|Yuichiro Kumada|Chad","Sailor Cosmos","Cere Cere","Palla Palla","Ves Ves","Jun Jun"],
      6: ["Grandpa Hino|Grandpa","Germatoid","Elysion"]
    }
  },
  {
    prompt: "Name one of Ash Ketchum's Pokémon",
    answers: {
      1: ["Pikachu","Charizard","Bulbasaur","Squirtle"],
      2: ["Greninja","Lucario","Pidgeot","Butterfree","Infernape"],
      3: ["Sceptile","Snorlax","Lapras","Totodile","Gible","Rowlet","Lycanroc","Dragonite","Gengar"],
      4: ["Muk","Tauros","Kingler","Primeape","Heracross","Noctowl","Bayleef","Quilava","Buizel","Staraptor","Hawlucha","Noivern","Goodra","Talonflame","Torracat","Krookodile","Oshawott"],
      5: ["Torkoal","Glalie","Corphish","Gligar","Unfezant","Leavanny","Pignite","Meltan","Melmetal","Sirfetch'd","Dracovish"],
      6: ["Palpitoad","Boldore"]
    }
  },
  {
    prompt: "Name a character fast enough to race the Flash",
    answers: {
      1: ["Goku|Son Goku","Minato|Minato Namikaze|Yellow Flash","Killua|Killua Zoldyck","Zenitsu|Zenitsu Agatsuma","Saitama","Koro-sensei|Korosensei"],
      2: ["Speed-o'-Sound Sonic|Sonic","Kizaru|Borsalino","Yoruichi|Yoruichi Shihoin","Tenya Iida|Iida","Speed Racer|Go Mifune","Takumi Fujiwara|Takumi","Asuna","Vegeta","Levi|Levi Ackerman","Hiei","Whis"],
      3: ["Flashy Flash","Tobirama|Tobirama Senju","Raikage|A","Hawks","Sena Kobayakawa|Eyeshield 21|Sena","Chigiri|Hyoma Chigiri","Naoya Zenin|Naoya","Toji|Toji Fushiguro","Sanji","Saiki|Saiki Kusuo","Gojo|Satoru Gojo","Sung Jinwoo|Jinwoo"],
      4: ["Byakuya|Byakuya Kuchiki","Rob Lucci|Lucci","Gran Torino","Accelerator","Jellal|Jellal Fernandes","Laxus|Laxus Dreyar","Hit","Might Guy|Guy"],
      5: ["Kaigaku","Kuroko Shirai|Shirai","Aiolia|Leo Aiolia"],
      6: ["Ryosuke Takahashi"]
    }
  },
  {
    prompt: "Name an attack that could destroy a planet",
    answers: {
      1: ["Kamehameha","Spirit Bomb|Genki Dama","Final Flash","Death Ball|Supernova"],
      2: ["Galick Gun","Big Bang Attack","Hakai|Destruction","Chibaku Tensei","Hollow Purple|Purple","Serious Punch|Serious Series","Explosion","Giga Drill Break"],
      3: ["Final Kamehameha","Father-Son Kamehameha","Super Kamehameha","Fuga","World Cutting Slash","Tailed Beast Bomb|Bijuu Dama","Truth-Seeking Ball","Third Impact","Enuma Elish|Ea","Collapsing Star Roaring Cannon","Made in Heaven","Gura Gura no Mi|Quake"],
      4: ["Final Shine Attack","Big Bang Kamehameha","Planet Burst","Vanishing Ball","Eraser Cannon","Gigantic Meteor","Solar Kamehameha","Galaxian Explosion","FLEIJA","Miniature Rose","Infinite Big Bang Storm","Raigo"],
      5: ["Supernova Cooler","Fallen Down","Colony Drop|Axis Drop","Colony Laser"],
      6: ["Kill Driver"]
    }
  },
  {
    prompt: "Name an anime character who can fly",
    answers: {
      1: ["Goku|Son Goku","Vegeta","Kiki","Frieza"],
      2: ["Gohan","Piccolo","Tatsumaki","Hawks","Sailor Moon"],
      3: ["Krillin","Trunks","Android 18","Marco|Marco the Phoenix","Enel","Mob|Shigeo Kageyama","Kirito","Natsu|Natsu Dragneel","Happy","Gojo|Satoru Gojo","Nausicaa","Laputa Robot"],
      4: ["Yoruichi","Kaido","King|Alber","Sanji"],
      5: ["Calcifer","Haku","Ponyo"],
      6: ["Boota"]
    }
  },
  {
    prompt: "Name an anime character with a famous transformation",
    answers: {
      1: ["Goku|Super Saiyan Goku","Sailor Moon|Usagi","Eren|Eren Yeager","Naruto|Naruto Uzumaki","Luffy|Gear 5"],
      2: ["Vegeta","Ichigo|Ichigo Kurosaki","Gohan","Madoka|Madoka Kaname","Gon|Gon Freecss","Denji","Yuji Itadori|Yuji","Kaneki|Ken Kaneki","Simon"],
      3: ["Broly","Frieza","Cell","Majin Buu|Buu","Sakura Kinomoto|Sakura","Ryuko|Ryuko Matoi"],
      4: ["Escanor","Meliodas","Erza|Erza Scarlet","Asta"],
      5: ["Akira Fudo|Devilman","Cutie Honey|Honey Kisaragi"],
      6: ["Pegasus Seiya|Seiya"]
    }
  },
  {
    prompt: "Name a character who can stop, rewind, or travel through time",
    answers: {
      1: ["Dio|Dio Brando","Jotaro|Jotaro Kujo","Okabe|Rintaro Okabe|Okarin","Subaru|Natsuki Subaru"],
      2: ["Homura|Homura Akemi","Hit","Takemichi|Takemichi Hanagaki","Satoru Fujinuma","Makoto Konno","Kurumi|Kurumi Tokisaki","Trunks|Future Trunks","Whis"],
      3: ["Pucci|Enrico Pucci","Diavolo","Kira|Yoshikage Kira","Guldo","Kurisu|Kurisu Makise","Eri","Kiritsugu|Kiritsugu Emiya"],
      4: ["Mayuri Shiina|Mayuri","Suzuha|Suzuha Amane","Cell","Bulma"],
      5: ["Ringo Roadagain|Ringo"],
      6: []
    }
  },
  {
    prompt: "Name an anime character who fights with fire",
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
    prompt: "Name an anime character who uses ice",
    answers: {
      1: ["Todoroki|Shoto Todoroki","Esdeath","Toshiro|Hitsugaya|Toshiro Hitsugaya","Gray|Gray Fullbuster"],
      2: ["Aokiji|Kuzan","Rukia|Rukia Kuchiki","Haku","Douma|Doma","Miyuki Shiba|Miyuki"],
      3: ["Lyon|Lyon Vastia","Hyoga|Cygnus Hyoga","Sailor Mercury|Ami Mizuno","Ur"],
      4: ["Camus|Aquarius Camus","Monet"],
      5: ["Tsurara Oikawa"],
      6: []
    }
  },
  {
    prompt: "Name an anime character who uses lightning or electricity",
    answers: {
      1: ["Killua|Killua Zoldyck","Pikachu","Zenitsu|Zenitsu Agatsuma","Kakashi|Kakashi Hatake","Sasuke|Sasuke Uchiha"],
      2: ["Enel|Eneru","Laxus|Laxus Dreyar","Mikoto Misaka|Misaka|Railgun","Denki Kaminari|Kaminari","Raikage|A","Sailor Jupiter|Makoto Kino"],
      3: ["Kashimo|Hajime Kashimo","Gilthunder","Kaigaku","Darui","Jolteon","Zeraora"],
      4: ["Natsu|Natsu Dragneel"],
      5: [],
      6: []
    }
  },
  {
    prompt: "Name an anime character who died and came back",
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
    prompt: "Name an anime pet, mascot, or animal sidekick",
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
    prompt: "Name the smartest character in their anime",
    answers: {
      1: ["L|Ryuzaki|L Lawliet","Light|Light Yagami","Senku|Senku Ishigami","Lelouch|Lelouch Lamperouge","Shikamaru|Shikamaru Nara"],
      2: ["Kurisu|Kurisu Makise","Near","Shiro","Sora","Ayanokoji|Kiyotaka Ayanokoji","Johan|Johan Liebert","Ray","Norman","Kaguya|Kaguya Shinomiya","Bulma","Armin|Armin Arlert","Erwin|Erwin Smith","Conan|Conan Edogawa"],
      3: ["Miyuki Shirogane|Shirogane","Okabe|Rintaro Okabe","Urahara|Kisuke Urahara","Mayuri|Mayuri Kurotsuchi","Vegapunk","Aizen|Sosuke Aizen","Kongming|Zhuge Liang","Saiki|Saiki Kusuo","Shiroe","Mello","Emma","Koro-sensei"],
      4: ["Holo","Yang Wen-li|Yang","Dr. Gero","Komugi"],
      5: ["Reinhard von Lohengramm|Reinhard","Hange|Hange Zoe"],
      6: ["Oberstein"]
    }
  },
  {
    prompt: "Name an anime character who wears an eyepatch",
    answers: {
      1: ["Kenpachi|Kenpachi Zaraki","Kaneki|Ken Kaneki"],
      2: ["Rikka|Rikka Takanashi","Mei Misaki|Mei","King Bradley|Bradley","Hange|Hange Zoe","Himeno","Captain Harlock|Harlock"],
      3: ["Danzo","Takasugi|Shinsuke Takasugi"],
      4: ["Date Masamune|Masamune"],
      5: ["Yagyu Jubei"],
      6: ["Kyubei Yagyu|Kyubei"]
    }
  },
  {
    prompt: "Name an anime character who wears a mask",
    answers: {
      1: ["Kakashi|Kakashi Hatake","Tobi|Obito","Inosuke|Inosuke Hashibira","Zero|Lelouch"],
      2: ["Tuxedo Mask|Mamoru","Char Aznable|Char","No-Face|Kaonashi","Overhaul|Kai Chisaki","Twice","Gojo|Satoru Gojo","Kaneki|Ken Kaneki","Sogeking"],
      3: ["Sabito","Makomo","Haganezuka|Hotaru Haganezuka","Urokodaki|Sakonji Urokodaki","Haku","Mr. Compress","All For One","Dio|Dio Brando","Killer"],
      4: ["Yamato","Full Frontal","Rau Le Creuset","Kotetsu","Tiger Mask","Racer X","Griffith|Femto"],
      5: ["Mr. Bushido","Captain Falcon"],
      6: []
    }
  },
  {
    prompt: "Name an anime teacher or mentor",
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
    prompt: "Name a famous anime rival",
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
    prompt: "Name an anime ninja",
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
    prompt: "Name an anime robot, android, or cyborg",
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
    prompt: "Name an anime vampire",
    answers: {
      1: ["Alucard","Dio|Dio Brando","Nazuna|Nazuna Nanakusa"],
      2: ["Seras Victoria|Seras","Shinobu Oshino|Kiss-shot","Moka Akashiya|Moka","Krul Tepes|Krul","Mikaela Hyakuya|Mika","Kaname Kuran|Kaname","Zero Kiryu|Zero","Yuki Cross|Yuki","D"],
      3: ["Vanilla Ice","Arcueid|Arcueid Brunestud","Karin Maaka|Karin","Saya Otonashi|Saya","Ayato Sakamaki|Ayato","Kojo Akatsuki|Kojo","Ko Yamori|Ko","Straizo"],
      4: ["Miyu","Hagi|Haji","Mina Tepes","Vlad III|Vlad","Ferid Bathory|Ferid"],
      5: ["Carmilla","Fine"],
      6: []
    }
  },
  {
    prompt: "Name a giant monster or kaiju from anime",
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
    prompt: "Name an anime character who can heal others",
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
    prompt: "Name an anime character who'd win a cooking contest",
    answers: {
      1: ["Soma|Soma Yukihira","Sanji","Senshi"],
      2: ["Erina|Erina Nakiri","Tonio|Tonio Trussardi","Shirou Emiya|Shirou","Laios"],
      3: ["Megumi Tadokoro|Megumi","Takumi Aldini|Takumi","Alice Nakiri|Alice","Akira Hayama|Hayama","Joichiro|Joichiro Yukihira","Mukoda|Tsuyoshi Mukoda","Liu Maoxing|Mao","Azuma Kazuma|Kazuma","Toriko","Komatsu","Kohei Inuzuka|Kohei","Tohru Honda|Tohru"],
      4: ["Tsukasa Eishi|Tsukasa","Kuga Terunori|Kuga","Satoshi Isshiki|Isshiki","Rindo Kobayashi|Rindo","Azami Nakiri|Azami","Master (Restaurant to Another World)|Master"],
      5: ["Yoichi (Mister Ajikko)|Yoichi","Ichigo Amano","Nobuyuki Yazawa|Nobuyuki"],
      6: ["Ryo Kurokiba|Kurokiba"]
    }
  },
  {
    prompt: "Name an anime character known for super strength",
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
    prompt: "Name an anime samurai",
    answers: {
      1: ["Kenshin|Himura Kenshin","Gintoki|Gintoki Sakata"],
      2: ["Jin","Mugen","Zoro|Roronoa Zoro","Yoriichi|Yoriichi Tsugikuni","Kokushibo"],
      3: ["Kin'emon|Kinemon","Oden|Kozuki Oden","Afro|Afro Samurai","Hijikata|Toshiro Hijikata","Okita|Sogo Okita","Saito|Hajime Saito","Shishio|Makoto Shishio"],
      4: ["Ryuma","Kondo|Isao Kondo","Kambei","Sasaki Kojiro|Kojiro","Miyamoto Musashi|Musashi","Sanada Yukimura|Yukimura","Date Masamune|Masamune","Jubei|Jubei Kibagami","Hyakkimaru"],
      5: ["Kyuzo","Kikuchiyo"],
      6: ["Nanashi"]
    }
  },
  {
    prompt: "Name an anime character with a famous scar",
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
    prompt: "Name a Chainsaw Man character",
    answers: {
      1: ["Denji","Power","Makima","Pochita"],
      2: ["Aki|Aki Hayakawa","Kobeni|Kobeni Higashiyama","Reze","Himeno","Kishibe","Angel Devil|Angel"],
      3: ["Asa Mitaka|Asa","Yoru|War Devil","Beam","Quanxi","Katana Man","Violence Devil|Galgali","Santa Claus","Nayuta"],
      4: ["Fami|Famine Devil","Princi","Arai","Akane Sawatari|Sawatari","Gun Devil"],
      5: ["Leech Devil|Leech","Bat Devil","Tomato Devil","Eternity Devil","Zombie Devil","Yoshida|Hirofumi Yoshida"],
      6: ["Kurose","Tendo"]
    }
  },
  {
    prompt: "Name a Spy x Family character",
    answers: {
      1: ["Loid|Loid Forger|Twilight","Anya|Anya Forger","Yor|Yor Forger|Thorn Princess"],
      2: ["Bond|Bond Forger","Damian|Damian Desmond","Becky|Becky Blackbell","Yuri|Yuri Briar","Franky|Franky Franklin","Sylvia|Sylvia Sherwood|Handler"],
      3: ["Fiona|Fiona Frost|Nightfall","Henry Henderson|Henderson","Donovan Desmond|Donovan","Demetrius|Demetrius Desmond","Camilla"],
      4: ["Ewen|Ewen Egeburg","Emile|Emile Elman","Millie","Sharon","Martha"],
      5: ["Keith Kepler|Keith","Melinda Desmond|Melinda","Bill Watkins","Matthew McMahon|Matthew"],
      6: ["Dominic"]
    }
  },
  {
    prompt: "Name a Frieren: Beyond Journey's End character",
    answers: {
      1: ["Frieren","Fern","Stark","Himmel"],
      2: ["Heiter","Eisen","Sein","Aura|Aura the Guillotine","Ubel","Flamme","Serie"],
      3: ["Land","Wirbel","Denken","Lawine","Kanne","Methode","Linie","Lugner","Draht","Qual","Macht","Richter","Laufen"],
      4: ["Lernen","Genau","Sense","Edel","Kraft","Solitar","Ehre","Scharf"],
      5: ["Lecker","Toten","Fass","Dunst","Graf Granat|Granat"],
      6: []
    }
  },
  {
    prompt: "Name a Haikyu!! character",
    answers: {
      1: ["Hinata|Shoyo Hinata","Kageyama|Tobio Kageyama","Oikawa|Toru Oikawa","Bokuto|Kotaro Bokuto","Kenma|Kenma Kozume"],
      2: ["Tsukishima|Kei Tsukishima","Nishinoya|Yu Nishinoya","Kuroo|Tetsuro Kuroo","Tanaka|Ryunosuke Tanaka","Sugawara|Koshi Sugawara","Daichi|Daichi Sawamura","Asahi|Asahi Azumane","Yamaguchi|Tadashi Yamaguchi","Ushijima|Wakatoshi Ushijima","Akaashi|Keiji Akaashi","Atsumu|Atsumu Miya","Osamu|Osamu Miya"],
      3: ["Iwaizumi|Hajime Iwaizumi","Lev|Lev Haiba","Yaku|Morisuke Yaku","Tendo|Satori Tendo","Kiyoko|Kiyoko Shimizu","Yachi|Hitoka Yachi","Ukai|Keishin Ukai","Takeda|Ittetsu Takeda","Ennoshita|Chikara Ennoshita","Sakusa|Kiyoomi Sakusa","Hoshiumi|Korai Hoshiumi","Kyotani|Kentaro Kyotani","Futakuchi|Kenji Futakuchi","Aone|Takanobu Aone","Shirabu|Kenjiro Shirabu"],
      4: ["Kindaichi|Yutaro Kindaichi","Kunimi|Akira Kunimi","Goshiki|Tsutomu Goshiki","Semi|Eita Semi","Kai|Nobuyuki Kai","Inuoka|So Inuoka","Kinoshita|Hisashi Kinoshita","Narita|Kazuhito Narita","Suna|Rintaro Suna","Kita|Shinsuke Kita","Aran|Aran Ojiro","Hirugami|Sachiro Hirugami","Saeko|Saeko Tanaka","Natsu Hinata|Natsu"],
      5: ["Hyakuzawa|Yudai Hyakuzawa","Washio|Tatsuki Washio","Konoha|Akinori Konoha","Sarukui|Yamato Sarukui","Komi|Haruki Komi","Hanamaki|Takahiro Hanamaki","Matsukawa|Issei Matsukawa","Watari|Shinji Watari","Yahaba|Shigeru Yahaba","Kiryu|Wakatsu Kiryu"],
      6: ["Daisho|Suguru Daisho","Numai|Kazuma Numai","Nekomata|Yasufumi Nekomata","Washijo|Tanji Washijo","Ikejiri|Hayato Ikejiri"]
    }
  },
  {
    prompt: "Name a Blue Lock character",
    answers: {
      1: ["Isagi|Yoichi Isagi","Bachira|Meguru Bachira","Nagi|Seishiro Nagi","Rin|Rin Itoshi"],
      2: ["Chigiri|Hyoma Chigiri","Kunigami|Rensuke Kunigami","Reo|Reo Mikage","Barou|Shoei Barou","Ego|Jinpachi Ego","Sae|Sae Itoshi","Kaiser|Michael Kaiser","Shidou|Ryusei Shidou","Hiori|Yo Hiori"],
      3: ["Anri|Anri Teieri","Raichi|Jingo Raichi","Gagamaru|Gin Gagamaru","Aryu|Jyubei Aryu","Tokimitsu|Aoshi Tokimitsu","Karasu|Tabito Karasu","Otoya|Eita Otoya","Ness|Alexis Ness","Kurona|Ranze Kurona","Niko|Ikki Niko","Igaguri|Okuhito Iemon","Kiyora|Jin Kiyora"],
      4: ["Noel Noa|Noa","Loki|Julian Loki","Lavinho|Don Lorenzo|Lorenzo","Snuffy|Marc Snuffy","Charles|Charles Chevalier","Aiku|Oliver Aiku"],
      5: ["Zantetsu|Tsurugi Zantetsu","Naruhaya|Asahi Naruhaya","Imamura|Yudai Imamura","Yukimiya|Kenyu Yukimiya"],
      6: ["Wanima|Keisuke Wanima","Kira|Ryosuke Kira","Kuon|Wataru Kuon"]
    }
  },
  {
    prompt: "Name a One-Punch Man character",
    answers: {
      1: ["Saitama","Genos","Garou","Tatsumaki"],
      2: ["King","Fubuki","Bang|Silver Fang","Boros|Lord Boros","Speed-o'-Sound Sonic|Sonic","Mumen Rider","Atomic Samurai","Metal Bat","Child Emperor","Blast"],
      3: ["Bofoi|Metal Knight","Zombieman","Puri-Puri Prisoner","Tank Top Master","Watchdog Man","Flashy Flash","Drive Knight","Superalloy Darkshine|Darkshine","Pig God","Amai Mask","Orochi","Psykos","Gouketsu","Bomb","Elder Centipede","Deep Sea King|Sea King"],
      4: ["Lightning Max","Stinger","Iaian","Okamaitachi","Bushidrop","Snek|Sneck","Mosquito Girl","Carnage Kabuto","Vaccine Man","Overgrown Rover","Fuhrer Ugly","Black Sperm","Homeless Emperor","Do-S|Do S","Gyoro Gyoro"],
      5: ["Spring Mustachio","Crablante","Suiryu","Phoenix Man","Royal Ripper","Nyan"],
      6: ["Charanko","Lily","Eyelashes"]
    }
  },
  {
    prompt: "Name a Black Clover character",
    answers: {
      1: ["Asta","Yuno","Noelle|Noelle Silva","Yami|Yami Sukehiro"],
      2: ["Julius|Julius Novachrono","Luck|Luck Voltia","Magna|Magna Swing","Finral|Finral Roulacase","Mereoleona|Mereoleona Vermillion","Vanessa|Vanessa Enoteca","Charmy|Charmy Pappitson","Licht","Zora|Zora Ideale","Nacht|Nacht Faust","Liebe"],
      3: ["Gauche|Gauche Adlai","Grey","Gordon|Gordon Agrippa","Henry|Henry Legolant","Secre|Nero","William Vangeance|William","Fuegoleon|Fuegoleon Vermillion","Mimosa|Mimosa Vermillion","Klaus|Klaus Lunettes","Leopold|Leopold Vermillion","Lucifero","Zagred","Dante|Dante Zogratis","Vanica|Vanica Zogratis","Zenon|Zenon Zogratis","Patolli","Langris|Langris Vaude","Nozel|Nozel Silva"],
      4: ["Jack the Ripper|Jack","Charlotte|Charlotte Roselei","Rill|Rill Boismortier","Dorothy|Dorothy Unsworth","Gueldre Poizot","Fana","Vetto","Megicula","Lolopechka","Sol|Sol Marron","Rades|Rades Spirito","Solid|Solid Silva","Nebra|Nebra Silva","Kirsch|Kirsch Vermillion","Lumiere|Lumiere Silva Clover"],
      5: ["Fanzell|Fanzell Kruger","Domina|Dominante Code","Marx|Marx Francois","Owen"],
      6: ["Raia","Valtos","Rhya"]
    }
  },
  {
    prompt: "Name a Solo Leveling character",
    answers: {
      1: ["Sung Jinwoo|Jinwoo|Jin-Woo Sung|Shun Mizushino","Igris","Beru"],
      2: ["Cha Hae-In|Hae-In|Cha Hae In","Yoo Jinho|Jinho","Go Gunhee|Gunhee","Baek Yoonho|Yoonho","Choi Jong-In|Jong-In","Woo Jinchul|Jinchul","Sung Jinah|Jinah","Thomas Andre|Andre"],
      3: ["Tusk","Iron","Tank","Kaisel","Kamish","Antares","Ashborn|Shadow Monarch","Lee Joohee|Joohee","Kang Taeshik|Taeshik","Hwang Dongsuk","Song Chi-Yul|Chi-Yul","Baruka","Vulcan","Kim Chul|Kim Chul"],
      4: ["Bellion","Liu Zhigang|Zhigang","Goto Ryuji|Goto","Sung Il-Hwan|Il-Hwan","Min Byung-Gyu","Kargalgan","Esil Radiru|Esil","Cerberus","Ma Dongwook|Dongwook"],
      5: ["Hwang Dongsoo|Dongsoo","Christopher Reed|Reed","Lennart Niermann"],
      6: ["Yoo Soohyun|Soohyun","Park Heejin|Heejin"]
    }
  },
  {
    prompt: "Name a Mob Psycho 100 character",
    answers: {
      1: ["Mob|Shigeo Kageyama","Reigen|Arataka Reigen","Dimple|Ekubo"],
      2: ["Ritsu|Ritsu Kageyama","Teru|Teruki Hanazawa","Serizawa|Katsuya Serizawa","Tome|Tome Kurata","Toichiro Suzuki","Sho Suzuki|Sho","Tsubomi|Tsubomi Takane"],
      3: ["Mezato|Ichi Mezato","Onigawara|Tokio Onigawara","Musashi Goda|Gouda","Shimazaki","Mogami|Keiji Mogami","Koyama","Sakurai","Muraki"],
      4: ["Kamuro|Shinra Kamuro","Emi","Minegishi","Matsuo","Hatori"],
      5: [],
      6: []
    }
  },
  {
    prompt: "Name a Dr. Stone character",
    answers: {
      1: ["Senku|Senku Ishigami","Chrome","Tsukasa|Tsukasa Shishio"],
      2: ["Kohaku","Gen|Gen Asagiri","Taiju|Taiju Oki","Yuzuriha|Yuzuriha Ogawa","Suika","Kaseki","Ryusui|Ryusui Nanami","Byakuya|Byakuya Ishigami"],
      3: ["Hyoga","Ukyo|Ukyo Saionji","Ginro","Kinro","Magma","Homura|Homura Momiji","Nikki|Nikki Hanada","Ibara","Kirisame","Francois","Stanley|Stanley Snyder","Xeno|Xeno Houston Wingfield","Mirai|Mirai Shishio","Soyuz"],
      4: ["Kokuyo","Jasper","Turquoise","Mozu","Oarashi","Matsukaze","Amaryllis","Chalk","Luna|Luna Wright"],
      5: ["Chelsea|Chelsea Ritz","Garnet","Sapphire"],
      6: ["Lillian|Lillian Weinberg","Connie|Connie Lee"]
    }
  },

  // ================= HARD PROMPTS =================
  {
    hard: true,
    prompt: "Name a One Piece Devil Fruit",
    answers: {
      1: ["Gomu Gomu no Mi|Gum-Gum Fruit|Gomu Gomu","Mera Mera no Mi|Flame-Flame Fruit|Mera Mera","Ope Ope no Mi|Op-Op Fruit|Ope Ope"],
      2: ["Hito Hito no Mi|Human-Human Fruit","Hana Hana no Mi|Flower-Flower Fruit","Yami Yami no Mi|Dark-Dark Fruit","Gura Gura no Mi|Tremor-Tremor Fruit","Bara Bara no Mi|Chop-Chop Fruit","Suna Suna no Mi|Sand-Sand Fruit","Goro Goro no Mi|Rumble-Rumble Fruit","Ito Ito no Mi|String-String Fruit","Hie Hie no Mi|Ice-Ice Fruit","Magu Magu no Mi|Magma-Magma Fruit","Pika Pika no Mi|Glint-Glint Fruit"],
      3: ["Yomi Yomi no Mi|Revive-Revive Fruit","Mero Mero no Mi|Love-Love Fruit","Moku Moku no Mi|Smoke-Smoke Fruit","Nikyu Nikyu no Mi|Paw-Paw Fruit","Uo Uo no Mi|Fish-Fish Fruit","Soru Soru no Mi|Soul-Soul Fruit","Mochi Mochi no Mi|Mochi-Mochi Fruit","Kage Kage no Mi|Shadow-Shadow Fruit","Doku Doku no Mi|Venom-Venom Fruit","Gasu Gasu no Mi|Gas-Gas Fruit","Tori Tori no Mi Model: Phoenix|Phoenix Fruit"],
      4: ["Hobi Hobi no Mi|Hobby-Hobby Fruit","Bari Bari no Mi|Barrier-Barrier Fruit","Horo Horo no Mi|Hollow-Hollow Fruit","Mane Mane no Mi|Clone-Clone Fruit","Sube Sube no Mi|Slip-Slip Fruit","Supa Supa no Mi|Dice-Dice Fruit","Bomu Bomu no Mi|Bomb-Bomb Fruit","Mogu Mogu no Mi|Dig-Dig Fruit","Kilo Kilo no Mi|Kilo-Kilo Fruit","Doru Doru no Mi|Wax-Wax Fruit","Awa Awa no Mi|Bubble-Bubble Fruit","Bisu Bisu no Mi|Biscuit-Biscuit Fruit","Noro Noro no Mi|Slow-Slow Fruit","Ori Ori no Mi|Bind-Bind Fruit","Zushi Zushi no Mi|Press-Press Fruit","Toshi Toshi no Mi|Age-Age Fruit","Neko Neko no Mi Model: Leopard"],
      5: ["Choki Choki no Mi|Snip-Snip Fruit","Nagi Nagi no Mi|Calm-Calm Fruit","Pamu Pamu no Mi|Pop-Pop Fruit","Jake Jake no Mi|Jacket-Jacket Fruit","Kachi Kachi no Mi|Hot-Hot Fruit","Fuku Fuku no Mi|Clothes-Clothes Fruit","Buki Buki no Mi|Arms-Arms Fruit","Netsu Netsu no Mi|Heat-Heat Fruit","Nui Nui no Mi|Stitch-Stitch Fruit","Shiro Shiro no Mi|Castle-Castle Fruit","Woshu Woshu no Mi|Wash-Wash Fruit","Beri Beri no Mi|Berry-Berry Fruit","Sabi Sabi no Mi|Rust-Rust Fruit","Kira Kira no Mi|Sparkle-Sparkle Fruit"],
      6: ["Sui Sui no Mi|Swim-Swim Fruit","Ami Ami no Mi|Net-Net Fruit","Hira Hira no Mi|Ripple-Ripple Fruit","Ishi Ishi no Mi|Stone-Stone Fruit","Pero Pero no Mi|Lick-Lick Fruit","Mato Mato no Mi|Target-Target Fruit"]
    }
  },
  {
    hard: true,
    prompt: "Name a Stand from JoJo's Bizarre Adventure",
    answers: {
      1: ["Star Platinum","The World|Za Warudo","Killer Queen","Gold Experience","Crazy Diamond"],
      2: ["King Crimson","Hermit Purple","Magician's Red","Hierophant Green","Silver Chariot","Sticky Fingers","Stone Free","Heaven's Door","The Hand","Echoes","Made in Heaven","Gold Experience Requiem|GER"],
      3: ["Sex Pistols","Aerosmith","Purple Haze","Moody Blues","Spice Girl","Whitesnake","C-Moon","Tusk","D4C|Dirty Deeds Done Dirt Cheap","Highway Star","Bad Company","The Fool","Hanged Man","Emperor","Cream","Death Thirteen","Wonder of U","Soft & Wet|Soft and Wet","Diver Down","Harvest","Sheer Heart Attack"],
      4: ["Tower of Gray","Dark Blue Moon","Strength","Yellow Temperance","Ebony Devil","Lovers","Sun","Judgement","High Priestess","Geb","Khnum","Tohth","Anubis","Bastet","Osiris","Horus","Atum","Red Hot Chili Pepper","Pearl Jam","Surface","Love Deluxe","The Lock","Cinderella","Enigma","Achtung Baby","Super Fly","Stray Cat","Black Sabbath","Kraft Work","Man in the Mirror","Mr. President","Beach Boy","The Grateful Dead","Baby Face","White Album","Talking Head","Metallica","Green Day","Oasis","Rolling Stones"],
      5: ["Earth Wind and Fire","Boy II Man","Little Feet","Soft Machine","Clash","Notorious B.I.G","Planet Waves","Goo Goo Dolls","Marilyn Manson","Jumpin' Jack Flash","Limp Bizkit","Survivor","Kiss","Burning Down the House","Scary Monsters","Catch the Rainbow","Cream Starter","Mandom","Ball Breaker","Civil War","20th Century Boy","Tattoo You!","Oh! Lonesome Me","Hey Ya!","Born This Way","Paisley Park","Speed King"],
      6: ["Nut King Call","King Nothing","Fun Fun Fun","Wired","Sethan"]
    }
  },
  {
    hard: true,
    prompt: "Name an anime director",
    answers: {
      1: ["Hayao Miyazaki|Miyazaki","Makoto Shinkai|Shinkai","Satoshi Kon"],
      2: ["Mamoru Hosoda|Hosoda","Hideaki Anno|Anno","Katsuhiro Otomo|Otomo","Mamoru Oshii|Oshii","Shinichiro Watanabe","Isao Takahata|Takahata"],
      3: ["Masaaki Yuasa|Yuasa","Naoko Yamada","Goro Miyazaki","Hiroyuki Imaishi|Imaishi","Tetsuro Araki","Kunihiko Ikuhara|Ikuhara","Yoshiyuki Tomino|Tomino","Rintaro","Kenji Kamiyama|Kamiyama","Sunghoo Park","Shota Goshozono|Goshozono","Akiyuki Shinbo|Shinbo","Osamu Tezuka|Tezuka","Keiichiro Saito"],
      4: ["Mitsuo Iso","Kazuya Tsurumaki|Tsurumaki","Yoshiaki Kawajiri|Kawajiri","Osamu Dezaki|Dezaki","Ryutaro Nakamura","Takeshi Koike","Kenji Nakamura","Hiroyasu Ishida","Tatsuyuki Nagai","Rie Matsumoto","Shingo Natsume","Ayumu Watanabe","Mari Okada","Hiromasa Yonebayashi|Yonebayashi","Keiichi Hara","Sayo Yamamoto","Hiroyuki Okiura|Okiura","Shoji Kawamori|Kawamori"],
      5: ["Yasuomi Umetsu|Umetsu","Gisaburo Sugii","Eiichi Yamamoto","Koji Morimoto","Takashi Nakamura","Ryosuke Takahashi","Kazuki Akane","Shinji Aramaki","Mamoru Kanbe","Hiroko Utsumi","Fuga Yamashiro"],
      6: ["Yasuhiro Takemoto","Toshio Hirata","Hiroyuki Kitakubo","Kitaro Kosaka"]
    }
  },
  {
    hard: true,
    prompt: "Name a Gundam series or film",
    answers: {
      1: ["Mobile Suit Gundam|Gundam 0079|First Gundam","Gundam Wing","Gundam SEED"],
      2: ["Zeta Gundam","Iron-Blooded Orphans|IBO","The Witch from Mercury|Witch from Mercury","Gundam 00","Gundam Unicorn","G Gundam","Char's Counterattack"],
      3: ["Gundam ZZ","Gundam 0080|War in the Pocket","Gundam 0083|Stardust Memory","The 08th MS Team|08th MS Team","Victory Gundam|V Gundam","Turn A Gundam","Gundam X","Gundam AGE","Gundam SEED Destiny","Gundam Build Fighters","Gundam Thunderbolt","Hathaway's Flash|Hathaway","GQuuuuuuX","Gundam F91","Endless Waltz|Gundam Wing Endless Waltz"],
      4: ["The Origin|Gundam The Origin","Reconguista in G|G-Reco","Gundam Build Divers","Gundam Narrative|Gundam NT","Cucuruz Doan's Island","Gundam SEED Freedom|SEED Freedom"],
      5: ["MS IGLOO","Gundam Evolve","Requiem for Vengeance","SD Gundam","Gundam Build Metaverse","Gundam Breaker Battlogue"],
      6: ["G-Saviour","Mobile Suit Gundam: Silver Phantom|Silver Phantom","Gundam Sousei"]
    }
  },
  {
    hard: true,
    prompt: "Name a Servant from the Fate series",
    answers: {
      1: ["Saber|Artoria|Artoria Pendragon|King Arthur","Gilgamesh","Archer|EMIYA"],
      2: ["Medusa|Rider","Cu Chulainn|Lancer","Iskandar","Heracles|Berserker","Medea|Caster","Sasaki Kojiro|Assassin","Jeanne d'Arc|Jeanne","Mash Kyrielight|Mash","Astolfo","Nero|Nero Claudius"],
      3: ["Mordred","Lancelot","Diarmuid","Gilles de Rais","Enkidu","Merlin","Tamamo no Mae|Tamamo","Ishtar","Ereshkigal","Scathach","Karna","Arjuna","Achilles","Atalanta","Okita Souji|Okita","Oda Nobunaga|Nobunaga","Miyamoto Musashi|Musashi","Jack the Ripper","Nursery Rhyme","Semiramis","Siegfried","Vlad III|Vlad"],
      4: ["Hassan-i-Sabbah|Hassan","Frankenstein","Spartacus","Shakespeare","Chiron","Avicebron","Amakusa Shirou|Shirou Kotomine","Gawain","Bedivere","Tristan","Ozymandias","Nitocris","Quetzalcoatl","Kiyohime","Mata Hari","Medb","Fionn mac Cumhaill","Edmond Dantes","Jeanne Alter","Moriarty|James Moriarty","Abigail Williams","Katsushika Hokusai|Hokusai","Sakata Kintoki|Kintoki","Minamoto no Raikou|Raikou"],
      5: ["Paracelsus","Charles-Henri Sanson|Sanson","Chevalier d'Eon|d'Eon","Mephistopheles","Hans Christian Andersen|Andersen","Elizabeth Bathory","Fuuma Kotarou","Leonidas","Darius III","Arash","Romulus","Boudica","Asterios"],
      6: ["Paul Bunyan","Xu Fu","Kingprotea","Charlotte Corday","Hessian Lobo","Jaguar Warrior"]
    }
  },
  {
    hard: true,
    prompt: "Name a Japanese anime voice actor (seiyuu)",
    answers: {
      1: ["Masako Nozawa","Yuki Kaji","Mamoru Miyano","Kana Hanazawa","Junko Takeuchi"],
      2: ["Hiroshi Kamiya","Daisuke Ono","Jun Fukuyama","Takahiro Sakurai","Rie Kugimiya","Mayumi Tanaka","Natsuki Hanae","Yuichi Nakamura","Tomokazu Sugita","Saori Hayami","Kenjiro Tsuda","Junichi Suwabe","Megumi Ogata","Aoi Yuki"],
      3: ["Kappei Yamaguchi","Megumi Hayashibara","Akio Otsuka","Koichi Yamadera","Ryo Horikawa","Toshio Furukawa","Hiro Shimono","Tomokazu Seki","Showtaro Morikubo","Kaito Ishikawa","Nobuhiko Okamoto","Yoshitsugu Matsuoka","Ayane Sakura","Inori Minase","Sora Amamiya","Miyuki Sawashiro","Yui Horie","Maaya Sakamoto","Romi Park","Akira Ishida","Koki Uchiyama","Yuko Miyamura","Kotono Mitsuishi","Kazuya Nakai","Hikaru Midorikawa","Toru Furuya"],
      4: ["Rica Matsumoto","Chikao Otsuka","Norio Wakamoto","Unsho Ishizuka","Kenyu Horiuchi","Takehito Koyasu","Ryotaro Okiayu","Soichiro Hoshi","Ai Kayano","Atsumi Tanezaki","Lynn","Tomoyo Kurosawa","Rie Takahashi","Yoko Hikasa","Shinichiro Miki","Kenichi Suzumura","Mitsuo Iwata","Akemi Okamura","Kazue Ikura","Mie Sonozaki","Daisuke Namikawa","Sumire Morohoshi","Kenta Miyake","Minami Takayama","Wakana Yamazaki"],
      5: ["Kei Tomiyama","Hideyuki Tanaka","Banjo Ginga","Joji Yanami","Ichiro Nagai","Takeshi Aono"],
      6: ["Kaneta Kimotsuki","Shozo Iizuka","Junpei Takiguchi"]
    }
  },
  {
    hard: true,
    prompt: "Name an anime composer",
    answers: {
      1: ["Joe Hisaishi|Hisaishi","Yoko Kanno|Kanno","Hiroyuki Sawano|Sawano"],
      2: ["Kenji Kawai","Yuki Kajiura|Kajiura","Shiro Sagisu|Sagisu","Go Shiina","RADWIMPS"],
      3: ["Yasuharu Takanashi|Takanashi","Kevin Penkin","Kensuke Ushio|Ushio","Taku Iwasaki","Susumu Hirasawa","Yugo Kanno","Evan Call","Masaru Yokoyama","Nujabes"],
      4: ["Yoshihiro Ike","Shunsuke Kikuchi","Hajime Mizoguchi","Kow Otani","Akira Senju","Yoshihisa Hirano","Michiru Oshima","Tatsuya Kato","Kaoru Wada","Shiro Hamaguchi","Toshihiko Sahashi","Kenji Yamamoto","Kohei Tanaka"],
      5: ["Seiji Yokoyama"],
      6: ["Michiaki Watanabe"]
    }
  },
  {
    hard: true,
    prompt: "Name a Bleach Zanpakuto",
    answers: {
      1: ["Zangetsu|Tensa Zangetsu","Senbonzakura|Senbonzakura Kageyoshi","Hyorinmaru|Daiguren Hyorinmaru"],
      2: ["Sode no Shirayuki","Zabimaru|Hihio Zabimaru","Kyoka Suigetsu","Benihime","Ryujin Jakka","Shinso","Katen Kyokotsu","Haineko"],
      3: ["Ashisogi Jizo|Konjiki Ashisogi Jizo","Suzumebachi","Minazuki","Hozukimaru","Ruri'iro Kujaku|Fuji Kujaku","Tobiume","Wabisuke","Kazeshini","Tenken","Sogyo no Kotowari","Suzumushi","Sakanade","Nozarashi","Muramasa"],
      4: ["Tachikaze","Gegetsuburi","Kinshara","Kubikiri Orochi","Nejibana"],
      5: ["Gonryomaru","Itegumo","Haguro Tonbo","Tengumaru","Shinken Hakkyoken"],
      6: ["Hisagomaru","Sanpo Kenju"]
    }
  },
  {
    hard: true,
    prompt: "Name an anime OVA released before 2000",
    answers: {
      1: ["Bubblegum Crisis","Legend of the Galactic Heroes|LOGH"],
      2: ["Gunbuster|Aim for the Top","Patlabor","Gundam 0080|War in the Pocket","Gundam 0083|Stardust Memory","Tenchi Muyo","Golden Boy","Ah! My Goddess|Oh My Goddess"],
      3: ["Giant Robo","Macross Plus","Record of Lodoss War","The 08th MS Team|08th MS Team","Megazone 23","Riding Bean","Devilman","Bastard!!|Bastard","Black Jack"],
      4: ["Dominion Tank Police","Cyber City Oedo 808","Gall Force","Iczer-One","Detonator Orgun","Hades Project Zeorymer|Zeorymer","Appleseed","Ruin Explorers","Dirty Pair Flash"],
      5: ["Genocyber","Mad Bull 34","Baoh","Battle Angel|Gunnm","Moldiver","Kishin Corps"],
      6: ["Dream Hunter Rem","Leda: The Fantastic Adventure of Yohko|Leda","Bio-Booster Armor Guyver|Guyver","Psychic Wars"]
    }
  },
  {
    hard: true,
    prompt: "Name a manga or anime by Osamu Tezuka",
    answers: {
      1: ["Astro Boy|Tetsuwan Atom","Black Jack"],
      2: ["Kimba the White Lion|Jungle Emperor|Jungle Taitei","Phoenix|Hi no Tori","Dororo"],
      3: ["Princess Knight|Ribbon no Kishi","Buddha","Metropolis"],
      4: ["Unico","Message to Adolf|Adolf","MW","The Three-Eyed One|Mitsume ga Tooru"],
      5: ["Ode to Kirihito","Apollo's Song","Ayako","Marvelous Melmo|Fushigi na Melmo"],
      6: ["Big X","Vampires","A Tree in the Sun|Hidamari no Ki","The Book of Human Insects","Microid S"]
    }
  },
  {
    hard: true,
    prompt: "Name a manga or anime by CLAMP",
    answers: {
      1: ["Cardcaptor Sakura"],
      2: ["xxxHolic","Tsubasa: Reservoir Chronicle|Tsubasa","Magic Knight Rayearth|Rayearth","Chobits"],
      3: ["X|X/1999","Tokyo Babylon"],
      4: ["Kobato","Angelic Layer","Clover","RG Veda","Blood-C"],
      5: ["Gate 7","Legal Drug|Lawful Drug","Wish","Drug & Drop","Miyuki-chan in Wonderland"],
      6: ["Man of Many Faces","Duklyon","Shirahime-Syo","Suki"]
    }
  },
  {
    hard: true,
    prompt: "Name a manga or anime by Rumiko Takahashi",
    answers: {
      1: ["Inuyasha","Ranma 1/2|Ranma"],
      2: ["Urusei Yatsura","Maison Ikkoku"],
      3: ["Rin-ne|Kyokai no Rinne"],
      4: ["Mermaid Saga|Mermaid Forest","Mao"],
      5: ["One-Pound Gospel"],
      6: ["Rumic Theater","Fire Tripper"]
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
//  CATALOG PROMPTS — answered from catalog.js (~9,500 anime)
//  Every anime that fits counts. Rarity comes from real popularity:
//  the most-watched fits are Common, the least-watched are Deep Cuts.
//
//  where: { years:[from,to], genre:id|[ids], studio:id|[ids],
//           notStudio:id, type:0 TV|1 movie|2 OVA|3 web, minEps:n }
//  nameTest: only titles passing this test count (for letter / word prompts)
//  Genre and studio ids come from catalog.js (CATALOG.genres / .studios).
// =========================================================

const words = (n) => n.split(/[^A-Za-z0-9']+/).filter(Boolean);
const titleHas = (re) => (n) => re.test(n);
const startsWith = (letter) => (n) => n.trim().toUpperCase().startsWith(letter);

const CATALOG_PROMPTS = [
  // ---- Eras ----
  { prompt: "Name an anime from the 1980s", where: { years: [1980, 1989] } },
  { prompt: "Name an anime from the 1990s", where: { years: [1990, 1999] } },
  { prompt: "Name an anime from the 2000s", where: { years: [2000, 2009] } },
  { prompt: "Name an anime from the 2010s", where: { years: [2010, 2019] } },
  { prompt: "Name an anime that first aired in 2020 or later", where: { years: [2020, 2100] } },
  { prompt: "Name an anime that came out in 2024 or later", where: { years: [2024, 2100] } },
  { prompt: "Name an anime from before 1980", hard: true, where: { years: [1900, 1979] } },
  { prompt: "Name an anime that first aired in 2006", hard: true, where: { years: [2006, 2006] } },
  { prompt: "Name an anime that first aired in 2011", hard: true, where: { years: [2011, 2011] } },
  { prompt: "Name an anime that first aired in 2014", hard: true, where: { years: [2014, 2014] } },
  { prompt: "Name an anime that first aired in 2016", hard: true, where: { years: [2016, 2016] } },
  { prompt: "Name an anime that first aired in 2019", hard: true, where: { years: [2019, 2019] } },
  { prompt: "Name an anime that first aired in 2022", hard: true, where: { years: [2022, 2022] } },
  { prompt: "Name an anime that first aired in 2025", hard: true, where: { years: [2025, 2025] } },

  // ---- Genres & themes ----
  { prompt: "Name a sports anime", where: { genre: 30 } },
  { prompt: "Name a team sports anime", where: { genre: 77 } },
  { prompt: "Name a fighting or combat sports anime", where: { genre: 54 } },
  { prompt: "Name a romance anime", where: { genre: 22 } },
  { prompt: "Name an anime with a love triangle", where: { genre: 64 } },
  { prompt: "Name a horror anime", where: { genre: 14 } },
  { prompt: "Name a gory anime", where: { genre: 58 } },
  { prompt: "Name a mecha (giant robot) anime", where: { genre: 18 } },
  { prompt: "Name an isekai anime", where: { genre: 62 } },
  { prompt: "Name an anime where someone gets reincarnated", where: { genre: 72 } },
  { prompt: "Name a magical girl anime", where: { genre: 66 } },
  { prompt: "Name a music or band anime", where: { genre: 19 } },
  { prompt: "Name an idol anime", where: { genre: [60, 61] } },
  { prompt: "Name a psychological anime", where: { genre: 40 } },
  { prompt: "Name a mystery anime", where: { genre: 7 } },
  { prompt: "Name a detective anime", where: { genre: 39 } },
  { prompt: "Name a sci-fi anime", where: { genre: 24 } },
  { prompt: "Name an anime set in space", where: { genre: 29 } },
  { prompt: "Name a slice-of-life anime", where: { genre: 36 } },
  { prompt: "Name a supernatural anime", where: { genre: 37 } },
  { prompt: "Name an anime with superpowers", where: { genre: 31 } },
  { prompt: "Name a historical anime", where: { genre: 13 } },
  { prompt: "Name a military anime", where: { genre: 38 } },
  { prompt: "Name a samurai anime", where: { genre: 21 } },
  { prompt: "Name a martial arts anime", where: { genre: 17 } },
  { prompt: "Name a vampire anime", where: { genre: 32 } },
  { prompt: "Name a cooking or food anime", where: { genre: 47 } },
  { prompt: "Name an anime with time travel", where: { genre: 78 } },
  { prompt: "Name an anime about video games", where: { genre: 79 } },
  { prompt: "Name a survival anime", where: { genre: 76 } },
  { prompt: "Name a death game or high-stakes gambling anime", where: { genre: 59 } },
  { prompt: "Name an anime about delinquents or gangs", where: { genre: 55 } },
  { prompt: "Name an anime about organized crime", where: { genre: 68 } },
  { prompt: "Name an anime set at a workplace", where: { genre: 48 } },
  { prompt: "Name an award-winning anime", where: { genre: 46 } },
  { prompt: "Name a shoujo anime", where: { genre: 25 } },
  { prompt: "Name a seinen anime", where: { genre: 42 } },
  { prompt: "Name a comedy anime", where: { genre: 4 } },
  { prompt: "Name a gag or parody anime", where: { genre: [57, 20] } },
  { prompt: "Name an anime with a villainess", where: { genre: 83 } },
  { prompt: "Name an urban fantasy anime", where: { genre: 82 } },
  { prompt: "Name a cozy, relaxing (iyashikei) anime", hard: true, where: { genre: 63 } },
  { prompt: "Name a racing anime", hard: true, where: { genre: 3 } },
  { prompt: "Name a strategy game anime (shogi, go, cards...)", hard: true, where: { genre: 11 } },
  { prompt: "Name a mythology anime", hard: true, where: { genre: 6 } },
  { prompt: "Name a medical anime", hard: true, where: { genre: 67 } },
  { prompt: "Name an anime about pets", hard: true, where: { genre: 71 } },
  { prompt: "Name an anime about performing arts", hard: true, where: { genre: 70 } },
  { prompt: "Name an anime about visual arts", hard: true, where: { genre: 80 } },
  { prompt: "Name an anime about otaku culture", hard: true, where: { genre: 69 } },
  { prompt: "Name an anime about raising a kid", hard: true, where: { genre: 53 } },
  { prompt: "Name an anime about showbiz", hard: true, where: { genre: 75 } },
  { prompt: "Name a josei anime", hard: true, where: { genre: 43 } },
  { prompt: "Name an avant-garde / experimental anime", hard: true, where: { genre: 5 } },

  // ---- Studios ----
  { prompt: "Name an anime made by MAPPA", where: { studio: 569 } },
  { prompt: "Name an anime made by Madhouse", where: { studio: 11 } },
  { prompt: "Name an anime made by Kyoto Animation", where: { studio: 2 } },
  { prompt: "Name an anime made by Bones", where: { studio: 4 } },
  { prompt: "Name an anime made by Studio Trigger", where: { studio: 803 } },
  { prompt: "Name an anime made by ufotable", where: { studio: 43 } },
  { prompt: "Name an anime made by Sunrise", where: { studio: 14 } },
  { prompt: "Name an anime made by Production I.G", where: { studio: 10 } },
  { prompt: "Name an anime made by Wit Studio", where: { studio: 858 } },
  { prompt: "Name an anime made by A-1 Pictures", where: { studio: 56 } },
  { prompt: "Name an anime made by CloverWorks", where: { studio: 1835 } },
  { prompt: "Name an anime made by Toei Animation", where: { studio: 18 } },
  { prompt: "Name an anime made by Studio Pierrot", where: { studio: 1 } },
  { prompt: "Name an anime made by Studio Ghibli", where: { studio: 21 } },
  { prompt: "Name an anime made by Shaft", hard: true, where: { studio: 44 } },
  { prompt: "Name an anime made by David Production", hard: true, where: { studio: 287 } },
  { prompt: "Name an anime made by Science SARU", hard: true, where: { studio: 1591 } },
  { prompt: "Name an anime made by J.C.Staff", hard: true, where: { studio: 7 } },
  { prompt: "Name an anime made by P.A. Works", hard: true, where: { studio: 132 } },
  { prompt: "Name an anime made by White Fox", hard: true, where: { studio: 314 } },
  { prompt: "Name an anime made by Kinema Citrus", hard: true, where: { studio: 290 } },
  { prompt: "Name an anime made by Lerche", hard: true, where: { studio: 456 } },
  { prompt: "Name an anime made by Doga Kobo", hard: true, where: { studio: 95 } },
  { prompt: "Name an anime made by TMS Entertainment", hard: true, where: { studio: 73 } },
  { prompt: "Name an anime made by Gainax", hard: true, where: { studio: 6 } },
  { prompt: "Name an anime made by Studio Deen", hard: true, where: { studio: 37 } },
  { prompt: "Name an anime made by Silver Link", hard: true, where: { studio: 300 } },
  { prompt: "Name an anime made by OLM", hard: true, where: { studio: 28 } },
  { prompt: "Name an anime made by Bandai Namco Pictures", hard: true, where: { studio: 1258 } },

  // ---- Formats & titles ----
  { prompt: "Name ANY anime — the more obscure, the better", where: {} },
  { prompt: "Name an anime movie", where: { type: 1 } },
  { prompt: "Name an anime movie that's NOT from Studio Ghibli", where: { type: 1, notStudio: 21 } },
  { prompt: "Name an anime with 100 or more episodes", where: { minEps: 100 } },
  { prompt: "Name an anime with a one-word title", nameTest: (n) => words(n).length === 1 && n.length > 2 },
  { prompt: "Name an anime with a number in its title", nameTest: titleHas(/\d/) },
  { prompt: "Name an anime with a color in its title", nameTest: titleHas(/\b(red|blue|black|white|green|gold(en)?|silver|purple|pink|yellow|orange|crimson|scarlet|violet|grey|gray|azure)\b/i) },
  { prompt: "Name an anime with \"Love\" in its title", nameTest: titleHas(/\blove\b/i) },
  { prompt: "Name an anime with \"Sword\" or \"Blade\" in its title", nameTest: titleHas(/\b(sword|blade)s?\b/i) },
  { prompt: "Name an anime with \"Demon\" or \"Devil\" in its title", nameTest: titleHas(/\b(demon|devil)s?\b/i) },
  { prompt: "Name an anime with \"World\" in its title", nameTest: titleHas(/\bworlds?\b/i) },
  { prompt: "Name an anime whose title starts with S", nameTest: startsWith("S") },
  { prompt: "Name an anime whose title starts with M", nameTest: startsWith("M") },
  { prompt: "Name an anime whose title starts with K", nameTest: startsWith("K") },
  { prompt: "Name an anime whose title starts with T", nameTest: startsWith("T") },
  { prompt: "Name an anime whose title starts with H", nameTest: startsWith("H") },
  { prompt: "Name an anime whose title starts with D", nameTest: startsWith("D") },
  { prompt: "Name an anime whose title starts with B", nameTest: startsWith("B") },
  { prompt: "Name an anime whose title starts with G", nameTest: startsWith("G") },
  { prompt: "Name a web anime (ONA)", hard: true, where: { type: 3 } },
  { prompt: "Name an anime OVA", hard: true, where: { type: 2 } },
  { prompt: "Name an anime whose title starts with Z", hard: true, nameTest: startsWith("Z") },
  { prompt: "Name an anime whose title starts with Y", hard: true, nameTest: startsWith("Y") },
  { prompt: "Name an anime with a question mark in its title", hard: true, nameTest: titleHas(/\?/) }
];

if (typeof module !== "undefined") module.exports = { QUESTIONS, TIERS, CATALOG_PROMPTS };
