/* =========================================================================
   DATA PIRATES — CLUB PAGE ENGINE (PREMIUM REDESIGN)
   One script powers all 4 club pages. Each HTML file sets
   <body data-club="entrepreneurship"> and everything renders from CLUB_DATA.
   ========================================================================= */

/* ─── SVG ICONS ─── */
const ICONS = {
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M17 5h3a2 2 0 0 1 0 4h-1M7 5H4a2 2 0 0 0 0 4h1"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  mapPin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
};

function icon(name, cls) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls || ''}">${ICONS[name] || ICONS.image}</svg>`;
}

function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function fmtDate(d) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

function fmtShort(d) {
  const dt = new Date(d + 'T00:00:00');
  return {
    day: dt.toLocaleDateString('en-US', { day: '2-digit' }),
    mon: dt.toLocaleDateString('en-US', { month: 'short' })
  };
}

/* ─── BOOT ─── */
const CLUB_ID = document.body.dataset.club;
const CLUB = CLUB_DATA[CLUB_ID];
const ALL_CLUBS = Object.values(CLUB_DATA);
const CLUB_ORDER = ['entrepreneurship', 'content_creation', 'photography', 'sports', 'technova'];

const PAGE_MAP = {
  entrepreneurship: 'entrepreneurship-club.html',
  content_creation: 'content-creation-club.html',
  photography: 'photography-club.html',
  sports: 'sports-club.html',
  technova: 'technova-club.html'
};

const LANDING_GALLERY = [
  'https://i.ibb.co/qLtp6yqV/Whats-App-Image-2026-08-03-at-11-37-53-PM.jpg',
  'https://i.ibb.co/DfxQT07T/Whats-App-Image-2026-08-03-at-11-33-44-PM-1.jpg',
  'https://i.ibb.co/VWc6nHPY/Whats-App-Image-2026-08-03-at-11-33-44-PM-2.jpg',
  'https://i.ibb.co/QvQqhvz0/Whats-App-Image-2026-08-03-at-11-33-44-PM.jpg',
  'https://i.ibb.co/XZdSrXSL/Whats-App-Image-2026-08-04-at-12-09-47-AM.jpg',
  'https://i.ibb.co/gB9nV1j/Whats-App-Image-2026-08-04-at-12-09-49-AM.jpg'
];

