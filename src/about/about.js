export default function getAbout() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const aboutHeading = document.createElement('h1');
  aboutHeading.textContent = 'Contect us';

  content.append(aboutHeading);
}
