//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');
    var alpha = 3.141592653589793238 * 2;

    //conclude the equation 
   if (var1 === ""){
       var missing1 = alpha * var2;
       results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = var1 / alpha;
       results.textContent = missing2
   }
    
 
});


