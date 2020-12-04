function blueRed(){
    var input = document.querySelector("#input-blue").value
    input = parseFloat(input)
    var result = input * 29.574
    result = result.toFixed(2)
    document.querySelector("#result-blue").innerHTML = `Result: ${input}On is ${result}Ml.`
}
function redBlue(){
    var input = document.querySelector("#input-red").value
    input = parseFloat(input)
    var result = input / 29.574
    result = result.toFixed(2);
    document.querySelector("#result-red").innerHTML = `Result: ${input}Ml is ${result}On.`
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