// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Scroll-spy for sticky nav
(function () {
  var sections = ['about', 'skills', 'experience', 'education', 'portfolio'];
  var navLinks = document.querySelectorAll('header .nav-link');

  function updateActive() {
    var scrollY = window.pageYOffset;
    var current = '';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop - 80 <= scrollY) current = id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();

// Dynamic age calculation
(function () {
  var birth = new Date(2000, 10, 24); // November 24, 2000
  var today = new Date();
  var age = today.getFullYear() - birth.getFullYear();
  if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
    age--;
  }
  var el = document.getElementById('age-value');
  if (el) el.textContent = age;
})();
