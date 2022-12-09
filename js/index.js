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

let pageLoad = true;

window.onload = () => {};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setRainAnim();
  }, 1000);
});

window.onresize = () => {
  const newBodyWidth = document.querySelector('body').clientWidth;
  console.log('page resized');
  // let throttled = false;
  if (bodyWidth !== newBodyWidth) {
    if (!elementInView(headerAnim)) {
      clearParticles();
    } else if (elementInView(headerAnim)) {
      setRainAnim();
    }
    
    if (!elementInView(syntaxGalaxy)) {
      pauseGalaxy();
    } else if (elementInView(syntaxGalaxy)) {
      setGalaxy();
    }
    bodyWidth = document.querySelector('body').clientWidth;
  }

  if (newBodyWidth >= 485) {
    document.querySelector('.nav-links').style.display = 'flex';
    // hamburgIconAnimate('flex');
  } else {
    hamburgIconAnimate('flex');
    document.querySelector('.nav-links').style.display = 'none';
  }
};

window.onscroll = () => {
  if (pageLoad) {
    syntaxDataFetch();
    projectsDataFetch();
    // console.log('stuff loading');
    pageLoad = false;
  }

  if (!elementInView(headerAnim) && headerAnim.innerHTML !== '') {
    clearParticles();
  } else if (elementInView(headerAnim) && headerAnim.innerHTML == '') {
    setRainAnim();
  }

  if (!elementInView(syntaxGalaxy) && syntaxOrbit.style.animationPlayState === 'running') {
    // console.log('pause galaxy');
    pauseGalaxy();
  } else if (elementInView(syntaxGalaxy) && syntaxOrbit.style.animationPlayState === 'paused') {
    // console.log('set galaxy onscroll');
    setGalaxy();
  }
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
