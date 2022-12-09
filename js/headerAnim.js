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

const createParticles = async (numbParticles, parent) => {
  parent.innerHTML = '';
  let i = 0;

  while (i < numbParticles) {
    const rainDropDelay = Math.random() * 5;
    const particle = document.createElement('div');
    particle.classList.add('rain-particle');
    particle.style.animationDelay = `-${rainDropDelay}s`;

    const randomHeight = calcParticlesHeigh() + Math.random() * 70;
    const glowDelay = Math.random() * 2;
    const particleTrail = document.createElement('div');
    particleTrail.classList.add('particle-trail');
    particleTrail.style.animationDelay = `-${glowDelay}s`;
    particleTrail.style.height = `${randomHeight}px`;

    // const particlePoint = document.createElement('div');
    // particlePoint.classList.add('particle-point');
    // particlePoint.style.height = `${randomWidth}px`;
    // particlePoint.style.animationDelay = `-${glowDelay}s`;

    // particlePoint.style.backgroundColor = colors[Math.floor(Math.random() * 2)];
    const randomWidth = 1.5 + Math.random() * calcParticlesWidth();
    particle.appendChild(particleTrail);
    // particle.appendChild(particlePoint);
    particle.style.width = `${randomWidth}px`;
    parent.appendChild(particle);
    i++;
  }
};

const positionAllParticles = async () => {
  const headerAnim = document.querySelector('.header-animation');
  headerAnim.classList.add('animation-fade');
  setTimeout(() => {
    headerAnim.classList.remove('animation-fade');
  }, '1000');

  const rainParticles = Array.from(document.querySelectorAll('.rain-particle'));
  rainParticles.map(positionSingleParticle);
};

const pauseRainAnim = () => {
  const rainParticles = Array.from(document.querySelectorAll('.rain-particle'));
  rainParticles.map(elementPauseAnim);

  const particleTrail = Array.from(document.querySelectorAll('.particle-trail'));
  particleTrail.map(elementPauseAnim);
};

const runRainAnim = () => {
  const rainParticles = Array.from(document.querySelectorAll('.rain-particle'));
  rainParticles.map(elementRunAnim);

  const particleTrail = Array.from(document.querySelectorAll('.particle-trail'));
  particleTrail.map(elementRunAnim);
};

const positionSingleParticle = (particle) => {
  const randomPosX = Math.floor(Math.random() * window.innerWidth);
  particle.style.left = `${randomPosX}px`;
};

const setRainAnim = (animRunTimeout) => {
  const headerAnim = document.querySelector('.header-animation');

  const numbParticles = calcNumbParticles();

  createParticles(numbParticles, headerAnim);
  positionAllParticles();

  setTimeout(() => {
    runRainAnim();
  }, animRunTimeout);
};
