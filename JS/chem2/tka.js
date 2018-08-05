//finding concentrations finding Ka * Kb = 1.00 * 10^-14
//[H3O][OH] = 1.00 * 10^-14
//button execution
document.querySelector('#button').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var result = document.querySelector('#result');
    var omega = var2 * var3;
    var alpha = var1 * var3;
    var beta = var1 * var2;

    //conclude the equation
    if(var1 === "") {
        var missing1 = 1 / omega;
        result.textContent = missing1
    } else if (var2 === ""){
        var missing2 = 1 / alpha;
        result.textContent = missing2
    } else if (var3 === ""){
        var missing3 = 1 / beta;
        result.textContent = missing3
    }
});


