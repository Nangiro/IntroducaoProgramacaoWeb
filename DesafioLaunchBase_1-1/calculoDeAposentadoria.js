const nome = "Silvana";
const sexo = "F";
const idade = 55;
const contribuicao = 30;

if(sexo == 'F'){
    if (contribuicao >= 30){
        const regra8595 = idade + contribuicao;
        if (regra8595 >= 85){
            console.log(`Voce pode se aposentar!`);
        }
        else {
            console.log(`Voce nao pode se aposentar!`);
        }
    }
    else {
        console.log(`Voce nao pode se aposentar!`);
    }
}
else{
    if (contribuicao >= 35){
        const regra8595 = idade + contribuicao;
        if (regra8595 >= 95){
            console.log(`Voce pode se aposentar!`);
        }
        else {
            console.log(`Voce nao pode se aposentar!`);
        }
    }
    else {
        console.log(`Voce nao pode se aposentar!`);
    }
}