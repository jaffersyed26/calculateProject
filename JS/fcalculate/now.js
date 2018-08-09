//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var variable1 = var1 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var alpha = var2 - var3;
    var gamma = var4 - var5;
    var alpha1 = variable1 + gamma;
    var alpha2 = alpha1 + variable3;
    var alpha3 = alpha1 - var2;
    var gamma1 = var1 - alpha;

     //conclude the equation 
     if (var1 === ""){
         var missing1 = alpha - gamma;
         results.textContent = missing1
     } else if (var2 === ""){
         var missing2 = alpha2;
         results.textContent = missing2;
     } else if (var3 === ""){
         var missing3 = alpha3;
         results.textContent = missing3 * -1.00;
     } else if (var4 === ""){
         var missing4 = gamma1 - var5;
         results.textContent = missing4 * -1.00
     } else if (var5 === ""){
         var missing5 = gamma1 + variable4;
         results.textContent = missing5

     }
});

