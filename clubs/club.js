/* =========================================================================
   DATA PIRATES — CLUB PAGE ENGINE
   One script powers all 4 club pages. Each HTML file just sets
   <body data-club="entrepreneurship"> (or content_creation / photography / sports)
   and everything below renders itself from CLUB_DATA in club-data.js
   ========================================================================= */

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
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
};
function icon(name, cls) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls || ''}">${ICONS[name] || ICONS.image}</svg>`;
}
function initials(name) { return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(); }
function fmtDate(d) { return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }); }
function fmtShort(d) { const dt = new Date(d + 'T00:00:00'); return { day: dt.toLocaleDateString('en-US', { day: '2-digit' }), mon: dt.toLocaleDateString('en-US', { month: 'short' }) }; }

/* ---------- boot ---------- */
const CLUB_ID = document.body.dataset.club;
const CLUB = CLUB_DATA[CLUB_ID];
const ALL_CLUBS = Object.values(CLUB_DATA);

if (!CLUB) {
  document.body.innerHTML = '<p style="padding:80px;text-align:center;">Club not found.</p>';
} else {
  document.documentElement.style.setProperty('--flag', CLUB.flag);

  /* ---------- mobile nav (mirrors main site) ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  /* ---------- hero ---------- */
  document.title = CLUB.name + ' — Data Pirates';
  const heroIcon = document.getElementById('clubHeroIcon');
  if (heroIcon) heroIcon.innerHTML = icon(CLUB.icon);
  const heroPhoto = document.getElementById('clubHeroPhoto');
  if (heroPhoto && CLUB.heroImage) {
    heroPhoto.style.backgroundImage = `url("${CLUB.heroImage}")`;
    heroPhoto.setAttribute('role', 'img');
    heroPhoto.setAttribute('aria-label', `${CLUB.name} activity photo`);
  }
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setText('clubHeroName', CLUB.name);
  setText('clubHeroTagline', CLUB.tagline);
  setText('crumbHere', CLUB.name);

  /* ---------- vision / mission ---------- */
  setText('visionText', CLUB.vision);
  setText('missionText', CLUB.mission);

  /* ---------- stats ---------- */
  const totalMembers = CLUB.heads.length + CLUB.members.length;
  const totalEvents = CLUB.pastEvents.length;
  const totalUpcoming = CLUB.upcomingEvents.length;
  const totalWinners = CLUB.pastEvents.reduce((sum, e) => sum + e.winners.length, 0);
  const statStrip = document.getElementById('clubStatStrip');
  if (statStrip) {
    statStrip.innerHTML = [
      { icon: 'users', value: totalMembers, label: 'Club Members' },
      { icon: 'calendar', value: totalEvents, label: 'Events Conducted' },
      { icon: 'clock', value: totalUpcoming, label: 'Upcoming Events' },
      { icon: 'trophy', value: totalWinners, label: 'Winners' },
    ].map(s => `<div class="stat-box">${icon(s.icon)}<b>${s.value}</b><span>${s.label}</span></div>`).join('');
  }

  /* ---------- members ---------- */
  function memberCard(m, isHead) {
    return `
    <div class="member-card">
      ${m.photo
        ? `<div class="avatar-ring"><img src="${m.photo}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>`
        : `<div class="avatar-ring">${initials(m.name)}</div>`}
      <div class="name">${m.name}</div>
      <div class="role-tag">${m.role}</div>
      <div class="sub">${m.year}${m.roll ? ' · ' + m.roll : ''}</div>
    </div>`;
  }
  const headsGrid = document.getElementById('headsGrid');
  const membersGrid = document.getElementById('membersGrid');
  if (headsGrid) headsGrid.innerHTML = CLUB.heads.map(m => memberCard(m, true)).join('');
  if (membersGrid) membersGrid.innerHTML = CLUB.members.map(m => memberCard(m, false)).join('');

  /* ---------- CSV download ---------- */
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

  /* ---------- past events ---------- */
  function pastEventHTML(ev) {
    const rows = ev.participants.map(p => `
      <tr><td>${p.name}</td><td>${p.team || '—'}</td><td>${p.result || '—'}</td></tr>`).join('');
    const winners = ev.winners.length
      ? `<div class="winners-row">${ev.winners.map(w => `<span class="winner-chip">🏆 ${w}</span>`).join('')}</div>`
      : '';
    const gallery = ev.gallery.length
      ? `<div class="event-gallery-mini">${ev.gallery.map(src => `<img src="${src}" alt="${ev.title} photo" data-lightbox="${src}">`).join('')}</div>`
      : '';
    return `
    <div class="past-event">
      <div class="past-event-head">
        <div>
          <h3>${ev.title}</h3>
          <div class="meta"><b>${ev.category}</b> &middot; ${fmtDate(ev.date)} &middot; ${ev.participants.length} participants</div>
        </div>
      </div>
      <p class="desc">${ev.description}</p>
      ${winners}
      <table class="participants-table">
        <thead><tr><th>Name</th><th>Team</th><th>Result</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="event-actions">
        <button class="btn btn-ghost" data-download="${ev.id}">${icon('download')} Download participants list</button>
      </div>
      ${gallery}
    </div>`;
  }
  const pastList = document.getElementById('pastEventsList');
  if (pastList) {
    if (CLUB.pastEvents.length) {
      pastList.innerHTML = CLUB.pastEvents.map(pastEventHTML).join('');
      pastList.querySelectorAll('[data-download]').forEach(btn => {
        btn.addEventListener('click', () => {
          const ev = CLUB.pastEvents.find(e => e.id === btn.dataset.download);
          if (ev) downloadCSV(ev);
        });
      });
      pastList.querySelectorAll('[data-lightbox]').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.dataset.lightbox));
      });
    } else {
      pastList.innerHTML = `<div class="empty-note">No events conducted yet — check back soon.</div>`;
    }
  }

  /* ---------- upcoming events ---------- */
  function upcomingEventHTML(ev) {
    const { day, mon } = fmtShort(ev.date);
    const link = ev.registerLink
      ? `<a href="${ev.registerLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Register Now</a>`
      : `<button class="btn btn-primary" data-jump-register="${ev.id}">Register at Desk ${icon('arrow')}</button>`;
    return `
    <div class="upcoming-card">
      <div class="upcoming-date"><div class="d">${day}</div><div class="m">${mon}</div></div>
      <div class="upcoming-body">
        <h3>${ev.title}</h3>
        <p>${ev.description}</p>
        ${link}
      </div>
    </div>`;
  }
  const upcomingList = document.getElementById('upcomingEventsList');
  if (upcomingList) {
    if (CLUB.upcomingEvents.length) {
      upcomingList.innerHTML = CLUB.upcomingEvents.map(upcomingEventHTML).join('');
      upcomingList.querySelectorAll('[data-jump-register]').forEach(btn => {
        btn.addEventListener('click', () => {
          const sel = document.getElementById('regEvent');
          if (sel) sel.value = btn.dataset.jumpRegister;
          document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      upcomingList.innerHTML = `<div class="empty-note">No upcoming events announced yet. Follow the club's Instagram for the next drop.</div>`;
    }
  }

  /* tabs */
  document.querySelectorAll('.event-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.event-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.event-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.pane)?.classList.add('active');
    });
  });

  /* ---------- registration desk ---------- */
  const regEventSel = document.getElementById('regEvent');
  if (regEventSel) {
    regEventSel.innerHTML = CLUB.upcomingEvents.length
      ? CLUB.upcomingEvents.map(e => `<option value="${e.id}">${e.title} — ${fmtDate(e.date)}</option>`).join('')
      : `<option value="">No upcoming events right now</option>`;
  }
  const regForm = document.getElementById('regForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(regForm);
      const name = fd.get('name'), roll = fd.get('roll'), year = fd.get('year'),
        branch = fd.get('branch'), phone = fd.get('phone'), eventId = fd.get('event');
      const ev = CLUB.upcomingEvents.find(x => x.id === eventId);
      if (ev && ev.registerLink) { window.open(ev.registerLink, '_blank', 'noopener,noreferrer'); return; }
      const subject = encodeURIComponent(`Registration: ${ev ? ev.title : 'Event'} — ${CLUB.name}`);
      const body = encodeURIComponent(
        `Event: ${ev ? ev.title : '-'}\nName: ${name}\nRoll No: ${roll}\nYear: ${year}\nBranch: ${branch}\nPhone: ${phone}\n\nSent from the Data Pirates ${CLUB.name} registration desk.`
      );
      window.location.href = `mailto:${CLUB.contact.email}?subject=${subject}&body=${body}`;
      const note = document.getElementById('regConfirm');
      if (note) { note.style.display = 'block'; regForm.reset(); }
    });
  }

  /* ---------- contact ---------- */
  const contactGrid = document.getElementById('clubContactGrid');
  if (contactGrid) {
    contactGrid.innerHTML = `
      <a class="contact-card" href="mailto:${CLUB.contact.email}">
        <div class="ci">${icon('mail')}</div>
        <div><div class="cl">Email</div><div class="cv">${CLUB.contact.email}</div></div>
      </a>
      <a class="contact-card" href="${CLUB.contact.instagram}" target="_blank" rel="noopener noreferrer">
        <div class="ci">${icon('instagram')}</div>
        <div><div class="cl">Instagram</div><div class="cv">@datapirates_nnrg</div></div>
      </a>
      <a class="contact-card" href="tel:${CLUB.contact.phone.replace(/\s/g, '')}">
        <div class="ci">${icon('phone')}</div>
        <div><div class="cl">Phone</div><div class="cv">${CLUB.contact.phone}</div></div>
      </a>`;
  }

  /* ---------- full event photo gallery (all past events combined) ---------- */
  const fullGallery = document.getElementById('clubGalleryGrid');
  if (fullGallery) {
    const allPhotos = CLUB.pastEvents.flatMap(ev => ev.gallery.map(src => ({ src, event: ev.title })));
    fullGallery.innerHTML = allPhotos.length
      ? allPhotos.map(p => `<div class="gallery-tile"><img src="${p.src}" alt="${p.event}" data-lightbox="${p.src}" style="width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;"></div>`).join('')
      : `<div class="empty-note">Event photos will appear here once uploaded — add them in club-data.js.</div>`;
    fullGallery.querySelectorAll('[data-lightbox]').forEach(img => img.addEventListener('click', () => openLightbox(img.dataset.lightbox)));
  }

  /* ---------- other clubs quick nav ---------- */
  const PAGE_MAP = {
    entrepreneurship: 'entrepreneurship-club.html',
    content_creation: 'content-creation-club.html',
    photography: 'photography-club.html',
    sports: 'sports-club.html'
  };
  const otherClubsEl = document.getElementById('otherClubs');
  if (otherClubsEl) {
    otherClubsEl.innerHTML = ALL_CLUBS.filter(c => c.id !== CLUB.id).map(c => `
      <a class="other-club-link" href="${PAGE_MAP[c.id]}">${c.name} ${icon('arrow')}</a>`).join('');
  }

  /* ---------- lightbox ---------- */
  function openLightbox(src) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox';
      lb.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img id="lightboxImg" src="" alt="">`;
      document.body.appendChild(lb);
      lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lightbox-close')) lb.classList.remove('open'); });
    }
    document.getElementById('lightboxImg').src = src;
    lb.classList.add('open');
  }
}
