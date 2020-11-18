function checar() {
  var n = window.document.getElementById("numero");
  
  
    var num = Number(n.value);
    var res = window.document.getElementById("res");
    var a = num - 1;
    var s = num + 1;
    res.innerHTML += ''
    res.innerHTML += `Antecessor de ${num} é ${a} </br>`;
    res.innerHTML += `Sucessor de ${num} é ${s}`;
}
