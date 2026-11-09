/**
 * ==============================================================================
 * PORTFOLIO APPLICATION CORE ENGINE (js/main.js)
 * ==============================================================================
 * This script connects 'content.js' to your website, renders all content,
 * handles interactive UI elements (lightbox, clipboard, mobile menu),
 * and activates smooth GSAP entrance animations.
 * ==============================================================================
 */

(function () {
  'use strict';

  // Ensure content configuration exists
  if (typeof PORTFOLIO_CONTENT === 'undefined') {
    console.error('Error: PORTFOLIO_CONTENT is not defined. Ensure content.js is loaded before main.js.');
    return;
  }

  const data = PORTFOLIO_CONTENT;

  /* ----------------------------------------------------------------------------
     1. THEME & CSS VARIABLES INJECTION
     ---------------------------------------------------------------------------- */
  function applyTheme() {
    if (!data.theme) return;
    const root = document.documentElement;
    const t = data.theme;

    if (t.accentColor) root.style.setProperty('--accent-color', t.accentColor);
    if (t.accentHover) root.style.setProperty('--accent-hover', t.accentHover);
    if (t.bgPrimary) root.style.setProperty('--bg-primary', t.bgPrimary);
    if (t.bgSecondary) root.style.setProperty('--bg-secondary', t.bgSecondary);
    if (t.bgCard) root.style.setProperty('--bg-card', t.bgCard);
    if (t.textPrimary) root.style.setProperty('--text-primary', t.textPrimary);
    if (t.textSecondary) root.style.setProperty('--text-secondary', t.textSecondary);
    if (t.textMuted) root.style.setProperty('--text-muted', t.textMuted);
    if (t.borderColor) root.style.setProperty('--border-subtle', t.borderColor);
    if (t.darkBg) root.style.setProperty('--dark-bg', t.darkBg);
    if (t.darkText) root.style.setProperty('--dark-text', t.darkText);
  }

  /* ----------------------------------------------------------------------------
     2. NAVIGATION & HEADER RENDERING
     ---------------------------------------------------------------------------- */
  function renderNavigation() {
    // Brand Logo & Monogram
    const monogramEl = document.getElementById('brand-monogram');
    const brandNameEl = document.getElementById('brand-name');
    const brandSubEl = document.getElementById('brand-subtitle');

    if (monogramEl) monogramEl.textContent = data.personal.monogram || 'AR';
    if (brandNameEl) brandNameEl.textContent = data.personal.name || 'Alex Rivera';
    if (brandSubEl) brandSubEl.textContent = data.personal.navSubtitle || 'PORTFOLIO // 2026';

    // Desktop Nav Menu
    const navMenuEl = document.getElementById('nav-menu');
    const mobileMenuEl = document.getElementById('mobile-menu');

    if (navMenuEl && Array.isArray(data.navigation)) {
      navMenuEl.innerHTML = data.navigation
        .map(
          item => `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`
        )
        .join('');
    }

    if (mobileMenuEl && Array.isArray(data.navigation)) {
      mobileMenuEl.innerHTML = data.navigation
        .map(
          item => `<li><a href="${item.href}" class="mobile-link">${item.label}</a></li>`
        )
        .join('');
    }

    // Availability Pill
    const availPill = document.getElementById('nav-availability');
    if (availPill && data.personal.availability) {
      const avail = data.personal.availability;
      if (avail.isAvailable) {
        availPill.innerHTML = `
          <span class="status-dot"></span>
          <span>${avail.statusText || 'Available for Work'}</span>
        `;
        availPill.style.display = 'inline-flex';
      } else {
        availPill.style.display = 'none';
      }
    }
  }

  /* ----------------------------------------------------------------------------
     3. HERO SECTION RENDERING
     ---------------------------------------------------------------------------- */
  function renderHero() {
    const h = data.hero || {};
    const p = data.personal || {};

    const heroBadge = document.getElementById('hero-badge');
    const heroGreeting = document.getElementById('hero-greeting');
    const heroName = document.getElementById('hero-name');
    const heroProfession = document.getElementById('hero-profession');
    const heroBio = document.getElementById('hero-bio');
    const heroPrimaryBtn = document.getElementById('hero-primary-btn');
    const heroSecondaryBtn = document.getElementById('hero-secondary-btn');
    const heroPortraitImg = document.getElementById('hero-portrait-img');
    const heroPortraitTags = document.getElementById('hero-portrait-tags');

    if (heroBadge) heroBadge.textContent = h.badge || 'CREATIVE PORTFOLIO 2026';
    if (heroGreeting) heroGreeting.textContent = h.greeting || "Hi, I'm";
    if (heroName) heroName.textContent = h.name || (p.name ? `${p.name}.` : 'Alex Rivera.');
    if (heroProfession) heroProfession.textContent = h.profession || p.title || 'Creative Developer & Digital Creator';
    if (heroBio) heroBio.textContent = h.shortBio || '';

    if (heroPrimaryBtn && h.primaryButton) {
      heroPrimaryBtn.innerHTML = `
        <span>${h.primaryButton.text || "Let's Collaborate"}</span>
        <svg class="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
      heroPrimaryBtn.href = h.primaryButton.href || '#contact';
    }

    if (heroSecondaryBtn && h.secondaryButton) {
      heroSecondaryBtn.textContent = h.secondaryButton.text || 'Explore Works';
      heroSecondaryBtn.href = h.secondaryButton.href || '#projects';
    }

    if (heroPortraitImg) {
      heroPortraitImg.src = p.profileImage || 'assets/images/profile-placeholder.svg';
      heroPortraitImg.alt = p.name || 'Alex Rivera Profile';
    }

    if (heroPortraitTags && Array.isArray(h.portraitTags)) {
      heroPortraitTags.innerHTML = h.portraitTags
        .map(tag => `<span class="portrait-tag">${tag}</span>`)
        .join('');
    }
  }

  /* ----------------------------------------------------------------------------
     4. ABOUT SECTION RENDERING
     ---------------------------------------------------------------------------- */
  function renderAbout() {
    const a = data.about || {};
    const p = data.personal || {};

    const aboutEyebrow = document.getElementById('about-eyebrow');
    const aboutHeading = document.getElementById('about-heading');
    const aboutParagraphs = document.getElementById('about-paragraphs');
    const aboutQuote = document.getElementById('about-quote');
    const aboutStats = document.getElementById('about-stats');
    const aboutTools = document.getElementById('about-tools');
    const aboutImg = document.getElementById('about-img');

    if (aboutEyebrow) aboutEyebrow.textContent = a.eyebrow || 'ABOUT ME // PHILOSOPHY';
    if (aboutHeading) aboutHeading.textContent = a.heading || '';

    if (aboutParagraphs && Array.isArray(a.paragraphs)) {
      aboutParagraphs.innerHTML = a.paragraphs
        .map(text => `<p>${text}</p>`)
        .join('');
    }

    if (aboutQuote && a.quote) {
      aboutQuote.textContent = `"${a.quote}"`;
    }

    if (aboutStats && Array.isArray(a.stats)) {
      aboutStats.innerHTML = a.stats
        .map(
          st => `
          <div class="stat-item">
            <span class="stat-number">${st.number}</span>
            <span class="stat-label">${st.label}</span>
          </div>
        `
        )
        .join('');
    }

    if (aboutTools && Array.isArray(a.toolsList)) {
      aboutTools.innerHTML = a.toolsList
        .map(tool => `<span class="tool-chip">${tool}</span>`)
        .join('');
    }

    if (aboutImg) {
      aboutImg.src = p.aboutImage || 'assets/images/about-image.svg';
      aboutImg.alt = 'About Composition';
    }
  }

  /* ----------------------------------------------------------------------------
     5. SKILLS & SERVICES RENDERING
     ---------------------------------------------------------------------------- */
  function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid || !Array.isArray(data.services)) return;

    servicesGrid.innerHTML = data.services
      .map(
        srv => `
        <article class="service-card" data-service-id="${srv.id || ''}">
          <div class="service-card-top">
            <div class="service-card-header">
              <span class="service-number">${srv.number || '01'}</span>
              <span class="service-badge">PRACTICE</span>
            </div>
            <h3 class="service-title">${srv.title}</h3>
            <p class="service-desc">${srv.description}</p>
          </div>
          <div class="service-skills-list">
            ${(srv.skills || [])
              .map(sk => `<span class="service-skill-tag">${sk}</span>`)
              .join('')}
          </div>
        </article>
      `
      )
      .join('');
  }

  /* ----------------------------------------------------------------------------
     6. SELECTED PROJECTS RENDERING
     ---------------------------------------------------------------------------- */
  function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList || !Array.isArray(data.projects)) return;

    projectsList.innerHTML = data.projects
      .map((proj, idx) => {
        const isReversed = idx % 2 === 1;
        return `
          <article class="project-item-card ${isReversed ? 'reversed' : ''}">
            <div class="project-inner-grid">
              <div class="project-visual-col">
                <div class="project-image-box">
                  <img src="${proj.image}" alt="${proj.title}" loading="lazy">
                </div>
              </div>
              <div class="project-info-col">
                <div class="project-meta-row">
                  <span class="project-cat">${proj.category}</span>
                  <span class="project-year">${proj.year}</span>
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <div class="project-subtitle">${proj.subtitle || ''}</div>
                <p class="project-desc">${proj.description}</p>
                <div class="project-tags-cloud">
                  ${(proj.tags || []).map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                  <a href="${proj.liveUrl || '#'}" class="btn btn-primary btn-sm" onclick="handleProjectClick(event, '${proj.id}')">
                    <span>View Project</span>
                    <svg class="icon-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                  ${proj.demoNote ? `<span class="badge-pill">${proj.demoNote}</span>` : ''}
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  /* ----------------------------------------------------------------------------
     7. GRAPHIC DESIGN SHOWCASE RENDERING
     ---------------------------------------------------------------------------- */
  function renderGraphicDesign() {
    const gd = data.graphicDesign || {};
    const gdEyebrow = document.getElementById('gd-eyebrow');
    const gdHeading = document.getElementById('gd-heading');
    const gdDesc = document.getElementById('gd-desc');
    const gdGrid = document.getElementById('gd-grid');

    if (gdEyebrow) gdEyebrow.textContent = gd.eyebrow || 'VISUAL IDENTITY & EDITORIAL';
    if (gdHeading) gdHeading.textContent = gd.heading || 'Form, void & typographic rhythm.';
    if (gdDesc) gdDesc.textContent = gd.description || '';

    if (gdGrid && Array.isArray(gd.items)) {
      gdGrid.innerHTML = gd.items
        .map(
          item => `
          <div class="gd-card" onclick="openLightbox('${item.image}', '${encodeURIComponent(item.title)}', '${encodeURIComponent(item.category)}', '${encodeURIComponent(item.description)}')">
            <div class="gd-image-wrapper">
              <img src="${item.image}" alt="${item.title}" loading="lazy">
              <div class="gd-overlay">
                <span class="gd-view-btn">EXPAND VIEW +</span>
              </div>
            </div>
            <div class="gd-info">
              <div class="gd-meta-line">
                <span class="gd-category">${item.category}</span>
                <span class="gd-year">${item.year}</span>
              </div>
              <h4 class="gd-title">${item.title}</h4>
              <p class="gd-desc">${item.description}</p>
            </div>
          </div>
        `
        )
        .join('');
    }
  }

  /* ----------------------------------------------------------------------------
     8. WEB DEVELOPMENT SECTION (BROWSER-STYLE MOCKUPS)
     ---------------------------------------------------------------------------- */
  function renderWebDev() {
    const wd = data.webDevSection || {};
    const wdEyebrow = document.getElementById('wd-eyebrow');
    const wdHeading = document.getElementById('wd-heading');
    const wdDesc = document.getElementById('wd-desc');
    const wdList = document.getElementById('wd-list');

    if (wdEyebrow) wdEyebrow.textContent = wd.eyebrow || 'ENGINEERING & CREATIVE CODE';
    if (wdHeading) wdHeading.textContent = wd.heading || 'Bespoke web applications built for speed & elegance.';
    if (wdDesc) wdDesc.textContent = wd.description || '';

    if (wdList && Array.isArray(wd.showcases)) {
      wdList.innerHTML = wd.showcases
        .map(
          item => `
          <div class="browser-showcase-card">
            <div class="browser-chrome-header">
              <div class="browser-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <div class="browser-url-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>${item.browserUrl || 'https://demo.project.com'}</span>
              </div>
              <div class="browser-actions">
                <span>60 FPS</span>
              </div>
            </div>

            <div class="browser-viewport">
              <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>

            <div class="browser-content-details">
              <div>
                <span class="project-cat">${item.category}</span>
                <h3 class="browser-title">${item.title}</h3>
                <p class="browser-desc">${item.description}</p>
              </div>
              <div>
                <div class="browser-tech-list">
                  ${(item.techStack || []).map(t => `<span class="browser-tech-pill">${t}</span>`).join('')}
                </div>
                <div class="browser-button-row">
                  <a href="${item.liveDemoUrl || '#'}" class="btn btn-primary" onclick="handleProjectClick(event, '${item.id}')">
                    <span>Live Showcase</span>
                    <svg class="icon-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                  ${
                    item.githubUrl && item.githubUrl !== '#'
                      ? `<a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Source Code</a>`
                      : ''
                  }
                </div>
              </div>
            </div>
          </div>
        `
        )
        .join('');
    }
  }

  /* ----------------------------------------------------------------------------
     9. PERSONAL HIGHLIGHT SECTION ("2026")
     ---------------------------------------------------------------------------- */
  function renderHighlight2026() {
    const hl = data.highlight2026 || {};
    const yearBg = document.getElementById('highlight-oversized-year');
    const yearNumber = document.getElementById('highlight-giant-number');
    const hlTitle = document.getElementById('highlight-title');
    const hlQuote = document.getElementById('highlight-quote');
    const hlChecklist = document.getElementById('highlight-checklist');
    const marqueeContent = document.getElementById('marquee-content');

    const yearString = hl.year || '2026';
    if (yearBg) yearBg.textContent = yearString;
    if (yearNumber) yearNumber.innerHTML = `${yearString}<span>.</span>`;
    if (hlTitle) hlTitle.textContent = hl.title || 'Intentional Simplicity in an Era of Digital Noise.';
    if (hlQuote) hlQuote.textContent = `"${hl.quote || ''}"`;

    if (hlChecklist && Array.isArray(hl.highlightsList)) {
      hlChecklist.innerHTML = hl.highlightsList
        .map(
          item => `
          <li>
            <span class="highlight-check-icon">✓</span>
            <span>${item}</span>
          </li>
        `
        )
        .join('');
    }

    if (marqueeContent && Array.isArray(hl.tickerWords)) {
      const text = hl.tickerWords
        .map(w => `<span class="marquee-item ${w === '•' ? 'accent' : ''}">${w}</span>`)
        .join('');
      // Duplicate to ensure seamless continuous loop
      marqueeContent.innerHTML = text + text + text;
    }
  }

  /* ----------------------------------------------------------------------------
     10. CONTACT SECTION RENDERING
     ---------------------------------------------------------------------------- */
  function renderContact() {
    const c = data.contact || {};
    const contactEyebrow = document.getElementById('contact-eyebrow');
    const contactHeading = document.getElementById('contact-heading');
    const contactDesc = document.getElementById('contact-desc');
    const contactEmail = document.getElementById('contact-email-text');
    const emailMailto = document.getElementById('contact-email-link');
    const socialGrid = document.getElementById('social-links-grid');

    if (contactEyebrow) contactEyebrow.textContent = c.eyebrow || "LET'S WORK TOGETHER";
    if (contactHeading) {
      contactHeading.innerHTML = `
        ${c.heading || 'Got a project in mind?'}
        <span class="italic-serif d-block" style="display:block; color:var(--accent-color); font-weight:normal;">${c.subheading || "Let's create something meaningful."}</span>
      `;
    }
    if (contactDesc) contactDesc.textContent = c.description || '';
    if (contactEmail) contactEmail.textContent = c.email || 'hello@example.com';
    if (emailMailto) emailMailto.href = `mailto:${c.email || 'hello@example.com'}`;

    if (socialGrid && Array.isArray(c.socialLinks)) {
      socialGrid.innerHTML = c.socialLinks
        .map(
          item => `
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-card">
            <span class="social-name">${item.name} ↗</span>
            <span class="social-handle">${item.handle || item.url}</span>
          </a>
        `
        )
        .join('');
    }
  }

  /* ----------------------------------------------------------------------------
     11. FOOTER RENDERING
     ---------------------------------------------------------------------------- */
  function renderFooter() {
    const f = data.footer || {};
    const p = data.personal || {};

    const footerName = document.getElementById('footer-name');
    const footerColophon = document.getElementById('footer-colophon');
    const footerCopyright = document.getElementById('footer-copyright');

    if (footerName) footerName.textContent = p.name || 'Alex Rivera';
    if (footerColophon) footerColophon.textContent = f.colophon || 'Designed with editorial warmth • Built with clean HTML, CSS & Vanilla JS.';
    if (footerCopyright) {
      const currentYear = new Date().getFullYear();
      footerCopyright.textContent = f.copyrightText || `© ${currentYear} ${p.name || 'Alex Rivera'}. All rights reserved.`;
    }
  }

  /* ----------------------------------------------------------------------------
     12. INTERACTIVE CLOCK & TIMEZONE
     ---------------------------------------------------------------------------- */
  function initClock() {
    const clockEl = document.getElementById('local-clock-display');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      // Format: 08:30:15 AM EST (or local time)
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const tzStr = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
      clockEl.textContent = `${timeStr} (${tzStr}) • Open to Global & Remote`;
    }

    update();
    setInterval(update, 1000);
  }

  /* ----------------------------------------------------------------------------
     13. TOAST NOTICE & CLIPBOARD COPY
     ---------------------------------------------------------------------------- */
  window.showToast = function (message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  window.copyEmailAddress = function () {
    const email = (data.contact && data.contact.email) || 'hello@alexrivera.design';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        window.showToast(`Email copied: ${email}`);
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  };

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      window.showToast(`Email copied: ${text}`);
    } catch (err) {
      window.showToast(`Contact: ${text}`);
    }
    document.body.removeChild(textArea);
  }

  /* ----------------------------------------------------------------------------
     14. LIGHTBOX MODAL (EXPANDED PROJECT / POSTER VIEW)
     ---------------------------------------------------------------------------- */
  window.openLightbox = function (imgSrc, encodedTitle, encodedCategory, encodedDesc) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalTitle = document.getElementById('lightbox-title');
    const modalCategory = document.getElementById('lightbox-category');
    const modalDesc = document.getElementById('lightbox-desc');

    if (!modal) return;

    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = decodeURIComponent(encodedTitle || '');
    if (modalCategory) modalCategory.textContent = decodeURIComponent(encodedCategory || '');
    if (modalDesc) modalDesc.textContent = decodeURIComponent(encodedDesc || '');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.handleProjectClick = function (event, projId) {
    // If href is '#', trigger interactive lightbox view instead of reloading page
    const anchor = event.currentTarget;
    if (anchor.getAttribute('href') === '#' || !anchor.getAttribute('href')) {
      event.preventDefault();
      
      // Look up in projects or webDev
      let item = (data.projects || []).find(p => p.id === projId);
      if (!item && data.webDevSection && data.webDevSection.showcases) {
        item = data.webDevSection.showcases.find(w => w.id === projId);
      }
      
      if (item) {
        window.openLightbox(
          item.image,
          encodeURIComponent(item.title),
          encodeURIComponent(item.category || 'PROJECT SHOWCASE'),
          encodeURIComponent(item.description || '')
        );
      } else {
        window.showToast('Demo preview active!');
      }
    }
  };

  /* ----------------------------------------------------------------------------
     15. MOBILE MENU & BACKDROP INTERACTION
     ---------------------------------------------------------------------------- */
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!toggleBtn || !drawer || !backdrop) return;

    function toggleMenu() {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        backdrop.classList.remove('active');
        toggleBtn.classList.remove('active');
        document.body.style.overflow = '';
      } else {
        drawer.classList.add('open');
        backdrop.classList.add('active');
        toggleBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    toggleBtn.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        backdrop.classList.remove('active');
        toggleBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----------------------------------------------------------------------------
     16. STICKY NAV BLUR & ACTIVE SECTION TRACKING
     ---------------------------------------------------------------------------- */
  function initScrollBehavior() {
    const nav = document.getElementById('site-nav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      // Blur background on scroll
      if (nav) {
        if (scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }

      // Highlight active section in navigation
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { passive: true });
  }

  /* ----------------------------------------------------------------------------
     17. CONTACT FORM SUBMISSION
     ---------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = (document.getElementById('form-name') || {}).value || '';
      const email = (document.getElementById('form-email') || {}).value || '';
      const message = (document.getElementById('form-message') || {}).value || '';

      if (!name || !email || !message) {
        window.showToast('Please fill out all fields.');
        return;
      }

      // Send via mailto launcher or friendly success state
      const targetEmail = (data.contact && data.contact.email) || 'hello@alexrivera.design';
      const mailtoUrl = `mailto:${targetEmail}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

      window.showToast('Thank you! Opening your email client...');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

      form.reset();
    });
  }

  /* ----------------------------------------------------------------------------
     18. GSAP ENTRANCE & SCROLL ANIMATIONS
     ---------------------------------------------------------------------------- */
  function initAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('Reduced motion preferred. Skipping animations.');
      return;
    }

    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
      console.warn('GSAP is not loaded. Skipping animations gracefully.');
      return;
    }

    // Register ScrollTrigger if loaded
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Timeline Entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.0 } });
    
    heroTl
      .from('#hero-badge', { opacity: 0, y: 20, delay: 0.2 })
      .from('#hero-headline', { opacity: 0, y: 30, duration: 1.1 }, '-=0.7')
      .from('#hero-profession', { opacity: 0, y: 20 }, '-=0.8')
      .from('#hero-bio', { opacity: 0, y: 20 }, '-=0.8')
      .from('#hero-actions', { opacity: 0, y: 20 }, '-=0.7')
      .from('.portrait-card', { opacity: 0, scale: 0.94, duration: 1.2, ease: 'expo.out' }, '-=0.9');

    // Section reveal on scroll with ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      const animatedSections = [
        '#about',
        '#services',
        '#projects',
        '#graphic-design',
        '#web-dev',
        '#highlight-2026',
        '#contact'
      ];

      animatedSections.forEach(selector => {
        const sec = document.querySelector(selector);
        if (!sec) return;

        gsap.from(sec.querySelectorAll('.section-header, .service-card, .project-item-card, .gd-card, .browser-showcase-card, .contact-grid'), {
          scrollTrigger: {
            trigger: sec,
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out'
        });
      });
    }
  }

  /* ----------------------------------------------------------------------------
     19. INITIALIZATION
     ---------------------------------------------------------------------------- */
  function init() {
    applyTheme();
    renderNavigation();
    renderHero();
    renderAbout();
    renderServices();
    renderProjects();
    renderGraphicDesign();
    renderWebDev();
    renderHighlight2026();
    renderContact();
    renderFooter();

    initClock();
    initMobileMenu();
    initScrollBehavior();
    initContactForm();

    // Escape key closes lightbox
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        window.closeLightbox();
      }
    });

    // Slight delay for animations to allow clean DOM paint
    setTimeout(initAnimations, 100);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
