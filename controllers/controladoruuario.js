//consumiendo el API para acceder a los datos de la base de datos

let url = "http://localhost:8080/storeapi/v1/usuario";

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
    //recorriendo la respuesta para hacer render
    let fila = document.getElementById("usuario")
    respuesta.forEach( function(usuarios){
        let columna = document.createElement("div")
        columna.classList.add("col")
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "shadow", "h-100")
        

        let nombreUsuario = document.createElement("h3")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent = usuarios.nombres

        let cedula = document.createElement("h4")
        cedula.classList.add("text-center")
        cedula.textContent = usuarios.cedula

        let correo = document.createElement("h4")
        correo.classList.add("text-center")
        correo.textContent = usuarios.correo

        
        tarjeta.appendChild(nombreUsuario)
        tarjeta.appendChild(cedula)
        tarjeta.appendChild(correo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})