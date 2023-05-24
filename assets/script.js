const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const imgBannerElement = document.querySelector('.banner-img');
const pBannerElement = document.querySelector('#banner p');

let index = 0;

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

const changeValueElement = () => {
  //   imgBannerElement.src = './assets/images/slideshow/' + slides[index].image;
  // const arrayElement = slides[index];
  // const imgUrl = arrayElement.image;
  // const tagLine = arrayElement.tagLine;
  imgBannerElement.src = `./assets/images/slideshow/${slides[0].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;
};

arrowLeftElement.addEventListener('click', () => {
  index--;
  changeValueElement();
});

arrowRightElement.addEventListener('click', () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  changeValueElement();
});
