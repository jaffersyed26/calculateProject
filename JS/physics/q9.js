//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var beta = 6.67 * Math.pow(10 , -11);
    var alpha = beta * var2 * var3;
    var gamma = Math.pow(var4 , 2);
    var omega = var1 * gamma;
    var omega1 = beta * var3;
    var omega2 = beta * var2;
    var omega3 = alpha / var1;

    //conclude the equation
   if (var1 === ""){
        var missing1 = alpha / gamma;
        results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = omega / omega1;
       results.textContent = missing2
   } else if (var3 === ""){
       var missing3 = omega / omega2;
       results.textContent = missing3
   } else if (var4 === ""){
       var missing4 = Math.pow(omega3 , 0.5);
       results.textContent = missing4  
   }
    
});


