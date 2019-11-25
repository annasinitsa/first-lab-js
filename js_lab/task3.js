function Bottles () {
    var i = prompt("Number of bottles",'');
    document.write ('<style>\n')
    document.write ('p {font-family: Arial, Helvetica, sans-serif; font-size: 14pt }\n');
    document.write ('</style>\n');
    document.write ('<body>\n');
    
    document.write ('<hr><h2 style="font-family: Arial, Helvetica, sans-serif;">Task 3:</h2>');
    while ( i > 0){
        if(i > 1){
            document.write("<p>" + i + " bottles stand on the wall, one has fallen and remains</p>");
        }
        else{
            document.write("<p>" + i + " bottle stands on the wall, one has fallen and remains</p>");
        }
        i--;
    }
    document.write("<p>none :)</p>");
}
Bottles();