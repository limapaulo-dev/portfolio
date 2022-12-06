function elementInView(element) {
  var elementBounding = element.getBoundingClientRect();
  var elementTop = elementBounding.top;
  var elementBottom = elementBounding.bottom;

  isVisible = elementTop < window.innerHeight && elementBottom >= 0;
  return isVisible;
}

const hamburgIconAnimate = (state) => {
  const line1 = document.querySelector('.hamburger-icon.line-1');
  const line2 = document.querySelector('.hamburger-icon.line-2');
  const line3 = document.querySelector('.hamburger-icon.line-3');

  if (state === '' || state === 'none') {
    line1.classList.add('close-line-1');
    line2.classList.add('close-line-2');
    line3.classList.add('close-line-3');
  } else if (state === 'flex') {
    line1.classList.remove('close-line-1');
    line2.classList.remove('close-line-2');
    line3.classList.remove('close-line-3');
  }
};

const hamburgIconSwap = () => {
  const navLinksDisplay = document.querySelector('.nav-links').style.display;

  if (navLinksDisplay === '' || navLinksDisplay === 'none') {
    hamburgIconAnimate(navLinksDisplay);
    document.querySelector('.nav-links').style.display = 'flex';
  } else {
    hamburgIconAnimate(navLinksDisplay);
    document.querySelector('.nav-links').style.display = 'none';
  }
};

const modal = document.querySelector('.project-modal');

const showModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

window.onload = () => {
  syntaxDataFetch();
  projectsDataFetch();
};

// if (document.querySelector('body').clientWidth < 485 && document.querySelector('.nav-links').style.display == 'flex') {
//   window.onscroll = () => {
//     console.log('is true');
//   };
// }

window.onresize = () => {
  const bodyWidth = document.querySelector('body').clientWidth;
  setGalaxy();

  if (bodyWidth >= 485) {
    document.querySelector('.nav-links').style.display = 'flex';
    // hamburgIconAnimate('flex');
  } else {
    hamburgIconAnimate('flex');
    document.querySelector('.nav-links').style.display = 'none';
  }
};

// window.onscroll = () => {

//   const bodyWidht = document.querySelector('body').clientWidth;

//   if (bodyWidht < 485 && document.querySelector('.nav-links').style.display == 'flex') {
//     document.querySelector('.nav-links').style.display = 'none';
//     hamburgIconAnimate('flex');
//   }
// };

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// const navIcons = [
//   {
//     iconName: 'contemplative',
//     src: 'img/png/contemplative.png',
//   },
//   {
//     iconName: 'crazyHappy',
//     src: 'img/png/crazyhappy.png',
//   },
//   {
//     iconName: 'crookedNeck',
//     src: 'img/png/crookedneck.png',
//   },
//   {
//     iconName: 'normalHappy',
//     src: 'img/png/normalhappy.png',
//   },
//   {
//     iconName: 'stunningBoyo',
//     src: 'img/png/stunningboyo.png',
//   },
// ];

// const navIconSwap = () => {
//   const currentNavIcon = document.querySelector('.nav-icon img').src;
//   const getRandIconSrc = () => navIcons[Math.floor(Math.random() * 4)].src;
//   let newIcon = getRandIconSrc();

//   while (currentNavIcon.endsWith(newIcon)) {
//     newIcon = getRandIconSrc();
//   }
//   document.querySelector('.nav-icon img').src = newIcon;

// }
