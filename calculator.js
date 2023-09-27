// This function clears all the values 
// The clearScreen() function accesses the DOM using the ID of the result and clears its value by assigning it an empty string.
// You can use DOM selectors to target various components of a page.
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
//The display() function accesses the DOM using the ID of the result and appends the value of the clicked button to the result.
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
// eval() function evaluates an expression that you pass to it and returns the result of that expression.
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}