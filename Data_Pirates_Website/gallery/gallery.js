/* =========================================================================
   DATA PIRATES - FULL GALLERY PAGE SCRIPT
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* Sticky header shrink on scroll */
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

  /* Mobile menu toggle */
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

  /* Scroll reveal animations */
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

  const galleryGrid = document.getElementById('fullGalleryGrid');
  const filterContainer = document.getElementById('galleryFilters');

  if (!galleryGrid || typeof DATA === 'undefined' || !DATA.gallery) return;

  const allPhotos = DATA.gallery;
  let currentFilter = 'All';

  /* Extract unique categories */
  const categories = ['All', ...new Set(allPhotos.map(item => item.category || 'Events'))];

  /* Render Filter Tabs */
  if (filterContainer) {
    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}" role="tab" aria-selected="${cat === 'All'}">
        ${cat === 'All' ? 'All Photos' : cat}
      </button>
    `).join('');

    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterContainer.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      currentFilter = btn.dataset.category;
      renderGallery();
    });
  }

  /* Render Gallery Grid */
  function renderGallery() {
    const filtered = currentFilter === 'All'
      ? allPhotos
      : allPhotos.filter(item => (item.category || 'Events') === currentFilter);

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `<div class="empty-gallery">No photos found in this category yet. Check back soon!</div>`;
      return;
    }

    galleryGrid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item-card" data-src="${item.src}">
        <img src="${item.src}" alt="${item.alt || 'Gallery photo'}" loading="lazy">
        <div class="card-overlay">
          <div class="overlay-header">
            <span class="badge">${item.category || 'Events'}</span>
            <div class="zoom-btn" aria-label="Expand image">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          </div>
          <div class="overlay-footer">
            <div class="photo-title">${item.title || 'Event Glimpse #' + (idx + 1)}</div>
          </div>
        </div>
      </div>
    `).join('');

    /* Attach Lightbox listeners */
    galleryGrid.querySelectorAll('.gallery-item-card').forEach(card => {
      card.addEventListener('click', () => {
        openLightbox(card.dataset.src);
      });
    });
  }

  /* Initial Render */
  renderGallery();

  /* Lightbox logic */
  function openLightbox(src) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox';
      lb.setAttribute('role', 'dialog');
      lb.setAttribute('aria-label', 'Image preview');
      lb.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img id="lightboxImg" src="" alt="Full view">`;
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
});
