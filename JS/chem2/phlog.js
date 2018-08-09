//finding concentrations finding Ka * Kb = 1.00 * 10^-14
//[H3O][OH] = 1.00 * 10^-14
//button execution
document.querySelector('#button1').addEventListener('click', function(){
    var PH = document.querySelector('#ph').value;
    var concentrations = document.querySelector('#concentration').value;
    var result = document.querySelector('#resultphlog');

    //conclude the equation
    if(PH === "") {
        //missing PH 
        var missingPH = Math.log10(concentrations);
        result.textContent = missingPH * -1.00
     } else if (concentrations === ""){
        var missingConcentration = Math.pow(10 , -1.00 * PH);
        result.textContent = missingConcentration
    }
});


