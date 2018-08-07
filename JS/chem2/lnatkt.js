//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var omega = -1.00 * var2 * var3;
    var gamma = Math.log(var4); 
    var gamma1 = omega + gamma;
    var gamma3 = Math.exp(gamma1)
    var beta = Math.log(var1);
    var beta1 = beta - gamma;
    var alpha = beta - omega;
    
   //conclude the equation
   if(var1 === "") {
    var missing1 = gamma3;
    results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = beta1 / var3;
       results.textContent = missing2 * -1.00 ;
   } else if (var3 === ""){
       var missing3 = beta1 / var2;
       results.textContent = missing3 * -1.00;
   } else if (var4 === ""){
       var missing4 = Math.exp(alpha);
       results.textContent = missing4
   }
});



