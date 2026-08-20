/* =========================================================================
   DATA PIRATES — INDIVIDUAL CLUB PAGES — DATA FILE
   =========================================================================
   HOW TO UPDATE THIS FILE (no coding knowledge needed):

   1. UPCOMING EVENTS → add a new object at the TOP of that club's
      "upcomingEvents" array. It shows up on the site instantly.
      When the event is over, cut it from "upcomingEvents" and paste it
      into "pastEvents" (add participants/winners/gallery once you have them).

   2. MEMBERS → add/remove people inside "heads" or "members".
      photo: leave "" to show an auto-generated initials avatar,
      or set an image path like "../images/yourfile.jpg"
      (put the actual file inside the /images folder first).

   3. PAST EVENT PHOTOS → put files in /images (or use any direct image URL)
      and list them under that event's "gallery" array.

   4. PARTICIPANTS LIST → edit the "participants" array of any event.
      This list is what the "Download participants list" button exports.

   5. REGISTRATION → set "registerLink" on an upcoming event to a Google
      Form URL to send people straight there. Leave it "" and the on-page
      Registration Desk form will be used instead (opens a pre-filled email
      to the club).
   ========================================================================= */

const CLUB_DATA = {

  /* ============================= ENTREPRENEURSHIP ============================= */
  entrepreneurship: {
    id: 'entrepreneurship',
    name: 'Entrepreneurship Club',
    tagline: 'Startups, Business Innovation & Leadership',
    flag: '#2E9FFF',
    icon: 'briefcase',
    heroImage: '../images/club-entrepreneurship-hero.png',
    vision: 'To cultivate a campus-wide culture of enterprise, where every student sees themselves as a builder — capable of turning an idea into a venture that creates real value.',
    mission: 'We run pitch challenges, founder talks, and business-model workshops that give students hands-on practice with ideation, validation, and storytelling — the core skills behind every startup.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA==',
      phone: '+91 90000 00000'
    },
    heads: [
      { name: 'M Rohith Reddy', role: 'Club Head', roll: '237Z1A6767', year: 'IV Year', photo: '../images/president_rohith.png' },
      { name: 'Y Achuth', role: 'Club Head', roll: '237Z1A67C6', year: 'IV Year', photo: '../images/treasurer_achuth.png' }
    ],
    members: [
      { name: 'SK Ayesha Banu', role: 'Co-Lead', roll: '247Z1A67A8', year: 'III Year' },
      { name: 'T Shiva Pavani', role: 'Co-Lead', roll: '247Z1A67B5', year: 'III Year' },
      { name: 'S Sarah', role: 'Co-Lead', roll: '247Z1A67B1', year: 'III Year' },
      { name: 'K Dinesh', role: 'Member', roll: '247Z1A6742', year: 'III Year' },
      { name: 'D Sai Vinith', role: 'Member', roll: '247Z1A6733', year: 'III Year' },
      { name: 'Sindhu', role: 'Member', roll: '247Z1A67B8', year: 'III Year' },
      { name: 'Nagasree', role: 'Member', roll: '247Z1A67A2', year: 'III Year' }
    ],
    pastEvents: [
      {
        id: 'vision-to-venture',
        title: 'Vision to Venture',
        date: '2026-08-05',
        category: 'Pitch Challenge',
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
    flag: '#00D4FF',
    icon: 'pen',
    heroImage: '../images/club-content-creation-hero.png',
    vision: 'To make Data Pirates the loudest, most creative student voice on campus — telling our story through video, design, and writing that people actually want to watch, read, and share.',
    mission: 'We train members in reels, graphic design, copywriting, and event coverage, and give every campaign a real audience by running it on the club\'s official channels.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA==',
      phone: '+91 90000 00000'
    },
    heads: [
      { name: 'N Narsimha Reddy', role: 'Club Head', roll: '237Z1A6780', year: 'IV Year', photo: '' },
      { name: 'P Srishanth', role: 'Club Head', roll: '247Z5A6706', year: 'IV Year', photo: '' }
    ],
    members: [
      { name: 'B Raghu', role: 'Co-Lead', roll: '247Z1A6726', year: 'III Year' },
      { name: 'P Sreeja', role: 'Co-Lead', roll: '247Z1A6789', year: 'III Year' },
      { name: 'M Hari Priya', role: 'Co-Lead', roll: '247Z1A6774', year: 'III Year' },
      { name: 'K Thanvik Kumar', role: 'Member', roll: '237Z1A67C9', year: 'IV Year' },
      { name: 'G Tharuni', role: 'Member', roll: '237Z1A6747', year: 'IV Year' }
    ],
    pastEvents: [
      {
        id: 'campus-in-frames',
        title: 'Campus in Frames',
        date: '2026-08-08',
        category: 'Reel / Video Challenge',
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
    flag: '#A855F7',
    icon: 'camera',
    heroImage: '../images/club-photography-hero.png',
    vision: 'To see campus life through a sharper lens — building a team that can capture any moment, from a candid hallway laugh to a full college fest, with craft and consistency.',
    mission: 'We run photo walks, composition workshops, and official event-coverage assignments so members build a real portfolio while documenting Data Pirates history.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA==',
      phone: '+91 90000 00000'
    },
    heads: [
      { name: 'K Thanvik Kumar', role: 'Club Head', roll: '237Z1A67C9', year: 'IV Year', photo: '' },
      { name: 'E Sai Teja', role: 'Club Head', roll: '237Z1A6736', year: 'IV Year', photo: '' }
    ],
    members: [
      { name: 'M Vamshi', role: 'Co-Lead', roll: '237Z1A6770', year: 'IV Year' },
      { name: 'G Tharuni', role: 'Co-Lead', roll: '237Z1A6747', year: 'IV Year' },
      { name: 'M Hari Priya', role: 'Co-Lead', roll: '247Z1A6774', year: 'III Year' }
    ],
    pastEvents: [
      {
        id: 'visual-storytelling-sprint',
        title: 'Visual Storytelling Sprint',
        date: '2026-08-02',
        category: 'Photography & Reels',
        description: 'Members submitted a photo series telling one complete story in five frames or fewer.',
        participants: [
          { name: 'K. Thanvik', team: 'Solo', result: '🥇 Winner' },
          { name: 'G. Tharuni', team: 'Solo', result: '🥈 Runner-up' },
          { name: 'E. Sai Teja', team: 'Solo', result: '🥉 3rd Place' }
        ],
        winners: ['K. Thanvik', 'G. Tharuni', 'E. Sai Teja'],
        gallery: [
          'https://i.ibb.co/gB9nV1j/Whats-App-Image-2026-08-04-at-12-09-49-AM.jpg',
          'https://i.ibb.co/pjZr6gjq/Whats-App-Image-2026-08-03-at-11-36-50-PM.jpg'
        ]
      },
      {
        id: 'frames-that-speak',
        title: 'Frames That Speak',
        date: '2026-08-01',
        category: 'Photo Challenge',
        description: 'Capture five meaningful photographs that tell one complete story, judged on creativity and visual storytelling.',
        participants: [
          { name: 'M. Vamshi', team: 'Solo', result: 'Participant' },
          { name: 'M. Hari Priya', team: 'Solo', result: 'Participant' }
        ],
        winners: [],
        gallery: [
          'https://i.ibb.co/04Z43jH/Whats-App-Image-2026-08-03-at-11-33-43-PM.jpg'
        ]
      }
    ],
    upcomingEvents: [
      {
        id: 'golden-hour-walk',
        title: 'Golden Hour Photo Walk',
        date: '2026-08-18',
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
    flag: '#FF9F43',
    icon: 'trophy',
    heroImage: '../images/club-sports-hero.png',
    vision: 'To build a fitter, more competitive Data Pirates — where every member has a team, a tournament, and a reason to show up and play.',
    mission: 'We organise inter-club and inter-college tournaments across cricket, badminton, and athletics, and run regular fitness sessions open to every member.',
    contact: {
      email: 'datapirates.nnrg@gmail.com',
      instagram: 'https://www.instagram.com/datapirates_nnrg?igsh=MTB2MWIzNXd2eTIxOA==',
      phone: '+91 90000 00000'
    },
    heads: [
      { name: 'B Pavan', role: 'Club Head', roll: '237Z1A6721', year: 'IV Year', photo: '../images/secretary_pavan.png' },
      { name: 'B Gopi', role: 'Club Head', roll: '237Z1A6718', year: 'IV Year', photo: '' }
    ],
    members: [
      { name: 'A Karthik', role: 'Co-Lead', roll: '237Z1A6709', year: 'IV Year' },
      { name: 'S Aravind Reddy', role: 'Co-Lead', roll: '247Z1A67A7', year: 'IV Year' }
    ],
    pastEvents: [
      {
        id: 'inter-club-cricket',
        title: 'Inter-Club Cricket Cup',
        date: '2026-07-28',
        category: 'Tournament',
        description: 'A knockout-format cricket tournament between the four Data Pirates sub-clubs.',
        participants: [
          { name: 'A. Karthik', team: 'Team Falcons', result: '🥇 Champions' },
          { name: 'S. Aravind Reddy', team: 'Team Falcons', result: '🥇 Champions' },
          { name: 'B. Gopi', team: 'Team Titans', result: '🥈 Runners-up' }
        ],
        winners: ['A. Karthik', 'S. Aravind Reddy'],
        gallery: []
      }
    ],
    upcomingEvents: [
      {
        id: 'badminton-open',
        title: 'Badminton Open',
        date: '2026-08-25',
        description: 'Singles knockout badminton tournament, open to all years. Rackets provided if you don\'t have one.',
        registerLink: ''
      }
    ]
  }

};
