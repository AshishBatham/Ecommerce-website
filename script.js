// /* script.js - behavior for sidebar, accordion, modal, overlay, keyboard support */

// // Elements
// const sidebar = document.getElementById('sidebar');
// const overlay = document.getElementById('overlay');
// const openBtn = document.getElementById('openSidebar');  
// const closeBtn = document.getElementById('closeSidebar');
// const body = document.body;

// // Accordion (Jeans)
// const jeansTrigger = document.getElementById('jeansMenu');
// const jeansPanel = document.getElementById('jeansSubmenu'); 

// // Modal (newsletter)
// const modal = document.getElementById('newsletterModal');
// const openModalBtns = [document.getElementById('newsletterBtn')]; 
// const modalCloseBtn = modal ? modal.querySelector('.close-modal') : null; 


//   // Helpers
//   function openSidebar() {
//     sidebar.setAttribute('aria-hidden', 'false');
//     overlay.classList.add('active');
//     overlay.hidden = false;
//     body.classList.add('no-scroll');
//   }
//   function closeSidebar() {
//     sidebar.setAttribute('aria-hidden', 'true');
//     overlay.classList.remove('active');
//     overlay.hidden = true;
//     body.classList.remove('no-scroll');
//   }

//   openBtn && openBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     openSidebar();
//   });
//   closeBtn && closeBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     closeSidebar();
//   });

//   // overlay click closes sidebar or modal
//   overlay.addEventListener('click', function () {
//     closeSidebar();
//     closeModal();
//   });

//   // Accordion behavior
//   function openAccordion() {
//     jeansPanel.classList.add('open');
//     jeansTrigger.setAttribute('aria-expanded', 'true');
//   }
//   function closeAccordion() {
//     jeansPanel.classList.remove('open');
//     jeansTrigger.setAttribute('aria-expanded', 'false');
//   }
//   jeansTrigger.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     const expanded = jeansTrigger.getAttribute('aria-expanded') === 'true';
//     if (expanded) closeAccordion(); else openAccordion();
//   });

//   // Open accordion by default (same behavior as original code)
//   openAccordion();

//   // Modal functions
//   function openModal() {
//     if (!modal) return;
//     modal.setAttribute('aria-hidden', 'false');
//     overlay.classList.add('active');
//     overlay.hidden = false;
//     body.classList.add('no-scroll');
//   }
//   function closeModal() {
//     if (!modal) return;
//     modal.setAttribute('aria-hidden', 'true');
//     if (!sidebar || sidebar.getAttribute('aria-hidden') === 'true') {
//       overlay.classList.remove('active');
//       overlay.hidden = true;
//     }
//     body.classList.remove('no-scroll');
//   }

//   openModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     openModal();
//   }));

//   if (modalCloseBtn) {
//     modalCloseBtn.addEventListener('click', function () {
//       closeModal();
//     });
//   }

//   // Close with ESC key
//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//       closeSidebar();
//       closeModal();
//     }
//   });

//   // Accessibility: close modal when clicking outside modal content
//   if (modal) {
//     modal.addEventListener('click', function (ev) {
//       if (ev.target === modal) closeModal();
//     });
//   }

//   // Prevent focus from scrolling when overlay active (optional small improvement)
//   // (You can improve focus trap later if needed.)

//   // On small-screen navigation: if resized to desktop, ensure overlay hidden
//   window.addEventListener('resize', function () {
//     if (window.innerWidth > 820) {
//       overlay.classList.remove('active');
//       overlay.hidden = true;
//       sidebar.setAttribute('aria-hidden', 'false');
//       body.classList.remove('no-scroll');
//     } else {
//       // keep current states
//     }
//   });

// });
// script.js

const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
  sidebar.classList.toggle('open');  // Slide sidebar in/out
  overlay.classList.toggle('active'); // Show overlay
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}
