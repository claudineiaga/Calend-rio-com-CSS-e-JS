let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

function flip(){
  cardElement.classList.toggle("flipped")
}

function startTime() {
    var diasemana = new Array();
    diasemana[0] =  "Domingo";
    diasemana[1] = "Segunda-feira";
    diasemana[2] = "Terça-feira";
    diasemana[3] = "Quarta-feira";
    diasemana[4] = "Quinta-feira";
    diasemana[5] = "Sexta-feira";
    diasemana[6] = "Sábado";

    var mes = new Array();
    mes[0] = "Janeiro";
    mes[1] = "Fevereiro";
    mes[2] = "Março";
    mes[3] = "Abril";
    mes[4] = "Maio";
    mes[5] = "Junho";
    mes[6] = "Julio";
    mes[7] = "Agosto";
    mes[8] = "Setembro";
    mes[9] = "Outubro";
    mes[10] = "Novembro";
    mes[11] = "Dezembro";

    var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
    var s = hoje.getSeconds();
    var d = hoje.getDate();
    var y = hoje.getFullYear();
    var wd = diasemana[hoje.getDay()];
    var mt = mes[hoje.getMonth()];

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('data').innerHTML = d;
    document.getElementById('dia').innerHTML = wd;
    document.getElementById('mes').innerHTML = mt + "/" + y;
    
    var t = setTimeout(startTime, 500);
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}