import burger from './burger.png';

export default function getHome() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  function getMainHome() {
    const mainHome = document.createElement('article');
    mainHome.setAttribute('id', 'mainHome');

    const introduction = document.createElement('section');
    introduction.classList.add('introduction');
    const restaurantHeading = document.createElement('h1');
    restaurantHeading.textContent = 'Star Bites';
    const introPara = document.createElement('p');
    introPara.textContent =
      'Welcome to Star Bites, a culinary paradise that promises to take your taste buds on an extraordinary journey! Nestled in the heart of London, our restaurant is renowned for its exquisite flavors, warm ambiance, and unparalleled dining experience.';
    introduction.append(restaurantHeading, introPara);

    const burgerImage = document.createElement('img');
    burgerImage.src = burger;
    mainHome.append(introduction, burgerImage);
    return mainHome;
  }

  content.appendChild(getMainHome());
}
