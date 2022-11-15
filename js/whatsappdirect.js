const pcOnly = document.querySelector('.pc');

if (isMobile()) {
  for (element of pcOnly) {
    element.style.display = 'none';
  }
}

const sortArray = (array) => {
  array.sort((a,b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB){
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
};

const countriesDataFetch = () => {
  fetch('/data/countriesData.json')
  .then((res) => res.json())
  .then((data) => {

    const countriesData = data["Countries Data"];
  
    countriesData.sort((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
  
      if (nameA < nameB){
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });

    const createLi = (country) => {
      const newImg = document.createElement("img");
      newImg.classList.add("li-flag");
      newImg.setAttribute("src", country.flagSrc);

      const newAnchor = document.createElement("a");
      newAnchor.classList.add("dropdown-item", "text-truncate");
      newAnchor.setAttribute("onclick","getCountry()");
      const fixedDialCode = country["dialCode"].replace(/([+ -])/g, '')
      newAnchor.setAttribute("value", fixedDialCode); 
      newAnchor.appendChild(newImg)

      const newLi = document.createElement("li");
      newLi.appendChild(newAnchor)
      newAnchor.innerHTML += country.dialCode +" "+ country.name;
  
      document.querySelector('ul#dropdown-country-code').appendChild(newLi);
    };

    countriesData.map(createLi);
  })
};

window.onload = countriesDataFetch();

const contact = () => {
  const contactMsg = 'Hi! This is my contact number 📞';
  document.querySelector('textarea.form-control').value = contactMsg;
};

const coupon = () => {
  const getDiscont = () => Math.floor(Math.random() * 4 + 2) * 10;
  const getCoupon = getDiscont();
  const couponMsg = `Dear customer,\nuse this coupon for ${getCoupon}%OFF on your next order!\nDIRECTSAVE${getCoupon}\nSee you soon 😍`;
  document.querySelector('textarea.form-control').value = couponMsg;
};

const appointment = () => {
  const date = new Date();
  const dayOfWeekName = date.toLocaleString(userLocale, { weekday: 'long' });
  const monthName = date.toLocaleString(userLocale, { month: 'short' });
  let dayNumb = date.getDate();
  let yearNumb = date.getFullYear();
  const hourNumb = date.toLocaleString(userLocale, { hour: 'numeric', hour12: true });
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

const getCountry = () => {
  document.querySelector('#dropdown-country-code').onclick = (liCountry) => {
    const liCountryText = liCountry.target.innerText;
    const liCountryValue = liCountry.target.getAttribute('value');
    //console.log(document.querySelector('#country-code-btn').value);
    const liCountryFlag = liCountry.target.querySelector('img').src;
    document.querySelector('#country-code-btn span').innerText = liCountryText;
    document.querySelector('#country-code-btn img').src = liCountryFlag;
    document.querySelector('#country-code-btn').value = liCountryValue;
  };
};

const directMsg = () => {
  const countryCode = document.querySelector('#country-code-btn').value;
  const phoneNumb = document.querySelector('#phone-number-input').value;
  document.querySelector('#phone-number-input').value = `${countryCode}${phoneNumb}`;
  setTimeout(() => {
    document.querySelector('#phone-number-input').value = phoneNumb;
  }, 10);
};