if (!CLUB) {
  document.body.innerHTML = '<p style="padding:80px;text-align:center;">Club not found.</p>';
} else {
  // Keep every club on the same Data Pirates landing-page palette.
  document.documentElement.style.setProperty('--accent-1', '#6A4FE0');
  document.documentElement.style.setProperty('--accent-2', '#2472DB');
  document.documentElement.style.setProperty('--flag', '#6A4FE0');

  /* ─── STICKY HEADER COMPACT SCROLL ─── */
  const siteHeader = document.querySelector('header');
  if (siteHeader) {
    const updateHeaderScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();
  }

  /* ─── MOBILE NAV ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ─── CLUB NAVIGATION BAR ─── */
  const clubNav = document.getElementById('clubNav');
  if (clubNav) {
    clubNav.innerHTML = `
      <div class="club-nav-pills" aria-label="Data Pirates clubs">
        ${CLUB_ORDER.map(cid => {
          const c = CLUB_DATA[cid];
          const isActive = cid === CLUB_ID;
          return `<a href="${PAGE_MAP[cid]}" class="club-nav-pill${isActive ? ' active' : ''}">${c.emoji} ${c.name.replace(' Club', '')}</a>`;
        }).join('')}
      </div>
    `;
  }

  /* ─── HERO ─── */
  document.title = CLUB.name + ' — Data Pirates NNRG';
  const heroIcon = document.getElementById('clubHeroIcon');
  if (heroIcon) heroIcon.innerHTML = icon(CLUB.icon);
  const heroImage = document.getElementById('clubHeroImage');
  if (heroImage && CLUB.heroImage) { heroImage.src = CLUB.heroImage; heroImage.alt = CLUB.name + ' hero'; }
  const heroEmoji = document.getElementById('heroEmoji');
  if (heroEmoji) heroEmoji.textContent = CLUB.emoji + ' ' + CLUB.name.replace(' Club', '').toUpperCase();
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setText('clubHeroName', CLUB.name);
  setText('clubHeroTagline', CLUB.tagline);

  /* ─── STATS ─── */
  const totalMembers = (CLUB.heads || []).length + (CLUB.coLeads || []).length + (CLUB.members || []).length;
  const totalPastEvents = (CLUB.pastEvents || []).length;
  const totalUpcoming = (CLUB.upcomingEvents || []).length;
  const totalWinners = (CLUB.pastEvents || []).reduce((sum, e) => sum + (e.winners || []).length, 0);
  const statStrip = document.getElementById('clubStatStrip');
  if (statStrip) {
    statStrip.innerHTML = [
      { icon: 'users', value: totalMembers, label: 'Members' },
      { icon: 'calendar', value: totalPastEvents, label: 'Events' },
      { icon: 'clock', value: totalUpcoming, label: 'Upcoming' },
      { icon: 'trophy', value: totalWinners, label: 'Winners' },
    ].map(s => `<div class="stat-box">${icon(s.icon)}<b>${s.value}</b><span>${s.label}</span></div>`).join('');
  }

  /* ─── VISION / MISSION ─── */
  setText('visionText', CLUB.vision);
  setText('missionText', CLUB.mission);
  document.querySelectorAll('.vm-icon').forEach((el, i) => { el.innerHTML = icon(i === 0 ? 'eye' : 'target'); });

  /* ─── LEADERSHIP ─── */
  function memberCard(m, cardClass) {
    const isHead = cardClass === 'head-card';
    const avatarHTML = m.photo
      ? `<div class="member-photo"><img src="${m.photo}" alt="${m.name}" loading="lazy"></div>`
      : `<div class="member-photo member-photo-fallback">${initials(m.name)}</div>`;

    if (isHead) {
      return `
      <article class="member-card head-card">
        <div class="member-card-top">
          <div class="name">${m.name}</div>
          <div class="role-label">${m.role}</div>
        </div>
        ${avatarHTML}
        <div class="year-tag">${m.year}</div>
      </article>`;
    }

    return `
    <article class="member-card colead-card">
      <div class="name">${m.name}</div>
      <div class="year-tag">${m.year}</div>
    </article>`;
  }

  const headsGrid = document.getElementById('headsGrid');
  const coLeadsGrid = document.getElementById('coLeadsGrid');
  const membersGrid = document.getElementById('membersGrid');
  const coLeadsSection = document.getElementById('coLeadsSection');
  const teamMembersSection = document.getElementById('teamMembersSection');

  if (headsGrid) headsGrid.innerHTML = CLUB.heads.map(m => memberCard(m, 'head-card')).join('');

  if (coLeadsGrid && CLUB.coLeads && CLUB.coLeads.length) {
    coLeadsGrid.innerHTML = CLUB.coLeads.map(m => memberCard(m, '')).join('');
  } else if (coLeadsSection) {
    coLeadsSection.style.display = 'none';
  }

  if (membersGrid && (CLUB.members || []).length) {
    membersGrid.innerHTML = (CLUB.members || []).map(m => memberCard(m, '')).join('');
  } else if (teamMembersSection) {
    teamMembersSection.style.display = 'none';
  }

  /* ─── CSV DOWNLOAD ─── */
  function downloadCSV(ev) {
    const rows = [['Name', 'Team', 'Result']];
    ev.participants.forEach(p => rows.push([p.name, p.team || '', p.result || '']));
    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${CLUB.id}_${ev.id}_participants.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /* ─── EVENTS ─── */
  // The visible event choices are intentionally simple photo-led buttons.
  // Detailed event content remains on the dedicated Past/Upcoming pages.
  const pastList = document.getElementById('pastEventsList');
  if (pastList) pastList.innerHTML = '';
  const upcomingList = document.getElementById('upcomingEventsList');
  if (upcomingList) upcomingList.innerHTML = '';
  const upcomingAction = document.querySelector('.event-action-upcoming');
  const pastAction = document.querySelector('.event-action-past');
  // Approved Events section imagery is shared across every club page.
  // Only the visual treatment changes here; all event-page links/data remain untouched.
  if (upcomingAction) upcomingAction.style.setProperty('--event-image', 'url("../images/events/upcoming-events-hq.jpg")');
  if (pastAction) pastAction.style.setProperty('--event-image', 'url("../images/events/past-events-hq.jpg")');

  /* ─── GALLERY: same visual source used by the landing page ─── */
  const galleryGrid = document.getElementById('clubGalleryGrid');
  if (galleryGrid) {
    const displayPhotos = LANDING_GALLERY.slice(0, 6);
    galleryGrid.innerHTML = displayPhotos.map((src, i) => `<div class="gallery-photo gallery-photo-${i + 1}" data-lightbox="${src}">
      <img src="${src}" alt="${CLUB.name} gallery image ${i + 1}" loading="lazy">
      <span class="gallery-photo-index">0${i + 1}</span>
      <span class="gallery-photo-shine"></span>
    </div>`).join('');
    galleryGrid.querySelectorAll('[data-lightbox]').forEach(el =>
      el.addEventListener('click', () => openLightbox(el.dataset.lightbox))
    );
  }

  /* ─── EXPLORE OTHER CLUBS ─── */
  const otherClubsEl = document.getElementById('otherClubs');
  if (otherClubsEl) {
    otherClubsEl.innerHTML = ALL_CLUBS.filter(c => c.id !== CLUB.id).map(c => `
      <a class="other-club-card" href="${PAGE_MAP[c.id]}" aria-label="Explore ${c.name}">
        <img class="occ-image" src="${c.heroImage}" alt="${c.name}" loading="lazy">
        <div class="occ-body">
          <div class="occ-name">${c.name}</div>
          <div class="occ-tagline">${c.tagline}</div>
          <span class="occ-explore">Explore</span>
        </div>
      </a>
    `).join('');
  }

  /* ─── SCROLL REVEALS / MICRO-INTERACTIONS ─── */
  const revealItems = document.querySelectorAll('.club-section, .club-hero-copy, .club-hero-media, .club-nav');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });
    revealItems.forEach(el => { el.classList.add('reveal-on-scroll'); revealObserver.observe(el); });
  } else {
    revealItems.forEach(el => el.classList.add('is-visible'));
  }

  /* subtle hero parallax on desktop */
  const heroMedia = document.querySelector('.club-hero-media img');
  if (heroMedia && window.matchMedia('(min-width: 901px)').matches) {
    const updateHero = () => {
      const y = Math.min(window.scrollY * 0.035, 22);
      heroMedia.style.transform = `scale(1.035) translateY(${y}px)`;
    };
    window.addEventListener('scroll', updateHero, { passive: true });
    updateHero();
  }

  /* ─── LIGHTBOX ─── */
  function openLightbox(src) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox';
      lb.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img id="lightboxImg" src="" alt="">`;
      document.body.appendChild(lb);
      lb.addEventListener('click', (e) => {
        if (e.target === lb || e.target.classList.contains('lightbox-close')) lb.classList.remove('open');
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') lb.classList.remove('open');
      });
    }
    document.getElementById('lightboxImg').src = src;
    lb.classList.add('open');
  }
  /* ─── PREMIUM MICRO-INTERACTIONS ─── */
  const heroMediaBox = document.querySelector('.club-hero-media');
  if (heroMediaBox && !heroMediaBox.querySelector('.hero-spotlight')) {
    const spot = document.createElement('span');
    spot.className = 'hero-spotlight';
    heroMediaBox.appendChild(spot);
    heroMediaBox.addEventListener('pointermove', (e) => {
      const r = heroMediaBox.getBoundingClientRect();
      spot.style.left = (e.clientX - r.left) + 'px';
      spot.style.top = (e.clientY - r.top) + 'px';
    });
  }

  /* stagger cards as they enter the viewport */
  if ('IntersectionObserver' in window) {
    const premiumGroups = document.querySelectorAll('.heads-grid, .coleads-grid, .vm-grid, .club-gallery-grid, .club-events-actions, .other-clubs-grid');
    premiumGroups.forEach(group => {
      Array.from(group.children).forEach((child, i) => {
        child.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;
        child.classList.add('premium-card-reveal');
      });
    });
    const premiumObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('premium-card-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    document.querySelectorAll('.premium-card-reveal').forEach(el => premiumObserver.observe(el));
  }

}
