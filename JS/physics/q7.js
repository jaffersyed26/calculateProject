//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha = 2 * 3.141592653589793238;
    var beta = alpha * var2;
    var gamma = var1 * var3;


    //conclude the equation
   if (var1 === ""){
       var missing1 = beta / var3;
       results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = gamma / alpha;
       results.textContent = missing2
   } else if (var3 === ""){
       var missing3 = beta / var1;
       results.textContent = missing3
   }
    
});


