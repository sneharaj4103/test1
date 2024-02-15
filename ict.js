function getproduct(){
    var qty=0;
    var price=0
    var prod=document.getElementById("product").value;
    console.log(prod)
    }

//     for(i=0;i<=5;i++){
//     if(prod=="tv"){
//        price+=30000
//     }
//     else if(prod=="fridge"){
//        price+=50000
//     }
//     else{
//        price+=40000
//     }
//     console.log(price)
//     }
// }
 var calculateBagTotal =()=>{
    if(prod=="tv"){
                 bagtotal+=30000
            }
            else if(prod=="fridge"){
                bagtotal+=50000
            }
            else{
                bagtotal+=40000
            }
            console.log(price)
            }
    var coupancode;
function calculateCoupon(){
    if(bagtotal>100000){
        coupancode="ADI"+bagtotal(0,3)
    }
    else{
        coupancode="ADI0000 "
    }
}
var finalamt=0
var expressdel;

function calculateFinalAmount(){
    var delivery=document.getElementById("delivery").value;

    if(delivery=expressdel){
        finalamt=bagtotal+500;
    }
    else{
        finalamt=bagtotal;
    }
}
    document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("result").innerHTML="Dear <br>Your final bill amount is <br>product will delivered on hrs<br> in voice mailed @gmail.com"
  } )
        

 