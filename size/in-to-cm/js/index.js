function inCm(){
    var input = document.querySelector("#input-in").value
    var result = input * 2.54
    result = result.toFixed(2)
    document.querySelector("#result-in").innerHTML = `Result: ${input} In is ${result} Cm.`
}
function cmIn(){
    var input = document.querySelector("#input-cm").value
    var result = input / 2.54
    result = result.toFixed(2)
    document.querySelector("#result-cm").innerHTML = `Result: ${input} Cm is ${result} In.`
}
/*
function inCm(){
    var input = prompt("In value? ")
    var result = input * 2.54
    result = result.toFixed(2)
    alert(`Result: ${input} In is ${result} Cm.`)
}
function cmIn(){
    var input = prompt("Cm value?")
    var result = input / 2.54
    result = result.toFixed(2)
    alert(`Result: ${input} Cm is ${result} In.`)
}
*/