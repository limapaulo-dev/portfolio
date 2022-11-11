const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

const headerSection = document.getElementById('header');

function elementInView(element) {
  var elementBounding = element.getBoundingClientRect();
  var elementTop = elementBounding.top;
  var elementBottom = elementBounding.bottom;
  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible = elementTop < window.innerHeight && elementBottom >= 0;
  return isVisible;
}

onscroll = () => {
  const bodyWidht = document.querySelector('body').clientWidth;

  if (bodyWidht <= 500) {
    document.querySelector('.nav-links').style.display = 'none';
  }

  if (!elementInView(headerSection)) {
    document.getElementById('about').style.paddingTop = '10em';
    document.getElementById('navbar').style.overflow = 'hidden';
    document.getElementById('navbar').style.position = 'fixed';
    document.getElementById('navbar').style.top = 0;
  } else {
    document.getElementById('about').style.paddingTop = '5em';
    document.getElementById('navbar').style.overflow = '';
    document.getElementById('navbar').style.position = '';
    document.getElementById('navbar').style.top = '';
  }
};

hamburgIconSwap = () => {
  const navLinksDisplay = document.querySelector('.nav-links').style.display;
  if (navLinksDisplay === '' || navLinksDisplay === 'none') {
    document.querySelector('.nav-links').style.display = 'flex';
  } else {
    document.querySelector('.nav-links').style.display = 'none';
  }
};

onresize = () => {
  const bodyWidht = document.querySelector('body').clientWidth;
  if (bodyWidht > 500) {
    document.querySelector('.nav-links').style.display = 'flex';
  } else {
    document.querySelector('.nav-links').style.display = 'none';
  }
};
