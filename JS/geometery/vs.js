//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');
    var alpha = 1.33333333333 * 3.141592653589793238;
    var omega = var1 / alpha;

    //conclude the equation 
   if (var1 === ""){
       var missing1 = alpha * Math.pow(var2 , 3);
       results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = Math.pow(omega , 0.33333333333);
       results.textContent = missing2
   }
 
});


