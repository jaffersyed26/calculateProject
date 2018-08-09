//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var alpha = 2 * var3;
    var omega = alpha * var4;
    var gamma = Math.pow(var2 , 2);
    var gamma1 = gamma + omega;
    var beta = Math.pow(var1 , 2);
    var beta1 = beta - omega;
    var beta2 =  2 * var4;
    var delta = beta - gamma;
    var delta1 = delta / beta2;
    var delta2 = delta / alpha;


    //conclude the equation
   if (var1 === ""){
       var missing1 = Math.pow(gamma1 , 0.5);
       results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = Math.pow(beta1 , 0.5);
       results.textContent = missing2;
   } else if (var3 === ""){
       var missing3 = delta1;
       results.textContent = missing3
   } else if (var4 === "") {
       var missing4 = delta2;
       results.textContent = missing4
   }
    
});


