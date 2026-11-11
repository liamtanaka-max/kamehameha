// =========================================================
//  QUESTION BANK
//  Tiers: 1 Common, 2 Uncommon, 3 Rare, 4 Epic, 5 Legendary, 6 Deep Cut
//  Each answer is a string. Use "|" to list alternate names/spellings:
//    "Zoro|Roronoa Zoro"  -> either one counts.
//  Capitals, spaces and punctuation are ignored when matching.
//  Close typos get a "Did you mean...?" prompt.
//  To add a question, copy one block and edit it.
// =========================================================

const QUESTIONS = [
  // ---------------- GENERAL / ALL ERAS ----------------
  {
    prompt: "Name an anime villain",
    answers: {
      1: ["Frieza|Freeza", "Aizen|Sosuke Aizen", "Dio|Dio Brando", "Sukuna|Ryomen Sukuna", "Muzan|Muzan Kibutsuji"],
      2: ["Madara|Madara Uchiha", "Light Yagami|Light|Kira", "All For One", "Shigaraki|Tomura Shigaraki", "Griffith|Femto", "Orochimaru", "Pain|Nagato", "Cell", "Majin Buu|Buu|Kid Buu", "Makima", "Itachi|Itachi Uchiha", "Geto|Suguru Geto", "Akaza", "Team Rocket|Jessie|James", "Blackbeard|Marshall D. Teach", "Naraku"],
      3: ["Meruem", "Hisoka", "Chrollo|Chrollo Lucilfer", "Kaido", "Doflamingo|Donquixote Doflamingo", "Akainu|Sakazuki", "Crocodile", "Enel|Eneru", "Rob Lucci|Lucci", "Arlong", "Buggy", "Big Mom|Charlotte Linlin", "Father", "Envy", "King Bradley|Wrath", "Mahito", "Kenjaku", "Toji|Toji Fushiguro", "Douma|Doma", "Kokushibo", "Yhwach", "Ulquiorra|Ulquiorra Cifer", "Grimmjow", "Gin Ichimaru", "Yoshikage Kira", "Diavolo", "Pucci|Enrico Pucci", "Boros|Lord Boros", "Garou", "Zeke|Zeke Yeager", "Giovanni", "Overhaul|Kai Chisaki", "Stain|Hero Killer Stain", "Dabi", "Toga|Himiko Toga", "Broly", "Goku Black", "Zamasu", "Raditz", "Aura|Aura the Guillotine", "Isabella|Mama Isabella", "Obito|Obito Uchiha|Tobi"],
      4: ["Johan|Johan Liebert", "Pride", "Lust", "Greed", "Kimblee|Solf J. Kimblee", "Shou Tucker|Tucker", "Shishio|Makoto Shishio", "Esdeath", "Char Aznable|Char", "Toguro|Younger Toguro", "Zeref", "Bondrewd", "Kars", "Wamuu", "Funny Valentine", "Raoh", "Kaguya|Kaguya Otsutsuki", "Kabuto|Kabuto Yakushi", "Gendo|Gendo Ikari", "Vicious", "Knives|Millions Knives", "Marik|Yami Marik", "Yami Bakura|Bakura", "Pegasus|Maximillion Pegasus", "Petelgeuse|Betelgeuse", "Ragyo|Ragyo Kiryuin", "Reze", "Jogo", "Rui", "Gyutaro", "Daki", "Enmu", "Kenny|Kenny Ackerman", "Illumi|Illumi Zoldyck", "Neferpitou|Pitou", "Uvogin", "Feitan", "Twice", "Janemba", "Cooler", "Baby", "Dr. Gero|Gero", "Babidi", "Dabura", "King Piccolo", "Nappa", "Imu", "Moria|Gecko Moria", "Queen Beryl", "Captain Kuro|Kuro"],
      5: ["Hao|Hao Asakura", "Sensui|Shinobu Sensui", "Acnologia", "Enishi|Yukishiro Enishi", "Muska", "Gotou|Goto", "Zodd|Nosferatu Zodd", "The Major|Major", "Sailor Galaxia|Galaxia", "Myotismon|Vamdemon", "Devimon", "Lordgenome", "Nui Harime|Nui", "Esidisi", "Vanilla Ice", "Peter Ratri", "Honest|Prime Minister Honest", "Rod Reiss", "Willy Tybur", "Satan", "Hanami", "Uraume", "Dagon", "Hantengu", "Gyokko", "Nakime", "Kaigaku", "Gigantomachia", "Re-Destro", "Muscular", "Barragan|Baraggan", "Szayelaporro", "Starrk|Coyote Starrk", "Ginjo|Kugo Ginjo", "Momoshiki|Momoshiki Otsutsuki", "Hody Jones|Hody", "Caesar Clown", "Don Krieg|Krieg", "Moro", "Omega Shenron", "Orochi", "Psykos", "Toichiro Suzuki", "Charles zi Britannia|Charles", "Macht", "Qual", "Lugner", "Linie", "Kaiju No. 9", "Santa Claus", "Katana Man", "Gun Devil", "Acrobatic Silky|Acro Silky", "Hikaru Kamiki", "Antares", "Nobunaga", "Yamori|Jason"],
      6: ["Baron Ashura", "Dr. Hell", "Souther", "Gasu|Gas", "Bojack", "Garlic Jr", "Turles", "Lord Slug", "Hirudegarn", "Legato|Legato Bluesummers", "Anti-Spiral", "Cioccolata", "Tooru|Toru", "Draht", "Solitar", "Gihren Zabi|Gihren", "Paptimus Scirocco|Scirocco", "Full Frontal", "Askin Nakk Le Vaar|Askin", "Nine", "Kaname Tosen|Tosen", "Shin", "Wonderweiss"]
    }
  },
  {
    prompt: "Name an anime character who fights with a sword",
    answers: {
      1: ["Zoro|Roronoa Zoro", "Ichigo|Ichigo Kurosaki", "Tanjiro|Tanjiro Kamado"],
      2: ["Kirito", "Inuyasha", "Kenshin|Himura Kenshin|Kenshin Himura", "Mikasa|Mikasa Ackerman", "Levi|Levi Ackerman", "Trunks|Future Trunks", "Rengoku|Kyojuro Rengoku", "Zenitsu|Zenitsu Agatsuma", "Asta", "Sasuke|Sasuke Uchiha", "Giyu|Giyu Tomioka", "Shinobu|Shinobu Kocho", "Meliodas", "Toshiro|Hitsugaya|Toshiro Hitsugaya", "Rukia|Rukia Kuchiki", "Asuna", "Shanks"],
      3: ["Erza|Erza Scarlet", "Kenpachi|Kenpachi Zaraki|Zaraki Kenpachi", "Guts", "Byakuya|Byakuya Kuchiki", "Mihawk|Dracule Mihawk", "Gintoki|Gintoki Sakata", "Zabuza|Zabuza Momochi", "Sesshomaru", "Inosuke|Inosuke Hashibira", "Kisame|Kisame Hoshigaki", "Brook", "Law|Trafalgar Law", "Renji|Renji Abarai", "Gin Ichimaru", "Akame", "Saber", "Ryuko|Ryuko Matoi", "Yuta|Yuta Okkotsu", "Maki|Maki Zenin", "Aki|Aki Hayakawa", "Himmel", "Yami|Yami Sukehiro", "Kazuma|Kazuma Sato", "Rimuru|Rimuru Tempest", "Mitsuri|Mitsuri Kanroji", "Tengen|Tengen Uzui", "Sanemi|Sanemi Shinazugawa", "Griffith"],
      4: ["Makoto Shishio|Shishio", "Hajime Saito|Saito", "Muichiro|Muichiro Tokito", "Yoriichi|Yoriichi Tsugikuni", "Obanai|Obanai Iguro", "Kanao|Kanao Tsuyuri", "Shunsui|Shunsui Kyoraku", "Ukitake|Jushiro Ukitake", "Hijikata|Toshiro Hijikata", "Okita|Sogo Okita", "Goemon|Goemon Ishikawa", "Oden|Kozuki Oden", "Tashigi", "Suigetsu|Suigetsu Hozuki", "Jean|Jean Kirstein", "Reinhard|Reinhard van Astrea", "Eris|Eris Greyrat", "Sagiri|Yamada Asaemon Sagiri", "Aoshi|Aoshi Shinomori", "Katana Man"],
      5: ["Mugen", "Jin", "Hyakkimaru", "Afro|Afro Samurai", "Kin'emon|Kinemon", "Killer B|Killer Bee", "Clare", "Casca", "Wilhelm|Wilhelm van Astrea", "Katsura|Kotaro Katsura"],
      6: ["Jubei|Jubei Kibagami", "Nanashi", "Ryuma", "Koshiro", "Vista", "Tapion"]
    }
  },
  {
    prompt: "Name an anime character with white or silver hair",
    answers: {
      1: ["Gojo|Satoru Gojo|Gojo Satoru", "Killua|Killua Zoldyck", "Kakashi|Kakashi Hatake"],
      2: ["Toshiro|Hitsugaya|Toshiro Hitsugaya", "Kaneki|Ken Kaneki", "Gintoki|Gintoki Sakata", "Sesshomaru", "Inuyasha", "Frieren", "Jiraiya", "Emilia", "Todoroki|Shoto Todoroki"],
      3: ["Gin Ichimaru|Ichimaru Gin", "Tengen|Tengen Uzui", "Ukitake|Jushiro Ukitake", "Smoker", "Nagi|Seishiro Nagi", "Bokuto|Koutarou Bokuto", "Polnareff|Jean Pierre Polnareff", "Archer|Emiya", "Kaworu|Kaworu Nagisa", "Whis", "Toge Inumaki|Inumaki|Toge"],
      4: ["Allen Walker", "Accelerator", "Nagito Komaeda|Komaeda", "Sanemi|Sanemi Shinazugawa", "Rui", "Netero|Isaac Netero", "Kimimaro", "Tobirama|Tobirama Senju", "Suigetsu|Suigetsu Hozuki", "Rayleigh|Silvers Rayleigh", "Yamato", "Mirajane|Mirajane Strauss", "Noelle|Noelle Silva", "Bakura|Ryou Bakura", "Illya|Illyasviel", "Lev Haiba|Lev"],
      5: ["Shiro", "Kaguya|Kaguya Otsutsuki", "Silva|Silva Zoldyck", "Zeno|Zeno Zoldyck", "Yuki Sohma", "Lisanna", "Supreme Kai", "Uraume", "Izana|Izana Kurokawa", "Mitsuya|Takashi Mitsuya"],
      6: ["Sakumo|Sakumo Hatake", "Toneri|Toneri Otsutsuki", "Nico Olvia|Olvia", "Gowasu", "Fuyumi|Fuyumi Todoroki"]
    }
  },
  {
    prompt: "Name an anime character who wears glasses (or shades)",
    answers: {
      1: ["Conan|Conan Edogawa|Detective Conan", "Master Roshi|Roshi"],
      2: ["Hange|Hange Zoe|Hanji", "Aizen|Sosuke Aizen", "Iida|Tenya Iida", "Nanami|Kento Nanami", "Gojo|Satoru Gojo", "Kamina", "Leorio"],
      3: ["Uryu Ishida|Ishida|Uryu", "Kabuto|Kabuto Yakushi", "Shino|Shino Aburame", "Tsukishima|Kei Tsukishima", "Gendo|Gendo Ikari", "Karin", "Sarada|Sarada Uchiha", "Coby|Koby", "Franky", "Okarun|Ken Takakura", "Maki|Maki Zenin", "Zeke|Zeke Yeager", "Midorima|Shintaro Midorima", "Hughes|Maes Hughes", "Gohan"],
      4: ["Shinpachi|Shinpachi Shimura", "Arale|Arale Norimaki", "Yuki Nagato|Nagato", "Kyoya|Kyoya Ootori", "Mari|Mari Makinami", "Nanao|Nanao Ise", "Kisaki|Tetta Kisaki", "Captain Kuro|Kuro", "Ebisu", "Grisha|Grisha Yeager", "Clemont", "Joe Kido|Joe", "Shizuku", "Kunikida|Doppo Kunikida"],
      5: ["Kensuke Aida|Kensuke", "Ritsuko Akagi|Ritsuko", "Takeda|Ittetsu Takeda", "Ijichi|Kiyotaka Ijichi", "Ryuken Ishida|Ryuken", "Szayelaporro", "Lloyd|Lloyd Asplund", "Nina Einstein", "Sheska", "Senbei Norimaki|Senbei", "Umino|Gurio Umino|Melvin", "Nodoka|Nodoka Manabe", "Miyuki Takara", "Sarutobi Ayame|Sa-chan"],
      6: ["Lisa Yadomaru|Lisa"]
    }
  },

  // ---------------- ERAS ----------------
  {
    prompt: "Name an anime from the 1980s",
    answers: {
      1: ["Dragon Ball|Dragon Ball Z|DBZ", "Akira", "Fist of the North Star|Hokuto no Ken", "My Neighbor Totoro|Totoro"],
      2: ["Saint Seiya", "Macross|Super Dimension Fortress Macross", "Robotech", "Grave of the Fireflies", "Nausicaa|Nausicaa of the Valley of the Wind", "Castle in the Sky|Laputa", "Kiki's Delivery Service", "Voltron|GoLion", "Dr. Slump", "Urusei Yatsura", "City Hunter", "Ranma 1/2|Ranma"],
      3: ["Captain Tsubasa", "Touch", "Kimagure Orange Road", "Maison Ikkoku", "Zeta Gundam|Mobile Suit Zeta Gundam", "Gundam ZZ", "Char's Counterattack", "Patlabor", "Bubblegum Crisis", "Legend of the Galactic Heroes|LOGH", "Kinnikuman", "Space Adventure Cobra|Cobra", "Cat's Eye", "Vampire Hunter D", "Anpanman", "Gunbuster|Aim for the Top"],
      4: ["Ronin Warriors|Yoroiden Samurai Troopers|Samurai Troopers", "Dirty Pair", "Wings of Honneamise|Royal Space Force", "Project A-ko", "Gundam 0080|War in the Pocket"],
      5: ["Angel's Egg", "Megazone 23", "Genesis Climber Mospeada|Mospeada", "Southern Cross", "Creamy Mami|Magical Angel Creamy Mami", "Minky Momo|Magical Princess Minky Momo", "Transformers: The Headmasters|The Headmasters", "Sherlock Hound", "Appleseed", "Yawara"],
      6: ["Highschool! Kimengumi|Kimengumi", "Dagger of Kamui", "Riding Bean", "Robot Carnival", "Arion", "Kiteretsu Daihyakka|Kiteretsu", "Mashin Hero Wataru|Wataru"]
    }
  },
  {
    prompt: "Name an anime from the 1990s",
    answers: {
      1: ["Neon Genesis Evangelion|Evangelion|Eva", "Cowboy Bebop", "Sailor Moon", "Dragon Ball Z|DBZ", "Pokemon", "Yu Yu Hakusho"],
      2: ["Rurouni Kenshin|Samurai X", "Slam Dunk", "Digimon Adventure|Digimon", "Ghost in the Shell", "Princess Mononoke", "Outlaw Star", "Trigun", "Detective Conan|Case Closed", "One Piece", "Hunter x Hunter|HxH", "Cardcaptor Sakura", "Great Teacher Onizuka|GTO", "Gundam Wing", "Perfect Blue", "Serial Experiments Lain|Lain", "Dragon Ball GT|DBGT"],
      3: ["Berserk", "Revolutionary Girl Utena|Utena", "Fushigi Yugi", "The Vision of Escaflowne|Escaflowne", "Slayers|The Slayers", "Magic Knight Rayearth|Rayearth", "Record of Lodoss War", "Tenchi Muyo", "Initial D", "Ninja Scroll", "Porco Rosso", "Crayon Shin-chan|Shin-chan", "Yu-Gi-Oh|Yugioh"],
      4: ["Marmalade Boy", "Kodocha|Kodomo no Omocha", "Golden Boy", "Whisper of the Heart", "Monster Rancher", "Medabots|Medarot", "The Big O|Big O", "Kare Kano|His and Her Circumstances", "Nadia: The Secret of Blue Water|Nadia", "G Gundam|Mobile Fighter G Gundam", "Macross Plus", "Ah! My Goddess|Oh My Goddess", "Street Fighter II: The Animated Movie|Street Fighter II"],
      5: ["Memories", "Pom Poko", "Chibi Maruko-chan", "Martian Successor Nadesico|Nadesico", "Ghost Sweeper Mikami", "Bastard!!|Bastard", "Tekkaman Blade", "Gundam X|After War Gundam X", "Turn A Gundam", "The 08th MS Team|08th MS Team", "Sakura Wars", "Excel Saga", "Giant Robo", "Jin-Roh", "Black Jack", "Now and Then, Here and There"],
      6: ["Akazukin Chacha", "Kishin Doji Zenki|Zenki", "Cyber City Oedo 808", "Fatal Fury", "Saber Marionette J", "Lost Universe", "Brain Powerd", "Infinite Ryvius"]
    }
  },
  {
    prompt: "Name an anime that first aired in 2020 or later",
    answers: {
      1: ["Jujutsu Kaisen|JJK", "Chainsaw Man|CSM", "Spy x Family", "Frieren|Frieren: Beyond Journey's End", "Solo Leveling", "Oshi no Ko", "Blue Lock", "Dandadan|Dan Da Dan"],
      2: ["Kaiju No. 8|Kaiju No 8", "Bocchi the Rock", "Cyberpunk: Edgerunners|Edgerunners", "The Apothecary Diaries|Apothecary Diaries", "Tokyo Revengers", "Ranking of Kings", "Wind Breaker", "Sakamoto Days", "Delicious in Dungeon|Dungeon Meshi", "Mashle", "Hell's Paradise|Jigokuraku", "Lycoris Recoil", "Undead Unluck", "Zom 100", "My Happy Marriage", "The Eminence in Shadow|Eminence in Shadow", "Mushoku Tensei", "Komi Can't Communicate", "Suzume", "The Boy and the Heron"],
      3: ["Odd Taxi", "Sonny Boy", "Summertime Rendering|Summer Time Rendering", "Ya Boy Kongming", "Heavenly Delusion|Tengoku Daimakyo", "Pluto", "Skip and Loafer", "Horimiya", "Trigun Stampede", "The Witch from Mercury|Gundam Witch from Mercury", "Shangri-La Frontier", "Call of the Night", "Gachiakuta", "Look Back", "Belle", "Blue Box", "86|Eighty Six", "The Summer Hikaru Died"],
      4: ["Urusei Yatsura (2022)|Urusei Yatsura", "Lazarus", "Orb: On the Movements of the Earth|Orb", "Ranma 1/2 (2024)|Ranma 1/2", "Medalist", "Witch Watch", "Vivy: Fluorite Eye's Song|Vivy", "Wonder Egg Priority", "Sk8 the Infinity|SK8", "The Dangers in My Heart", "Scott Pilgrim Takes Off", "Alya Sometimes Hides Her Feelings in Russian|Roshidere", "Too Many Losing Heroines|Makeine", "Takopi's Original Sin", "Uzumaki"],
      5: ["Kowloon Generic Romance", "Takt Op. Destiny|Takt Op", "Akebi's Sailor Uniform", "Godzilla Singular Point", "Super Cub", "Kemono Jihen", "Love After World Domination", "Ninja Kamui", "Zenshu"],
      6: ["Do It Yourself!!|Do It Yourself", "Mecha-Ude", "Train to the End of the World", "Sasaki and Peeps"]
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

  // ---------------- GENRES ----------------
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
    prompt: "Name an anime movie that is NOT from Studio Ghibli",
    answers: {
      1: ["Your Name|Kimi no Na wa", "Akira", "Weathering With You", "A Silent Voice|Koe no Katachi"],
      2: ["Ghost in the Shell", "Perfect Blue", "Suzume", "Demon Slayer: Mugen Train|Mugen Train", "Jujutsu Kaisen 0|JJK 0", "Paprika", "Wolf Children", "The Girl Who Leapt Through Time", "Summer Wars", "The First Slam Dunk", "Dragon Ball Super: Broly|DBS Broly"],
      3: ["Millennium Actress", "Tokyo Godfathers", "5 Centimeters per Second", "Belle", "Mirai", "I Want to Eat Your Pancreas", "Look Back", "Josee, the Tiger and the Fish|Josee", "Promare", "Redline", "Ninja Scroll", "Metropolis", "Violet Evergarden: The Movie", "Dragon Ball Super: Super Hero|Super Hero", "One Piece Film: Red|Film Red", "Pokemon: The First Movie|Mewtwo Strikes Back", "The End of Evangelion|End of Evangelion", "The Garden of Words|Garden of Words", "Mary and the Witch's Flower", "The Castle of Cagliostro|Castle of Cagliostro"],
      4: ["Angel's Egg", "Wings of Honneamise|Royal Space Force", "Jin-Roh|Jin-Roh: The Wolf Brigade", "Vampire Hunter D: Bloodlust", "Sword of the Stranger", "Tekkonkinkreet", "Mind Game", "The Night Is Short, Walk On Girl|Night Is Short Walk On Girl", "Ride Your Wave", "Lu Over the Wall", "Inu-Oh", "Maquia", "Okko's Inn", "Penguin Highway", "Memories", "Children Who Chase Lost Voices", "Patema Inverted", "A Whisker Away", "Children of the Sea", "Blue Giant", "The Tunnel to Summer, the Exit of Goodbyes|Tunnel to Summer"],
      5: ["Belladonna of Sadness", "Night on the Galactic Railroad", "Patlabor 2", "Roujin Z", "Interstella 5555", "The Deer King", "Pompo: The Cinephile|Pompo", "Lonely Castle in the Mirror", "The Colors Within", "Fireworks", "Her Blue Sky", "Barefoot Gen", "A Letter to Momo", "The Sky Crawlers", "The Imaginary", "Words Bubble Up Like Soda Pop"],
      6: ["Spriggan", "Princess Arete", "Mai Mai Miracle", "Giovanni's Island", "Ringing Bell", "Harmony", "Genocidal Organ", "Short Peace", "Origin: Spirits of the Past", "Modest Heroes", "Goodbye, Don Glees|Goodbye Don Glees", "Ghost Cat Anzu"]
    }
  },
  {
    prompt: "Name an isekai anime (main character ends up in another world)",
    answers: {
      1: ["Sword Art Online|SAO", "Re:Zero|Re Zero", "That Time I Got Reincarnated as a Slime|Tensura|Slime", "KonoSuba"],
      2: ["Overlord", "Mushoku Tensei|Jobless Reincarnation", "The Rising of the Shield Hero|Shield Hero", "No Game No Life", "The Eminence in Shadow|Eminence in Shadow"],
      3: ["Log Horizon", "The Devil Is a Part-Timer|Devil Is a Part Timer", "The Saga of Tanya the Evil|Tanya the Evil|Youjo Senki", "Uncle from Another World|Isekai Ojisan", "So I'm a Spider, So What?|Spider"],
      4: ["Inuyasha", "Digimon Adventure|Digimon", "Ascendance of a Bookworm", "Gate", "Restaurant to Another World|Isekai Shokudo", "Tsukimichi|Tsukimichi Moonlit Fantasy", "In Another World With My Smartphone", "Spirited Away", "Campfire Cooking in Another World", "Arifureta", "Isekai Izakaya Nobu|Isekai Izakaya"],
      5: ["Fushigi Yugi", "The Vision of Escaflowne|Escaflowne", "Grimgar|Grimgar of Fantasy and Ash", "Wise Man's Grandchild", "Magic Knight Rayearth|Rayearth", "Drifters", "The Twelve Kingdoms|Juuni Kokuki", "Reincarnated as a Sword", "Black Summoner", "Skeleton Knight in Another World", "The Faraway Paladin", "Re:Monster", "Isekai Quartet", "Trapped in a Dating Sim", "Cautious Hero", "Death March to the Parallel World Rhapsody|Death March", "How a Realist Hero Rebuilt the Kingdom|Realist Hero", "The Saint's Magic Power Is Omnipotent"],
      6: ["El-Hazard", "Aura Battler Dunbine|Dunbine", "Now and Then, Here and There", "I'm Standing on a Million Lives", "The 8th Son? Are You Kidding Me?|The 8th Son"]
    }
  },
  {
    prompt: "Name a mecha (giant robot) anime",
    answers: {
      1: ["Neon Genesis Evangelion|Evangelion|Eva", "Mobile Suit Gundam|Gundam", "Code Geass", "Gurren Lagann|Tengen Toppa Gurren Lagann"],
      2: ["Darling in the Franxx", "Gundam Wing", "Voltron|GoLion", "Gundam SEED|Mobile Suit Gundam SEED"],
      3: ["Macross|Super Dimension Fortress Macross|Robotech", "Full Metal Panic", "Gundam 00", "Iron-Blooded Orphans|Gundam Iron Blooded Orphans|IBO", "The Witch from Mercury|Gundam Witch from Mercury", "86|Eighty Six"],
      4: ["Escaflowne", "The Big O|Big O", "Eureka Seven", "Aldnoah.Zero|Aldnoah Zero", "Mazinger Z", "Knights of Sidonia", "SSSS.Gridman|Gridman", "Gundam Unicorn", "Macross Frontier", "G Gundam"],
      5: ["Getter Robo", "Patlabor", "RahXephon", "Bokurano", "Armored Trooper Votoms|Votoms", "Gunbuster|Aim for the Top", "Martian Successor Nadesico|Nadesico", "Valvrave|Valvrave the Liberator", "Gundam Thunderbolt", "Gundam Hathaway|Hathaway's Flash", "Gundam GQuuuuuuX|GQuuuuuuX"],
      6: ["Gasaraki", "Kuromukuro", "Zegapain", "Daitarn 3", "Giant Robo"]
    }
  },
  {
    prompt: "Name a sports anime",
    answers: {
      1: ["Haikyuu", "Kuroko's Basketball|Kuroko no Basket", "Blue Lock"],
      2: ["Slam Dunk", "Yuri on Ice", "Captain Tsubasa", "Hajime no Ippo|Ippo|Fighting Spirit"],
      3: ["Free!|Free", "Prince of Tennis|The Prince of Tennis", "Ace of Diamond|Daiya no Ace", "Eyeshield 21", "Initial D"],
      4: ["Major", "Run with the Wind", "Ping Pong the Animation|Ping Pong", "Chihayafuru", "Megalo Box", "Yowamushi Pedal", "Ashita no Joe|Tomorrow's Joe", "Welcome to the Ballroom", "Sk8 the Infinity|SK8", "Medalist"],
      5: ["Baby Steps", "Days", "Touch", "Cross Game", "Giant Killing", "Ahiru no Sora", "Tsurune", "Ao Ashi", "Big Windup|Oofuri", "Hanebado"],
      6: ["Hoshiai no Sora", "Harukana Receive", "Attacker You", "Attack No. 1|Attack No 1", "2.43: Seiin High School Boys Volleyball Team|2.43", "Farewell, My Dear Cramer", "Prince of Stride", "Burning Kabaddi", "Ryman's Club", "Dive!!|Dive"]
    }
  },
  {
    prompt: "Name a magical girl anime",
    answers: {
      1: ["Sailor Moon", "Madoka Magica|Puella Magi Madoka Magica|Madoka", "Cardcaptor Sakura"],
      2: ["Pretty Cure|PreCure", "Tokyo Mew Mew"],
      3: ["Magical Girl Lyrical Nanoha|Nanoha", "Shugo Chara", "Ojamajo Doremi|Magical DoReMi", "Princess Tutu", "Magic Knight Rayearth|Rayearth"],
      4: ["Wedding Peach", "Kamikaze Kaito Jeanne|Phantom Thief Jeanne", "Cutie Honey", "Prisma Illya|Fate/kaleid liner Prisma Illya", "Yuki Yuna Is a Hero", "Magical Girl Raising Project", "Symphogear", "Gushing over Magical Girls", "Mermaid Melody|Mermaid Melody Pichi Pichi Pitch", "Full Moon wo Sagashite|Full Moon o Sagashite", "Little Witch Academia"],
      5: ["Corrector Yui", "Creamy Mami|Magical Angel Creamy Mami", "Minky Momo|Magical Princess Minky Momo", "Flip Flappers", "Akazukin Chacha", "Sugar Sugar Rune", "Saint Tail|St. Tail"],
      6: ["Sally the Witch|Mahoutsukai Sally", "Mahou Shoujo Site|Magical Girl Site", "Day Break Illusion", "Pretty Sammy|Magical Girl Pretty Sammy", "Fancy Lala", "Himitsu no Akko-chan|Akko-chan", "Majokko Megu-chan", "Nurse Angel Ririka", "Hime-chan's Ribbon"]
    }
  },
  {
    prompt: "Name a horror anime",
    answers: {
      1: ["Tokyo Ghoul", "Another", "Higurashi|Higurashi When They Cry"],
      2: ["Parasyte|Parasyte the Maxim", "Elfen Lied", "Hellsing", "The Promised Neverland|Promised Neverland", "Deadman Wonderland", "Highschool of the Dead", "Devilman Crybaby"],
      3: ["Junji Ito Collection", "Mieruko-chan", "Shiki", "Corpse Party", "Made in Abyss", "Uzumaki", "Perfect Blue", "Hell Girl|Jigoku Shoujo", "The Summer Hikaru Died", "Ajin", "Gantz", "School-Live|Gakkou Gurashi", "Danganronpa", "GeGeGe no Kitaro|Kitaro"],
      4: ["Mononoke", "Ghost Hunt", "Boogiepop Phantom", "Serial Experiments Lain|Lain", "Paranoia Agent", "Dark Gathering", "Yamishibai", "Blood-C", "Blood+", "Vampire Hunter D", "Ghost Stories|Gakkou no Kaidan", "Happy Sugar Life", "Dorohedoro", "Zombieland Saga"],
      5: ["Ayakashi: Samurai Horror Tales|Ayakashi", "Gyo", "Ga-Rei: Zero|Ga-Rei Zero", "Sankarea", "Kemono Jihen", "Petshop of Horrors", "Dusk Maiden of Amnesia|Tasogare Otome x Amnesia"],
      6: ["Requiem from the Darkness", "Mermaid Forest", "Kowabon", "Kagewani"]
    }
  },
  {
    prompt: "Name a romance anime",
    answers: {
      1: ["Your Lie in April", "Toradora", "Horimiya", "Kaguya-sama|Kaguya-sama: Love Is War|Love Is War", "Fruits Basket"],
      2: ["Clannad", "Ouran High School Host Club|Ouran", "Kimi ni Todoke|From Me to You", "Nana", "Lovely Complex|Love Com", "Bunny Girl Senpai|Rascal Does Not Dream of Bunny Girl Senpai", "My Dress-Up Darling", "Wotakoi", "Kamisama Kiss", "Maid Sama", "Golden Time", "Snow White with the Red Hair", "My Love Story!!|Ore Monogatari", "Spice and Wolf", "A Sign of Affection", "Blue Box", "Oregairu|My Teen Romantic Comedy SNAFU", "The Quintessential Quintuplets|Quintessential Quintuplets", "Rent-a-Girlfriend", "Tonikawa|Tonikaku Kawaii|Fly Me to the Moon"],
      3: ["Kare Kano|His and Her Circumstances", "Honey and Clover", "Maison Ikkoku", "Kimagure Orange Road", "Ao Haru Ride|Blue Spring Ride", "Say I Love You", "Tsuki ga Kirei", "Tada Never Falls in Love", "Domestic Girlfriend", "Nisekoi", "Chobits", "Ah! My Goddess|Oh My Goddess", "Marmalade Boy", "Teasing Master Takagi-san|Takagi-san", "The Dangers in My Heart", "Insomniacs After School", "My Happy Marriage", "Bloom Into You", "Loving Yamada at Lv999|Yamada-kun and the Lv999 Love", "Given", "Sasaki and Miyano"],
      4: ["Nodame Cantabile", "Paradise Kiss", "Peach Girl", "Itazura na Kiss", "Special A", "Tsurezure Children", "Koikimo", "A Couple of Cuckoos", "More Than a Married Couple, But Not Lovers", "Shikimori's Not Just a Cutie", "Kubo Won't Let Me Be Invisible", "Tomo-chan Is a Girl", "Wolf Girl and Black Prince", "Kiss Him, Not Me", "Plastic Memories"],
      5: ["Ef: A Tale of Memories", "True Tears", "White Album 2", "Kanon", "Waiting in the Summer|Ano Natsu de Matteru", "Nagi no Asukara|A Lull in the Sea", "Love Lab", "Kase-san and Morning Glories", "Love and Lies|Koi to Uso", "Just Because!", "Scum's Wish|Kuzu no Honkai", "Taisho Otome Fairy Tale"],
      6: ["Rumbling Hearts|Kimi ga Nozomu Eien", "Hatsukoi Limited", "Tokimeki Tonight", "Seiren", "Photokano", "Amagami SS", "KimiKiss"]
    }
  },
  {
    prompt: "Name a cooking or food anime",
    answers: {
      1: ["Food Wars|Shokugeki no Soma", "Delicious in Dungeon|Dungeon Meshi"],
      2: ["Restaurant to Another World|Isekai Shokudo", "Yakitate!! Japan|Yakitate Japan", "Toriko", "Campfire Cooking in Another World"],
      3: ["Sweetness and Lightning", "Cooking Master Boy|Chuka Ichiban", "Today's Menu for the Emiya Family|Emiya Gohan"],
      4: ["Isekai Izakaya Nobu|Isekai Izakaya", "Polar Bear Cafe|Shirokuma Cafe", "Oishinbo", "Ms. Koizumi Loves Ramen Noodles"],
      5: ["Wakakozake", "Antique Bakery", "Mister Ajikko|Mr. Ajikko", "Bartender", "Gourmet Girl Graffiti", "Ramen Akaneko", "Ristorante Paradiso", "Yumeiro Patissiere", "Cooking Papa", "Delicious Party Precure"],
      6: ["Kuitan", "Cooking with Valkyries", "Chef of Nobunaga"]
    }
  },
  {
    prompt: "Name an anime studio",
    answers: {
      1: ["Studio Ghibli|Ghibli", "MAPPA", "Ufotable", "Toei Animation|Toei", "Kyoto Animation|KyoAni"],
      2: ["Madhouse", "Bones", "Wit Studio|Wit", "Sunrise", "Studio Trigger|Trigger", "Production I.G|Production IG", "CloverWorks", "A-1 Pictures|A1 Pictures", "Pierrot|Studio Pierrot", "Shaft"],
      3: ["Gainax", "TMS Entertainment|TMS|Tokyo Movie Shinsha", "Science SARU", "David Production", "J.C.Staff|JC Staff", "Studio Deen|Deen", "Lerche", "P.A. Works|PA Works", "Doga Kobo", "White Fox", "Kinema Citrus", "Gonzo", "Silver Link", "Studio Bind", "Brain's Base", "CoMix Wave Films|CoMix Wave", "Orange|Studio Orange", "Bandai Namco Pictures", "Polygon Pictures", "Studio 4C|Studio 4°C", "Xebec", "Bee Train", "Manglobe", "OLM", "Satelight", "8bit", "Studio Ponoc|Ponoc", "Shin-Ei Animation|Shin-Ei"],
      4: ["Shuka", "CygamesPictures", "Studio Chizu|Chizu", "Tatsunoko Production|Tatsunoko", "Nippon Animation", "Liden Films", "Feel", "Tezuka Productions", "Seven Arcs", "Studio Kai", "Lay-duce", "Passione", "Diomedea", "Geno Studio", "Studio Voln", "Studio Colorido|Colorido", "Mushi Production", "Telecom Animation Film|Telecom"],
      5: ["Arms", "Hal Film Maker", "Artland", "Studio Hibari", "Studio Gokumi", "Project No.9", "Encourage Films", "Asahi Production", "E&H Production", "Bibury Animation Studios|Bibury", "Studio Gallop|Gallop", "Studio Comet", "Zexcs", "Group TAC", "Ashi Productions|Production Reed", "AIC|Anime International Company", "Triangle Staff"],
      6: ["Kokusai Eigasha", "Magic Bus", "Studio Junio", "Knack Productions|Knack", "Eiken", "Studio Fantasia", "Radix", "Studio Matrix"]
    }
  },

  // ---------------- FRANCHISES ----------------
  {
    prompt: "Name a Dragon Ball character",
    answers: {
      1: ["Goku|Son Goku|Kakarot", "Vegeta", "Gohan|Son Gohan", "Piccolo"],
      2: ["Frieza", "Cell", "Majin Buu|Buu", "Trunks", "Krillin", "Bulma", "Goten", "Beerus"],
      3: ["Broly", "Android 18", "Android 17", "Master Roshi|Roshi", "Yamcha", "Tien|Tenshinhan", "Chi-Chi", "Whis", "Jiren", "Hit", "Goku Black", "Zamasu", "Gogeta", "Vegito|Vegetto"],
      4: ["Raditz", "Nappa", "Chiaotzu", "Videl", "Mr. Satan|Hercule", "Dabura", "Babidi", "Bardock", "Cooler", "Zarbon", "Dodoria", "Ginyu|Captain Ginyu", "Recoome", "Burter", "Jeice", "Guldo", "Dende", "Mr. Popo", "Pan", "King Kai", "Supreme Kai", "Oolong", "Puar", "Kami", "Korin", "Yajirobe", "Launch", "Uub", "Android 16", "Dr. Gero"],
      5: ["Ox-King", "Pilaf|Emperor Pilaf", "Mai", "Shu", "Tao Pai Pai", "Janemba", "Baby", "Omega Shenron", "Caulifla", "Kale", "Cabba", "Toppo", "Android 21", "Gine", "King Vegeta", "Shenron"],
      6: ["Nam", "Bora", "Upa", "General Blue", "Spopovich", "Yamu", "Pui Pui", "Yakon", "Turles", "Lord Slug|Slug", "Garlic Jr", "Hirudegarn", "Tapion", "Dyspo", "Granolah", "Moro", "Gas", "Bojack", "Android 13", "Paragus"]
    }
  },
  {
    prompt: "Name a Naruto character",
    answers: {
      1: ["Naruto|Naruto Uzumaki", "Sasuke|Sasuke Uchiha", "Sakura|Sakura Haruno", "Kakashi|Kakashi Hatake"],
      2: ["Itachi|Itachi Uchiha", "Hinata|Hinata Hyuga", "Gaara", "Jiraiya", "Madara|Madara Uchiha", "Rock Lee|Lee", "Shikamaru|Shikamaru Nara"],
      3: ["Neji|Neji Hyuga", "Orochimaru", "Tsunade", "Pain", "Obito|Obito Uchiha|Tobi", "Minato|Minato Namikaze", "Kiba|Kiba Inuzuka", "Ino|Ino Yamanaka", "Choji|Choji Akimichi", "Might Guy|Guy|Gai", "Iruka", "Kurama|Nine Tails", "Hashirama|Hashirama Senju"],
      4: ["Tenten", "Shino|Shino Aburame", "Temari", "Kankuro", "Kisame", "Deidara", "Sasori", "Hidan", "Kakuzu", "Konan", "Zabuza", "Haku", "Kabuto", "Yamato", "Sai", "Killer B|Killer Bee", "Asuma", "Kurenai", "Tobirama|Tobirama Senju", "Kushina", "Nagato", "Danzo", "Hiruzen|Third Hokage", "Konohamaru", "Suigetsu", "Karin", "Boruto|Boruto Uzumaki", "Sarada|Sarada Uchiha"],
      5: ["Ebisu", "Shisui|Shisui Uchiha", "Tayuya", "Sakon", "Kimimaro", "Jugo", "Anko", "Ibiki", "Mei Terumi|Mei", "Onoki", "Raikage", "Shizune", "Kaguya|Kaguya Otsutsuki", "Mitsuki", "Kawaki"],
      6: ["Moegi", "Udon", "Fu", "Utakata", "Yugito", "Roshi", "Han", "Kidomaru", "Jirobo", "Genma", "Raido", "Hayate", "Darui", "Kurotsuchi", "Hanzo"]
    }
  },
  {
    prompt: "Name a One Piece character",
    answers: {
      1: ["Luffy|Monkey D. Luffy", "Zoro|Roronoa Zoro", "Nami", "Sanji"],
      2: ["Usopp", "Chopper|Tony Tony Chopper", "Robin|Nico Robin", "Franky", "Brook", "Shanks", "Ace|Portgas D. Ace", "Jinbe|Jinbei"],
      3: ["Law|Trafalgar Law", "Blackbeard|Marshall D. Teach|Teach", "Whitebeard|Edward Newgate", "Kaido", "Big Mom|Charlotte Linlin", "Doflamingo|Donquixote Doflamingo", "Mihawk|Dracule Mihawk", "Buggy", "Garp|Monkey D. Garp", "Sabo", "Yamato", "Crocodile", "Boa Hancock|Hancock"],
      4: ["Akainu|Sakazuki", "Aokiji|Kuzan", "Kizaru|Borsalino", "Smoker", "Enel|Eneru", "Rob Lucci|Lucci", "Eustass Kid|Kid", "Vivi|Nefertari Vivi", "Arlong", "Katakuri", "Marco", "Gol D. Roger|Roger", "Rayleigh|Silvers Rayleigh", "Koby|Coby", "Monkey D. Dragon|Dragon", "Kuma|Bartholomew Kuma", "Ivankov|Iva", "Oden|Kozuki Oden", "Vegapunk", "Imu", "Bonney|Jewelry Bonney"],
      5: ["Wapol", "Bon Clay|Mr. 2", "Hatchan|Hachi", "Kaya", "Tashigi", "Moria|Gecko Moria", "Spandam", "Kaku", "Pudding", "Carrot", "Kin'emon", "Caesar Clown|Caesar", "Ben Beckman", "Shirahoshi", "Momonosuke", "Kuro|Captain Kuro"],
      6: ["Gaimon", "Duval", "Foxy", "Pell", "Merry", "Hina", "Absalom", "Kalifa", "Who's-Who", "Morgans", "Lucky Roux", "Yasopp", "Hody Jones|Hody", "Laboon"]
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
    prompt: "Name a Jujutsu Kaisen character",
    answers: {
      1: ["Yuji|Yuji Itadori|Itadori", "Gojo|Satoru Gojo", "Megumi|Megumi Fushiguro", "Nobara|Nobara Kugisaki", "Sukuna|Ryomen Sukuna"],
      2: ["Nanami|Kento Nanami", "Maki|Maki Zenin", "Toge|Toge Inumaki|Inumaki", "Panda", "Todo|Aoi Todo", "Geto|Suguru Geto", "Toji|Toji Fushiguro", "Yuta|Yuta Okkotsu", "Mahito"],
      3: ["Choso", "Jogo", "Hanami", "Kenjaku", "Mei Mei", "Yuki Tsukumo", "Shoko|Shoko Ieiri", "Naoya|Naoya Zenin", "Hakari|Kinji Hakari", "Higuruma|Hiromi Higuruma", "Yaga|Masamichi Yaga", "Mahoraga", "Rika|Rika Orimoto"],
      4: ["Junpei|Junpei Yoshino", "Mechamaru|Kokichi Muta", "Momo|Momo Nishimiya", "Kasumi|Kasumi Miwa", "Noritoshi Kamo|Kamo", "Uraume", "Dagon", "Yorozu", "Kashimo|Hajime Kashimo", "Ryu|Ryu Ishigori", "Takaba|Fumihiko Takaba", "Ui Ui", "Riko|Riko Amanai", "Utahime|Utahime Iori", "Kusakabe|Atsuya Kusakabe", "Tengen"],
      5: ["Ijichi|Kiyotaka Ijichi", "Gakuganji|Yoshinobu Gakuganji", "Haruta|Shigemo Haruta", "Naobito|Naobito Zenin", "Ogi Zenin|Ogi", "Mai|Mai Zenin", "Arata Nitta", "Hana Kurusu|Angel", "Kirara|Kirara Hoshi", "Charles Bernard", "Reggie Star|Reggie", "Takuma Ino|Ino", "Kurourushi"],
      6: ["Eso", "Kechizu", "Juzo Kumiya", "Granny Ogami|Ogami", "Smallpox Deity", "Jinichi Zenin"]
    }
  },
  {
    prompt: "Name a My Hero Academia character",
    answers: {
      1: ["Deku|Izuku Midoriya|Midoriya", "All Might", "Bakugo|Katsuki Bakugo|Bakugou", "Todoroki|Shoto Todoroki"],
      2: ["Uraraka|Ochaco Uraraka", "Iida|Tenya Iida", "Kirishima|Eijiro Kirishima", "Endeavor", "Shigaraki|Tomura Shigaraki", "Aizawa|Shota Aizawa|Eraser Head", "Dabi|Toya Todoroki", "Toga|Himiko Toga", "Hawks", "All For One"],
      3: ["Tsuyu|Froppy|Tsuyu Asui", "Momo|Momo Yaoyorozu|Yaoyorozu", "Denki|Denki Kaminari|Kaminari", "Mineta|Minoru Mineta", "Tokoyami|Fumikage Tokoyami", "Jiro|Kyoka Jiro", "Mirio|Lemillion|Mirio Togata", "Stain|Hero Killer Stain", "Overhaul|Kai Chisaki", "Present Mic", "Twice", "Eri", "Shinso|Hitoshi Shinso", "Monoma|Neito Monoma", "Best Jeanist", "Gran Torino", "Mirko"],
      4: ["Aoyama|Yuga Aoyama", "Ojiro|Mashirao Ojiro", "Sero|Hanta Sero", "Shoji|Mezo Shoji", "Sato|Rikido Sato", "Koda|Koji Koda", "Hagakure|Toru Hagakure", "Mina|Mina Ashido", "Tamaki|Suneater|Tamaki Amajiki", "Nejire|Nejire Hado", "Midnight", "Sir Nighteye|Nighteye", "Fat Gum", "Mt. Lady", "Gigantomachia", "Spinner", "Mr. Compress", "Kurogiri", "Muscular", "Star and Stripe", "Mei Hatsume|Hatsume", "Nana Shimura", "Lady Nagant", "Re-Destro", "Itsuka Kendo|Kendo", "Inko Midoriya", "Recovery Girl"],
      5: ["Ectoplasm", "Cementoss", "Power Loader", "Vlad King", "Snipe", "Thirteen", "Nezu|Principal Nezu", "Moonfish", "Mustard", "Magne", "Nine", "Rappa", "Gentle Criminal|Gentle", "La Brava", "Fuyumi Todoroki|Fuyumi", "Natsuo Todoroki|Natsuo", "Kota", "Edgeshot", "Crust", "Ryukyu", "Gang Orca", "Hound Dog", "Kamui Woods", "Camie", "Inasa|Inasa Yoarashi", "Seiji Shishikura", "Tetsutetsu|Tetsutetsu Tetsutetsu"],
      6: ["Tentacole", "Manual", "Ingenium", "Tiger", "Mandalay", "Pixie-Bob", "Ragdoll", "Hiryu Rin", "Kosei Tsuburaba", "Ibara Shiozaki", "Juzo Honenuki", "Selkie", "Yo Shindo"]
    }
  },
  {
    prompt: "Name a Hunter x Hunter character",
    answers: {
      1: ["Gon|Gon Freecss", "Killua|Killua Zoldyck", "Kurapika", "Leorio|Leorio Paradinight", "Hisoka"],
      2: ["Meruem", "Chrollo|Chrollo Lucilfer", "Netero|Isaac Netero", "Ging|Ging Freecss", "Illumi|Illumi Zoldyck", "Biscuit|Bisky|Biscuit Krueger", "Neferpitou|Pitou", "Alluka|Alluka Zoldyck"],
      3: ["Kite", "Knuckle|Knuckle Bine", "Shoot|Shoot McMahon", "Komugi", "Feitan", "Uvogin", "Nobunaga", "Machi", "Shizuku", "Phinks", "Pakunoda", "Franklin", "Morel", "Shaiapouf|Pouf", "Youpi|Menthuthuyoupi", "Zeno|Zeno Zoldyck", "Silva|Silva Zoldyck", "Wing", "Zushi", "Kalluto"],
      4: ["Shalnark", "Genthru", "Razor", "Mito|Mito Freecss", "Ikalgo", "Palm|Palm Siberia", "Welfin", "Cheadle|Cheadle Yorkshire", "Pariston|Pariston Hill", "Senritsu|Melody", "Neon|Neon Nostrade", "Tonpa", "Kikyo|Kikyo Zoldyck", "Milluki|Milluki Zoldyck", "Kastro", "Colt", "Gotoh", "Tserriednich"],
      5: ["Kortopi", "Bonolenov", "Tsezguerra", "Beyond Netero|Beyond", "Pokkle", "Ponzu", "Canary", "Satotz", "Menchi", "Buhara", "Leol", "Cheetu", "Zazan", "Halkenburg"],
      6: ["Gido", "Riehlvelt", "Sadaso", "Bodoro", "Rammot", "Momoze", "Oito"]
    }
  },
  {
    prompt: "Name a Bleach character",
    answers: {
      1: ["Ichigo|Ichigo Kurosaki", "Rukia|Rukia Kuchiki", "Aizen|Sosuke Aizen", "Byakuya|Byakuya Kuchiki", "Kenpachi|Kenpachi Zaraki"],
      2: ["Renji|Renji Abarai", "Orihime|Orihime Inoue", "Uryu|Uryu Ishida|Ishida", "Chad|Sado|Yasutora Sado", "Toshiro|Hitsugaya|Toshiro Hitsugaya", "Urahara|Kisuke Urahara", "Yoruichi|Yoruichi Shihoin", "Grimmjow|Grimmjow Jaegerjaquez", "Ulquiorra|Ulquiorra Cifer", "Gin|Gin Ichimaru", "Yhwach", "Zangetsu"],
      3: ["Shunsui|Shunsui Kyoraku|Kyoraku", "Ukitake|Jushiro Ukitake", "Yamamoto|Genryusai Yamamoto", "Mayuri|Mayuri Kurotsuchi", "Soi Fon|Sui-Feng|Soifon", "Unohana|Retsu Unohana", "Shinji|Shinji Hirako", "Ikkaku|Ikkaku Madarame", "Yumichika", "Rangiku|Rangiku Matsumoto", "Yachiru|Yachiru Kusajishi", "Tosen|Kaname Tosen", "Kon", "Isshin|Isshin Kurosaki", "Nel|Nelliel", "Starrk|Coyote Starrk", "Nnoitra"],
      4: ["Hiyori|Hiyori Sarugaki", "Kensei|Kensei Muguruma", "Lisa|Lisa Yadomaru", "Love|Love Aikawa", "Rose|Rojuro Otoribashi", "Mashiro", "Hachi|Hachigen Ushoda", "Nanao|Nanao Ise", "Momo|Momo Hinamori", "Izuru|Izuru Kira", "Shuhei|Shuhei Hisagi", "Komamura|Sajin Komamura", "Hanataro|Hanataro Yamada", "Isane|Isane Kotetsu", "Nemu|Nemu Kurotsuchi", "Kukaku|Kukaku Shiba", "Ganju|Ganju Shiba", "Kaien|Kaien Shiba", "Barragan|Baraggan", "Harribel|Tier Harribel|Halibel", "Szayelaporro", "Yammy", "Ginjo|Kugo Ginjo", "Tsukishima|Shukuro Tsukishima", "Ryuken|Ryuken Ishida", "Karin|Karin Kurosaki", "Yuzu|Yuzu Kurosaki", "Tatsuki|Tatsuki Arisawa", "Keigo|Keigo Asano", "Don Kanonji", "Haschwalth|Jugram Haschwalth", "Bambietta", "Bazz-B", "Askin|Askin Nakk Le Vaar", "As Nodt", "Gerard Valkyrie", "Lille Barro"],
      5: ["Zommari", "Aaroniero", "Wonderweiss", "Riruka", "Mizuiro", "Ichibe|Ichibe Hyosube", "Pernida", "Quilge Opie", "Candice", "Liltotto", "Meninas", "Giselle", "Iba|Tetsuzaemon Iba", "Omaeda|Marechiyo Omaeda", "Sasakibe|Chojiro Sasakibe", "Grand Fisher", "Luppi", "Oetsu Nimaiya|Nimaiya"],
      6: ["Shrieker", "Acidwire", "Metastacia", "Dordoni", "Cirucci", "Gantenbainne", "Charlotte Chuhlhourne", "Ggio Vega", "Ayon", "Patros", "Tesra", "Tenjiro Kirinji|Kirinji", "Senjumaru", "Kirio Hikifune"]
    }
  },
  {
    prompt: "Name an Attack on Titan character",
    answers: {
      1: ["Eren|Eren Yeager|Eren Jaeger", "Mikasa|Mikasa Ackerman", "Armin|Armin Arlert", "Levi|Levi Ackerman"],
      2: ["Erwin|Erwin Smith", "Hange|Hange Zoe|Hanji", "Reiner|Reiner Braun", "Annie|Annie Leonhart", "Bertholdt|Bertholdt Hoover|Bertolt", "Jean|Jean Kirstein", "Sasha|Sasha Blouse", "Connie|Connie Springer", "Historia|Historia Reiss|Krista|Christa", "Zeke|Zeke Yeager|Beast Titan"],
      3: ["Ymir", "Marco|Marco Bott", "Kenny|Kenny Ackerman", "Gabi|Gabi Braun", "Falco|Falco Grice", "Pieck|Pieck Finger", "Porco|Porco Galliard", "Grisha|Grisha Yeager", "Floch|Floch Forster", "Yelena", "Onyankopon", "Hannes", "Carla|Carla Yeager", "Ymir Fritz", "Petra|Petra Ral", "Mike|Mike Zacharias", "Moblit|Moblit Berner"],
      4: ["Rod Reiss", "Uri Reiss", "Frieda Reiss", "Willy Tybur", "Lara Tybur", "Magath|Theo Magath", "Colt|Colt Grice", "Marcel|Marcel Galliard", "Udo", "Zofia", "Kiyomi|Kiyomi Azumabito", "Dina|Dina Fritz", "Keith Shadis|Shadis", "Pixis|Dot Pixis", "Zackly|Darius Zackly", "Nile Dok|Nile Dawk", "Hitch|Hitch Dreyse", "Marlowe|Marlo Freudenberg", "Oluo|Oluo Bozado", "Gunther|Gunther Schultz", "Eld|Eld Jinn", "Rico|Rico Brzenska", "Eren Kruger|Kruger|The Owl", "Tom Ksaver|Ksaver"],
      5: ["Mina Carolina|Mina", "Thomas Wagner|Thomas", "Nifa", "Louise", "Nicolo", "Nanaba", "Pastor Nick|Nick", "Kaya", "Dimo Reeves|Reeves"],
      6: ["Ilse Langnar|Ilse", "Franz Kefka|Franz", "Hannah Diamant|Hannah", "Daz", "Samuel Linke-Jackson|Samuel", "Gelgar", "Flegel|Flegel Reeves", "Ian Dietrich|Ian", "Anka", "Lynne"]
    }
  },
  {
    prompt: "Name a JoJo's Bizarre Adventure character",
    answers: {
      1: ["Jotaro|Jotaro Kujo", "Dio|Dio Brando", "Giorno|Giorno Giovanna", "Josuke|Josuke Higashikata", "Joseph|Joseph Joestar"],
      2: ["Jonathan|Jonathan Joestar", "Polnareff|Jean Pierre Polnareff", "Kakyoin|Noriaki Kakyoin", "Kira|Yoshikage Kira", "Bruno|Bruno Bucciarati|Bucciarati", "Jolyne|Jolyne Cujoh", "Rohan|Rohan Kishibe", "Speedwagon|Robert E. O. Speedwagon", "Avdol|Muhammad Avdol", "Iggy", "Diavolo"],
      3: ["Caesar|Caesar Zeppeli", "Will Zeppeli|Zeppeli", "Okuyasu|Okuyasu Nijimura", "Koichi|Koichi Hirose", "Mista|Guido Mista", "Narancia|Narancia Ghirga", "Abbacchio|Leone Abbacchio", "Fugo|Pannacotta Fugo", "Trish|Trish Una", "Kars", "Wamuu", "Esidisi", "Lisa Lisa", "Pucci|Enrico Pucci", "Johnny|Johnny Joestar", "Gyro|Gyro Zeppeli", "Funny Valentine", "Hol Horse", "Stroheim|Rudol von Stroheim", "Doppio|Vinegar Doppio", "Risotto|Risotto Nero", "Prosciutto", "Pesci", "Ghiaccio", "Ermes|Ermes Costello", "Anasui|Narciso Anasui", "Weather Report", "Foo Fighters|F.F.", "Emporio|Emporio Alnino", "Holly|Holly Kujo", "Erina|Erina Pendleton"],
      4: ["Vanilla Ice", "Enya|Enya the Hag", "J. Geil", "N'Doul", "Oingo", "Boingo", "Mariah", "D'Arby|Daniel J. D'Arby", "Pet Shop", "Shigechi|Shigekiyo Yangu", "Yukako|Yukako Yamagishi", "Tonio|Tonio Trussardi", "Otoishi|Akira Otoishi", "Kosaku Kawajiri", "Hayato|Hayato Kawajiri", "Mikitaka|Mikitaka Hazekura", "Reimi|Reimi Sugimoto", "Diego|Diego Brando", "Hot Pants", "Lucy|Lucy Steel", "Sandman", "Ringo|Ringo Roadagain", "Wekapipo", "Squalo", "Tiziano", "Cioccolata", "Secco", "Formaggio", "Illuso", "Melone", "Pericolo", "Rikiel", "Versus"],
      5: ["Alessi", "Telence T. D'Arby|Terence", "Steely Dan", "Rubber Soul", "Gray Fly", "Devo", "Midler", "Forever", "Hazamada|Toshikazu Hazamada", "Tamami Kobayashi|Tamami", "Keicho|Keicho Nijimura", "Aya Tsuji", "Yuya Fungami|Yuya", "Terunosuke Miyamoto|Terunosuke", "Sale", "Zucchero", "Carne", "Polpo", "Mountain Tim", "Blackmore", "Pocoloco", "Axl Ro", "Thunder McQueen", "Miuccia Miuller", "Gwess", "Johngalli A", "Sports Maxx", "Yasuho|Yasuho Hirose", "Santana"],
      6: ["Scolippi", "Tooru|Toru", "Jobin|Jobin Higashikata", "Norisuke|Norisuke Higashikata", "Kenzou", "Arabia Fats", "Kenny G", "Chaka", "Straizo", "Dire", "Tonpetty", "Poco", "Dario Brando", "Wang Chan", "Smokey|Smokey Brown", "Messina", "Loggins"]
    }
  },
  {
    prompt: "Name a Fullmetal Alchemist character",
    answers: {
      1: ["Edward|Edward Elric|Ed", "Alphonse|Alphonse Elric|Al", "Roy Mustang|Mustang", "Winry|Winry Rockbell"],
      2: ["Riza Hawkeye|Hawkeye", "Scar", "Envy", "Hughes|Maes Hughes", "Greed", "Lust", "Gluttony", "Father", "King Bradley|Wrath", "Armstrong|Alex Louis Armstrong", "Izumi|Izumi Curtis", "Hohenheim|Van Hohenheim", "Ling|Ling Yao"],
      3: ["Pride|Selim Bradley", "Sloth", "May Chang|May", "Lan Fan", "Olivier|Olivier Armstrong", "Kimblee|Solf J. Kimblee", "Shou Tucker|Tucker", "Nina|Nina Tucker", "Havoc|Jean Havoc", "Breda|Heymans Breda", "Falman|Vato Falman", "Fuery|Kain Fuery", "Pinako|Pinako Rockbell", "Black Hayate", "Dante", "Rose|Rose Thomas", "Truth", "Grumman", "Fu", "Barry the Chopper|Barry", "Sig|Sig Curtis"],
      4: ["Darius", "Heinkel", "Zampano", "Jerso", "Buccaneer", "Miles", "Maria Ross|Ross", "Denny Brosh|Brosh", "Gracia|Gracia Hughes", "Elicia|Elicia Hughes", "Trisha|Trisha Elric", "Marcoh|Tim Marcoh", "Cornello|Father Cornello", "Madame Christmas|Chris Mustang", "Yoki", "Martel"],
      5: ["Hakuro", "Raven", "Basque Grand", "Isaac McDougal|Isaac", "Rebecca Catalina|Rebecca", "Sheska", "Paninya", "Dominic", "Psiren", "Lyra", "Frank Archer|Archer", "Russell Tringham|Russell", "Dolcetto", "Roa"],
      6: ["Lujon", "Gold-Tooth Doctor", "Fletcher Tringham|Fletcher", "Belsio", "Bido"]
    }
  },
  {
    prompt: "Name a Death Note character",
    answers: {
      1: ["Light|Light Yagami|Kira", "L|Ryuzaki|L Lawliet", "Ryuk", "Misa|Misa Amane"],
      2: ["Near", "Mello", "Rem", "Soichiro|Soichiro Yagami", "Matsuda|Touta Matsuda", "Watari", "Mikami|Teru Mikami", "Takada|Kiyomi Takada"],
      3: ["Sayu|Sayu Yagami", "Aizawa|Shuichi Aizawa", "Mogi|Kanzo Mogi", "Ide|Hideki Ide", "Ukita|Hirokazu Ukita", "Naomi Misora|Naomi", "Raye Penber|Raye", "Higuchi|Kyosuke Higuchi", "Matt", "Gelus", "Sidoh", "Lind L. Tailor"],
      4: ["Halle Lidner|Halle", "Stephen Gevanni|Gevanni", "Anthony Rester|Rester", "Rod Ross", "Demegawa|Hitoshi Demegawa", "Namikawa|Reiji Namikawa", "Shingo Mido|Mido", "Sachiko Yagami|Sachiko", "Wedy", "Aiber"],
      5: ["Kida|Masahiko Kida", "Takeshi Ooi|Ooi", "Arayoshi Hatori|Hatori", "Eiichi Takahashi|Takahashi", "Suguru Shimura|Shimura", "Kurou Otoharada|Otoharada", "Roger|Roger Ruvie"],
      6: ["Justin|Armonia Justin Beyondormason", "Calikarcha", "Gook", "Zellogi", "Midora", "Deridovely", "Jealous", "Beyond Birthday"]
    }
  },
  {
    prompt: "Name a Sailor Moon character",
    answers: {
      1: ["Sailor Moon|Usagi|Usagi Tsukino|Serena", "Tuxedo Mask|Mamoru|Mamoru Chiba|Darien", "Sailor Mars|Rei|Rei Hino|Raye", "Sailor Mercury|Ami|Ami Mizuno|Amy", "Sailor Jupiter|Makoto|Makoto Kino|Lita", "Sailor Venus|Minako|Minako Aino|Mina"],
      2: ["Luna", "Artemis", "Chibiusa|Sailor Chibi Moon|Rini", "Sailor Pluto|Setsuna|Trista", "Sailor Uranus|Haruka|Amara", "Sailor Neptune|Michiru|Michelle", "Sailor Saturn|Hotaru", "Queen Beryl"],
      3: ["Diana", "Queen Serenity", "Neo Queen Serenity", "King Endymion|Endymion", "Sailor Galaxia|Galaxia", "Sailor Starlights|Starlights", "Seiya|Sailor Star Fighter|Seiya Kou", "Taiki|Sailor Star Maker", "Yaten|Sailor Star Healer", "Helios|Pegasus", "Kunzite|Malachite", "Jadeite", "Nephrite", "Zoisite", "Ail|Alan", "Ann", "Prince Diamond|Diamond", "Wiseman|Death Phantom", "Rubeus", "Esmeraude|Emerald", "Nehelenia|Queen Nehelenia", "Mistress 9", "Kaolinite", "Professor Tomoe|Souichi Tomoe", "Princess Kakyuu|Kakyuu"],
      4: ["Naru|Naru Osaka|Molly", "Umino|Gurio Umino|Melvin", "Motoki|Motoki Furuhata|Andrew", "Shingo|Shingo Tsukino|Sammy", "Queen Metalia|Metalia", "Pharaoh 90", "Sapphire", "Black Lady", "Fish Eye", "Tiger's Eye", "Hawk's Eye", "Eudial", "Mimete", "Iron Mouse|Sailor Iron Mouse", "Koan", "Petz", "Calaveras", "Berthier", "Chibi Chibi|Sailor Chibi Chibi", "Amazoness Quartet"],
      5: ["Tellu", "Viluy", "Cyprine", "Ptilol", "Zirconia", "Aluminum Seiren|Sailor Aluminum Seiren", "Lead Crow|Sailor Lead Crow", "Tin Nyanko|Sailor Tin Nyanko", "Ikuko|Ikuko Tsukino", "Kenji|Kenji Tsukino", "Unazuki", "Chaos", "Yuichiro|Yuichiro Kumada|Chad", "Sailor Cosmos", "Cere Cere", "Palla Palla", "Ves Ves", "Jun Jun"],
      6: ["Grandpa Hino|Grandpa", "Germatoid", "Elysion"]
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

  // ================= HARD PROMPTS =================
  // Marked hard: true. The Daily Charge ends with two of these.
  {
    hard: true,
    prompt: "Name a One Piece Devil Fruit",
    answers: {
      1: ["Gomu Gomu no Mi|Gum-Gum Fruit|Gomu Gomu", "Mera Mera no Mi|Flame-Flame Fruit|Mera Mera", "Ope Ope no Mi|Op-Op Fruit|Ope Ope"],
      2: ["Hito Hito no Mi|Human-Human Fruit", "Hana Hana no Mi|Flower-Flower Fruit", "Yami Yami no Mi|Dark-Dark Fruit", "Gura Gura no Mi|Tremor-Tremor Fruit", "Bara Bara no Mi|Chop-Chop Fruit", "Suna Suna no Mi|Sand-Sand Fruit", "Goro Goro no Mi|Rumble-Rumble Fruit", "Ito Ito no Mi|String-String Fruit", "Hie Hie no Mi|Ice-Ice Fruit", "Magu Magu no Mi|Magma-Magma Fruit", "Pika Pika no Mi|Glint-Glint Fruit"],
      3: ["Yomi Yomi no Mi|Revive-Revive Fruit", "Mero Mero no Mi|Love-Love Fruit", "Moku Moku no Mi|Smoke-Smoke Fruit", "Nikyu Nikyu no Mi|Paw-Paw Fruit", "Uo Uo no Mi|Fish-Fish Fruit", "Soru Soru no Mi|Soul-Soul Fruit", "Mochi Mochi no Mi|Mochi-Mochi Fruit", "Kage Kage no Mi|Shadow-Shadow Fruit", "Doku Doku no Mi|Venom-Venom Fruit", "Gasu Gasu no Mi|Gas-Gas Fruit", "Tori Tori no Mi Model: Phoenix|Phoenix Fruit"],
      4: ["Hobi Hobi no Mi|Hobby-Hobby Fruit", "Bari Bari no Mi|Barrier-Barrier Fruit", "Horo Horo no Mi|Hollow-Hollow Fruit", "Mane Mane no Mi|Clone-Clone Fruit", "Sube Sube no Mi|Slip-Slip Fruit", "Supa Supa no Mi|Dice-Dice Fruit", "Bomu Bomu no Mi|Bomb-Bomb Fruit", "Mogu Mogu no Mi|Dig-Dig Fruit", "Kilo Kilo no Mi|Kilo-Kilo Fruit", "Doru Doru no Mi|Wax-Wax Fruit", "Awa Awa no Mi|Bubble-Bubble Fruit", "Bisu Bisu no Mi|Biscuit-Biscuit Fruit", "Noro Noro no Mi|Slow-Slow Fruit", "Ori Ori no Mi|Bind-Bind Fruit", "Zushi Zushi no Mi|Press-Press Fruit", "Toshi Toshi no Mi|Age-Age Fruit", "Neko Neko no Mi Model: Leopard"],
      5: ["Choki Choki no Mi|Snip-Snip Fruit", "Nagi Nagi no Mi|Calm-Calm Fruit", "Pamu Pamu no Mi|Pop-Pop Fruit", "Jake Jake no Mi|Jacket-Jacket Fruit", "Kachi Kachi no Mi|Hot-Hot Fruit", "Fuku Fuku no Mi|Clothes-Clothes Fruit", "Buki Buki no Mi|Arms-Arms Fruit", "Netsu Netsu no Mi|Heat-Heat Fruit", "Nui Nui no Mi|Stitch-Stitch Fruit", "Shiro Shiro no Mi|Castle-Castle Fruit", "Woshu Woshu no Mi|Wash-Wash Fruit", "Beri Beri no Mi|Berry-Berry Fruit", "Sabi Sabi no Mi|Rust-Rust Fruit", "Kira Kira no Mi|Sparkle-Sparkle Fruit"],
      6: ["Sui Sui no Mi|Swim-Swim Fruit", "Ami Ami no Mi|Net-Net Fruit", "Hira Hira no Mi|Ripple-Ripple Fruit", "Ishi Ishi no Mi|Stone-Stone Fruit", "Pero Pero no Mi|Lick-Lick Fruit", "Mato Mato no Mi|Target-Target Fruit"]
    }
  },
  {
    hard: true,
    prompt: "Name a Stand from JoJo's Bizarre Adventure",
    answers: {
      1: ["Star Platinum", "The World|Za Warudo", "Killer Queen", "Gold Experience", "Crazy Diamond"],
      2: ["King Crimson", "Hermit Purple", "Magician's Red", "Hierophant Green", "Silver Chariot", "Sticky Fingers", "Stone Free", "Heaven's Door", "The Hand", "Echoes", "Made in Heaven", "Gold Experience Requiem|GER"],
      3: ["Sex Pistols", "Aerosmith", "Purple Haze", "Moody Blues", "Spice Girl", "Whitesnake", "C-Moon", "Tusk", "D4C|Dirty Deeds Done Dirt Cheap", "Highway Star", "Bad Company", "The Fool", "Hanged Man", "Emperor", "Cream", "Death Thirteen", "Wonder of U", "Soft & Wet|Soft and Wet", "Diver Down", "Harvest", "Sheer Heart Attack"],
      4: ["Tower of Gray", "Dark Blue Moon", "Strength", "Yellow Temperance", "Ebony Devil", "Lovers", "Sun", "Judgement", "High Priestess", "Geb", "Khnum", "Tohth", "Anubis", "Bastet", "Osiris", "Horus", "Atum", "Red Hot Chili Pepper", "Pearl Jam", "Surface", "Love Deluxe", "The Lock", "Cinderella", "Enigma", "Achtung Baby", "Super Fly", "Stray Cat", "Black Sabbath", "Kraft Work", "Man in the Mirror", "Mr. President", "Beach Boy", "The Grateful Dead", "Baby Face", "White Album", "Talking Head", "Metallica", "Green Day", "Oasis", "Rolling Stones"],
      5: ["Earth Wind and Fire", "Boy II Man", "Little Feet", "Soft Machine", "Clash", "Notorious B.I.G", "Planet Waves", "Goo Goo Dolls", "Marilyn Manson", "Jumpin' Jack Flash", "Limp Bizkit", "Survivor", "Kiss", "Burning Down the House", "Scary Monsters", "Catch the Rainbow", "Cream Starter", "Mandom", "Ball Breaker", "Civil War", "20th Century Boy", "Tattoo You!", "Oh! Lonesome Me", "Hey Ya!", "Born This Way", "Paisley Park", "Speed King"],
      6: ["Nut King Call", "King Nothing", "Fun Fun Fun", "Wired", "Sethan"]
    }
  },
  {
    hard: true,
    prompt: "Name an anime director",
    answers: {
      1: ["Hayao Miyazaki|Miyazaki", "Makoto Shinkai|Shinkai", "Satoshi Kon"],
      2: ["Mamoru Hosoda|Hosoda", "Hideaki Anno|Anno", "Katsuhiro Otomo|Otomo", "Mamoru Oshii|Oshii", "Shinichiro Watanabe", "Isao Takahata|Takahata"],
      3: ["Masaaki Yuasa|Yuasa", "Naoko Yamada", "Goro Miyazaki", "Hiroyuki Imaishi|Imaishi", "Tetsuro Araki", "Kunihiko Ikuhara|Ikuhara", "Yoshiyuki Tomino|Tomino", "Rintaro", "Kenji Kamiyama|Kamiyama", "Sunghoo Park", "Shota Goshozono|Goshozono", "Akiyuki Shinbo|Shinbo", "Osamu Tezuka|Tezuka", "Keiichiro Saito"],
      4: ["Mitsuo Iso", "Kazuya Tsurumaki|Tsurumaki", "Yoshiaki Kawajiri|Kawajiri", "Osamu Dezaki|Dezaki", "Ryutaro Nakamura", "Takeshi Koike", "Kenji Nakamura", "Hiroyasu Ishida", "Tatsuyuki Nagai", "Rie Matsumoto", "Shingo Natsume", "Ayumu Watanabe", "Mari Okada", "Hiromasa Yonebayashi|Yonebayashi", "Keiichi Hara", "Sayo Yamamoto", "Hiroyuki Okiura|Okiura", "Shoji Kawamori|Kawamori"],
      5: ["Yasuomi Umetsu|Umetsu", "Gisaburo Sugii", "Eiichi Yamamoto", "Koji Morimoto", "Takashi Nakamura", "Ryosuke Takahashi", "Kazuki Akane", "Shinji Aramaki", "Mamoru Kanbe", "Hiroko Utsumi", "Fuga Yamashiro"],
      6: ["Yasuhiro Takemoto", "Toshio Hirata", "Hiroyuki Kitakubo", "Kitaro Kosaka"]
    }
  },
  {
    hard: true,
    prompt: "Name a Gundam series or film",
    answers: {
      1: ["Mobile Suit Gundam|Gundam 0079|First Gundam", "Gundam Wing", "Gundam SEED"],
      2: ["Zeta Gundam", "Iron-Blooded Orphans|IBO", "The Witch from Mercury|Witch from Mercury", "Gundam 00", "Gundam Unicorn", "G Gundam", "Char's Counterattack"],
      3: ["Gundam ZZ", "Gundam 0080|War in the Pocket", "Gundam 0083|Stardust Memory", "The 08th MS Team|08th MS Team", "Victory Gundam|V Gundam", "Turn A Gundam", "Gundam X", "Gundam AGE", "Gundam SEED Destiny", "Gundam Build Fighters", "Gundam Thunderbolt", "Hathaway's Flash|Hathaway", "GQuuuuuuX", "Gundam F91", "Endless Waltz|Gundam Wing Endless Waltz"],
      4: ["The Origin|Gundam The Origin", "Reconguista in G|G-Reco", "Gundam Build Divers", "Gundam Narrative|Gundam NT", "Cucuruz Doan's Island", "Gundam SEED Freedom|SEED Freedom"],
      5: ["MS IGLOO", "Gundam Evolve", "Requiem for Vengeance", "SD Gundam", "Gundam Build Metaverse", "Gundam Breaker Battlogue"],
      6: ["G-Saviour", "Mobile Suit Gundam: Silver Phantom|Silver Phantom", "Gundam Sousei"]
    }
  },
  {
    hard: true,
    prompt: "Name a Servant from the Fate series",
    answers: {
      1: ["Saber|Artoria|Artoria Pendragon|King Arthur", "Gilgamesh", "Archer|EMIYA"],
      2: ["Medusa|Rider", "Cu Chulainn|Lancer", "Iskandar", "Heracles|Berserker", "Medea|Caster", "Sasaki Kojiro|Assassin", "Jeanne d'Arc|Jeanne", "Mash Kyrielight|Mash", "Astolfo", "Nero|Nero Claudius"],
      3: ["Mordred", "Lancelot", "Diarmuid", "Gilles de Rais", "Enkidu", "Merlin", "Tamamo no Mae|Tamamo", "Ishtar", "Ereshkigal", "Scathach", "Karna", "Arjuna", "Achilles", "Atalanta", "Okita Souji|Okita", "Oda Nobunaga|Nobunaga", "Miyamoto Musashi|Musashi", "Jack the Ripper", "Nursery Rhyme", "Semiramis", "Siegfried", "Vlad III|Vlad"],
      4: ["Hassan-i-Sabbah|Hassan", "Frankenstein", "Spartacus", "Shakespeare", "Chiron", "Avicebron", "Amakusa Shirou|Shirou Kotomine", "Gawain", "Bedivere", "Tristan", "Ozymandias", "Nitocris", "Quetzalcoatl", "Kiyohime", "Mata Hari", "Medb", "Fionn mac Cumhaill", "Edmond Dantes", "Jeanne Alter", "Moriarty|James Moriarty", "Abigail Williams", "Katsushika Hokusai|Hokusai", "Sakata Kintoki|Kintoki", "Minamoto no Raikou|Raikou"],
      5: ["Paracelsus", "Charles-Henri Sanson|Sanson", "Chevalier d'Eon|d'Eon", "Mephistopheles", "Hans Christian Andersen|Andersen", "Elizabeth Bathory", "Fuuma Kotarou", "Leonidas", "Darius III", "Arash", "Romulus", "Boudica", "Asterios"],
      6: ["Paul Bunyan", "Xu Fu", "Kingprotea", "Charlotte Corday", "Hessian Lobo", "Jaguar Warrior"]
    }
  },
  {
    hard: true,
    prompt: "Name a Japanese anime voice actor (seiyuu)",
    answers: {
      1: ["Masako Nozawa", "Yuki Kaji", "Mamoru Miyano", "Kana Hanazawa", "Junko Takeuchi"],
      2: ["Hiroshi Kamiya", "Daisuke Ono", "Jun Fukuyama", "Takahiro Sakurai", "Rie Kugimiya", "Mayumi Tanaka", "Natsuki Hanae", "Yuichi Nakamura", "Tomokazu Sugita", "Saori Hayami", "Kenjiro Tsuda", "Junichi Suwabe", "Megumi Ogata", "Aoi Yuki"],
      3: ["Kappei Yamaguchi", "Megumi Hayashibara", "Akio Otsuka", "Koichi Yamadera", "Ryo Horikawa", "Toshio Furukawa", "Hiro Shimono", "Tomokazu Seki", "Showtaro Morikubo", "Kaito Ishikawa", "Nobuhiko Okamoto", "Yoshitsugu Matsuoka", "Ayane Sakura", "Inori Minase", "Sora Amamiya", "Miyuki Sawashiro", "Yui Horie", "Maaya Sakamoto", "Romi Park", "Akira Ishida", "Koki Uchiyama", "Yuko Miyamura", "Kotono Mitsuishi", "Kazuya Nakai", "Hikaru Midorikawa", "Toru Furuya"],
      4: ["Rica Matsumoto", "Chikao Otsuka", "Norio Wakamoto", "Unsho Ishizuka", "Kenyu Horiuchi", "Takehito Koyasu", "Ryotaro Okiayu", "Soichiro Hoshi", "Ai Kayano", "Atsumi Tanezaki", "Lynn", "Tomoyo Kurosawa", "Rie Takahashi", "Yoko Hikasa", "Shinichiro Miki", "Kenichi Suzumura", "Mitsuo Iwata", "Akemi Okamura", "Kazue Ikura", "Mie Sonozaki", "Daisuke Namikawa", "Sumire Morohoshi", "Kenta Miyake", "Minami Takayama", "Wakana Yamazaki"],
      5: ["Kei Tomiyama", "Hideyuki Tanaka", "Banjo Ginga", "Joji Yanami", "Ichiro Nagai", "Takeshi Aono"],
      6: ["Kaneta Kimotsuki", "Shozo Iizuka", "Junpei Takiguchi"]
    }
  },
  {
    hard: true,
    prompt: "Name an anime composer",
    answers: {
      1: ["Joe Hisaishi|Hisaishi", "Yoko Kanno|Kanno", "Hiroyuki Sawano|Sawano"],
      2: ["Kenji Kawai", "Yuki Kajiura|Kajiura", "Shiro Sagisu|Sagisu", "Go Shiina", "RADWIMPS"],
      3: ["Yasuharu Takanashi|Takanashi", "Kevin Penkin", "Kensuke Ushio|Ushio", "Taku Iwasaki", "Susumu Hirasawa", "Yugo Kanno", "Evan Call", "Masaru Yokoyama", "Nujabes"],
      4: ["Yoshihiro Ike", "Shunsuke Kikuchi", "Hajime Mizoguchi", "Kow Otani", "Akira Senju", "Yoshihisa Hirano", "Michiru Oshima", "Tatsuya Kato", "Kaoru Wada", "Shiro Hamaguchi", "Toshihiko Sahashi", "Kenji Yamamoto", "Kohei Tanaka"],
      5: ["Seiji Yokoyama"],
      6: ["Michiaki Watanabe"]
    }
  },
  {
    hard: true,
    prompt: "Name a Bleach Zanpakuto",
    answers: {
      1: ["Zangetsu|Tensa Zangetsu", "Senbonzakura|Senbonzakura Kageyoshi", "Hyorinmaru|Daiguren Hyorinmaru"],
      2: ["Sode no Shirayuki", "Zabimaru|Hihio Zabimaru", "Kyoka Suigetsu", "Benihime", "Ryujin Jakka", "Shinso", "Katen Kyokotsu", "Haineko"],
      3: ["Ashisogi Jizo|Konjiki Ashisogi Jizo", "Suzumebachi", "Minazuki", "Hozukimaru", "Ruri'iro Kujaku|Fuji Kujaku", "Tobiume", "Wabisuke", "Kazeshini", "Tenken", "Sogyo no Kotowari", "Suzumushi", "Sakanade", "Nozarashi", "Muramasa"],
      4: ["Tachikaze", "Gegetsuburi", "Kinshara", "Kubikiri Orochi", "Nejibana"],
      5: ["Gonryomaru", "Itegumo", "Haguro Tonbo", "Tengumaru", "Shinken Hakkyoken"],
      6: ["Hisagomaru", "Sanpo Kenju"]
    }
  },
  {
    hard: true,
    prompt: "Name an anime OVA released before 2000",
    answers: {
      1: ["Bubblegum Crisis", "Legend of the Galactic Heroes|LOGH"],
      2: ["Gunbuster|Aim for the Top", "Patlabor", "Gundam 0080|War in the Pocket", "Gundam 0083|Stardust Memory", "Tenchi Muyo", "Golden Boy", "Ah! My Goddess|Oh My Goddess"],
      3: ["Giant Robo", "Macross Plus", "Record of Lodoss War", "The 08th MS Team|08th MS Team", "Megazone 23", "Riding Bean", "Devilman", "Bastard!!|Bastard", "Black Jack"],
      4: ["Dominion Tank Police", "Cyber City Oedo 808", "Gall Force", "Iczer-One", "Detonator Orgun", "Hades Project Zeorymer|Zeorymer", "Appleseed", "Ruin Explorers", "Dirty Pair Flash"],
      5: ["Genocyber", "Mad Bull 34", "Baoh", "Battle Angel|Gunnm", "Moldiver", "Kishin Corps"],
      6: ["Dream Hunter Rem", "Leda: The Fantastic Adventure of Yohko|Leda", "Bio-Booster Armor Guyver|Guyver", "Psychic Wars"]
    }
  },
  {
    hard: true,
    prompt: "Name a manga or anime by Osamu Tezuka",
    answers: {
      1: ["Astro Boy|Tetsuwan Atom", "Black Jack"],
      2: ["Kimba the White Lion|Jungle Emperor|Jungle Taitei", "Phoenix|Hi no Tori", "Dororo"],
      3: ["Princess Knight|Ribbon no Kishi", "Buddha", "Metropolis"],
      4: ["Unico", "Message to Adolf|Adolf", "MW", "The Three-Eyed One|Mitsume ga Tooru"],
      5: ["Ode to Kirihito", "Apollo's Song", "Ayako", "Marvelous Melmo|Fushigi na Melmo"],
      6: ["Big X", "Vampires", "A Tree in the Sun|Hidamari no Ki", "The Book of Human Insects", "Microid S"]
    }
  },
  {
    hard: true,
    prompt: "Name a manga or anime by CLAMP",
    answers: {
      1: ["Cardcaptor Sakura"],
      2: ["xxxHolic", "Tsubasa: Reservoir Chronicle|Tsubasa", "Magic Knight Rayearth|Rayearth", "Chobits"],
      3: ["X|X/1999", "Tokyo Babylon"],
      4: ["Kobato", "Angelic Layer", "Clover", "RG Veda", "Blood-C"],
      5: ["Gate 7", "Legal Drug|Lawful Drug", "Wish", "Drug & Drop", "Miyuki-chan in Wonderland"],
      6: ["Man of Many Faces", "Duklyon", "Shirahime-Syo", "Suki"]
    }
  },
  {
    hard: true,
    prompt: "Name a manga or anime by Rumiko Takahashi",
    answers: {
      1: ["Inuyasha", "Ranma 1/2|Ranma"],
      2: ["Urusei Yatsura", "Maison Ikkoku"],
      3: ["Rin-ne|Kyokai no Rinne"],
      4: ["Mermaid Saga|Mermaid Forest", "Mao"],
      5: ["One-Pound Gospel"],
      6: ["Rumic Theater", "Fire Tripper"]
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
