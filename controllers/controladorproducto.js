//consumiendo el API para acceder a los datos de la base de datos

let url = "localhost:8080/storeapi/v1/producto";

let peticion = {
    method: "GET",
    Headers:{}
}

fetch(url, peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})