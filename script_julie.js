
/*
fetch ("https://api.le-systeme-solaire.net/rest/bodies/").then(function(response) {
    console.log("success!",response)
    //document.getElementById("test").innerHTML= "sucess!" + response
})
*/
/*
fetch ("https://api.le-systeme-solaire.net/rest/bodies/{sun}").then(function(response) {
    if (response.ok) {
        return response.json()
    }
    //console.log("success!",response)
   
})
.then(data => {
    console.log(data)
    document.getElementById("test").innerHTML= data.name + " " + data.bodyType

})
*/

const research = () => {
    x = document.getElementById("input").value
    console.log(x)
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/{${x}}`).then(function (response) {
      if (response.ok) {
        return response.json()
      }
      console.log("success!",response)
    })
  
      .then(data => {
        console.log(data)
        document.getElementById("test").innerHTML = data.name + " " + data.bodyType
      })
  }
  
  //research()