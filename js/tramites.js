// document.addEventListener("DOMContentLoaded", function () {
//   // Función para toggleDropdown genérica
//   function toggleDropdown(listId, chevronId) {
//     const dropdown = document.getElementById(listId);
//     if (dropdown.classList.contains("max-h-0")) {
//       closeAllDropdowns(); // Cerrar todos los menús desplegables antes de abrir uno nuevo
//       dropdown.classList.remove("max-h-0");
//       dropdown.classList.add("max-h-96"); // Ajustar según el contenido
//       const chevronIcon = document.getElementById(chevronId);
//       chevronIcon.classList.add("rotate-180");
//     } else {
//       dropdown.classList.add("max-h-0");
//       dropdown.classList.remove("max-h-96");
//       const chevronIcon = document.getElementById(chevronId);
//       chevronIcon.classList.remove("rotate-180");
//     }
//   }

//   // Función para cerrar todos los menús desplegables
//   function closeAllDropdowns() {
//     const dropdowns = document.querySelectorAll(".max-h-96");
//     dropdowns.forEach((dropdown) => {
//       dropdown.classList.remove("max-h-96");
//       dropdown.classList.add("max-h-0");
//       const chevronIcon =
//         dropdown.previousElementSibling.querySelector(".fa-solid");
//       if (chevronIcon) {
//         chevronIcon.classList.remove("rotate-180");
//       }
//     });
//   }

//   // Eventos de clic para los títulos de menú
//   const dependenciaTitle = document.getElementById("dependenciaTitle");
//   dependenciaTitle.addEventListener("click", () =>
//     toggleDropdown("dependenciaList", "chevronIcon")
//   );

//   const estadoTitle = document.getElementById("estadoTitle");
//   estadoTitle.addEventListener("click", () =>
//     toggleDropdown("estadoList", "chevronIcon_2")
//   );

//   const costoTitle = document.getElementById("costoTitle");
//   costoTitle.addEventListener("click", () =>
//     toggleDropdown("costoList", "chevronIconCosto")
//   );

//   const estadoTramiteTitle = document.getElementById("estadoTramiteTitle");
//   estadoTramiteTitle.addEventListener("click", () =>
//     toggleDropdown("estadoTramiteList", "chevronIconEstadoTramite")
//   );
// });

// document.querySelectorAll(".toggle-button").forEach((button) => {
//   button.addEventListener("click", () => {
//     const list = button.nextElementSibling;
//     list.classList.toggle("hidden");
//   });
// });

// // experiencia
// // const easyArticle = document.getElementById("easy");
// // const difficultArticle = document.getElementById("difficult");

// // easyArticle.addEventListener("click", () => {
// //   easyArticle.querySelector("div").classList.add("bg-green-700", "text-white");
// //   difficultArticle
// //     .querySelector("div")
// //     .classList.remove("bg-red-700", "text-white");
// // });

// // difficultArticle.addEventListener("click", () => {
// //   difficultArticle
// //     .querySelector("div")
// //     .classList.add("bg-red-700", "text-white");
// //   easyArticle
// //     .querySelector("div")
// //     .classList.remove("bg-green-700", "text-white");
// // });
