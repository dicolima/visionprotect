
  // MENU HAMBÚRGUER
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("navToggle");
    const menu = document.getElementById("navLinks");

    if (!btn || !menu) return;

    function toggleMenu() {
      const isOpen = menu.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", String(isOpen));
    }

    btn.addEventListener("click", toggleMenu);

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener("click", (e) => {
      const clickedInside = menu.contains(e.target) || btn.contains(e.target);
      if (!clickedInside) {
        menu.classList.remove("open");
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

