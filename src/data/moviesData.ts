import { Movie } from '../types/movie';

export const MOVIES_DATA: Movie[] = [
  // ==========================================
  // 1. INCEPTION (Hollywood - Sci-Fi Thriller)
  // ==========================================
  {
    id: 'inception-2010',
    tmdbId: 27205,
    title: 'Inception',
    originalTitle: 'Inception',
    tagline: 'Your mind is the scene of the crime.',
    year: 2010,
    runtime: 148,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original 5.1]', 'Hindi [Dual Audio]', 'Tamil [Dubbed]', 'Spanish'],
    subtitles: ['English', 'Hindi', 'Spanish', 'French', 'Arabic'],
    audioBadgeType: 'Dual Audio',
    genres: ['Sci-Fi', 'Action', 'Thriller', 'Mystery'],
    director: 'Christopher Nolan',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Dom Cobb' },
      { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
      { name: 'Elliot Page', role: 'Ariadne' },
      { name: 'Tom Hardy', role: 'Eames' },
      { name: 'Ken Watanabe', role: 'Saito' }
    ],
    overview: 'Cobb, a skilled thief who steals corporate secrets through dream-sharing technology, is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    moodTags: ['Mind-Bending', 'Adrenaline Thriller', 'Existential Dread', 'Intense Cerebral'],
    ratings: {
      imdb: 8.8,
      imdbVotes: '2.5M',
      rottenTomatoes: 87,
      audienceScore: 91,
      metascore: 74,
      letterboxd: 4.3
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    youtubeTrailerId: 'YoHD9XEInc0',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube (Free with Ads)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.92, 0.85, 0.88, 0.72, 0.12, 0.15, 0.89, 0.94, 0.65, 0.78, 0.82, 0.45, 0.91, 0.34, 0.12, 0.76, 0.88, 0.23, 0.95, 0.45, 0.84, 0.9, 0.31, 0.82],
    pcaCoordinates: [-0.62, 0.58],
    keywords: ['dream infiltration', 'subconscious', 'heist', 'time dilation', 'spinning totem', 'architect', 'memory'],
    industry: 'Hollywood',
    isTrending: true,
    isFeatured: true
  },

  // ==========================================
  // 2. INTERSTELLAR (Hollywood - Sci-Fi Drama)
  // ==========================================
  {
    id: 'interstellar-2014',
    tmdbId: 157336,
    title: 'Interstellar',
    originalTitle: 'Interstellar',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    year: 2014,
    runtime: 169,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original 5.1]', 'Hindi [Dual Audio]', 'Telugu [Dubbed]'],
    subtitles: ['English', 'Hindi', 'Spanish', 'German'],
    audioBadgeType: 'Dual Audio',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    director: 'Christopher Nolan',
    cast: [
      { name: 'Matthew McConaughey', role: 'Joseph Cooper' },
      { name: 'Anne Hathaway', role: 'Dr. Amelia Brand' },
      { name: 'Jessica Chastain', role: 'Murphy Cooper' },
      { name: 'Michael Caine', role: 'Professor John Brand' }
    ],
    overview: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    moodTags: ['Mind-Bending', 'Emotional Journey', 'Cosmic Wonder', 'Heartwarming Romance'],
    ratings: {
      imdb: 8.7,
      imdbVotes: '2.1M',
      rottenTomatoes: 73,
      audienceScore: 86,
      metascore: 74,
      letterboxd: 4.4
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    youtubeTrailerId: 'zSWdZVtXT7E',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Apple TV+', type: 'paid', url: 'https://tv.apple.com' },
      { name: 'Pluto TV', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.94, 0.72, 0.81, 0.95, 0.22, 0.18, 0.91, 0.92, 0.78, 0.72, 0.88, 0.52, 0.93, 0.38, 0.15, 0.81, 0.85, 0.25, 0.92, 0.55, 0.82, 0.88, 0.35, 0.86],
    pcaCoordinates: [-0.68, 0.64],
    keywords: ['black hole', 'wormhole', 'relativity', 'father daughter', 'gargantua', 'space travel', 'hans zimmer'],
    industry: 'Hollywood',
    isTrending: true
  },

  // ==========================================
  // 3. 3 IDIOTS (Bollywood - Comedy Drama)
  // ==========================================
  {
    id: '3-idiots-2009',
    tmdbId: 20453,
    title: '3 Idiots',
    originalTitle: '३ इडियट्स',
    tagline: 'Don’t chase success, pursue excellence and success will chase you.',
    year: 2009,
    runtime: 170,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'English [Subtitles]', 'Tamil [Dubbed]'],
    subtitles: ['English', 'Spanish', 'French', 'Chinese', 'Japanese'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Comedy', 'Drama', 'Romance'],
    director: 'Rajkumar Hirani',
    cast: [
      { name: 'Aamir Khan', role: 'Rancho / Phunsukh Wangdu' },
      { name: 'R. Madhavan', role: 'Farhan Qureshi' },
      { name: 'Sharman Joshi', role: 'Raju Rastogi' },
      { name: 'Kareena Kapoor Khan', role: 'Pia Sahastrabuddhe' },
      { name: 'Boman Irani', role: 'Viru Sahastrabuddhe (Virus)' }
    ],
    overview: 'Two friends are searching for their long-lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    moodTags: ['Feel-Good Comedy', 'Heartwarming Romance', 'Emotional Journey', 'Uplifting'],
    ratings: {
      imdb: 8.4,
      imdbVotes: '430K',
      rottenTomatoes: 100,
      audienceScore: 93,
      metascore: 80,
      letterboxd: 4.2
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/gmSRHU1Wtiatj8KoyVt8rT9ockx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/gmSRHU1Wtiatj8KoyVt8rT9ockx.jpg',
    youtubeTrailerId: 'K0eDlFX9GMc',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.15, 0.22, 0.45, 0.95, 0.88, 0.92, 0.25, 0.32, 0.85, 0.41, 0.38, 0.92, 0.44, 0.89, 0.91, 0.32, 0.41, 0.95, 0.28, 0.91, 0.35, 0.22, 0.94, 0.48],
    pcaCoordinates: [0.65, -0.42],
    keywords: ['engineering college', 'friendship', 'education system', 'phunsukh wangdu', 'all is well', 'ladakh'],
    industry: 'Bollywood',
    isTrending: true,
    isFeatured: true
  },

  // ==========================================
  // 4. RRR (South Indian / Pan-India - Action Epic)
  // ==========================================
  {
    id: 'rrr-2022',
    tmdbId: 579974,
    title: 'RRR',
    originalTitle: 'రౌద్రం రణం రుధిరం',
    tagline: 'Rise, Roar, Revolt.',
    year: 2022,
    runtime: 187,
    primaryLanguage: 'te',
    languageLabel: 'Telugu',
    audioTracks: ['Telugu [Original Atmos]', 'Hindi [Dual Audio]', 'Tamil [Dubbed]', 'Malayalam', 'Kannada', 'English [Dubbed]'],
    subtitles: ['English', 'Hindi', 'Spanish', 'Japanese', 'Korean'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Drama', 'Adventure', 'History'],
    director: 'S. S. Rajamouli',
    cast: [
      { name: 'N. T. Rama Rao Jr.', role: 'Komaram Bheem' },
      { name: 'Ram Charan', role: 'Alluri Sitarama Raju' },
      { name: 'Alia Bhatt', role: 'Sita' },
      { name: 'Ajay Devgn', role: 'Venkata Rama Raju' }
    ],
    overview: 'A fearless warrior on a perilous mission to save a young kidnapped girl comes face to face with a steely cop serving the British forces in this pre-independent epic drama packed with earth-shattering action and brotherhood.',
    moodTags: ['Adrenaline Thriller', 'Epic Mythology', 'High Octane', 'Emotional Journey'],
    ratings: {
      imdb: 7.8,
      imdbVotes: '175K',
      rottenTomatoes: 95,
      audienceScore: 94,
      metascore: 83,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    youtubeTrailerId: 'NgBoMJy3_6M',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Disney+ Hotstar', type: 'paid', url: 'https://www.hotstar.com' },
      { name: 'Zee5 (Free tier)', type: 'free', url: 'https://www.zee5.com' }
    ],
    vectorEmbedding: [0.35, 0.98, 0.85, 0.75, 0.35, 0.42, 0.45, 0.62, 0.72, 0.91, 0.95, 0.55, 0.62, 0.88, 0.45, 0.78, 0.92, 0.68, 0.48, 0.72, 0.85, 0.42, 0.58, 0.89],
    pcaCoordinates: [0.52, 0.45],
    keywords: ['british raj', 'brotherhood', 'naatu naatu', 'rebellion', 'high octane action', 'freedom fighters'],
    industry: 'South Indian / Pan-India',
    isTrending: true,
    isFeatured: true
  },

  // ==========================================
  // 5. THE DARK KNIGHT (Hollywood - Action Crime)
  // ==========================================
  {
    id: 'the-dark-knight-2008',
    tmdbId: 155,
    title: 'The Dark Knight',
    originalTitle: 'The Dark Knight',
    tagline: 'Why so serious?',
    year: 2008,
    runtime: 152,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original 5.1]', 'Hindi [Dual Audio]', 'Spanish'],
    subtitles: ['English', 'Hindi', 'French', 'German'],
    audioBadgeType: 'Dual Audio',
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    director: 'Christopher Nolan',
    cast: [
      { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
      { name: 'Heath Ledger', role: 'Joker' },
      { name: 'Aaron Eckhart', role: 'Harvey Dent / Two-Face' },
      { name: 'Gary Oldman', role: 'Jim Gordon' },
      { name: 'Morgan Freeman', role: 'Lucius Fox' }
    ],
    overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    moodTags: ['Gritty Crime', 'Dark & Twisted', 'Adrenaline Thriller', 'Intense Cerebral'],
    ratings: {
      imdb: 9.0,
      imdbVotes: '2.9M',
      rottenTomatoes: 94,
      audienceScore: 94,
      metascore: 84,
      letterboxd: 4.5
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
    youtubeTrailerId: 'EXeTwQWrcwY',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'Tubi (Free)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.65, 0.95, 0.96, 0.62, 0.15, 0.12, 0.88, 0.91, 0.58, 0.82, 0.89, 0.35, 0.85, 0.22, 0.15, 0.92, 0.94, 0.21, 0.89, 0.38, 0.92, 0.82, 0.25, 0.88],
    pcaCoordinates: [-0.58, 0.42],
    keywords: ['joker', 'chaos', 'vigilante', 'gotham', 'harvey dent', 'moral dilemma', 'heath ledger'],
    industry: 'Hollywood',
    isTrending: true
  },

  // ==========================================
  // 6. DANGAL (Bollywood - Biographical Sports Drama)
  // ==========================================
  {
    id: 'dangal-2016',
    tmdbId: 360814,
    title: 'Dangal',
    originalTitle: 'दंगल',
    tagline: 'Gold medalists don’t grow on trees, you have to nurture them.',
    year: 2016,
    runtime: 161,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'Tamil [Dubbed]', 'Telugu [Dubbed]', 'English [Subtitles]'],
    subtitles: ['English', 'Spanish', 'Mandarin', 'Arabic'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Biography', 'Drama'],
    director: 'Nitesh Tiwari',
    cast: [
      { name: 'Aamir Khan', role: 'Mahavir Singh Phogat' },
      { name: 'Fatima Sana Shaikh', role: 'Geeta Phogat' },
      { name: 'Sanya Malhotra', role: 'Babita Kumari' },
      { name: 'Sakshi Tanwar', role: 'Daya Shobha Kaur' }
    ],
    overview: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression and bureaucratic challenges.',
    moodTags: ['Emotional Journey', 'Uplifting', 'Adrenaline Thriller', 'Inspiring Grit'],
    ratings: {
      imdb: 8.3,
      imdbVotes: '215K',
      rottenTomatoes: 88,
      audienceScore: 94,
      metascore: 78,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/l0fNAHLOFReQJsxCOmGWvJDnimn.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/l0fNAHLOFReQJsxCOmGWvJDnimn.jpg',
    youtubeTrailerId: 'x_7YlGv9u1g',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Apple TV+', type: 'paid', url: 'https://tv.apple.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.28, 0.78, 0.65, 0.88, 0.42, 0.58, 0.38, 0.42, 0.78, 0.65, 0.62, 0.75, 0.52, 0.82, 0.68, 0.55, 0.68, 0.75, 0.45, 0.78, 0.52, 0.42, 0.78, 0.65],
    pcaCoordinates: [0.48, -0.28],
    keywords: ['wrestling', 'female empowerment', 'father daughter', 'commonwealth games', 'haryana', 'discipline'],
    industry: 'Bollywood'
  },

  // ==========================================
  // 7. GANGS OF WASSEYPUR (Bollywood - Epic Crime)
  // ==========================================
  {
    id: 'gangs-of-wasseypur-2012',
    tmdbId: 117691,
    title: 'Gangs of Wasseypur',
    originalTitle: 'गैंग्स ऑफ़ वासेपुर',
    tagline: 'In Wasseypur, revenge is a family tradition.',
    year: 2012,
    runtime: 321,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original Uncut]', 'English [Subtitles]'],
    subtitles: ['English', 'French'],
    audioBadgeType: 'Original',
    genres: ['Action', 'Comedy', 'Crime', 'Drama'],
    director: 'Anurag Kashyap',
    cast: [
      { name: 'Manoj Bajpayee', role: 'Sardar Khan' },
      { name: 'Nawazuddin Siddiqui', role: 'Faizal Khan' },
      { name: 'Richa Chadha', role: 'Nagma Khatoon' },
      { name: 'Pankaj Tripathi', role: 'Sultan Qureshi' },
      { name: 'Huma Qureshi', role: 'Mohsina Hamid' }
    ],
    overview: 'A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations of coal mafia, family vengeance, and raw political warfare.',
    moodTags: ['Gritty Crime', 'Dark & Twisted', 'Adrenaline Thriller', 'Raw & Unfiltered'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '105K',
      rottenTomatoes: 97,
      audienceScore: 90,
      metascore: 89,
      letterboxd: 4.2
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/gBrRqu5YSumZUgDaL8OIv9Ryvue.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/gBrRqu5YSumZUgDaL8OIv9Ryvue.jpg',
    youtubeTrailerId: 'j-AkVnTN35U',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'Pluto TV', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.18, 0.88, 0.98, 0.55, 0.32, 0.45, 0.45, 0.62, 0.48, 0.72, 0.78, 0.42, 0.45, 0.55, 0.38, 0.88, 0.85, 0.35, 0.52, 0.48, 0.82, 0.45, 0.48, 0.72],
    pcaCoordinates: [0.38, 0.15],
    keywords: ['coal mafia', 'blood feud', 'revenge', 'bihar', 'faizal khan', 'anurag kashyap', 'raw cinema'],
    industry: 'Bollywood'
  },

  // ==========================================
  // 8. PARASITE (World Cinema / Korean - Thriller)
  // ==========================================
  {
    id: 'parasite-2019',
    tmdbId: 496243,
    title: 'Parasite',
    originalTitle: '기생충',
    tagline: 'Act like you own the place.',
    year: 2019,
    runtime: 132,
    primaryLanguage: 'ko',
    languageLabel: 'Korean',
    audioTracks: ['Korean [Original 5.1]', 'Hindi [Dual Audio]', 'English [Dubbed]'],
    subtitles: ['English', 'Hindi', 'Spanish', 'French'],
    audioBadgeType: 'Dual Audio',
    genres: ['Comedy', 'Drama', 'Thriller'],
    director: 'Bong Joon-ho',
    cast: [
      { name: 'Song Kang-ho', role: 'Kim Ki-taek' },
      { name: 'Lee Sun-kyun', role: 'Park Dong-ik' },
      { name: 'Cho Yeo-jeong', role: 'Choi Yeon-gyo' },
      { name: 'Choi Woo-shik', role: 'Kim Ki-woo' }
    ],
    overview: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan as an unexpected underground secret unravels.',
    moodTags: ['Dark & Twisted', 'Mind-Bending', 'Gritty Crime', 'Social Commentary'],
    ratings: {
      imdb: 8.5,
      imdbVotes: '950K',
      rottenTomatoes: 99,
      audienceScore: 90,
      metascore: 96,
      letterboxd: 4.6
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg',
    youtubeTrailerId: '5xH0R_4Frt4',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Apple TV+', type: 'paid', url: 'https://tv.apple.com' },
      { name: 'Tubi (Free)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.42, 0.75, 0.92, 0.82, 0.62, 0.58, 0.78, 0.85, 0.72, 0.82, 0.81, 0.65, 0.75, 0.62, 0.45, 0.85, 0.82, 0.48, 0.78, 0.62, 0.88, 0.68, 0.55, 0.79],
    pcaCoordinates: [-0.15, 0.72],
    keywords: ['class divide', 'basement bunker', 'palme d or', 'oscar winner', 'social satire', 'subterfuge'],
    industry: 'World Cinema',
    isTrending: true,
    isFeatured: true
  },

  // ==========================================
  // 9. OPPENHEIMER (Hollywood - Historical Drama)
  // ==========================================
  {
    id: 'oppenheimer-2023',
    tmdbId: 872585,
    title: 'Oppenheimer',
    originalTitle: 'Oppenheimer',
    tagline: 'The world forever changes.',
    year: 2023,
    runtime: 180,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original Atmos]', 'Hindi [Dual Audio]', 'Spanish'],
    subtitles: ['English', 'Hindi', 'German', 'Spanish'],
    audioBadgeType: 'Dual Audio',
    genres: ['Biography', 'Drama', 'History'],
    director: 'Christopher Nolan',
    cast: [
      { name: 'Cillian Murphy', role: 'J. Robert Oppenheimer' },
      { name: 'Emily Blunt', role: 'Kitty Oppenheimer' },
      { name: 'Matt Damon', role: 'Leslie Groves' },
      { name: 'Robert Downey Jr.', role: 'Lewis Strauss' },
      { name: 'Florence Pugh', role: 'Jean Tatlock' }
    ],
    overview: 'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II, examining the scientific triumph and moral aftermath of Trinity test and subsequent political betrayal.',
    moodTags: ['Intense Cerebral', 'Existential Dread', 'Historical Epic', 'Moral Conflict'],
    ratings: {
      imdb: 8.8,
      imdbVotes: '820K',
      rottenTomatoes: 93,
      audienceScore: 91,
      metascore: 90,
      letterboxd: 4.4
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
    youtubeTrailerId: 'uYPbbksJxIg',
    streamingProviders: [
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube Movies (Rental)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.78, 0.62, 0.72, 0.95, 0.15, 0.18, 0.82, 0.92, 0.68, 0.65, 0.85, 0.45, 0.88, 0.42, 0.25, 0.78, 0.82, 0.32, 0.88, 0.48, 0.85, 0.82, 0.32, 0.82],
    pcaCoordinates: [-0.55, 0.68],
    keywords: ['manhattan project', 'atomic bomb', 'trinity test', 'quantum physics', 'cillian murphy', 'tribunal'],
    industry: 'Hollywood',
    isTrending: true
  },

  // ==========================================
  // 10. BAAHUBALI 2: THE CONCLUSION (South Indian)
  // ==========================================
  {
    id: 'baahubali-2-2017',
    tmdbId: 350312,
    title: 'Baahubali 2: The Conclusion',
    originalTitle: 'బాహుబలి 2: ది కన్ క్లూజన్',
    tagline: 'The boy he raised, the man he killed.',
    year: 2017,
    runtime: 167,
    primaryLanguage: 'te',
    languageLabel: 'Telugu',
    audioTracks: ['Telugu [Original 5.1]', 'Hindi [Dual Audio 5.1]', 'Tamil [Dubbed]', 'Malayalam'],
    subtitles: ['English', 'Hindi', 'Arabic', 'Russian'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Drama', 'Fantasy'],
    director: 'S. S. Rajamouli',
    cast: [
      { name: 'Prabhas', role: 'Amarendra & Mahendra Baahubali' },
      { name: 'Rana Daggubati', role: 'Bhallaladeva' },
      { name: 'Anushka Shetty', role: 'Devasena' },
      { name: 'Sathyaraj', role: 'Kattappa' },
      { name: 'Ramya Krishnan', role: 'Sivagami' }
    ],
    overview: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom and explains why Kattappa killed Baahubali.',
    moodTags: ['Epic Mythology', 'Adrenaline Thriller', 'High Octane', 'Heroic Triumph'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '110K',
      rottenTomatoes: 89,
      audienceScore: 92,
      metascore: 80,
      letterboxd: 3.9
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    youtubeTrailerId: 'G62HrubdD6o',
    streamingProviders: [
      { name: 'Disney+ Hotstar', type: 'paid', url: 'https://www.hotstar.com' },
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.32, 0.95, 0.82, 0.72, 0.28, 0.38, 0.42, 0.58, 0.68, 0.88, 0.92, 0.52, 0.58, 0.85, 0.42, 0.75, 0.88, 0.62, 0.45, 0.68, 0.82, 0.38, 0.52, 0.85],
    pcaCoordinates: [0.55, 0.48],
    keywords: ['mahishmati', 'kattappa', 'swords and arrows', 'royal betrayal', 'devasena', 'rajamouli'],
    industry: 'South Indian / Pan-India',
    isTrending: true
  },

  // ==========================================
  // 11. DUNE: PART TWO (Hollywood - Sci-Fi Epic)
  // ==========================================
  {
    id: 'dune-part-two-2024',
    tmdbId: 693134,
    title: 'Dune: Part Two',
    originalTitle: 'Dune: Part Two',
    tagline: 'Long live the fighters.',
    year: 2024,
    runtime: 166,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original Atmos]', 'Hindi [Dual Audio]', 'Spanish', 'Tamil'],
    subtitles: ['English', 'Hindi', 'French', 'Italian'],
    audioBadgeType: 'Dual Audio',
    genres: ['Sci-Fi', 'Adventure', 'Action', 'Drama'],
    director: 'Denis Villeneuve',
    cast: [
      { name: 'Timothée Chalamet', role: 'Paul Atreides' },
      { name: 'Zendaya', role: 'Chani' },
      { name: 'Rebecca Ferguson', role: 'Lady Jessica' },
      { name: 'Javier Bardem', role: 'Stilgar' },
      { name: 'Austin Butler', role: 'Feyd-Rautha Harkonnen' }
    ],
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a choice between the love of his life and the fate of the known universe.',
    moodTags: ['Mind-Bending', 'Epic Mythology', 'Adrenaline Thriller', 'Cosmic Wonder'],
    ratings: {
      imdb: 8.6,
      imdbVotes: '580K',
      rottenTomatoes: 92,
      audienceScore: 95,
      metascore: 79,
      letterboxd: 4.5
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',
    youtubeTrailerId: 'Way9Dexny3w',
    streamingProviders: [
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'Apple TV+', type: 'paid', url: 'https://tv.apple.com' },
      { name: 'Pluto TV (Clips/Free)', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.91, 0.88, 0.79, 0.85, 0.18, 0.15, 0.85, 0.92, 0.62, 0.82, 0.89, 0.42, 0.92, 0.45, 0.22, 0.82, 0.91, 0.32, 0.94, 0.48, 0.88, 0.86, 0.34, 0.85],
    pcaCoordinates: [-0.65, 0.52],
    keywords: ['arrakis', 'sandworm', 'spice', 'muaddib', 'fremen', 'denis villeneuve', 'hans zimmer'],
    industry: 'Hollywood',
    isTrending: true
  },

  // ==========================================
  // 12. SWADES (Bollywood - Drama)
  // ==========================================
  {
    id: 'swades-2004',
    tmdbId: 15774,
    title: 'Swades',
    originalTitle: 'स्वदेस',
    tagline: 'We, the People.',
    year: 2004,
    runtime: 195,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'English [Subtitles]'],
    subtitles: ['English', 'Spanish', 'French'],
    audioBadgeType: 'Original',
    genres: ['Drama'],
    director: 'Ashutosh Gowariker',
    cast: [
      { name: 'Shah Rukh Khan', role: 'Mohan Bhargava' },
      { name: 'Gayatri Joshi', role: 'Gita' },
      { name: 'Kishori Ballal', role: 'Kaveri Amma' },
      { name: 'Rajesh Vivek', role: 'Nivarani' }
    ],
    overview: 'A successful Indian project manager at NASA returns to his motherland to find his childhood nanny, only to discover the grassroots realities of village India and his own inner call of duty.',
    moodTags: ['Emotional Journey', 'Heartwarming Romance', 'Uplifting', 'Patriotic Soul'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '95K',
      rottenTomatoes: 84,
      audienceScore: 89,
      metascore: 78,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/AmRfsOyEXpVhnaYXZMoDlZd9Siq.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/AmRfsOyEXpVhnaYXZMoDlZd9Siq.jpg',
    youtubeTrailerId: 'NC7GuohqdEI',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.12, 0.32, 0.38, 0.94, 0.45, 0.62, 0.35, 0.42, 0.88, 0.45, 0.42, 0.82, 0.45, 0.88, 0.75, 0.42, 0.48, 0.85, 0.35, 0.88, 0.42, 0.32, 0.85, 0.52],
    pcaCoordinates: [0.58, -0.35],
    keywords: ['nasa', 'rural development', 'hydropower', 'ar rahman', 'shah rukh khan', 'patriotism', 'caravan'],
    industry: 'Bollywood'
  },

  // ==========================================
  // 13. ANDHADHUN (Bollywood - Crime Mystery Thriller)
  // ==========================================
  {
    id: 'andhadhun-2018',
    tmdbId: 534780,
    title: 'Andhadhun',
    originalTitle: 'अंधाधुन',
    tagline: 'He couldn’t see the crime, but he witnessed the murder.',
    year: 2018,
    runtime: 139,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'English [Subtitles]', 'Tamil [Dubbed]'],
    subtitles: ['English', 'German', 'Spanish'],
    audioBadgeType: 'Dual Audio',
    genres: ['Crime', 'Mystery', 'Thriller', 'Comedy'],
    director: 'Sriram Raghavan',
    cast: [
      { name: 'Ayushmann Khurrana', role: 'Akash' },
      { name: 'Tabu', role: 'Simi Sinha' },
      { name: 'Radhika Apte', role: 'Sophie' },
      { name: 'Anil Dhawan', role: 'Pramod Sinha' }
    ],
    overview: 'A series of mysterious events change the life of a seemingly blind pianist who must now report a murder he was never supposed to have seen in the first place.',
    moodTags: ['Mind-Bending', 'Dark & Twisted', 'Gritty Crime', 'Twisty Suspense'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '112K',
      rottenTomatoes: 100,
      audienceScore: 89,
      metascore: 82,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg',
    youtubeTrailerId: '2iVYI99VGaw',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.38, 0.72, 0.95, 0.65, 0.58, 0.45, 0.68, 0.82, 0.62, 0.78, 0.81, 0.55, 0.65, 0.62, 0.42, 0.85, 0.88, 0.42, 0.68, 0.55, 0.82, 0.58, 0.55, 0.78],
    pcaCoordinates: [0.22, 0.42],
    keywords: ['blind pianist', 'organ harvesting', 'tabu', 'black comedy', 'piano music', 'plot twists'],
    industry: 'Bollywood',
    isTrending: true
  },

  // ==========================================
  // 14. K.G.F: CHAPTER 2 (South Indian / Pan-India)
  // ==========================================
  {
    id: 'kgf-chapter-2-2022',
    tmdbId: 585245,
    title: 'K.G.F: Chapter 2',
    originalTitle: 'ಕೆ.ಜಿ.ಎಫ್: ಚಾಪ್ಟರ್ 2',
    tagline: 'Violence, Violence, Violence... I don’t like it. I avoid. But violence likes me!',
    year: 2022,
    runtime: 168,
    primaryLanguage: 'te',
    languageLabel: 'Kannada/Telugu',
    audioTracks: ['Kannada [Original]', 'Hindi [Dual Audio]', 'Telugu [Dubbed]', 'Tamil', 'Malayalam'],
    subtitles: ['English', 'Hindi', 'Arabic'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Crime', 'Drama'],
    director: 'Prashanth Neel',
    cast: [
      { name: 'Yash', role: 'Rocky Bhai' },
      { name: 'Sanjay Dutt', role: 'Adheera' },
      { name: 'Raveena Tandon', role: 'Ramika Sen' },
      { name: 'Srinidhi Shetty', role: 'Reena Desai' }
    ],
    overview: 'The blood-soaked land of Kolar Gold Fields now has a new overlord: Rocky, whose name strikes fear into the heart of his foes and government alike as Adheera and the Prime Minister assemble armies against him.',
    moodTags: ['Adrenaline Thriller', 'Gritty Crime', 'High Octane', 'Mass Action'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '148K',
      rottenTomatoes: 85,
      audienceScore: 92,
      metascore: 76,
      letterboxd: 3.8
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/khNVygolU0TxLIDWff5tQlAhZ23.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/khNVygolU0TxLIDWff5tQlAhZ23.jpg',
    youtubeTrailerId: 'JKa05nyUmuQ',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'Tubi (Free with Ads)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.25, 0.98, 0.92, 0.65, 0.25, 0.28, 0.42, 0.55, 0.58, 0.92, 0.95, 0.38, 0.55, 0.72, 0.28, 0.85, 0.92, 0.45, 0.42, 0.52, 0.88, 0.35, 0.38, 0.85],
    pcaCoordinates: [0.45, 0.55],
    keywords: ['gold mines', 'rocky bhai', 'mass elevation', 'kalashnikov', 'mother promise', 'prashanth neel'],
    industry: 'South Indian / Pan-India'
  },

  // ==========================================
  // 15. VIKRAM (South Indian / Tamil - Action Thriller)
  // ==========================================
  {
    id: 'vikram-2022',
    tmdbId: 743563,
    title: 'Vikram',
    originalTitle: 'விக்ரம்',
    tagline: 'Once upon a time there lived a ghost.',
    year: 2022,
    runtime: 175,
    primaryLanguage: 'ta',
    languageLabel: 'Tamil',
    audioTracks: ['Tamil [Original 5.1]', 'Hindi [Dual Audio]', 'Telugu [Dubbed]', 'Malayalam'],
    subtitles: ['English', 'Hindi', 'French'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Crime', 'Thriller'],
    director: 'Lokesh Kanagaraj',
    cast: [
      { name: 'Kamal Haasan', role: 'Agent Vikram / Karnan' },
      { name: 'Vijay Sethupathi', role: 'Santhanam' },
      { name: 'Fahadh Faasil', role: 'Agent Amar' },
      { name: 'Suriya', role: 'Rolex (Cameo)' }
    ],
    overview: 'A high-octane investigative thriller where a covert black ops agent unmasks a masked syndicate smuggling massive drug consignments across South India, triggering the expansion of the LCU cinematic universe.',
    moodTags: ['Adrenaline Thriller', 'Gritty Crime', 'High Octane', 'Dark & Twisted'],
    ratings: {
      imdb: 8.3,
      imdbVotes: '78K',
      rottenTomatoes: 88,
      audienceScore: 92,
      metascore: 79,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/hP0AHgL0Uc4APQW0GkxhgyszZFD.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/hP0AHgL0Uc4APQW0GkxhgyszZFD.jpg',
    youtubeTrailerId: 'OKBMCLzuvWU',
    streamingProviders: [
      { name: 'Disney+ Hotstar', type: 'paid', url: 'https://www.hotstar.com' },
      { name: 'Zee5', type: 'paid', url: 'https://www.zee5.com' },
      { name: 'Pluto TV', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.32, 0.96, 0.95, 0.62, 0.22, 0.25, 0.52, 0.65, 0.55, 0.89, 0.92, 0.35, 0.62, 0.75, 0.28, 0.91, 0.94, 0.38, 0.55, 0.48, 0.91, 0.42, 0.35, 0.88],
    pcaCoordinates: [0.38, 0.58],
    keywords: ['lcu', 'kamal haasan', 'drug cartel', 'black squad', 'rolex', 'anirudh ravichander', 'gatling gun'],
    industry: 'South Indian / Pan-India',
    isTrending: true
  },

  // ==========================================
  // 16. TUMBBAD (Bollywood - Mythological Horror)
  // ==========================================
  {
    id: 'tumbbad-2018',
    tmdbId: 538858,
    title: 'Tumbbad',
    originalTitle: 'तुम्बाड',
    tagline: 'Greed has no end, but consequences do.',
    year: 2018,
    runtime: 104,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original Atmos]', 'Tamil [Dubbed]', 'Telugu [Dubbed]', 'English [Subtitles]'],
    subtitles: ['English', 'Spanish', 'German'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Drama', 'Fantasy', 'Horror', 'Mystery'],
    director: 'Rahi Anil Barve, Anand Gandhi',
    cast: [
      { name: 'Sohum Shah', role: 'Vinayak Rao' },
      { name: 'Jyoti Malshe', role: 'Vinayak’s Mother' },
      { name: 'Anita Date-Kelkar', role: 'Vaidehi' },
      { name: 'Mohammad Samad', role: 'Pandurang' }
    ],
    overview: 'A mythological horror tale spanning three generations in the rain-drenched village of Tumbbad, where a family constructs a shrine for Hastar, a cursed god whose womb contains infinite gold coins at a terrifying price.',
    moodTags: ['Dark & Twisted', 'Epic Mythology', 'Mind-Bending', 'Atmospheric Dread'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '65K',
      rottenTomatoes: 89,
      audienceScore: 91,
      metascore: 82,
      letterboxd: 4.2
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/z1xOCxw780WFJC5uCTMfCkQ4Agi.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/z1xOCxw780WFJC5uCTMfCkQ4Agi.jpg',
    youtubeTrailerId: 'sN75MPxgvX8',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.45, 0.65, 0.85, 0.72, 0.15, 0.12, 0.78, 0.82, 0.52, 0.68, 0.72, 0.38, 0.72, 0.58, 0.32, 0.82, 0.78, 0.35, 0.72, 0.42, 0.85, 0.62, 0.38, 0.75],
    pcaCoordinates: [0.18, 0.65],
    keywords: ['hastar', 'greed', 'mythological horror', 'rain atmosphere', 'gold coins', 'womb of god'],
    industry: 'Bollywood',
    isTrending: true
  },

  // ==========================================
  // 17. PULP FICTION (Hollywood - Crime Drama)
  // ==========================================
  {
    id: 'pulp-fiction-1994',
    tmdbId: 680,
    title: 'Pulp Fiction',
    originalTitle: 'Pulp Fiction',
    tagline: 'You won’t know the facts until you’ve seen the fiction.',
    year: 1994,
    runtime: 154,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original 5.1]', 'Hindi [Dubbed]', 'Spanish'],
    subtitles: ['English', 'Spanish', 'German', 'Italian'],
    audioBadgeType: 'Dual Audio',
    genres: ['Crime', 'Drama'],
    director: 'Quentin Tarantino',
    cast: [
      { name: 'John Travolta', role: 'Vincent Vega' },
      { name: 'Samuel L. Jackson', role: 'Jules Winnfield' },
      { name: 'Uma Thurman', role: 'Mia Wallace' },
      { name: 'Bruce Willis', role: 'Butch Coolidge' }
    ],
    overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption filled with iconic dialogue and sharp non-linear storytelling.',
    moodTags: ['Gritty Crime', 'Dark & Twisted', 'Cult Classic', 'Sharp Dialogue'],
    ratings: {
      imdb: 8.9,
      imdbVotes: '2.2M',
      rottenTomatoes: 92,
      audienceScore: 96,
      metascore: 95,
      letterboxd: 4.5
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    youtubeTrailerId: 's7EdQ4FqbhY',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Pluto TV (Free)', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.55, 0.85, 0.96, 0.68, 0.45, 0.38, 0.78, 0.88, 0.58, 0.75, 0.82, 0.45, 0.78, 0.45, 0.28, 0.92, 0.88, 0.35, 0.82, 0.45, 0.88, 0.72, 0.35, 0.82],
    pcaCoordinates: [-0.48, 0.38],
    keywords: ['non-linear', 'tarantino', 'ezekiel 25 17', 'dance contest', 'briefcase', 'royale with cheese'],
    industry: 'Hollywood'
  },

  // ==========================================
  // 18. JAI BHIM (South Indian / Tamil - Legal Drama)
  // ==========================================
  {
    id: 'jai-bhim-2021',
    tmdbId: 871087,
    title: 'Jai Bhim',
    originalTitle: 'ஜெய் பீம்',
    tagline: 'When respect is stolen, the law will be rewritten.',
    year: 2021,
    runtime: 164,
    primaryLanguage: 'ta',
    languageLabel: 'Tamil',
    audioTracks: ['Tamil [Original 5.1]', 'Hindi [Dual Audio]', 'Telugu [Dubbed]', 'Malayalam'],
    subtitles: ['English', 'Hindi', 'German'],
    audioBadgeType: 'Dual Audio',
    genres: ['Crime', 'Drama', 'Mystery'],
    director: 'T. J. Gnanavel',
    cast: [
      { name: 'Suriya', role: 'Advocate Chandru' },
      { name: 'Lijomol Jose', role: 'Sengeni' },
      { name: 'K. Manikandan', role: 'Rajakannu' },
      { name: 'Prakash Raj', role: 'IG Perumalsamy' }
    ],
    overview: 'When a tribal man is falsely accused of theft, tortured in custody, and mysteriously vanishes, his pregnant wife approaches a righteous lawyer who wages a relentless habeas corpus battle against judicial corruption.',
    moodTags: ['Gritty Crime', 'Emotional Journey', 'Inspiring Grit', 'Social Justice'],
    ratings: {
      imdb: 8.8,
      imdbVotes: '210K',
      rottenTomatoes: 96,
      audienceScore: 95,
      metascore: 85,
      letterboxd: 4.3
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/ehybiOtBUtrMkmtB39zQEtq1Jie.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/ehybiOtBUtrMkmtB39zQEtq1Jie.jpg',
    youtubeTrailerId: 'Gc6dEDnL8JA',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.22, 0.65, 0.92, 0.95, 0.32, 0.42, 0.58, 0.68, 0.85, 0.68, 0.72, 0.65, 0.62, 0.82, 0.58, 0.82, 0.78, 0.62, 0.55, 0.75, 0.78, 0.45, 0.58, 0.75],
    pcaCoordinates: [0.42, 0.05],
    keywords: ['habeas corpus', 'courtroom drama', 'irula tribe', 'police brutality', 'advocate chandru', 'human rights'],
    industry: 'South Indian / Pan-India',
    isTrending: true
  },

  // ==========================================
  // 19. SHUTTER ISLAND (Hollywood - Psychological Thriller)
  // ==========================================
  {
    id: 'shutter-island-2010',
    tmdbId: 11324,
    title: 'Shutter Island',
    originalTitle: 'Shutter Island',
    tagline: 'Someone is missing.',
    year: 2010,
    runtime: 138,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original 5.1]', 'Hindi [Dual Audio]', 'Spanish'],
    subtitles: ['English', 'Hindi', 'German'],
    audioBadgeType: 'Dual Audio',
    genres: ['Mystery', 'Thriller', 'Drama'],
    director: 'Martin Scorsese',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Teddy Daniels' },
      { name: 'Mark Ruffalo', role: 'Chuck Aule' },
      { name: 'Ben Kingsley', role: 'Dr. John Cawley' },
      { name: 'Michelle Williams', role: 'Dolores Chanal' }
    ],
    overview: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on Shutter Island, only to be plunged into a maze of psychological hallucinations and dark revelations.',
    moodTags: ['Mind-Bending', 'Dark & Twisted', 'Psychological Dread', 'Twisty Suspense'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '1.4M',
      rottenTomatoes: 69,
      audienceScore: 77,
      metascore: 63,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg',
    youtubeTrailerId: '5iaYLCiq5RM',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Tubi (Free)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.65, 0.72, 0.94, 0.75, 0.18, 0.15, 0.85, 0.88, 0.58, 0.75, 0.78, 0.42, 0.82, 0.42, 0.22, 0.88, 0.85, 0.28, 0.85, 0.45, 0.88, 0.78, 0.32, 0.81],
    pcaCoordinates: [-0.42, 0.62],
    keywords: ['asylum', 'lighthouse', 'twist ending', 'hallucination', 'scorsese', 'leonardo dicaprio'],
    industry: 'Hollywood'
  },

  // ==========================================
  // 20. ZINDAGI NA MILEGI DOBARA (Bollywood - Road Trip Drama)
  // ==========================================
  {
    id: 'znmd-2011',
    tmdbId: 64720,
    title: 'Zindagi Na Milegi Dobara',
    originalTitle: 'ज़िंदगी ना मिलेगी दोबारा',
    tagline: 'Live your dreams before you run out of time.',
    year: 2011,
    runtime: 155,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'English [Subtitles]', 'Spanish [Subtitles]'],
    subtitles: ['English', 'Spanish', 'French'],
    audioBadgeType: 'Original',
    genres: ['Adventure', 'Comedy', 'Drama', 'Romance'],
    director: 'Zoya Akhtar',
    cast: [
      { name: 'Hrithik Roshan', role: 'Arjun Saluja' },
      { name: 'Farhan Akhtar', role: 'Imran Qureshi' },
      { name: 'Abhay Deol', role: 'Kabir Dewan' },
      { name: 'Katrina Kaif', role: 'Laila' },
      { name: 'Kalki Koechlin', role: 'Natasha' }
    ],
    overview: 'Three friends decide to turn their fantasy vacation in Spain into reality after one of them gets engaged. In the process, they confront their deepest fears, mend long-standing rifts, and fall in love with life.',
    moodTags: ['Feel-Good Comedy', 'Heartwarming Romance', 'Emotional Journey', 'Wanderlust'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '82K',
      rottenTomatoes: 91,
      audienceScore: 89,
      metascore: 78,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/hKO9O715wYxjkQSEv47giCYcyO8.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/hKO9O715wYxjkQSEv47giCYcyO8.jpg',
    youtubeTrailerId: 'FJrtc2zchSs',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.18, 0.45, 0.38, 0.88, 0.82, 0.85, 0.45, 0.38, 0.88, 0.52, 0.48, 0.88, 0.52, 0.88, 0.88, 0.42, 0.45, 0.92, 0.42, 0.89, 0.45, 0.35, 0.88, 0.55],
    pcaCoordinates: [0.62, -0.22],
    keywords: ['spain road trip', 'skydiving', 'tomatina festival', 'deep sea diving', 'poetry', 'friendship'],
    industry: 'Bollywood'
  },

  // ==========================================
  // 21. SPIRITED AWAY (World Cinema / Japanese - Fantasy)
  // ==========================================
  {
    id: 'spirited-away-2001',
    tmdbId: 129,
    title: 'Spirited Away',
    originalTitle: '千と千尋の神隠し',
    tagline: 'The tunnel led Chihiro to a mysterious world.',
    year: 2001,
    runtime: 125,
    primaryLanguage: 'ja',
    languageLabel: 'Japanese',
    audioTracks: ['Japanese [Original 5.1]', 'Hindi [Dual Audio]', 'English [Dubbed]'],
    subtitles: ['English', 'Hindi', 'Spanish', 'French'],
    audioBadgeType: 'Dual Audio',
    genres: ['Animation', 'Adventure', 'Family', 'Fantasy'],
    director: 'Hayao Miyazaki',
    cast: [
      { name: 'Rumi Hiiragi', role: 'Chihiro Ogino' },
      { name: 'Miyu Irino', role: 'Haku' },
      { name: 'Mari Natsuki', role: 'Yubaba' }
    ],
    overview: 'During her family’s move to the suburbs, a sullen 10-year-old girl wanders into a magical world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    moodTags: ['Cosmic Wonder', 'Epic Mythology', 'Emotional Journey', 'Heartwarming Romance'],
    ratings: {
      imdb: 8.6,
      imdbVotes: '860K',
      rottenTomatoes: 96,
      audienceScore: 96,
      metascore: 96,
      letterboxd: 4.5
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg',
    youtubeTrailerId: 'ByXuk9QqQkk',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Pluto TV (Free Anime)', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.68, 0.42, 0.55, 0.92, 0.52, 0.65, 0.88, 0.82, 0.85, 0.58, 0.65, 0.82, 0.78, 0.82, 0.72, 0.58, 0.62, 0.85, 0.75, 0.82, 0.65, 0.72, 0.78, 0.75],
    pcaCoordinates: [-0.08, 0.52],
    keywords: ['studio ghibli', 'bathhouse', 'no face', 'miyazaki', 'haku dragon', 'oscar winner animation'],
    industry: 'World Cinema'
  },

  // ==========================================
  // 22. PAN'S LABYRINTH (World Cinema / Spanish - Dark Fantasy)
  // ==========================================
  {
    id: 'pans-labyrinth-2006',
    tmdbId: 1417,
    title: 'Pan’s Labyrinth',
    originalTitle: 'El laberinto del fauno',
    tagline: 'Innocence has a power evil cannot imagine.',
    year: 2006,
    runtime: 118,
    primaryLanguage: 'es',
    languageLabel: 'Spanish',
    audioTracks: ['Spanish [Original 5.1]', 'English [Subtitles]', 'Hindi [Dubbed]'],
    subtitles: ['English', 'French', 'Hindi'],
    audioBadgeType: 'Dual Audio',
    genres: ['Drama', 'Fantasy', 'War'],
    director: 'Guillermo del Toro',
    cast: [
      { name: 'Ivana Baquero', role: 'Ofelia' },
      { name: 'Sergi López', role: 'Captain Vidal' },
      { name: 'Maribel Verdú', role: 'Mercedes' },
      { name: 'Doug Jones', role: 'Fauno / Pale Man' }
    ],
    overview: 'In the falangist Spain of 1944, the young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world where an enigmatic faun sets three perilous tasks.',
    moodTags: ['Dark & Twisted', 'Epic Mythology', 'Mind-Bending', 'Atmospheric Dread'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '690K',
      rottenTomatoes: 95,
      audienceScore: 91,
      metascore: 98,
      letterboxd: 4.3
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/6G6nqSW9S7EHA9HrYl0Z8uo2H7f.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/6G6nqSW9S7EHA9HrYl0Z8uo2H7f.jpg',
    youtubeTrailerId: 'EqYiSlkvRuw',
    streamingProviders: [
      { name: 'Apple TV+', type: 'paid', url: 'https://tv.apple.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Tubi (Free)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.58, 0.65, 0.88, 0.85, 0.22, 0.25, 0.82, 0.85, 0.62, 0.65, 0.75, 0.52, 0.78, 0.68, 0.42, 0.82, 0.78, 0.45, 0.78, 0.55, 0.82, 0.65, 0.45, 0.78],
    pcaCoordinates: [-0.22, 0.58],
    keywords: ['guillermo del toro', 'pale man', 'spanish civil war', 'dark fairy tale', 'labyrinth'],
    industry: 'World Cinema'
  },

  // ==========================================
  // 23. KANTARA (South Indian / Kannada - Action Folklore)
  // ==========================================
  {
    id: 'kantara-2022',
    tmdbId: 1024546,
    title: 'Kantara',
    originalTitle: 'ಕಾಂತಾರ',
    tagline: 'A legend that ignited the divine fire.',
    year: 2022,
    runtime: 148,
    primaryLanguage: 'te',
    languageLabel: 'Kannada',
    audioTracks: ['Kannada [Original 5.1]', 'Hindi [Dual Audio]', 'Tamil [Dubbed]', 'Telugu', 'Malayalam'],
    subtitles: ['English', 'Hindi'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Adventure', 'Drama', 'Thriller'],
    director: 'Rishab Shetty',
    cast: [
      { name: 'Rishab Shetty', role: 'Shiva / Daiva' },
      { name: 'Sapthami Gowda', role: 'Leela' },
      { name: 'Kishore', role: 'Muralidhar (Forest Officer)' },
      { name: 'Achyuth Kumar', role: 'Devendra Suttooru' }
    ],
    overview: 'When greed paves the way for betrayal and deceit, a fiery rebel from a coastal village becomes the instrument of divine wrath as ancestral Bhoota Kola traditions collide with land grabbers.',
    moodTags: ['Epic Mythology', 'Adrenaline Thriller', 'High Octane', 'Divine Fury'],
    ratings: {
      imdb: 8.2,
      imdbVotes: '102K',
      rottenTomatoes: 84,
      audienceScore: 92,
      metascore: 78,
      letterboxd: 4.0
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/w57nxiBIODAYHLRs1xmrCY9zEFe.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/w57nxiBIODAYHLRs1xmrCY9zEFe.jpg',
    youtubeTrailerId: '6o45d_XW3cE',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.35, 0.92, 0.88, 0.75, 0.28, 0.32, 0.62, 0.72, 0.68, 0.85, 0.88, 0.48, 0.68, 0.78, 0.42, 0.85, 0.88, 0.52, 0.62, 0.62, 0.85, 0.48, 0.48, 0.82],
    pcaCoordinates: [0.42, 0.48],
    keywords: ['bhoota kola', 'panjurli daiva', 'forest rights', 'rishab shetty', 'divine possession', 'kantara roar'],
    industry: 'South Indian / Pan-India',
    isTrending: true
  },

  // ==========================================
  // 24. EVERYTHING EVERYWHERE ALL AT ONCE (Hollywood)
  // ==========================================
  {
    id: 'eeaao-2022',
    tmdbId: 545611,
    title: 'Everything Everywhere All at Once',
    originalTitle: 'Everything Everywhere All at Once',
    tagline: 'The universe is so much bigger than you realize.',
    year: 2022,
    runtime: 139,
    primaryLanguage: 'en',
    languageLabel: 'English/Cantonese',
    audioTracks: ['English [Original Atmos]', 'Hindi [Dual Audio]', 'Spanish'],
    subtitles: ['English', 'Hindi', 'Chinese', 'Spanish'],
    audioBadgeType: 'Dual Audio',
    genres: ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
    director: 'Daniel Kwan, Daniel Scheinert',
    cast: [
      { name: 'Michelle Yeoh', role: 'Evelyn Wang' },
      { name: 'Ke Huy Quan', role: 'Waymond Wang' },
      { name: 'Stephanie Hsu', role: 'Joy Wang / Jobu Tupaki' },
      { name: 'Jamie Lee Curtis', role: 'Deirdre Beaubeirdre' }
    ],
    overview: 'A middle-aged Chinese immigrant is swept up into an insane multiverse adventure where she alone can save existence by exploring other parallel realities and reconciling her fractured relationship with her daughter.',
    moodTags: ['Mind-Bending', 'Emotional Journey', 'Cosmic Wonder', 'Feel-Good Comedy'],
    ratings: {
      imdb: 7.8,
      imdbVotes: '530K',
      rottenTomatoes: 94,
      audienceScore: 86,
      metascore: 81,
      letterboxd: 4.3
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/u68AjlvlutfEIcpmbYpKcdi09ut.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/u68AjlvlutfEIcpmbYpKcdi09ut.jpg',
    youtubeTrailerId: 'wxN1T1uxQ2g',
    streamingProviders: [
      { name: 'Sony LIV', type: 'paid', url: 'https://www.sonyliv.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Pluto TV (Free)', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.88, 0.78, 0.68, 0.89, 0.75, 0.78, 0.85, 0.88, 0.75, 0.72, 0.78, 0.78, 0.88, 0.75, 0.65, 0.72, 0.78, 0.82, 0.88, 0.78, 0.75, 0.82, 0.75, 0.82],
    pcaCoordinates: [-0.35, 0.45],
    keywords: ['multiverse', 'everything bagel', 'googly eyes', 'hot dog fingers', 'oscar winner best picture', 'mother daughter'],
    industry: 'Hollywood',
    isTrending: true
  },

  // ==========================================
  // 25. STREE (Bollywood - Horror Comedy)
  // ==========================================
  {
    id: 'stree-2018',
    tmdbId: 533991,
    title: 'Stree',
    originalTitle: 'स्त्री',
    tagline: 'O Stree, kal aana.',
    year: 2018,
    runtime: 128,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'English [Subtitles]'],
    subtitles: ['English', 'Spanish'],
    audioBadgeType: 'Original',
    genres: ['Comedy', 'Horror'],
    director: 'Amar Kaushik',
    cast: [
      { name: 'Rajkummar Rao', role: 'Vicky' },
      { name: 'Shraddha Kapoor', role: 'The Mystery Girl' },
      { name: 'Pankaj Tripathi', role: 'Rudra' },
      { name: 'Aparshakti Khurana', role: 'Bittu' }
    ],
    overview: 'In the small town of Chanderi, the men live in fear of an evil spirit named Stree who abducts men during festival nights, until a talented ladies tailor and his friends uncover the haunting truth.',
    moodTags: ['Feel-Good Comedy', 'Dark & Twisted', 'Spooky Fun', 'Uplifting'],
    ratings: {
      imdb: 7.5,
      imdbVotes: '55K',
      rottenTomatoes: 82,
      audienceScore: 84,
      metascore: 74,
      letterboxd: 3.7
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg',
    youtubeTrailerId: 'gzeaGcLLl_A',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Disney+ Hotstar', type: 'paid', url: 'https://www.hotstar.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.22, 0.52, 0.65, 0.82, 0.85, 0.78, 0.52, 0.48, 0.72, 0.62, 0.65, 0.78, 0.52, 0.75, 0.78, 0.62, 0.65, 0.82, 0.48, 0.78, 0.58, 0.42, 0.78, 0.62],
    pcaCoordinates: [0.52, -0.15],
    keywords: ['chanderi', 'o stree kal aana', 'pankaj tripathi', 'bhediya universe', 'horror comedy'],
    industry: 'Bollywood'
  },

  // ==========================================
  // 26. THE PLATFORM (World Cinema / Spanish - Sci-Fi Thriller)
  // ==========================================
  {
    id: 'the-platform-2019',
    tmdbId: 619264,
    title: 'The Platform',
    originalTitle: 'El hoyo',
    tagline: 'Hunger knows no morals.',
    year: 2019,
    runtime: 94,
    primaryLanguage: 'es',
    languageLabel: 'Spanish',
    audioTracks: ['Spanish [Original 5.1]', 'Hindi [Dual Audio]', 'English [Dubbed]'],
    subtitles: ['English', 'Hindi', 'German'],
    audioBadgeType: 'Dual Audio',
    genres: ['Horror', 'Sci-Fi', 'Thriller'],
    director: 'Galder Gaztelu-Urrutia',
    cast: [
      { name: 'Iván Massagué', role: 'Goreng' },
      { name: 'Zorion Eguileor', role: 'Trimagasi' },
      { name: 'Antonia San Juan', role: 'Imoguiri' }
    ],
    overview: 'A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed. An endless nightmare trap deep inside The Hole.',
    moodTags: ['Dark & Twisted', 'Mind-Bending', 'Existential Dread', 'Gritty Crime'],
    ratings: {
      imdb: 7.0,
      imdbVotes: '260K',
      rottenTomatoes: 80,
      audienceScore: 73,
      metascore: 73,
      letterboxd: 3.6
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/iXvQnzy6JCAx1PiQEKXuTY04ZHl.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/iXvQnzy6JCAx1PiQEKXuTY04ZHl.jpg',
    youtubeTrailerId: 'RlfooqeZcdY',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'Tubi (Free)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.72, 0.68, 0.92, 0.65, 0.15, 0.12, 0.85, 0.88, 0.52, 0.68, 0.72, 0.38, 0.82, 0.45, 0.22, 0.88, 0.82, 0.28, 0.82, 0.45, 0.85, 0.72, 0.35, 0.78],
    pcaCoordinates: [-0.28, 0.65],
    keywords: ['vertical prison', 'social hierarchy', 'the hole', 'panna cotta', 'survival', 'allegory'],
    industry: 'World Cinema'
  },

  // ==========================================
  // 27. SITA RAMAM (South Indian / Telugu - Romantic Drama)
  // ==========================================
  {
    id: 'sita-ramam-2022',
    tmdbId: 982542,
    title: 'Sita Ramam',
    originalTitle: 'సీతా రామం',
    tagline: 'Love across borders and through time.',
    year: 2022,
    runtime: 163,
    primaryLanguage: 'te',
    languageLabel: 'Telugu',
    audioTracks: ['Telugu [Original 5.1]', 'Hindi [Dual Audio 5.1]', 'Tamil', 'Malayalam'],
    subtitles: ['English', 'Hindi'],
    audioBadgeType: 'Multi-Audio',
    genres: ['Action', 'Drama', 'Mystery', 'Romance'],
    director: 'Hanu Raghavapudi',
    cast: [
      { name: 'Dulquer Salmaan', role: 'Lieutenant Ram' },
      { name: 'Mrunal Thakur', role: 'Sita Mahalakshmi / Princess Noor Jahan' },
      { name: 'Rashmika Mandanna', role: 'Afreen' },
      { name: 'Sumanth', role: 'Brigadier Vishnu Sharma' }
    ],
    overview: 'An orphaned army lieutenant serving in Kashmir receives anonymous romantic letters from a girl named Sita. When he sets out to find her, love blossoms, but fate and national secrets separate them in this timeless tale.',
    moodTags: ['Heartwarming Romance', 'Emotional Journey', 'Uplifting', 'Epic Love'],
    ratings: {
      imdb: 8.5,
      imdbVotes: '68K',
      rottenTomatoes: 88,
      audienceScore: 94,
      metascore: 80,
      letterboxd: 4.2
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/zaAo7ytwAIaQZxIPBC4kfRSPlM0.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/zaAo7ytwAIaQZxIPBC4kfRSPlM0.jpg',
    youtubeTrailerId: '9G_XG2V_u9A',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Disney+ Hotstar', type: 'paid', url: 'https://www.hotstar.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.18, 0.48, 0.55, 0.96, 0.55, 0.68, 0.45, 0.42, 0.92, 0.62, 0.58, 0.88, 0.52, 0.91, 0.88, 0.52, 0.55, 0.94, 0.42, 0.92, 0.52, 0.35, 0.88, 0.62],
    pcaCoordinates: [0.55, -0.32],
    keywords: ['kashmir border', 'love letters', 'mrunal thakur', 'dulquer salmaan', 'princess noor jahan', 'heartbreaking romance'],
    industry: 'South Indian / Pan-India',
    isTrending: true
  },

  // ==========================================
  // 28. THE MATRIX (Hollywood - Sci-Fi Action)
  // ==========================================
  {
    id: 'the-matrix-1999',
    tmdbId: 603,
    title: 'The Matrix',
    originalTitle: 'The Matrix',
    tagline: 'Welcome to the Real World.',
    year: 1999,
    runtime: 136,
    primaryLanguage: 'en',
    languageLabel: 'English',
    audioTracks: ['English [Original 5.1]', 'Hindi [Dual Audio]', 'Spanish', 'Tamil'],
    subtitles: ['English', 'Hindi', 'German', 'Spanish'],
    audioBadgeType: 'Dual Audio',
    genres: ['Action', 'Sci-Fi'],
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: [
      { name: 'Keanu Reeves', role: 'Neo / Thomas Anderson' },
      { name: 'Laurence Fishburne', role: 'Morpheus' },
      { name: 'Carrie-Anne Moss', role: 'Trinity' },
      { name: 'Hugo Weaving', role: 'Agent Smith' }
    ],
    overview: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    moodTags: ['Mind-Bending', 'Adrenaline Thriller', 'Cosmic Wonder', 'Intense Cerebral'],
    ratings: {
      imdb: 8.7,
      imdbVotes: '2.0M',
      rottenTomatoes: 83,
      audienceScore: 85,
      metascore: 73,
      letterboxd: 4.4
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/oMsxZEvz9a708d49b6UdZK1KAo5.jpg',
    youtubeTrailerId: 'vKQi3bBA1y8',
    streamingProviders: [
      { name: 'JioCinema', type: 'paid', url: 'https://www.jiocinema.com' },
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Tubi (Free)', type: 'free', url: 'https://tubitv.com' }
    ],
    vectorEmbedding: [0.95, 0.92, 0.85, 0.75, 0.15, 0.12, 0.92, 0.95, 0.62, 0.85, 0.88, 0.42, 0.95, 0.35, 0.18, 0.82, 0.92, 0.28, 0.96, 0.42, 0.89, 0.88, 0.28, 0.85],
    pcaCoordinates: [-0.68, 0.52],
    keywords: ['red pill blue pill', 'bullet time', 'simulated reality', 'keanu reeves', 'agent smith', 'cyberpunk'],
    industry: 'Hollywood'
  },

  // ==========================================
  // 29. LAGAAN (Bollywood - Sports Drama Musical)
  // ==========================================
  {
    id: 'lagaan-2001',
    tmdbId: 1966,
    title: 'Lagaan: Once Upon a Time in India',
    originalTitle: 'लगान',
    tagline: 'Once upon a time in India...',
    year: 2001,
    runtime: 224,
    primaryLanguage: 'hi',
    languageLabel: 'Hindi',
    audioTracks: ['Hindi [Original 5.1]', 'English [Subtitles]'],
    subtitles: ['English', 'Spanish', 'French'],
    audioBadgeType: 'Original',
    genres: ['Adventure', 'Drama', 'Musical', 'Sport'],
    director: 'Ashutosh Gowariker',
    cast: [
      { name: 'Aamir Khan', role: 'Bhuvan' },
      { name: 'Gracy Singh', role: 'Gauri' },
      { name: 'Rachel Shelley', role: 'Elizabeth Russell' },
      { name: 'Paul Blackthorne', role: 'Captain Russell' }
    ],
    overview: 'In Victorian India, the people of a small village staked their future on a game of cricket against their ruthless British rulers to cancel their oppressive agricultural tax.',
    moodTags: ['Emotional Journey', 'Uplifting', 'Adrenaline Thriller', 'Patriotic Triumph'],
    ratings: {
      imdb: 8.1,
      imdbVotes: '120K',
      rottenTomatoes: 95,
      audienceScore: 92,
      metascore: 84,
      letterboxd: 4.1
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg',
    youtubeTrailerId: 'oSIGhnSCJk8',
    streamingProviders: [
      { name: 'Netflix', type: 'paid', url: 'https://www.netflix.com' },
      { name: 'YouTube (Free Movies)', type: 'free', url: 'https://www.youtube.com' }
    ],
    vectorEmbedding: [0.22, 0.72, 0.65, 0.92, 0.48, 0.58, 0.42, 0.45, 0.88, 0.65, 0.62, 0.82, 0.52, 0.88, 0.72, 0.58, 0.65, 0.88, 0.42, 0.85, 0.55, 0.38, 0.78, 0.68],
    pcaCoordinates: [0.52, -0.38],
    keywords: ['cricket match', 'british raj', 'champaner', 'aamir khan', 'ar rahman', 'oscar nominee'],
    industry: 'Bollywood'
  },

  // ==========================================
  // 30. TRAIN TO BUSAN (World Cinema / Korean - Zombie Action)
  // ==========================================
  {
    id: 'train-to-busan-2016',
    tmdbId: 396535,
    title: 'Train to Busan',
    originalTitle: '부산행',
    tagline: 'Life-or-death ride on the bullet train.',
    year: 2016,
    runtime: 118,
    primaryLanguage: 'ko',
    languageLabel: 'Korean',
    audioTracks: ['Korean [Original 5.1]', 'Hindi [Dual Audio]', 'English [Dubbed]'],
    subtitles: ['English', 'Hindi', 'Spanish'],
    audioBadgeType: 'Dual Audio',
    genres: ['Action', 'Horror', 'Sci-Fi', 'Thriller'],
    director: 'Yeon Sang-ho',
    cast: [
      { name: 'Gong Yoo', role: 'Seok-woo' },
      { name: 'Ma Dong-seok (Don Lee)', role: 'Sang-hwa' },
      { name: 'Jung Yu-mi', role: 'Seong-kyeong' },
      { name: 'Kim Su-an', role: 'Soo-an' }
    ],
    overview: 'While a zombie virus breaks out in South Korea, passengers struggle to survive on the high-speed train from Seoul to Busan, confronting both flesh-eating monsters and cold human selfishness.',
    moodTags: ['Adrenaline Thriller', 'Emotional Journey', 'Dark & Twisted', 'High Octane'],
    ratings: {
      imdb: 7.6,
      imdbVotes: '265K',
      rottenTomatoes: 95,
      audienceScore: 89,
      metascore: 73,
      letterboxd: 3.9
    },
    posterUrl: 'https://image.tmdb.org/t/p/w780/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w780/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg',
    youtubeTrailerId: 'pyWuHv2-Abk',
    streamingProviders: [
      { name: 'Prime Video', type: 'paid', url: 'https://www.primevideo.com' },
      { name: 'Tubi (Free with Ads)', type: 'free', url: 'https://tubitv.com' },
      { name: 'Pluto TV', type: 'free', url: 'https://pluto.tv' }
    ],
    vectorEmbedding: [0.45, 0.95, 0.88, 0.78, 0.28, 0.32, 0.58, 0.65, 0.68, 0.85, 0.88, 0.48, 0.65, 0.72, 0.42, 0.85, 0.88, 0.52, 0.62, 0.68, 0.82, 0.55, 0.48, 0.82],
    pcaCoordinates: [-0.18, 0.35],
    keywords: ['zombie apocalypse', 'bullet train', 'don lee', 'gong yoo', 'father sacrifice', 'survival horror'],
    industry: 'World Cinema',
    isTrending: true
  }
];

// Curated collections for category carousels
export const CATEGORY_CAROUSELS = [
  {
    id: 'trending-worldwide',
    title: 'Trending Worldwide',
    subtitle: 'Top-streamed cinematic triumphs bridging global audiences',
    filter: (m: Movie) => Boolean(m.isTrending)
  },
  {
    id: 'blockbuster-bollywood',
    title: 'Blockbuster Bollywood & Masterpieces',
    subtitle: 'From emotional epics to intense crime noir in Hindi cinema',
    filter: (m: Movie) => m.industry === 'Bollywood'
  },
  {
    id: 'pan-india',
    title: 'Pan-India & South Indian Powerhouses',
    subtitle: 'High-octane spectacles and folklore across Telugu, Tamil, and Kannada',
    filter: (m: Movie) => m.industry === 'South Indian / Pan-India'
  },
  {
    id: 'mind-bending-scifi',
    title: 'Mind-Bending & Psychological Sci-Fi',
    subtitle: 'Multiverses, dream infiltration, time dilation, and cognitive labyrinths',
    filter: (m: Movie) => m.moodTags.includes('Mind-Bending') || m.genres.includes('Sci-Fi')
  },
  {
    id: 'gritty-crime',
    title: 'Gritty Crime & Dark Suspense',
    subtitle: 'Raw blood feuds, underworld syndicates, and intricate investigations',
    filter: (m: Movie) => m.moodTags.includes('Gritty Crime') || m.genres.includes('Crime')
  },
  {
    id: 'world-cinema',
    title: 'World Cinema & International Gems',
    subtitle: 'Acclaimed Korean thrillers, Spanish dark fantasies, and Japanese animation',
    filter: (m: Movie) => m.industry === 'World Cinema'
  },
  {
    id: 'free-streaming',
    title: 'Free Streaming Available [HDHub4u Tagged]',
    subtitle: 'Zero subscription required on Tubi, Pluto TV, YouTube Free, & Zee5',
    filter: (m: Movie) => m.streamingProviders.some(p => p.type === 'free')
  }
];

export const ALL_MOODS = [
  'Mind-Bending',
  'Adrenaline Thriller',
  'Gritty Crime',
  'Heartwarming Romance',
  'Epic Mythology',
  'Dark & Twisted',
  'Feel-Good Comedy',
  'Cosmic Wonder',
  'Emotional Journey'
];

export const ALL_LANGUAGES: { code: string; label: string; flag: string }[] = [
  { code: 'all', label: 'All Languages', flag: '🌐' },
  { code: 'hi', label: 'Hindi (Bollywood)', flag: '🇮🇳' },
  { code: 'en', label: 'English (Hollywood)', flag: '🇺🇸' },
  { code: 'te', label: 'Telugu (Tollywood)', flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil (Kollywood)', flag: '🇮🇳' },
  { code: 'ko', label: 'Korean (K-Cinema)', flag: '🇰🇷' },
  { code: 'es', label: 'Spanish (Iberoamerica)', flag: '🇪🇸' },
  { code: 'ja', label: 'Japanese', flag: '🇯🇵' }
];
