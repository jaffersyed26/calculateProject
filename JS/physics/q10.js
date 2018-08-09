//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha = 4 * Math.pow(3.141592653589793238 , 2);
    var beta = 6.67 * Math.pow(10 , -11);
    var beta2 = beta * var2;
    var omega = alpha / beta2;
    var omega1 = Math.pow(var3 , 3);
    var delta = omega * omega1;
    var delta1 = Math.pow(var1 , 2 );
    var delta2 = delta1 / omega1;
    var delta3 = delta2 * beta;
    var delta4 = delta1 / omega;


    //conclude the equation
   if (var1 === ""){
        var missing1 = Math.pow(delta , 0.5);
        results.textContent = missing1
   } else if (var2 === ""){
       var missing2 = alpha / delta3;
       results.textContent = missing2
   } else if (var3 === ""){
       var missing3 = Math.pow(delta4 , 0.33333333333);
       results.textContent = missing3
   }
    
});


