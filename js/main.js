// Login Modal
document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginModal").classList.remove("hidden");
});

document
  .getElementById("closeLoginModal")
  .addEventListener("click", function () {
    document.getElementById("loginModal").classList.add("hidden");
  });

document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("loginModal")) {
    document.getElementById("loginModal").classList.add("hidden");
  }
});

// Mostrar el modal con animación de entrada
document.getElementById("registerBtn").addEventListener("click", function () {
  const modal = document.getElementById("registerModal");
  const modalContent = document.getElementById("modalContent");
  modal.classList.remove("hidden");
  modalContent.classList.remove("animate__bounceOutRight");
  modalContent.classList.add("animate_animated", "animate_bounceInLeft");  
});

// Cerrar el modal con animación de salida al hacer clic en "Cancelar"
document
  .getElementById("closeRegisterModal")
  .addEventListener("click", function () {
    closeModal();
  });

document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("registerModal")) {
    closeModal();
  }
});

function closeModal() {
  const modal = document.getElementById("registerModal");
  const modalContent = document.getElementById("modalContent");
  modalContent.classList.remove("animate__bounceInLeft");
  modalContent.classList.add("animate__bounceOutRight");

  modalContent.addEventListener("animationend", function handleAnimationEnd() {
    modal.classList.add("hidden");
    modalContent.classList.remove("animate__bounceOutRight");
    modalContent.removeEventListener("animationend", handleAnimationEnd);
  });
}

$(document).ready(function () {
  $(".slider__home").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    centerMode: true, // Añadido para centrar el slide activo
    centerPadding: "0", // Para evitar espacios alrededor del slide activo
    speed: 500, // Velocidad de la transición en milisegundos
    cssEase: "ease-in-out", // Tipo de animación
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
