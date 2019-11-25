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
    document.write("<br>"+arr[i] + ", ");
    if (a['type'] === 'USD' && a['value'] >= 100){
        sum += a['value'];
        document.write(sum + ", ");
    }
    if (a['type'] === 'EUR'){
        arr_eur.push(a['value']*2); 
        document.write(a['value']*2 + ", ");
    }
}
document.write ("<p>1. Sum of all USD >= 100 is <strong>" + sum + "</strong></p>");
document.write ("<p>2. The array of EUR is :");
for (var b in arr_eur){
    document.write("\t" + b + ";");
}
document.write("</p>");