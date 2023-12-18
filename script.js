let sec = 0, mins =0,hrs=0;
let timer1 = document.querySelector(".timer1");
let num=null;
document.getElementById("start").addEventListener("click",()=>{
    if(num!=null)
        clearInterval(num);
    num=setInterval(present,1000);
});
document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(num);
});
document.getElementById("reset").addEventListener("click",()=>{
    clearInterval(num);
    mins=0,hrs=0,sec=0;
    timer1.innerHTML="00 : 00 : 00";
});
function present(){
    sec++;
    if(sec==60){
        sec=0;
        mins++;
        if(mins==60){
            mins=0;
            hrs++;
            if(hrs==24){
                hrs=0;
            }
        }
    
    }

    let hr = hrs;
    if(hr<10)
        hr="0"+hrs;
    let min=mins;
    if(min<10)
        min="0"+mins;
    let s=sec;
    if(sec<10)
        s="0"+sec;
    timer1.innerHTML=`${hr} : ${min} : ${s} `;
}
