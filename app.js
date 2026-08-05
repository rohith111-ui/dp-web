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
    function initials(name) { return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(); }
    function fmt(d) { return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }); }
    function avatar(person, flag) {
      const style = flag ? `style="--flag:${flag}"` : '';
      if (person.photo) {
        return `<div class="avatar-ring" ${style}><img src="${person.photo}" alt="${person.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>`;
      }
      return `<div class="avatar-ring" ${style}>${initials(person.name)}</div>`;
    }

    /* theme toggle */
    const themeToggle = document.getElementById('themeToggle');


    /* mobile nav */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

    /* active link on scroll */
    const sections = document.querySelectorAll('main section, .hero');
    const navA = document.querySelectorAll('nav.links a');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));

    /* STATS */
    document.getElementById('statStrip').innerHTML = DATA.stats.map(s => `
  <div class="stat-box">${icon(s.icon)}<b>${s.value}</b><span>${s.label}</span></div>`).join('');

    /* VALUES */
    document.getElementById('valuesGrid').innerHTML = DATA.values.map(v => `
  <div class="lead-card">
    <div class="club-icon" style="margin:0 auto 12px;">${icon(v.icon)}</div>
    <h4>${v.title}</h4><div class="role" style="color:var(--text-dim)">${v.sub}</div>
  </div>`).join('');

    /* LEADERSHIP (Matching Screenshot Card Style) */
    document.getElementById('leadershipGrid').innerHTML = DATA.leadership.map(l => {
      const photoSrc = l.photo || 'images/default_avatar.png';
      return `
  <div class="leadership-card">
    <div class="lead-card-header">
      <div class="lead-card-name">${l.name}</div>
      <div class="lead-card-role">${l.role}</div>
    </div>
    <div class="lead-card-photo-wrapper">
      <img src="${photoSrc}" alt="${l.name}" class="lead-card-photo">
    </div>
    <div class="lead-card-footer">
      <span class="lead-card-yr mono">${l.year}</span>
    </div>
  </div>`;
    }).join('');

    /* CLUBS */
    function clubCard(f) {
      const crewHTML = f.crew.map(c => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed rgba(20,40,70,0.1);">
      <div class="av" style="--flag:${f.flag};width:34px;height:34px;border-radius:50%;background:var(--bg-3);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;color:var(--text);flex-shrink:0;">${initials(c.name)}</div>
      <div style="text-align:left;">
        <div style="font-weight:700;font-size:14px;color:var(--text);line-height:1.2;">${c.name}</div>
        <div style="font-size:11.5px;color:var(--blue);font-weight:600;margin-top:2px;">${c.role}</div>
      </div>
    </div>`).join('');
      return `
  <div class="club-card" style="--flag:${f.flag}">
    <div class="club-icon">${icon(f.icon)}</div>
    <h3>${f.name}</h3>
    <div class="focus">${f.focus}</div>
    <div class="head-line">Heads: <b>${f.captain.name}</b></div>
    <div class="club-actions">
      <button class="club-btn" data-fleet="${f.id}" data-action="members">Members</button>
      <button class="club-btn" data-fleet="${f.id}" data-action="explore" data-url="${f.url || ''}">Explore</button>
    </div>
    <div class="club-detail" id="detail-${f.id}">
      <div class="mini-heading" style="margin-bottom:8px;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-dim2);">Elected Office Bearers</div>
      <div style="display:flex;flex-direction:column;gap:2px;">${crewHTML}</div>
    </div>
  </div>`;
    }
    document.getElementById('clubGrid').innerHTML = DATA.fleets.map(clubCard).join('');
    document.getElementById('clubGrid').addEventListener('click', e => {
      const btn = e.target.closest('.club-btn');
      if (!btn) return;

      if (btn.dataset.action === 'members') {
        const panel = document.getElementById('detail-' + btn.dataset.fleet);
        const open = panel.classList.toggle('open');
        btn.classList.toggle('active', open);
        btn.textContent = open ? 'Close' : 'Members';
      } else if (btn.dataset.action === 'explore') {
        const url = btn.dataset.url;
        if (url) {
          window.location.href = url;
        }
      }
    });

    /* RESULTS */
    function resultCard(r) {
      const podium = r.podium.map((name, idx) => `
        <div class="podium-slot p${idx + 1}" style="--place-color:${idx === 0 ? 'var(--gold)' : idx === 1 ? 'var(--silver)' : 'var(--bronze)'}">
          <div class="av">${name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()}</div>
          <div class="pname">${name}</div>
          <div class="bar">${idx + 1}</div>
        </div>`).join('');
      return `
      <div class="result-card">
        <div class="rh">
          <div>
            <h3>${r.title}</h3>
            <div class="rmeta">${r.category} • ${r.date}</div>
          </div>
          <div class="rmeta">${r.participants}</div>
        </div>
        <div class="podium-row">${podium}</div>
      </div>`;
    }
    const resultsEl = document.getElementById('resultsStack');
    if (resultsEl) resultsEl.innerHTML = DATA.results.map(resultCard).join('');

    /* ANNOUNCEMENTS TICKER (scrolls upward, seamless loop) */
    function announceItemHTML(a) {
      return `
  <div class="announce-item">
    <div class="announce-icon">${icon(a.icon)}</div>
    <div style="flex:1;">
      <h4>${a.title}</h4>
      <p>${a.body}</p>
    </div>
    <div class="announce-date">${a.date}</div>
  </div>`;
    }
    const tickerHTML = DATA.announcements.map(announceItemHTML).join('');
    // duplicate the list so translateY(-50%) loops seamlessly
    document.getElementById('tickerTrack').innerHTML = tickerHTML + tickerHTML;

    /* GALLERY PREVIEW (6 Main Photos) */
    const galleryGridEl = document.getElementById('galleryGrid');
    if (galleryGridEl) {
      galleryGridEl.innerHTML = DATA.gallery.slice(0, 6).map((item, index) => `
        <div class="gallery-tile preview-tile" data-src="${item.src}">
          <img src="${item.src}" alt="${item.alt || 'Gallery Photo'}" class="gallery-img">
          <div class="tile-overlay">
            <div class="overlay-top">
              <span class="tile-tag">${item.category || 'Event'}</span>
              <div class="zoom-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </div>
            </div>
            <div class="tile-title">${item.title || 'Event Glimpse ' + (index + 1)}</div>
          </div>
        </div>`).join('');

      galleryGridEl.querySelectorAll('.gallery-tile').forEach(tile => {
        tile.addEventListener('click', () => {
          let lb = document.getElementById('lightbox');
          if (!lb) {
            lb = document.createElement('div');
            lb.id = 'lightbox';
            lb.className = 'lightbox';
            lb.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img id="lightboxImg" src="" alt="">`;
            document.body.appendChild(lb);
            lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lightbox-close')) lb.classList.remove('open'); });
          }
          document.getElementById('lightboxImg').src = tile.dataset.src;
          lb.classList.add('open');
        });
      });
    }

