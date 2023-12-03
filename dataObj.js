
const moviess = [
    {
        titleid:1,
        title: "Jumanji: Welcome to the jungle",
        description: "When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game.",
        tag: "Action,Adventure",
        rating:4,
        cast:"rock johnson,jackson blackson,jick nonas",
        playlink:"3zM4FfxeqTc",
        backgroundimg:"https://static01.nyt.com/images/2017/12/19/arts/JUMANJI1/JUMANJI1-superJumbo.jpg?quality=75&auto=webp",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/jumanji_the_next_level.jpg",
        castimg:["https://pbs.twimg.com/media/CwYxXteUkAAkHaw?format=jpg&name=900x900","https://media.distractify.com/brand-img/1qowZKPGH/2160x2117/jack-black-retiring-jumping-1576121712450.jpg","https://images.mubicdn.net/images/cast_member/281456/cache-179563-1559374083/image-w856.jpg?size=384x"],
        

    },
    {
        titleid: 2,
        title: "Spider-Man: No Way Home",
        description: "Peter Parker's world turns upside down when his identity is revealed, bringing old foes from different realities. He seeks help from Doctor Strange to fix the situation.",
        tag: "Action, Adventure, Sci-Fi",
        rating: 5,
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
        playlink:"a6y0b_G5OZQ",
        backgroundimg:"https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-green-goblin-doc-ock-electro-sony.jpg?resize=768%2C432",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/spider_mannwh.png",
        castimg:["https://hips.hearstapps.com/hmg-prod/images/elm030119cetomhollandnature-001-1561051667.jpg?resize=980:*","https://hips.hearstapps.com/hmg-prod/images/zendaya-stylecomp2-1625682166.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*","https://variety.com/wp-content/uploads/2023/01/Benedict-Cumberbatch-e1672774459246.jpg?w=1000&h=563&crop=1&resize=1000%2C563"]
    },
    {
        titleid: 3,
        title: "The Hitman's Wife's Bodyguard",
        description: "Michael Bryce must join forces with hitman Darius and his wife Sonia to save Europe from a vengeful dictator and a powerful cybercriminal.",
        tag: "Action, Comedy, Crime",
        rating: 3,
        cast: "Ryan Reynolds, Samuel L. Jackson, Salma Hayek",
        backgroundimg:"https://images.hola.com/us/images/0269-124491c57935-4d978a6e1070-1000/horizontal-1200/39-hitman-39-s-wife-39-s-bodyguard-39-poster.jpg",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/hitmanswifesbodyguard.jpg",
        castimg:["https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/330px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/330px-SamuelLJackson.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salma_Hayek-9894.jpg/330px-Salma_Hayek-9894.jpg"]
        
    },
    {
        titleid: 4,
        title: "Shang-Chi",
        description: "Shang-Chi is drawn into the clandestine Ten Rings organization and must confront his past while facing powerful enemies.",
        tag: "Action, Adventure, Fantasy",
        rating: 4,
        cast: "Simu Liu, Tony Leung, Awkwafina",
        backgroundimg:"https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/shang-chi-1629920077.jpeg?resize=1536,768",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/shang_chi_poster.png",
        castimg:["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Simu_Liu_by_Gage_Skidmore.jpg/330px-Simu_Liu_by_Gage_Skidmore.jpg","https://upload.wikimedia.org/wikipedia/commons/3/37/Tony_Leung_%28cropped%29.jpg","https://img.buzzfeed.com/buzzfeed-static/static/2023-05/25/16/asset/388a30285fcf/sub-buzz-415-1685033392-1.jpg?crop=1452:1105;1246,0"]
    },
    {
        titleid: 5,
        title: "Spectre",
        description: "James Bond embarks on a mission to uncover the truth behind a sinister organization while dealing with personal challenges.",
        tag: "Action, Adventure, Thriller",
        rating: 4,
        cast: "Daniel Craig, Christoph Waltz, Lea Seydoux",
        backgroundimg:"https://www.007.com/wp-content/uploads/2019/10/007_Spectre-Day-of-the-Dead_LANDSCAPE.png",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/spectre_7.jpg",
        castimg:["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Daniel_Craig_in_2021.jpg/330px-Daniel_Craig_in_2021.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christof-lauer-2010-ffm-007.jpg/330px-Christof-lauer-2010-ffm-007.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/L%C3%A9a_Seydoux_Cannes_2016.jpg/330px-L%C3%A9a_Seydoux_Cannes_2016.jpg"]
    },
    {
        titleid: 6,
        title: "Loki",
        description: "The God of Mischief finds himself in a time-bending adventure after escaping the Avengers' clutches and facing powerful adversaries.",
        tag: "Action, Adventure, Fantasy",
        rating: 4,
        cast: "Tom Hiddleston, Owen Wowson",
        backgroundimg:"https://assets-prd.ignimgs.com/2023/11/15/streamingwars-loki-blogroll-1700009821295.jpg?width=1920",
        vertimg:"https://mediaproxy.tvtropes.org/width/350/https://static.tvtropes.org/pmwiki/pub/images/e102eaaa_c1d7_4b13_85e0_071d695e5511.jpeg",
        castimg:["https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/330px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Owen_Wilson_Cannes_2011.jpg/330px-Owen_Wilson_Cannes_2011.jpg"]
    },
    {
        titleid: 7,
        title: "Hawkeye",
        description: "Hawkeye teams up with a young archer to confront the ghosts of his past during the holiday season in New York City.",
        tag: "Action, Adventure, Crime",
        rating: 3,
        cast: "Jeremy Renner, Hailee Steinfeld, Florence Pugh",
        backgroundimg:"https://ca-times.brightspotcdn.com/dims4/default/ad8dab4/2147483647/strip/true/crop/3000x1689+0+0/resize/1200x676!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3c%2F4d%2F404161e84a2ca0dd2bff078009b6%2Fhawkeye-106-toned.jpg",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/97651e3f_272b_444e_b7eb_939f0b67ce00.jpeg",
        castimg:["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jeremy_Renner_by_Gage_Skidmore_2.jpg/330px-Jeremy_Renner_by_Gage_Skidmore_2.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hailee_Steinfeld_by_Gage_Skidmore.jpg/330px-Hailee_Steinfeld_by_Gage_Skidmore.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Florence_Pugh_-_The_Wonder_BFI_London_Film_Festival_Premiere%2C_October_2022_%28cropped%29.jpg/330px-Florence_Pugh_-_The_Wonder_BFI_London_Film_Festival_Premiere%2C_October_2022_%28cropped%29.jpg"]
    },
    {
        titleid: 8,
        title: "Jungle Cruise",
        description: "A riverboat captain takes a scientist and her brother on an adventurous journey to find a magical tree with supernatural healing powers.",
        tag: "Action, Adventure, Comedy",
        rating: 3,
        cast: "Dwayne Johnson, Emily Blunt, Jack Whitehall",
        backgroundimg:"https://www.nwpb.org/wp-content/uploads/2021/08/jungle-cruise-2021.jpg",
        vertimg:"https://static.tvtropes.org/pmwiki/pub/images/jungle_cruise_poster_4538533.jpg",
        castimg:["https://pbs.twimg.com/media/CwYxXteUkAAkHaw?format=jpg&name=900x900","https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emily_Blunt_SAG_Awards_2019.png/330px-Emily_Blunt_SAG_Awards_2019.png"]
    },
    {
        titleid: 9,
        title: "Inglourious Basterds",
        description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        tag: "Adventure,Drama,War",
        rating: 5,
        cast: "Brad Pitt, Diane Kruger, Eli Roth",
        playlink: "KnrRy6kSFF0",
        backgroundimg: "https://images.bauerhosting.com/legacy/empire-tmdb/films/16869/images/bk0GylJLneaSbpQZXpgTwleYigq.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=992&q=80",
        vertimg: "https://m.media-amazon.com/images/I/71LKzze-ElL._SL1360_.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Diane_Kruger-5300_%28cropped%29.jpg/330px-Diane_Kruger-5300_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/EliRothIBAug09.jpg/330px-EliRothIBAug09.jpg"]
    },
    {
        titleid: 10,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey to Mount Doom, the only place where it can be destroyed.",
        tag: "Action,Adventure,Drama",
        rating: 3,
        cast: "Elijah Wood, Ian McKellen, Orlando Bloom",
        playlink: "V75dMMIW2B4",
        backgroundimg: "https://variety.com/wp-content/uploads/2023/04/MCDLOOF_EC065.jpg?w=1000&h=563&crop=1&resize=1000%2C563",
        vertimg: "https://variety.com/wp-content/uploads/2023/04/MCDLOOF_EC065.jpg?w=1000&h=563&crop=1&resize=1000%2C563",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Elijah_Wood_%2847955397556%29_%28cropped%29.jpg/330px-Elijah_Wood_%2847955397556%29_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/McKellenRichmnd040219-5_%2846275370484%29_%28cropped%29.jpg/330px-McKellenRichmnd040219-5_%2846275370484%29_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/330px-Orlando_Bloom_Cannes_2013.jpg"]
    },
    {
        titleid: 11,
        title: "The Silence of the Lambs",
        description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        tag: "Crime,Drama,Thriller",
        rating: 4,
        cast: "Jodie Foster, Anthony Hopkins",
        playlink: "W6Mm8Sbe__o",
        backgroundimg: "https://s3.amazonaws.com/static.rogerebert.com/uploads/blog_post/primary_image/features/timeless-horror-the-25th-anniversary-of-the-silence-of-the-lambs/silence-of-the-lambs.jpg",
        vertimg: "https://s3.amazonaws.com/criterion-production/films/46014912ca0c20592c472f5bbe33e4f8/L9AQ95Y7z2vOIUf1ntwvpZsZx3kp8B_large.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/AnthonyHopkins10TIFF.jpg/330px-AnthonyHopkins10TIFF.jpg"]
    },
    {
        titleid: 12,
        title: "The Departed",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        tag: "Crime,Drama,Thriller",
        rating: 5,
        cast: "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
        playlink: "auYbpnEwBBg",
        backgroundimg: "https://ew.com/thmb/Kcmx2-bunw4mdax8rHucXWEqViA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/matt-damon-leonardo-dicaprio-the-departed-092523-1-d9160de92b704c1993348dfe4273ae9a.jpg",
        vertimg: "https://m.media-amazon.com/images/I/81ZOilPKzYL._SL1500_.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Matt_Damon%2C_Berlinale_2023_%28cropped%29.jpg/330px-Matt_Damon%2C_Berlinale_2023_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Jack_Nicholson_2001.jpg/330px-Jack_Nicholson_2001.jpg"]
    },
    {
        titleid: 13,
        title: "The Prestige",
        description: "Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.",
        tag: "Drama,Mystery,Sci-Fi",
        rating: 1,
        cast: "Christian Bale, Scarlett Johansson",
        playlink: "ijXruSzfGEc",
        backgroundimg: "https://www.brightwalldarkroom.com/wp-content/uploads/2022/03/The-Prestige_v3.jpg",
        vertimg: "https://m.media-amazon.com/images/I/619c+UQZaOL._SL1425_.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/330px-Christian_Bale-7837.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg/330px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg"]
    },
    {
        titleid: 14,
        title: "Fight Club",
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        tag: "Drama",
        rating: 4,
        cast: "Brad Pitt, Edward Norton",
        playlink: "qtRKdVHc-cE",
        backgroundimg: "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/w_1920,c_limit/Baker-FightClub.jpg",
        vertimg: "https://m.media-amazon.com/images/I/71YFxhhSRPL._SL1024_.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg/330px-Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg"]
    },
    {
        titleid: 15,
        title: "Goodfellas",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        tag: "Biography,Crime,Drama",
        rating: 5,
        cast: "Robert De Niro,Joe Pesci",
        playlink: "2ilzidi_J8Q",
        backgroundimg: "https://c4.wallpaperflare.com/wallpaper/727/124/932/goodfellas-robert-de-niro-ray-liotta-joe-pesci-wallpaper-preview.jpg",
        vertimg: "https://wallpapers.com/images/high/goodfellas-biographical-crime-film-0hsj7xmq5vkfauoc.webp",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Robert_De_Niro_Cannes_2016_2.jpg/330px-Robert_De_Niro_Cannes_2016_2.jpg",'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/JoePesci-2009.jpg/330px-JoePesci-2009.jpg']
    },
    {
        titleid: 16,
        title: "The Green Mile",
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        tag: "Crime,Drama,Fantasy",
        rating: 4,
        cast: "Tom Hanks, Michael Clarke Duncan, David Morse",
        playlink: "Ki4haFrqSrw",
        backgroundimg: "https://wallpapercave.com/dwp2x/wp3538403.jpg",
        vertimg: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59DS/image?locale=en-ie&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/330px-Tom_Hanks_TIFF_2019.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MClarkeDuncan021109-R106_%2850094589037%29.jpg/330px-MClarkeDuncan021109-R106_%2850094589037%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/David_Morse_%282015%29.jpg/330px-David_Morse_%282015%29.jpg"]
    },
    {
        titleid: 17,
        title: "Se7en",
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        tag: "Crime,Drama,Mystery",
        rating: 3,
        cast: "Morgan Freeman, Brad Pitt",
        playlink: "J4YV2_TcCoE",
        backgroundimg: "https://c4.wallpaperflare.com/wallpaper/454/318/371/se7en-movies-the-seven-deadly-sins-text-wallpaper-preview.jpg",
        vertimg: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-143251/seven-movie.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_%28cropped%29.jpg/330px-Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg"]
    },
    {
        titleid: 18,
        title: "The Usual Suspects",
        description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        tag: "Crime,Drama,Mystery",
        rating: 5,
        cast: "Kevin Spacey, Gabriel Byrne",
        playlink: "oiXdPolca5w",
        backgroundimg: "https://wallpapercave.com/dwp2x/wp2147823.jpg",
        vertimg: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-129496/the-usual-suspects.jpg",
        castimg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Kevin_Spacey%2C_May_2013_%28cropped%29.jpg/330px-Kevin_Spacey%2C_May_2013_%28cropped%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gabriel_Byrne_2010.jpg/330px-Gabriel_Byrne_2010.jpg"]
    }
    

];

export { moviess};
