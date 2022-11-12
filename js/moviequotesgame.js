const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const pcOnly = document.getElementsByClassName('pc');
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

if (isMobile()) {
  for (element of pcOnly) {
    element.style.display = 'none';
  }
}


// fetch("data/countriesData.json")
//     .then(res => res.json())
//     .then(data => countriesData = JSON.parse(data));

//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '0d3718cc05msh2a0f2886517b39ap10e7ecjsnbd483a7f676a',
//         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//       }
//     };
    
//     fetch('https://imdb8.p.rapidapi.com/title/get-quotes?tconst=tt0944947', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0d3718cc05msh2a0f2886517b39ap10e7ecjsnbd483a7f676a',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb8.p.rapidapi.com/title/get-top-rated-movies', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

