/* =========================================================================
   DATA PIRATES — INDIVIDUAL CLUB PAGES — DATA FILE
   =========================================================================
   HOW TO UPDATE THIS FILE (no coding knowledge needed):

   1. UPCOMING EVENTS → add a new object at the TOP of that club's
      "upcomingEvents" array. It shows up on the site instantly.
      When the event is over, cut it from "upcomingEvents" and paste it
      into "pastEvents" (add participants/winners/gallery once you have them).

   2. LEADERSHIP → add/remove people inside "heads", "coLeads" or "members".
      photo: leave "" to show an auto-generated initials avatar,
      or set an image path like "../images/yourfile.jpg"
      (put the actual file inside the /images folder first).

   3. PAST EVENT PHOTOS → put files in /images (or use any direct image URL)
      and list them under that event's "gallery" array.

   4. PARTICIPANTS LIST → edit the "participants" array of any event.
      This list is what the "Download participants list" button exports.

   5. REGISTRATION → set "registerLink" on an upcoming event to a Google
      Form URL to send people straight there. Leave it "" and the
      Register button will open a mailto to the club email.

   6. ACCENT COLORS → each club has an "accent" array [primary, secondary]
      that drives gradients across the hero, tabs, buttons, and card borders.
   ========================================================================= */

const CLUB_DATA = {

  /* ============================= ENTREPRENEURSHIP ============================= */
  entrepreneurship: {
    id: 'entrepreneurship',
    name: 'Entrepreneurship Club',
    tagline: 'Startups, Business Innovation & Leadership',
    emoji: '🚀',
    accent: ['#6A4FE0', '#2472DB'],
    icon: 'briefcase',
    heroImage: '../images/clubs/entrepreneurship-hero-hq.jpg',
    gallery: ['../images/clubs/entrepreneurship-gallery-1.jpg','../images/clubs/entrepreneurship-gallery-2.jpg','../images/clubs/entrepreneurship-gallery-3.jpg'],
    vision: 'To cultivate a campus-wide culture of enterprise, where every student sees themselves as a builder — capable of turning an idea into a venture that creates real value.',
    mission: 'We run pitch challenges, founder talks, and business-model workshops that give students hands-on practice with ideation, validation, and storytelling — the core skills behind every startup.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA=='
    },
    heads: [
      { name: 'M Rohith Reddy', role: 'Club Head', year: 'IV Year', photo: '../images/president_rohith.png' },
      { name: 'Y Achuth', role: 'Club Head', year: 'IV Year', photo: '../images/treasurer_achuth.png' },
    ],
    coLeads: [
      { name: 'SK Ayesha Banu', role: 'Co-Lead', year: 'III Year', photo: '' },
      { name: 'T Shiva Pavani', role: 'Co-Lead', year: 'III Year', photo: '' },
      { name: 'S Sarah', role: 'Co-Lead', year: 'III Year', photo: '' },
    ],
    members: [],
    pastEvents: [
      {
        id: 'vision-to-venture',
        title: 'Vision to Venture',
        date: '2026-08-05',
        category: 'Pitch Challenge',
        venue: 'Seminar Hall, NNRG',
        description: 'Teams presented an original business idea in a 5-minute pitch, judged on innovation, feasibility, and clarity of vision.',
        participants: [
          { name: 'D. Sai Vinith', team: 'Team GreenCart', result: '🥇 Winner' },
          { name: 'K. Dinesh', team: 'Team GreenCart', result: '🥇 Winner' },
          { name: 'Sindhu', team: 'Team FinWise', result: '🥈 Runner-up' },
          { name: 'Nagasree', team: 'Team FinWise', result: '🥈 Runner-up' },
          { name: 'SK Ayesha Banu', team: 'Team Edulane', result: 'Participant' },
          { name: 'T Shiva Pavani', team: 'Team Edulane', result: 'Participant' }
        ],
        winners: ['D.SaiVinith & K.Dinesh', 'Sindhu & Nagasree'],
        gallery: [
          'https://i.ibb.co/qLtp6yqV/Whats-App-Image-2026-08-03-at-11-37-53-PM.jpg',
          'https://i.ibb.co/DfxQT07T/Whats-App-Image-2026-08-03-at-11-33-44-PM-1.jpg'
        ]
      },
      {
        id: 'innovation-pitch-week',
        title: 'Innovation Pitch Week',
        date: '2026-08-01',
        category: 'Entrepreneurship',
        venue: 'DS Lab, NNRG',
        description: 'A week-long ideation sprint culminating in a shortlist of the most promising student ventures.',
        participants: [
          { name: 'Y. Achuth', team: 'Solo', result: '🥇 Winner' },
          { name: 'SK Ayesha', team: 'Solo', result: '🥈 Runner-up' },
          { name: 'P. Srishanth', team: 'Solo', result: '🥉 3rd Place' }
        ],
        winners: ['Y. Achuth', 'SK Ayesha', 'P. Srishanth'],
        gallery: [
          'https://i.ibb.co/VWc6nHPY/Whats-App-Image-2026-08-03-at-11-33-44-PM-2.jpg'
        ]
      }
    ],
    upcomingEvents: [
      {
        id: 'startup-simulator',
        title: 'Startup Simulator 2.0',
        date: '2026-08-20',
        venue: 'Seminar Hall, NNRG',
        description: 'A 3-hour simulation where teams run a fictional startup through funding rounds, market shocks, and a final investor pitch.',
        registerLink: ''
      }
    ]
  },

  /* ============================= CONTENT CREATION ============================= */
  content_creation: {
    id: 'content_creation',
    name: 'Content Creation Club',
    tagline: 'Media, Design, Storytelling & Branding',
    emoji: '🎬',
    accent: ['#6A4FE0', '#2472DB'],
    icon: 'pen',
    heroImage: '../images/clubs/content_creation-hero-hq.jpg',
    gallery: ['../images/clubs/content_creation-gallery-1.jpg','../images/clubs/content_creation-gallery-2.jpg','../images/clubs/content_creation-gallery-3.jpg'],
    vision: 'To make Data Pirates the loudest, most creative student voice on campus — telling our story through video, design, and writing that people actually want to watch, read, and share.',
    mission: 'We train members in reels, graphic design, copywriting, and event coverage, and give every campaign a real audience by running it on the club\'s official channels.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA=='
    },
    heads: [
      { name: 'N Narsimha Reddy', role: 'Club Head', year: 'IV Year', photo: '../images/narsimha.png' },
      { name: 'P Srishanth', role: 'Club Head', year: 'IV Year', photo: '../images/srishanth.png' },
    ],
    coLeads: [
      { name: 'B Raghu', role: 'Co-Lead', year: 'III Year', photo: '' },
      { name: 'P Sreeja', role: 'Co-Lead', year: 'III Year', photo: '' },
      { name: 'M Hari Priya', role: 'Co-Lead', year: 'III Year', photo: '' },
    ],
    members: [],
    pastEvents: [
      {
        id: 'campus-in-frames',
        title: 'Campus in Frames',
        date: '2026-08-08',
        category: 'Reel / Video Challenge',
        venue: 'NNRG Campus',
        description: 'A 30–60 second storytelling reel capturing everyday campus moments, judged on narrative, edit quality, and originality.',
        participants: [
          { name: 'B. Raghu', team: 'Solo', result: '🥇 Winner' },
          { name: 'P. Sreeja', team: 'Solo', result: '🥈 Runner-up' },
          { name: 'M. Hari Priya', team: 'Solo', result: 'Participant' }
        ],
        winners: ['B. Raghu', 'P. Sreeja'],
        gallery: [
          'https://i.ibb.co/QvQqhvz0/Whats-App-Image-2026-08-03-at-11-33-44-PM.jpg',
          'https://i.ibb.co/XZdSrXSL/Whats-App-Image-2026-08-04-at-12-09-47-AM.jpg'
        ]
      }
    ],
    upcomingEvents: [
      {
        id: 'design-sprint',
        title: 'Poster Design Sprint',
        date: '2026-08-22',
        venue: 'DS Lab, NNRG',
        description: 'A themed 2-hour poster design challenge — bring a laptop or tablet, theme revealed on the day.',
        registerLink: ''
      }
    ]
  },

  /* ============================= PHOTOGRAPHY ============================= */
  photography: {
    id: 'photography',
    name: 'Photography Club',
    tagline: 'Visual Storytelling, Event Coverage & Cinematography',
    emoji: '📷',
    accent: ['#6A4FE0', '#2472DB'],
    icon: 'camera',
    heroImage: '../images/clubs/photography-hero-hq.jpg',
    gallery: ['../images/clubs/photography-gallery-1.jpg','../images/clubs/photography-gallery-2.jpg','../images/clubs/photography-gallery-3.jpg'],
    vision: 'To see campus life through a sharper lens — building a team that can capture any moment, from a candid hallway laugh to a full college fest, with craft and consistency.',
    mission: 'We run photo walks, composition workshops, and official event-coverage assignments so members build a real portfolio while documenting Data Pirates history.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA=='
    },
    heads: [
      { name: 'K Thanvik Kumar', role: 'Club Head', year: 'IV Year', photo: '../images/tanvik.png' },
      { name: 'E Sai Teja', role: 'Club Head', year: 'IV Year', photo: '../images/sai_teja.png' },
    ],
    coLeads: [
      { name: 'M Vamshi', role: 'Co-Lead', year: 'IV Year', photo: '' },
      { name: 'G Tharuni', role: 'Co-Lead', year: 'IV Year', photo: '' },
      { name: 'M Hari Priya', role: 'Co-Lead', year: 'III Year', photo: '' },
    ],
    members: [],
    pastEvents: [],
    upcomingEvents: [
      {
        id: 'golden-hour-walk',
        title: 'Golden Hour Photo Walk',
        date: '2026-08-18',
        venue: 'NNRG Campus',
        description: 'An evening campus photo walk focused on natural light and composition — open to all skill levels.',
        registerLink: ''
      }
    ]
  },

  /* ============================= SPORTS ============================= */
  sports: {
    id: 'sports',
    name: 'Sports Club',
    tagline: 'Athletics, Physical Fitness & Tournaments',
    emoji: '🏆',
    accent: ['#6A4FE0', '#2472DB'],
    icon: 'trophy',
    heroImage: '../images/clubs/sports-hero-hq.jpg',
    gallery: ['../images/clubs/sports-gallery-1.jpg','../images/clubs/sports-gallery-2.jpg','../images/clubs/sports-gallery-3.jpg'],
    vision: 'To build a fitter, more competitive Data Pirates — where every member has a team, a tournament, and a reason to show up and play.',
    mission: 'We organise inter-club and inter-college tournaments across cricket, badminton, and athletics, and run regular fitness sessions open to every member.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA=='
    },
    heads: [
      { name: 'B Pavan', role: 'Club Head', year: 'IV Year', photo: '../images/secretary_pavan.png' },
      { name: 'B Gopi', role: 'Club Head', year: 'IV Year', photo: '../images/gopi.png' },
    ],
    coLeads: [
      { name: 'A Karthik', role: 'Co-Lead', year: 'IV Year', photo: '' },
      { name: 'S Aravind Reddy', role: 'Co-Lead', year: 'IV Year', photo: '' },
    ],
    members: [],
    pastEvents: [],
    upcomingEvents: [
      {
        id: 'badminton-open',
        title: 'Badminton Open',
        date: '2026-08-25',
        venue: 'NNRG Sports Ground',
        description: 'Singles knockout badminton tournament, open to all years. Rackets provided if you don\'t have one.',
        registerLink: ''
      }
    ]
  },

  /* ============================= TECHNOVA ============================= */
  technova: {
    id: 'technova',
    name: 'Technova Club',
    tagline: 'Innovation, Emerging Technology & Real-World Solutions',
    emoji: '💡',
    accent: ['#6A4FE0', '#2472DB'],
    icon: 'bolt',
    heroImage: '../images/clubs/technova-hero-light-clean.jpg',
    gallery: [],
    vision: 'To be a catalyst for technological innovation and creativity, empowering students to build solutions that shape the future.',
    mission: 'To provide hands-on learning, collaborative opportunities, and a platform to transform ideas into real-world technological impact.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA=='
    },
    heads: [
      { name: 'Sk Fazil', role: 'Club Head', year: 'IV Year', photo: '../images/technova_fazil.png' },
      { name: 'V. Karthikeya', role: 'Club Head', year: 'IV Year', photo: '../images/technova_karthikeya.png' },
    ],
    coLeads: [
      { name: 'M. Maniroop', role: 'Co-Lead', year: 'IV Year', photo: '' },
      { name: 'V. Varun', role: 'Co-Lead', year: 'IV Year', photo: '' },
      { name: 'Sangameshwar', role: 'Co-Lead', year: 'IV Year', photo: '' },
    ],
    members: [],
    pastEvents: [],
    upcomingEvents: []
  }

};
