var nome;
var idade;
function inite(){
     nome =  window.prompt("Qual é o seu nome")
    if(nome == null || nome === ''){
        alert('Inválido')
    }else{
         idade = window.prompt(`Olá ${nome}, quantos anos você tem?`) 
    }
    if(idade == null || idade === ''){
        alert('Inválido')
    }else{
        alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade`)
    }
}