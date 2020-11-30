function miKm(){
    var input = document.querySelector("#input-mi").value
    var result = input * 1.609
    result = result.toFixed(3)
    document.querySelector("#result-mi").innerHTML = `Result: ${input} Mi is ${result} Km.`
}
function kmMi(){
    var input = document.querySelector("#input-km").value
    var result = input / 1.609
    result = result.toFixed(3)
    document.querySelector("#result-km").innerHTML = `Result: ${input} Km is ${result} Mi.`
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