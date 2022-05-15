const aceptado = prompt("Hola! Hoy vamos a crear un bucle! Pone que si para continuar")
if (aceptado.toLowerCase() == "si") {
    console.log("Desafio Aceptado")
    let numeroElegido = Number(prompt("Primero que nada vamos a hacer una cuenta, elegi el numero que quieras y vamos a realizar una suma simple: "))
    for (let i = 0; i < 20; i++) {
        let resultado = numeroElegido + i
        console.log(numeroElegido + " + " + i + " = " + resultado)
        if (resultado == 12) {
            console.log("Hey hey! mas despacio cerebrito, tampoco queremos hacer fisica cuantica!")
            break
        }
    }
    alert("Perdón pero tuve que frenar la cuenta, no queria recalentar mis transistores, se que lo entenderas...")
    alert("Ahora vamos por algo mas complicado, vamos a intentar hacer una receta")
    let ingredienteA
    while (ingredienteA != "harina") {
        ingredienteA = prompt("Cual es el principal ingrediente para hacer pan?: ").toLocaleLowerCase()
        if (ingredienteA == "harina") {
            alert("Perfecto! Harina es el primer ingrediente")
            console.log("Harina... 500g")
            let ingredienteB
            while (ingredienteB != "agua") {
                ingredienteB = prompt("Segundo ingrediente! es facil, la mayor parte de la superficie del planeta esta cubierta de este ingrediente: ")
                if (ingredienteB == "agua") {
                    alert("Excelente! solo nos falta un ingrediente mas")
                    console.log("Agua... 325ml... que facil es esto")
                    let ingredienteC
                    while (ingredienteC != "levadura"){
                        ingredienteC = prompt("Este ingrediente sirve para que la masa se haga mas grande: ")
                        if (ingredienteC == "levadura"){
                            alert("Levadura!! Perfecto!! la mayoria le pone sal tmb, pero no vamos a hacer esto mas largo ")
                            console.log("Levadura... 15g... la sal es a gusto como siempre")
                            alert("Felicitaciones!!! acabamos de hacer el primer pan virtual!! (o al menos la masa)... lo podremos vender como NFTs??")
                        }
                    }

                }
            }
        }
    }
} else {
    console.log("Usted no aprende verdad?")
    alert("Esto se soluciona de una sola forma...... apretando F5 por supuesto ")
}