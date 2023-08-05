/* eslint-disable no-param-reassign */
import getHome from './home/home';
import getMenu from './menu/menu';
import getAbout from './about/about';
import './style.css';

function navBar() {
  const navbar = document.querySelector('#navbar');
  const logoDiv = document.createElement('div');
  const optionsDiv = document.createElement('div');
  const home = document.createElement('label');
  const menu = document.createElement('label');
  const about = document.createElement('label');

  home.setAttribute('for', 'home');
  menu.setAttribute('for', 'menu');
  about.setAttribute('for', 'about');

  logoDiv.textContent = 'Star Bites';
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  about.textContent = 'About';

  const navOptions = [home, menu, about];
  navOptions.forEach((option) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'nav-option';
    input.id = option.getAttribute('for');
    option.appendChild(input);
  });

  logoDiv.classList.add('navItem');
  optionsDiv.classList.add('option', 'navItem');

  optionsDiv.append(home, menu, about);

  navbar.append(logoDiv, optionsDiv);

  function navigation() {
    // initial Rendering
    getHome();

    const navInputs = document.querySelectorAll('input[name = "nav-option"]');
    navInputs.forEach((input) => {
      input.addEventListener('input', () => {
        navInputs.forEach((navInput) => {
          if (!navInput.checked) {
            document.querySelector(
              `label[for="${navInput.id}"]`
            ).style.background = '';
          } else {
            if (navInput.id === 'home') getHome();
            else if (navInput.id === 'about') getAbout();
            else getMenu();
            document.querySelector(
              `label[for="${navInput.id}"]`
            ).style.background = '#ffde73';
          }
        });
      });
    });
  }
  navigation();
}

function getFooter() {
  const footer = document.querySelector('#footer');
  footer.innerHTML = 'Copywright&copy; Abdul-Rehman';
}
navBar();
getFooter();
