/*
 * Festa Italiana — site content.
 * Everything that changes year to year lives here so the ICC team can update
 * the site without touching layout code.
 *
 * Times are 24h "HH:MM". Day keys: fri | sat | sun.
 */
window.FESTA = {
  // Shows a slim "design preview" banner. Set to false before launch.
  preview: true,

  festival: {
    year: 2027,
    start: '2027-07-09',          // Friday
    end: '2027-07-11',            // Sunday
    datesConfirmed: false,        // false → dates show an asterisk + "subject to change"
    venue: 'Henry Maier Festival Park',
    address: '200 N Harbor Dr, Milwaukee, WI 53202',
    mapsUrl: 'https://maps.app.goo.gl/nHbEnpXzjm8RmBj29',
  },

  // Gate hours (2026 hours — confirm for 2027)
  days: [
    { key: 'fri', en: 'Friday',   it: 'Venerdì',  open: '17:00', close: '23:00' },
    { key: 'sat', en: 'Saturday', it: 'Sabato',   open: '11:00', close: '23:00' },
    { key: 'sun', en: 'Sunday',   it: 'Domenica', open: '12:00', close: '21:00', note: 'South Gate opens 9:30am for Festa Mass' },
  ],

  tickets: {
    url: 'https://festastore.sfgrounds.com/2026-general-admission-ticket',
    options: [
      { label: 'General Admission', price: 18, note: 'One admission, any day' },
      { label: 'GA 3-Pack', price: 45, note: 'Bring the famiglia' },
    ],
  },

  stages: {
    oasis:   { name: 'Miller Lite Oasis Stage', short: 'Oasis Stage',  color: 'rosso' },
    aurora:  { name: 'Aurora Pavilion Stage',   short: 'Aurora Pavilion', color: 'verde' },
    sports:  { name: 'Sports Stage',            short: 'Sports Stage', color: 'oro' },
    wine:    { name: 'Italian Wine Garden',     short: 'Wine Garden',  color: 'vino' },
    campari: { name: 'Club Campari',            short: 'Club Campari', color: 'campari' },
    roaming: { name: 'Strolling the grounds',   short: 'Strolling',    color: 'notte' },
    gate:    { name: 'South Gate entry',        short: 'Festa Mass',   color: 'notte' },
  },

  lineupYear: 2026,
  lineup: [
    // ── Friday
    { day: 'fri', start: '17:00', end: '20:00', stage: 'roaming', name: 'The Sicilian Serenaders', tag: 'Folk',
      blurb: 'Guitar, accordion and mandolin with an old-world sound. Find them near the main entrance.' },
    { day: 'fri', start: '17:00', end: '23:00', stage: 'campari', name: 'Club Campari ft. DJ Rozario', tag: 'DJ',
      blurb: 'Festa by day, club by night. Signature cocktails and dancing on the lakefront.' },
    { day: 'fri', start: '18:00', stage: 'sports', name: 'I Bei Bambini', tag: 'Folk dance',
      blurb: 'Young Milwaukee dancers keeping Italian folk dance alive.' },
    { day: 'fri', start: '18:30', end: '20:00', stage: 'oasis', name: 'The Russo Bros', tag: 'Crooners',
      blurb: 'Nick and Dominic Russo bring Sinatra, Dean Martin and Louis Prima to life.' },
    { day: 'fri', start: '19:15', stage: 'sports', name: 'Tradizione Vivente', tag: 'Folk dance',
      blurb: 'The Italian Dance Group of Milwaukee, performing every night of Festa.' },
    { day: 'fri', start: '19:30', end: '20:30', stage: 'wine', name: 'Enzo & Stella', tag: 'Italian pop',
      blurb: 'Contemporary Italian music under the Wine Garden lights.' },
    { day: 'fri', start: '20:30', end: '22:30', stage: 'oasis', name: 'The Eddie Butts Band', tag: 'R&B · Jazz',
      blurb: 'R&B, pop and jazz to close out opening night.' },
    { day: 'fri', start: '21:00', end: '22:15', stage: 'aurora', name: 'Frank Lamphere & His Rat Pack Jazz Quintet', tag: 'Rat Pack',
      blurb: 'The Rat Pack songbook from a classic pop crooner.' },

    // ── Saturday
    { day: 'sat', start: '12:00', end: '13:00', stage: 'oasis', name: 'Cory Pesaturo', tag: 'Accordion',
      blurb: 'The man revolutionizing the accordion.' },
    { day: 'sat', start: '15:00', stage: 'oasis', name: 'Jayne Taylor', tag: 'Italian favorites',
      blurb: 'Italian favorites and classic pop, with a special appearance by Claire “Thunder” Sardina.' },
    { day: 'sat', start: '17:00', end: '20:00', stage: 'roaming', name: 'The Sicilian Serenaders', tag: 'Folk',
      blurb: 'Guitar, accordion and mandolin with an old-world sound. Find them near the main entrance.' },
    { day: 'sat', start: '17:00', end: '18:30', stage: 'wine', name: 'Enzo & Stella', tag: 'Italian pop',
      blurb: 'Contemporary Italian music under the Wine Garden lights.' },
    { day: 'sat', start: '17:00', end: '23:00', stage: 'campari', name: 'Club Campari ft. DJ Rozario', tag: 'DJ',
      blurb: 'Festa by day, club by night. Signature cocktails and dancing on the lakefront.' },
    { day: 'sat', start: '18:00', stage: 'sports', name: 'I Bei Bambini', tag: 'Folk dance',
      blurb: 'Young Milwaukee dancers keeping Italian folk dance alive.' },
    { day: 'sat', start: '18:00', end: '19:30', stage: 'oasis', name: 'Denny: A Neil Diamond Story', tag: 'Tribute',
      blurb: 'An uplifting celebration of Neil Diamond’s greatest hits.' },
    { day: 'sat', start: '18:30', end: '19:30', stage: 'aurora', name: 'Zach Rolf Cabaret', tag: 'Show tunes',
      blurb: 'Broadway favorites and timeless standards, with special guest Cory Pesaturo.' },
    { day: 'sat', start: '19:15', stage: 'sports', name: 'Tradizione Vivente', tag: 'Folk dance',
      blurb: 'The Italian Dance Group of Milwaukee, performing every night of Festa.' },
    { day: 'sat', start: '20:00', stage: 'oasis', name: 'Shotgun Jane', tag: 'Pop · Rock · Country',
      blurb: 'High-energy pop, rock and country to keep you dancing all night.' },
    { day: 'sat', start: '20:00', stage: 'aurora', name: 'The Italian Idol Show', tag: 'Competition',
      blurb: 'Festa’s own singing competition, with a special appearance by Claire “Thunder” Sardina.' },

    // ── Sunday
    { day: 'sun', start: '10:30', stage: 'gate', name: 'Festa Mass & Procession', tag: 'Tradition',
      blurb: 'Mass, then the traditional procession and Benediction. South Gate opens at 9:30am.' },
    { day: 'sun', start: '13:00', stage: 'oasis', name: 'Milwaukee Mandolin Orchestra', tag: 'Mandolin',
      blurb: 'The oldest fretted-instrument orchestra in the U.S., playing in Milwaukee since 1900.' },
    { day: 'sun', start: '14:30', stage: 'oasis', name: 'The Dynamix', tag: 'Classics',
      blurb: 'The ultimate classics cover band.' },
    { day: 'sun', start: '15:00', end: '16:30', stage: 'wine', name: 'Enzo & Stella', tag: 'Italian pop',
      blurb: 'Contemporary Italian music under the Wine Garden lights.' },
    { day: 'sun', start: '15:00', end: '21:00', stage: 'campari', name: 'Club Campari ft. DJ Rozario', tag: 'DJ',
      blurb: 'Festa by day, club by night. Signature cocktails and dancing on the lakefront.' },
    { day: 'sun', start: '16:00', stage: 'sports', name: 'I Bei Bambini', tag: 'Folk dance',
      blurb: 'Young Milwaukee dancers keeping Italian folk dance alive.' },
    { day: 'sun', start: '19:00', end: '20:30', stage: 'oasis', name: 'Hopelessly Devoted', tag: 'Tribute',
      blurb: 'A tribute to Olivia Newton-John.' },
    { day: 'sun', start: '19:15', stage: 'sports', name: 'Tradizione Vivente', tag: 'Folk dance',
      blurb: 'The Italian Dance Group of Milwaukee, performing every night of Festa.' },
    { day: 'sun', start: '20:00', end: '21:00', stage: 'aurora', name: 'Cory Pesaturo', tag: 'Accordion',
      blurb: 'The man revolutionizing the accordion, closing out Festa.' },
  ],

  // Featured across all three days
  allWeekend: [
    { name: 'Tamburinari di Aspra', from: 'Aspra, Sicily',
      blurb: 'The internationally acclaimed Sicilian drum corps returns to Milwaukee with the heartbeat of traditional folklore.' },
    { name: 'The Florentine Opera', from: 'Milwaukee',
      blurb: 'Festa Features performances from Milwaukee’s own opera company, Friday through Sunday.' },
  ],

  foodCategories: [
    { key: 'pizza',  label: 'Pizza' },
    { key: 'pasta',  label: 'Pasta & Plates' },
    { key: 'street', label: 'Street Food' },
    { key: 'sweets', label: 'Dolci' },
  ],
  vendors: [
    { name: 'Papa Luigi’s',               cat: 'pizza',  note: 'Pizza, pasta & more' },
    { name: 'Pietro’s Pizza',             cat: 'pizza',  note: 'Since 1973' },
    { name: 'Scrima’s Pizza',             cat: 'pizza',  note: 'Pizza' },
    { name: 'Albanese’s Roadhouse',       cat: 'pasta',  note: 'Pasta' },
    { name: 'The Italian Experience',     cat: 'pasta',  note: 'By Trattoria RNB · Roma, Napoli, Bari' },
    { name: 'Casa Ranieri',               cat: 'pasta',  note: 'Italian specialties' },
    { name: 'Nadí Plates',                cat: 'pasta',  note: 'Plates' },
    { name: 'D’Abruzzo',                  cat: 'street', note: 'Abruzzese street food' },
    { name: 'Festa Sausage',              cat: 'street', note: 'Italian sausage' },
    { name: 'Cousins Subs',               cat: 'street', note: 'Since 1972' },
    { name: 'I ♥ Grill & Lemonade',       cat: 'street', note: 'Grill & lemonade' },
    { name: 'Tots on the Street',         cat: 'street', note: 'Hand-crafted tots' },
    { name: 'Peter Sciortino Bakery',     cat: 'sweets', note: 'Italian bakery' },
    { name: 'Festa Gelateria',            cat: 'sweets', note: 'Gelato' },
  ],

  presentingSponsor: { name: 'Annex Wealth Management', logo: 'assets/img/brand/annex-wealth-logo.svg', url: 'https://annexwealth.com/' },
  sponsorsYear: 2026,
  sponsors: [
    ['Annex Wealth Management', 'annex.png'],
    ['Capri Communities', 'capri.png'],
    ['Bartolotta', 'bartolotta-logo.png'],
    ['Stifel', 'logo-stifel.png'],
    ['MKE Airport', 'mke-airport-logo.png'],
    ['Florentine Opera', 'florentine-opera-logo.png'],
    ['Catholic Financial Life', 'cfl-logo.png'],
    ['Uptown Ford', 'uptown-ford.png'],
    ['Reina Auto', 'reina.png'],
    ['Wisconsin Herd', 'wisconsin-herd.png'],
    ['Milwaukee Milkmen', 'milkmen.png'],
    ['Interstate Parking', 'interstate-parking.png'],
    ['Peter Sciortino Bakery', 'logo-peter-sciortino-bakery.jpg'],
    ['Papa Luigi’s', 'papa-luigis.png'],
    ['Pedone Pinsa', 'pedonepinsa.png'],
    ['Safina', 'safina.png'],
    ['Greco & Sons', 'greco-sons-logo.png'],
    ['Bassano', 'bassano-logo.png'],
    ['Jo Cat’s Pub', 'jo-cats-logo.png'],
    ['C. W. Purpero, Inc.', 'cwp.png'],
    ['Gruber Law Offices', 'gruber.jpg'],
    ['Harder Funeral Home', 'harder.png'],
    ['Rose Spang', 'rose-span-logo.jpg'],
    ['Chiropractic Company', 'logo-chiropractic-company.png'],
    ['MKE Life Church', 'logo-mke-life-church.png'],
    ['PKSD', 'pksd-logo.png'],
  ],

  links: {
    volunteer: 'https://signup.com/client/invitation2/secure/1052461996050/false#/invitation',
    sponsorDeck: 'https://www.iccmilwaukee.com/s/26-FSTAITA-004-2026-Sponsorship-Material-Design-021026-1.pdf',
    sponsorEmail: 'mailto:president@iccmilwaukee.com?subject=Festa%20Italiana%20Sponsorship',
    safety: 'https://festaitaliana.com/safety/',
    bocce: 'https://www.iccmilwaukee.com/festa-bocce-tournament-2026',
    sauce: 'https://www.iccmilwaukee.com/best-sauce-contest-1',
    idol: 'https://www.iccmilwaukee.com/festa-italian-idol',
    futsal: 'https://www.iccmilwaukee.com/festa-futsal',
    photoContest: 'https://www.iccmilwaukee.com/festa-italiana-photo-contest',
    banner: 'https://www.iccmilwaukee.com/store/p/family-name-banner',
    mass: 'https://www.iccmilwaukee.com/sunday-mass',
    icc: 'https://www.iccmilwaukee.com/',
    facebook: 'https://www.facebook.com/ICCMKE',
    instagram: 'https://instagram.com/ICCMKE',
    linkedin: 'https://www.linkedin.com/company/iccmke/',
  },
};
