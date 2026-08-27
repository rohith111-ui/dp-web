/* =========================================================================
   DATA PIRATES — CLIENT APPLICATION SCRIPT
   ========================================================================= */

const ICONS = {
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 14 9 5 9-5"/><path d="m3 10 9 5 9-5"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M17 5h3a2 2 0 0 1 0 4h-1M7 5H4a2 2 0 0 0 0 4h1"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-4 8-4-8 4 2 4-2Z"/>',
  bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/>',
  megaphone: '<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 16.8a2 2 0 0 1-3.2 2.4L6 16"/>',
  bulb: '<path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 2Z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
};

function icon(name, cls) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls || ''}">${ICONS[name] || ICONS.image}</svg>`;
}

function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function fmt(d) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* ─── STICKY HEADER COMPACT SCROLL ─── */
const siteHeader = document.getElementById('siteHeader');
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

/* ─── MOBILE NAV TOGGLE ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─── SCROLLSPY ACTIVE NAV LINKS ─── */
const sections = document.querySelectorAll('main section, .hero');
const navA = document.querySelectorAll('nav.links a');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });
sections.forEach(s => io.observe(s));

/* ─── SCROLL REVEAL ANIMATIONS ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  revealObserver.observe(el);
});

/* ─── STATS STRIP ─── */
const statStrip = document.getElementById('statStrip');
if (statStrip && typeof DATA !== 'undefined' && DATA.stats) {
  statStrip.innerHTML = DATA.stats.map(s => `
    <div class="stat-box">
      ${icon(s.icon)}
      <b>${s.value}</b>
      <span>${s.label}</span>
    </div>`).join('');
}

/* ─── VALUES GRID ─── */
const valuesGrid = document.getElementById('valuesGrid');
if (valuesGrid && typeof DATA !== 'undefined' && DATA.values) {
  valuesGrid.innerHTML = DATA.values.map(v => `
    <div class="lead-card">
      <div class="club-icon" style="margin:0 auto 14px;">${icon(v.icon)}</div>
      <h4>${v.title}</h4>
      <div class="role">${v.sub}</div>
    </div>`).join('');
}

/* ─── LEADERSHIP GRID ─── */
const leadershipGrid = document.getElementById('leadershipGrid');
if (leadershipGrid && typeof DATA !== 'undefined' && DATA.leadership) {
  leadershipGrid.innerHTML = DATA.leadership.map(l => {
    const photoSrc = l.photo || 'images/default_avatar.png';
    return `
    <div class="leadership-card">
      <div class="lead-card-header">
        <div class="lead-card-name">${l.name}</div>
        <div class="lead-card-role">${l.role}</div>
      </div>
      <div class="lead-card-photo-wrapper">
        <img src="${photoSrc}" alt="${l.name} — ${l.role}" class="lead-card-photo" loading="lazy">
      </div>
      <div class="lead-card-footer">
        <span class="lead-card-yr mono">${l.year}</span>
      </div>
    </div>`;
  }).join('');
}

/* ─── SUB-CLUBS GRID ─── */
const CLUB_CARD_IMAGES = {
  entrepreneurship: 'images/clubs/entrepreneurship-hero-hq.jpg',
  content_creation: 'images/clubs/content_creation-hero-hq.jpg',
  photography: 'images/clubs/photography-hero-hq.jpg',
  sports: 'images/clubs/sports-hero-hq.jpg',
  technova: 'images/clubs/technova-hero-hq.jpg'
};

function clubCard(f) {
  const imageSrc = CLUB_CARD_IMAGES[f.id] || '';
  const crewHTML = f.crew.map(c => `
    <div class="club-crew-row">
      <div class="club-crew-avatar">${c.photo ? `<img src="${c.photo}" alt="${c.name}" loading="lazy">` : initials(c.name)}</div>
      <div class="club-crew-copy">
        <div class="club-crew-name">${c.name}</div>
        <div class="club-crew-role">${c.role}</div>
      </div>
    </div>`).join('');

  const headNames = (f.captain.name || '').split(' & ');
  const headCrew = headNames.map(name => {
    const member = f.crew.find(c => c.name === name);
    return member ? `<div class="club-head-avatar">${member.photo ? `<img src="${member.photo}" alt="${member.name}" loading="lazy">` : initials(member.name)}</div>` : '';
  }).join('');

  return `
  <article class="club-card" data-club="${f.id}">
    <div class="club-card-media">
      <img src="${imageSrc}" alt="${f.name}" loading="lazy">
    </div>
    <div class="club-card-body">
      <h3>${f.name}</h3>
      <span class="club-card-rule" aria-hidden="true"></span>
      <p class="focus">${f.focus}</p>
      <div class="head-line">Heads: <b>${f.captain.name}</b></div>
      <div class="club-head-avatars">${headCrew}</div>
      <div class="club-actions">
        <button class="club-btn club-members-btn" data-fleet="${f.id}" data-action="members">Members</button>
        <button class="club-btn club-explore-btn" data-fleet="${f.id}" data-action="explore" data-url="${f.url || ''}">Explore <span aria-hidden="true">→</span></button>
      </div>
      <div class="club-detail" id="detail-${f.id}" aria-hidden="true">
        <div class="club-detail-label">Full Crew</div>
        <div class="club-crew-list">${crewHTML}</div>
      </div>
    </div>
  </article>`;
}

