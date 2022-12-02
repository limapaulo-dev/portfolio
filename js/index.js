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

const positionCosmos = (syntax, index, array) => {
  const syntaxOrbit = document.querySelector('.syntax-orbit');
  const syntaxOrbitStyles = window.getComputedStyle(syntaxOrbit);
  let orbitRadius = parseInt(syntaxOrbitStyles.getPropertyValue('width'));

  const bodyWidht = document.querySelector('body').clientWidth;
  const elementRadius = (360 / array.length) * index;

  let cosmostWidthEm = 2.5;

  if (bodyWidht <= 1025) {
    cosmostWidthEm = 2;
  } else if (bodyWidht <= 360) {
    cosmostWidthEm = 1.5;
  }

  const cosmostWidth = (orbitRadius * cosmostWidthEm) / 15;
  const posY = (Math.sin(radians(elementRadius)) * orbitRadius) / 2 + (cosmostWidth * 3) / 4 + orbitRadius * 0.24;
  const posX = (Math.cos(radians(elementRadius)) * orbitRadius) / 2 + (cosmostWidth * 3) / 4 + orbitRadius * 0.24;

  syntax.style.left = `${posX}px`;
  syntax.style.top = `${posY}px`;
};

const createSyntaxCosmos = (syntax, index, array) => {
  const syntaxOrbit = document.querySelector('.syntax-orbit');
  const syntaxOrbitStyles = window.getComputedStyle(syntaxOrbit);

  let animlength = parseInt(syntaxOrbitStyles.getPropertyValue('animation-duration'));
  const animDelay = index * (animlength / array.length);

  const cosmosDiv = document.createElement('Div');

  cosmosDiv.classList.add('syntax-cosmos');
  cosmosDiv.setAttribute('value', syntax.name);
  cosmosDiv.setAttribute('onclick', `showSyntaxInfo("${syntax.name}")`);

  cosmosDiv.style.animation = `cosmos-orbit-Z 40s linear infinite ${-animDelay}s`;

  const syntaxBlock = document.createElement('Div');
  syntaxBlock.classList.add('syntax-block');

  const syntaxContent = document.createElement('Div');
  syntaxContent.classList.add('syntax-content');
  syntaxContent.style.animation = `cosmos-orbit-around 40s linear infinite ${-animDelay}s`;

  const newImg = document.createElement('img');
  newImg.setAttribute('src', syntax.iconSrc);
  newImg.setAttribute('alt', syntax.name);

  const newP = document.createElement('p');
  newP.classList.add('primary');
  newP.innerHTML = syntax.name;

  syntaxContent.appendChild(newImg);
  syntaxContent.appendChild(newP);
  syntaxBlock.appendChild(syntaxContent);
  cosmosDiv.appendChild(syntaxBlock);

  document.querySelector('.syntax-orbit').appendChild(cosmosDiv);
};

const syntaxDataFetch = async () => {
  const syntaxDataRaw = await fetch('/data/syntaxData.json');
  const syntaxDataObj = await syntaxDataRaw.json();
  const syntaxData = syntaxDataObj['syntaxData'];
  syntaxData.map(createSyntaxCosmos);
  const syntaxCosmos = Array.from(document.querySelectorAll('.syntax-cosmos'));
  syntaxCosmos.map(positionCosmos);
};

const clearInfo = () => {
  document.querySelector('.syntax-info').innerHTML = '';
  document.querySelector('.syntax-info').innerHTML = '<a><span class="arrow">&#9650;</span>Click the Cosmos<span class="arrow">&#9650;</span></a>';
};

const showSyntaxInfo = async (syntaxName) => {
  document.querySelector('.syntax-info').classList.add('info-swap');

  const syntaxDataRaw = await fetch('/data/syntaxData.json');
  const syntaxDataObj = await syntaxDataRaw.json();
  const syntaxData = syntaxDataObj['syntaxData'];
  const filteredSyntaxArray = syntaxData.filter((syntaxObj) => syntaxObj.name === syntaxName);

  setTimeout(() => {
    document.querySelector('.syntax-info').innerHTML = '';

    const newA = document.createElement('a');
    newA.innerHTML = filteredSyntaxArray[0].name;
    newA.setAttribute('href', filteredSyntaxArray[0].info);
    newA.setAttribute('target', '_blank');

    const newInfoA = document.createElement('a');
    newInfoA.classList.add('info');
    newInfoA.innerHTML = 'i';
    newInfoA.setAttribute('href', filteredSyntaxArray[0].info);
    newInfoA.setAttribute('target', '_blank');

    document.querySelector('.syntax-info').appendChild(newA);
    document.querySelector('.syntax-info').appendChild(newInfoA);
  }, '1000');

  setTimeout(() => {
    document.querySelector('.syntax-info').classList.remove('info-swap');
  }, '2000');
};

const syntaxFilter = (obj, syntax) => {
  obj.name == syntax;
};

const modal = document.querySelector('.project-modal');
const modalCloseBtn = document.getElementsByClassName('.modal-close');

const showModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

window.onload = syntaxDataFetch;

window.onresize = () => {
  const bodyWidht = document.querySelector('body').clientWidth;

  const syntaxCosmos = Array.from(document.querySelectorAll('.syntax-cosmos'));
  syntaxCosmos.map(positionCosmos);

  if (bodyWidht >= 485) {
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
