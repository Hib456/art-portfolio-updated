/* =========================================================
   ELENA MARLOWE ART PORTFOLIO — SCRIPT
   Table of Contents:
   1. Sticky Header on Scroll
   2. Mobile Hamburger Menu
   3. Smooth Scrolling for Anchor Links
   4. Active Navigation Highlighting
   5. Scroll Reveal Animations
   6. Back to Top Button
   7. Gallery "View Artwork" Modal
   8. Contact Form Validation
   9. Footer Year
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ============ 1. STICKY HEADER ON SCROLL ============ */
  const siteHeader = document.getElementById('siteHeader');

  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll);


  /* ============ 2. MOBILE HAMBURGER MENU ============ */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');

  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (mainNav.classList.contains('open')) {
        toggleMenu();
      }
    });
  });


  /* ============ 3. SMOOTH SCROLLING FOR ANCHOR LINKS ============ */
  // Native `scroll-behavior: smooth` (in CSS) already covers most cases,
  // but we add a JS fallback with header-offset compensation.
  const headerHeight = () => siteHeader.offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length <= 1) return; // ignore bare "#"

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight() + 1;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });


  /* ============ 4. ACTIVE NAVIGATION HIGHLIGHTING ============ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveNav() {
    let currentSectionId = '';
    const scrollPos = window.scrollY + headerHeight() + 60;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav);
  highlightActiveNav();


  /* ============ 5. SCROLL REVEAL ANIMATIONS ============ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ============ 6. BACK TO TOP BUTTON ============ */
  const backToTopBtn = document.getElementById('backToTop');

  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ============ 7. GALLERY "VIEW ARTWORK" MODAL ============ */
  const artworkModal = document.getElementById('artworkModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalMedium = document.getElementById('modalMedium');
  const modalYear = document.getElementById('modalYear');
  const modalImage = document.getElementById('modalImage');
  const viewButtons = document.querySelectorAll('.view-btn');

  function openModal(title, medium, year, imageSrc, imageAlt) {
    modalTitle.textContent = title;
    modalMedium.textContent = 'Medium: ' + medium;
    modalYear.textContent = 'Year: ' + year;
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    artworkModal.classList.add('active');
    artworkModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    artworkModal.classList.remove('active');
    artworkModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  viewButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const cardImage = btn.closest('.gallery-card').querySelector('img');
      openModal(
        btn.getAttribute('data-title'),
        btn.getAttribute('data-medium'),
        btn.getAttribute('data-year'),
        cardImage.getAttribute('src'),
        cardImage.getAttribute('alt')
      );
    });
  });

  modalClose.addEventListener('click', closeModal);

  artworkModal.addEventListener('click', function (e) {
    if (e.target === artworkModal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && artworkModal.classList.contains('active')) {
      closeModal();
    }
  });


  /* ============ 8. CONTACT FORM VALIDATION ============ */
  const contactForm = document.getElementById('contactForm');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldState(field, errorEl, isValid, message) {
    const group = field.closest('.form-group');
    if (isValid) {
      group.classList.remove('invalid');
      errorEl.textContent = '';
    } else {
      group.classList.add('invalid');
      errorEl.textContent = message;
    }
  }

  function validateName() {
    const value = nameField.value.trim();
    const isValid = value.length >= 2;
    setFieldState(nameField, nameError, isValid, 'Please enter your name (min. 2 characters).');
    return isValid;
  }

  function validateEmail() {
    const value = emailField.value.trim();
    const isValid = emailPattern.test(value);
    setFieldState(emailField, emailError, isValid, 'Please enter a valid email address.');
    return isValid;
  }

  function validateMessage() {
    const value = messageField.value.trim();
    const isValid = value.length >= 10;
    setFieldState(messageField, messageError, isValid, 'Message should be at least 10 characters.');
    return isValid;
  }

  nameField.addEventListener('blur', validateName);
  emailField.addEventListener('blur', validateEmail);
  messageField.addEventListener('blur', validateMessage);

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
      // In a real project, this is where you'd send the data to a server.
      formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
      contactForm.reset();

      // Fade the success message out after a few seconds
      setTimeout(function () {
        formSuccess.textContent = '';
      }, 5000);
    } else {
      formSuccess.textContent = '';
    }
  });


  /* ============ 9. FOOTER YEAR ============ */
  document.getElementById('currentYear').textContent = new Date().getFullYear();

});
