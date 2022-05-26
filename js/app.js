alert("Hoy vamos a hacer una lista para comprar en el supermercado, ya sabemos algunas de las cosas que tenemos que comprar, por ejemplo:")
const listaSuper =["Yerba", "Galletas dulces", "Galletas saladas", "Pan", "Vainillas", "Te", "Cafe"]
console.log(listaSuper);
alert("Excelente!! pero veo que solo hay articulos para la merienda, que tal si ponemos algo para comer? por ejemplo una pizza")
listaSuper.push(prompt("Agrega algo para comer al carrito"))
console.log(listaSuper)
alert("Genial, por fin algo para saciar el apetito, veamos cuantos articulos llevamos hasta el momento")
console.log(listaSuper.length)
alert("Bien, contamos con un total de " + listaSuper.length + " articulos, aunque pensandolo bien, son demasiadas cosas para la merienda, vamos a sacar las galletas.")
listaSuper.splice(1,2)
console.log(listaSuper)
alert("Genial, ahora vamos a hacer ua nueva lista con los productos de limpieza")
const listaLimpieza=["Detergente", "Lavandina", "Desodorante para piso"]
console.log(listaLimpieza)
alert("muy bien! pero para no llevar dos listas, vamos a hacer una sola sumando ambas.")
const ambasListas = listaSuper.concat(listaLimpieza)
console.log(ambasListas)
alert("Que bien, mucho mas practico, controlemos ")