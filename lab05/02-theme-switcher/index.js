/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultFunc = () => {
   document.querySelector('body').className = '';
}

const desertFunc = () => {
   document.querySelector('body').className = 'desert';
}

const oceanFunc = () => {
   document.querySelector('body').className = 'ocean';
}

const hcFunc = () => {
   document.querySelector('body').className = 'high-contrast';
}

document.querySelector('#default').addEventListener('click', defaultFunc);
document.querySelector('#desert').addEventListener('click', desertFunc);
document.querySelector('#ocean').addEventListener('click', oceanFunc);
document.querySelector('#high-contrast').addEventListener('click', hcFunc);