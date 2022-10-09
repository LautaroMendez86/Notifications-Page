const $card = document.querySelectorAll(".active"),
  $leer = document.querySelectorAll(".leer"),
  $numero = document.querySelector(".numero");

document.addEventListener("click", (e) => {
  if (e.target.matches(".mark")) {
    $card.forEach((el) => {
      el.classList.remove("active");
    });
    $leer.forEach((el) => {
      el.classList.remove("leer");
    });

    $numero.textContent = 0;
  }
});
