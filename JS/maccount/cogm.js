document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var var6 = document.querySelector('#variable6').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var variable5 = var5 * 1;
    var alpha = variable2 + variable3 + variable4;
    var alpha2 = variable3 + variable4 + variable5 - var6;
    var alpha3 = variable2 + variable4 + variable5 - var6;
    var alpha4 = variable2 + variable3 + variable5 - var6;
    var beta = alpha - var6;
    var gamma = alpha + variable5;

    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha + variable5 - var6;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = var1 - alpha2;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = var1 - alpha3;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = var1 - alpha4;
        results.textContent = missing4
    } else if (var5 === ""){
        var missing5 = var1 - beta;
        results.textContent = missing5
    } else if (var6 === ""){
        var missing6 = gamma - var1;
        results.textContent = missing6
    }
 
});

//fix when you get back

