function blueRed(){
    var input = document.querySelector("#input-blue").value
    input = parseFloat(input)
    var result = ((input - 273.15) * 1.8 ) + 32
    result = result.toFixed(2)
    document.querySelector("#result-blue").innerHTML = `Result: ${input}K is ${result}°F.`
}
function redBlue(){
    var input = document.querySelector("#input-red").value
    input = parseFloat(input)
    var result = (5/9)*(input - 32) + 273.15
    result = result.toFixed(2);
    document.querySelector("#result-red").innerHTML = `Result: ${input}°F is ${result}K.`
}
/*
(0 °F − 32) × 5/9 + 273,15 = 255,372 K
(0 K − 273,15) × 9/5 + 32 = -459,7 °F
function inCm(){
    var input = prompt("Mi value? ")
    var result = input * 1.609
    result = result.toFixed(3)
    alert(`Result: ${input} Mi is ${result} Km.`)
}
function cmIn(){
    var input = prompt("Km value?")
    var result = input / 1.609
    result = result.toFixed(3)
    alert(`Result: ${input} Km is ${result} Mi.`)
}
*/