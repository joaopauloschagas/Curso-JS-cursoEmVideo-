var agora = new Date()
var diaSem = agora.getDay()
/* 
    0 = domingo
    1 = segunda feira
    2 = terça feira
    3 = quarta feira
    4 = quinta feira
    5 = sexta feira
    6 = sábado
*/

console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda feira`)
        break
    case 2:
        console.log(`terça feira`)
        break
    case 3:
        console.log(`quarta feira`)
        break
    case 4: 
        console.log(`quinta feira`)
        break
    case 5:
        console.log(`sexta feira`)
        break
    case 6:
        console.log(`sábado`)
        break
      default:
          console.log(`[ERRO!] Dia inválido`)

}