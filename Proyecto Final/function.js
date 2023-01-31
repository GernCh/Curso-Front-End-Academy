document.getElementById('SAT').onmouseover = function ()  {
    console.log("catura mouse over");
    document.getElementById("grade").innerHTML = "8.31";
}
document.getElementById('SAT2').onmouseover = function ()  {
    console.log("catura mouse over");
    document.getElementById("grade2").innerHTML = "9.01";
}
document.getElementById('SAT3').onmouseover = function ()  {
    console.log("catura mouse over");
    document.getElementById("grade3").innerHTML = "8.94";
}

document.getElementById('SAT').onmouseout = function ()  {
    console.log("catura mouse out");
    document.getElementById("grade").innerHTML = "SAT";  
}
document.getElementById('SAT2').onmouseout = function ()  {
    console.log("catura mouse out");
    document.getElementById("grade2").innerHTML = "SAT";
    
}
document.getElementById('SAT3').onmouseout = function ()  {
    console.log("catura mouse out");
    document.getElementById("grade3").innerHTML = "SAT";
    
}