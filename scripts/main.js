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

// Language switcher
(function () {
  var translations = {
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.portfolio': 'Portfolio',
      'hero.subtitle': 'Embedded Software Developer at Giesecke + Devrient',
      'hero.download': 'Download CV',
      'hero.hire': 'Hire Me',
      'about.title': 'About Me',
      'about.text': 'I am Arnau Gris García, at 15 I discovered my passion on computing science when I was able to combine a game that I loved with programming, since then I have not stopped learning new things to improve every day in this field.',
      'bio.title': 'Bio',
      'bio.age': 'Age',
      'bio.email': 'Email',
      'bio.phone': 'Phone',
      'bio.address': 'Address',
      'skills.title': 'Professional Skills',
      'skills.programming': 'Programming',
      'skills.systems': 'Systems & Security',
      'skills.soft': 'Soft Skills',
      'languages.title': 'Languages',
      'languages.catalan': 'Catalan',
      'languages.spanish': 'Spanish',
      'languages.english': 'English',
      'languages.native': 'Native',
      'languages.professional': 'Professional (B2)',
      'exp.title': 'Work Experience',
      'exp.gd.role': 'Embedded Software Engineer',
      'exp.gd.at': 'at Giesecke & Devrient',
      'exp.gd.date': 'Feb, 2023 - Present',
      'exp.gd.li1': 'Development of embedded software for ARM-based microcontrollers using C/C++.',
      'exp.gd.li2': 'Implementation of OS features, drivers, and communication interfaces.',
      'exp.gd.li3': 'Application of Agile methodologies (Scrum) in cross-functional teams.',
      'exp.gd.li4': 'Creation of unit and integration tests using TDD principles.',
      'exp.gd.li5': 'Development of Java applets and related APIs.',
      'exp.gd.li6': 'Version control and collaboration using Git.',
      'exp.celler.role': 'Waiter and Web Developer',
      'exp.celler.at': 'at Celler de Badalona',
      'exp.celler.date': '2019 - 2023',
      'exp.celler.li1': 'Responsible for customer service, order management, and payment processing.',
      'exp.celler.li2': "Managed the restaurant's website, SSL certificate, and domain services.",
      'exp.celler.li3': 'Designed, developed, and maintained a responsive company website to enhance online presence: ',
      'exp.vp.role': 'CEO',
      'exp.vp.at': 'at VirtualPlanet',
      'exp.vp.date': '2015 - 2020',
      'exp.vp.li1': 'Created and managed a Minecraft hosting and gaming platform.',
      'exp.vp.li2': 'Designed the business model and digital marketing strategy.',
      'exp.vp.li3': 'Oversaw sales, customer support, and billing processes.',
      'exp.vp.li4': 'Administered Linux servers (Debian/Ubuntu), including firewall (IPTables/UFW) configuration.',
      'exp.vp.li5': 'Managed MySQL databases and implemented backend connections with JDBC.',
      'exp.vp.li6': 'Deployed and maintained dedicated servers and web infrastructure.',
      'exp.vp.web': 'Web: ',
      'exp.vol.role': 'Voluntary',
      'exp.vol.at': 'at Salesians de Badalona',
      'exp.vol.date': 'Jul, 2016 - Aug, 2016',
      'exp.vol.li1': 'In charge of a group of children on the summer course.',
      'edu.title': 'Education',
      'edu.cs.degree': 'Degree on Computer Science',
      'edu.cs.school': 'from Universitat de Barcelona',
      'edu.cs.desc': 'Computer Science degree where I learned about all CS branches: cybersecurity, ML, AI, web development...',
      'edu.cs.date': '2018 - 2022',
      'edu.master.degree': 'Master on Cybersecurity',
      'edu.master.school': 'at UPC',
      'edu.master.date': '2022 - 2025',
      'edu.thm.name': 'TryHackMe Penetration Testing Course',
      'edu.thm.date': '2022',
      'portfolio.title': 'Portfolio',
      'portfolio.celler.tech': 'Frontend / HTML / CSS / JavaScript',
      'portfolio.celler.title': 'Celler de badalona website',
      'portfolio.celler.desc': 'Basic website for the restaurant where I work. Simple design oriented to elder and adults',
      'portfolio.ubending.tech': 'Frontend / Backend / Python - Flask / Angular',
      'portfolio.ubending.title': 'Ubending demo website',
      'portfolio.ubending.desc': 'No-responsible web demo for a university project from fourth course, developed using agile and scrum methodologies with a group of university mates.',
      'portfolio.2sh.tech': 'Frontend / Backend / Web Development',
      'portfolio.2sh.title': '2SmartHome — Domótica en Barcelona',
      'portfolio.2sh.desc': 'Coorporative website for ',
      'portfolio.2sh.desc2': ', specialized business on SmartHome in Barcelona.'
    },
    ca: {
      'nav.about': 'Sobre mi',
      'nav.skills': 'Habilitats',
      'nav.experience': 'Experiència',
      'nav.education': 'Educació',
      'nav.portfolio': 'Portafoli',
      'hero.subtitle': 'Desenvolupador de Software Encastat a Giesecke + Devrient',
      'hero.download': 'Descarregar CV',
      'hero.hire': "Contacta'm",
      'about.title': 'Sobre mi',
      'about.text': "Sóc l'Arnau Gris García, als 15 anys vaig descobrir la meva passió per la informàtica quan vaig poder combinar un joc que m'encantava amb la programació, des d'aleshores no he parat d'aprendre coses noves per millorar cada dia en aquest camp.",
      'bio.title': 'Bio',
      'bio.age': 'Edat',
      'bio.email': 'Correu',
      'bio.phone': 'Telèfon',
      'bio.address': 'Adreça',
      'skills.title': 'Habilitats Professionals',
      'skills.programming': 'Programació',
      'skills.systems': 'Sistemes i Seguretat',
      'skills.soft': 'Habilitats Transversals',
      'languages.title': 'Idiomes',
      'languages.catalan': 'Català',
      'languages.spanish': 'Castellà',
      'languages.english': 'Anglès',
      'languages.native': 'Natiu',
      'languages.professional': 'Professional (B2)',
      'exp.title': 'Experiència Laboral',
      'exp.gd.role': 'Enginyer de Software Encastat',
      'exp.gd.at': 'a Giesecke & Devrient',
      'exp.gd.date': 'Feb, 2023 - Actualitat',
      'exp.gd.li1': 'Desenvolupament de software encastat per a microcontroladors ARM en C/C++.',
      'exp.gd.li2': 'Implementació de funcionalitats del SO, drivers i interfícies de comunicació.',
      'exp.gd.li3': 'Aplicació de metodologies Àgils (Scrum) en equips multidisciplinaris.',
      'exp.gd.li4': "Creació de proves unitàries i d'integració seguint principis TDD.",
      'exp.gd.li5': "Desenvolupament d'applets Java i APIs relacionades.",
      'exp.gd.li6': 'Control de versions i col·laboració amb Git.',
      'exp.celler.role': 'Cambrer i Desenvolupador Web',
      'exp.celler.at': 'al Celler de Badalona',
      'exp.celler.date': '2019 - 2023',
      'exp.celler.li1': "Responsable d'atenció al client, gestió de comandes i processament de pagaments.",
      'exp.celler.li2': 'Gestió de la web del restaurant, certificat SSL i serveis de domini.',
      'exp.celler.li3': "Disseny, desenvolupament i manteniment d'una web corporativa responsive: ",
      'exp.vp.role': 'CEO',
      'exp.vp.at': 'a VirtualPlanet',
      'exp.vp.date': '2015 - 2020',
      'exp.vp.li1': "Creació i gestió d'una plataforma d'allotjament Minecraft i jocs.",
      'exp.vp.li2': 'Disseny del model de negoci i estratègia de màrqueting digital.',
      'exp.vp.li3': 'Supervisió de vendes, atenció al client i facturació.',
      'exp.vp.li4': 'Administració de servidors Linux (Debian/Ubuntu), incloent configuració de tallafoc (IPTables/UFW).',
      'exp.vp.li5': 'Gestió de bases de dades MySQL i implementació de connexions backend amb JDBC.',
      'exp.vp.li6': 'Desplegament i manteniment de servidors dedicats i infraestructura web.',
      'exp.vp.web': 'Web: ',
      'exp.vol.role': 'Voluntari',
      'exp.vol.at': 'als Salesians de Badalona',
      'exp.vol.date': 'Jul, 2016 - Ago, 2016',
      'exp.vol.li1': "Encarregat d'un grup d'infants al curs d'estiu.",
      'edu.title': 'Educació',
      'edu.cs.degree': 'Grau en Informàtica',
      'edu.cs.school': 'per la Universitat de Barcelona',
      'edu.cs.desc': 'Grau en Informàtica on vaig aprendre sobre totes les branques: ciberseguretat, ML, IA, desenvolupament web...',
      'edu.cs.date': '2018 - 2022',
      'edu.master.degree': 'Màster en Ciberseguretat',
      'edu.master.school': 'a la UPC',
      'edu.master.date': '2022 - 2025',
      'edu.thm.name': 'Curs de Penetration Testing de TryHackMe',
      'edu.thm.date': '2022',
      'portfolio.title': 'Portafoli',
      'portfolio.celler.tech': 'Frontend / HTML / CSS / JavaScript',
      'portfolio.celler.title': 'Web del Celler de Badalona',
      'portfolio.celler.desc': 'Web bàsica per al restaurant on treballo. Disseny senzill orientat a persones grans i adults.',
      'portfolio.ubending.tech': 'Frontend / Backend / Python - Flask / Angular',
      'portfolio.ubending.title': "Web demo d'Ubending",
      'portfolio.ubending.desc': 'Demo web no responsive per a un projecte universitari de quart curs, desenvolupada amb metodologies àgils i Scrum amb un grup de companys universitaris.',
      'portfolio.2sh.tech': 'Frontend / Backend / Desenvolupament Web',
      'portfolio.2sh.title': '2SmartHome — Domòtica a Barcelona',
      'portfolio.2sh.desc': 'Web corporativa de ',
      'portfolio.2sh.desc2': ', empresa especialitzada en domòtica a Barcelona.'
    },
    es: {
      'nav.about': 'Sobre mí',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiencia',
      'nav.education': 'Educación',
      'nav.portfolio': 'Portafolio',
      'hero.subtitle': 'Desarrollador de Software Embebido en Giesecke + Devrient',
      'hero.download': 'Descargar CV',
      'hero.hire': 'Contáctame',
      'about.title': 'Sobre mí',
      'about.text': 'Soy Arnau Gris García, a los 15 años descubrí mi pasión por la informática cuando pude combinar un juego que me encantaba con la programación, desde entonces no he parado de aprender cosas nuevas para mejorar cada día en este campo.',
      'bio.title': 'Bio',
      'bio.age': 'Edad',
      'bio.email': 'Correo',
      'bio.phone': 'Teléfono',
      'bio.address': 'Dirección',
      'skills.title': 'Habilidades Profesionales',
      'skills.programming': 'Programación',
      'skills.systems': 'Sistemas y Seguridad',
      'skills.soft': 'Habilidades Blandas',
      'languages.title': 'Idiomas',
      'languages.catalan': 'Catalán',
      'languages.spanish': 'Castellano',
      'languages.english': 'Inglés',
      'languages.native': 'Nativo',
      'languages.professional': 'Profesional (B2)',
      'exp.title': 'Experiencia Laboral',
      'exp.gd.role': 'Ingeniero de Software Embebido',
      'exp.gd.at': 'en Giesecke & Devrient',
      'exp.gd.date': 'Feb, 2023 - Actualidad',
      'exp.gd.li1': 'Desarrollo de software embebido para microcontroladores ARM en C/C++.',
      'exp.gd.li2': 'Implementación de funcionalidades del SO, drivers e interfaces de comunicación.',
      'exp.gd.li3': 'Aplicación de metodologías Ágiles (Scrum) en equipos multidisciplinares.',
      'exp.gd.li4': 'Creación de pruebas unitarias y de integración siguiendo principios TDD.',
      'exp.gd.li5': 'Desarrollo de applets Java y APIs relacionadas.',
      'exp.gd.li6': 'Control de versiones y colaboración con Git.',
      'exp.celler.role': 'Camarero y Desarrollador Web',
      'exp.celler.at': 'en el Celler de Badalona',
      'exp.celler.date': '2019 - 2023',
      'exp.celler.li1': 'Responsable de atención al cliente, gestión de pedidos y procesamiento de pagos.',
      'exp.celler.li2': 'Gestión de la web del restaurante, certificado SSL y servicios de dominio.',
      'exp.celler.li3': 'Diseño, desarrollo y mantenimiento de una web corporativa responsive: ',
      'exp.vp.role': 'CEO',
      'exp.vp.at': 'en VirtualPlanet',
      'exp.vp.date': '2015 - 2020',
      'exp.vp.li1': 'Creación y gestión de una plataforma de hosting Minecraft y juegos.',
      'exp.vp.li2': 'Diseño del modelo de negocio y estrategia de marketing digital.',
      'exp.vp.li3': 'Supervisión de ventas, atención al cliente y facturación.',
      'exp.vp.li4': 'Administración de servidores Linux (Debian/Ubuntu), incluyendo configuración de firewall (IPTables/UFW).',
      'exp.vp.li5': 'Gestión de bases de datos MySQL e implementación de conexiones backend con JDBC.',
      'exp.vp.li6': 'Despliegue y mantenimiento de servidores dedicados e infraestructura web.',
      'exp.vp.web': 'Web: ',
      'exp.vol.role': 'Voluntario',
      'exp.vol.at': 'en los Salesians de Badalona',
      'exp.vol.date': 'Jul, 2016 - Ago, 2016',
      'exp.vol.li1': 'Responsable de un grupo de niños en el curso de verano.',
      'edu.title': 'Educación',
      'edu.cs.degree': 'Grado en Informática',
      'edu.cs.school': 'por la Universitat de Barcelona',
      'edu.cs.desc': 'Grado en Informática donde aprendí sobre todas las ramas: ciberseguridad, ML, IA, desarrollo web...',
      'edu.cs.date': '2018 - 2022',
      'edu.master.degree': 'Máster en Ciberseguridad',
      'edu.master.school': 'en la UPC',
      'edu.master.date': '2022 - 2025',
      'edu.thm.name': 'Curso de Penetration Testing de TryHackMe',
      'edu.thm.date': '2022',
      'portfolio.title': 'Portafolio',
      'portfolio.celler.tech': 'Frontend / HTML / CSS / JavaScript',
      'portfolio.celler.title': 'Web del Celler de Badalona',
      'portfolio.celler.desc': 'Web básica para el restaurante donde trabajo. Diseño sencillo orientado a personas mayores y adultos.',
      'portfolio.ubending.tech': 'Frontend / Backend / Python - Flask / Angular',
      'portfolio.ubending.title': 'Web demo de Ubending',
      'portfolio.ubending.desc': 'Demo web no responsive para un proyecto universitario de cuarto curso, desarrollada con metodologías ágiles y Scrum con un grupo de compañeros universitarios.',
      'portfolio.2sh.tech': 'Frontend / Backend / Desarrollo Web',
      'portfolio.2sh.title': '2SmartHome — Domótica en Barcelona',
      'portfolio.2sh.desc': 'Web corporativa de ',
      'portfolio.2sh.desc2': ', empresa especializada en domótica en Barcelona.'
    }
  };

  var pageTitles = {
    en: 'Arnau Gris Garcia — Embedded Software Engineer | CV & Portfolio',
    ca: 'Arnau Gris Garcia — Enginyer de Software Encastat | CV i Portafoli',
    es: 'Arnau Gris Garcia — Ingeniero de Software Embebido | CV y Portafolio'
  };

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    var t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = lang;
    document.title = pageTitles[lang] || pageTitles.en;
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('lang', lang);
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  var savedLang = localStorage.getItem('lang');
  if (!savedLang) {
    var navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('ca')) savedLang = 'ca';
    else if (navLang.startsWith('es')) savedLang = 'es';
    else savedLang = 'en';
  }
  setLanguage(savedLang);
})();
