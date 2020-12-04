function blueRed(){
    var input = document.querySelector("#input-blue").value
    var result = input - 273.15
    result = result.toFixed(2)
    document.querySelector("#result-blue").innerHTML = `Result: ${input}K is ${result}°C.`
}
function redBlue(){
    var input = document.querySelector("#input-red").value
    input = parseFloat(input)
    var result = input + 273.15
    result = result.toFixed(2);
    document.querySelector("#result-red").innerHTML = `Result: ${input}°C is ${result}K.`
}
/*
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