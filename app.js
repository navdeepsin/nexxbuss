const apiKey = 'ifacCxMUu4mJPof9BlBn'
const formElem = document.querySelector('form');

formElem.onsubmit = e => {
  input = e.target.querySelector('input');
  search(input.value);
  e.preventDefault();
}

function search(name) {
  fetch(`https://api.winnipegtransit.com/v3/streets.json?api-key=${apiKey}&name=${name}`)
    .then (resp => {
      if (resp.ok) {
        console.log(resp.json());
      }
    }).then (data => {
      console.log(data);
    });
}
