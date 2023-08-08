const kotak = document.querySelector(".kotak");
const activePage = window.location.pathname;
const menu = document.querySelector(".menu");
const line = document.querySelector(".line-nav");
const exit = document.querySelector(".close");
const html = document.querySelector("html");
const link = document.querySelectorAll(".nav-link");
kotak.addEventListener("click", () => {
  menu.classList.toggle("slide");
  menu.classList.toggle("blank");
  document.body.classList.toggle("fixed");
  //   kotak.classList.toggle("hamburger-active");
});
window.onscroll = () => {
  const navbar = document.querySelector(".wraper-nav");
  const fixedNav = navbar.offsetTop;
  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};
exit.addEventListener("click", () => {
  menu.classList.toggle("slide");
  menu.classList.toggle("blank");
  document.body.classList.toggle("fixed");
});
// link.forEach((li) => {
//   if (li.href.includes(`${activePage}`)) {
//     li.classList.add("active");
//   }
//   li.addEventListener("click", () => {
//     menu.classList.remove("slide");
//     menu.classList.remove("blank");
//     document.body.classList.toggle("fixed");
//   });
// });
