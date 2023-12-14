function promedio(personas, edadAcumulada) {
    let resultado = edadAcumulada / personas
    return resultado
}

let personas;

while (true) {
    personas = Number(prompt("Ingresa la cantidad de personas"));

    if (!isNaN(personas) && personas > 0) {
        break;
    } else {
        alert("Número inválido de personas.");
    }
}

let edadAcumulada = 0;

for (let i = 1; i <= personas; i++) {
    let edad;
    while (true) {
        edad = Number(prompt(`Ingresa la edad de la persona ${i}`));

        if (!isNaN(edad)) {
            edadAcumulada += edad;
            break;
        } else {
            alert("Edad inválida.");
        }
    }
}

let promedioEdad = promedio(personas, edadAcumulada);
promedioEdad = Math.round(promedioEdad);
alert(`El promedio de edad es ${promedioEdad} años`);

