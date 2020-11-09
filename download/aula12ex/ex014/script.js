function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var dat = new Date()
    var hora = dat.getHours()
    var minuto = dat.getMinutes()
    msg.innerHTML = `Horário Atual: ${hora} horas e ${minuto} minutos.`
    if(hora >= 0 && hora < 12){
        //BOM DIA 
        img.src = 'fotomanha.jpg'
        window.document.body.style.background = '#fdc892'
    }else if(hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        window.document.body.style.background = '#fc8900'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#4c5258'

    }
}

