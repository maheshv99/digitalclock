let a = new Date();
let HH = a.getHours();
let pic = document.getElementById("photo")




if(HH >= 12 && HH <15){

    document.getElementById("goodmorning").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    document.getElementById("breakfast").innerText = "LET'S HAVE SOME LUNCH !!"
    document.getElementById("pp").src  = "lunch.svg"
}

if(HH >= 16 && HH <19 ){
    document.getElementById("goodmorning").innerText = "GOOD EVENING !!"
    document.getElementById("breakfast").innerText = "STOP YAWNING, GET SOME TEA. ITS JUST EVENING!"
    document.getElementById("pp").src = "cup.png"

}

if(HH >=19 && HH < 22){
    
    document.getElementById("goodmorning").innerText = "GOOD NIGHT !!"
    document.getElementById("breakfast").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementById("pp").src = "goodnight.svg"

}

if(HH >=12 && HH < 24 ){

    document.getElementById("pm").innerText = "PM"   
}


function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    document.getElementById("HH").innerText = HH;
    document.getElementById("MM").innerText = MM;
    document.getElementById("SS").innerText = SS;
    setTimeout(getTime, 1000);
}
getTime();








function excute()
{
    let select = document.getElementsByClassName("option")[0]
    let update = select.options[select.selectedIndex].innerText
    document.getElementById("update").innerText = update

    let selectb = document.getElementsByClassName("option")[1]
    let update1 = selectb.options[selectb.selectedIndex].innerText
    document.getElementById("update1").innerText = update1
     
    let selectc = document.getElementsByClassName("option")[2]
    let update2 = selectb.options[selectc.selectedIndex].innerText
    document.getElementById("update2").innerText = update2

    let selectd = document.getElementsByClassName("option")[3]
    let update3 = selectb.options[selectd.selectedIndex].innerText
    document.getElementById("update3").innerText = update3



}