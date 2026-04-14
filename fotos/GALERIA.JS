// ============================
// GALERIA DE FOTOGRAFIAS
// ============================

// Número total de fotos disponíveis
const totalFotos = 120; // pode aumentar para 200+
const pasta = "fotos/";

const galeria = document.getElementById("galeria");

// Gera automaticamente todas as imagens
for (let i = 1; i <= totalFotos; i++) {
  const img = document.createElement("img");
  img.src = `${pasta}foto${i}.jpg`;
  img.alt = `Foto ${i}`;
  galeria.appendChild(img);
}

// Interatividade do Lightbox
const imagens = document.querySelectorAll(".galeria-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const fechar = document.getElementById("fechar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let indexAtual = 0;

// Abrir imagem no lightbox
imagens.forEach((img, index) => {
  img.addEventListener("click", () => {
    indexAtual = index;
    mostrarImagem();
    lightbox.style.display = "flex";
  });
});

function mostrarImagem() {
  lightboxImg.src = imagens[indexAtual].src;
}

// Fechar lightbox
fechar.addEventListener("click", () => lightbox.style.display = "none");

// Navegação (anterior e próxima)
prev.addEventListener("click", () => {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem();
});

next.addEventListener("click", () => {
  indexAtual = (indexAtual + 1) % imagens.length;
  mostrarImagem();
});

// Fechar clicando fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
