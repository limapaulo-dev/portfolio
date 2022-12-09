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

function elementInView(element) {
  var elementBounding = element.getBoundingClientRect();
  var elementTop = elementBounding.top;
  var elementBottom = elementBounding.bottom;

  isVisible = elementTop < window.innerHeight && elementBottom >= 0;
  return isVisible;
}

const radians = (radius) => (Math.PI / 180) * radius;

elementPauseAnim = (element) => {
  element.style.animationPlayState = 'paused';
};

elementRunAnim = (element) => {
  element.style.animationPlayState = 'running';
};
