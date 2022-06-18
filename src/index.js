// pic by https://unsplash.com/photos/6pHiNI4qEnQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
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
