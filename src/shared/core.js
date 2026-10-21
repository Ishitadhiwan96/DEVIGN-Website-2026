/* SHARED: custom cursor + spotlight + 3D tilt */
(function () {
  'use strict';
  // 1. Kinetic Custom Cursor & Smooth Lerp Physics
  const cursorDot = document.getElementById('custom-cursor-dot');
  const cursorFollower = document.getElementById('custom-cursor-follower');
  const spotlight = document.getElementById('mouse-spotlight');

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let spotlightX = -100;
  let spotlightY = -100;
  let isPointerActive = false;

  const LERP_FOLLOWER = 0.16;
  const LERP_SPOTLIGHT = 0.08;

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isPointerActive) {
      isPointerActive = true;
      followerX = mouseX;
      followerY = mouseY;
      spotlightX = mouseX;
      spotlightY = mouseY;
      if (cursorDot) cursorDot.style.opacity = '1';
      if (cursorFollower) cursorFollower.style.opacity = '1';
      if (spotlight) spotlight.style.opacity = '1';
    }

    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }
  }

  function renderCursor() {
    if (isPointerActive) {
      followerX += (mouseX - followerX) * LERP_FOLLOWER;
      followerY += (mouseY - followerY) * LERP_FOLLOWER;

      spotlightX += (mouseX - spotlightX) * LERP_SPOTLIGHT;
      spotlightY += (mouseY - spotlightY) * LERP_SPOTLIGHT;

      if (cursorFollower) {
        cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      if (spotlight) {
        spotlight.style.transform = `translate3d(${spotlightX}px, ${spotlightY}px, 0) translate(-50%, -50%)`;
      }
    }
    requestAnimationFrame(renderCursor);
  }

  // Bind mouse move and leave events
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  document.addEventListener('mouseleave', () => {
    isPointerActive = false;
    if (cursorDot) cursorDot.style.opacity = '0';
    if (cursorFollower) cursorFollower.style.opacity = '0';
    if (spotlight) spotlight.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    isPointerActive = true;
    if (cursorDot) cursorDot.style.opacity = '1';
    if (cursorFollower) cursorFollower.style.opacity = '1';
    if (spotlight) spotlight.style.opacity = '1';
  });

  // Click down & release scale feedback
  window.addEventListener('mousedown', () => {
    if (cursorFollower) cursorFollower.classList.add('cursor-active');
    if (cursorDot) cursorDot.classList.add('cursor-active');
  });

  window.addEventListener('mouseup', () => {
    if (cursorFollower) cursorFollower.classList.remove('cursor-active');
    if (cursorDot) cursorDot.classList.remove('cursor-active');
  });

  // Attach hover animations to interactive targets dynamically
  function setupHoverTargets() {
    const hoverSelector = 'a, button, [role="button"], .gsap-tilt-card, .gallery-item, .event-filter-btn, .view-details-btn, input, textarea, select';
    const elements = document.querySelectorAll(hoverSelector);

    elements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorFollower) cursorFollower.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        if (cursorFollower) cursorFollower.classList.remove('cursor-hover');
      });
    });
  }

  setupHoverTargets();
  requestAnimationFrame(renderCursor);

  // 6. 3D Tilt Hover Effect
  const tiltCards = document.querySelectorAll('.gsap-tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
})();
