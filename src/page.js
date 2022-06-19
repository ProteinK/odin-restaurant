import createHomePage from "./homepage";
import createMenuPage from "./menuPage";
import createContactPage from "./contactPage";

const createHeader = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const ul = document.createElement('ul');

  const homeButton = document.createElement('li');
  homeButton.id = 'home';
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('li');
  menuButton.id = 'menu';
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('li');
  contactButton.id = 'contact';
  contactButton.textContent = 'Contact';

  ul.appendChild(homeButton);
  ul.appendChild(menuButton);
  ul.appendChild(contactButton);

  header.appendChild(ul);

  return header;
};

const createFooter = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Made by ProteinK @ 2022 for Odin Project';

  return footer;
};

// don't recreate these reusable elements
const header = createHeader();
const footer = createFooter();

export function renderHomePage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  header.querySelector('#home').classList.add('current');
  header.querySelector('#menu').classList.remove('current');
  header.querySelector('#contact').classList.remove('current');
  content.appendChild(header);
  content.appendChild(createHomePage());
  content.appendChild(footer);
}

export function renderMenuPage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  header.querySelector('#home').classList.remove('current');
  header.querySelector('#menu').classList.add('current');
  header.querySelector('#contact').classList.remove('current')
  content.appendChild(header);
  content.appendChild(createMenuPage());
  content.appendChild(footer);
}
export function renderContactPage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  header.querySelector('#home').classList.remove('current');
  header.querySelector('#menu').classList.remove('current');
  header.querySelector('#contact').classList.add('current')
  content.appendChild(header);
  content.appendChild(createContactPage());
  content.appendChild(footer);
}
