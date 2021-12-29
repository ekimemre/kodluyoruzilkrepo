

let userName = prompt("Lütfen isminizi giriniz:")
document.getElementById("myName").innerHTML = userName;

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var t = date.getDay();
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    let gun = "";
    for(let i=1; i<8; i++){
        if(t == i){
            gun = days[i];      
        }
    }
    

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + gun;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();