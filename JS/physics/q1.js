//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var var6 = document.querySelector('#variable6').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var alpha = var3 * var4;
    var omega = 0.5 * var5;
    var gamma = Math.pow(var6 , 2);
    var beta = omega * gamma;
    var gamma1 = alpha + beta;
    var gamma2 = variable2 + gamma1;
    var gamma4 = var1 - gamma2;
    var gamma5 = 0.5 * gamma;
    var gamma6 = gamma4 / omega;

    //conclude the equation
   if (var1 === ""){
       var missing1 = variable2 + alpha + beta;
       results.textContent = missing1 
   } else if (var2 === ""){
       var missing2 = var1 - gamma1;
       results.textContent = missing2
   } else if (var3 === ""){
       var missing3 = (var1 - gamma2) / var4;
       results.textContent = missing3
   } else if (var4 === ""){
       var missing4 = (var1 - gamma2) / var3;
       results.textContent = missing4
   } else if (var5 === ""){
       var missing5 = gamma4 / gamma5;
       results.textContent = missing5
   } else if (var6 === ""){
       var missing6 = Math.pow(gamma6 , 0.5);
       results.textContent = missing6
   }
    
});


