export default function getMenu() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';

  const appetizerHeading = document.createElement('h2');
  appetizerHeading.textContent = 'Appetizers';
  content.append(menuHeading, appetizerHeading);
}
