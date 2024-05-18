document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById('audio-player');
    const albumsContainer = document.querySelector('.albums');
    const songsContainer = document.querySelector('.songs');

    albumsContainer.addEventListener('click', function () {
        // 切换类
        this.classList.toggle('expanded');
    });
    // Album data (replace with actual data)
    const albums = [
        {
            title: '1989 TS',
            cover: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/1989%20(Taylor\'s%20Version).jpg',
            songs: [
                {
                    title: 'Slut! (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-%27Slut!%27%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'All You Had To Do Was Stay (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-All%20You%20Had%20To%20Do%20Was%20Stay%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Bad Blood (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Bad%20Blood%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Blank Space (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Blank%20Space%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Clean (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Clean%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'How You Get The Girl (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-How%20You%20Get%20The%20Girl%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'I Know Places (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-I%20Know%20Places%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'I Wish You Would (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-I%20Wish%20You%20Would%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Is It Over Now？ (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Is%20It%20Over%20Now%EF%BC%9F%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'New Romantics (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-New%20Romantics%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Now That We Don\'t Talk (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Now%20That%20We%20Don\'t%20Talk%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Out Of The Woods (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Out%20Of%20The%20Woods%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Say Don\'t Go (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Say%20Don\'t%20Go%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Shake It Off (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Shake%20It%20Off%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Style (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Style%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Suburban Legends (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Suburban%20Legends%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'This Love (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-This%20Love%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Welcome To New York (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Welcome%20To%20New%20York%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Wildest Dreams (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Wildest%20Dreams%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'Wonderland (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-Wonderland%20(Taylor\'s%20Version).flac'
                },
                {
                    title: 'You Are In Love (Taylor\'s Version)',
                    url: 'http://cdn.44wk.top/music/1989%20(Taylor\'s%20Version)/Taylor%20Swift-You%20Are%20In%20Love%20(Taylor\'s%20Version).flac'
                },
            ]
        },

        {
            title: '1989', cover: 'http://cdn.44wk.top/music/1989(Deluxe)/1989(Deluxe).jpg',
            songs: [
                {
                    'title': 'All You Had To Do Was Stay',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-All%20You%20Had%20To%20Do%20Was%20Stay.flac'
                },
                {'title': 'Bad Blood', 'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Bad%20Blood.flac'},
                {
                    'title': 'Blank Space (Guitar, Vocal)',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Blank%20Space(Guitar%E3%80%81Vocal).flac'
                },
                {
                    'title': 'Blank Space',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Blank%20Space.flac'
                },
                {'title': 'Clean', 'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Clean.flac'},
                {
                    'title': 'How You Get The Girl',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-How%20You%20Get%20The%20Girl.flac'
                },
                {
                    'title': 'I Know Places (Piano, Vocal)',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-I%20Know%20Places(Piano%E3%80%81Vocal).flac'
                },
                {
                    'title': 'I Know Places',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-I%20Know%20Places.flac'
                },
                {
                    'title': 'I Wish You Would (Track, Vocal)',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-I%20Wish%20You%20Would(Track%E3%80%81Vocal).flac'
                },
                {
                    'title': 'I Wish You Would',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-I%20Wish%20You%20Would.flac'
                },
                {
                    'title': 'New Romantics',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-New%20Romantics.flac'
                },
                {
                    'title': 'Out Of The Woods',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Out%20Of%20The%20Woods.flac'
                },
                {
                    'title': 'Shake It Off',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Shake%20It%20Off.flac'
                },
                {'title': 'Style', 'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Style.flac'},
                {'title': 'This Love', 'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-This%20Love.flac'},
                {
                    'title': 'Welcome To New York',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Welcome%20To%20New%20York.flac'
                },
                {
                    'title': 'Wildest Dreams',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Wildest%20Dreams.flac'
                },
                {'title': 'Wonderland', 'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-Wonderland.flac'},
                {
                    'title': 'You Are In Love',
                    'url': 'http://cdn.44wk.top/music/1989(Deluxe)/Taylor%20Swift-You%20Are%20In%20Love.flac'
                }
            ]

        },


        {
            title: 'Fearless',
            cover: 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Fearless%20(Platinum%20Edition).jpg',
            songs:
                [
                    {
                        'title': 'Breathe',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift&Colbie%20Caillat-Breathe.flac'
                    },
                    {
                        'title': 'Change',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Change.flac'
                    },
                    {
                        'title': 'Come In With The Rain',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Come%20In%20With%20The%20Rain.flac'
                    },
                    {
                        'title': 'Fearless',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Fearless.flac'
                    },
                    {
                        'title': 'Fifteen',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Fifteen.flac'
                    },
                    {
                        'title': 'Forever & Always (Piano Version)',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Forever%20&%20Always(Piano%20Version).flac'
                    },
                    {
                        'title': 'Forever & Always',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Forever%20&%20Always.flac'
                    },
                    {
                        'title': 'Hey Stephen',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Hey%20Stephen.flac'
                    },
                    {
                        'title': 'Jump Then Fall',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Jump%20Then%20Fall.flac'
                    },
                    {
                        'title': 'Love Story (US Pop Mix International Edition)',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Love%20Story(US%20Pop%20Mix%E4%B8%A8International%20Edition).flac'
                    },
                    {
                        'title': 'Love Story',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Love%20Story.flac'
                    },
                    {
                        'title': 'Our Song (International Edition)',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Our%20Song(International%20Edition).mp3'
                    },
                    {
                        'title': 'Should\'ve Said No (International Edition)',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Should%27ve%20Said%20No(International%20Edition).mp3'
                    },
                    {
                        'title': 'SuperStar',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-SuperStar.flac'
                    },
                    {
                        'title': 'Teardrops On My Guitar (International Edition)',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Teardrops%20On%20My%20Guitar(International%20Edition).flac'
                    },
                    {
                        'title': 'Tell Me Why',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Tell%20Me%20Why.flac'
                    },
                    {
                        'title': 'The Best Day',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-The%20Best%20Day.flac'
                    },
                    {
                        'title': 'The Other Side Of The Door',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-The%20Other%20Side%20Of%20The%20Door.flac'
                    },
                    {
                        'title': 'The Way I Loved You',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-The%20Way%20I%20Loved%20You.flac'
                    },
                    {
                        'title': 'Untouchable',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-Untouchable.flac'
                    },
                    {
                        'title': 'White Horse',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-White%20Horse.flac'
                    },
                    {
                        'title': 'You Belong With Me',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-You%20Belong%20With%20Me.flac'
                    },
                    {
                        'title': 'You\'re Not Sorry',
                        'url': 'http://cdn.44wk.top/music/Fearless%20(Platinum%20Edition)/Taylor%20Swift-You%27re%20Not%20Sorry.flac'
                    }
                ]
        },

        {
            title: 'Lover',
            cover: 'http://cdn.44wk.top/music/Lover/Lover.jpg',
            songs: [
                {
                    'title': 'ME! (Feat. Brendon Urie Of Panic! At The Disco)',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift&Brendon%20Urie-ME!(Feat.%20Brendon%20Urie%20Of%20Panic!%20At%20The%20Disco).flac'
                },
                {'title': 'Afterglow', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Afterglow.flac'},
                {
                    'title': 'Cornelia Street',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Cornelia%20Street.flac'
                },
                {'title': 'Cruel Summer', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Cruel%20Summer.flac'},
                {'title': 'Daylight', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Daylight.flac'},
                {
                    'title': 'Death By A Thousand Cuts',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Death%20By%20A%20Thousand%20Cuts.flac'
                },
                {'title': 'False God', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-False%20God.flac'},
                {
                    'title': 'I Forgot That You Existed (Piano, Vocal)',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-I%20Forgot%20That%20You%20Existed(Piano%E3%80%81Vocal).flac'
                },
                {
                    'title': 'I Forgot That You Existed',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-I%20Forgot%20That%20You%20Existed.flac'
                },
                {
                    'title': 'I Think He Knows',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-I%20Think%20He%20Knows.flac'
                },
                {
                    'title': 'It’s Nice To Have A Friend',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-It%E2%80%99s%20Nice%20To%20Have%20A%20Friend.flac'
                },
                {'title': 'London Boy', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-London%20Boy.flac'},
                {
                    'title': 'Lover (Piano, Vocal)',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Lover(Piano%E3%80%81Vocal).flac'
                },
                {'title': 'Lover', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Lover.flac'},
                {
                    'title': 'Miss Americana & The Heartbreak Prince',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Miss%20Americana%20&%20The%20Heartbreak%20Prince.flac'
                },
                {'title': 'Paper Rings', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Paper%20Rings.flac'},
                {
                    'title': 'Soon You’ll Get Better (feat. Dixie Chicks)',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-Soon%20You%E2%80%99ll%20Get%20Better%20(feat.%20Dixie%20Chicks).flac'
                },
                {'title': 'The Archer', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-The%20Archer.flac'},
                {'title': 'The Man', 'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-The%20Man.flac'},
                {
                    'title': 'You Need To Calm Down',
                    'url': 'http://cdn.44wk.top/music/Lover/Taylor%20Swift-You%20Need%20To%20Calm%20Down.flac'
                }
            ]
        },

        {
            title: 'Midnights',
            cover: 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Midnights%20(3am%20Edition).jpg',
            songs: [
                {
                    'title': 'Snow On The Beach (Explicit)',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift&Lana%20Del%20Rey-Snow%20On%20The%20Beach(Explicit).flac'
                },
                {
                    'title': 'Anti-Hero',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Anti-Hero.flac'
                },
                {
                    'title': 'Bejeweled',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Bejeweled.flac'
                },
                {
                    'title': 'Bigger Than The Whole Sky',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Bigger%20Than%20The%20Whole%20Sky.flac'
                },
                {
                    'title': 'Dear Reader',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Dear%20Reader.flac'
                },
                {
                    'title': 'Glitch',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Glitch.flac'
                },
                {
                    'title': 'High Infidelity',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-High%20Infidelity.flac'
                },
                {
                    'title': 'Karma (Explicit)',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Karma(Explicit).flac'
                },
                {
                    'title': 'Labyrinth',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Labyrinth.flac'
                },
                {
                    'title': 'Lavender Haze (Explicit)',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Lavender%20Haze(Explicit).flac'
                },
                {
                    'title': 'Maroon (Explicit)',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Maroon(Explicit).flac'
                },
                {
                    'title': 'Mastermind',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Mastermind.flac'
                },
                {
                    'title': 'Midnight Rain',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Midnight%20Rain.flac'
                },
                {
                    'title': 'Paris',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Paris.flac'
                },
                {
                    'title': 'Question...? (Explicit)',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Question...%EF%BC%9F(Explicit).flac'
                },
                {
                    'title': 'Sweet Nothing',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Sweet%20Nothing.flac'
                },
                {
                    'title': 'The Great War',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-The%20Great%20War.flac'
                },
                {
                    'title': 'Vigilante S..t (Explicit)',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Vigilante%20S..t(Explicit).flac'
                },
                {
                    'title': 'Would\'ve, Could\'ve, Should\'ve',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-Would\'ve,%20Could\'ve,%20Should\'ve.flac'
                },
                {
                    'title': 'You\'re On Your Own, Kid',
                    'url': 'http://cdn.44wk.top/music/Midnights%20(3am%20Edition)/Taylor%20Swift-You\'re%20On%20Your%20Own,%20Kid.flac'
                }
            ]
        },

        {
            title: 'Speak Now TS',
            cover: 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Speak%20Now%20(Taylor\'s%20Version).jpg',
            songs: [
                {
                    'title': 'Electric Touch (Taylor\'s Version) (From The Vault)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift&Fall%20Out%20Boy-Electric%20Touch(Taylor\'s%20Version%E4%B8%A8From%20The%20Vault).flac'
                },
                {
                    'title': 'Castles Crumbling (Taylor\'s Version) (From The Vault)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift&Hayley%20Williams-Castles%20Crumbling(Taylor\'s%20Version%E4%B8%A8From%20The%20Vault).flac'
                },
                {
                    'title': 'Back To December (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Back%20To%20December(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Better Than Revenge (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Better%20Than%20Revenge(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Dear John (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Dear%20John(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Enchanted (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Enchanted(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Foolish One (Taylor\'s Version) (From The Vault)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Foolish%20One(Taylor\'s%20Version%E4%B8%A8From%20The%20Vault).flac'
                },
                {
                    'title': 'Haunted (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Haunted(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'I Can See You (Taylor\'s Version) (From The Vault)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-I%20Can%20See%20You(Taylor\'s%20Version%E4%B8%A8From%20The%20Vault).flac'
                },
                {
                    'title': 'Innocent (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Innocent(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Last Kiss (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Last%20Kiss(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Long Live (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Long%20Live(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Mean (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Mean(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Mine (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Mine(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Never Grow Up (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Never%20Grow%20Up(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Ours (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Ours(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Sparks Fly (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Sparks%20Fly(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Speak Now (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Speak%20Now(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Superman (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Superman(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'The Story Of Us (Taylor\'s Version)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-The%20Story%20Of%20Us(Taylor\'s%20Version).flac'
                },
                {
                    'title': 'Timeless (Taylor\'s Version) (From The Vault)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-Timeless(Taylor\'s%20Version%E4%B8%A8From%20The%20Vault).flac'
                },
                {
                    'title': 'When Emma Falls in Love (Taylor\'s Version) (From The Vault)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now%20(Taylor\'s%20Version)/Taylor%20Swift-When%20Emma%20Falls%20in%20Love(Taylor\'s%20Version%E4%B8%A8From%20The%20Vault).flac'
                }
            ]


        },

        {
            title: 'Speak Now',
            cover: 'http://cdn.44wk.top/music/Speak%20Now/Speak%20Now.jpg',
            songs: [
                {
                    'title': 'Back To December',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Back%20To%20December.flac'
                },
                {
                    'title': 'Back To December (MP3)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Back%20To%20December.mp3'
                },
                {
                    'title': 'Better Than Revenge',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Better%20Than%20Revenge.flac'
                },
                {
                    'title': 'Better Than Revenge (MP3)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Better%20Than%20Revenge.mp3'
                },
                {'title': 'Dear John', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Dear%20John.flac'},
                {'title': 'Enchanted', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Enchanted.flac'},
                {'title': 'Haunted', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Haunted.flac'},
                {'title': 'Innocent', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Innocent.flac'},
                {'title': 'Last Kiss', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Last%20Kiss.flac'},
                {'title': 'Long Live', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Long%20Live.flac'},
                {
                    'title': 'Long Live (MP3)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Long%20Live.mp3'
                },
                {'title': 'Mean', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Mean.flac'},
                {
                    'title': 'Mine (POP Mix)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Mine(POP%20Mix).flac'
                },
                {
                    'title': 'Mine (POP Mix) (MP3)',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Mine(POP%20Mix).mp3'
                },
                {
                    'title': 'Never Grow Up',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Never%20Grow%20Up.flac'
                },
                {
                    'title': 'Sparks Fly',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Sparks%20Fly.flac'
                },
                {'title': 'Speak Now', 'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-Speak%20Now.flac'},
                {
                    'title': 'The Story Of Us',
                    'url': 'http://cdn.44wk.top/music/Speak%20Now/Taylor%20Swift-The%20Story%20Of%20Us.flac'
                }
            ]


        },


        {
            title: 'Taylor Swift',
            cover: 'http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special).jpg',
            songs: [
                {
                    "title": "A Perfectly Good Heart (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-A%20Perfectly%20Good%20Heart(Commentary).flac"
                },
                {
                    "title": "A Perfectly Good Heart",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-A%20Perfectly%20Good%20Heart.flac"
                },
                {
                    "title": "A Place In This World (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-A%20Place%20In%20This%20World(Commentary).flac"
                },
                {
                    "title": "A Place In This World",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-A%20Place%20In%20This%20World.flac"
                },
                {
                    "title": "Cold As You (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Cold%20As%20You(Commentary).flac"
                },
                {
                    "title": "Cold As You",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Cold%20As%20You.flac"
                },
                {
                    "title": "I'm Only Me When I'm With You",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-I'm%20Only%20Me%20When%20I'm%20With%20You.flac"
                },
                {
                    "title": "Invisible (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Invisible(Commentary).flac"
                },
                {
                    "title": "Invisible",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Invisible.flac"
                },
                {
                    "title": "I’m Only Me When I’m With You (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-I%E2%80%99m%20Only%20Me%20When%20I%E2%80%99m%20With%20You(Commentary).flac"
                },
                {
                    "title": "Mary's Song (Oh My My My)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Mary's%20Song%20(Oh%20My%20My%20My).flac"
                },
                {
                    "title": "Our Song (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Our%20Song(Commentary).flac"
                },
                {
                    "title": "Our Song",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Our%20Song.flac"
                },
                {
                    "title": "Picture To Burn (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Picture%20To%20Burn(Commentary).flac"
                },
                {
                    "title": "Picture To Burn",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Picture%20To%20Burn.flac"
                },
                {
                    "title": "Should've Said No",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Should've%20Said%20No.flac"
                },
                {
                    "title": "Should’ve Said No (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Should%E2%80%99ve%20Said%20No(Commentary).flac"
                },
                {
                    "title": "Stay Beautiful (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Stay%20Beautiful(Commentary).flac"
                },
                {
                    "title": "Stay Beautiful",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Stay%20Beautiful.flac"
                },
                {
                    "title": "Teardrops On My Guitar (Pop Version, Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Teardrops%20On%20My%20Guitar(Pop%20Version%20%E3%80%81%20Commentary).flac"
                },
                {
                    "title": "Teardrops On My Guitar (Pop Version)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Teardrops%20On%20My%20Guitar(Pop%20Version).mp3"
                },
                {
                    "title": "Teardrops On My Guitar (Radio Single Remix, Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Teardrops%20On%20My%20Guitar(Radio%20Single%20Remix%20%E3%80%81%20Commentary).flac"
                },
                {
                    "title": "Teardrops On My Guitar (Radio Single Remix)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Teardrops%20On%20My%20Guitar(Radio%20Single%20Remix).flac"
                },
                {
                    "title": "The Outside (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-The%20Outside(Commentary).flac"
                },
                {
                    "title": "The Outside",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-The%20Outside.flac"
                },
                {
                    "title": "Tied Together With A Smile (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Tied%20Together%20With%20A%20Smile(Commentary).flac"
                },
                {
                    "title": "Tied Together With A Smile",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Tied%20Together%20With%20A%20Smile.flac"
                },
                {
                    "title": "Tim McGraw (Commentary)",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Tim%20McGraw(Commentary).flac"
                },
                {
                    "title": "Tim McGraw",
                    "url": "http://cdn.44wk.top/music/Taylor%20Swift%20(Big%20Machine%20Radio%20Release%20Special)/Taylor%20Swift-Tim%20McGraw.flac"
                }
            ]

        },

        {
            title: 'Evermore',
            cover: 'http://cdn.44wk.top/music/evermore%20(deluxe%20version)/evermore%20(deluxe%20version).jpg',
            songs: [
                {
                    "title": "evermore",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift&Bon%20Iver-evermore.flac"
                },
                {
                    "title": "no body, no crime",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift&Haim-no%20body,%20no%20crime.flac"
                },
                {
                    "title": "coney island",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift&The%20National-coney%20island.flac"
                },
                {
                    "title": "champagne problems (Explicit)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-champagne%20problems(Explicit).flac"
                },
                {
                    "title": "closure",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-closure.flac"
                },
                {
                    "title": "cowboy like me (Explicit)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-cowboy%20like%20me(Explicit).flac"
                },
                {
                    "title": "dorothea",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-dorothea.flac"
                },
                {
                    "title": "gold rush (Explicit)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-gold%20rush(Explicit).flac"
                },
                {
                    "title": "happiness (Explicit)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-happiness(Explicit).flac"
                },
                {
                    "title": "it's time to go (Bonus Track)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-it's%20time%20to%20go(Bonus%20Track).flac"
                },
                {
                    "title": "ivy (Explicit)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-ivy(Explicit).flac"
                },
                {
                    "title": "long story short",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-long%20story%20short.flac"
                },
                {
                    "title": "marjorie",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-marjorie.mp3"
                },
                {
                    "title": "right where you left me (Bonus Track)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-right%20where%20you%20left%20me(Bonus%20Track).flac"
                },
                {
                    "title": "tolerate it (Explicit)",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-tolerate%20it(Explicit).flac"
                },
                {
                    "title": "willow",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-willow.flac"
                },
                {
                    "title": "‘tis the damn season",
                    "url": "http://cdn.44wk.top/music/evermore%20(deluxe%20version)/Taylor%20Swift-%E2%80%98tis%20the%20damn%20season.flac"
                }
            ]

        },

        {
            title: 'Folklore',
            cover: 'http://cdn.44wk.top/music/folklore%20(deluxe%20version)/folklore%20(deluxe%20version).jpg',
            songs: [
                {"title": "exile", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift&Bon%20Iver-exile.flac"},
                {"title": "august", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-august.flac"},
                {
                    "title": "betty (Explicit)",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-betty(Explicit).flac"
                },
                {"title": "cardigan", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-cardigan.flac"},
                {"title": "epiphany", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-epiphany.flac"},
                {"title": "hoax", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-hoax.flac"},
                {
                    "title": "illicit affairs",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-illicit%20affairs.flac"
                },
                {
                    "title": "invisible string",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-invisible%20string.flac"
                },
                {
                    "title": "mad woman (Explicit)",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-mad%20woman(Explicit).flac"
                },
                {"title": "mirrorball", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-mirrorball.flac"},
                {
                    "title": "my tears ricochet",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-my%20tears%20ricochet.flac"
                },
                {
                    "title": "peace (Explicit)",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-peace(Explicit).flac"
                },
                {"title": "seven", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-seven.flac"},
                {
                    "title": "the 1 (Explicit)",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-the%201(Explicit).flac"
                },
                {"title": "the lakes", "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-the%20lakes.flac"},
                {
                    "title": "the last great american dynasty (Explicit)",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-the%20last%20great%20american%20dynasty(Explicit).flac"
                },
                {
                    "title": "this is me trying",
                    "url": "http://cdn.44wk.top/music/folklore/Taylor%20Swift-this%20is%20me%20trying.flac"
                }
            ]

        },

        {
            title: 'Reputation',
            cover: 'http://cdn.44wk.top/music/reputation/reputation.jpg',
            songs: [
                {
                    "title": "End Game",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift&Ed%20Sheeran&Future-End%20Game.flac"
                },
                {
                    "title": "...Ready For It?",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-...Ready%20For%20It%EF%BC%9F.flac"
                },
                {
                    "title": "Call It What You Want",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Call%20It%20What%20You%20Want.flac"
                },
                {
                    "title": "Dancing With Our Hands Tied",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Dancing%20With%20Our%20Hands%20Tied.flac"
                },
                {"title": "Delicate", "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Delicate.flac"},
                {
                    "title": "Don't Blame Me",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Don't%20Blame%20Me.flac"
                },
                {"title": "Dress", "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Dress.flac"},
                {
                    "title": "Getaway Car",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Getaway%20Car.flac"
                },
                {"title": "Gorgeous", "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Gorgeous.flac"},
                {
                    "title": "I Did Something Bad",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-I%20Did%20Something%20Bad%20.flac"
                },
                {
                    "title": "King of My Heart",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-King%20of%20My%20Heart.flac"
                },
                {
                    "title": "Look What You Made Me Do",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-Look%20What%20You%20Made%20Me%20Do.flac"
                },
                {
                    "title": "New Year's Day",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-New%20Year's%20Day.flac"
                },
                {
                    "title": "So It Goes...",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-So%20It%20Goes....flac"
                },
                {
                    "title": "This Is Why We Can't Have Nice Things",
                    "url": "http://cdn.44wk.top/music/reputation/Taylor%20Swift-This%20Is%20Why%20We%20Can't%20Have%20Nice%20Things.flac"
                }
            ]

        },

        {
            title: 'TTPD',
            cover: 'http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/THE%20TORTURED%20POETS%20DEPARTMENT%20THE%20ANTHOLOGY.jpg',
            songs: [
                {
                    "title": "Florida!!!",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift&Florence%20And%20The%20Machine-Florida!!!.flac"
                },
                {
                    "title": "Fortnight",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift&Post%20Malone-Fortnight.flac"
                },
                {
                    "title": "But Daddy I Love Him",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-But%20Daddy%20I%20Love%20Him.flac"
                },
                {
                    "title": "Cassandra",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Cassandra.flac"
                },
                {
                    "title": "Chloe or Sam or Sophia or Marcus",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Chloe%20or%20Sam%20or%20Sophia%20or%20Marcus.flac"
                },
                {
                    "title": "Clara Bow",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Clara%20Bow.flac"
                },
                {
                    "title": "Down Bad",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Down%20Bad.flac"
                },
                {
                    "title": "Fresh Out The Slammer",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Fresh%20Out%20The%20Slammer.flac"
                },
                {
                    "title": "Guilty as Sin?",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Guilty%20as%20Sin%EF%BC%9F.flac"
                },
                {
                    "title": "How Did It End?",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-How%20Did%20It%20End%EF%BC%9F.flac"
                },
                {
                    "title": "I Can Do It With a Broken Heart",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-I%20Can%20Do%20It%20With%20a%20Broken%20Heart.flac"
                },
                {
                    "title": "I Can Fix Him (No Really I Can)",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-I%20Can%20Fix%20Him%20(No%20Really%20I%20Can).flac"
                },
                {
                    "title": "I Hate It Here",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-I%20Hate%20It%20Here.flac"
                },
                {
                    "title": "I Look in People's Windows",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-I%20Look%20in%20People's%20Windows.flac"
                },
                {
                    "title": "My Boy Only Breaks His Favorite Toys",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-My%20Boy%20Only%20Breaks%20His%20Favorite%20Toys.flac"
                },
                {
                    "title": "Peter",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Peter.flac"
                },
                {
                    "title": "Robin",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Robin.flac"
                },
                {
                    "title": "So High School",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-So%20High%20School.flac"
                },
                {
                    "title": "So Long, London",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-So%20Long,%20London.flac"
                },
                {
                    "title": "The Albatross",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Albatross.flac"
                },
                {
                    "title": "The Alchemy",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Alchemy.flac"
                },
                {
                    "title": "The Black Dog",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Black%20Dog.flac"
                },
                {
                    "title": "The Bolter",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Bolter.flac"
                },
                {
                    "title": "The Manuscript",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Manuscript.flac"
                },
                {
                    "title": "The Prophecy",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Prophecy.flac"
                },
                {
                    "title": "The Smallest Man Who Ever Lived",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Smallest%20Man%20Who%20Ever%20Lived.flac"
                },
                {
                    "title": "The Tortured Poets Department",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-The%20Tortured%20Poets%20Department.flac"
                },
                {
                    "title": "Who's Afraid of Little Old Me?",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-Who's%20Afraid%20of%20Little%20Old%20Me%EF%BC%9F.flac"
                },
                {
                    "title": "imgonnagetyouback",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-imgonnagetyouback.flac"
                },
                {
                    "title": "loml",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-loml.flac"
                },
                {
                    "title": "thanK you aIMee",
                    "url": "http://cdn.44wk.top/music/THE%20TORTURED%20POETS%20DEPARTMENT_%20THE%20ANTHOLOGY/Taylor%20Swift-thanK%20you%20aIMee.flac"
                }
            ]
        }

    ];

    // Generate album list
    albums.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');

        const albumCover = document.createElement('img');
        albumCover.src = album.cover;
        albumCover.alt = album.title;
        albumDiv.appendChild(albumCover);

        const albumTitle = document.createElement('h3');
        albumTitle.textContent = album.title;
        albumDiv.appendChild(albumTitle);

        albumDiv.addEventListener('click', function () {
            showSongs(album.songs);
        });

        albumsContainer.appendChild(albumDiv);
    });

    function showSongs(songs) {
        songsContainer.innerHTML = ''; // Clear previous songs

        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');

            const songLink = document.createElement('a');
            songLink.href = "#";
            songLink.textContent = song.title; // Use custom song title
            songLink.setAttribute('data-src', song.url); // Use song URL

            songLink.addEventListener('click', function (event) {
                event.preventDefault();
                const songSrc = this.getAttribute('data-src');
                player.src = songSrc;
                player.play();
            });

            songDiv.appendChild(songLink);
            songsContainer.appendChild(songDiv);
        });
    }

});
