/* =========================================================
   RM AESTHETIC — SCRIPT.JS
   Organizado por seção / funcionalidade.
   Nenhuma dependência externa (JavaScript puro).
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initHeroSlider();
  initReveal();
  initMethodCards();
  initResultCards();
  initDiferenciais();
  initTestimonials();
  initGallery();
  initCounters();
  initContactForm();
  initFAQ();
  initBackToTop();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   ÍCONES — pequeno sistema de ícones SVG inline (minimalistas)
--------------------------------------------------------- */
const ICONS = {
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4"/></svg>',
  wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 12c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"/><path d="M2 17c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 4c0 9-7 16-16 16 0-9 7-16 16-16z"/><path d="M4 20c4-4 8-8 16-16"/></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20M4.9 5l14.2 14M19.1 5 4.9 19M2 12h20"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  circleDot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/></svg>',
  facial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 4c4 0 7 3 7 7v3c0 3-2 5-3 5s-1-1-2-1-1 1-2 1c-2 0-4-2-4-5"/><path d="M8 10c0-1 .5-1.5 1-1.5M15 10c0-1 .5-1.5 1-1.5"/></svg>',
  syringe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M18 3l3 3M4 20l4-4M9 15l7-7 2 2-7 7-3 1zM13 5l3 3"/></svg>',
  waves2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="6" opacity=".6"/><circle cx="12" cy="12" r="10" opacity=".3"/></svg>',
  microneedle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 14l10-10 6 6-10 10H4v-6z"/><path d="M14 4l6 6"/></svg>',
  laser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v4M12 17v4M4 12h4M16 12h4"/><circle cx="12" cy="12" r="3"/></svg>',
  bubble: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="14" r="6"/><circle cx="17" cy="7" r="2.6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h12l3 5-9 13L3 8l3-5z"/><path d="M3 8h18M9 3l3 5 3-5M9 8l3 13 3-13"/></svg>',
  team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.8 1.8-5 4-5s4 2.2 4 5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"/></svg>',
};

/* ---------------------------------------------------------
   DADOS — Métodos / Procedimentos
--------------------------------------------------------- */
const METODOS = [
  { icon: 'syringe', image: 'img.botox.jpg', title: 'Botox', desc: 'Suavização de linhas de expressão com toxina botulínica de alta precisão, preservando a naturalidade dos movimentos.' },
  { icon: 'snow', image: 'img.criopolise.jpg', title: 'Criolipólise', desc: 'Redução de gordura localizada através do congelamento controlado das células adiposas, sem cirurgia.' },
  { icon: 'bolt', image: 'img.corrente.russa.jpg', title: 'Corrente Russa', desc: 'Estimulação elétrica muscular que tonifica e firma o corpo, aumentando a força e a definição.' },
  { icon: 'waves2', image: 'img.header3.png', title: 'Radiofrequência', desc: 'Estímulo térmico profundo que ativa colágeno e elastina, promovendo firmeza e viço à pele.' },
  { icon: 'spark', image: 'img.header.jpg', title: 'Bioestimuladores', desc: 'Substâncias injetáveis que reativam a produção natural de colágeno para um rejuvenescimento gradual.' },
  { icon: 'drop', image: 'img.header2.jpg', title: 'Preenchimento Facial', desc: 'Ácido hialurônico aplicado com técnica refinada para restaurar volume e harmonizar os contornos.' },
  { icon: 'circleDot', image: 'img.header3.png', title: 'Lipo Enzimática', desc: 'Enzimas que atuam na quebra de gordura localizada, remodelando a silhueta de forma gradual.' },
  { icon: 'facial', image: 'img.limpeza.pele.jpg', title: 'Limpeza de Pele', desc: 'Higienização profunda que remove impurezas e revitaliza a textura, devolvendo luminosidade à pele.' },
  { icon: 'waves2', image: 'img.header2.jpg', title: 'Drenagem Linfática', desc: 'Massagem terapêutica que estimula a circulação e reduz retenção de líquidos, aliviando o corpo.' },
  { icon: 'circleDot', image: 'img.header.jpg', title: 'Ultrassom Estético', desc: 'Ondas ultrassônicas que atuam em camadas profundas, remodelando e firmando os tecidos.' },
  { icon: 'bubble', image: 'img.header2.jpg', title: 'Carboxiterapia', desc: 'Aplicação de gás carbônico medicinal que melhora oxigenação, circulação e firmeza da pele.' },
  { icon: 'microneedle', image: 'img.microagulhamento.jpg', title: 'Microagulhamento', desc: 'Microlesões controladas que estimulam a regeneração celular e o colágeno, refinando a textura.' },
  { icon: 'laser', image: 'img.header3.png', title: 'Laser', desc: 'Tecnologia de precisão para tratamento de manchas, cicatrizes e rejuvenescimento da pele.' },
  { icon: 'gem', image: 'img.header2.jpg', title: 'Skinbooster', desc: 'Microinjeções de ácido hialurônico que hidratam profundamente, devolvendo viço e elasticidade.' },
];

