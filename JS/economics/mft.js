//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');
    var variable1 = var1 * 1;
    var alpha = 1 - var2;
    var omega = variable1 + 1;

    //conclude the equation
    if(var1 === ""){
        var missing1 = var2 / alpha;
        results.textContent = missing1
    }  else if (var2 === ""){
        var missing2 = var1 / omega;
        results.textContent = missing2
    }
});


