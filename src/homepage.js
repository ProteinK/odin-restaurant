export default function createHomePage() {
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

  return main;
}