const clubGrid = document.getElementById('clubGrid');
if (clubGrid && typeof DATA !== 'undefined' && DATA.fleets) {
  clubGrid.innerHTML = DATA.fleets.map(clubCard).join('');
  clubGrid.addEventListener('click', e => {
    const btn = e.target.closest('.club-btn');
    if (!btn) return;

    if (btn.dataset.action === 'members') {
      const panel = document.getElementById('detail-' + btn.dataset.fleet);
      const open = panel.classList.toggle('open');
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      btn.classList.toggle('active', open);
      btn.textContent = open ? 'Close' : 'Members';
    } else if (btn.dataset.action === 'explore') {
      const url = btn.dataset.url;
      if (url) window.location.href = url;
    }
  });
}

/* ─── RESULTS & PODIUM ─── */
function resultCard(r) {
  const runner = r.runnerUp ? `
    <div class="result-place runner-up">
      <div class="place-medal silver">2</div>
      <div class="place-copy">
        <span class="place-label">RUNNER-UP</span>
        <strong>${r.runnerUp}</strong>
        ${r.runnerUpYear ? `<span class="year-badge">${r.runnerUpYear}</span>` : ''}
      </div>
    </div>` : `
    <div class="result-place runner-up empty">
      <div class="place-medal silver">2</div>
      <div class="place-copy">
        <span class="place-label">RUNNER-UP</span>
        <strong>Not announced</strong>
      </div>
    </div>`;

  return `
  <article class="result-card">
    <div class="result-event-head">
      <div>
        <h3>${r.title}</h3>
        <div class="rmeta">${r.category} • ${r.date}</div>
      </div>
      <span class="result-outcome">OUTCOME</span>
    </div>
    <div class="result-winners">
      <div class="result-place winner">
        <div class="place-medal gold">1</div>
        <div class="place-copy">
          <span class="place-label">WINNER</span>
          <strong>${r.winner}</strong>
          ${r.winnerYear ? `<span class="year-badge">${r.winnerYear}</span>` : ''}
        </div>
      </div>
      ${runner}
    </div>
  </article>`;
}

const resultsEl = document.getElementById('resultsStack');
if (resultsEl && typeof DATA !== 'undefined' && DATA.results) {
  resultsEl.innerHTML = DATA.results.map(resultCard).join('');
}

/* ─── ANNOUNCEMENTS TICKER ─── */
function announceItemHTML(a) {
  return `
  <div class="announce-item${a.photo ? ' has-photo' : ''}">
    ${a.photo ? `<img class="announce-photo" src="${a.photo}" alt="${a.title.replace(/<[^>]*>/g, '')}" loading="lazy">` : `<div class="announce-icon">${icon(a.icon)}</div>`}
    <div style="flex:1;">
      <h4>${a.title}</h4>
      <p>${a.body}</p>
      ${a.actionUrl && a.actionText ? `<a class="announce-action" href="${a.actionUrl}" target="_blank" rel="noopener noreferrer">${a.actionText}</a>` : ''}
    </div>
    <div class="announce-date">${a.date}</div>
  </div>`;
}

const tickerTrack = document.getElementById('tickerTrack');
if (tickerTrack && typeof DATA !== 'undefined' && DATA.announcements) {
  const tickerHTML = DATA.announcements.map(announceItemHTML).join('');
  tickerTrack.innerHTML = tickerHTML + tickerHTML;
}

/* ─── GALLERY PREVIEW & LIGHTBOX ─── */
const galleryGridEl = document.getElementById('galleryGrid');
if (galleryGridEl && typeof DATA !== 'undefined' && DATA.gallery) {
  galleryGridEl.innerHTML = DATA.gallery.slice(0, 6).map((item, index) => `
    <div class="gallery-tile preview-tile" data-src="${item.src}">
      <img src="${item.src}" alt="${item.alt || 'Gallery Photo'}" class="gallery-img" loading="lazy">
      <div class="tile-overlay">
        <div class="overlay-top">
          <span class="tile-tag">${item.category || 'Event'}</span>
          <div class="zoom-icon" aria-label="Expand image">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
        <div class="tile-title">${item.title || 'Event Glimpse ' + (index + 1)}</div>
      </div>
    </div>`).join('');

  galleryGridEl.querySelectorAll('.gallery-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      openLightbox(tile.dataset.src);
    });
  });
}

function openLightbox(src) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-label', 'Image preview');
    lb.innerHTML = `<button class="lightbox-close" aria-label="Close preview">&times;</button><img id="lightboxImg" src="" alt="Enlarged view">`;
    document.body.appendChild(lb);
    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target.classList.contains('lightbox-close')) {
        lb.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lb.classList.contains('open')) {
        lb.classList.remove('open');
      }
    });
  }
  document.getElementById('lightboxImg').src = src;
  lb.classList.add('open');
}
