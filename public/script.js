/*    codigo pára abrir os botoes menu */ 
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sideMenu = document.querySelector(".side-menu");

    menuBtn.addEventListener("click", function () {
        sideMenu.classList.toggle("open");
    });
});

  
    // Gerar os dias do mês no calendário
    for (let i = 1; i <= 30; i++) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.textContent = i;
      dayElement.addEventListener('click', () => showDetails(i));
      daysContainer.appendChild(dayElement);
    }
  

 