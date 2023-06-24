import bruschetta from './Bruschetta.png';
import artichoke from './Artichoke Dip.png';
import skewers from './Chicken Satay Skewers.png';

export default function getMenu() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';

  const appetizerHeading = document.createElement('h2');
  appetizerHeading.textContent = 'Appetizers';
  function getAppetizerSection() {
    const section = document.createElement('section');
    const menuCards = [];
    const menuCardsHeading = [];
    const menuCardsPara = [];
    const menuCardsDiv = [];
    const menuCardsPricePara = [];
    const menuCardsImg = [];
    for (let i = 0; i < 3; i++) {
      menuCards[i] = document.createElement('div');
      menuCards[i].classList.add('menu-card');

      menuCardsHeading[i] = document.createElement('h3');
      menuCardsPara[i] = document.createElement('p');
      menuCardsDiv[i] = document.createElement('div');
      menuCardsPricePara[i] = document.createElement('p');
      menuCardsImg[i] = document.createElement('img');

      menuCardsDiv[i].append(menuCardsPricePara[i], menuCardsImg[i]);
      menuCards[i].append(
        menuCardsHeading[i],
        menuCardsPara[i],
        menuCardsDiv[i]
      );
    }

    menuCardsHeading[0].textContent = 'Bruschetta';
    menuCardsHeading[1].textContent = 'Artichoke Dip';
    menuCardsHeading[2].textContent = 'Chicken Satay Skewers';

    menuCardsPara[0].textContent =
      'Toasted baguette slices topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.';
    menuCardsPara[1].textContent =
      'Creamy blend of spinach, artichoke hearts, and melted cheese, served with crispy tortilla chips.';
    menuCardsPara[2].textContent =
      'Grilled chicken skewers marinated in a flavorful blend of spices, accompanied by a tangy peanut sauce.';

    menuCardsPricePara[0].textContent = '3$';
    menuCardsPricePara[1].textContent = '5$';
    menuCardsPricePara[2].textContent = '6$';

    menuCardsImg[0].src = bruschetta;
    menuCardsImg[1].src = artichoke;
    menuCardsImg[2].src = skewers;

    section.append(...menuCards);

    return section;
  }

  content.append(menuHeading, appetizerHeading, getAppetizerSection());
}
