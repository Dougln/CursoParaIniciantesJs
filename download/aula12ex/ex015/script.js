function verificar(){ //Funções são acionadas após o evento
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')//Pega o que foi digitado pelo usuário
    var res = window.document.getElementById('res')//Este está ssendo usada para modificar dinamicamente através da div
    if(fano.value == 0 || fano.value > ano){//Validação
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img') // Cria a tag 'img' do html e coloca na variável 'img'
                                                // var img = document.createElement('img') é a mesma coisa que: <img>

        img.setAttribute('id', 'foto')//Coloca a tag criada acima com "id = 'foto' "
        //img.setAttribute('id', 'foto') é a mesma coisa que: <img src = '' id ='foto'>

        if(fsex[0].checked){ //Está verificando se a variável está na posição '[0]', que seria o 'masculino'...A contagem começa no 0
            gen = 'Homem'   
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
                //img.setAttribute('id', 'foto') é a mesma coisa que: <img src='foto-bebe-m.png'>

            }else if (idade >=10 && idade <= 21){
                //Jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else if(fsex[1].checked){//Está verificando se a variável está na posição '[1]', que seria o 'feminino'...A contagem começa no 0
            gen = 'Mulher'
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if (idade >=10 && idade <= 21){
                //Jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} de Idade: ${idade}`
    res.appendChild(img) //Adicionar um elemento, colocar um conteúdo embaixo
}