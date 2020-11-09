let valores = [8,1,7,4,2,9];

//console.log(valores)

/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
valores.push(9)
valores.sort()
for (let pos in valores) { //Para cada posição(indice:pos) dentro da variavel composta(valores) irá mostrar o valores(pos)
    console.log(`A posição ${[pos]} tem o valor ${valores[pos]}`)
}
console.log(valores.indexOf(2))//indexOf: faz a busca pelo valor no vetor e retorna o índice
