const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const pcOnly = document.getElementsByClassName('pc');
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

if (isMobile()) {
  for (element of pcOnly) {
    element.style.display = 'none';
  }
}

const contact = () => {
  const contactMsg = 'Hi! This is my contact number 📞';
  document.querySelector('textarea.form-control').value = contactMsg;
};

const coupon = () => {
  const getDiscont = () => Math.floor(Math.random() * 4 + 2) * 10;
  let getCoupon = getDiscont();
  const couponMsg = `Dear customer,\nuse this coupon for ${getCoupon}%OFF on your next order!\nDIRECTSAVE${getCoupon}\nSee you soon 😍`;
  document.querySelector('textarea.form-control').value = couponMsg;
};

const appointment = () => {
  const date = new Date();
  let dayOfWeekName = date.toLocaleString(userLocale, { weekday: 'long' });
  let monthName = date.toLocaleString(userLocale, { month: 'short' });
  let dayNumb = date.getDate();
  let yearNumb = date.getFullYear();
  let hourNumb = date.toLocaleString(userLocale, { hour: 'numeric', hour12: true });
  if (navigator.language === 'pt-BR') {
    hourNumb = `${date.toLocaleString(userLocale, { hour: 'numeric', hour12: false })} horas`;
  }
  const appointmentMsg = `Hello!\nJust a friendly reminder of your appointment 🗓️\n${dayOfWeekName}, ${monthName} ${dayNumb}, ${yearNumb} at ${hourNumb}`;
  document.querySelector('textarea.form-control').value = appointmentMsg;
};

const services = () => {
  const servicesMsg = "Thank you for contacting our services!\nwe'll get back to you as soon as possible 🙋";
  document.querySelector('textarea.form-control').value = servicesMsg;
};

function getCountry() {
  document.querySelector('#dropdown-country-code').onclick = (liCountry) => {
    console.log(liCountry);
    let liCountryText = liCountry.target.innerText;
    console.log(liCountryText);
    let liCountryValue = liCountry.target.getAttribute('value');
    //console.log(document.querySelector('#country-code-btn').value);
    console.log(liCountryValue);
    let liCountryFlag = liCountry.target.querySelector('img').src;
    console.log(liCountryFlag);
    document.querySelector('#country-code-btn span').innerText = liCountryText;
    document.querySelector('#country-code-btn img').src = liCountryFlag;
    document.querySelector('#country-code-btn').value = liCountryValue;
  };
}

function directMsg() {
  //let textMsg = encodeURIComponent(document.querySelector('#message-text-area').value);
  let countryCode = document.querySelector('#country-code-btn').value;
  let phoneNumb = document.querySelector('#phone-number-input').value;
  document.querySelector('#phone-number-input').value = `${countryCode}${phoneNumb}`
  setTimeout (() => {document.querySelector('#phone-number-input').value = phoneNumb}, 10);
}
