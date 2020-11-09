function contar(){
    
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
    if(ini.value == 0 || fim.value== 0 || pas.value == 0){
        window.alert ('Erro...[DADOS INCORRETOS]')
        res.innerHTML = 'Impossível Contar'
        res.style.background = 'red'
    }else if(i < f){
        //Contagem Crescente
        res.innerHTML = 'Contando: ' 
        for(let c = i; c <= f; c+=p){
            res.innerHTML += `${c} \u{1F331} 	`
            res.style.background = 'green'
        }
        res.innerHTML += `\u{1F33B}	`
    }else{
        //Contagem Decrescente
        for (let c = i; c >=f; c-=p){
            res.innerHTML += `${c} \u{1F33B}`
            res.style.background = 'green'

        }
        res.innerHTML += `\u{1F331}	`
    }
    
}