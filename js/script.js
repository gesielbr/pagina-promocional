$(document).ready(function () {
  // CONTADOR DIAS E PRODUTOS
  //HORA E DATA ATUAL
  var data = new Date();
  var dia = (data.getDate() < 9 ? "0" : "") + data.getDate();
  var mes = (data.getMonth() < 9 ? "0" : "") + (data.getMonth() + 1);
  var ano = data.getFullYear();
  var dia_atual = dia + "/" + mes + "/" + ano;

  $(document).ready(function () {
    $(".data").append(dia_atual);
  });

  //Número Aleatório
  var random = function (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  };
  var quantidadeAleatoria = random(15, 25);
  $(".data").append(str_data);
  $("#p0").append(quantidadeAleatoria);
});

// CONTADOR
$(document).ready(function () {
  var timer1 = "20:00";
  var interval = setInterval(function () {
    var timer = timer1.split(":");
    var minutos = parseInt(timer[0], 10);
    var segundos = parseInt(timer[1], 10);
    --segundos;
    minutos = segundos < 0 ? --minutos : minutos;
    segundos = segundos < 0 ? 59 : segundos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    $(".min").html(minutos);
    $(".seg").html(segundos);
    $(".countdown").html(minutos + ":" + segundos);
    if (minutos < 0) clearInterval(interval);
    //check if both minutos and segundos are 0
    if (segundos <= 0 && minutos <= 0) clearInterval(interval);
    timer1 = minutos + ":" + segundos;
  }, 1000);
});
