const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

const headerSection = document.getElementById('header');

function elementInView(element) {
  var elementBounding = element.getBoundingClientRect();
  var elementTop = elementBounding.top;
  var elementBottom = elementBounding.bottom;

  isVisible = elementTop < window.innerHeight && elementBottom >= 0;
  return isVisible;
}

onscroll = () => {
  let bodyWidht = document.querySelector('body').clientWidth;

  if (bodyWidht <= 500) {
    document.querySelector('.nav-links').style.display = 'none';
    document.querySelector('.hamburger-menu-open').style.color = '#f5f3f4';
  }
  
  if (!elementInView(headerSection)) {
    if (bodyWidht <= 500) {
      document.getElementById('about').style.paddingTop = '8.5em';
    } else {
      document.getElementById('about').style.paddingTop = '9em';
    }
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
    document.querySelector('.hamburger-menu-open').style.color = '#f5f3f4';
  } else {
    document.querySelector('.nav-links').style.display = 'none';
    document.querySelector('.hamburger-menu-open').style.color = '#f5f3f4';
  }
};

// onresize = () => {
//   const bodyWidht = document.querySelector('body').clientWidth;
//   if (bodyWidht > 500) {
//     document.querySelector('.nav-links').style.display = 'flex';
//   } else {
//     document.querySelector('.nav-links').style.display = 'none';
//   }
// };
