const calcNumbParticles = () => {
  let bodyWidth = document.querySelector('body').clientWidth;

  if (bodyWidth <= 500) {
    return 170;
  } else if (bodyWidth <= 1000) {
    return 200;
  } else if (bodyWidth <= 1500) {
    return 225;
  } else {
    return 250;
  }
};

const calcParticlesWidth = () => {
  let bodyWidth = document.querySelector('body').clientWidth;

  if (bodyWidth <= 500) {
    return 1;
  } else if (bodyWidth <= 1200) {
    return 2;
  } else {
    return 3;
  }
};

const calcParticlesHeigh = () => {
  let bodyWidth = document.querySelector('body').clientWidth;

  if (bodyWidth <= 500) {
    return 70;
  } else if (bodyWidth <= 1200) {
    return 100;
  } else {
    return 130;
  }
};

const createParticles = (numbParticles, parent) => {
  parent.innerHTML = '';
  let i = 0;

  while (i < numbParticles) {
    const particle = document.createElement('div');
    particle.classList.add('rain-particle');

    const animDelay = Math.random() * 5;
    particle.style.animationDelay = `-${animDelay}s, -${animDelay}s`;

    const randomWidth = 1.5 + Math.random() * calcParticlesWidth();
    const randomHeight = calcParticlesHeigh() + Math.random() * 70;
    const randomPosX = Math.floor(Math.random() * window.innerWidth);

    particle.style.height = `${randomHeight}px`;
    particle.style.width = `${randomWidth}px`;
    particle.style.left = `${randomPosX}px`;
    
    parent.appendChild(particle);
    i++;
  }
};

const setRainAnim = () => {
  const headerAnim = document.querySelector('.header-animation');
  const numbParticles = calcNumbParticles();
  createParticles(numbParticles, headerAnim);
};
