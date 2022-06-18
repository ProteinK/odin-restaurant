export default function createHomePage(element) {
  // header
  const header = document.createElement('div');
  header.classList.add('header');

  const ul = document.createElement('ul');

  const homeButton = document.createElement('li');
  homeButton.id = 'home';
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('li');
  menuButton.id = 'menu';
  menuButton.textContent = 'Menu';

  const aboutButton = document.createElement('li');
  aboutButton.id = 'about';
  aboutButton.textContent = 'About';

  ul.appendChild(homeButton);
  ul.appendChild(menuButton);
  ul.appendChild(aboutButton);

  header.appendChild(ul);

  // main
  const main = document.createElement('div');
  main.classList.add('main');

  const h1 = document.createElement('h1');
  h1.textContent = "ProteinK's restaurant";
  main.appendChild(h1);

  const img = document.createElement('img');
  img.src = './restaurant.jpg';
  img.alt = 'restaurant';
  img.width = '400';
  main.appendChild(img);

  const p = document.createElement('p');
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Assumenda esse ab facilis ipsam enim, quasi illo cum`;
  main.appendChild(p);

  // footer
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Made by ProteinK @ 2022 for Odin Project';

  element.appendChild(header);
  element.appendChild(main);
  element.appendChild(footer);
}
