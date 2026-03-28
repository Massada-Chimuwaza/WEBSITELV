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