const RESULTADOS = [
  { image: 'img.harm..webp', title: 'Harmonização Facial', desc: 'Contornos suavizados e simetria natural, respeitando as características únicas de cada rosto.' },
  { image: 'img.red.medidas.webp', title: 'Redução de Medidas', desc: 'Protocolo combinado de criolipólise e drenagem, com resultados visíveis a partir da 3ª sessão.' },
  { image: 'img.rejuv..jpeg', title: 'Rejuvenescimento', desc: 'Bioestimuladores e skinbooster trabalhando juntos para uma pele mais firme e luminosa.' },
  { image: 'img.pr.jpg', title: 'Pele Renovada', desc: 'Microagulhamento associado a laser para textura uniforme e poros refinados.' },
  { image: 'img.c.d.webp', title: 'Corpo Definido', desc: 'Corrente russa e radiofrequência corporal para tonificação e firmeza.' },
];

const TESTIMONIALS = [
  { name: 'Camila R.', role: 'Paciente há 3 anos', text: 'Me senti acolhida do início ao fim. Os resultados são naturais e a equipe é extremamente cuidadosa.' },
  { name: 'Fernanda A.', role: 'Paciente', text: 'A RM Aesthetic elevou o padrão do que eu esperava de uma clínica. Ambiente impecável, atendimento humano.' },
  { name: 'Juliana M.', role: 'Paciente', text: 'Tecnologia de ponta com um toque muito pessoal. Recomendo de olhos fechados.' },
  { name: 'Patrícia L.', role: 'Paciente', text: 'Nunca me senti insegura em nenhum procedimento. Profissionalismo do início ao fim.' },
  { name: 'Renata S.', role: 'Paciente', text: 'Resultados visíveis, discretos e naturais. Exatamente o que eu procurava.' },
];

const GALERIA = [
  { image: 'img.header.jpg', label: 'Recepção', h: 260 },
  { image: 'img.header2.jpg', label: 'Sala de Procedimentos', h: 320 },
  { image: 'img.header3.png', label: 'Suíte Sofisticada', h: 230 },
  { image: 'img.unhas.jpg', label: 'Área de Espera', h: 300 },
  { image: 'img.limpeza.pele.jpg', label: 'Consultório', h: 260 },
  { image: 'img.microagulhamento.jpg', label: 'Espaço Wellness', h: 340 },
  { image: 'img.botox.jpg', label: 'Detalhes', h: 240 },
  { image: 'img.criopolise.jpg', label: 'Ambiente Externo', h: 280 },
];

const DIFERENCIAIS = [
  { icon: 'gem', title: 'Equipamentos modernos' },
  { icon: 'team', title: 'Equipe especializada' },
  { icon: 'shield', title: 'Ambiente especializado' },
  { icon: 'circleDot', title: 'Protocolos exclusivos' },
  { icon: 'leaf', title: 'Resultados naturais' },
  { icon: 'heart', title: 'Atendimento personalizado' },
];

