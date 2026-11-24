// Monday 23 November 2026: every item below happened, or was first reported, on that day.
// Two sources each (Wikipedia Portal:Current_events/2026_November_23, Al Jazeera 23 Nov, The Guardian 23 Nov, wires).
export const DAY = {
  weekday: 'Monday',
  date: '23 November 2026',
  subtitle: 'Kyiv claims a Russian warship off Libya · EU drafts new Russia sanctions · Nvidia rehires Huang',
};

export const LEADS = [
  {
    id: 'libya', region: 'Africa', field: 'War', place: 'BENGHAZI, LIBYA', badge: 'CLAIM',
    head: 'Kyiv says it sank a Russian warship',
    dek: 'Zelenskyy: seven sea drones hit corvette Merkury and a cargo ship off Libya. Kremlin vows "painful consequences".',
    src: 'Zelenskyy · Kremlin · Guardian · Al Jazeera', lon: 20.1, lat: 32.1,
  },
  {
    id: 'eu', region: 'Europe', field: 'Sanctions', place: 'BRUSSELS, EU', badge: 'OFFICIAL',
    head: 'EU drafts 22nd Russia sanctions package',
    dek: 'Von der Leyen: 60 Russian banks cut from SWIFT, crypto platforms hit, Russian teams barred from EU sport.',
    src: 'European Commission · Al Jazeera', lon: 4.4, lat: 50.8,
  },
  {
    id: 'nvidia', region: 'North America', field: 'Markets', place: 'SANTA CLARA, US', badge: 'OFFICIAL',
    head: 'Nvidia rehires Huang 11 days after exit',
    dek: 'Jensen Huang quit over an affair scandal; Trump says he urged the board. Shares close at $165.05.',
    src: 'Nvidia · Guardian · Al Jazeera · CBS', lon: -122, lat: 37.4,
  },
];

export const NUMBERS = [
  ['$950bn', 'added to Nvidia\'s market value'],
  ['+6.5%', 'Nasdaq Composite, its tech rebound'],
  ['−3.3%', 'Kospi close in Seoul'],
  ['60', 'Russian banks the EU plans to cut from SWIFT'],
  ['$1.6bn', 'India\'s flood-recovery aid for Nepal'],
  ['74', 'lashes for Iranian singer Parastoo Ahmadi'],
];

export const CARDS = [
  { id: 'kospi', region: 'East Asia', field: 'Markets', place: 'SEOUL', badge: 'OFFICIAL',
    head: 'AI-bubble fears sink Seoul stocks', dek: 'Kospi ends 3.3% down; Samsung −3.1%.', src: 'Al Jazeera · Guardian', lon: 127, lat: 37.5 },
  { id: 'iran', region: 'Middle East', field: 'Rights', place: 'QOM, IRAN', badge: 'REPORTED',
    head: 'Iran flogs a singer over a no-hijab video', dek: 'Parastoo Ahmadi and 4 bandmates, lawyer says.', src: 'BBC · Al Jazeera · Guardian', lon: 50.9, lat: 34.6 },
  { id: 'belgium', region: 'Europe', field: 'Labour', place: 'BRUSSELS', badge: 'OFFICIAL',
    head: 'Strike grounds almost every Belgian flight', dek: 'Anti-austerity walkout; trains hit too.', src: 'Brussels Airport · Al Jazeera', lon: 4.4, lat: 50.9 },
  { id: 'spain', region: 'Europe', field: 'Law', place: 'MADRID', badge: 'OFFICIAL',
    head: 'Court grants Puigdemont amnesty', dek: 'Supreme Court ends the 2017 Catalan cases.', src: 'CNN · El Mundo', lon: -3.7, lat: 40.4 },
  { id: 'nepal', region: 'South Asia', field: 'Diplomacy', place: 'NEW DELHI', badge: 'OFFICIAL',
    head: 'Modi pledges $1.6bn to rebuild Nepal', dek: 'After talks with PM Balendra Shah.', src: 'Modi statement · Al Jazeera', lon: 77.2, lat: 28.6 },
  { id: 'colombia', region: 'Latin America', field: 'Conflict', place: 'COLOMBIA', badge: 'REPORTED',
    head: 'Car bomb hurts 21 in Villavicencio', dek: 'Drone hits a Cúcuta police base, 3 hurt.', src: 'Anadolu · Al Jazeera', lon: -73.6, lat: 4.1 },
  { id: 'myanmar', region: 'Southeast Asia', field: 'Rights', place: 'LONDON · MYANMAR', badge: 'OFFICIAL',
    head: 'UK recognises Rohingya genocide', dek: 'Sanctions five Myanmar military chiefs.', src: 'BBC · Daily Sun', lon: -0.1, lat: 51.5 },
  { id: 'perm', region: 'Europe', field: 'War', place: 'PERM, RUSSIA', badge: 'REPORTED',
    head: 'Drones hit two Russian refineries', dek: 'Ukraine strikes Perm and Novoshakhtinsk.', src: 'Kyiv Independent · Moscow Times', lon: 56.2, lat: 58 },
  { id: 'yemen', region: 'Middle East', field: 'Conflict', place: 'HODEIDAH, YEMEN', badge: 'REPORTED',
    head: 'Air raids kill 8 at a Yemen telecoms site', dek: 'Sanaa health officials; 17 hurt.', src: 'Houthi health ministry · Al Jazeera', lon: 43, lat: 14.8 },
  { id: 'cricket', region: 'Oceania', field: 'Sport', place: 'WELLINGTON', badge: 'RESULT',
    head: 'New Zealand hold India to a draw', dek: 'First Test ends with NZ on 239-5.', src: 'Al Jazeera · ESPNcricinfo', lon: 174.8, lat: -41.3 },
];

