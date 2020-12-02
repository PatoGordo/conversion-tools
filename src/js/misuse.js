document.addEventListener("DOMContentLoaded", ()=>{
    var name, productorservice, email, message
    
    function Vars(){
        name = document.querySelector("#name").value
        productorservice = document.querySelector("#productorservice").value
        email = document.querySelector("#email").value
        message = document.querySelector("#message").value
    }
    function UniqId(){
        var randLetter = String.fromCharCode(75 + Math.floor(Math.random() * 36));
        var uniqid = randLetter + Date.now();
        return uniqid
    }
    function Clear(){
        document.querySelector("#name").value = ''
        document.querySelector("#productorservice").value = ''
        document.querySelector("#email").value = ''
        document.querySelector("#message").value = ''
    }
    var db = firebase.database()
    document.querySelector("#form-send").addEventListener("submit", (e)=>{
        e.preventDefault();
        Vars()
            db.ref('Misuse/'+name+ ' ' +UniqId()).set({
                name: name,
                product_or_service: productorservice,
                email: email,
                message: message
            })
            .then(()=>{
                alert("Message has been submitted!! ;)")
            }).catch((error) => {
                alert("Error to submit this message!! :( error code: "+ error.message)
            })
        Clear()
    })
})