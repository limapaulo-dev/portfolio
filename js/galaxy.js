const createSyntaxCosmos = (syntax, index, array) => {
  const syntaxOrbit = document.querySelector('.syntax-orbit');
  const syntaxOrbitStyles = window.getComputedStyle(syntaxOrbit);

  let animlength = parseInt(syntaxOrbitStyles.getPropertyValue('animation-duration'));
  const animDelay = index * (animlength / array.length);

  const cosmosDiv = document.createElement('Div');

  cosmosDiv.classList.add('syntax-cosmos');
  cosmosDiv.setAttribute('value', syntax.name);
  cosmosDiv.setAttribute('onclick', `showSyntaxInfo("${syntax.name}")`);

  cosmosDiv.style.animation = `cosmos-orbit-Z 40s linear infinite ${-animDelay}s paused`;

  const syntaxBlock = document.createElement('Div');
  syntaxBlock.classList.add('syntax-block');

  const syntaxContent = document.createElement('Div');
  syntaxContent.classList.add('syntax-content');
  syntaxContent.style.animation = `cosmos-transition 40s linear infinite ${-animDelay}s paused`;

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

const positionSyntaxCosmos = (cosmos, index, array) => {
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

  cosmos.style.left = `${posX}px`;
  cosmos.style.top = `${posY}px`;
};

const animateSyntaxCosmos = (cosmos) => {
  cosmos.style.animationPlayState = 'running';
  cosmos.querySelector('.syntax-block').style.animationPlayState = 'running';
  cosmos.querySelector('.syntax-content').style.animationPlayState = 'running';
};

const animateOrbit = () => {
  const syntaxOrbit = document.querySelector('.syntax-orbit');
  syntaxOrbit.style.animationPlayState = 'running';
};

const setGalaxy = () => {
  const syntaxCosmos = Array.from(document.querySelectorAll('.syntax-cosmos'));
  syntaxCosmos.map(positionSyntaxCosmos);

  setTimeout(() => {
    syntaxCosmos.map(animateSyntaxCosmos);
    animateOrbit();
  }, 500);
}

const syntaxDataFetch = async () => {
  const syntaxDataRaw = await fetch('/data/syntaxData.json');
  const syntaxDataObj = await syntaxDataRaw.json();
  const syntaxData = syntaxDataObj['syntaxData'];
  syntaxData.map(createSyntaxCosmos);
  setGalaxy();
};

const clearSyntaxInfo = () => {
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