/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

var toggled = false;

const toggleDyslexia = () => {
  if (toggled) {
    document.querySelector('body').className = '';
  } else {
    document.querySelector('body').className = 'dyslexia-mode';
  }

  toggled = !toggled;
}

document.querySelector('#dyslexia-toggle').addEventListener('click', toggleDyslexia);