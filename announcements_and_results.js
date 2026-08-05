/* =========================================================================
   DATA PIRATES - ANNOUNCEMENTS, RESULTS & CONTENT DATA FILE
   =========================================================================
   - Anyone can easily edit this file to update Announcements, Results, or Photos!
   - For Photos: Place your new .jpg or .png images inside the 'images/' folder
     and update the file name in the photo paths below (e.g., 'images/my_photo.jpg').
   - For Announcements & Results: Simply add or edit entries in the lists below!
   ========================================================================= */

/* =========================================================
       EDIT YOUR CLUB'S REAL DATA BELOW.
       photo: leave "" for initials avatar, or set an image path/URL.
       ========================================================= */
    const DATA = {
      stats: [
        { label: 'Active Members', value: '50+', icon: 'users' },
        { label: 'Events Conducted', value: '4', icon: 'calendar' },
        { label: 'Sub Clubs', value: '4', icon: 'layers' },
        { label: 'Winners', value: '6', icon: 'trophy' },
      ],
      values: [
        { title: 'Learn', sub: 'Explore new skills & ideas', icon: 'compass' },
        { title: 'Collaborate', sub: 'Build together as clubs', icon: 'users' },
        { title: 'Create', sub: 'Ship ideas fearlessly', icon: 'bolt' },
        { title: 'Lead', sub: 'Take the helm of a club', icon: 'trophy' },
      ],
      leadership: [
        { name: 'M Rohith Reddy', role: 'President', year: 'Final Year', photo: 'images/president_rohith.png' },
        { name: 'Sk Fazil', role: 'Vice President', year: 'Final Year', photo: 'images/vp_fazil.png' },
        { name: 'B Pavan', role: 'Secretary', year: 'Final Year', photo: 'images/secretary_pavan.png' },
        { name: 'J Varshitha', role: 'Joint Secretary', year: 'Final Year', photo: 'images/jt_secretary_varshitha.png' },
        { name: 'Y Achuth', role: 'Treasurer', year: 'Final Year', photo: 'images/treasurer_achuth.png' },
      ],
      fleets: [
        {
          id: 'entrepreneurship',
          name: 'Entrepreneurship Club',
          focus: 'Startups, Business Innovation & Leadership',
          flag: '#2E9FFF',
          icon: 'briefcase',
          url: 'clubs/entrepreneurship-club.html',
          captain: { name: 'M Rohith Reddy & Y Achuth' },
          crew: [
            { name: 'M Rohith Reddy', role: 'Club Head (IV Year - 237Z1A6767)' },
            { name: 'Y Achuth', role: 'Club Head (IV Year - 237Z1A67C6)' },
            { name: 'SK Ayesha Banu', role: 'Co-Lead (III Year - 247Z1A67A8)' },
            { name: 'T Shiva Pavani', role: 'Co-Lead (III Year - 247Z1A67B5)' },
            { name: 'S Sarah', role: 'Co-Lead (III Year - 247Z1A67B1)' }
          ]
        },
        {
          id: 'content_creation',
          name: 'Content Creation Club',
          focus: 'Media, Design, Storytelling & Branding',
          flag: '#00D4FF',
          icon: 'pen',
          url: 'clubs/content-creation-club.html',
          captain: { name: 'N Narsimha Reddy & P Srishanth' },
          crew: [
            { name: 'N Narsimha Reddy', role: 'Club Head (IV Year - 237Z1A6780)' },
            { name: 'P Srishanth', role: 'Club Head (IV Year - 247Z5A6706)' },
            { name: 'B Raghu', role: 'Co-Lead (III Year - 247Z1A6726)' },
            { name: 'P Sreeja', role: 'Co-Lead (III Year - 247Z1A6789)' },
            { name: 'M Hari Priya', role: 'Co-Lead (III Year - 247Z1A6774)' }
          ]
        },
        {
          id: 'photography',
          name: 'Photography Club',
          focus: 'Visual Storytelling, Event Coverage & Cinematography',
          flag: '#A855F7',
          icon: 'camera',
          url: 'clubs/photography-club.html',
          captain: { name: 'K Thanvik Kumar & E Sai Teja' },
          crew: [
            { name: 'K Thanvik Kumar', role: 'Club Head (IV Year - 237Z1A67C9)' },
            { name: 'E Sai Teja', role: 'Club Head (IV Year - 237Z1A6736)' },
            { name: 'M Vamshi', role: 'Co-Lead (IV Year - 237Z1A6770)' },
            { name: 'G Tharuni', role: 'Co-Lead (IV Year - 237Z1A6747)' },
            { name: 'M Hari Priya', role: 'Co-Lead (III Year - 247Z1A6774)' }
          ]
        },
        {
          id: 'sports',
          name: 'Sports Club',
          focus: 'Athletics, Physical Fitness & Tournaments',
          flag: '#FF9F43',
          icon: 'trophy',
          url: 'clubs/sports-club.html',
          captain: { name: 'B Pavan & B Gopi' },
          crew: [
            { name: 'B Pavan', role: 'Club Head (IV Year - 237Z1A6721)' },
            { name: 'B Gopi', role: 'Club Head (IV Year - 237Z1A6718)' },
            { name: 'A Karthik', role: 'Co-Lead (IV Year - 237Z1A6709)' },
            { name: 'S Aravind Reddy', role: 'Co-Lead (IV Year - 247Z1A67A7)' }
          ]
        }
      ],
      results: [
        { title: 'vision to venture', category: 'Photo Challenge', date: '05 Aug 2026', podium: ['D.SaiVinith & k.Dinesh', 'Sindhu & Nagasree'], participants: '15 teams • 2 winners' },
        { title: 'Visual Storytelling Sprint', category: 'Photography & Reels', date: '02 Aug 2026', podium: ['K. Thanvik', 'G. Tharuni', 'E. Sai Teja'], participants: '18 submissions • 3 finalists' },
        { title: 'Innovation Pitch Week', category: 'Entrepreneurship', date: '01 Aug 2026', podium: ['Y. Achuth', 'SK Ayesha', 'P. Srishanth'], participants: '9 ideas • 3 shortlisted' }
      ],
      gallery: [
        { src: 'https://i.ibb.co/qLtp6yqV/Whats-App-Image-2026-08-03-at-11-37-53-PM.jpg', alt: 'Event glimpse 1', category: 'Events', title: 'Campus Orientation' },
        { src: 'https://i.ibb.co/DfxQT07T/Whats-App-Image-2026-08-03-at-11-33-44-PM-1.jpg', alt: 'Event glimpse 2', category: 'Workshops', title: 'AI & Data Sprint' },
        { src: 'https://i.ibb.co/VWc6nHPY/Whats-App-Image-2026-08-03-at-11-33-44-PM-2.jpg', alt: 'Event glimpse 3', category: 'Hackathons', title: 'Innovation Pitch' },
        { src: 'https://i.ibb.co/QvQqhvz0/Whats-App-Image-2026-08-03-at-11-33-44-PM.jpg', alt: 'Event glimpse 4', category: 'Meetups', title: 'Club Leaders Meet' },
        { src: 'https://i.ibb.co/XZdSrXSL/Whats-App-Image-2026-08-04-at-12-09-47-AM.jpg', alt: 'Event glimpse 5', category: 'Events', title: 'Annual Tech Meet' },
        { src: 'https://i.ibb.co/gB9nV1j/Whats-App-Image-2026-08-04-at-12-09-49-AM.jpg', alt: 'Event glimpse 6', category: 'Workshops', title: 'Python Bootcamp' },
        { src: 'https://i.ibb.co/pjZr6gjq/Whats-App-Image-2026-08-03-at-11-36-50-PM.jpg', alt: 'Event glimpse 7', category: 'Hackathons', title: 'Dataathon Winners' },
        { src: 'https://i.ibb.co/04Z43jH/Whats-App-Image-2026-08-03-at-11-33-43-PM.jpg', alt: 'Event glimpse 8', category: 'Meetups', title: 'Team Brainstorming' }
      ],
      announcements: [
        { date: '03 Aug 2026', icon: 'camera', title: '🎬 Campus in Frames', body: 'Transform campus moments into a creative storytelling reel. Submit your 30 to 60 second video by 08 Aug 2026.' },
        { date: '02 Aug 2026', icon: 'bulb', title: '💡 Vision to Venture', body: 'Present your innovative idea, inspire change, and compete for the Best Innovative Idea Award.' },
        { date: '01 Aug 2026', icon: 'camera', title: '📸 Frames That Speak', body: 'Capture five meaningful photographs that tell one complete story. Showcase your creativity through visual storytelling.' },
        { date: '30 Jul 2026', icon: 'trophy', title: '🏆 Participate & Win', body: 'Join exciting Data Pirates Club events, enhance your skills, and earn certificates of appreciation for outstanding performances.' }
      ]
    };
    /* ========================================================= */
