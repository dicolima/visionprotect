// Navegação ativa e rolagem suave
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll("nav ul li a")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Botão orçar já rola para contato
document.getElementById("btnOrcamento").addEventListener("click", () => {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
  document
    .querySelectorAll("nav ul li a")
    .forEach((l) => l.classList.remove("active"));
  document.querySelector('nav ul li a[href="#contato"]').classList.add("active");
});

// Feedback de formulário com reset e mensagem de sucesso
const formContato = document.getElementById("formContato");
const msgOk = document.getElementById("msg-ok");

formContato.addEventListener("submit", (e) => {
  e.preventDefault();
  msgOk.textContent = "Mensagem enviada! Entraremos em contato em breve.";
  setTimeout(() => {
    msgOk.textContent = "";
    formContato.reset();
  }, 4000);
});

// Destaque de menu automático baseado na rolagem
window.addEventListener("scroll", () => {
  const secoes = ["servicos", "depo", "contato"];
  const scrollY = window.scrollY + 120;

  for (let i = 0; i < secoes.length; i++) {
    const secao = document.getElementById(secoes[i]);
    if (!secao) continue;
    if (
      scrollY >= secao.offsetTop &&
      scrollY < secao.offsetTop + secao.offsetHeight
    ) {
      document
        .querySelectorAll("nav ul li a")
        .forEach((l) => l.classList.remove("active"));
      const link = document.querySelector(`nav ul li a[href="#${secoes[i]}"]`);
      if (link) link.classList.add("active");
      break;
    }
  }
});
