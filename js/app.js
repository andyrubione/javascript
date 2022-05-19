alert("Hola de nuevo! hoy vamos a hacer un simulador de fuerza y poleas")
alert("La realidad es que aun no se de que sera el proyecto final, pero las poleas me parecen super interesantes")
alert("Primero que nada ¿sabias que los kilos son en realidad una medida de fuerza y no de peso? es por eso que vamos a transformar los Kilos en Newtons (que si son una medida de peso)!")

function kgaNewton(kg, newton) {
    return kg * newton
}

let resultadoNewton
let pesoIdeal

while (pesoIdeal != true) {
    resultadoNewton = kgaNewton(prompt("Ingresa tu peso en Kg "), 9.80)
    if (resultadoNewton >= 9.80) {
        console.log("Peso real: " + resultadoNewton + " Newtons")
        alert("Perfecto!! tu peso real es igual a " + resultadoNewton + " Newtons")
        pesoIdeal = true
    } else {
        alert("Debes ingresar un numero mayor a 1")
    }
}

alert("Ahora que sabemos esto vamos a jugar con las poleas")
alert("Los sistemas de poleas nos permiten realizar menos fuerza para levantar el mismo peso, es decir que para levantar " + resultadoNewton + " Newtons, emplearemos diferentes Kilogramosfuerza segun la cantidad de poleas que tengamos")
alert("Existen varios tipos de operaciones, hoy veremos las mas sencillas: Polea Fija, Polea Movil y la Polea Potencial")
alert("En todos los casos utilizaremos una polea Fija ya que existen multiples convinaciones... para este ejercicio solo hace falta seleccionar la cantidad de poleas moviles de 0 a 2 y yo me encargo del resto")

let poleas
while (poleas != true) {
    function fuerza(poleaMovil, peso) {
        switch (poleaMovil) {
            case "0":
                poleas = true
                return alert("Para levantar " + peso + " Newtons, hace falta hacer " + peso + " Newtons, o para nosotros una fuerza de " + resultadoNewton / 9.8067 + " Kilos")
                break
            case "1":
                poleas = true
                return alert("Para levantar " + peso + " Newtons, hace falta hacer " + peso / 2 + " Newtons, o para nosotros una fuerza de " + (resultadoNewton / 2) / 9.80 + "Kilos")
                break
            case "2":
                poleas = true
                return alert("Para levantar " + peso + " Newtons, hace falta hacer " + peso / (2 ** poleaMovil) + " Newtons, o para nosotros una fuerza de " + (resultadoNewton / (2 ** poleaMovil)) / 9.80 + " Kilos")
                break
            default:
                poleas = false
                return alert("Como mencione anteriormente intentamos hacerlo sencillo, recorda seleccionar un numero del 0 al 2")
        }
    }
    fuerza(prompt("Selecciona un numero del 0 al 2: "),(prompt("Ingresa tu peso en Kg ")* 9.80))
}

let maxPolea = prompt("Ahora vamos a elegir un numero mas grande y vas a ver la diferencia, elegi el numero que quieras siempre que sea mayor a 2: ")
if (maxPolea > 2) {
    alert("La cantidad de poleas que elgiste es " + maxPolea + "... no habras exagerado un poco? No importa, mira la cantidad de fuerza que tenes que hacer para levantar los " + resultadoNewton + " Newtons que pesa tu cuerpo:")
    alert("...redoble de tambores...")
    alert(resultadoNewton / (2 ** maxPolea) + " Newtons!!!! o lo que es lo mismo: " + (resultadoNewton / (2 ** maxPolea)) / 9.80 + " Kilos, quien diría que con tan poca fuerza se podia levantar ese peso!!")
    console.log(resultadoNewton / (2 ** maxPolea) + " Newtons para levantar " + resultadoNewton + " Newtons, o lo que es lo mismo: " + (resultadoNewton / (2 ** maxPolea)) / 9.80 + " Kilos")
    alert("Pero lamento informarte que no todo es tan sencillo, ya que a mayor cantidad de poleas, mayor cantidad de soga/cadena tenes que arrastrar, vamos a averiguar cuanta sería para este caso en particular:")
    let altura = prompt("Para determinar esto, primero determinemos una altura a la cual elevarte, cuantos metros queres subir?: ")
    if (altura >= 1) {
        alert("Que bueno que no tengas vertigo!! Ahora repasemos: tenemos un peso de " + resultadoNewton + " Newtons, ademas una cantidad de poleas igual a " + maxPolea + " y una altura de " + altura + " metros, saquemos la cuenta!")
        console.log(resultadoNewton + " Newtons", maxPolea + " Poleas", altura + " metros")
        let recorridoCuerda = altura * (2 ** maxPolea)
        alert("Es necesario un recorrido de cuerda igual a " + recorridoCuerda + " metros!!!!! De solo pensarlo me agota")
        console.log("Recorrido de cuerda: " + recorridoCuerda + " metros")
    } else {
        alert("Es necesario que coloques un numero mayor a 1")
    }
} else {
    alert("La cantidad de Poleas tiene que ser mayor a 2")
}

alert("Espero que hayas aprendido algo sobre el uso de poleas, yo aprendí dos cosas sobre Javascript: la practica hace al maestro y siempre van a haber errores en el codigo...")







