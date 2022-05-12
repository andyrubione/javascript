const aceptado = prompt("Hola! ¿hacemos un algoritmo juntos? si te intriga pone si")
if (aceptado == "si") {
    console.log("Desafio Aceptado")
    const nombre = prompt("Perfecto!! me encanta la gente curiosa!, Te dije que tengo poderes mentales? a que adivino tu nombre, ponelo aca abajo y vas a ver!! Spoiler, solo funciona si sos mi tutor")
    if (nombre === "Matias") {
        console.log("Nombre: Matias")
        alert("Bienvenido Matias! esto ya es un algoritmo, pero vamos a hacerlo mas interesante, dale a aceptar para continuar")
        const numero = prompt("Para seguir demostrando mis poderes mentales, vamos a adivinar un numero, elegi un numero del 1 al 10")
        if (numero <= 4 || numero >= 6) {
            alert("No ese no es, tenes que concentrarte!! los numeros funcionan de forma diferente en la conexion mente microprocesador, ahora tendras que volver a empezar por que todavia no aprendimos bucles, para tu proximo intento probemos con el 5 y vas a ver que funciona!!")
        } else if (numero == 5) {
            console.log("Numero elegido por iniciativa propia: " + numero)
            alert("Excelente!! esa es solo una pequeña muestra de todo lo que puedo hacer! el mundo se rendiria a mis pies... si los tuviera" )
        }

    } else {
        console.log("Se donde vives " + nombre + " ... no mentira no lo se")
        alert("Que feo que estes mirando algoritmos ajenos " + nombre)
        
    }
} else {
    console.log("Que ser tan aburrido...")
    alert("Que pena!! pero apreta F5 que vas a ver que no te vas a arrepentir!!")
}