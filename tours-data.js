// Travela tour catalogue — sourced from travelacroatia.com (relevado 2026-08-12).
// Textual data only; nothing added that the source does not state.
export const CATEGORIES = [
  { id: 'boat', label: 'Boat Tours', count: 4 },
  { id: 'adventure', label: 'Adventure', count: 3 },
  { id: 'parks', label: 'National Parks', count: 3 },
  { id: 'cities', label: 'Cities', count: 2 }
];

export const TOURS = [
  {
    img: 'uploads/photos-1786467766376-nuoz.jpg',
    id: 'blue-cave-5-islands', cat: 'boat', catLabel: 'Boat Tours',
    title: 'Blue Cave & 5 Islands Tour',
    price: 120, duration: '10 h', departure: '07:45 daily',
    meeting: 'Split — Riva Promenade, Stand No. 5',
    route: 'Biševo · Stiniva · Budikovac · Pakleni · Hvar',
    description: 'Embark on a captivating day tour from Split, exploring the hidden gems of the Adriatic Sea — beaches, snorkelling and coastal landscapes.',
    includes: ['Boat transport', 'Skipper and sailor', 'Snorkelling equipment', 'Windbreaker jacket', 'Bottle of water', 'Insurance', 'Blue Cave entrance'],
    excludes: [],
    itinerary: ['Split, Riva Promenade (Stand 5) — departure', 'Blue Cave, Biševo Island', 'Surprise Destination', 'Stiniva Bay', 'Blue Lagoon (near Budikovac Island)', 'Pakleni Islands', 'Hvar', 'Return to Split, Riva Promenade']
  },
  {
    imgNote: 'zlatni rat / hvar',
    id: 'bol-hvar-pakleni', cat: 'boat', catLabel: 'Boat Tours',
    title: 'Bol, Hvar and Pakleni Islands Tour',
    price: 125, duration: '10 h', departure: '08:30',
    meeting: 'Riva Promenade, Stand 5',
    route: 'Zlatni rat · Hvar · Pakleni · Stomorska',
    description: 'Bol with Zlatni Rat beach, Hvar — one of the most picturesque islands in Croatia, with Venetian architecture — and the Pakleni Islands, the most popular beaches on mid Adriatic.',
    includes: ['Captain and sailor', 'Snorkelling equipment', 'Waterproof jacket', 'Bottle of water', 'Insurance'],
    excludes: ['Food / lunch', 'Towels', 'Blue Cave entrance (€12 low/mid season, €18 high season)'],
    itinerary: ['08:30 — Departure from Riva Promenade, Stand 5', '09:30–11:30 — Bol (Zlatni Rat beach)', '12:30–14:30 — Hvar', '14:50–16:50 — Pakleni Islands', '17:20–18:00 — Stomorska', '18:30 — Return to Split']
  },
  {
    imgNote: 'blue lagoon speedboat',
    id: 'half-day-blue-lagoon', cat: 'boat', catLabel: 'Boat Tours',
    title: 'Half Day Blue Lagoon Tour',
    price: 70, duration: '4.5 h', departure: '09:15 / 14:15',
    meeting: 'Desk 5, Riva Promenade',
    route: 'Trogir · Blue Lagoon · Maslinica',
    description: 'A 4.5-hour speedboat run to a lagoon of crystal clear waters, ideal for swimming, snorkeling and fun in the sun, with stops in Trogir (UNESCO site) and Maslinica.',
    includes: ['Boat transport', 'Skipper', 'Insurance'],
    excludes: ['Food'],
    itinerary: ['Departure from Split (09:15 / 14:15)', 'Trogir — free time for coffee (10:00–11:00 / 15:00–16:00)', 'Blue Lagoon — swimming and snorkelling (11:20–12:00 / 16:20–17:20)', 'Maslinica — coastal village (12:30–13:30 / 17:30–18:30)', 'Return to Split (14:00 / 19:00)']
  },
  {
    imgNote: 'duga bay / shipwreck',
    id: 'blue-lagoon-duga-shipwreck', cat: 'boat', catLabel: 'Boat Tours',
    title: 'Blue Lagoon, Duga Bay & Shipwreck',
    price: 60, duration: '8 h', departure: '09:30',
    meeting: 'Split, Riva Promenade — Stand No. 7',
    route: 'Duga Bay · Blue Lagoon · Nečujam',
    description: 'Fishing-boat day out to the Blue Lagoon with lunch on board, a water slide and snorkelling over the Nečujam shipwreck.',
    includes: ['Return fishing-boat trip to Blue Lagoon', 'Lunch on board (meat / fish / vegetarian) with unlimited water and lemon juice', 'Wine with lunch (during the meal only)', 'Snorkelling equipment', 'Water slide'],
    excludes: ['Land transport to the meeting point', 'Additional drinks outside lunch'],
    itinerary: ['09:30 — Meeting point at Riva', '10:00 — Boat departure', '11:30 — Duga Bay (Čiovo Island)', '12:00 — Lunch', '13:30 — Departure for Blue Lagoon', '14:15 — Blue Lagoon', '15:30–16:15 — Nečujam (Shipwreck) — snorkelling', '17:00 — Return to Split']
  },
  {
    imgNote: 'cetina rafting',
    id: 'rafting-cetina', cat: 'adventure', catLabel: 'Adventure',
    title: 'Rafting (Cetina River)',
    price: 65, duration: '5 h', departure: '07:40 / 13:40',
    meeting: 'Split city centre',
    route: '11 km · Cetina canyon · class I–III',
    description: '11 km of the Cetina river, 20 km south of Split, with numerous waterfalls, caves, beautiful water cascades and clear mountain water springs. Certified guides give a safety briefing; about 4 hours of actual rafting.',
    difficulty: 'Easy — class I–III (International Scale of River Difficulty). Suitable for beginners, no previous experience required.',
    includes: ['Transport', 'Insurance', 'Guide', 'Rafting equipment'],
    excludes: [],
    itinerary: []
  },
  {
    imgNote: 'cetina canyon',
    id: 'canyoning', cat: 'adventure', catLabel: 'Adventure',
    title: 'Canyoning',
    price: 65, duration: '5 h', departure: '07:40 / 13:40',
    meeting: 'Split City Center',
    route: 'Cetina canyon · cliffs to 180 m',
    description: 'Experience the ultimate canyoning adventure in the breathtaking Cetina River canyon, where towering cliffs rise up to 180 meters and the highest waterfall cascades down 50 meters. You walk, swim and slide through crystal clear water. No expert swimming or previous experience required; guides hold international certification (IRF, HGK, Croatian Mountain Rescue Service).',
    difficulty: 'Easy, suitable for beginners. Class I–III on the International Scale of River Difficulty.',
    includes: ['Transport', 'Guide', 'Equipment', 'Insurance'],
    excludes: [],
    itinerary: []
  },
  {
    imgNote: 'zipline omiš',
    id: 'zip-line', cat: 'adventure', catLabel: 'Adventure',
    title: 'Zip Line with transfer from Split',
    price: 100, duration: '5 h', departure: 'On request',
    meeting: 'Transfer from Split',
    route: '8 cables · 2 100 m · longest 700 m',
    description: 'Zipline course in the Cetina river canyon near Omiš: 2 100 metres across 8 steel cables, the longest 700 m at 150 m height. Includes a training session on two 25 m practice cables, two guides throughout, and short walks between stations. The zipline activity itself lasts about 2.5–3 h.',
    difficulty: 'Minimum age 7 (with guide approval). Children may descend in tandem with a guide.',
    includes: ['Transport', 'Insurance', 'Guides', 'Zipline equipment'],
    excludes: [],
    itinerary: []
  },
  {
    imgNote: 'skradinski buk',
    id: 'krka-waterfalls', cat: 'parks', catLabel: 'National Parks',
    title: 'Krka Waterfalls',
    price: 27, duration: '8 h', departure: '08:40',
    meeting: 'Split city centre',
    route: 'Skradinski buk · Skradin',
    description: 'Krka National Park with Skradinski Buk, a boat ride to Skradin and free time in the town.',
    includes: ['Transport', 'Guide', 'Free time in Skradin', 'Boat ride', 'Park entrance (seasonal fee applies)'],
    excludes: ['Insurance'],
    itinerary: ['09:00 — Departure from Split', '10:30–12:30 — Krka National Park (Skradinski Buk)', '12:30–13:00 — Boat ride to Skradin', '13:00–15:45 — Free time in Skradin', '16:00–17:15 — Return to Split']
  },
  {
    imgNote: 'krka / wine cellar',
    id: 'krka-wine-tasting', cat: 'parks', catLabel: 'National Parks',
    title: 'Krka Waterfalls with Wine Tasting',
    price: 38, duration: '8 h', departure: '08:30 / 10:30',
    meeting: 'Split city centre',
    route: 'Skradinski buk · Skradin · wine cellar',
    description: 'Nature, culture and gastronomy combined — the waterfalls and Skradinski Buk, a boat ride to Skradin, a tasting of local wines, and free time to swim and explore the town.',
    includes: ['Transport from Split', 'Guide', 'Entrance discount / skip the line', 'Wine tasting (3 wines with local cheese, appetiser and olive oil)', 'Time to swim in Skradin', 'Park entrance fee'],
    excludes: ['Travel insurance'],
    itinerary: []
  },
  {
    imgNote: 'plitvice boardwalks',
    id: 'plitvice-lakes', cat: 'parks', catLabel: 'National Parks',
    title: 'Plitvice Lakes National Park',
    price: 65, duration: '12 h', departure: '06:45',
    meeting: 'Split city centre',
    route: '16 lakes · travertine barriers',
    description: '16 lakes, travertine barriers, the highest waterfall in Croatia and limestone canyons, linked by wooden trails and boardwalks. The guide explains the ecosystems, wildlife and geology. Return to Split between 19:45 and 20:05.',
    includes: ['Transport', 'Insurance', 'Guide', 'Park entrance'],
    excludes: ['Meals (free time for lunch on your own)'],
    itinerary: []
  },
  {
    imgNote: 'dubrovnik old town',
    id: 'dubrovnik', cat: 'cities', catLabel: 'Cities',
    title: 'Dubrovnik',
    price: 67, duration: '12 h', departure: '07:45',
    meeting: 'Split City Center (07:00)',
    route: 'Old Town · Rector’s Palace · Mount Srđ',
    description: 'Guided walk through the Old Town — Rector’s Palace, Franciscan Monastery — followed by free time to explore, eat, and optionally take the cable car up Mount Srđ. A UNESCO heritage destination.',
    includes: ['Transport', 'Insurance', 'Professional tour guide', 'Site entrances'],
    excludes: ['Meals (other than what each visitor arranges in free time)'],
    itinerary: []
  },
  {
    imgNote: 'mostar old bridge',
    id: 'mostar-kravice', cat: 'cities', catLabel: 'Cities',
    title: 'Mostar and Kravice Waterfalls',
    price: 70, duration: '12 h', departure: '06:45',
    meeting: 'Split City Center',
    route: 'Mostar · Počitelj · Kravice',
    description: 'The Old Bridge of Mostar, the UNESCO town of Počitelj, and the Kravice Waterfalls with their emerald pools. Times may vary with weather and visitor numbers.',
    difficulty: 'Passport required — border crossing into Bosnia and Herzegovina.',
    includes: ['Transport', 'Insurance', 'Guide', 'Entrance (€10)', 'Border fee (€5)'],
    excludes: [],
    itinerary: []
  }
];

export function findTour(id) {
  return TOURS.find(t => t.id === id) || null;
}
