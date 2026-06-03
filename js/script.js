/* Agroforte — vanilla JS animations */
(function(){
  const $ = (s, ctx=document) => ctx.querySelector(s);
  const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));

  //  =========== HUB DE ACESSIBILIDADE ===========
  const a11yToggle = $('#a11yToggle');
  const a11yPanel = $('#a11yPanel');
  const fontSizeSlider = $('#fontSizeSlider');
  const fontSizeValue = $('#fontSizeValue');
  const darkModeToggle = $('#darkModeToggle');

  if(a11yToggle){
    a11yToggle.addEventListener('click', () => {
      a11yPanel.classList.toggle('active');
    });
  }

  // Controle do tamanho da fonte com localStorage
  function initFontSize(){
    const savedSize = localStorage.getItem('agroforte-font-size');
    if(savedSize){
      document.documentElement.style.setProperty('--base-font-size', savedSize + 'px');
      if(fontSizeSlider) fontSizeSlider.value = savedSize;
      if(fontSizeValue) fontSizeValue.textContent = savedSize + 'px';
    } else {
      document.documentElement.style.setProperty('--base-font-size', '16px');
      if(fontSizeSlider) fontSizeSlider.value = 16;
      if(fontSizeValue) fontSizeValue.textContent = '16px';
    }
  }

  if(fontSizeSlider){
    fontSizeSlider.addEventListener('input', (e) => {
      const size = e.target.value;
      document.documentElement.style.setProperty('--base-font-size', size + 'px');
      if(fontSizeValue) fontSizeValue.textContent = size + 'px';
      localStorage.setItem('agroforte-font-size', size);
    });
  }

  // Alternar o modo escuro com localStorage
  function initDarkMode(){
    const savedDarkMode = localStorage.getItem('agroforte-dark-mode');
    if(savedDarkMode === 'true'){
      document.body.classList.add('dark-mode');
      if(darkModeToggle){
        darkModeToggle.textContent = 'Desativar';
        darkModeToggle.classList.add('active');
      }
    }else{
      document.body.classList.remove('dark-mode');
      if(darkModeToggle){
        darkModeToggle.textContent = 'Ativar';
        darkModeToggle.classList.remove('active');
      }
    }
  }

  if(darkModeToggle){
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      darkModeToggle.textContent = isDark ? 'Desativar' : 'Ativar';
      darkModeToggle.classList.toggle('active', isDark);
      localStorage.setItem('agroforte-dark-mode', isDark);
    });
  }

  // Text-to-Speech Com Web Speech API
  let speechSynth = window.speechSynthesis;
  let speechUtterance = null;
  let isPaused = false;
  let currentTextIndex = 0;
  let textElements = [];
  const ttsStart = $('#ttsStart');
  const ttsPause = $('#ttsPause');
  const ttsStop = $('#ttsStop');

  function getTextElements(){
    return Array.from(document.querySelectorAll('h1, h2, h3, h4, p, article, .big-text'))
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      })
      .map(el => el.textContent.trim())
      .filter(text => text.length > 0);
  }

  function speakNext(){
    if(currentTextIndex >= textElements.length){
      stopSpeech();
      return;
    }

    if(speechUtterance){
      speechSynth.cancel();
    }

    speechUtterance = new SpeechSynthesisUtterance(textElements[currentTextIndex]);
    speechUtterance.lang = 'pt-BR';
    speechUtterance.rate = 1;
    speechUtterance.pitch = 1;

    speechUtterance.onend = () => {
      currentTextIndex++;
      if(currentTextIndex < textElements.length && !isPaused){
        speakNext();
      }else{
        stopSpeech();
      }
    };

    speechUtterance.onerror = () => {
      currentTextIndex++;
      if(currentTextIndex < textElements.length && !isPaused){
        speakNext();
      }else{
        stopSpeech();
      }
    };

    speechSynth.speak(speechUtterance);
  }

  function startSpeech(){
    textElements = getTextElements();
    currentTextIndex = 0;
    isPaused = false;
    if(ttsStart) ttsStart.disabled = true;
    if(ttsPause) ttsPause.disabled = false;
    if(ttsStop) ttsStop.disabled = false;
    if(ttsPause) ttsPause.textContent = '⏸ Pausar';
    speakNext();
  }

  function pauseSpeech(){
    if(speechSynth.speaking){
      if(isPaused){
        speechSynth.resume();
        isPaused = false;
        if(ttsPause) ttsPause.textContent = '⏸ Pausar';
      }else{
        speechSynth.pause();
        isPaused = true;
        if(ttsPause) ttsPause.textContent = '▶ Continuar';
      }
    }
  }

  function stopSpeech(){
    speechSynth.cancel();
    speechUtterance = null;
    isPaused = false;
    currentTextIndex = 0;
    textElements = [];
    if(ttsStart) ttsStart.disabled = false;
    if(ttsPause) ttsPause.disabled = true;
    if(ttsStop) ttsStop.disabled = true;
    if(ttsPause) ttsPause.textContent = '⏸ Pausar';
  }

  if(ttsStart){
    ttsStart.addEventListener('click', startSpeech);
  }

  if(ttsPause){
    ttsPause.addEventListener('click', pauseSpeech);
  }

  if(ttsStop){
    ttsStop.addEventListener('click', stopSpeech);
  }

  initFontSize();
  initDarkMode();

  // Progress bar + nav scrolled
  const progress = $('#progress');
  const nav = $('.nav');
  const heroBg = $('.hero-bg');
  const impactBg = $('.impact-bg');

  function onScroll(){
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    progress.style.width = ((scrolled / max) * 100) + '%';
    nav.classList.toggle('scrolled', scrolled > 60);

    if(scrolled < window.innerHeight){
      const p = scrolled / window.innerHeight;
      heroBg.style.transform = `scale(${1.05 + p*0.08}) translateY(${p*60}px)`;
    }

    if(impactBg){
      const rect = impactBg.parentElement.getBoundingClientRect();
      const off = (rect.top * -0.15);
      impactBg.style.transform = `translateY(${off}px) scale(1.1)`;
    }

    updateHorizontal();
  }

  // Dividir texto em caracteres para animação de título
  $$('[data-split]').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    [...text].forEach((c, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = c === ' ' ? '\u00A0' : c;
      span.style.transitionDelay = (i * 0.012) + 's';
      el.appendChild(span);
    });
  });

  // Revelação de interseção
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });

  $$('.reveal, .reveal-section, [data-split]').forEach(el => io.observe(el));

  // Contadores animados
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const dur = 1800;
        const start = performance.now();
        const fmt = (n) => target >= 1000 ? Math.floor(n).toLocaleString('pt-BR') : Math.floor(n);
        function tick(now){
          const t = Math.min(1, (now - start)/dur);
          const eased = 1 - Math.pow(1-t, 3);
          el.textContent = fmt(eased * target);
          if(t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  $$('.num[data-count]').forEach(el => counterIO.observe(el));

  // Rolagem fixa horizontal
  const hSection = $('.horizontal');
  const hTrack = $('#hTrack');
  let hMax = 0;
  let hCurrent = 0;
  let hTarget = 0;
  function calcHorizontal(){
    if(!hTrack || window.innerWidth <= 780) return;
    hMax = hTrack.scrollWidth - window.innerWidth + 80;
  }
  function updateHorizontal(){
    if(!hSection || !hTrack || window.innerWidth <= 780) return;
    const rect = hSection.getBoundingClientRect();
    const total = hSection.offsetHeight - window.innerHeight;
    let progress = Math.min(1, Math.max(0, -rect.top / total));
    hTarget = -progress * hMax;
  }
  function hLoop(){
    hCurrent += (hTarget - hCurrent) * 0.12;
    if(hTrack && window.innerWidth > 780){
      hTrack.style.transform = `translate3d(${hCurrent}px,0,0)`;
    }
    requestAnimationFrame(hLoop);
  }
  hLoop();

  // Cursor Customizado
  const cursor = $('#cursor');
  let cx = window.innerWidth/2, cy = window.innerHeight/2;
  let tx = cx, ty = cy;
  window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  function loop(){
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  }
  loop();
  $$('a, .btn, .h-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width='44px'; cursor.style.height='44px'; cursor.style.background='rgba(201,168,76,.18)'; });
    el.addEventListener('mouseleave', () => { cursor.style.width='14px'; cursor.style.height='14px'; cursor.style.background='transparent'; });
  });

  window.addEventListener('resize', calcHorizontal);
  window.addEventListener('scroll', onScroll, { passive: true });
  calcHorizontal();
  onScroll();
})();
