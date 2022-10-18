let clock = document.querySelector('#clock');
let date = document.querySelector('#date');
let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');

let timeDate = new Date();

function clockAnimation() {

    let nowIs = new Date();

    let hour = nowIs.getHours();
    let minute = nowIs.getMinutes();

    let strhour = new String(hour);
    let strminute = new String(minute);

    if(strminute.length == 1){
        minute = "0" + minute;
    }

    if(strhour.length == 1){
        hour = "0" + hour;
    }

    h.textContent = hour;   
    m.textContent = minute;

    setTimeout("clockAnimation()",1000);

}

function getDate() {

    let day = timeDate.getDate();
    let month = timeDate.getMonth()+1;
    let year = timeDate.getFullYear();

    let strday = new String(day);
    let strmonth = new String(month);

    if(strday.length == 1){
        day = "0" + day;
    }

    if(strmonth.length == 1){
        month = "0" + month;
    }

    switch(month) {
        case 01:
            month = "Janeiro";
        break;    
    
        case 02:
            month = "Fevereiro";
        break;

        case 03:
            month = "Março";
        break;

        case 04:
            month = "Abril";
        break;

        case 05:
            month = "Maio";
    
        case 06:
            month = "Junho";
        break;

        case 07:
            month = "Julho";
        break;

        case 08:
            month = "Agosto";
        break;

        case 09:
            month = "Setembro";
        break;

        case 10:
            month = "Outubro";
        break;

        case 11:
            month = "Novembro";
        break;

        default:
            month = "Dezembro";
        
    }
    
    let dataAtual = day + ' de ' + month + ' de ' + year;

    data.textContent = dataAtual;

}

getDate();

var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

let test = new Date();