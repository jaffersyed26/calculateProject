//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');
    var omega = 0.5 * 3.141592653589793238;
    var alpha = var1 / omega;

    //conclude the equation 
    if (var1 === ""){
        var missing1 = omega * Math.pow(var2 , 2);
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = Math.pow(alpha, 0.5);
        results.textContent = missing2
    }
    
    
 
});


