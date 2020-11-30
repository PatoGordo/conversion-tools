function ftCm(){
    var input = document.querySelector("#input-ft").value
    var result = input / 30.48
    result = result.toFixed(2)
    document.querySelector("#result-ft").innerHTML = `Result: ${input} Ft is ${result} Cm.`
}
function cmFt(){
    var input = document.querySelector("#input-cm").value
    var result = input * 30.48
    result = result.toFixed(2)
    document.querySelector("#result-cm").innerHTML = `Result: ${input} Cm is ${result} Ft.`
}
/*
function ftCm(){
    var input = prompt("Ft value? ")
    var result = input / 30.48
    result = result.toFixed(2)
    alert(`Result: ${input} Ft is ${result} Cm.`)
}
function cmFt(){
    var input = prompt("Cm value?")
    var result = input * 30.48
    result = result.toFixed(2)
    alert(`Result: ${input} Cm is ${result} Ft.`)
}
*/