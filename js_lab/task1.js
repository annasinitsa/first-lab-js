var predictFuture = confirm("Do you want to predict your future?");
document.write ('<h2 style="font-family: Arial, Helvetica, sans-serif;">Task 1:</h2>');
document.write ("<p>In the alert window.</p>");
if(predictFuture){
    var childrenNum = prompt("Enter number of children:");
    var profession  = prompt("Enter your profession:");
    var partnerName = prompt("Enter your partner's name:");
    var country     = prompt("Enter your country:");
    
    var predictFamily = confirm("Do you want to know about your future family?");
    if(predictFamily){
        alert("You will marry " + partnerName + " and you will have " + childrenNum + " children.");
    }
    var predictCareer = confirm("Do you want to know about your future career?");
    if(predictCareer){
        alert("You will move to " + country + " to post " + profession);
    }
} else {
    alert("   :(   ");
}