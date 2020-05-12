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

sectionElem.onclick = e => {
  let key = e.target.dataset;
   fetch (`https://api.winnipegtransit.com/v3/stops.json?api-key=${apiKey}&street=${key.streetKey}&usage=long`)
    .then (resp => {
      if (resp.ok) {
        return (resp.json());
      }  
    }).then (data => {
        updateStops(data.stops);
    });  
}

// function updateStops(stops) {
//   stops.forEach(function(s) {
//     fetch(`https://api.winnipegtransit.com/v3/stops/${s.key}/schedule.json?max-results-per-route=2&api-key=${apiKey}`)
//     .then(resp => {
//       if (resp.ok) {
//           return resp.json();
//       }
//     }).then (data => {
//       console.log(data);
//     })  
//   }) 
// }