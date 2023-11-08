const moths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const weekDays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

const anuncio = document.querySelector('.anuncio');
const reloj = document.querySelector('.reloj');
const items = document.querySelectorAll('.relog-formato h4');

let futureDate = new Date(2024, 8, 13, 9, 30, 0);

const year= futureDate.getFullYear();
const horas = futureDate.getHours();
const minutes = futureDate.getMinutes();

let dia = weekDays[futureDate.getDay()];
let mes = moths[futureDate.getMonth()];
let diaNumero = futureDate.getDate();

anuncio.textContent = `La asamblea comenzara el ${dia} ${diaNumero} de ${mes} a las ${horas}:${minutes}am`

const diaEsperado = futureDate.getTime();


function recordatorio(){
    const hoy = new Date().getTime();
    const t = diaEsperado - hoy;
    
    const unDia = 24*60*60*1000;
    const unaHora = 60*60*1000;
    const unMinuto = 60*1000;
    let dias = t/unDia;
    dias = Math.floor(dias);
    let horas = Math.floor( (t % unDia) /unaHora );
    let mini = Math.floor((t % unaHora) / unMinuto);
    let segundos = Math.floor((t % unMinuto) / 1000);
    

    const valores = [dias, horas, mini, segundos];
         function formato(item){
            if (item <10 ) {
        return (item = `0${item}`)
        
    }else{
        return item
    }}
    

    items.forEach(function(item, index){
        item.innerHTML = valores[index];
    })

   if(t < 0){
    clearInterval(automatico)
    reloj.innerHTML = `<h4>Estamos de asamblea</h4>`
   }

}
 const automatico = setInterval(recordatorio, 1000);
recordatorio();