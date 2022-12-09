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

const radians = (radius) => (Math.PI / 180) * radius;

elementPauseAnim = (element) => {
  element.style.animationPlayState = 'paused';
};

elementRunAnim = (element) => {
  element.style.animationPlayState = 'running';
};
