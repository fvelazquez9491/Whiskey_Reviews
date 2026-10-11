/**
 * WHISKEY REVIEWS - Interactive JavaScript
 * Handles navigation, responsive menu, real-time filtering, search,
 * and graceful image error fallback handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initImageFallbacks();
  initMobileNav();
  initWhiskeyFilters();
});

/**
 * Ensures that if any image fails to load, a graceful styled placeholder is displayed
 * rather than a broken-image icon.
 */
function initImageFallbacks() {
  const images = document.querySelectorAll('img');
  
  // Determine relative path to placeholder based on current URL path
  const isSubdirectory = window.location.pathname.includes('/reviews/');
  const fallbackSrc = isSubdirectory ? '../images/placeholder.svg' : 'images/placeholder.svg';

  images.forEach(img => {
    // If image already failed before event attached
    if (img.complete && img.naturalWidth === 0) {
      handleImageError(img, fallbackSrc);
    }

    img.addEventListener('error', function onError() {
      handleImageError(this, fallbackSrc);
    });
  });
}

function handleImageError(imgElement, fallbackSrc) {
  // Prevent infinite loops if fallback itself fails
  if (imgElement.dataset.fallbackApplied === 'true') {
    return;
  }
  imgElement.dataset.fallbackApplied = 'true';
  imgElement.src = fallbackSrc;
  imgElement.classList.add('img-fallback');
  if (!imgElement.alt) {
    imgElement.alt = 'Whiskey tasting glass illustration placeholder';
  }
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.main-nav');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && e.target !== toggleBtn) {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/**
 * Filter and Search Whiskies on the Landing Page
 */
function initWhiskeyFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('whiskeySearch');
  const cards = document.querySelectorAll('.review-card');
  const grid = document.querySelector('.reviews-grid');

  if (!cards.length) return; // Not on landing page

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category || '';
      const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const origin = (card.dataset.origin || '').toLowerCase();
      const excerpt = (card.querySelector('.card-excerpt')?.textContent || '').toLowerCase();
      const tags = (card.dataset.tags || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = !searchTerm ||
        title.includes(searchTerm) ||
        origin.includes(searchTerm) ||
        excerpt.includes(searchTerm) ||
        tags.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Handle "No results found" state
    let emptyState = document.getElementById('noResultsMessage');
    if (visibleCount === 0) {
      if (!emptyState && grid) {
        emptyState = document.createElement('div');
        emptyState.id = 'noResultsMessage';
        emptyState.style.gridColumn = '1 / -1';
        emptyState.style.textAlign = 'center';
        emptyState.style.padding = '3.5rem 1rem';
        emptyState.style.background = 'var(--bg-surface)';
        emptyState.style.borderRadius = 'var(--radius-md)';
        emptyState.style.border = '1px dashed var(--border-subtle)';
        emptyState.innerHTML = `
          <h3 style="font-family: var(--font-serif); color: var(--cream-bright); margin-bottom: 0.5rem;">No Whiskeys Found</h3>
          <p style="color: var(--cream-muted);">Try adjusting your search criteria or filter selection.</p>
        `;
        grid.appendChild(emptyState);
      }
    } else if (emptyState) {
      emptyState.remove();
    }
  }

  // Filter Buttons Click
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter || 'all';
      applyFilters();
    });
  });

  // Search Input Keyup
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}
