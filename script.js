// ============================================================
// This file does two jobs:
// 1. RENDER — build the actual page content into the empty
//    mount points from index.html, using siteData (data.js).
// 2. BEHAVIOR — everything interactive: menu, typing effect,
//    animated counters, scroll reveals, live service search,
//    JS form validation, scroll progress bar.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    renderTopbar();
    renderNav();
    renderMobileMenu();
    renderHero();
    renderServices();
    renderAbout();
    renderProcess();
    renderCta();
    renderContactInfo();
    renderFooter();

    initMobileMenu();
    initTypingEffect();
    initScrollReveal();
    initCounterAnimation();
    initServiceSearch();
    initFormValidation();
    initScrollProgress();
    initBackToTop();
    initSmoothScroll();
});

// ---------- RENDER FUNCTIONS ----------

function renderTopbar() {
    const el = document.getElementById('topbar-mount');
    const b = siteData.business;
    const firstPhone = siteData.phones[0];
    el.innerHTML = `
        <div class="topbar">
            <div class="container topbar-inner">
                <span><i class="fa-solid fa-location-dot"></i> ${b.officeAddress}</span>
                <div class="top-right">
                    <a href="${firstPhone.href}"><i class="fa-solid fa-phone"></i> ${firstPhone.number}</a>
                    <a href="mailto:${b.email}"><i class="fa-solid fa-envelope"></i> ${b.email}</a>
                </div>
            </div>
        </div>`;
}

function renderNav() {
    const el = document.getElementById('navbar-mount');
    el.innerHTML = `<ul>${siteData.nav.map(item =>
        `<li><a href="${item.href}">${item.label}</a></li>`
    ).join('')}</ul>`;
}

function renderMobileMenu() {
    const el = document.getElementById('mobile-menu-mount');
    const serviceLinks = siteData.services.map(s => {
        const plainLabel = s.titleHtml.replace(/<[^>]*>/g, '').split(':')[0].trim();
        return `<li><a href="#${s.id}">${plainLabel}</a></li>`;
    }).join('');

    el.innerHTML = `
        <div id="mobile-menu">
            <ul>
                <li><a href="#top">Home</a></li>
                <li class="mobile-dropdown">
                    <button class="mobile-dropdown-toggle">Services <i class="fa-solid fa-angle-down"></i></button>
                    <ul class="mobile-submenu">${serviceLinks}</ul>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a class="mobile-quote" href="#OrderNow" onclick="alert('Please fill the form first')">Free Quote</a></li>
            </ul>
        </div>`;
}

function renderHero() {
    const el = document.getElementById('hero-mount');
    const h = siteData.hero;
    el.innerHTML = `
        <div class="hero-text">
            <span class="badge">${h.badge}</span>
            <h1 id="typed-heading"></h1>
            <p>${h.paragraph}</p>
            <div class="hero-buttons">
                <a href="#OrderNow" onclick="alert('Please fill the form first')" class="btn-primary">Get a Free Quote</a>
                <a href="${siteData.business.whatsapp}" class="btn-secondary" target="_blank" rel="noopener">WhatsApp Us</a>
            </div>
        </div>
        <div class="hero-card">
            <h3>Why Clients Choose Us</h3>
            <ul>${h.highlights.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('')}</ul>
        </div>`;
    // Store the heading text on the element so the typing effect can use it
    document.getElementById('typed-heading').dataset.fullText = h.heading;
}

function renderServices() {
    const el = document.getElementById('services-mount');
    const cards = siteData.services.map(s => `
        <div class="service-card" id="${s.id}" data-keywords="${s.keywords}">
            <i class="fa-solid ${s.icon}"></i>
            <h3>${s.titleHtml}</h3>
            <p>${s.description}</p>
        </div>`).join('');

    el.innerHTML = `
        <div class="section-title">
            <span>SERVICES</span>
            <h2>Find the Right Report for Your Competency Evaluation</h2>
            <p>Different skills assessments have different formats and expectations — we prepare reports built specifically for the one you need.</p>
        </div>
        <div class="service-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="service-search-input" placeholder="Type to filter services (e.g. 'new zealand', 'architect')...">
        </div>
        <div class="services-grid" id="services-grid">${cards}</div>
        <p id="no-results" class="no-results" style="display:none;">No services match that search.</p>`;
}

function renderAbout() {
    const el = document.getElementById('about-mount');
    const a = siteData.about;
    el.innerHTML = `
        <div>
            <span class="section-tag">ABOUT US</span>
            <h2>${a.heading}</h2>
            <p>${a.paragraph}</p>
            <ul class="check-list">${a.checklist.map(item => `<li><i class="fa-solid fa-circle-check"></i> ${item}</li>`).join('')}</ul>
        </div>
        <div class="stats-box">
            ${a.stats.map(s => `
                <div class="stat">
                    <h2><span class="counter" data-target="${s.value}">0</span>${s.suffix}</h2>
                    <p>${s.label}</p>
                </div>`).join('')}
        </div>`;
}