/* ---------------------------------------------------------
   HEADER — sombra ao rolar e navegação ativa
--------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');
  const sections = ['home', 'metodos', 'resultados', 'quem-somos', 'contato'];
  
  const updateActiveLink = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
    
    // Detectar seção visível
    let currentSection = 'home';
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el && el.getBoundingClientRect().top <= 150) {
        currentSection = section;
      }
    }
    
    // Atualizar links
    navLinks.forEach(link => {
      const href = link.getAttribute('href')?.slice(1);
      link.classList.toggle('active', href === currentSection);
    });
  };
  
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}


/* ---------------------------------------------------------
   MENU MOBILE
--------------------------------------------------------- */
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');

  const toggle = (open) => {
    const isOpen = open ?? !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', isOpen);
    btn.classList.toggle('is-active', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  btn.addEventListener('click', () => toggle());
  menu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });
}

/* ---------------------------------------------------------
   HERO SLIDER — troca automática a cada 3 minutos, com fade
--------------------------------------------------------- */
function initHeroSlider() {
  const slidesData = [
    'img.header.jpg',
    'img.header2.jpg',
    'img.microagulhamento.jpg',
    'img.botox.jpg'
  ];
  const slider = document.getElementById('heroSlider');
  const dotsWrap = document.getElementById('heroDots');

  slidesData.forEach((src, i) => {
    const el = document.createElement('div');
    el.className = 'hero__slide';
    el.style.backgroundImage = `url('${src}')`;
    if (i === 0) el.classList.add('is-active');
    slider.appendChild(el);

    const dot = document.createElement('button');
    dot.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = slider.querySelectorAll('.hero__slide');
  const dots = dotsWrap.querySelectorAll('.hero__dot');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    restart();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, 3000);
  }

  restart();
}

/* ---------------------------------------------------------
   SCROLL REVEAL — Intersection Observer
--------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
}

function revealOnScroll(selector) {
  const items = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ---------------------------------------------------------
   MÉTODOS — cards dinâmicos
--------------------------------------------------------- */
function initMethodCards() {
  const grid = document.getElementById('metodosGrid');
  grid.innerHTML = METODOS.map(m => `
    <article class="method-card">
      <div class="method-card__media">
        <img src="${m.image}" alt="${m.title}" class="method-card__img">
        <div class="method-card__stamp">${ICONS[m.icon]}</div>
      </div>
      <div class="method-card__body">
        <h3 class="method-card__title">${m.title}</h3>
        <p class="method-card__desc">${m.desc}</p>
        <a href="#contato" class="method-card__link">Saiba Mais &rarr;</a>
      </div>
    </article>
  `).join('');
  revealOnScroll('#metodosGrid .method-card');
}

/* ---------------------------------------------------------
   RESULTADOS — carrossel com autoplay
--------------------------------------------------------- */
function initResultCards(){
  const track = document.getElementById('resultadosTrack');
  track.innerHTML = RESULTADOS.map(r => `
    <article class="result-card">
      <div class="result-card__media">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
      </div>
      <div class="result-card__body">
        <h3 class="result-card__title">${r.title}</h3>
        <p class="result-card__desc">${r.desc}</p>
        <a href="#contato" class="result-card__btn">Saiba Mais</a>
      </div>
    </article>
  `).join('');

  setupAutoCarousel(track, document.getElementById('resPrev'), document.getElementById('resNext'), 320 + 26);
}

/* ---------------------------------------------------------
   DIFERENCIAIS — cards dinâmicos
--------------------------------------------------------- */
function initDiferenciais() {
  const grid = document.getElementById('diferenciaisGrid');
  grid.innerHTML = DIFERENCIAIS.map(d => `
    <div class="dif-card">
      <div class="dif-card__icon">${ICONS[d.icon]}</div>
      <h3 class="dif-card__title">${d.title}</h3>
    </div>
  `).join('');
  revealOnScroll('#diferenciaisGrid .dif-card');
}

