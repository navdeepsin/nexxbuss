const apiKey = 'ifacCxMUu4mJPof9BlBn'
const formElem = document.querySelector('form');
const sectionElem = document.querySelector('.streets');

formElem.onsubmit = e => {
  input = e.target.querySelector('input');
  search(input.value);
  e.preventDefault();
}

function search(name) {
  fetch(`https://api.winnipegtransit.com/v3/streets.json?api-key=${apiKey}&name=${name}`)
    .then (resp => {
      if (resp.ok) {
        return(resp.json());
      }
    }).then (data => {
      updateStreets(data.streets);
    });
}

function updateStreets(streets) {
  for (let i = 0; i < streets.length; i++) {
    sectionElem.insertAdjacentHTML('afterbegin',
      `<a href="#" data-street-key=${streets[i].key}>${streets[i].name}</a>`
    )
    streets.reverse();
  } 
}