export const BRIEFS = [
  { region: 'Europe', where: 'Ukraine', text: 'Dymer strike toll rises to 11; two pulled out alive', src: 'Kyiv region · Guardian' },
  { region: 'Europe', where: 'Germany', text: 'Emailed bomb threats hit 450 schools; police: not serious', src: 'Reuters · AJ' },
  { region: 'Europe', where: 'Germany', text: 'Tear-gas attack on a Greens meeting in Schwerte, 8 hurt', src: 'Tagesschau' },
  { region: 'Europe', where: 'Russia', text: 'Warns Estonia over its plan to shut the border', src: 'Russian MFA · AJ' },
  { region: 'Europe', where: 'Europe', text: 'Gas price ends 4% up on cold-snap fears', src: 'Guardian · ICE' },
  { region: 'Europe', where: 'Denmark', text: 'Top court backs "ghetto law" evictions', src: 'AJ' },
  { region: 'Middle East', where: 'Gaza', text: 'Oxfam: war has polluted 99% of the strip', src: 'Oxfam · Guardian' },
  { region: 'Middle East', where: 'Gaza', text: 'Israeli strike kills an UNRWA worker', src: 'UNRWA · AJ' },
  { region: 'Middle East', where: 'US–Iran', text: 'Treasury sanctions Iran’s shadow banks', src: 'US Treasury · AJ' },
  { region: 'Middle East', where: 'Iraq', text: 'Turkey says the PKK left 14 more bases', src: 'AFP · France 24' },
  { region: 'Central Asia', where: 'Tajikistan', text: 'Starts leaving the International Criminal Court', src: 'Reuters · AJ' },
  { region: 'Southeast Asia', where: 'Indonesia', text: 'Candy-factory fire toll confirmed at 24', src: 'Banten SAR · AJ' },
  { region: 'South Asia', where: 'Bangladesh', text: 'Garment workers reject a pay offer', src: 'AFP · AJ' },
  { region: 'South Asia', where: 'Bangladesh', text: 'Party factions clash in Gopalganj; 30 hurt', src: 'Daily Star · TBS' },
  { region: 'Oceania', where: 'Australia', text: 'Treasurer warns joblessness will pass 5%', src: 'Chalmers · Guardian' },
  { region: 'North America', where: 'US', text: 'Trump delays Army plan to blow up Iowa explosives', src: 'Truth Social · AJ' },
  { region: 'North America', where: 'US', text: 'Virginia and Oregon sue SpaceX over Grok images', src: 'State AGs · AJ' },
  { region: 'North America', where: 'Canada', text: 'Quebec court: legislators must swear oath to the King', src: 'AFP · France 24' },
  { region: 'Latin America', where: 'Mexico', text: '16 cartel suspects killed in Sinaloa raid, officials say', src: 'Mexican govt · AJ' },
  { region: 'World', where: 'Football', text: 'FIFA confirms 2031 and 2035 Women’s World Cup hosts', src: 'AFP · FIFA' },
];

export const TIMELINE = [
  ['06:00', 'Belgian skies shut'],
  ['06:30', 'Kospi ends −3.3%'],
  ['14:30', 'Wall St opens'],
  ['20:00', 'Belgian flights resume'],
  ['21:00', 'Nasdaq ends up 6.5%; Nvidia $165.05'],
];

export const DATECHECK = {
  intro: 'Every story here happened, or was first reported, on Monday 23 November 2026 (UTC), in two sources; claims are attributed.',
  left: [
    ['COP31 ends with no deal', 'Sun 22'], ['Alcaraz wins ATP Finals', 'Sun 22'], ['Márquez\'s 8th MotoGP title', 'Sun 22'],
    ['Korea education minister quits', 'Sun 22'], ['Liverpool 4-0 Man Utd', 'Sun 22'], ['Manchester concert evacuated', 'Sun 22'],
    ['Banten factory fire breaks out', 'Sat 21'],
  ],
  notYet: 'Spain votes Sun 29 Nov',
};
