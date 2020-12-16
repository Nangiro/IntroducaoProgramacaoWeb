const name = 'Nangiro'  //Cria uma constante
const score01 = 9.8     //Numero nao precisa de aspas para passar valor, somente strings
const score02 = 10.0

const media = (score01 + score02)/2

if (media > 5){
    console.log(`A nota foi de ${media}. Parabens`)
} else {
    console.log(`A nota foi menor que 5`)
}