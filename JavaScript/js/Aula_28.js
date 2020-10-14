
// Date () - Data e Hora
var data = new Date()
var dia_da_semana = data.getDay()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")

var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

document.write(semanas[dia_da_semana] + ", " + dia + " de " + meses[mes] + " de " + ano)

document.write("<br>")

document.write(hora + ":" + minutos + ":" + segundos)
