/**
 * Coralhymn Website - Shared Navigation & Footer
 * Dynamically renders navbar and footer on all pages.
 * Usage: <div id="nav-placeholder" data-active="page-name"></div>
 *        <div id="footer-placeholder"></div>
 */
(function() {
  'use strict';

  const NAV_ITEMS = [
    { href: '/index.html#about', label: '关于', page: 'about' },
    { href: '/index.html#projects', label: '项目', page: 'projects' },
    { href: '/portfolio.html', label: '作品集', page: 'portfolio' },
    { href: '/index.html#skills', label: '技能', page: 'skills' },
    { href: '/index.html#contact', label: '联系', page: 'contact' },
    { href: '/dh.html', label: '软件', page: 'dh' },
    { href: 'https://github.com/CoralHymn', label: 'GitHub', page: 'github', external: true }
  ];

  function getNavHTML(activePage) {
    const isHomePage = activePage === 'home';
    const links = NAV_ITEMS.map(item => {
      const isActive = item.page === activePage;
      const target = item.external ? ' target="_blank"' : '';
      const activeClass = isActive ? ' class="active"' : '';
      // On homepage use simple anchors for smooth scroll; on other pages use full path
      let href = item.href;
      if (isHomePage && href.startsWith('/index.html#')) {
        href = '#' + href.split('#')[1];
      }
      return `<li><a href="${href}"${activeClass}${target}>${item.label}</a></li>`;
    }).join('\n            ');

    return `
    <nav class="navbar">
        <div class="logo"><a href="/index.html">CORALHYMN</a></div>
        <button class="mobile-menu-toggle">菜单 ☰</button>
        <ul class="nav-links">
            ${links}
        </ul>
    </nav>`;
  }

  function getFooterHTML() {
    return `
    <footer>
        <p>&copy; 2025-2026 Coralhymn | 琴海奶油</p>
    </footer>`;
  }

  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
      toggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        toggle.textContent = isActive ? '关闭 ×' : '菜单 ☰';
      });
    }

    // Close menu on link click (for single-page anchors)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const toggle = document.querySelector('.mobile-menu-toggle');
        if (toggle) toggle.textContent = '菜单 ☰';
      });
    });
  }

  // Render when DOM is ready
  function init() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) {
      const activePage = navPlaceholder.dataset.active || 'home';
      navPlaceholder.outerHTML = getNavHTML(activePage);
    }

    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = getFooterHTML();
    }

    initMobileMenu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
