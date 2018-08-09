//finding concentrations finding Ka * Kb = 1.00 * 10^-14
//[H3O][OH] = 1.00 * 10^-14
//button execution
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var result = document.querySelector('#result');
    var step1 = document.querySelector('#step1');
    var step2 = document.querySelector('#step2');
    var step3 = document.querySelector('#step3');
    var steps = document.querySelector('#steps');
    var steps2 = document.querySelector('#steps2');
    var steps3 = document.querySelector('#steps3');


    //conclude the equation
   if (var1 === ""){
       var missing1 = var2 / var3;
       result.textContent = missing1
       step1.innerHTML = "<h3><b>STEP 1:</b></h3>"
       steps.innerHTML = "<em>n</em><sub>A</sub> = "  + var2 + " " + "," + " " + "<em>n</em><sub><em>total</em></sub> = " + var3;
       step2.innerHTML = "<h3><b>STEP 2:</b></h3>"
       steps2.innerHTML = var2 + " / " + var3;
       step3.innerHTML = "<h3><b>STEP 3:</b></h3>"
       steps3.innerHTML = "<em>X</em><sub>A</sub> = " + missing1; 
   } else if (var2 === ""){
       var missing2 = var1 * var3;
       result.textContent = missing2
       step1.innerHTML = "<h3><b>STEP 1:</b></h3>"
       steps.innerHTML = "<em>X</em><sub>A</sub> = "  + var1 + " " + "," + " " + "<em>n</em><sub><em>total</em></sub> = " + var3;
       step2.innerHTML = "<h3><b>STEP 2:</b></h3>"
       steps2.innerHTML = var1 + " * " + var3;
       step3.innerHTML = "<h3><b>STEP 3:</b></h3>"
       steps3.innerHTML = "<em>n</em><sub>A</sub> = " + missing2; 
   } else if (var3 === ""){
       var missing3 = var2 / var1;
       result.textContent = missing3
       step1.innerHTML = "<h3><b>STEP 1:</b></h3>"
       steps.innerHTML = "<em>X</em><sub>A</sub> = "  + var1 + " " + "," + " " + "<em>n</em><sub>A</sub> = " + var2;
       step2.innerHTML = "<h3><b>STEP 2:</b></h3>"
       steps2.innerHTML = var2 + " / " + var1;
       step3.innerHTML = "<h3><b>STEP 3:</b></h3>"
       steps3.innerHTML = "<em>n</em><sub><em>total</em></sub> = " + missing3; 
   }
});


