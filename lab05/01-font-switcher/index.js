var fontSizeDiv = 1.4;
var fontSizeH1 = 2;

const makeBigger = (event) => {
   document.querySelector('h1').style.fontSize = (fontSizeH1 + .1) + 'em';
   document.querySelector('div.content').style.fontSize = (fontSizeDiv + .1) + 'em';
   fontSizeDiv += .1;
   fontSizeH1 += .1;
   // alert('make bigger!');
};

const makeSmaller = () => {
   document.querySelector('h1').style.fontSize = (fontSizeH1 - .1) + 'em';
   document.querySelector('div.content').style.fontSize = (fontSizeDiv - .1) + 'em';
   fontSizeDiv -= .1;
   fontSizeH1 -= .1;
   // alert('make smaller!');
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

