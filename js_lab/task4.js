var arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
    ];
var sum = 0;
var arr_eur = [];

document.write ('<hr><h2 style="font-family: Arial, Helvetica, sans-serif;">Task 4:</h2>');
for (var i = 0; i < arr.length; i++){
    if (arr[i].type === 'USD' && arr[i].value >= 100){
        sum += arr[i].value;
    }
    if (arr[i].type === 'EUR'){
        arr_eur.push(arr[i].value * 2); 
    }
}
document.write ("<p>1. Sum of all USD >= 100 is <strong>" + sum + "</strong></p>");
document.write ("<p>2. The array of EUR is :");
for (var j = 0; j < arr_eur.length; j++){
    document.write("\t" + arr_eur[j] + ";");
}
document.write("</p>");