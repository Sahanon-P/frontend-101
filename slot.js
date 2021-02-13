const box1=document.getElementById("box1");
const boxtext1=document.getElementById("boxtext1");

const box2=document.getElementById("box2");
const boxtext2=document.getElementById("boxtext2");

const box3=document.getElementById("box3");
const boxtext3=document.getElementById("boxtext3");

const box4=document.getElementById("box4");
const boxtext4=document.getElementById("boxtext4");



function getslot1(){
    fetch("",{
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((x) => x.json())
    if(x.parking_status==0){
        box1.className="green_box";
        boxtext1.className="green_txt";
        boxtext1.innerHTML="Available"
    }else{
        box1.className="red_box";
        boxtext1.className="red_txt";
        boxtext1.innerHTML=;
    }
}


setInterval(() => {
    getslot1();

}, 6000);