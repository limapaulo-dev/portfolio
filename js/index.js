const headerSection = document.getElementById('header');

function elementInView(element) {
  var elementBounding = element.getBoundingClientRect();
  var elementTop = elementBounding.top;
  var elementBottom = elementBounding.bottom;

  isVisible = elementTop < window.innerHeight && elementBottom >= 0;
  return isVisible;
}

// window.onscroll = () => {
//   let bodyWidth = document.querySelector('body').clientWidth;

//   if (bodyWidth <= 485) {
//     document.querySelector('.nav-links').style.display = 'none';
//     document.querySelector('.hamburger-menu-open').style.color = '#f5f3f4';
//   }
// };

const hamburgIconSwap = () => {
  const navLinksDisplay = document.querySelector('.nav-links').style.display;

  if (navLinksDisplay === '' || navLinksDisplay === 'none') {
    document.querySelector('.nav-links').style.display = 'flex';
    document.querySelector('.hamburger-menu-open').style.color = '#f5f3f4';
  } else {
    document.querySelector('.nav-links').style.display = 'none';
    document.querySelector('.hamburger-menu-open').style.color = '#f5f3f4';
  }
};

window.onresize = () => {
  const bodyWidht = document.querySelector('body').clientWidth;

  if (bodyWidht >= 485) {
    document.querySelector('.nav-links').style.display = 'flex';
  } else {
    document.querySelector('.nav-links').style.display = 'none';
  }
};

const sortStrArr = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
};

const syntaxOrbit = document.querySelector('.syntax-orbit');
const syntaxOrbitStyles = window.getComputedStyle(syntaxOrbit);
const animlength = parseInt(syntaxOrbitStyles.getPropertyValue('animation-duration'));

const createSyntaxCosmos = (syntax, index, array) => {
  const arraylength = array.length;

  const cosmosDiv = document.createElement('Div');
  cosmosDiv.classList.add('syntax-cosmos');
  cosmosDiv.setAttribute('value', syntax.name);
  cosmosDiv.setAttribute('onclick', `showSyntaxInfo("${syntax.name}")`);
  cosmosDiv.style.animationDelay = `${index * (animlength / arraylength)}s`;

  const syntaxDiv = document.createElement('Div');
  syntaxDiv.classList.add('syntax-block');

  const newImg = document.createElement('img');
  newImg.setAttribute('src', syntax.iconSrc);
  newImg.setAttribute('alt', syntax.name);

  const newP = document.createElement('p');
  newP.classList.add('primary');
  newP.innerHTML = syntax.name;

  syntaxDiv.appendChild(newImg);
  syntaxDiv.appendChild(newP);
  cosmosDiv.appendChild(syntaxDiv);

  document.querySelector('.fake-orbit').appendChild(cosmosDiv);
};

const syntaxDataFetch = async () => {
  const syntaxDataRaw = await fetch('/data/syntaxData.json');
  const syntaxDataObj = await syntaxDataRaw.json();
  const syntaxData = syntaxDataObj['syntaxData'];
  syntaxData.map(createSyntaxCosmos);
};

window.onload = syntaxDataFetch;

const syntaxFilter = (obj, syntax) => {
  obj.name == syntax;
};

const clearInfo = () => {
  document.querySelector('.syntax-info').innerHTML = '';
  document.querySelector('.syntax-info').innerHTML = '<a><span class="arrow">&#9650;</span>Click the Syntax<span class="arrow">&#9650;</span></a>';
};

const showSyntaxInfo = async (syntaxName) => {
  const syntaxDataRaw = await fetch('/data/syntaxData.json');
  const syntaxDataObj = await syntaxDataRaw.json();
  const syntaxData = syntaxDataObj['syntaxData'];
  const filteredSyntaxArray = syntaxData.filter((syntaxObj) => syntaxObj.name === syntaxName);

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
};

// Get the modal
const modal = document.querySelector('.project-modal');

// Get the <span> element that closes the modal
const modalCloseBtn = document.getElementsByClassName('.modal-close');

// When the user clicks on the button, open the modal

const showModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
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
