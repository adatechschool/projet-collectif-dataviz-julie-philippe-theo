const research = () => {

  fetch(`https://api.le-systeme-solaire.net/rest/bodies/{${document.getElementById("Name").value}}`).then(function (response) {
    if (response.ok) {
      return response.json()
    }
    console.log("success!",response)
  })

    .then(data => {
      console.log(data)
      document.getElementById("test").innerHTML = "nom : " + data.name + "<br>"
      document.getElementById("test").innerHTML += "type : " + data.bodyType + "<br>"
      document.getElementById("test").innerHTML += "température : " + data.avgTemp + " K°" + "<br>"
      document.getElementById("test").innerHTML += "masse : " + data.mass.massValue.toFixed(2)*10**data.mass.massExponent + "Kg" + "<br>"
      document.getElementById("test").innerHTML += "lune.s : " + data.moons.length + "<br>"

    })
}

fetch(`https://api.le-systeme-solaire.net/rest/bodies/{earth}`).then(function (response) {
  if (response.ok) {
    return response.json()
  }
  console.log("success!",response)
})

  .then(data => {
    console.log(data)

  })

