/**
 * Coralhymn Website - Main JavaScript
 * Handles loading screen (session-based), smooth scrolling,
 * active navigation highlighting, and software filter.
 */
(function() {
  'use strict';

  // ========== Loading Screen Logic ==========
  function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;

    const SESSION_KEY = 'coralhymn_animation_shown';
    const ANIMATION_DURATION = 4000; // 4 seconds

    // Check if animation was already shown in this session
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);

    if (!alreadyShown) {
      // First visit in this session - show animation
      sessionStorage.setItem(SESSION_KEY, 'true');

      setTimeout(() => {
        hideLoadingScreen(loadingScreen);
      }, ANIMATION_DURATION);
    } else {
      // Already shown in this session - skip animation
      hideLoadingScreen(loadingScreen);
    }

    // Safety timeout: force hide after 10 seconds
    setTimeout(() => {
      if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        hideLoadingScreen(loadingScreen);
      }
    }, 10000);
  }

  function hideLoadingScreen(loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 800); // Match CSS transition duration
  }

  // Global function for skip button
  window.skipLoading = function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      hideLoadingScreen(loadingScreen);
    }
  };

  // ========== Smooth Scroll for Anchor Links ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ========== Active Navigation Highlighting ==========
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length === 0) return;

    function highlightNav() {
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
  }

  // ========== Software Filter (for dh.html) ==========
  function initSoftwareFilter() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const softwareItems = document.querySelectorAll('.software-item');

    if (filterTabs.length === 0 || softwareItems.length === 0) return;

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        // Filter items
        softwareItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'grid';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ========== Portfolio Filter (for portfolio.html) ==========
  function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length === 0 || portfolioItems.length === 0) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Filter items
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ========== Initialize Everything ==========
  function init() {
    initLoadingScreen();
    initSmoothScroll();
    initActiveNav();
    initSoftwareFilter();
    initPortfolioFilter();

    console.log('🎨 Coralhymn website initialized');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
