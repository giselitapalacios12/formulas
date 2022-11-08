let figura = prompt("Escribe que figura deseas utilizar:(no olvide la tilde) triángulo,rectángulo,círculo,cuadrado,rombo,pentágono,hexágono,trapecio o paralelogramo")

let base;
let altura;
let radio;
let lado;
let perimetro;
let diametroMayor;
let diametroMenor;
let apotema;
let baseMayor;
let baseMenor;

switch(figura){
    case "triángulo" :
        base = prompt ("¿Cuánto tienes de base?")
        altura = prompt ("¿Cuánto tienes de altura?")

        document.write(`El Área del triángulo es ${base*altura/2}`)
        break
    case "rectángulo":
        base = prompt ("¿Cuánto tienes de base?")
        altura = prompt("¿Cuánto tienes de altura?")

        document.write (`El Área del rectángulo es ${base*altura}`)
        break
    case "círculo" :
        radio = prompt("¿Cuánto de radio tiene?")
        document.write(`El Área del círculo es ${Math.PI * Math.pow(radio,2)}`)
        break
    case "cuadrado":
        lado = prompt("¿Cuánto es la medida del cuadrado")

        document.write(`El Área del cuadrado es ${lado*lado}`)
        break
    case"rombo":
        diametroMayor = prompt("Cuánto mide su diamentro Mayor?")
        diametroMenor = prompt("¿Cuánto mide su diametro Menor?")

        document.write(`El Área del rombo es ${diametroMenor*diametroMayor/2}`)
        break
    case "pentágono" :
        perimetro = prompt("¿Cuánto es su perimetro")
        apotema = prompt("¿Cuánto es su apotema")

        document.write (`El Área del pentágono es ${perimetro*apotema/2}`)
        break
    case "hexágono" :
        perimetro = prompt("¿Cuánto es su perimetro")
        apotema = prompt("¿Cuánto es su apotema")

        document.write(`El Área del hexágono es ${perimetro*apotema/2}`)
        break
    case "trapecio" :
        baseMenor = prompt("¿Cuánto es su Base Menor?")
        baseMayor = prompt("¿Cuánto es su Base Mayor?")
        altura = prompt("¿Cuánto es su altura")

        document.write(`El Área del trapecio es ${baseMayor+baseMenor*altura/2}`)
        break
    case "paralelogramo" :
    base = prompt ("¿Cuánto tienes de base?")
    altura = prompt("¿Cuánto tienes de altura?")

    document.write(`El Área del paralelogramo es ${base*altura}`)
    break

        default: 
        document.write(`Esta figura no esta disponible`)
}
