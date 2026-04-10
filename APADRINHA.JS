// -------------------------------
// Projeto: Apadrinhar e Salvar
// Funções: listar beneficiários, exibir perfil e simular apadrinhamento
// -------------------------------

// Lista de beneficiários (simulação de banco de dados)
const beneficiarios = [
  {id:1, nome:"Abel Muanza", nascimento:"12/04/2014", idade:10, descricao:"Gosta de futebol e sonha ser professor.", foto:"img/crianca1.jpg"},
  {id:2, nome:"Helena Mutumbe", nascimento:"25/09/2015", idade:9, descricao:"É curiosa, adora ler e quer ser médica.", foto:"img/crianca2.jpg"},
  {id:3, nome:"Carlos Alfredo", nascimento:"10/02/2013", idade:11, descricao:"Gostaria de estudar engenharia e ajudar a comunidade.", foto:"img/crianca3.jpg"},
  {id:4, nome:"Joana Fumo", nascimento:"03/11/2016", idade:8, descricao:"Gosta de desenhar e de contar histórias.", foto:"img/crianca4.jpg"},
  {id:5, nome:"Lucas Matola", nascimento:"08/06/2014", idade:10, descricao:"Sonha em ser jogador de futebol profissional.", foto:"img/crianca5.jpg"},
  {id:6, nome:"Ana Paulo", nascimento:"17/01/2012", idade:12, descricao:"Adora música e leitura.", foto:"img/crianca6.jpg"},
  {id:7, nome:"Mário Jamal", nascimento:"09/08/2013", idade:11, descricao:"Gosta de matemática e tecnologia.", foto:"img/crianca7.jpg"},
  {id:8, nome:"Renata Tete", nascimento:"02/12/2011", idade:13, descricao:"Sonha ser professora.", foto:"img/crianca8.jpg"},
  {id:9, nome:"David Mbale", nascimento:"19/03/2015", idade:9, descricao:"Gosta de artes manuais.", foto:"img/crianca9.jpg"},
  {id:10, nome:"Inês Chambal", nascimento:"05/05/2013", idade:11, descricao:"Destaca-se nas atividades esportivas.", foto:"img/crianca10.jpg"},
  {id:11, nome:"Rui Nhamtumbo", nascimento:"01/02/2014", idade:10, descricao:"Sonha ser bombeiro.", foto:"img/crianca11.jpg"},
  {id:12, nome:"Vânia Nacoto", nascimento:"29/10/2016", idade:8, descricao:"Ama dançar e participar de corais.", foto:"img/crianca12.jpg"},
  {id:13, nome:"Eduardo Bila", nascimento:"14/07/2012", idade:12, descricao:"É brincalhão e adora esportes.", foto:"img/crianca13.jpg"},
  {id:14, nome:"Nádia Massingue", nascimento:"21/09/2015", idade:9, descricao:"Gosta de literatura e animais.", foto:"img/crianca14.jpg"},
  {id:15, nome:"Tomás Machava", nascimento:"30/08/2011", idade:13, descricao:"Quer ser engenheiro civil.", foto:"img/crianca15.jpg"},
  {id:16, nome:"Cátia Nhantumbo", nascimento:"10/04/2016", idade:8, descricao:"Adora ler e brincar ao ar livre.", foto:"img/crianca16.jpg"},
  {id:17, nome:"Dário José", nascimento:"03/07/2013", idade:11, descricao:"Gosta de futebol e matemática.", foto:"img/crianca17.jpg"},
  {id:18, nome:"Beatriz Langa", nascimento:"12/11/2012", idade:12, descricao:"Deseja ser pediatra.", foto:"img/crianca18.jpg"},
  {id:19, nome:"Caio Ernesto", nascimento:"25/03/2015", idade:9, descricao:"Gosta de desenhar heróis.", foto:"img/crianca19.jpg"},
  {id:20, nome:"Glória Timane", nascimento:"06/06/2014", idade:10, descricao:"É sorridente e muito estudiosa.", foto:"img/crianca20.jpg"},
  {id:21, nome:"José Mucavele", nascimento:"19/09/2013", idade:11, descricao:"Sonha ser técnico de informática.", foto:"img/crianca21.jpg"},
  {id:22, nome:"Laura Chongo", nascimento:"15/12/2012", idade:12, descricao:"Quer ser professora de ciências.", foto:"img/crianca22.jpg"},
  {id:23, nome:"Pedro Ernesto", nascimento:"04/01/2015", idade:9, descricao:"Adora futebol e leitura.", foto:"img/crianca23.jpg"},
  {id:24, nome:"Márcia Nhanga", nascimento:"09/08/2016", idade:8, descricao:"Gosta de cantar e dançar.", foto:"img/crianca24.jpg"},
  {id:25, nome:"Simão Dinis", nascimento:"01/05/2014", idade:10, descricao:"Quer ser piloto de avião.", foto:"img/crianca25.jpg"}
];

// -------------------------------
// 1. Gerar lista no index.html (se existir)
// -------------------------------
if (document.getElementById("beneficiarios-lista")) {
  const container = document.getElementById("beneficiarios-lista");

  beneficiarios.forEach(b => {
    const card = document.createElement("div");
    card.className = "beneficiario";
    card.innerHTML = `
      <img src="${b.foto}" alt="${b.nome}">
      <h3>${b.nome}</h3>
      <p><strong>Data de nascimento:</strong> ${b.nascimento} — <strong>Idade:</strong> ${b.idade} anos</p>
      <p>${b.descricao}</p>
      <button onclick="verPerfil(${b.id})">Quero Apadrinhar</button>
    `;
    container.appendChild(card);
  });
}

// -------------------------------
// 2. Exibir perfil individual (beneficiario.html)
// -------------------------------
if (document.getElementById("perfil-beneficiario")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const perfil = beneficiarios.find(b => b.id === id);

  if (perfil) {
    document.getElementById("foto").src = perfil.foto;
    document.getElementById("nome").innerText = perfil.nome;
    document.getElementById("info").innerText = `Data de nascimento: ${perfil.nascimento} — ${perfil.idade} anos`;
    document.getElementById("descricao").innerText = perfil.descricao;

    document.getElementById("confirmar-apadrinhamento").addEventListener("click", () => {
      const valor = document.getElementById("valor-apadrinhamento").value;
      alert(`💚 Obrigado por apadrinhar ${perfil.nome}! Sua contribuição de ${valor} MZN fará uma grande diferença.`);
    });
  } else {
    document.getElementById("perfil-beneficiario").innerHTML = "<p>Beneficiário não encontrado.</p>";
  }
}

// -------------------------------
// 3. Funções globais
// -------------------------------
function verPerfil(id) {
  window.location.href = `beneficiario.html?id=${id}`;
}
