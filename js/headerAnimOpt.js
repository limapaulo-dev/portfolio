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

const clearParticles = () => {
  document.querySelector('.header-animation').innerHTML = '';
}

const createParticlesMove = (numbParticles, parent) => {
  parent.innerHTML = '';
  let i = 0;
  const particlesFragment = new DocumentFragment();

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

    const randomWidth = 1.5 + Math.random() * calcParticlesWidth();
    const randomPosX = Math.floor(Math.random() * window.innerWidth);
    particle.appendChild(particleTrail);

    particle.style.width = `${randomWidth}px`;
    particle.style.left = `${randomPosX}px`;

    particlesFragment.appendChild(particle);
    i++;
  }
  parent.appendChild(particlesFragment);
};

const createParticles = (numbParticles, parent) => {
  parent.innerHTML = '';
  let i = 0;
  const particlesFragment = new DocumentFragment();

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

    const randomWidth = 1.5 + Math.random() * calcParticlesWidth();
    particle.style.width = `${randomWidth}px`;
    
    particle.appendChild(particleTrail);
    particlesFragment.appendChild(particle);
    i++;
  }
  parent.appendChild(particlesFragment);
};

const positionAllParticles = () => {
  const headerAnim = document.querySelector('.header-animation');
  headerAnim.classList.add('animation-fade');
  setTimeout(() => {
    headerAnim.classList.remove('animation-fade');
  }, '1000');

  const rainParticles = Array.from(document.querySelectorAll('.rain-particle'));
  rainParticles.map(positionSingleParticle);
};

const positionSingleParticle = (particle) => {
  const randomPosX = Math.floor(Math.random() * window.innerWidth);
  particle.style.left = `${randomPosX}px`;
};

const setRainAnim = () => {
  const headerAnim = document.querySelector('.header-animation');
  const numbParticles = calcNumbParticles();
  createParticles(numbParticles, headerAnim);
  positionAllParticles();
};
