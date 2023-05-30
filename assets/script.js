const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const imgBannerElement = document.querySelector('.banner-img');
const pBannerElement = document.querySelector('#banner p');
const dotContainerElement = document.querySelector('.dots');

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
  imgBannerElement.src = `./assets/images/slideshow/${slides[index].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;
};

const changeBulletPointCss = () => {
  const dotsElement = document.querySelectorAll('.dot');
  dotsElement.forEach((coco, i) => {
    coco.classList.remove('dot_selected');
    if (i === index) {
      coco.classList.add('dot_selected');
    }
  });
};

for (let i = 0; i < slides.length; i++) {
  const dotElement = document.createElement('span');
  dotElement.classList.add('dot');
  if (index === i) {
    dotElement.classList.add('dot_selected');
  }

  dotElement.addEventListener('click', () => {
    index = i;
    changeValueElement();
    changeBulletPointCss();
  });

  dotContainerElement.appendChild(dotElement);
}

arrowLeftElement.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  changeValueElement();
  changeBulletPointCss();
});

arrowRightElement.addEventListener('click', () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  changeValueElement();
  changeBulletPointCss();
});
