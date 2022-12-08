const rainAnim = (numbParticles) => {
  const headerAnim = document.querySelector('.header-animation');
  createParticles(numbParticles, headerAnim);
};

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

    const particlePoint = document.createElement('div');
    particlePoint.classList.add('particle-point');
    particlePoint.style.height = `${randomWidth}px`;
    particlePoint.style.animationDelay = `-${glowDelay}s`;

    // particlePoint.style.backgroundColor = colors[Math.floor(Math.random() * 2)];

    particle.appendChild(particleTrail);
    particle.appendChild(particlePoint);


    const randomPosX = Math.floor(Math.random() * window.innerWidth);
    // let randomPosY = Math.floor(Math.random() * window.innerHeight);

    particle.style.width = `${randomWidth}px`;
    particle.style.left = `${randomPosX}px`;

    parent.appendChild(particle);
    i++;
  }
};

// window.onload = () => {
//   console.log("hello!");
//   rainAnim(20);
// };
