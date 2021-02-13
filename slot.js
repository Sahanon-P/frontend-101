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

function getslot1(){
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

function getslot2(){
    fetch("",{
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((x) => x.json())
    .then((x) => {
        if(x.parking_status==0){
            box2.className="green_box";
            boxtext2.className="green_txt";
            boxtext2.innerHTML="Available"
        }else{
            box2.className="red_box";
            boxtext2.className="red_txt";
            int(min) = x.parking_time / 60 ;
            int(sec) = x.parking_time % 60;
            if(min < 10){
                min=char("0"+Char(min));
            }
            if(sec < 10){
                sec=char("0"+Char(sec));
            }
            boxtext2.innerHTML=min+":"+sec+" MIN";
        }
    });
}

function getslot3(){
    fetch("",{
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((x) => x.json())
    .then((x) => {
        if(x.parking_status==0){
            box3.className="green_box";
            boxtext3.className="green_txt";
            boxtext3.innerHTML="Available"
        }else{
            box3.className="red_box";
            boxtext3.className="red_txt";
            int(min) = x.parking_time / 60 ;
            int(sec) = x.parking_time % 60;
            if(min < 10){
                min=char("0"+Char(min));
            }
            if(sec < 10){
                sec=char("0"+Char(sec));
            }
            boxtext3.innerHTML=min+":"+sec+" MIN";
        }
    });
}

function getslot4(){
    fetch("",{
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((x) => x.json())
    .then((x) => {
        if(x.parking_status==0){
            box4.className="green_box";
            boxtext4.className="green_txt";
            boxtext4.innerHTML="Available"
        }else{
            box4.className="red_box";
            boxtext4.className="red_txt";
            int(min) = x.parking_time / 60 ;
            int(sec) = x.parking_time % 60;
            if(min < 10){
                min=char("0"+Char(min));
            }
            if(sec < 10){
                sec=char("0"+Char(sec));
            }
            boxtext4.innerHTML=min+":"+sec+" MIN";
        }
    });
}





setInterval(() => {
    getslot1();
    getslot2();
    getslot3();
    getslot4();
}, 6000);

