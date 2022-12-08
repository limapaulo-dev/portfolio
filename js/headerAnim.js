const createParticles = (numbParticles, parent) => {
  parent.innerHTML = '';
  let i = 0;

  while (i < numbParticles) {
    const rainDropDelay = Math.random() * 5;
    const particle = document.createElement('div');
    particle.classList.add('rain-particle');
    particle.style.animationDelay = `-${rainDropDelay}s`;

    const glowDelay = Math.random() * 2;
    const particleTrail = document.createElement('div');
    particleTrail.classList.add('particle-trail');
    particleTrail.style.animationDelay = `-${glowDelay}s`;

    const randomWidth = 1.5 + Math.random() * 3;

    // const particlePoint = document.createElement('div');
    // particlePoint.classList.add('particle-point');
    // particlePoint.style.height = `${randomWidth}px`;
    // particlePoint.style.animationDelay = `-${glowDelay}s`;

    // particlePoint.style.backgroundColor = colors[Math.floor(Math.random() * 2)];

    particle.appendChild(particleTrail);
    // particle.appendChild(particlePoint);
    particle.style.width = `${randomWidth}px`;
    parent.appendChild(particle);
    i++;
  }
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

const setRainAnim = (numbParticles) => {
  const headerAnim = document.querySelector('.header-animation');
  createParticles(numbParticles, headerAnim);
  positionAllParticles();
};
