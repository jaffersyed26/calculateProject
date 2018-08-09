//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value * -1.00;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var var6 = document.querySelector('#variable6').value;
    var interest = document.querySelector('#i1').value;
    var irate = interest / 100;
    var y0 = var1 / Math.pow((1 + irate) , 0);
    var y1 = var2 / Math.pow((1 + irate) , 1);
    var y2 = var3 / Math.pow((1 + irate) , 2);
    var y3 = var4 / Math.pow((1 + irate) , 3);
    var y4 = var5 / Math.pow((1 + irate) , 4);
    var y5 = var6 / Math.pow((1 + irate) , 5);
    var conclusion = y0 + y1 + y2 + y3 + y4 + y5;
    var results = document.querySelector('#result');
    results.textContent = conclusion
});

