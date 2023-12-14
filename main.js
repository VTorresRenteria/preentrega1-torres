function promedio(personas, edadAcumulada) {
    return edadAcumulada / personas;
}

let edadAcumulada = 0;

let personas = Number(prompt("Ingresa la cantidad de personas para calcular edad"));

if (personas > 0) {

    for (let i = 1; i <= personas; i++) {
        let edad = Number(prompt(`ingresa la edad de la persona ${i}`));
        edadAcumulada = edadAcumulada + edad;
    }

    let resultado = promedio(personas, edadAcumulada);

    alert(`El promedio de edad es ${resultado}`);

} else{
    alert("numero invalido de personas")
}
