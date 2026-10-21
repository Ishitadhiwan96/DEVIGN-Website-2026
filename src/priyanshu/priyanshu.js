/* PRIYANSHU: mobile menu drawer */
(function () {
  'use strict';
  // 2. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileToggle && mobileDrawer && menuIcon) {
    mobileToggle.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        menuIcon.textContent = 'close';
      } else {
        mobileDrawer.classList.add('hidden');
        menuIcon.textContent = 'menu';
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        menuIcon.textContent = 'menu';
      });
    });
  }
})();
