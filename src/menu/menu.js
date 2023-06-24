import bruschetta from './Bruschetta.png';
import artichoke from './Artichoke Dip.png';
import skewers from './Chicken Satay Skewers.png';

export default function getMenu() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';

  function getMenuCards() {
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
    return {
      menuCards,
      menuCardsHeading,
      menuCardsPara,
      menuCardsDiv,
      menuCardsPricePara,
      menuCardsImg,
    };
  }

  const appetizerHeading = document.createElement('h2');
  appetizerHeading.textContent = 'Appetizers';
  function getAppetizerSection() {
    const section = document.createElement('section');

    const card = getMenuCards();

    card.menuCardsHeading[0].textContent = 'Bruschetta';
    card.menuCardsHeading[1].textContent = 'Artichoke Dip';
    card.menuCardsHeading[2].textContent = 'Chicken Satay Skewers';

    card.menuCardsPara[0].textContent =
      'Toasted baguette slices topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.';
    card.menuCardsPara[1].textContent =
      'Creamy blend of spinach, artichoke hearts, and melted cheese, served with crispy tortilla chips.';
    card.menuCardsPara[2].textContent =
      'Grilled chicken skewers marinated in a flavorful blend of spices, accompanied by a tangy peanut sauce.';

    card.menuCardsPricePara[0].textContent = '3$';
    card.menuCardsPricePara[1].textContent = '5$';
    card.menuCardsPricePara[2].textContent = '6$';

    card.menuCardsImg[0].src = bruschetta;
    card.menuCardsImg[1].src = artichoke;
    card.menuCardsImg[2].src = skewers;

    section.append(...card.menuCards);

    return section;
  }

  const mainCourseHeading = document.createElement('h2');
  mainCourseHeading.textContent = 'Main Courses';

  content.append(
    menuHeading,
    appetizerHeading,
    getAppetizerSection(),
    mainCourseHeading
  );
}