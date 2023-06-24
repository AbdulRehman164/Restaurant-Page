export default function getMenu() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';

  content.append(menuHeading);
}
