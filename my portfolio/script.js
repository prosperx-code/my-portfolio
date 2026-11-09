// Loader
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 500);
  });

  const phrases = [
    "Front-End Developer",
    "HTML . CSS . JavaScript",
    "Completing your website at all cost"
  ];
  let pIndex = 0, cIndex = 0, deleting = false;
  const typedEl = document.getElementById('typed');
  function typeLoop(){
    const current = phrases[pIndex];
    if(!deleting){
      cIndex++;
      typedEl.textContent = current.slice(0, cIndex);
      if(cIndex === current.length){
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      cIndex--;
      typedEl.textContent = current.slice(0, cIndex);
      if(cIndex === 0){
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    document.getElementById('toTop').classList.toggle('show', window.scrollY > 500);
  });

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const revealEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        if(entry.target.classList.contains('skill-card')){
          const fill = entry.target.querySelector('.bar-fill');
          fill.style.width = entry.target.dataset.pct + '%';
        }
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => obs.observe(el));

  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.classList.add('show');
    form.reset();
    setTimeout(() => toast.classList.remove('show'), 2800);
  });

  document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });

  document.getElementById('year').textContent = new Date().getFullYear();