function renderProcess() {
    const el = document.getElementById('process-mount');
    el.innerHTML = `
        <div class="section-title">
            <span>OUR PROCESS</span>
            <h2>How We Prepare Your Report</h2>
        </div>
        <div class="process-grid">
            ${siteData.process.map((step, i) => `
                <div class="step">
                    <span>0${i + 1}</span>
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>`).join('')}
        </div>`;
}

function renderCta() {
    const el = document.getElementById('cta-mount');
    el.innerHTML = `
        <div class="container">
            <h2>${siteData.cta.heading}</h2>
            <p>${siteData.cta.paragraph}</p>
            <a href="#OrderNow" onclick="alert('Please fill the form first')" class="quote-btn">Get a Free Quote</a>
        </div>`;
}

function renderContactInfo() {
    const el = document.getElementById('contact-info-mount');
    const b = siteData.business;
    const phoneBoxes = siteData.phones.map(p => `
        <div class="info-box">
            <i class="fa-solid fa-phone"></i>
            <div><h3>${p.country}</h3><a href="${p.href}">${p.number}</a></div>
        </div>`).join('');

    el.innerHTML = `
        <div class="section-title" style="text-align:left; margin: 0 0 30px;">
            <span>CONTACT US</span>
            <h2>Get in Touch With Our Team</h2>
            <p>Have questions about your assessment pathway? We're here to help.</p>
        </div>
        <div class="info-box">
            <i class="fa-solid fa-location-dot"></i>
            <div><h3>Office</h3><p>${b.officeAddress}</p></div>
        </div>
        ${phoneBoxes}
        <div class="info-box">
            <i class="fa-solid fa-envelope"></i>
            <div><h3>Email</h3><a href="mailto:${b.email}">${b.email}</a></div>
        </div>`;
}

function renderFooter() {
    const el = document.getElementById('footer-mount');
    const f = siteData.footer;
    el.innerHTML = `
        <div class="container footer-grid">
            <div>
                <img src="images/logo.png" class="footer-logo" alt="CDRAustralia.Org">
                <p>${f.aboutHtml}</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <ul>${f.quickLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
            </div>
            <div>
                <h3>Connect With Us</h3>
                <div class="social-icons">
                    ${f.social.map(s => `<a href="${s.href}" target="_blank" rel="noopener"><i class="fab ${s.icon}"></i></a>`).join('')}
                </div>
            </div>
        </div>
        <div class="copyright">&copy; <span id="footer-year"></span> ${siteData.business.name} | All Rights Reserved.</div>`;
    document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// ---------- BEHAVIOR FUNCTIONS ----------

function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const submenu = btn.nextElementSibling;
            submenu.classList.toggle('open');
            const icon = btn.querySelector('i');
            icon.classList.toggle('fa-angle-down');
            icon.classList.toggle('fa-angle-up');
        });
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            const icon = toggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });
}

// Typing effect for the hero heading — types out the text character by character
function initTypingEffect() {
    const el = document.getElementById('typed-heading');
    const text = el.dataset.fullText;
    let i = 0;

    function type() {
        if (i <= text.length) {
            el.textContent = text.slice(0, i);
            i++;
            setTimeout(type, 22);
        } else {
            el.classList.add('typing-done');
        }
    }
    type();
}

// Fade-and-rise reveal for sections as they scroll into view
function initScrollReveal() {
    const targets = document.querySelectorAll('.service-card, .step, .stat, .hero-card');
    targets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));
}

// Animated count-up for the stats numbers, triggered once when scrolled into view
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const startTime = performance.now();

    function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target.toLocaleString();
        }
    }
    requestAnimationFrame(step);
}

// Live search box that filters the service cards by name or keyword
function initServiceSearch() {
    const input = document.getElementById('service-search-input');
    const cards = document.querySelectorAll('#services-grid .service-card');
    const noResults = document.getElementById('no-results');

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const keywords = card.dataset.keywords.toLowerCase();
            const match = text.includes(query) || keywords.includes(query);
            card.style.display = match ? '' : 'none';
            if (match) visibleCount++;
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
}

// Client-side validation on the visible fallback form before it would submit
// (kept lightweight since the real submission is handled by the EmailMeForm embed)
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        const name = form.querySelector('[name="name"]');
        const email = form.querySelector('[name="email"]');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valid = true;
        if (name.value.trim().length < 2) valid = false;
        if (!emailPattern.test(email.value.trim())) valid = false;

        if (!valid) {
            e.preventDefault();
            alert('Please enter a valid name and email address before submitting.');
        }
    });
}

// Thin progress bar across the top of the page that fills as you scroll
function initScrollProgress() {
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    });
}

function initBackToTop() {
    const btn = document.getElementById('topBtn');
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const targetId = anchor.getAttribute('href');
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}
