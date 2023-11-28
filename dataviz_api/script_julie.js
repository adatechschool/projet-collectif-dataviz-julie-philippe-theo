const research = () => {

  fetch(`https://api.le-systeme-solaire.net/rest/bodies/{${document.getElementById("name").value}}`).then(function (response) {
    if (response.ok) {
      return response.json()
    }
    console.log("success!",response)
  })

    .then(data => {
      console.log(data)
      document.getElementById("infos").innerHTML = "nom : " + data.name + "<br>"
      document.getElementById("infos").innerHTML += "type : " + data.bodyType + "<br>"
      document.getElementById("infos").innerHTML += "température : " + data.avgTemp + " K°" + "<br>"
      document.getElementById("infos").innerHTML += "masse : " + data.mass.massValue.toFixed(2)*10**data.mass.massExponent + "Kg" + "<br>"
      document.getElementById("infos").innerHTML += "lune.s : " + data.moons.length + "<br>"

    })
}

// mots clés: température, type, lunes, distance
let sortBy = () => {
  input = document.getElementById("sort").value
  if (input == "température") {
    fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=name,avgTemp&order=avgTemp,asc")
      .then(function (response) {
        if (response.ok) {
          return response.json()
        }
        console.log("success!", response)
      })
      .then(data => {
        console.log(data)
        document.getElementById("filter").innerHTML = "" //remet à jour pour le nouveau filtre
        for (let i = 0; i < 8; i++) {
          document.getElementById("filter").innerHTML += data.bodies[i].name + " : " + data.bodies[i].avgTemp + " K°" + "<br>"
        }
      })
  } else if (input == "type") {
    fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=name,bodyType&order=bodyType,asc")
      .then(function (response) {
        if (response.ok) {
          return response.json()
        }
        console.log("success!", response)
      })
      .then(data => {
        console.log(data)
        document.getElementById("filter").innerHTML = "" //remet à jour pour le nouveau filtre
        for (let i = 0; i < 8; i++) {
          document.getElementById("filter").innerHTML += data.bodies[i].name + " : " + data.bodies[i].bodyType + "<br>"
        }
      })
  } else if (input == "lunes") {
    fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=name,moons")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        console.log("success!", response);
      })
      .then(data => {
        console.log(data);
        document.getElementById("filter").innerHTML = ""; //remet à jour pour le nouveau filtre
        for (let i = 0; i < 8; i++) {
          const moonsCount = data.bodies[i].moons !== null ? data.bodies[i].moons.length : 0;
          document.getElementById("filter").innerHTML += data.bodies[i].name + " : " + moonsCount + "<br>";
        }
      });
  } else if (input == "distance") {
    fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=name,perihelion,aphelion&order=aphelion,asc")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        console.log("success!", response);
      })
      .then(data => {
        console.log(data);
        document.getElementById("filter").innerHTML = ""; //remet à jour pour le nouveau filtre
        for (let i = 0; i < 8; i++) {
          console.log(data.bodies[i].perihelion)
          document.getElementById("filter").innerHTML += data.bodies[i].name + " : " + (data.bodies[i].perihelion + data.bodies[i].aphelion) / 2 + " Km du Soleil" + "<br>";
        }
      });
  }
  else {
    document.getElementById("filter").innerHTML = "mot invalide"
  }
}
