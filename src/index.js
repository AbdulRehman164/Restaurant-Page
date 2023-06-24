import getHome from './home/home';
import getMenu from './menu/menu';
import './style.css';

function navBar() {
  const navbar = document.querySelector('#navbar');
  const logoDiv = document.createElement('div');
  const optionsDiv = document.createElement('div');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const about = document.createElement('div');

  logoDiv.textContent = 'Star Bites';
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  about.textContent = 'About';

  logoDiv.classList.add('navItem');
  optionsDiv.classList.add('option', 'navItem');

  optionsDiv.append(home, menu, about);

  navbar.append(logoDiv, optionsDiv);

  function navigation() {
    // inital rendreing
    getHome();
    home.style.background = '#ffde73';
    home.style.color = 'chocolate';

    home.addEventListener('click', getHome);
    menu.addEventListener('click', getMenu);

    home.addEventListener('click', () => {
      menu.style.background = 'chocolate';
      menu.style.color = '#efae2d';
      home.style.background = '#ffde73';
      home.style.color = 'chocolate';
    });

    menu.addEventListener('click', () => {
      home.style.background = 'chocolate';
      home.style.color = '#efae2d';
      menu.style.background = '#ffde73';
      menu.style.color = 'chocolate';
    });
  }
  navigation();
}
navBar();
