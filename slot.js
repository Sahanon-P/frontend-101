const box1=document.getElementById("box1");
const boxtext1=document.getElementById("boxtext1");

const box2=document.getElementById("box2");
const boxtext2=document.getElementById("boxtext2");

const box3=document.getElementById("box3");
const boxtext3=document.getElementById("boxtext3");

const box4=document.getElementById("box4");
const boxtext4=document.getElementById("boxtext4");

let c=0;
let min=0;
let sec=0;

function getslot(){
    fetch("",{
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((x) => x.json())
    .then((x) => {
        if(x.parking_status==0){
            box1.className="green_box";
            boxtext1.className="green_txt";
            boxtext1.innerHTML="Available"
        }else{
            box1.className="red_box";
            boxtext1.className="red_txt";
            int(min) = x.parking_time / 60 ;
            int(sec) = x.parking_time % 60;
            if(min < 10){
                min=char("0"+Char(min));
            }
            if(sec < 10){
                sec=char("0"+Char(sec));
            }
            boxtext1.innerHTML=min+":"+sec+" MIN";
        }
    });
}




setInterval(() => {
    getslot1();
}, 6000);