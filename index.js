const object = 
{name: "Ilies",
age:21,
fechaDeNacimiento: "15/06/2002"}

function comprobarTipo () {
    let propiedadNumero = []
    for (const property in object) {
        if (typeof object[property] === "number") {
           propiedadNumero.push(property)
           }
    }
    console.log(propiedadNumero)
}

comprobarTipo(object)