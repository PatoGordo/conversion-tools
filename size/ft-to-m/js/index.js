function ftM(){
    var input = document.querySelector("#input-ft").value
    var result = input / 3.281
    result = result.toFixed(2)
    document.querySelector("#result-ft").innerHTML = `Result: ${input} Ft is ${result} M.`
}
function mFt(){
    var input = document.querySelector("#input-m").value
    var result = input * 3.281
    result = result.toFixed(2)
    document.querySelector("#result-m").innerHTML = `Result: ${input} M is ${result} Ft.`
}
/*
function ftM(){
    var input = prompt("Ft value? ")
    var result = input / 3.281
    result = result.toFixed(2)
    alert(`Result: ${input} Ft is ${result} M.`)
}
function cmFt(){
    var input = prompt("M value?")
    var result = input * 3.281
    result = result.toFixed(2)
    alert(`Result: ${input} M is ${result} Ft.`)
}
*/