/* ---------------------------------------------------------
   DEPOIMENTOS — carrossel com autoplay
--------------------------------------------------------- */
function initTestimonials() {
  const track = document.getElementById('depoimentosTrack');
  track.innerHTML = TESTIMONIALS.map(t => `
    <article class="testi-card">
      <div class="testi-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="testi-card__text">&ldquo;${t.text}&rdquo;</p>
      <div class="testi-card__author">
        <div class="testi-card__avatar"></div>
        <div>
          <div class="testi-card__name">${t.name}</div>
          <div class="testi-card__role">${t.role}</div>
        </div>
      </div>
    </article>
  `).join('');

  setupAutoCarousel(track, document.getElementById('depPrev'), document.getElementById('depNext'), 340 + 26);
}

/* ---------------------------------------------------------
   Utilitário genérico para carrosséis automáticos
--------------------------------------------------------- */
function setupAutoCarousel(track, prevBtn, nextBtn, step) {
  let timer;

  function scrollNext() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: step, behavior: 'smooth' });
    }
  }
  function scrollPrev() { track.scrollBy({ left: -step, behavior: 'smooth' }); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(scrollNext, 4500);
  }

  nextBtn.addEventListener('click', () => { scrollNext(); restart(); });
  prevBtn.addEventListener('click', () => { scrollPrev(); restart(); });
  track.addEventListener('mouseenter', () => clearInterval(timer));
  track.addEventListener('mouseleave', restart);

  restart();
}

/* ---------------------------------------------------------
   GALERIA + LIGHTBOX
--------------------------------------------------------- */
function initGallery() {
  const grid = document.getElementById('masonryGrid');
  grid.innerHTML = GALERIA.map((g, i) => `
    <div class="masonry__item" style="height:${g.h}px" data-index="${i}">
      <img src="${g.image}" alt="${g.label}" loading="lazy" style="height:100%; width:100%; object-fit:cover; display:block;">
      <span class="masonry__caption">${g.label}</span>
    </div>
  `).join('');

  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  let current = 0;

  function open(index) {
    current = index;
    render();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  function render() {
    const item = GALERIA[current];
    content.innerHTML = `<img src="${item.image}" alt="${item.label}" style="max-width:100%; max-height:90vh; display:block; margin:0 auto;">`;
  }
  function next() { current = (current + 1) % GALERIA.length; render(); }
  function prev() { current = (current - 1 + GALERIA.length) % GALERIA.length; render(); }

  grid.querySelectorAll('.masonry__item').forEach(item => {
    item.addEventListener('click', () => open(Number(item.dataset.index)));
  });

  document.getElementById('lightboxClose').addEventListener('click', close);
  document.getElementById('lightboxNext').addEventListener('click', next);
  document.getElementById('lightboxPrev').addEventListener('click', prev);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  revealOnScroll('#masonryGrid .masonry__item');
}

/* ---------------------------------------------------------
   CONTADORES ANIMADOS
--------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter__number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------
   FORMULÁRIO DE CONTATO
--------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contatoForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.style.color = '#B22222';
      return;
    }
    feedback.style.color = '#8a6a2f';
    feedback.textContent = 'Recebemos sua mensagem! Nossa equipe entrará em contato em breve.';
    form.reset();
  });
}

/* ---------------------------------------------------------
   VOLTAR AO TOPO
--------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------------------------------------------------
   FAQ — Acordeão interativo
--------------------------------------------------------- */
function initFAQ() {
  document.querySelectorAll('.faq__question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq__item');
      const isOpen = item.classList.contains('is-open');

      /* Fecha todas as outras perguntas */
      document.querySelectorAll('.faq__item').forEach((faqItem) => {
        faqItem.classList.remove('is-open');

        const faqButton = faqItem.querySelector('.faq__question');
        const faqIcon = faqItem.querySelector('.faq__icon');

        faqButton.setAttribute('aria-expanded', 'false');

        if (faqIcon) {
          faqIcon.textContent = '+';
        }
      });

      /* Abre a pergunta selecionada */
      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');

        const icon = button.querySelector('.faq__icon');

        if (icon) {
          icon.textContent = '-';
        }
      }
    });
  });
}
