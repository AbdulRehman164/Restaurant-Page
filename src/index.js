import getHome from './home/home';
import getMenu from './menu/menu';
import './style.css';

function navigation() {
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
}
navigation();
