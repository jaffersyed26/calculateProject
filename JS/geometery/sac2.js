//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha1 = -1.00 * var2;
    var alpha2 = alpha1 * 3.141592653589793238;
    var alpha3 = var2 * 3.141592653589793238;
    var alpha4 = Math.pow(alpha3 , 2);
    var alpha5 = -1.00 * var1;
    var alpha6 = 4 * 3.141592653589793238 * alpha5;
    var alpha7 = alpha4 - alpha6;
    var alpha = Math.pow(alpha7 , 0.5);
    var beta = 2 * 3.141592653589793238;
    var omega1 = 3.141592653589793238 * var3;
    var omega2 = 3.141592653589793238 * Math.pow(var3 , 2);
    var omega4 = var1 - omega2;
    var omega5 = omega4 / omega1;


    //conclude the equation
    if (var1 === ""){
        var missing1 = (alpha3 * var3) + (3.141592653589793238 * Math.pow(var3 , 2));
        results.textContent = missing1
    } else if (var2 === ""){
       var missing2 = omega5;
       results.textContent = missing2
    } else if (var3 === ""){
       var missing31 = (alpha2 + alpha) / beta;
       var missing32 = (alpha2 - alpha) / beta;
       results.textContent = missing31 + ' , ' + missing32
    }

    
    
 
});


