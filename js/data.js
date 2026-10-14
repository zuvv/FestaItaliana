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
  // [name, logo file, website]. Leave the website out for family/individual sponsors.
  sponsors: [
    ['Capri Communities', 'capri.png', 'https://www.capricommunities.com/'],
    ['Bartolotta Restaurants', 'bartolotta-logo.png', 'https://www.bartolottas.com/'],
    ['Stifel', 'logo-stifel.png', 'https://www.stifel.com/'],
    ['Milwaukee Mitchell International Airport', 'mke-airport-logo.png', 'https://www.mitchellairport.com/'],
    ['Florentine Opera', 'florentine-opera-logo.png', 'https://www.florentineopera.org/'],
    ['Catholic Financial Life', 'cfl-logo.png', 'https://www.catholicfinanciallife.org/'],
    ['Uptown Ford Lincoln', 'uptown-ford.png', 'https://www.uptownmotors.com/'],
    ['Reina International Auto', 'reina.png', 'https://www.reinaintlauto.com/'],
    ['Wisconsin Herd', 'wisconsin-herd.png', 'https://wisconsin.gleague.nba.com/'],
    ['Milwaukee Milkmen', 'milkmen.png', 'https://www.milwaukeemilkmen.com/'],
    ['Interstate Parking', 'interstate-parking.png', 'https://www.interstateparking.com/'],
    ['Peter Sciortino Bakery', 'logo-peter-sciortino-bakery.jpg', 'https://petersciortinosbakery.com/'],
    ['Papa Luigi’s', 'papa-luigis.png'],
    ['Pedone Pinsa', 'pedonepinsa.png', 'https://pedonepinsa.com/'],
    ['Safina', 'safina.png', 'https://safinamke.com/'],
    ['Greco & Sons', 'greco-sons-logo.png', 'https://grecoandsons.com/'],
    ['Bassano Famiglia', 'bassano-logo.png'],
    ['Jo-Cat’s Pub', 'jo-cats-logo.png', 'https://jocatsmke.com/'],
    ['C. W. Purpero, Inc.', 'cwp.png', 'https://www.purpero.com/'],
    ['Gruber Law Offices', 'gruber.jpg', 'https://www.gruber-law.com/'],
    ['Harder Funeral Home', 'harder.png', 'https://www.harderfuneralhome.com/'],
    ['Rose E. Purpero Spang', 'rose-span-logo.jpg'],
    ['Chiropractic Company', 'logo-chiropractic-company.png', 'https://www.chiropracticcompany.com/'],
    ['MKE Life Church', 'logo-mke-life-church.png'],
    ['PKSD Injury Law', 'pksd-logo.png', 'https://www.pksd.com/'],
  ],

  // Activity detail cards (the Famiglia section). Keys match data-activity="" in index.html.
  // ctas: kind 'primary' (default) or 'secondary'; icon: mail | phone | external | doc | pin | ticket | arrow
  // photoPos: CSS object-position for the card photo (which part of the picture to keep when it's cropped).
  // dated: details are from a specific year → the card shows a "confirm for 2027" note.  tbd: no details yet.
  activitiesYear: 2026,
  activities: {
    mass: {
      title: 'Festa Mass & Procession', when: 'Sunday · 10:30am', where: 'BMO Pavilion', photo: 'procession-800', photoPos: 'center 40%',
      tagline: 'The heart of Festa: Mass on the lakefront, followed by the traditional procession and Benediction.',
      body: [
        'Enter through the South Gate, which opens to everyone at 9:30am. Mass begins at 10:30am and is followed immediately by the procession of the saints and Benediction.',
        'Please bring three non-perishable food items for the Hunger Task Force food drive. Collection bins are at the South Gate.',
      ],
      facts: [['Gate opens', '9:30am · South Gate only'], ['Mass begins', '10:30am'], ['Bring', '3 non-perishable food items'], ['Presider (2026)', 'Fr. Domenic Roscioli']],
      ctas: [{ label: 'Directions to the park', href: 'https://maps.app.goo.gl/nHbEnpXzjm8RmBj29', icon: 'pin', kind: 'secondary' }],
      related: ['choir', 'communicants'],
      dated: true,
    },
    choir: {
      title: 'Festa Mass Choir', when: 'Rehearsals in June & July', where: 'Cathedral of St. John the Evangelist',
      tagline: 'Sing at Festa Mass. You don’t need to speak Italian; they’ll coach you on pronunciation.',
      body: [
        'The Festa Italiana Choir leads the music at Festa Mass. Singers rehearse four evenings in June and July at the Cathedral of St. John the Evangelist (812 N. Jackson St.), plus a final dress rehearsal the Thursday before Festa. You need to make three of the four rehearsals and the dress rehearsal.',
        'To join, contact choir director Joe Smaldino with your name, contact info, any choral background, and your vocal part (SATB) if you know it.',
      ],
      facts: [['2026 rehearsals', 'Jun 15, 17, 22 & Jul 7 · 6:30–8pm'], ['Dress rehearsal', 'Thu Jul 9 · 7:15–9pm'], ['Sign up by', 'June 5'], ['Parking', 'Lot at Wells & Van Buren; use the Wells St. side door']],
      ctas: [
        { label: 'Email Joe to join', href: 'mailto:jsmaldino@stjohncathedral.org?subject=Festa%20Mass%20Choir', icon: 'mail' },
        { label: 'Call 414-276-9814 x305', href: 'tel:+14142769814', icon: 'phone', kind: 'secondary' },
      ],
      contact: { name: 'Joe Smaldino', role: 'Choir Director', email: 'jsmaldino@stjohncathedral.org', phone: '414-276-9814 x305' },
      related: ['mass'],
      dated: true,
      note: 'The 2026 choir roster is full. Check back for 2027 sign-ups.',
    },
    communicants: {
      title: 'First Holy Communicants', when: 'Sunday · Festa Mass', where: 'South Gate',
      tagline: 'Children who made their First Communion this year or last are invited to walk in the Festa Mass and Procession in their Communion attire.',
      body: ['If you have a son, daughter, grandchild, niece or nephew who received First Holy Communion this year or last year, spread the word. It’s a memory the whole famiglia will keep.'],
      ctas: [
        { label: 'Email Anna Marie', href: 'mailto:Linguini11@yahoo.com?subject=First%20Holy%20Communicants%20at%20Festa', icon: 'mail' },
        { label: 'Call 414-881-4500', href: 'tel:+14148814500', icon: 'phone', kind: 'secondary' },
      ],
      contact: { name: 'Anna Marie Vicini Danei', email: 'Linguini11@yahoo.com', phone: '414-881-4500' },
      related: ['mass'],
    },
    bocce: {
      title: 'Festa Bocce Tournament', when: 'Sunday · 1pm', where: 'Henry Maier Festival Park', photo: 'bocce-900', photoPos: 'center 30%',
      tagline: 'Teams of four, single elimination with a consolation round, and cash on the line.',
      body: ['Every team plays at least two games. First place takes home a trophy and a cash prize; second and third place win cash. Registration is $100 per team of four, and admission tickets are mailed to team captains.'],
      facts: [['Team check-in', '12:30pm'], ['First roll', '1:00pm'], ['Format', 'Single elimination + consolation round'], ['Entry', '$100 per team of 4'], ['Prizes', 'Trophy + cash for 1st; cash for 2nd & 3rd'], ['Tickets', 'Mailed to team captains']],
      ctas: [
        { label: 'Register your team', href: 'https://italiancommunitycenter.wildapricot.org/event-6679876', icon: 'external' },
        { label: 'Questions? Call the ICC', href: 'tel:+14142232180', icon: 'phone', kind: 'secondary' },
      ],
      dated: true,
    },
    futsal: {
      title: 'Futsal Tournament', when: 'Sat (adults) · Sun (youth)', where: 'Henry Maier Festival Park',
      tagline: 'Fast five-a-side soccer, Italian style. Adults play Saturday, youth play Sunday.',
      body: ['Adult games kick off Saturday at 11am; youth games Sunday at noon. Kids play free. Adults need a Festa admission ticket. Call Sal Carini to register your squad.'],
      facts: [['Adults', 'Saturday · 11am'], ['Youth', 'Sunday · noon'], ['Cost', 'Kids free · adults need a Festa ticket']],
      ctas: [
        { label: 'Call Sal to register', href: 'tel:+14147934900', icon: 'phone' },
        { label: 'Get Festa tickets', href: 'https://festastore.sfgrounds.com/2026-general-admission-ticket', icon: 'ticket', kind: 'secondary' },
      ],
      contact: { name: 'Sal Carini', phone: '414-793-4900' },
      dated: true,
    },
    idol: {
      title: 'Italian Idol', when: 'Saturday · 8–10pm', where: 'Aurora Pavilion Stage', photo: 'idol-900', photoPos: 'center 8%',
      tagline: 'Milwaukee’s longest-running amateur vocal competition, which celebrated its 19th year in 2026.',
      body: [
        'Italian Idol is open to singers 14 and older. A panel of judges scores each performance on multiple criteria, and $1,000 in cash prizes is awarded, including the crowning of the Italian Idol. This is not karaoke. All genres are welcome, and you don’t need to be Italian.',
        'To audition, email a video of yourself singing, a brief bio and your contact information to director Sandy Winard.',
      ],
      facts: [['Ages', '14 and up'], ['Prizes', '$1,000 in cash'], ['Judging', 'Panel of judges, multiple criteria'], ['Italian heritage', 'Not required']],
      ctas: [{ label: 'Email your audition video', href: 'mailto:sdubya002@gmail.com?subject=Italian%20Idol%20audition', icon: 'mail' }],
      contact: { name: 'Sandy Winard', role: 'Director', email: 'sdubya002@gmail.com' },
      dated: true,
    },
    sauce: {
      title: 'Milwaukee’s Best Sauce', when: 'Saturday · 11am–1pm', where: 'Aurora Pavilion', photo: 'sauce-900', photoPos: 'center 8%',
      tagline: 'Think your nonna’s red sauce is the best in town? Prove it. Presented by Capri Communities.',
      body: [
        'Two categories: meat and meatless (no meatballs or large pieces of meat). Enter online, then bring a quart of sauce in a slow cooker to the preliminary judging at St. Rita Square. The top three in each category compete at Festa, where a Judges’ Choice and a People’s Choice champion are crowned in each category.',
        'Finalists bring three gallons of sauce. A heated Nesco is provided for transport, and a $40 gift card helps with ingredients.',
      ],
      facts: [['Enter by', 'June 22'], ['Prelims', 'June 27 · St. Rita Square'], ['Finals', 'July 11 · Aurora Pavilion'], ['Judges’ Choice', '$200 · $100 · $50 per category'], ['People’s Choice', '$100 per category']],
      ctas: [
        { label: 'Enter your sauce', href: 'https://mkebestsauce.com', icon: 'external' },
        { label: 'Email April', href: 'mailto:azwaschka@capricommunities.com?subject=Milwaukee%27s%20Best%20Sauce', icon: 'mail', kind: 'secondary' },
        { label: 'Call 414-265-6474', href: 'tel:+14142656474', icon: 'phone', kind: 'secondary' },
      ],
      contact: { name: 'April', role: 'Capri Communities', email: 'azwaschka@capricommunities.com', phone: '414-265-6474' },
      dated: true,
    },
    pizza: {
      title: 'Kids Pizza-Making Contest', when: 'Festa weekend',
      tagline: 'Little chefs, big toppings.',
      body: ['A pizza-making contest just for kids, part of the fun for the whole famiglia. Ages, times and sign-up details for 2027 will be posted here once they’re confirmed.'],
      ctas: [{ label: 'Questions? Call the ICC', href: 'tel:+14142232180', icon: 'phone', kind: 'secondary' }],
      tbd: true,
    },
    fireworks: {
      title: 'Fireworks over the lake', when: 'After dark', where: 'Lakefront',
      body: ['Festa lights up the lakefront with fireworks after dark. Showtimes will be announced with the 2027 schedule.'],
      ctas: [{ label: 'See the lineup', href: '#lineup', icon: 'arrow', kind: 'secondary' }],
      tbd: true,
    },
    cucina: {
      title: 'La Cucina Showcase', when: 'Festa weekend', photo: 'cucina-900', photoPos: 'center 45%',
      tagline: 'Italian home cooking, live on stage.',
      body: ['Watch chefs and home cooks share recipes and techniques on the La Cucina stage, with the finished dish up on the big screen. The 2027 demo schedule will be posted here once it’s confirmed.'],
      ctas: [{ label: 'Questions? Call the ICC', href: 'tel:+14142232180', icon: 'phone', kind: 'secondary' }],
      tbd: true,
    },
    heritage: {
      title: 'Italian Heritage Exhibit', when: 'All weekend', photo: 'heritage-900', photoPos: 'center 40%',
      tagline: 'A century of Italian Milwaukee in photographs, keepsakes and stories.',
      body: ['Browse historic photos of Milwaukee’s Italian families, neighborhoods and festivals, and find your family’s hometown on the “Is Your Ancestry Italian?” map of Italy and Sicily. The 2026 exhibit celebrated St. Francis of Assisi.'],
      related: ['banner'],
    },
    photo: {
      title: 'Festa Italiana Photo Contest', when: 'Enter by June 15', where: 'Finalists displayed at Festa',
      tagline: 'Cattura il Cuore d’Italia! Capture the heart of Italy and see your photo on display at Festa.',
      body: [
        'Open to amateur photographers 18 and older. Photos must be taken in Italy, in one of four categories: Culture & Heritage, Culinary Arts, Atmosphere, and People. Entries are $5 per photo, submitted as high-resolution JPGs. No AI-generated images.',
        'Finalists’ photos are displayed at Festa, and a People’s Choice winner is picked alongside the judges’ top three.',
      ],
      facts: [['Who', 'Amateur photographers, 18+'], ['Entry fee', '$5 per photo'], ['2026 deadline', 'June 15 · 5pm'], ['1st place', '$100 + 2 Festa tickets'], ['2nd place', '$50 + 2 Festa tickets'], ['3rd place', 'Villa Terrace membership + MOSH tickets'], ['People’s Choice', 'Wisconsin Herd + Festa tickets']],
      ctas: [
        { label: 'Enter online', href: 'https://docs.google.com/forms/d/e/1FAIpQLSciOWFwA63hFQ397-KuVK5L0koiUZ33vSbUaC3jjhG9m5q-3g/viewform', icon: 'external' },
        { label: 'Rules & guidelines (PDF)', href: 'https://www.iccmilwaukee.com/s/Festa-Italiana-Photo-Contest-Rules-zj46.pdf', icon: 'doc', kind: 'secondary' },
        { label: 'Model release form (PDF)', href: 'https://www.iccmilwaukee.com/s/FESTA-ITALIANA-PHOTO-CONTEST-RELEASE-FORM.pdf', icon: 'doc', kind: 'secondary' },
      ],
      dated: true,
    },
    banner: {
      title: 'Family Name Banners', when: 'Order ahead', where: 'Italian Wine Garden', photo: 'banner-900', photoPos: 'center 40%',
      tagline: 'Fly your family name over the Giardino Italiano.',
      body: ['Order a personalized banner with your family name and the city, town or region of your roots. It hangs in the Italian Wine Garden all weekend, and when Festa ends, it’s yours to take home.'],
      facts: [['Price', '$150'], ['Colors', 'Gold, red or green'], ['Displayed', 'Italian Wine Garden, all weekend'], ['After Festa', 'Yours to keep']],
      ctas: [{ label: 'Order a banner · $150', href: 'https://www.iccmilwaukee.com/store/p/family-name-banner', icon: 'external' }],
      related: ['heritage'],
    },
  },

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
