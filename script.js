const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

const jeansAccordion = document.getElementById('jeansAccordion');

function toggleAccordion() {
  if (jeansAccordion.style.display === 'block') {
    jeansAccordion.style.display = 'none';
  } else {
    jeansAccordion.style.display = 'block';
  }
}

const newsletterModal = document.getElementById('newsletter');

function showNewsletter() {
  newsletterModal.style.display = 'block';
}

function hideNewsletter() {
  newsletterModal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === newsletterModal) {
    hideNewsletter();
  }
}

function logout() {
  alert('Logging out...');
}
