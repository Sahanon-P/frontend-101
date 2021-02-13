const box1=document.getElementById("box1");
const boxtext1=document.getElementById("boxtext1");

const box2=document.getElementById("box2");
const boxtext2=document.getElementById("boxtext2");

const box3=document.getElementById("box3");
const boxtext3=document.getElementById("boxtext3");

const box4=document.getElementById("box4");
const boxtext4=document.getElementById("boxtext4");

const box=[box1,box2,box3,box4];
const boxtext=[boxtext1,boxtext2,boxtext3,boxtext4];

let c=0;
let min=0;
let sec=0;


function slot(){
    for(i=0;i<4;i++){
        getslot(i);
        console.log(i);
    }
}

function getslot(i){
    c=i+1;
    fetch(`https://exceed7.cpsk-club.xyz:3000/parking?slot=${c}`,{  
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((x) => x.json())
    .then((x) => {
        if(x.parking_is_available==true){
            if(box[i].className=="red_box"){
                
            }
            box[i].className="green_box";
            boxtext[i].className="green_txt";
            boxtext[i].innerHTML="Available"
        }else{
            box[i].className="red_box";
            boxtext[i].className="red_txt";
            min = int(x.parking_time);
            sec = int((x.parking_time - min)* 60);
            if(min < 10){
                min=char("0"+Char(min));
            }
            if(sec < 10){
                sec=char("0"+Char(sec));
            }
            boxtext[i].innerHTML="TIME\n"+min+":"+sec+" MIN";
        }
    });
}


function price(){
    
}



setInterval(() => {
    slot();
}, 5000);

