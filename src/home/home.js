import burger from './burger.png';

export default function getHome() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  function getMainHome() {
    const mainHome = document.createElement('article');
    const introduction = document.createElement('section');
    const restaurantHeading = document.createElement('h1');
    const introPara = document.createElement('p');
    const burgerImage = document.createElement('img');

    mainHome.setAttribute('id', 'mainHome');
    introduction.classList.add('introduction');
    burgerImage.classList.add('burger');
    restaurantHeading.classList.add('restaurantHeading');
    introPara.classList.add('introPara');

    burgerImage.src = burger;
    restaurantHeading.textContent = 'Star Bites';
    introPara.textContent =
      'Welcome to Star Bites, a culinary paradise that promises to take your taste buds on an extraordinary journey! Nestled in the heart of London, our restaurant is renowned for its exquisite flavors, warm ambiance, and unparalleled dining experience.';

    introduction.append(restaurantHeading, introPara);
    mainHome.append(introduction, burgerImage);

    return mainHome;
  }

  function GetInfo() {
    const info = document.createElement('article');
    const hours = document.createElement('section');
    const location = document.createElement('section');
    const hoursHeading = document.createElement('h2');
    const locationHeading = document.createElement('h2');
    const locationPara = document.createElement('p');
    const hourParas = [];
    for (let i = 0; i < 7; i++) {
      hourParas[i] = document.createElement('p');
    }

    info.setAttribute('id', 'info');
    hours.classList.add('hours');
    location.classList.add('location');

    locationHeading.textContent = 'Location';
    locationPara.innerHTML =
      'Star Bites is conveniently located at <span>221 B Baker Street</span>, in the vibrant heart of London. Our prime location ensures easy accessibility for both locals and visitors, making us the perfect destination for a delightful dining experience.';
    hoursHeading.textContent = 'Hours';
    hourParas[0].textContent = 'Monday: 6am - 6pm';
    hourParas[1].textContent = 'Tuesday: 6am - 6pm';
    hourParas[2].textContent = 'Wednesday: 6am - 6pm';
    hourParas[3].textContent = 'Thursday: 6am - 10pm';
    hourParas[4].textContent = 'Friday: 6am - 10pm';
    hourParas[5].textContent = 'Saturday: 8am - 10pm';
    hourParas[6].textContent = 'Sunday: 8am - 8pm';

    hours.append(hoursHeading, ...hourParas);
    location.append(locationHeading, locationPara);
    info.append(hours, location);

    return info;
  }
  content.append(getMainHome(), GetInfo());
}
