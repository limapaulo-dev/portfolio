const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

if (isMobile()) {
  for (element of pcOnly) {
    element.style.display = 'none';
  }
}
