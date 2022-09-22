// PH 18-8 (advanced) Multi stage condition and nested conditions

// Nested মানে হল একটার ভিতর আরেকটা । 

var danishPrice =25;
var toastPrice=15;
var packetWell =true;

var myMoney =65;

if(danishPrice <myMoney){
    if(packetWell===true){ /*nested condition*/
        console.log('danish khabo')
    }
    else{
        console.log('khabo na ')
    }
}

