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

// Register Modal
document.getElementById("registerBtn").addEventListener("click", function () {
  document.getElementById("registerModal").classList.remove("hidden");
});

document
  .getElementById("closeRegisterModal")
  .addEventListener("click", function () {
    document.getElementById("registerModal").classList.add("hidden");
  });

document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("registerModal")) {
    document.getElementById("registerModal").classList.add("hidden");
  }
});

$(document).ready(function () {
  $(".slider__home").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
