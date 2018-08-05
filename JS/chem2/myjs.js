//finding concentrations finding Ka * Kb = 1.00 * 10^-14
//[H3O][OH] = 1.00 * 10^-14
document.querySelector('#button').addEventListener('click', function(){
    var H3O = document.querySelector('#variable1').value;
    var OH = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');

    //conclude the equation 
    if (H3O === "") {
        //solve the h30 value
        var missingH3O = Math.pow(10 , -14) / OH;
        results.textContent = missingH3O;

    } else if (OH === "") {
        //solve the oh value
        var missingOH = Math.pow(10, -14) / H3O;
        results.textContent = missingOH;
    } 
});


