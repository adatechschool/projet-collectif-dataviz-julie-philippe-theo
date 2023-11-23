const research = () => {

  fetch(`https://api.le-systeme-solaire.net/rest/bodies/{${document.getElementById("name").value}}`).then(function (response) {
    if (response.ok) {
      return response.json()
    }
    console.log("success!",response)
  })

    .then(data => {
      console.log(data)
      document.getElementById("planet").innerHTML = "nom : " + data.name + "<br>"
      document.getElementById("planet").innerHTML += "type : " + data.bodyType + "<br>"
      document.getElementById("planet").innerHTML += "température : " + data.avgTemp + " K°" + "<br>"
      document.getElementById("planet").innerHTML += "masse : " + data.mass.massValue.toFixed(2)*10**data.mass.massExponent + "Kg" + "<br>"
      document.getElementById("planet").innerHTML += "lune.s : " + data.moons.length + "<br>"

    })
}

let sortBy = () => {
  input = document.getElementById("sort").value
  if (input == "température") {
    fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=name,avgTemp&order=avgTemp,asc")
    .then(function (response) {
      if (response.ok) {
      return response.json()
      }
      console.log("success!",response)
    })
    .then(data => {
      console.log(data)
      document.getElementById("filter").innerHTML= "" //remet à jour pour le nouveau filtre
      for (let i = 0; i <8; i++) {
        document.getElementById("filter").innerHTML+= data.bodies[i].name + " : " + data.bodies[i].avgTemp + " K°" + "<br>"
      }
    })
  }
  else {
    document.getElementById("filter").innerHTML= "mot invalide"
  }
}
