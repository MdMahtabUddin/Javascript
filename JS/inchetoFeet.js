// PH 20-2 Unit Convert Inch to Feet, miles to kilometer

function inchetoFeet(inches){

    // 1 feet = 12 inche 
    var feet = inches/12;
    return feet;
    
}

// 100 is a inches  
var myInche= inchetoFeet(100);
console.log('Feet',myInche);

// miles to kilometer  
function milestoKm (miles){
    var kilometer = myMiles*1.60934;
    return kilometer;


}
var myMiles = 50;
var totalMiles = milestoKm(myMiles)
console.log('KM', totalMiles);

// taka to dollar

function takaToDollar(taka){

    var dolar =myTaka/93;
    return dolar;

}
var myTaka =500;
var totalDolar=takaToDollar(myTaka);
console.log('dolar', totalDolar)
