<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  // 1. Atualizar o ano automaticamente no footer
  const anoElemento = document.getElementById("ano");
  if (anoElemento) {
    anoElemento.textContent = new Date().getFullYear();
  }

  // 2. Intersection Observer para o efeito Fade-In
  // Este código detecta quando o usuário rola até a seção e a torna visível
  const observerOptions = {
    threshold: 0.15, // Ativa quando 15% do elemento estiver na tela
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Seleciona todos os elementos que devem "surgir"
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));

  // 3. Log de confirmação (opcional para teste)
  console.log("Site da Associação Luz Verde carregado com sucesso!");
});

(function () {
  const GAP = 16;
  const INTERVAL = 4000;

  const track     = document.querySelector('.carrossel-track');
  const slides    = document.querySelectorAll('.carr-slide');
  const container = document.querySelector('.carrossel-track-container');
  const dotsBox   = document.querySelector('.carr-dots');
  const btnPrev   = document.querySelector('.carr-prev');
  const btnNext   = document.querySelector('.carr-next');

  let current = 0;
  let timer   = null;

  function visible() { return window.innerWidth <= 900 ? 1 : 3; }
  function maxIdx()  { return slides.length - visible(); }

  function slideWidth() {
    return (container.offsetWidth - GAP * (visible() - 1)) / visible();
  }

  function goTo(n) {
    current = Math.max(0, Math.min(n, maxIdx()));
    const offset = current * (slideWidth() + GAP);
    track.style.transform = translateX(-${offset}px);
    document.querySelectorAll('.carr-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  function buildDots() {
    dotsBox.innerHTML = '';
    for (let i = 0; i <= maxIdx(); i++) {
      const d = document.createElement('button');
      d.className = 'carr-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => { goTo(i); resetTimer(); });
      dotsBox.appendChild(d);
    }
  }

  function startTimer() {
    timer = setInterval(() => goTo(current >= maxIdx() ? 0 : current + 1), INTERVAL);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  btnPrev.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  btnNext.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

  track.addEventListener('mouseenter', () => clearInterval(timer));
  track.addEventListener('mouseleave', startTimer);

  let touchX = 0;
  track.addEventListener('touchstart', e => touchX = e.touches[0].clientX);
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetTimer(); }
  });

  window.addEventListener('resize', () => { buildDots(); goTo(0); });

  // Iniciar com pequeno delay para garantir que o layout já foi calculado
  setTimeout(() => { buildDots(); goTo(0); startTimer(); }, 100);
})();
=======
// Atualiza automaticamente o ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ano").textContent = new Date().getFullYear();

  // Rolagem suave para os links do menu
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const destino = document.querySelector(link.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Alerta de confirmação para o botão "Aderir"
  const botaoAderir = document.getElementById("botao-aderir");
  if (botaoAderir) {
    botaoAderir.addEventListener("click", () => {
      alert("Obrigado por querer fazer parte da Associação Luz Verde! Em breve entraremos em contacto.");
    });
  }

  // Confirmação de envio do formulário
  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", event => {
      event.preventDefault(); // impede envio real, caso queira adaptar depois
      alert("Mensagem enviada com sucesso! Entraremos em contacto em breve.");
      formContato.reset(); // limpa os campos
    });
  }
});
<script>
  const images = document.querySelectorAll('.galeria-container img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const fechar = document.getElementById('fechar');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let indexAtual = 0;

  // abrir lightbox
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      indexAtual = index;
      lightbox.style.display = 'flex';
      mostrarImagem();
    });
  });

  // mostrar imagem atual
  function mostrarImagem() {
    lightboxImg.src = images[indexAtual].src;
  }

  // fechar
  fechar.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // anterior
  prev.addEventListener('click', () => {
    indexAtual = (indexAtual - 1 + images.length) % images.length;
    mostrarImagem();
  });

  // próximo
  next.addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % images.length;
    mostrarImagem();
  });

  // clicar fora da imagem fecha também
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
</script>

>>>>>>> d9dda94a2a8e3dd705c0e7f6bb5aa4c1362ac192
