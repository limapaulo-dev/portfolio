const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

const primaryColor = '#00adff';
const secondaryColor = '#f72585';

const colors = [primaryColor, secondaryColor];

let bodyWidth = document.querySelector('body').clientWidth;
let bodyHeight = document.querySelector('body').clientHeight;

const headerAnim = document.querySelector('.header-animation');
const syntaxGalaxy = document.querySelector('.syntax-galaxy');
const syntaxOrbit = document.querySelector('.syntax-orbit');

const githubIcon = document.querySelector('.bi-github');
const emailIcon = document.querySelector('.bi-envelope-fill');
const linkedinIcon = document.querySelector('.bi-linkedin');

const modal = document.querySelector('.project-modal');
