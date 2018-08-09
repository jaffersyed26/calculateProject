//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var variable3 = var3 * 1;
    var variable2 = var2 * 1;
    var alpha = variable2 + variable3;


    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = var1 - var3;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = var1 - var2;
        results.textContent = missing3
    }
 
});


