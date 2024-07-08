document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("loginModal").classList.add("hidden");
});

document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("loginModal")) {
    document.getElementById("loginModal").classList.add("hidden");
  }
});
