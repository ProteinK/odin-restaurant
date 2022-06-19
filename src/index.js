import { renderHomePage, renderMenuPage, renderContactPage } from "./page";

renderHomePage();

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
  renderHomePage();
});
const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
  renderMenuPage();
});
const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
  renderContactPage();
});
