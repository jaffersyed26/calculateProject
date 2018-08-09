//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var alpha = variable2 + variable3;
    var beta = variable2 - variable3;
    var omega = beta / alpha;
    var omega1 = var1 / var4;
    var omega2 = omega1 * var3;
    var omega3 = omega1 - 1;
    var omega4 = omega2 - (-1.00 * var3);
    var omega5 = omega4 / omega3;
    var omega6 = omega1 * var2;
    var omega7 = omega6 - var2;
    var omega8 = omega1 + 1;
    var omega9 = omega7 / omega8;

    //conclude the equation
   if (var1 === ""){
        var missing1 = omega * var4;
        results.textContent = missing1
   } else if (var2 === ""){
        var missing2 = omega5;
        results.textContent = missing2 * -1.00
   } else if (var3 === ""){
        var missing3 = omega9;
        results.textContent = missing3 * -1.00
   } else if (var4 === ""){
        var missing4 = var1 / omega;
        results.textContent = missing4 
   }
    
});


