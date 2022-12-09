const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

const primaryColor = "#00adff";
const secondaryColor = "#f72585";

const colors = [primaryColor, secondaryColor];

let bodyWidth = document.querySelector('body').clientWidth;
let bodyHeight = document.querySelector('body').clientHeight;

