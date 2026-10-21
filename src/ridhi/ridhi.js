/* RIDHI: event filters, lightbox, event modal, countdown */
(function () {
  'use strict';
  // 3. Event Category Filters
  const filterButtons = document.querySelectorAll('.event-filter-btn');
  const eventCards = document.querySelectorAll('.event-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'font-semibold');
        b.classList.add('text-blue-200/70');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'font-semibold');
      btn.classList.remove('text-blue-200/70');

      const cat = btn.getAttribute('data-category');
      eventCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Functional Image Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxDate = document.getElementById('lightbox-date');
  const lightboxClose = document.getElementById('lightbox-close');

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const caption = item.getAttribute('data-caption');
      const date = item.getAttribute('data-date');

      if (lightboxImg && lightboxCaption && lightboxDate && lightboxModal) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption || 'Moment';
        lightboxDate.textContent = date || '';
        lightboxModal.classList.remove('hidden');
        lightboxModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // 5. Event Details Modal Drawer
  const eventModal = document.getElementById('event-modal');
  const modalEventTitle = document.getElementById('modal-event-title');
  const modalEventDate = document.getElementById('modal-event-date');
  const modalEventMode = document.getElementById('modal-event-mode');
  const modalEventDesc = document.getElementById('modal-event-desc');
  const eventModalClose = document.getElementById('event-modal-close');
  const eventModalCancel = document.getElementById('event-modal-cancel');

  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const date = btn.getAttribute('data-date');
      const mode = btn.getAttribute('data-mode');
      const desc = btn.getAttribute('data-desc');

      if (modalEventTitle) modalEventTitle.textContent = title || 'Event Details';
      if (modalEventDate) modalEventDate.textContent = date || '';
      if (modalEventMode) modalEventMode.textContent = mode || 'Event Info';
      if (modalEventDesc) modalEventDesc.textContent = desc || '';

      if (eventModal) {
        eventModal.classList.remove('hidden');
        eventModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeEventModal() {
    if (eventModal) {
      eventModal.classList.add('hidden');
      eventModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (eventModalClose) eventModalClose.addEventListener('click', closeEventModal);
  if (eventModalCancel) eventModalCancel.addEventListener('click', closeEventModal);
  if (eventModal) {
    eventModal.addEventListener('click', (e) => {
      if (e.target === eventModal) closeEventModal();
    });
  }

  // Keyboard close for both modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeEventModal();
    }
  });

  // 7. Realtime countdown pill flicker
  const devconCount = document.getElementById('devcon-countdown');
  if (devconCount) {
    setInterval(() => {
      const now = new Date();
      const mins = 59 - now.getMinutes();
      const secs = 59 - now.getSeconds();
      devconCount.textContent = `78d 14h ${mins}m ${secs}s`;
    }, 1000);
  }
})();
