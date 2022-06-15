var numbers = [1, 12, 35, 42, 18, 20, 53];

var maxValue = Math.max.apply(null, numbers);  
var showThis = `Result: max: ${maxValue}`;

window.onload = function() {
    document.getElementById('myDiv').innerHTML = showThis;
}