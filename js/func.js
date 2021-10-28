
var a  , b , op = ""

//variables

var result = document.getElementById("result")
var reset = document.getElementById("reset")
var multi = document.getElementById("multi")
var add = document.getElementById("add")
var sub = document.getElementById("sub")
var div = document.getElementById("div")
var equal = document.getElementById("equal")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var zero = document.getElementById("zero")

//events
zero.onclick = function(e){result.textContent = result.textContent + "0"}
one.onclick = function(e){result.textContent = result.textContent + "1"}
two.onclick = function(e){result.textContent = result.textContent + "2"}
three.onclick = function(e){ result.textContent = result.textContent + "3"}
four.onclick = function(e){ result.textContent = result.textContent + "4"}
five.onclick = function(e){ result.textContent = result.textContent + "5"}
six.onclick = function(e){ result.textContent = result.textContent + "6"}
seven.onclick = function(e){ result.textContent = result.textContent + "7"}
eight.onclick = function(e){ result.textContent = result.textContent + "8"}
nine.onclick = function(e){ result.textContent = result.textContent + "9"}

reset.onclick = function(e){ resett()}
add.onclick = function(e){ 
    a = result.textContent
    op = "+"
    clean()
}
sub.onclick = function(e){ 
    a = result.textContent
    op = "-"
    clean()
}
multi.onclick = function(e){ 
    a = result.textContent
    op = "*"
    clean()
}
div.onclick = function(e){ 
    a = result.textContent
    op = "/"
    clean()
}

equal.onclick = function(e){ 
    b = result.textContent
    if(a != "" ){
        resolve()
    }
}



function clean(){
    result.textContent = ""
}


function resett(){
    result.textContent = ""
    a = b = 0
}

function resolve(){
    var res = 0
    a = parseFloat(a)
    b = parseFloat(b)
    switch(op){
        case "+":  res = a + b ; break;
        case "-":  res = a - b ; break;
        case "*":  res = a * b ; break;
        case "/":  res = a / b ; break;
    }
    resett()
    result.textContent = res
}