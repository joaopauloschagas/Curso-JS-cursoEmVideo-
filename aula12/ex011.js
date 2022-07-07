var idade = 66
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não VOTA')
} else  if ( idade < 18  || idade > 65) {  // || ou  && else
        console.log('VOTO OPCIONAL')
    } else  {
        console.log('VOTO OBRIGATÓRIO')
    }

