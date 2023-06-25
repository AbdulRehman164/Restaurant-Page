import holmes from './holmes.png';

export default function getAbout() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const aboutHeading = document.createElement('h1');
  aboutHeading.textContent = 'Contect us';

  function getElements() {
    const section = document.createElement('section');
    const infoDiv = document.createElement('div');
    const rolePara = document.createElement('p');
    const phonePara = document.createElement('p');
    const emailPara = document.createElement('p');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('p');

    section.classList.add('aboutCard');
    infoDiv.classList.add('infoDiv');
    imgDiv.classList.add('imgDiv');

    img.classList.add('aboutImg');
    infoDiv.append(rolePara, phonePara, emailPara);
    imgDiv.append(img, name);
    section.append(infoDiv, imgDiv);

    return {
      section,
      infoDiv,
      rolePara,
      phonePara,
      emailPara,
      imgDiv,
      img,
      name,
    };
  }

  function getHolmesSection() {
    const Elements = getElements();
    Elements.rolePara.textContent = 'Cheff';
    Elements.phonePara.textContent = 'Phone Nmber : 1234-5678-910';
    Elements.emailPara.textContent = 'Email : sherlockHolmes@bakerstret.com';
    Elements.img.src = holmes;
    Elements.name.textContent = 'Sherlock Holmes';

    return Elements.section;
  }

  content.append(aboutHeading, getHolmesSection());
}
