export default function createContactPage() {
  const main = document.createElement('div');
  main.classList.add('main');

  const h1 = document.createElement('h1');
  h1.textContent = "Contact Us";
  main.appendChild(h1);

  const p = document.createElement('p');
  p.innerHTML = '<a href="https://github.com/ProteinK" target="_blank">ProteinK</a>';
  main.append(p);

  const h2 = document.createElement('h2');
  h2.textContent = 'Credit';
  main.append(h2);

  const p2 = document.createElement('p');
  p2.innerHTML = 'Image by <a href="https://unsplash.com/photos/6pHiNI4qEnQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank">Rick Barrett</a>';
  main.append(p2);

  return main;
}
