const apiKey = 'ifacCxMUu4mJPof9BlBn'



fetch(`https://api.winnipegtransit.com/v3/stops/10064.json?api-key=${apiKey}`)
  .then(resp => resp.json())
  .then(json => console.log(json));