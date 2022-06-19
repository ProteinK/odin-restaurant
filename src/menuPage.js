export default function createMenuPage() {
  const main = document.createElement('div');
  main.classList.add('main');

  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  main.appendChild(h1);

  const ul = document.createElement('ul');
  ul.classList.add('menu');

  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.classList.add('menu-item');
    li.textContent = `Menu Item ${i}: $${i + 10}`;
    ul.appendChild(li);
  }

  main.appendChild(ul);

  return main;
}
