// Ticketmaster Clone - Vanilla JS

document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
  initSearch();
  initEventClicks();
});

/* ===== CAROUSELS ===== */
function initCarousels() {
  const containers = document.querySelectorAll('.carousel-container');

  containers.forEach(container => {
    const track = container.querySelector('.carousel-track');
    const prevBtn = container.querySelector('.carousel-btn.prev');
    const nextBtn = container.querySelector('.carousel-btn.next');

    if (!track || !prevBtn || !nextBtn) return;

    const scrollAmount = () => {
      const card = track.querySelector(':scope > *');
      return card ? card.offsetWidth + 12 : 280;
    };

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });

    // Hide/show buttons based on scroll position
    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.style.opacity = track.scrollLeft <= 10 ? '0.4' : '1';
      nextBtn.style.opacity = track.scrollLeft >= maxScroll - 10 ? '0.4' : '1';
    };

    track.addEventListener('scroll', updateButtons);
    updateButtons();
  });
}

/* ===== SEARCH ===== */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');

  if (!searchInput) return;

  const doSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
      // Placeholder: later connect to Supabase or filter events
      alert(`Searching for: "${query}"\n\n(This will connect to Supabase later)`);
    }
  };

  searchBtn?.addEventListener('click', doSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

/* ===== EVENT CLICKS ===== */
function initEventClicks() {
  // Featured list items
  document.querySelectorAll('.event-list-item').forEach(item => {
    item.addEventListener('click', () => {
      const name = item.querySelector('.event-name')?.textContent;
      // Later: navigate to event detail page
      console.log('Clicked event:', name);
    });
  });

  // Carousel cards
  document.querySelectorAll('.carousel-card, .event-card, .presale-card, .guide-card, .discover-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title, .event-card-title, .presale-title, h3')?.textContent;
      console.log('Clicked card:', title);
    });
  });
}

/* ===== HELPER: Smooth scroll to section (optional) ===== */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
