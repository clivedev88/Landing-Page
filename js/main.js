document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const options = {
  root: null,
  threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href').substring(1) === entry.target.id) {
                  link.classList.add('active');
              }
          });
          entry.target.classList.add('in-view');
      } else {
          entry.target.classList.remove('in-view');
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('progressBar').style.width = scrolled + "%";
}

document.getElementById('downloadResume').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text('Clive Kifumbi', 20, 20);
  doc.setFontSize(16);
  doc.text('Aspiring Software Engineer', 20, 30);

  doc.setFontSize(18);
  doc.text('Contact', 20, 40);
  doc.setFontSize(14);
  doc.text('+55 85 9 9991-7055', 20, 50);
  doc.text('clivekif@gmail.com', 20, 60);
  doc.text('1497, Gilberto Studart St., Fortaleza - CE (Brazil)', 20, 70);
  doc.text('https://clivedev88.github.io/Landing-Page/', 20, 80);

  doc.setFontSize(18);
  doc.text('Education', 20, 90);
  doc.setFontSize(14);
  doc.text('Bachelor\'s in Engineering, Federal University of Campina Grande (2009 - 2016)', 20, 100);
  doc.text('Graphic Design Course, Pixels Escola de Design (Dec 2022 - May 2024)', 20, 110);
  doc.text('Online Graduation in Systems Analysis and Development, Faculdade Estácio (2023 - 2025)', 20, 120);
  doc.text('Full Stack Programming Course, Infinity School (2023 - 2024)', 20, 130);

  doc.setFontSize(18);
  doc.text('Experience', 20, 140);
  doc.setFontSize(14);
  doc.text('Intern at JAR Construções Ltda (06/2013 - 07/2014)', 20, 150);
  doc.text('Field Supervisor at Concepto Ltda (06/2014 - 05/2016)', 20, 160);
  doc.text('Teacher at Wizard (2016 - 2020)', 20, 170);
  doc.text('Teacher at Effort Idiomas (2017)', 20, 180);
  doc.text('English Teacher at Espaço Aberto (2019)', 20, 190);
  doc.text('Pedagogical Coordinator at HUGLE Education (01/2020 - 07/2021)', 20, 200);
  doc.text('Private English and French Teacher (2022 - Present)', 20, 210);

  doc.setFontSize(18);
  doc.text('Skills', 20, 220);
  doc.setFontSize(14);
  doc.text('Python, HTML, CSS, JavaScript', 20, 230);
  doc.text('FLASK, Django, MySQL', 20, 240);
  doc.text('Adobe Creative Cloud (Illustrator, Photoshop, InDesign, After Effects, Animate, Adobe Premiere)', 20, 250);
  doc.text('3DsMax', 20, 260);

  doc.setFontSize(18);
  doc.text('Languages', 20, 270);
  doc.setFontSize(14);
  doc.text('English (Fluent)', 20, 280);
  doc.text('French (Native)', 20, 290);
  doc.text('Portuguese (Fluent)', 20, 300);
  doc.text('Lingala (Native)', 20, 310);
  doc.text('Swahili (Intermediate)', 20, 320);

  doc.save('Clive_Kifumbi_Resume.pdf');
});
