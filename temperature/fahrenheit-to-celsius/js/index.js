function fC(){
    var input = document.querySelector("#input-f").value
    var result = ((input - 32) * 5/9)
    result = result.toFixed(2)
    document.querySelector("#result-f").innerHTML = `Result: ${input}°F is ${result}°C.`
}
function cF(){
    var input = document.querySelector("#input-c").value
    var result = (9/5 * input + 32)
    result = result.toFixed(2)
    document.querySelector("#result-c").innerHTML = `Result: ${input}°C is ${result}°F.`
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