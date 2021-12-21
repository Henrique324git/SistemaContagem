let numeroAlunos = 5;

let listaAlunos = ["Marina", "frederico", "Victor", "Ismael", "Pablo" ];


for(let contador = 0; contador < listaAlunos.length; contador++) {
   // console.log(contador)

    if(contador == 0) {
        console.log(contador + ": ZERO")   //Concatenação
    } else if (contador % 2 == 1) {
        console.log(`${contador}: IMPAR`)     //Interpolação - Template String
    } else{
    console.log(`${contador}: PAR`)
    }
    
}  