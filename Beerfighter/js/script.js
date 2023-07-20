let phrases = [
    { image1: 'img/beer/natakhtari.jpg', image2: 'img/face/1.jpg' },
    { image1: 'img/beer/kayaki.png', image2: 'img/face/2.jpg' },
    { image1: 'img/beer/ezossiesta.jpg', image2: 'img/face/3.jpg' },
    { image1: 'img/beer/beer.jpg', image2: 'img/face/4.jpg' },
    { image1: 'img/beer/kazbegi.jpg', image2: 'img/face/5.jpg' },
    { image1: 'img/beer/kazbegi.jpg', image2: 'img/face/6.jpg' },
  ];
  
function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
let button = document.querySelector('.button');
let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
  
button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(image1, 'src', randomElement.image1);
    smoothly(image2, 'src', randomElement.image2);
    });

for (let i = 0; i <= 2; i = i + 1) {
    smoothly(image1, 'src', phrases[i].image1);
    smoothly(image2, 'src', phrases[i].image2);
    }